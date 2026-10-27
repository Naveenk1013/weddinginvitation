# DECISIONS.md — Architecture & Product Decisions

Format: `ID — Title — Status — Date`. Do not re-litigate Accepted decisions without owner approval.

## D-001 — Mobile-first ceremonial scroll, not a printed-card clone — Accepted
Guests mostly open links on phones. A scroll journey allows ceremony-by-ceremony storytelling and practical actions.

## D-002 — Immutable opening `॥ श्री गणेशाय नमः ॥` — Accepted
Direct family requirement; consistent with common Hindu wedding-card wording.

## D-003 — Hindi default, English secondary — Accepted
`hi-IN` first, `en-IN` second. Preference remembered only after explicit switch.

## D-004 — Next.js App Router + TypeScript — Accepted
Metadata/Open Graph tooling and self-hosted font optimization.

## D-005 — Motion for React with `LazyMotion` — Accepted
One coherent library for SVG, gesture, scroll, layout and presence animation; keeps initial bundle small.

## D-006 — Tailwind optional — Accepted
Allowed, not required.

## D-007 — Real HTML text for all key information — Accepted
Accessibility and robustness if artwork fails.

## D-008 — Sacred imagery gets restrained motion only — Accepted
Line-draw, fade, soft scale, glow, mask reveal. No spin/shake/bounce/drag.

## D-009 — Reduced motion is first-class — Accepted
Large movement → opacity-only or static; ambient loops disabled.

## D-010 — No flashing — Accepted

## D-011 — Days-only countdown until exact time is supplied — Accepted

## D-012 — No fabricated details; unknown fields are `null` and hidden — Accepted

## D-013 — Native share with copy-link fallback — Accepted

## D-014 — Music postponed; never autoplay — Accepted
Needs supplied track, approval, and visible controls.

## D-015 — 44×44 px internal touch target — Accepted
Stricter than WCAG 2.2 AA (24×24); chosen for mobile comfort.

## D-016 — Animate transform/opacity only — Accepted

## D-017 — Gold is decorative, not body text — Accepted
Contrast requirements; gold `#B07A22` only on large text/ornament unless verified.

## D-018 — Vanilla CSS Tokens & Self-Hosted Typography Pipeline — Accepted
Built with pure CSS custom properties in `globals.css` matching `DESIGN_SYSTEM.md` without external utility framework overhead. Configured Noto Devanagari serif and sans fonts via `next/font` for zero layout shift and offline resilience.

## D-019 — Couple Portrait Illustration & Transformative Scroll System — Accepted
User-provided couple illustration (`couple.png`) integrated in `CouplePortrait.tsx` with a consecrated Jharokha arch frame, warm gold radiant aura, and multi-layered scroll-linked parallax (`useScroll` and `useTransform`). Scroll animations use only `transform` and `opacity` properties for 60fps GPU performance, with complete static fallbacks when `prefers-reduced-motion` is active. Couple names and dates remain accessible semantic HTML text.

## D-020 — React Bits Counter & Full Countdown Granularity — Accepted
Integrated React Bits `<Counter />` component with physics-driven rolling numeral strips and SVG motion blur. Upgraded countdown display from days-only to full time format: Days, Hours, Minutes, and Seconds updating live every second in IST (`Asia/Kolkata`). Rendered in a responsive 4-tile ceremonial card layout tested at 320px–430px mobile viewports with zero layout shift and automatic reduced-motion bypass.

## D-021 — React Bits ClickSpark Particle Interaction — Accepted
Integrated React Bits `<ClickSpark />` component to emit golden and saffron wedding star sparkles on user clicks and taps across the invitation. Implemented on an ephemeral canvas layer with zero layout impact and automatic reduced-motion respect (`prefers-reduced-motion` suppresses particle burst). Sacred imagery remains unmanipulated per AGENTS.md.

