import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { LANGUAGES } from '../i18n.js';

const home = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('homepage follows the approved two-layer index order', () => {
  const ids = ['about', 'experience', 'projects', 'edu', 'outside-work', 'contact'];
  let cursor = home.indexOf('id="top"');
  for (const id of ids) {
    const next = home.indexOf(`id="${id}"`);
    assert.ok(next > cursor, `${id} is out of order`);
    cursor = next;
  }
  assert.doesNotMatch(home, /id="campus-music"|id="visual-work"/);
});

test('the merged introduction uses the approved identity and keeps tool details in Education', () => {
  const intro = home.match(/<header class="hero"[^>]*>[\s\S]*?<\/header>/)?.[0] ?? '';
  assert.match(intro, /<h1 id="hero-title">Mukun Sun<\/h1>/);
  assert.match(intro, /<p class="role">Marketing &amp; Communication<\/p>/);
  assert.match(intro, /I create social content, coordinate campaigns and turn audience research into practical recommendations\./);
  assert.doesNotMatch(intro, /Python|Google Analytics|class="hero-foot"/);
  assert.match(home, /<section[^>]+id="edu"[^>]*>[\s\S]*?<p class="edu-focus edu-tools">I use Python/);
  assert.doesNotMatch(home, /capability-ledger|capability-row|<h3>Workflow<\/h3>/);
  assert.equal(LANGUAGES.zh.copy['.hero .role'], '营销传播');
  assert.doesNotMatch(LANGUAGES.zh.copy['.hero-description'], /社区运营/);
});

test('homepage name uses a restrained display scale', () => {
  const rule = home.match(/\.hero h1\s*\{[^}]*font-size:\s*clamp\((\d+)px,\s*([\d.]+)vw,\s*(\d+)px\);/);
  assert.ok(rule, 'homepage hero title scale');
  assert.ok(Number(rule[2]) < 12, 'viewport scale stays below poster-like sizing');
  assert.ok(Number(rule[3]) <= 136, 'desktop title remains understated');
});

test('homepage exposes four second-layer work routes', () => {
  for (const href of [
    'projects/microloud.html',
    'projects/campus-campaign.html',
    'projects/hotel-jazz.html',
    'projects/visual-work.html',
  ]) assert.match(home, new RegExp(`href="${href}"`));
  assert.equal((home.match(/class="project-row/g) ?? []).length, 4);
  assert.doesNotMatch(home, /<details class="project-row/);
});

test('Outside Work remains one asymmetric composition with three direct route links', () => {
  assert.match(home, /<section[^>]+id="outside-work"/);
  for (const href of [
    'music.html',
    'photography.html',
    'travel.html',
  ]) assert.match(home, new RegExp(`href="${href}"`));
  for (const label of ['Music', 'Photography', 'Travel']) assert.match(home, new RegExp(label));
  assert.doesNotMatch(home, /<a class="outside-gateway"[^>]*>[\s\S]*?<div class="outside-grid">/);
  assert.doesNotMatch(home, /outside-work\.html#outside-|class="outside-action"/);
});

test('contact is neutral rather than a campaign sales pitch', () => {
  assert.match(home, /Get in touch\./);
  assert.match(home, /Open to 2027 graduate opportunities across the U\.S\. Reach me by email or LinkedIn\./);
  assert.doesNotMatch(home, /Let.{0,3}s make the next campaign/);
});
