import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { LANGUAGES } from '../i18n.js';

const page = await readFile(new URL('../projects/suu-tutoring-center.html', import.meta.url), 'utf8');

test('tutoring role preserves the requested section order and staff approval workflow', () => {
  const sections = ['hero', 'overview', 'responsibilities', 'results', 'tools', 'gallery', 'learnings'];
  let previous = -1;
  for (const section of sections) {
    const index = page.indexOf(`id="tutoring-${section}"`);
    assert.ok(index > previous, section);
    previous = index;
  }
  for (const language of ['en', 'zh']) {
    const copy = LANGUAGES[language].copy;
    assert.match(copy['#tutoring-overview'], /20/);
    assert.match(copy['#tutoring-responsibilities'], /Canva[\s\S]*CapCut[\s\S]*Meta Business Suite[\s\S]*Meta Insights/);
    assert.match(copy['#tutoring-responsibilities'], language === 'en' ? /publish only after approval/ : /获批后才发布/);
  }
});

test('September metrics preserve account totals, comparison rates and reporting window in both languages', () => {
  assert.equal(19411 + 870, 20281);
  for (const language of ['en', 'zh']) {
    const results = LANGUAGES[language].copy['#tutoring-results'];
    for (const fact of ['20.3K', '9K', '772', '77.3%', '77.4%', '39', '69.6%', '19,411', '870', '20,281', '1–28', '2026']) assert.ok(results.includes(fact), `${language}: ${fact}`);
    assert.equal((results.match(/class="metric-number"/g) ?? []).length, 5);
    assert.doesNotMatch(results, /conversion|bookings|appointments|预约量/i);
  }
});

test('four screenshot slots are explicit placeholders, not fake images or interactive controls', () => {
  for (const language of ['en', 'zh']) {
    const gallery = LANGUAGES[language].copy['#tutoring-gallery'];
    assert.equal((gallery.match(/TODO: replace with screenshot/g) ?? []).length, 4);
    const slots = gallery.match(/<details class="screenshot-reserve">[\s\S]*?<\/details>/)?.[0] ?? "";
    assert.ok(slots);
    assert.doesNotMatch(slots, /<img|<button|data-enlarge/);
    assert.match(gallery, /Design original|设计原稿/);
    assert.match(gallery, /visual-work.html#visual-tutoring-work/);
  }
  assert.equal((page.match(/TODO: replace with screenshot/g) ?? []).length, 4);
});