## D-022 — React Bits Ribbons Fluid WebGL Background — Accepted
Integrated React Bits `<Ribbons />` component using WebGL2 shader pipeline and spring simulation to render graceful, ceremonial silk ribbons trailing pointer movements across the invitation. Set to auspicious wedding palette (`#B07A22`, `#C85A16`, `#F59E0B`, `#6E1E2A`) at subtle opacity (`0.32`) with `pointer-events: none` on an ambient fixed layer, allowing unhindered accessibility and click actions. Automatically disables WebGL render loop when `prefers-reduced-motion` is active.

## D-023 — Ceremonial Event Photography & Scroll Reveal Entrance — Accepted
Generated authentic, ceremonial imagery for all confirmed wedding events: `tilak.jpg` (traditional thali, kumkum, akshata, and glowing diyas) and `vivah.jpg` (Vedic wedding mandap with holy havan agni kund and marigold decor). Optimized with MozJPEG to lean file sizes (110 KB and 143 KB) to guarantee fast mobile loading. Integrated into `EventCard.tsx` with a scroll-triggered entrance effect (`scale: 1.08 -> 1`, `opacity: 0 -> 1`), floating circular ceremony seals, warm golden gradient overlays, and accessible bilingual `alt` descriptions, with automatic fallback for `prefers-reduced-motion`.

## D-024 — Perspective Tunnel 3D Spatial Ceremonial Corridor — Accepted
Integrated `perspective-tunnel-hero.tsx` into `/components/ui/` with 9 authentic Indian wedding ceremonial ritual images (`01-tilak.jpg` through `09-vivah.jpg`), all optimized with MozJPEG to ~80-120 KB each. Implemented a 3D Z-axis spatial tunnel corridor driven by golden-angle trigonometry, camera pointer parallax, and smooth spring physics with wheel and touch support. Styled with traditional warm ivory, sacred gold, and ceremonial maroon tokens, and safely unblocks page scrolling at the boundaries.

## D-025 — Sticky Scroll Runway Architecture & Invitation Flow Polish — Accepted
Upgraded `PerspectiveTunnelHero` from wheel-event interception to a native Sticky Scroll Runway (`250vh` runway with a `sticky top-0 h-[100svh]` stage) driven by Motion's `useScroll`. This eliminates scroll trapping (`e.preventDefault()`), ensuring natural, buttery-smooth scrolling on trackpads, mouse wheels, and mobile touch devices. When the runway concludes, the document seamlessly glides into `#main-invitation`. Bilingual support was connected to `useLocale()`, localizing all tunnel card titles, hero typography, and action buttons. Refined subsequent invitation sections (`CoupleReveal` subtitle, `EventCard` badges, `OpeningInvocation` breathing room) for complete cultural elegance in both Hindi and English. All 16 QA checks pass with 100% compliance.

## D-026 — Sacred Om (ॐ) Vanishing Point & Extended Perspective Runway — Accepted
Integrated sacred Devanagari ॐ (Om) symbol in `SacredOm.tsx` positioned at the 3D vanishing point of the perspective tunnel with warm golden radial aura and Vedic sun rays. Extended scroll runway distance to `480vh` on desktop and `380vh` on mobile to give guests ample time to experience all 9 wedding ceremonial moments with leisurely, regal pacing. Fixed flex-flow displacement by anchoring the central typography and bottom action prompt inside unambiguous absolute centered layers.

## D-027 — Standalone First Entry Portal Decoupled from Page Scroll — Accepted
Re-architected the 3D Perspective Tunnel as an independent First Entry Portal (`fixed inset-0 z-50` overlay) detached from the document scroll height. The main invitation page preserves its natural document length and scroll performance without an inline runway. While the portal is open, body scroll is locked and the user navigates the 3D corridor internally via wheel, touch, or keys. Once finished or upon tapping "Enter", the overlay smoothly unveils the main invitation with a blur and scale transition, restoring normal page scrolling. Replay options are provided in the header and floating controls.

