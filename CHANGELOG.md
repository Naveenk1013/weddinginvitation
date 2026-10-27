# CHANGELOG

All notable changes to this project. Newest first. Format loosely follows Keep a Changelog.

## [Unreleased]

## [0.1.20] — Phase 5 Content Integration (Add to Calendar, Hometown Venue & Bride Parents)
### Added & Configured
- **Add-to-Calendar System (`src/lib/calendar.ts`, `AddToCalendar.tsx`)**:
  - Implemented interactive ceremonial calendar buttons for both dates (Tilak: 25 Nov 2026, Vivah: 2 Dec 2026) as all-day events in IST.
  - Generates instant Google Calendar event links (`ACTION=TEMPLATE`) with localized ceremony title, date, location, and description.
  - Generates and downloads standard iCalendar `.ics` files compatible with Apple Calendar, iOS Calendar, Outlook, and Android.
  - Integrated into each `EventCard.tsx` with full WCAG 2.2 touch target compliance (≥ 44×44px).
- **Hometown Venue & Google Maps Navigation (`wedding.ts`, `EventCard.tsx`)**:
  - Configured hometown venue: Doila Bintoli, Bihar (दोइला बिनटोली).
  - Added direct "📍 View Location (Google Maps)" button linking to `https://maps.app.goo.gl/tQhtXHdjyp7GPzuD7` on each ceremony card.
- **Bride's Parents & Full Name Representation (`wedding.ts`, `InvitationMessage.tsx`)**:
  - Set bride's full name to "रचना कुमारी" / "Rachna Kumari".
  - Created a dedicated ceremonial Parents of the Bride honor card in `InvitationMessage.tsx` displaying "श्रीमती रंजू प्रसाद एवं श्री योगेंद्र प्रसाद" / "Mrs. Ranju Prasad & Mr. Yogendra Prasad".
  - WhatsApp RSVP deferred until numbers are provided.
- **Verification**:
  - `npm run test:qa`: 16/16 checks passed.
  - `npm run type-check`: 0 TypeScript errors.

## [0.1.19] — Comprehensive Code Audit & Mobile Phone Optimization
### Verified & Optimized
- **Traditional Ganesh Ji Face Vector Component (`GaneshaLine.tsx`)**:
  - Integrated calm, traditional Ganesh ji face artwork optimized for wedding stationery.
  - Features modular SVG paths (wide ears with warm saffron tint, rounded temples/cheeks, Mukut with finial and gemstone, saffron Tilak with kumkum bindi, serene eyes, Ekadanta broken & intact tusks, left-curling Vakratunda trunk, and lotus flourish).
  - Bundled with internal `LazyMotion` provider and reduced-motion fallbacks.
- **Touch Target Standardization**:
  - Enforced strict minimum touch targets of ≥ 44×44 CSS px across all interactive elements in compliance with `docs/MOBILE_UX.md` and WCAG 2.2 Level AA.
  - Upgraded `.tunnel-enter-badge` (`min-height: 44px; min-width: 44px; justify-content: center`).
  - Upgraded Corridor Floating Button in `FloatingControls.tsx` (`width: 44px; height: 44px`).
  - Upgraded Top Replay Buttons in `page.tsx` (`minHeight: 44px`).
  - Standardized Video skip and mute controls in `EntranceVideoPortal.tsx` (≥ 44×44px).
- **Mobile Responsive Layout Audit (320px–430px)**:
  - Verified layout containment and zero horizontal overflow across 320px, 360px, 390px, 412px, and 430px viewport widths.
  - Verified safe-area inset compliance (`env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`, `env(safe-area-inset-right)`).
  - Countdown tiles (`CountdownTile.tsx`) verified to fit seamlessly on 320px narrow screens without wrapping or clipping.
  - Couple name typography (`CoupleReveal.tsx`) fluidly scales with `clamp(2.4rem, 10vw, 3.4rem)` and wraps cleanly on ultra-narrow viewports.
- **Accessibility & Contrast Verification**:
  - Ran automated test suite (`npm run test:qa`): All 16 checks passed.
  - Body text contrast: 16.17:1 on background, 16.79:1 on surfaces (WCAG AAA requires ≥ 7:1).
  - Heading contrast: 10.57:1 on background, 10.98:1 on surfaces.
  - Button text: 11.16:1.
  - Semantic HTML landmark hierarchy verified: `<header>`, `<main>`, `<footer>`, single `<h1>`.
