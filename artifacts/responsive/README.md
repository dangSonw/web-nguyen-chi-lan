# Chi Lan subpage responsive review — 2026-10-24

Scope: all nine subpages, shared navigation, video launch controls and production targets. Homepage changes belong to the separate resume task.

## Fixed

- Photography and Dance & Performance titles clipped at 320–390 px. Titles now scale or wrap at complete words.
- Body copy was 13.5 px on phones; paragraphs now have a 16 px floor and 1.5 line height. Captions have a 14 px floor.
- Navigation hit areas were 15.75 px high. They are now at least 44 px; gallery back/tab controls and portrait arrows also have adequate targets and visible keyboard focus.
- The mobile Art cutout was attached to the entire artworks section, which placed it over the final painting. It now belongs to the balloon photograph and retains its desktop position.
- Video posters now use a native button so Enter/Space can start an embedded video.
- Production JavaScript and CSS explicitly target Chrome 90. New CSS uses established Grid/Flex, media queries, transform/opacity and supported sizing features. No modern browser-only API was introduced. Framer Motion, motion-dom and React Router source scans found no use of Array.at, findLast, toSorted, structuredClone or Promise.withResolvers in the scanned runtime modules.

## Evidence

- `subpage-results.json`: 72 route/viewport checks, zero clipping/overflow, missing images or JavaScript errors. Nine routes at 320×568, 390×844, 844×390, 768×1024, 1024×768, 1440×900, 1920×1080 and 3440×1440.
- `subpage-interactions-results.json`: 48 checks. Four affected routes at 600, 601, 720, 800, 880, 881, 1080, 2560 and 3840 px widths; three galleries' next/back navigation, portrait shoot switching and keyboard video launch at 320 and 1440 px; Art cutout placement and reduced-motion behavior.
- Screenshots named `subpage--*-320.png`, `subpage--*-1440.png` and `art-balloon-mobile.png` were inspected for composition.
- `npm run build`, `node --check` on configuration/check scripts, and `git diff --check` pass.

Browser: installed Chrome 156.0.8078.48 through Playwright. These are emulated viewport and keyboard/pointer checks, not physical-device tests or an actual Chrome 90 execution. Configuring an older build target is not proof of full older-browser runtime coverage. YouTube player insertion was verified; remote video playback was not asserted.