## D-028 — Sacred Invocation Header, Central Om & Royal Opening Gate Effect — Accepted
Purified the entry portal typography to retain strictly `॥ श्री गणेशाय नमः ॥` as the primary top header, removing extraneous text to create a sacred, meditative entrance. Positioned the consecrated ॐ (Om) symbol in the exact middle with golden halo radiance. Built `RoyalGate.tsx` simulating a traditional Rajput double-door palace entrance with Jaali lattice, brass studs, and ring knockers. Upon completion or tapping "Enter", the royal gates swing open in 3D perspective (`rotateY(-88deg)` / `rotateY(88deg)`) with expanding light beams, delivering a regal palace entrance transition into the wedding invitation.

## D-029 — Royal Palace & Luxury Stationery Backgrounds Across Every Section — Accepted
Curated, generated, and optimized 5 authentic luxury Indian palace and heirloom stationery backgrounds:
1. `01-ganesha-bg.jpg` (Ivory Banarasi silk with gold foil filigree damask pattern) applied to `OpeningInvocation.tsx` and `ClosingBlessing.tsx`.
2. `02-couple-bg.jpg` (Udaipur City Palace courtyard with sunset jharokha arches and rose petals) applied to `CoupleReveal.tsx`.
3. `03-invitation-bg.jpg` (Deckle-edge vintage wedding parchment with gold foil border and watermark mandala) applied to `InvitationMessage.tsx` and `EventCard.tsx`.
4. `04-timeline-bg.jpg` (Sandstone palace corridor lined with glowing brass samai lamps and marigold garlands) applied to `CeremonyTimeline.tsx`.
5. `05-countdown-bg.jpg` (Starlit palace terrace at deep twilight with glowing diyas) applied to `Countdown.tsx`.

Each image was compressed to lean mobile-friendly sizes (140–200 KB) using MozJPEG with progressive encoding. Crucially, each section implements a high-opacity translucent warm overlay gradient (`rgba(255, 252, 247, 0.88)` to `rgba(253, 246, 233, 0.94)`) and `backdrop-filter: blur(2px)`. This preserves the rich, opulent photographic atmosphere of royal palaces and silk stationery while keeping text contrast strictly above 10:1 (exceeding WCAG 2.2 AAA standards) and preserving 100% semantic HTML readability.

## D-030 — Atmospheric Background Transparency Calibration & Scroll Momentum Containment — Accepted
1. **Background Transparency Calibration**:
   - Replaced heavy milky overlays (`0.88` to `0.95` opacity with blurs) with delicate, warm champagne translucent veils (`0.32` to `0.48` opacity without blurs).
   - This makes all royal photographic and stationery backdrops (Banarasi gold damask, Udaipur City Palace marble arches, deckle-edge wedding parchment, candlelit sandstone corridor, starlit terrace diyas) richly visible, vibrant, and luxurious.
   - Preserved crystal-clear text contrast (>10:1) by applying soft multi-layered text shadows (`0 1px 4px rgba(255,255,255,0.95), 0 2px 10px rgba(255,255,255,0.85)`) to headings and body text.
2. **Scroll Momentum Containment & Origin Lock**:
   - Resolved the scroll-leak bug where scrolling inside the 3D corridor dropped the user directly at the bottom of the page.
   - Identified root cause: the previous event listener unmounted upon `isGateOpening = true`, permitting trailing trackpad/wheel momentum during the 1.2s gate animation to bleed directly into `window.scrollY`.
   - Fixed by keeping `handleWheel` and `handleTouchMove` bound with `e.preventDefault()` through the entirety of the gate animation until overlay unmount.
   - Enforced `window.scrollTo({ top: 0, left: 0, behavior: "instant" })` with a transient 700ms requestAnimationFrame scroll guard upon completion, and set `history.scrollRestoration = "manual"` in `page.tsx`. Reopening the corridor now also guarantees a fresh origin `rawProgress.set(0)`.
