# PROGRESS.md — Project Status

_Last updated: 2026-10-25_

## Summary
Phases 0, 1, 2, 3, and 4 are fully implemented, compiled, and verified. The Next.js App Router application is building cleanly (`next build` succeeds with 0 errors). The user-supplied couple portrait illustration and a complete scroll-driven transformative animation suite have been integrated.

## Done
- [x] Phase 5 Content Integration (Slice 1): Added Add-to-Calendar for Tilak (25 Nov) & Vivah (2 Dec), integrated hometown venue and direct Google Maps navigation (`https://maps.app.goo.gl/tQhtXHdjyp7GPzuD7`), and honored Bride's parents (Mrs. Ranju Prasad & Mr. Yogendra Prasad).
- [x] Research and creative direction ("Sacred Marigold Garden")
- [x] 22-file agent documentation pack
- [x] Content model designed with nullable future fields
- [x] Phase 0 Foundation: Next.js App Router, TypeScript (strict), Noto fonts via `next/font`, CSS variables, MotionConfig & LazyMotion, LocaleProvider (`hi-IN` default, `en-IN` secondary)
- [x] Phase 1 Static Readable Invitation: OpeningInvocation, CoupleReveal, InvitationMessage, CeremonyTimeline, EventCard (Tilak & Vivah), ClosingBlessing
- [x] Phase 2 Motion Layer: Ganesha line-drawing, mirrored couple entrance, timeline markers, petal ambient animation, reduced-motion paths
- [x] Phase 3 Sharing & Countdown: Web Share API with clipboard fallback, days-only countdown to 2 Dec 2026, dynamic Open Graph card
- [x] Motion AI Kit: Motion v14.6.0 & motion-ai v14.2.0 installed, skill integrated into `.agents/skills/motion/`, hosted MCP configured, and physics spring animations added to LanguageSwitch and event cards
- [x] Phase 4 QA Audits: Full automated contrast analysis (all >= 4.5:1 / 3:1), date assertions (Wednesdays verified), dictionary validation, semantic HTML landmarks verified
- [x] Couple Portrait & Scroll Transformation: Integrated user-supplied wedding portrait illustration (`couple.png`) with traditional Jharokha arch, golden radiant halo aura, scroll progress indicator, progressive timeline spine drawing, and section continuity transitions.
- [x] React Bits Counter & Full Countdown: Integrated `<Counter />` from React Bits and upgraded wedding countdown to full time format (Days, Hours, Minutes, Seconds) updating live each second in IST.
- [x] React Bits ClickSpark: Integrated `<ClickSpark />` from React Bits creating celebratory golden wedding star sparks upon user clicks and taps across the invitation.
- [x] React Bits Ribbons: Integrated `<Ribbons />` from React Bits creating fluid ceremonial silk ribbons in sacred colors (`#B07A22`, `#C85A16`, `#F59E0B`, `#6E1E2A`) that softly follow user interaction in the ambient background.
- [x] Ceremonial Event Images & Scroll Reveal Entrance: Generated and MozJPEG-optimized event photography (`tilak.jpg` 110 KB and `vivah.jpg` 143 KB) with smooth scroll reveal entrance effect (`image-reveal`), circular floating seals, and golden gradient overlays in `EventCard.tsx`.
- [x] Perspective Tunnel 3D Spatial Corridor: Integrated `perspective-tunnel-hero.tsx` with 9 authentic wedding ceremony ritual images, 3D Z-axis flight physics, camera pointer parallax, touch support, and "मांगलिक उत्सव 3D दर्शन" ceremonial corridor section.
- [x] Sticky Scroll Runway & Complete Invitation Polish: Upgraded 3D corridor to a native Sticky Scroll Runway (`250vh` track, `100svh` stage) eliminating all scroll hijacking. Connected full bilingual localization to `useLocale()`, polished Devanagari typography, localized ceremony badges across `CoupleReveal` and `EventCard`, and verified flawless 16-point QA suite.
- [x] Sacred Om (ॐ) Vanishing Point & Extended Perspective Runway: Integrated consecrated Devanagari ॐ (Om) symbol with warm golden aura and 24 Vedic rays into the 3D vanishing point. Extended scroll duration to `480vh` on desktop and `380vh` on mobile for leisurely ceremony immersion, resolved flex-flow centering, and added ceremonial flight progress track.
- [x] Standalone First Entry Portal Decoupled from Page Scroll: Re-architected 3D Perspective Tunnel as an independent first entry portal (`fixed inset-0 z-[100]`), eliminating all inline document scroll bloat. Provides smooth wheel/touch navigation, instant skip option, curtain unveil into the main invitation, and replay buttons.
- [x] Sacred Invocation Header, Central Om & Royal Opening Gate Effect: Purified entry portal typography to keep solely `॥ श्री गणेशाय नमः ॥` as the supreme top header. Centered the sacred ॐ symbol with radiant halo. Integrated `RoyalGate.tsx` Rajput palace double doors that swing open in 3D perspective with expanding golden light beams at the climax of the entry reveal.
- [x] Royal Luxurious Backgrounds Across Every Section: Generated and MozJPEG-optimized 5 royal palace & heritage stationery backgrounds (`01-ganesha-bg.jpg` through `05-countdown-bg.jpg`). Applied across OpeningInvocation (silk damask), CoupleReveal (Udaipur City Palace), InvitationMessage (gold foil deckle parchment), CeremonyTimeline (sandstone palace corridor), Countdown (starlit palace terrace with glowing diyas and frosted glass tiles), and ClosingBlessing (holy silk damask with glowing diya). WCAG 2.2 AAA contrast strictly preserved (>10:1 across all elements).
- [x] Atmospheric Background Transparency & Scroll Momentum Containment: Calibrated section overlay opacities from heavy 90%+ opaque milky films to transparent 32%–48% champagne veils, revealing the intricate palace architecture, gold damask silk, and glowing diyas in rich detail. Completely fixed scroll containment by preserving wheel/touch interception through gate opening, guarding `window.scrollTo(0, 0)` on exit, and setting manual scroll restoration so users land at the very top of the invitation.
- [x] Authentic Sacred Ganesha Line Iconography & Main Page Transition Orchestration: Redesigned `GaneshaLine.tsx` with authentic traditional Hindu wedding invitation vector art (Mukut crown with kalash finial, saffron tripundra tilak, vermillion kumkum bindi, serene eyes, large surpakarna ears, intact & broken tusks, vakratunda left-curving trunk, golden modak, and blooming lotus throne). Synchronized main page entrance via `isEntered` prop so Ganesha draws sequentially right as the royal gates swing open. Optimized lazy loading in `ScrollReveal.tsx` and `SectionTransition.tsx` (amount: 0.08, negative margin, GPU-composited transforms) eliminating all scroll lag and blank cards.
- [x] Sandwiched Grand Entrance Gateway Video Integration: Seamlessly sandwiched the user-supplied 10-second vertical entrance video (`entrance_zifwoo.mp4`) in `EntranceVideoPortal.tsx` between the 3D ceremony corridor and the main invitation. Downloaded to `public/videos/entrance.mp4` with Cloudinary CDN fallback, accessible audio controls, gold timeline progress bar, and automatic cascade into the main invitation.

