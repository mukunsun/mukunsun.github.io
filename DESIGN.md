# Design

## Locked Professional Personal Contract (2026-07-29)

This is an **English-first** professional and personal website. English owns the default document language, metadata, and navigation; Chinese is a complete user-selected translation that never competes with the default entry path.

The approved homepage order is **about → experience → projects → education → outside work → contact**. The first layer is designed for fast scanning, with a deliberate **60/40 positioning** between professional evidence and personal context. The homepage stays concise while the second layer carries depth.

### Information architecture

- Experience gives each entry a company and role; completed entries add responsibility, evidence, and a link to the relevant record.
- Projects are four editorial links. Microloud leads with an explicit in-development status and a text-only preview; campus, hotel and visual work retain their approved images. The second-layer routes are `projects/microloud.html`, `projects/campus-campaign.html`, `projects/hotel-jazz.html`, and `projects/visual-work.html`.
- Education presents one verified SUU entry, April 2027 graduation, Business Analytics minor, SUU GPA and four current course names. No unverified enrollment start date or future-course claims.
- The **asymmetric Outside Work** gateway uses one large Music track and a filled supporting column for Photography and Places, with one route to `outside-work.html`.
- Contact is neutral and limited to email and LinkedIn.

## Theme and tokens

The authored visual baseline remains **Gallery in the Dark**: warm black surfaces, bone-white text, restrained ember accents, film grain, fine rules, and a subtle pointer spotlight. The complementary light system remains preserved in the local source but is temporarily unavailable on the public site. Public routes force dark mode, ignore stored light preferences without erasing them, and expose no theme switch. English remains the first-visit language fallback.

Shared color, effect, type, spacing, motion, and width values come from `tokens.css`; render CSS does not introduce route-local palettes or raw color values. Layout, content, language, and motion contracts stay identical between themes, while navigation translucency, media treatment, overlays, dialog backdrops, and ambient effects consume theme-aware semantic tokens.

The accent is reserved for focus, evidence numbers, and a small number of interaction cues. Contrast remains functional at small sizes. Fragment Mono is limited to the navigation wordmark register and the compact evidence-number register.

## Layout

The main content width is approximately 1240px, with fluid gutters and section spacing. Wide screens use intentionally uneven tracks for About, Experience, teaching media, project links, and Outside Work. The **wide-screen balance rule** is that every track uses `minmax(0, …)` plus a bounded media/supporting column so no accidental right-side void appears at large widths.

At `60rem` and below, all asymmetric homepage tracks collapse to one column. Compact navigation replaces the full navigation at the same breakpoint and remains available for coarse pointers. Primary touch targets are at least 44px, and headings and grid children are protected from horizontal overflow.

All full-image previews are **natural-ratio media** with intrinsic width and height attributes and `height:auto`; project and outside-work images are not forced into equal-card crops. The portrait keeps its authored framing and subtle parallax treatment.

The Music and Photography routes use image-integrated editorial heroes. Music owns a performance photograph and Photography owns `the_strip`. Theme-aware layered scrims protect the type without flattening the image; mobile views use intentional focal positions. Photography thumbnails use consistent 4:3 landscape and 3:4 portrait frames, while the enlarge dialog always presents the full natural-ratio source. The `Photography` hero title remains on one line at supported widths.

Navigation uses one restrained frosted material across the homepage and detail routes: a theme-aware soft page-color surface, 12px localized blur, modest backdrop saturation, and a fine lower rule. Image-led heroes use a lighter 36% top protection scrim so the photograph remains visible through the glass. The scrolled state switches to the denser theme surface without adding a shadow or another visual layer.

Outside Work exposure follows the photograph rather than a uniform preset. Photography remains dark and atmospheric. Music uses a moderately brighter performance treatment. Travel uses a separate compact title band above an untreated Bryce Canyon bench photograph, with a wide desktop crop and a 4:3 mobile crop. The homepage Travel gateway continues to use its existing Bryce Canyon asset.

The Photography gallery is a route-specific full-width composition. Its title and short introduction share one horizontal ruled band; the image sequence begins below at the full content width. Landscapes span the row, portraits use two equal columns, and all media collapses to one column on small screens.