- **TypeScript Integrity**:
  - `npm run type-check`: 0 errors.

## [0.1.18] — Sandwiched Grand Entrance Gateway Video Integration
### Added & Improved
- **Sandwiched Entrance Video Portal (`EntranceVideoPortal.tsx`)**:
  - Implemented a cinematic full-bleed video transition seamlessly sandwiched between the 3D Perspective Ceremony Corridor and the Main Royal Invitation page.
  - Video asset (`entrance_zifwoo.mp4`, 720x1280 portrait 9:16 format, 10 seconds duration) downloaded locally to `public/videos/entrance.mp4` with high-speed CDN fallback to Cloudinary.
  - Features gold flight progress indicator, accessible mute/unmute audio button (`🔇 / 🔊`), and quick skip button (`सीधे आमंत्रण देखें →`).
  - Seamlessly cascades into the Main Invitation upon completion or skip, triggering the newly refined Ganesha line-drawing and couple name reveals.
- **Top Invitation Replay Controls (`page.tsx`)**:
  - Added dual golden pill buttons at the head of the invitation: `✨ मांगलिक उत्सव दर्शन • Corridor` and `🎥 शुभ प्रवेश द्वार • Entry Video`.

## [0.1.17] — Authentic Sacred Ganesha Iconography & Main Page Transition Orchestration
### Fixed & Improved
- **Sacred Lord Ganesha Line Iconography Vector Redesign (`GaneshaLine.tsx`)**:
  - Replaced oversimplified/abstract loops with an authentic, consecrated traditional Hindu wedding stationery vector silhouette:
    - Consecrated Royal Crown (Mukut) with Kalash finial, pinnacle pearl, and Kalgi side plumes.
    - Auspicious Forehead (Kumbha) with Saffron Tripundra / Trishul, Chandan U-mark, Chandrabindu, and radiant Kumkum Bindi.
    - Surpakarna: Majestic elephant ears with inner sacred filigree folds.
    - Serene lotus-petal eyes with calm gaze.
    - Ekadanta: Full intact right ivory tusk and broken left tusk.
    - Vakratunda: Majestic elephant trunk sweeping downward and curving leftward into an auspicious Vamamukhi spiral.
    - Golden Modak with sacred radiance rays.
    - Padmasana Base: Tiered blooming royal lotus pedestal.
  - Multi-stage stroke animation draws sequentially (`Mukut -> Tilak -> Eyes & Ears -> Trunk & Tusks -> Modak -> Lotus Base`) with warm golden drop-shadow aura (`filter: drop-shadow(0 2px 10px rgba(176,122,34,0.28))`).
  - Adheres strictly to `AGENTS.md` sacred imagery constraints: no playful bouncing or spinning.
- **Main Page Entrance Synchronization (`OpeningInvocation.tsx`, `CoupleReveal.tsx`, `page.tsx`)**:
  - Fixed issue where top-of-page animations executed hidden while the user was interacting with the Perspective Corridor overlay.
  - Wired `isEntered={!showTunnel}` prop from `page.tsx` into `OpeningInvocation` and `CoupleReveal`.
  - When the royal gate opens, `isEntered` triggers the sequential divine drawing of Lord Ganesha, followed by the regal fade-up of `॥ श्री गणेशाय नमः ॥`, followed by the bride and groom names gliding into place.
- **Lazy-Loading & Scroll Reveal Optimization (`ScrollReveal.tsx`, `SectionTransition.tsx`)**:
  - Resolved conflicting double-transform and opacity clamping where `SectionTransition` (`y: 40, opacity: [0, 0.3] -> [0, 1]`) fought with `ScrollReveal` (`y: 32, opacity: 0`).
  - Lowered `ScrollReveal` trigger threshold from `amount: 0.25` down to `amount: 0.08` with a `margin: "0px 0px -30px 0px"`, eliminating blank cards and sluggish scroll pop-in on mobile devices.
  - Replaced heavy `filter: blur(8px)` with lightweight hardware-accelerated transforms (`y: 12, scale: 0.98`), preventing mobile GPU frame drops.
  - Tightened staggered animation delays across `CeremonyTimeline`, `InvitationMessage`, and `ClosingBlessing`.

