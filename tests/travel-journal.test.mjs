import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { LANGUAGES } from '../i18n.js';
import { mountTravelIndex } from '../assets/travel/journal.js';

const root = new URL('../', import.meta.url);
const travel = await readFile(new URL('travel.html', root), 'utf8');
const placeIds = ['new-york', 'seoul', 'hong-kong', 'los-angeles', 'salt-lake-city', 'bryce-canyon', 'kanab'];

test('Travel contains seven complete bilingual places and keeps Photography separate', () => {
  for (const id of placeIds) {
    assert.ok(travel.includes(`id="travel-${id}"`));
    assert.ok(travel.includes(`href="#travel-${id}"`));
    for (const language of ['en', 'zh']) {
      assert.ok(LANGUAGES[language].copy[`#travel-${id}-title`]);
      assert.ok(LANGUAGES[language].copy[`#travel-${id} .travel-observation`]);
    }
  }
  assert.equal((travel.match(/data-travel-place>/g) ?? []).length, 7);
  assert.doesNotMatch(travel, /assets\/photography\/|assets\/new_travel\/|Continuously updating|TODO/);
  assert.ok(travel.includes('href="photography.html"'));
});

test('every published photo has real responsive sources, stable dimensions, and an optimized full-image link', async () => {
  const images = [...travel.matchAll(/<img\s+([^>]*\bsrc="([^"]+)"[^>]*)>/g)];
  assert.equal(images.length, 25);
  const files = new Set();
  for (const [, attributes, src] of images) {
    assert.match(attributes, /\bwidth="\d+"/);
    assert.match(attributes, /\bheight="\d+"/);
    assert.match(attributes, /\balt="[^\"]+"/);
    assert.match(attributes, /\bsizes="[^\"]+"/);
    const sources = attributes.match(/srcset="([^"]+)"/)?.[1].split(',').map((item) => item.trim().split(/\s+/)[0]);
    assert.equal(sources?.length, 3);
    sources.forEach((file) => files.add(file));
    assert.ok(sources.includes(src));
  }
  assert.equal((travel.match(/loading="lazy"/g) ?? []).length, 24);
  assert.equal((travel.match(/fetchpriority="high"/g) ?? []).length, 1);
  for (const file of files) {
    assert.match(file, /^assets\/travel\/journal\/.+\.webp$/);
    assert.ok((await stat(new URL(file, root))).size < 600_000, `${file}: image must stay bounded`);
    const provenance = await readFile(new URL(`${file}.json`, root), 'utf8');
    assert.match(provenance, /User-provided photograph/);
  }
  assert.equal(files.size, 75);
  assert.equal((travel.match(/href="assets\/travel\/journal\/[^\"]+-1800\.webp" data-enlarge/g) ?? []).length, 25);
});

function indexFixture({ observers = true } = {}) {
  const selected = [];
  const focus = [];
  const history = [];
  const anchors = placeIds.map((id) => ({
    hash: `#travel-${id}`, current: null,
    setAttribute(name, value) { if (name === 'aria-current') this.current = value; },
    removeAttribute(name) { if (name === 'aria-current') this.current = null; },
  }));
  const places = placeIds.map((id) => ({
    id: `travel-${id}`,
    hasAttribute: (name) => name === 'data-travel-place',
    scrollIntoView: (options) => selected.push(options),
    querySelector: (selector) => selector === 'h2' ? {
      setAttribute(name, value) { assert.equal(name, 'tabindex'); assert.equal(value, '-1'); },
      focus: (options) => focus.push({ id: `travel-${id}-title`, options }),
    } : null,
    getBoundingClientRect: () => ({ top: 160 }),
  }));
  let onChange;
  let onLanguage;
  const select = { value: '', addEventListener(name, callback) { if (name === 'change') onChange = callback; } };
  const index = { querySelectorAll: () => anchors, classList: { add() {} } };
  const doc = {
    documentElement: {},
    querySelector: () => index,
    querySelectorAll: () => places,
    getElementById: (id) => id === 'travel-place-select' ? select : places.find((p) => p.id === id),
  };
  const view = {
    history: { replaceState(_state, _title, hash) { history.push(hash); } },
    MutationObserver: class { constructor(callback) { onLanguage = callback; } observe() {} },
  };
  if (observers) view.IntersectionObserver = class { observe() {} };
  mountTravelIndex(doc, view);
  return { select, anchors, selected, focus, history, change: () => onChange(), language: () => onLanguage() };
}

test('mobile place selection navigates, focuses the heading, and survives translated options', () => {
  const page = indexFixture();
  page.select.value = 'travel-seoul';
  page.change();
  assert.equal(page.history.at(-1), '#travel-seoul');
  assert.equal(page.selected.length, 1);
  assert.equal(page.focus.length, 1);
  assert.equal(page.focus[0].id, 'travel-seoul-title');
  assert.deepEqual(page.focus[0].options, { preventScroll: true });
  assert.equal(page.anchors[1].current, 'location');
  page.select.value = '';
  page.language();
  assert.equal(page.select.value, 'travel-seoul');
});

test('place selection remains usable without IntersectionObserver and ignores unknown targets', () => {
  const page = indexFixture({ observers: false });
  page.select.value = 'missing';
  page.change();
  assert.equal(page.history.length, 0);
  page.select.value = 'travel-kanab';
  page.change();
  assert.equal(page.history.at(-1), '#travel-kanab');
});