## Motion

The **dark-gallery motion** keeps hero entrance choreography, observer-driven section reveals, linear marquee movement, portrait parallax, pointer spotlight, and transform-based progress. Film grain is a static texture. The spotlight uses a fixed 840px raster area moved by transform, so pointer movement does not repaint a viewport-sized gradient. Revealed content releases permanent layer hints and identity transforms. Scroll work is batched into animation frames, with document-height reads and progress updates skipped when the progress indicator is disabled. Project links use a restrained underline reveal; media remains legible without hover.

The document starts with `no-js`, so content is visible without JavaScript. When IntersectionObserver is unavailable, all reveal content is exposed immediately. `prefers-reduced-motion: reduce`, narrow screens, and coarse pointers suppress spatial transforms, parallax, spotlight, marquee motion, and nonessential transitions while keeping all content visible.

## Component contracts

- **Homepage hero (2026-10-26):** text-only introduction with name, professional focus, short description, portfolio/experience actions and current-role footer. The user removed the October poster because it did not fit the overall style. The two-column wrapper and poster-only styles/translations are removed; a bounded single text column carries the first viewport. The design series remains in the visual-work gallery.
- **Experience summary:** three rows in reverse chronology: SUU Tutoring Center Lead Marketing and Media, Vertex ending August 2026, and YUYO. SUU shows the September-October account snapshot (55K views, 2.1K interactions) and survey analysis; Vertex shows 793K views, 3,548 upvotes and the 406K top post; YUYO shows 476 creators contacted, 45 collaborations and 8 paid partnerships. Existing natural-ratio media and the YUYO branded placeholder remain. TA is no longer a primary homepage entry.
- **Tutoring Center detail:** official Lead Marketing and Media title; Overview, What I do, September-October snapshot, Tools, Gallery and Key learnings. Four current metric cards show 55K views, 21K reach, 2.1K interactions and approximately 80% non-follower views. A separate collapsed historical snapshot retains September 1-28 totals and its platform split. Account totals do not become personal causal uplift or bookings. Duties retain staff approval before publishing and add the 300+ response student portal survey. The existing four screenshot reserves remain labeled and collapsed. The shared compact navigation and 96px anchor offset remain.
- **Teaching Assistant detail:** a concise bilingual internship route with role and context, classroom support, course operations, and two supplied classroom images. It uses verified facts only and avoids an evidence-report voice.
- **Project index:** four linked editorial rows, stable class-based translation selectors, and route actions at an 11px minimum. Microloud has no fabricated product screenshot.
- **Microloud detail:** image-free bilingual page explaining the artist-budget problem, current positioning/channel/content work and a measurement plan. Status is in development; there are no invented users, acquisition results or finished AI features. Mobile navigation uses the shared compact menu with a 96px anchor offset.
- **Education ledger:** one SUU entry, graduation date only; actual Python/R/Excel capabilities appear in About rather than inflating the course list.
- **Outside Work gateway:** three unequal entries in one link, with Music dominant, Photography supportive, and Places text-led.
- **Travel journal:** 25 photographs across one cover and seven place chapters, with short observations and captions. A sticky desktop text index becomes a native place selector on mobile. Chapter images retain intrinsic natural ratios, and native enlargement shows the full image. English-first copy, captions, alt text, and controls have complete Chinese translations. The original place ledger stays collapsed at the bottom. Responsive WebPs provide 480px, 960px, and 1800px sources, with chapter images loaded lazily. The route inherits the existing gallery fonts and shared tokens without adding a palette.
- **Compact navigation:** four first-layer destinations—About, Work, Outside Work, and Contact—with separate language controls.
- **Contact:** “Get in touch.”, one neutral availability sentence, and direct email/LinkedIn actions.

- **Bilingual repeated copy:** one translation selector may own multiple matching nodes; language application updates every match, so repeated actions such as both internship links remain synchronized.

Avoid decorative side rails, gradient text, generic glass cards, equal-size icon-card grids, repeated navigation labels inside every section, fabricated imagery, and text overflow.

English prose uses half-width punctuation and straight quotation marks. Chinese prose uses full-width punctuation with `“……”` and `‘……’` where quotation marks are required.