## [0.1.16] — Complete Removal of "3D" Tag & UI Refinement
### Fixed & Improved
- **Cleaned Up "3D" Labels from All User-Facing UI**:
  - In [`FloatingControls.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/FloatingControls.tsx): Replaced the technical "3D" button text with an auspicious glowing star sparkle (`✨`), styled with a 34px round gold-bordered ivory surface, titled `मांगलिक उत्सव दर्शन • Ceremony Corridor`.
  - In [`page.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/app/page.tsx): Updated the re-experience invitation pill from `मांगलिक 3D दर्शन • 3D Corridor` to `मांगलिक उत्सव दर्शन • Ceremony Corridor`.
  - In [`perspective-tunnel-hero.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/perspective-tunnel-hero.tsx): Updated dialog accessibility attribute to `aria-label="Wedding Ceremonies Sacred Corridor"`.
  - The interface is now 100% culturally aligned with traditional Indian wedding stationery aesthetics, devoid of any technical jargon.

## [0.1.15] — Professional Title Header Placement & Vanilla CSS Layout
### Fixed & Improved
- **Root Cause Resolution for Overlapping UI**:
  - Identified that the 3D entry corridor used Tailwind CSS utility classes (`absolute`, `top-8`, `bottom-8`, `rounded-full`, etc.) which had no effect because the repository is built on pure Vanilla CSS per architectural decision `D-018`.
  - Without computed positioning, the header, the default unstyled browser button (`सीधे प्रवेश करें →`), and the enter prompt were stacking on top of each other at the top of the viewport.
- **Dedicated Pure CSS Layout System (`perspective-tunnel-hero.css`)**:
  - Created `.tunnel-header`: Positioned securely at the top center with generous safe-area padding (`top: max(24px, calc(var(--safe-top) + 16px))`).
  - Added `.tunnel-header-title`: Ceremonial serif typography with high-contrast text shadow and traditional gold arch flourish (`❖`).
  - Created `.tunnel-skip-wrap` & `.tunnel-skip-button`: Pinned cleanly to the top-right corner with a frosted glass pill aesthetic (`border-radius: 9999px`), subtle gold leaf border, and smooth hover elevation.
  - Created `.tunnel-enter-wrap` & `.tunnel-enter-badge`: Anchored at the bottom center (`bottom: max(24px, calc(var(--safe-bottom) + 16px))`) with luxury gold foil embossed styling, serif typography, and an elegant glowing scroll indicator.

## [0.1.14] — Om Symbol Removal & Hydration Mismatch Resolution
### Fixed & Improved
- **Removed Om (ॐ) Symbol from 3D Perspective Corridor**:
  - Removed `<SacredOm />` and its associated scale and opacity transforms from [`perspective-tunnel-hero.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/perspective-tunnel-hero.tsx).
  - The central spatial corridor is now focused solely on the orbiting ceremonial cards, the supreme top header `॥ श्री गणेशाय नमः ॥`, and the royal opening gate at the culmination of the reveal.