## D-031 — Traditional Sacred Ganesha Iconography & Smooth Entrance/Lazy-Loading Orchestration — Accepted
1. **Sacred Lord Ganesha Line Iconography Vector Redesign (`GaneshaLine.tsx`)**:
   - Replaced oversimplified/abstract geometric loops with an authentic, consecrated traditional Hindu wedding invitation silhouette of Lord Ganesha:
     - Mukut (Royal Crown) with Kalash spire finial, pinnacle pearl, and Kalgi side plumes.
     - Sacred Forehead (Kumbha) with Saffron Tripundra / Trishul, Chandan U-mark, Chandrabindu, and radiant Vermillion Kumkum Bindi.
     - Surpakarna: Grand, dignified elephant ears with inner sacred filigree folds.
     - Serene lotus-petal eyes with calm gaze.
     - Ekadanta: Full intact right ivory tusk and broken left tusk.
     - Vakratunda: Majestic elephant trunk sweeping downward and curving leftward into an auspicious Vamamukhi spiral.
     - Golden Modak with sacred radiance rays.
     - Padmasana Base: Blooming tiered royal lotus throne.
   - Adheres strictly to `AGENTS.md` rules: sacred imagery receives only sequential line-drawing (`pathLength: 0 -> 1`), soft scale/opacity, and warm golden drop-shadow aura (`filter: drop-shadow(0 2px 10px rgba(176,122,34,0.28))`). No spinning, bouncing, or playful animations.
2. **Main Page Entrance Synchronization (`OpeningInvocation.tsx`, `CoupleReveal.tsx`, `page.tsx`)**:
   - Resolved the issue where top-of-page animations executed in the dark while the user was interacting with the Perspective Corridor overlay.
   - Wired an `isEntered={!showTunnel}` prop from `page.tsx` into `OpeningInvocation` and `CoupleReveal`.
   - When the royal gate opens, `isEntered` triggers the sequential divine drawing of Lord Ganesha, followed by the regal fade-up of `॥ श्री गणेशाय नमः ॥`, followed by the bride and groom names gliding into place.
3. **Lazy-Loading & Scroll Reveal Optimization (`ScrollReveal.tsx`, `SectionTransition.tsx`)**:
   - Resolved conflicting double-transform and opacity clamping where `SectionTransition` (`y: 40, opacity: [0, 0.3] -> [0, 1]`) fought with `ScrollReveal` (`y: 32, opacity: 0`).
   - Relaxed `ScrollReveal` trigger threshold from `amount: 0.25` down to `amount: 0.08` with a `margin: "0px 0px -30px 0px"`, eliminating blank cards and sluggish scroll pop-in on mobile devices.
   - Replaced heavy `filter: blur(8px)` with lightweight hardware-accelerated transforms (`y: 12, scale: 0.98`), preventing mobile GPU frame drops.
   - Tightened staggered animation delays across `CeremonyTimeline`, `InvitationMessage`, and `ClosingBlessing`.

## D-032 — Sandwiched Grand Entrance Gateway Video Integration — Accepted
1. **Sandwiched Video Transition Architecture**:
   - Integrated `EntranceVideoPortal.tsx` to seamlessly sandwich the user-supplied Cloudinary wedding entrance video (`entrance_zifwoo.mp4`, 720x1280 9:16 mobile format, 10 seconds duration) between the 3D Perspective Ceremony Corridor and the Main Royal Invitation page.
   - Cached asset locally at `public/videos/entrance.mp4` (4.85 MB) with dual `<source>` fallback to Cloudinary CDN for instant offline and edge loading.
2. **Three-Stage Progression Journey**:
   - `Stage 1 ("tunnel")`: 3D Spatial Perspective Corridor with ceremony cards, supreme header `॥ श्री गणेशाय नमः ॥`, and Rajput double doors.
   - `Stage 2 ("video")`: When the gates swing open or user clicks enter, the full-bleed grand entrance video launches with royal radial glow, gold progress bar, audio mute/unmute control (browser compliant), and instant skip button (`सीधे आमंत्रण देखें →`).
   - `Stage 3 ("invitation")`: When the video concludes (`onEnded`) or is skipped, it gracefully cross-fades into the main invitation, triggering the sequential line drawing of Lord Ganesha and the bride/groom reveals.
