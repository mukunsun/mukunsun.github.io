import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const pages = [
  ['index.html', 'https://mukunsun.com/'],
  ['music.html', 'https://mukunsun.com/music.html'],
  ['photography.html', 'https://mukunsun.com/photography.html'],
  ['travel.html', 'https://mukunsun.com/travel.html'],
  ['projects/campus-campaign.html', 'https://mukunsun.com/projects/campus-campaign.html'],
  ['projects/hotel-jazz.html', 'https://mukunsun.com/projects/hotel-jazz.html'],
  ['projects/suu-teaching-assistant.html', 'https://mukunsun.com/projects/suu-teaching-assistant.html'],
  ['projects/vertex-reddit.html', 'https://mukunsun.com/projects/vertex-reddit.html'],
  ['projects/visual-work.html', 'https://mukunsun.com/projects/visual-work.html'],
  ['projects/xinyuyou.html', 'https://mukunsun.com/projects/xinyuyou.html'],
];

test('GitHub Pages publishes the purchased apex domain', async () => {
  const cname = await readFile(new URL('../CNAME', import.meta.url), 'utf8').catch(() => '');
  assert.equal(cname.trim(), 'mukunsun.com');
});

test('every public page declares the custom-domain canonical URL', async () => {
  for (const [path, canonical] of pages) {
    const html = await readFile(new URL(`../${path}`, import.meta.url), 'utf8');
    assert.ok(
      html.includes(`<link rel="canonical" href="${canonical}">`),
      `${path}: canonical URL`,
    );
    assert.doesNotMatch(html, /https:\/\/mukunsun\.github\.io/, `${path}: default-domain SEO URL`);
  }
});

test('homepage social previews use the custom domain', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /property="og:url" content="https:\/\/mukunsun\.com\/"/);
  assert.match(html, /property="og:image" content="https:\/\/mukunsun\.com\/assets\/og-card\.jpg"/);
  assert.match(html, /name="twitter:image" content="https:\/\/mukunsun\.com\/assets\/og-card\.jpg"/);
});