- **Eliminated Hydration Mismatch Error**:
  - Completely resolved the SSR/client hydration mismatch warning caused by 16th-decimal-place ULP differences in trigonometric SVG line coordinates between Node.js server and browser client.
  - Also rounded ray coordinates to 2 decimal places in [`SacredOm.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/art/SacredOm.tsx) for bulletproof mathematical stability.

## [0.1.13] — Atmospheric Background Transparency Calibration & Scroll Momentum Containment
### Fixed & Improved
- **Visible Luxury Background Imagery Across All Sections**:
  - Re-calibrated section overlay opacities from overly dense milky films (`0.88–0.95` with blur) to delicate warm champagne veils (`0.32–0.48` without blur).
  - All bespoke royal assets now stand out with vibrant, rich clarity:
    - Gold-woven Banarasi silk in `OpeningInvocation` and `ClosingBlessing`.
    - Sunset Udaipur City Palace marble arches and floating rose petals in `CoupleReveal`.
    - Vintage deckle-edge gold foil mandala parchment in `InvitationMessage` and `EventCard`.
    - Glowing sandstone Samai oil lamp corridor in `CeremonyTimeline`.
    - Starlit twilight palace terrace with glowing diyas in `Countdown`.
  - Added luminous text-shadows (`rgba(255, 255, 255, 0.95)`) across all titles, shlokas, and body paragraphs to maintain pristine readability and high contrast.
- **Scroll Momentum Containment & Origin Lock**:
  - Fixed scroll leakage where scrolling through the 3D corridor dropped guests directly at the bottom of the invitation page.
  - Retained `handleWheel` and `handleTouchMove` event interceptors throughout the royal gate animation, preventing trackpad/wheel momentum from reaching `window.scrollY`.
  - Enforced `window.scrollTo({ top: 0, left: 0, behavior: "instant" })` with a transient 700ms `requestAnimationFrame` guard on gate completion.
  - Configured `history.scrollRestoration = "manual"` in `page.tsx` and reset `rawProgress` to `0` whenever the 3D corridor is opened or re-opened.

## [0.1.12] — Royal Luxurious Backgrounds Across Every Section
### Added & Improved
- **Bespoke Royal Palace & Luxury Stationery Backgrounds**:
  - Curated, generated, and MozJPEG-optimized 5 high-resolution authentic Indian royal backgrounds in `public/images/backgrounds/`:
    - `01-ganesha-bg.jpg` (143 KB): Ivory Banarasi silk with gold foil filigree damask pattern.
    - `02-couple-bg.jpg` (189 KB): Udaipur City Palace courtyard with sunset jharokha arches and rose petals.
    - `03-invitation-bg.jpg` (163 KB): Vintage deckle-edge wedding parchment with gold foil border and watermark mandala.
    - `04-timeline-bg.jpg` (207 KB): Sandstone palace corridor lined with glowing brass samai lamps and marigold garlands.
    - `05-countdown-bg.jpg` (147 KB): Starlit palace terrace at deep twilight with glowing diyas.
- **Section-by-Section Luxury Integration**:
  - **Section 1 (`OpeningInvocation.tsx`)**: Backed by `01-ganesha-bg.jpg` with a radiant ivory-to-champagne vignette, elevating the immutable Ganesha shloka.
  - **Section 2 (`CoupleReveal.tsx`)**: Enclosed in `02-couple-bg.jpg` depicting Udaipur City Palace, providing an authentic destination wedding atmosphere behind the couple portrait.
  - **Section 3 (`InvitationMessage.tsx`)**: Framed by `03-invitation-bg.jpg` evoking traditional foil-embossed deckle-edge parchment stationery.
  - **Section 4 (`CeremonyTimeline.tsx`)**: Transformed the whole ceremonies timeline into a sandstone palace corridor using `04-timeline-bg.jpg` with an auspicious 1.5px gold leaf border, and subtle deckle texture inside individual `EventCard` components.
  - **Section 5 (`Countdown.tsx`)**: Backed by `05-countdown-bg.jpg` featuring glowing terrace diyas under starlight, complemented by frosted glass (`backdrop-filter: blur(6px)`) countdown tiles.
  - **Section 7 (`ClosingBlessing.tsx`)**: Harmoniously concluded with `01-ganesha-bg.jpg` in a ceremonial gold-bordered card with the glowing diya motif.
- **Strict Accessibility & Contrast Guardrails**:
  - Applied tailored warm translucent gradient overlays (`rgba(255, 252, 247, 0.88)` to `rgba(253, 246, 233, 0.94)`) to all cards.
  - Text contrast verified: Ink on Surface at 16.79:1, Maroon on Surface at 10.98:1, White on Maroon at 11.16:1 — exceeding WCAG 2.2 AAA.
  - 100% semantic HTML landmarks, skip links, and ARIA attributes fully maintained.

## [0.1.11] — Sacred Header, Central Om & Royal Opening Gate Effect
### Added & Improved
- **Minimal Sacred Header Typography**:
  - Refined the entry portal typography to keep **strictly `॥ श्री गणेशाय नमः ॥`** as the main header, removing couple names and secondary subtitles for pure, uncluttered sacred reverence.
  - Positioned at the top center with an auspicious golden filigree arch line.
- **Central Sacred Om (ॐ) Focal Point**:
  - Positioned the consecrated Devanagari ॐ symbol prominently in the exact center of the screen, radiating warm golden light, concentric halo rings, and 24 Vedic sun rays as the 9 ceremony cards orbit outward.
- **Royal Opening Gate Effect (`RoyalGate.tsx`)**:
  - Implemented an ornate Rajput double-door palace gate (`RoyalGate.tsx`) featuring royal velvet maroon base, gold leaf borders, traditional Jaali lattice filigree, and brass medallion doorknockers.
  - When the user finishes the corridor or taps "आमंत्रण में प्रवेश करें • Enter", the palace double doors swing open outward in 3D perspective (`rotateY(-88deg)` / `rotateY(88deg)`) as radiant golden light beams pour forth from the center seam, majestically unveiling the wedding invitation.

### Added & Improved
- **Decoupled First Entry Experience**:
  - Re-architected `PerspectiveTunnelHero` as an individual, standalone **First Entry Portal** (`fixed inset-0 z-[100]`) completely detached from the main page scroll height.
  - The main wedding invitation page (`page.tsx`) now retains its clean, natural document flow without any tall scroll runways pushing down content.
  - While the 3D entry portal is active, `document.body.style.overflow = "hidden"` is locked, enabling smooth internal 3D flight via mouse wheel, touch gestures, and keyboard navigation.
  - Once completed or when "आमंत्रण में प्रवेश करें • Enter" is clicked, the portal executes a royal golden blur and scale curtain unveil (`exit: { opacity: 0, scale: 1.04, filter: "blur(12px)" }`), immediately restoring normal document scrolling to the invitation.
- **Instant Entry & Replay Capabilities**:
  - Added a subtle top-right "सीधे आमंत्रण देखें → • Skip to Invitation" button for quick bypass.
  - Added a dedicated "✨ मांगलिक 3D दर्शन • 3D Corridor" button at the head of the invitation and a "3D" toggle in [`FloatingControls.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/FloatingControls.tsx) so guests can revisit the 3D corridor anytime.