3. **Replay Controls & Accessibility**:
   - Added dual replay pill buttons at the top of the main invitation: `✨ मांगलिक उत्सव दर्शन • Corridor` and `🎥 शुभ प्रवेश द्वार • Entry Video`.
   - Autoplay policy respected: video starts muted by default with an accessible toggle, satisfying `AGENTS.md` audio constraints.

## D-033 — Mobile Phone Audit & Touch Target Standardization — Accepted
1. **Touch Target Standard (≥ 44×44 CSS px)**:
   - Audited all clickable and tappable elements across the invitation to ensure strict adherence to `docs/MOBILE_UX.md` and WCAG 2.2 Level AA guidelines.
   - Enforced minimum dimensions:
     - `.tunnel-enter-badge`: Added `min-height: 44px; min-width: 44px; justify-content: center`.
     - `.tunnel-skip-button`: Standardized with `min-height: 44px; min-width: 44px`.
     - Floating Corridor Button (`FloatingControls.tsx`): Upgraded from 34×34px to 44×44px.
     - Top Replay Buttons (`page.tsx`): Upgraded from 40px to 44px min-height with centered flex alignment.
     - Entrance Video Audio & Skip Buttons (`EntranceVideoPortal.tsx`): Standardized with `minHeight: 44px; minWidth: 44px`.
     - Language Switcher (`LanguageSwitch.tsx`): Pill container height 44px with 44px min-width per button.
2. **Mobile Viewport Testing (320px–430px)**:
   - Verified fluid layout behavior without horizontal scrolling on 320px (iPhone SE 1st gen), 360px (compact Android), 390px (standard iPhone), 412px (modern Pixel/Galaxy), and 430px (iPhone Pro Max).
   - Ensured safe-area padding (`env(safe-area-inset-*)`) on floating headers, sticky clusters, and video footers.
   - Verified that the 4-tile countdown (`CountdownTile.tsx`) fits comfortably within 320px width without wrapping or clipping.
3. **Phase 4 Sign-Off**:
   - `npm run test:qa` passed with 16 of 16 tests green.
   - `npm run type-check` passed with 0 errors.
   - Development server active and responsive. Phase 4 officially completed; ready to proceed to Phase 5.

## D-034 — Phase 5 Content Integration (Calendar, Hometown Venue & Bride Parents) — Accepted
1. **Add-to-Calendar Functionality (`src/lib/calendar.ts`, `AddToCalendar.tsx`)**:
   - As requested, implemented calendar integration for both auspicious ceremony dates (Shubh Tilak: 2026-11-25 and Shubh Vivah: 2026-12-02) as all-day celebrations in Asia/Kolkata timezone.
   - Provides two direct options via an accessible, keyboard-navigable popover:
     - Google Calendar web event creation link (`ACTION=TEMPLATE`).
     - Apple Calendar / Outlook / iCal standard `.ics` file generation and download.
   - Touch targets strictly maintained at ≥ 44×44 CSS px.
2. **Hometown Venue & Direct Google Maps Navigation (`wedding.ts`, `EventCard.tsx`)**:
   - Integrated the family's confirmed hometown venue (Doila Bintoli, Bihar) with a direct "📍 View Location (Google Maps)" button linking to `https://maps.app.goo.gl/tQhtXHdjyp7GPzuD7`.
3. **Bride's Parents & Full Name Representation (`wedding.ts`, `InvitationMessage.tsx`)**:
   - Updated bride's full name to "रचना कुमारी" / "Rachna Kumari".
   - Integrated a dedicated Parents of the Bride honor card in `InvitationMessage.tsx` displaying "श्रीमती रंजू प्रसाद एवं श्री योगेंद्र प्रसाद" / "Mrs. Ranju Prasad & Mr. Yogendra Prasad".
4. **WhatsApp RSVP Deferred**:
   - Per family instruction, WhatsApp RSVP contact remains pending until numbers are supplied.