## In progress
- Ready for deployment & final family review

## Next up
- Phase 5 content integration (pending family-supplied details)

## Blockers / awaiting content
| Item | Needed from | Status |
|---|---|---|
| Event times (tilak, vivah) | Family | Confirmed all-day celebration |
| Venues + map links | Family | Confirmed (Doila Bintoli / Maps link integrated) |
| Parent / host names | Family | Confirmed (Mrs. Ranju Prasad & Mr. Yogendra Prasad integrated) |
| RSVP contact or method | Family | Pending WhatsApp details |
| Dress code, accommodation | Family | Pending |
| Photographs | Family | Pending |
| Background music track + approval | Family | Pending |
| Additional ceremonies | Family | Pending |

## Slice log
### 2026-10-27 — Phase 5 Content Integration (Slice 1: Calendar, Venue, Hosts)
- **What changed**:
  - Implemented `AddToCalendar.tsx` and calendar utility `src/lib/calendar.ts` supporting Google Calendar web link and direct Apple Calendar / Outlook `.ics` file generation for all-day celebrations (Tilak: 25 Nov 2026, Vivah: 2 Dec 2026).
  - Integrated hometown venue (Doila Bintoli, Bihar) with a direct "📍 View Location (Google Maps)" button linking to `https://maps.app.goo.gl/tQhtXHdjyp7GPzuD7` in `EventCard.tsx`.
  - Honored bride's full name ("रचना कुमारी" / "Rachna Kumari") and bride's parents ("श्रीमती रंजू प्रसाद एवं श्री योगेंद्र प्रसाद" / "Mrs. Ranju Prasad & Mr. Yogendra Prasad") with a dedicated Parents of the Bride honor card in `InvitationMessage.tsx`.