### Added & Improved
- **Sacred Om (ॐ) Background Integration**:
  - Created [`SacredOm.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/art/SacredOm.tsx) featuring calligraphic Devanagari ॐ geometry, 24 Vedic sun rays, and warm golden radial aura.
  - Positioned at the 3D perspective vanishing point behind the central typography and depth rings, scaling from `0.9` to `1.45` with divine radiant warmth as ceremonies unfold.
- **Extended Scroll Runway Duration**:
  - Increased scroll distance to `480vh` on desktop and `380vh` on mobile, giving guests ample time to comfortably view each of the 9 ceremonial ritual images and their inscriptions.
  - Broadened card stagger span (`staggerSpan: 0.58`) for smoother 3D flight arcs.
- **Dead-Center Mathematical Alignment**:
  - Resolved flex-flow horizontal displacement by placing the central typography in an unambiguous absolute centered container (`inset-0 flex items-center justify-center`).
  - Explicitly centered the bottom "आमंत्रण में प्रवेश करें • Enter" button (`left-0 right-0 mx-auto`).
- **Ceremonial Flight Progress Bar**:
  - Added subtle royal gold progress track at the bottom of the corridor linked to `smoothProgress`.
### Added & Improved
- **Grand 3D Entry Corridor Architectural Upgrade**:
  - Re-architected `PerspectiveTunnelHero` from wheel event interception to a natural **Sticky Scroll Runway** (`250vh` track with a `sticky top-0 h-[100svh]` stage) driven directly by Motion's `useScroll` and `useSpring`.
  - Completely eradicated scroll-locking (`e.preventDefault()`), ensuring buttery-smooth native scrolling across desktop trackpads, mouse wheels, and mobile touchscreens.
  - Connected bilingual support via `useLocale()`, providing seamless Hindi and English titles for all 9 ceremony cards (`01-tilak.jpg` through `09-vivah.jpg`), hero typography, and action buttons.
  - Interactive "आमंत्रण में प्रवेश करें • Enter" button smoothly scrolls to `#main-invitation`.
  - Zero-jank reduced motion fallback collapsing runway to `100svh` with a static ceremonial display.
- **Section 2 (`CoupleReveal`) Polish**:
  - Localized the ceremonial subtitle badge ("शुभ विवाह उत्सव" / "Wedding Celebrations") according to active locale.
- **Section 4 (`EventCard`) Polish**:
  - Localized the ceremony top badge ("शुभ मुहूर्त" / "मांगलिक लग्न" vs "Auspicious Muhurat" / "Sacred Nuptials") according to active locale.
- **Verification**:
  - Verified 100% pass across all 16 automated QA audit checks (`npm run test:qa`).
  - Verified clean TypeScript compilation (`tsc --noEmit`).

### Added
- Integrated `perspective-tunnel-hero.tsx` and `perspective-tunnel-hero.css` in [`src/components/ui/`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/perspective-tunnel-hero.tsx) with demo wrapper in `demo.tsx`.
- Generated and MozJPEG-compressed 9 authentic wedding ceremony ritual images:
  - `01-tilak.jpg` (78.5 KB): Shubh Tilak ceremony thali and diyas
  - `02-haldi.jpg` (102.8 KB): Auspicious Haldi ceremony urli and yellow marigolds
  - `03-mehendi.jpg` (104.4 KB): Mehendi celebration terrace and palace backdrop
  - `04-sangeet.jpg` (105.7 KB): Royal Sangeet musical evening palace courtyard
  - `05-varmala.jpg` (122.1 KB): Jaimala garland exchange ceremony
  - `06-phera.jpg` (98.1 KB): Sacred Saptapadi Phere around holy havan agni
  - `07-sindoor.jpg` (105.2 KB): Sindoor Daan auspicious ritual moment
  - `08-ashirwad.jpg` (103.6 KB): Elders' blessing Aarti with floral rose petal shower
  - `09-vivah.jpg` (98.2 KB): Sacred Vedic wedding mandap setup
- 3D spatial corridor flight physics using golden-angle trigonometry (`137.5°`), spring settling, camera pointer parallax, and touch swipe gestures.
- Embedded into the main invitation flow in [`page.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/app/page.tsx) as the "मांगलिक उत्सव 3D दर्शन" corridor leading into the ceremony timeline.

## [0.1.6] — Event Images & Scroll Reveal Entrance Effect
### Added
- Generated high-quality ceremonial images for all confirmed wedding events:
  - `tilak.jpg`: Auspicious brass thali, kumkum, chandan, akshata, sacred mauli, glowing diyas, and fresh marigold decor.
  - `vivah.jpg`: Sacred Vedic mandap with cascading marigolds, holy agni havan kund, and traditional wedding celebration setup.
- Processed and optimized both images using MozJPEG to lightweight sizes (110.4 KB and 143.7 KB) in `public/images/events/`.
- Integrated images into [`EventCard.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/sections/EventCard.tsx) with a scroll reveal entrance effect (`scale: 1.08 -> 1`, `opacity: 0 -> 1`), floating circular ceremony seals, warm golden gradient overlays, and accessible bilingual alt descriptions.
- Added `image-reveal` variant to [`ScrollReveal.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/motion/ScrollReveal.tsx).
- Full reduced-motion fallback honoring `prefers-reduced-motion`.

## [0.1.5] — React Bits Ribbons Integration
### Added
- Integrated React Bits `<Ribbons />` component in [`src/components/ui/Ribbons.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/Ribbons.tsx) and [`Ribbons.css`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/Ribbons.css) featuring WebGL2 shaders, Catmull-Rom spline sampling, and spring physics.
- Added ambient ceremonial silk ribbon background layer in sacred colors (`#B07A22`, `#C85A16`, `#F59E0B`, `#6E1E2A`) that softly flows and tracks pointer motion across [`page.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/app/page.tsx).
- Respects `prefers-reduced-motion` with complete graceful bypass of WebGL loop.

## [0.1.4] — React Bits ClickSpark Integration
### Added
- Integrated React Bits `<ClickSpark />` component in [`src/components/ui/ClickSpark.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/ClickSpark.tsx) with strict TypeScript types, star/line/streak/dot particle geometries, and `prefers-reduced-motion` safety.
- Wrapped ceremonial invitation layout in [`page.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/app/page.tsx) with festive golden, saffron, and amber star sparkles (`#B07A22`, `#C85A16`, `#F59E0B`, `#FDE047`, `#FFFDF8`) on user taps and clicks.

## [0.1.3] — React Bits Counter & Full Time Format Countdown
### Added
- Integrated React Bits `<Counter />` component in [`src/components/ui/Counter.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/Counter.tsx) and [`Counter.css`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/ui/Counter.css) with strict TypeScript types, physics spring settling, and motion blur.
- Upgraded the wedding countdown to the full time format (**Days**, **Hours**, **Minutes**, **Seconds**) updating live every second in IST.
- Added `getTimeRemaining` in [`src/lib/date.ts`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/lib/date.ts) calculating exact remaining time till Shubh Vivah.
- Added localized labels for `hoursLabel`, `minutesLabel`, and `secondsLabel` in both Hindi and English dictionaries.
- Mobile-responsive 4-tile ceremonial grid in [`Countdown.tsx`](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/src/components/sections/Countdown.tsx) styled with warm ivory cards, gold border trims, and ceremonial colon dividers.

## [0.1.2] — Couple Portrait Illustration & Transformative Scroll Motion
### Added
- Integrated user-supplied couple wedding portrait illustration (`couple.png`) into `CouplePortrait.tsx` and `CoupleReveal.tsx`.
- Consecrated traditional Jharokha arch frame with warm golden radiant aura and auspicious floral flourishes.
- Scroll-driven transformative animation suite:
  - `ScrollProgress`: Top-of-page reading progress indicator bar using GPU-composited `scaleX`.
  - `ScrollReveal`: Multi-variant scroll reveals (`fade-up`, `fade-down`, `fade-left`, `fade-right`, `scale-in`, `blur-in`) with stagger support.
  - `ScrollParallax`: Scroll-linked parallax translation and scale transforms.
  - `TimelineDraw`: Progressive SVG path length drawing of the ceremonial spine linking the Tilak & Vivah events.
  - `SectionTransition`: Visual continuity wrappers (`curtain-up`, `warm-glow`, `golden-border`) between invitation sections.
- Strict reduced-motion fallback honoring `prefers-reduced-motion` across all scroll-linked components.
- Bilingual alt text support for the portrait in `src/i18n/` (`hi.ts`, `en.ts`, `types.ts`).

## [0.1.1] — Motion AI Kit Integration & Spring Physics
### Added
- Upgraded `motion` to v14.6.0 and installed `motion-ai` v14.2.0
- Configured Motion skill inside `.agents/skills/motion/` and `.gemini/skills/motion/`
- Configured Motion hosted MCP servers (`https://mcp.motion.dev` and `https://mcp.motion.dev/plus`)
- Enabled `domMax` in `MotionProvider` to support shared-element layout animations
- Upgraded `LanguageSwitch` to use physics spring-based shared layout sliding thumb (`layoutId="lang-active-thumb"`)
- Upgraded `EventCard` and `ShareSection` with responsive spring hover and tap gestures (`visualDuration: 0.35, bounce: 0.15`)
- Added automated QA test script `npm run test:qa` ([scripts/qa-audit.mjs](file:///c:/Users/NAVEEN/Desktop/Lancealot/rachna-udit-wedding-invitation-agent-pack/scripts/qa-audit.mjs))

## [0.1.0] — Foundation, Static Invitation, Motion & Sharing Implementation
### Added
- Complete Next.js (App Router) project with strict TypeScript configuration
- Design tokens & CSS variables implementing the "Sacred Marigold Garden" palette
- Noto Serif Devanagari, Noto Sans Devanagari, and Cormorant Garamond self-hosted typography via `next/font`
- Canonical wedding data model with strict null safety for unconfirmed fields (`src/content/wedding.ts`)
- Hindi-first i18n architecture (`src/i18n/hi.ts`, `src/i18n/en.ts`, `LocaleProvider`) with instant client-side switching and screen reader announcements
- Sacred Ganesha single-weight line art with line-draw animation and reduced-motion fallback
- Ceremonial SVG artwork: Tilak icon, Vivah mandap icon, Lotus section divider, Toran marigold garland, and ambient drifting petals
- Core ceremonial sections: `OpeningInvocation`, `CoupleReveal`, `InvitationMessage`, `CeremonyTimeline`, `EventCard`, `Countdown`, `ShareSection`, and `ClosingBlessing`
- Web Share API integration with automatic clipboard fallback
- Dynamic Open Graph preview image generator (`src/app/opengraph-image.tsx`)
- Reduced motion support honoring `prefers-reduced-motion` throughout the application

## [0.0.1] — Documentation pack
### Added
- README, AGENTS, INSTRUCTIONS, TASKS, PROGRESS, DECISIONS, CHANGELOG
- docs/: PROJECT_BRIEF, CONTENT_SPEC, DESIGN_SYSTEM, MOTION_SYSTEM, ANIMATION_CATALOG, MOBILE_UX, I18N, TECHNICAL_ARCHITECTURE, COMPONENTS, PERFORMANCE, ACCESSIBILITY, ASSET_GUIDE, QA_TEST_PLAN, IMPLEMENTATION_BLUEPRINT, RESEARCH
- manifest.json
