import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { mountMotion } from './helpers/motion-runtime.mjs';

const routes = await Promise.all(['index.html', 'projects/vertex-reddit.html', 'detail.js'].map(async (name) => [
  name, await readFile(new URL(`../${name}`, import.meta.url), 'utf8'),
]));

test('scroll bursts batch progress work into one frame across all page shells', () => {
  for (const [name, source] of routes) {
    const page = mountMotion(source);
    page.reset();
    page.scroll();
    assert.equal(page.counts.progressWrites, 0, `${name}: work should wait for the next frame`);
    page.flush();
    assert.equal(page.counts.heightReads, 1, `${name}: read document height once per frame`);
    assert.equal(page.counts.progressWrites, 1, `${name}: update progress once per frame`);
    assert.equal(page.transform, 'scaleX(0.25)', `${name}: progress remains accurate`);
  }
});

test('mobile scrolling updates navigation without measuring or writing hidden progress', () => {
  for (const [name, source] of routes) {
    const page = mountMotion(source, { mobile: true });
    page.reset();
    page.scroll();
    page.flush();
    assert.equal(page.counts.heightReads, 0, `${name}: hidden progress needs no layout read`);
    assert.equal(page.counts.progressWrites, 0, `${name}: hidden progress needs no style write`);
    assert.equal(page.nav.classList.contains('solid'), true, `${name}: navigation still responds`);
  }
});

test('desktop progress stays bounded at both ends of the document', () => {
  for (const [name, source] of routes) {
    const page = mountMotion(source);
    page.scroll(1, 5000);
    page.flush();
    assert.equal(page.transform, 'scaleX(1)', name);
    page.scroll(1, -100);
    page.flush();
    assert.equal(page.transform, 'scaleX(0)', name);
  }
});

test('pointer spotlight finishes interpolation instead of leaving a perpetual frame loop', () => {
  const page = mountMotion(routes[0][1]);
  page.pointer(1000, 600);
  assert.ok(page.flush() < 100);
  assert.equal(page.flush(), 0, 'an idle pointer schedules no further animation');
});