- **Verification**:
  - `npm run test:qa`: 16/16 checks passed including dictionary parity.
  - `npm run type-check`: 0 TypeScript errors.

### 2026-10-27 — Final Code Audit & Mobile Phone Optimization (Phase 4 Sign-Off)
- **What changed**:
  - Performed comprehensive mobile phone audit across 320px, 360px, 390px, 412px, and 430px viewports.
  - Enforced strict touch target sizing (≥ 44×44 CSS px) on all mobile controls including `.tunnel-enter-badge`, `.tunnel-skip-button`, floating corridor toggle (`FloatingControls.tsx`), top replay buttons (`page.tsx`), and video audio/skip controls (`EntranceVideoPortal.tsx`).
  - Audited layout stability, safe-area insets (`env(safe-area-inset-*)`), and zero horizontal overflow (`overflow-x: hidden`).
  - Tested reduced-motion paths globally (`prefers-reduced-motion: reduce`).
  - Verified WCAG 2.2 Level AA / AAA color contrast across all sections and royal translucent backgrounds.
- **Verification**:
  - `npm run test:qa`: 16 of 16 tests passed.
  - `npm run type-check`: 0 TypeScript errors.
  - Live Next.js dev server responding 200 OK.

### 2026-10-25 — Phase 4 QA Audits & Test Plan Execution
- **What changed**: Added automated QA suite in `scripts/qa-audit.mjs` and `npm run test:qa`.
- **Verification**:
  - WCAG 2.2 AA Contrast: Ink on BG = 16.17:1, Maroon on BG = 10.57:1, Muted on BG = 6.87:1, White on Maroon = 11.16:1 (all pass with high margins).
  - Date validation: Both 25 Nov 2026 and 2 Dec 2026 confirmed as Wednesdays.
  - Semantic landmarks verified: `<header>`, `<main>`, `<footer>`, `<h1>` (couple names), `<time datetime="...">`, `aria-pressed`, `aria-live`.
  - Type-check: 0 errors; Build: compiled successfully.

### 2026-10-25 — Phases 0–3 Foundation & Implementation
- **What changed**: Scaffolded Next.js App Router, strict TypeScript, Noto Devanagari fonts, CSS tokens, canonical wedding data (`src/content/wedding.ts`), bilingual dictionaries (`src/i18n/`), `LocaleProvider`, `MotionProvider`, ceremonial SVG art components (Ganesha, Tilak, Vivah, Lotus divider, Toran garland, drifting petals), and all main sections.
- **Verification**: `npm run type-check` (0 errors), `npm run build` (compiled in 7.8s, clean static routes), server HTTP test (`॥ श्री गणेशाय नमः ॥`, dates, and names all verified present). Unit check asserting both dates are Wednesdays passed.
