# TASKS.md — Implementation Backlog

Legend: `[ ]` todo · `[~]` in progress · `[x]` done · `[!]` blocked on content

## Phase 0 — Foundation
- [x] Scaffold Next.js (App Router) + TypeScript project
- [x] ESLint, Prettier, strict TS config
- [x] Canonical `wedding` data object (`src/content/wedding.ts`) with nullable future fields
- [x] Hindi/English dictionaries (`src/i18n/`)
- [x] `next/font` setup: Noto Serif Devanagari + Noto Sans Devanagari
- [x] Design tokens (CSS variables) from `docs/DESIGN_SYSTEM.md`
- [x] Metadata shell + Open Graph image route
- [x] Reduced-motion infrastructure (`MotionConfig reducedMotion="user"`, `useReducedMotion` helper)
- [x] Safe-area + `dvh/svh` layout primitives

## Phase 1 — Static readable invitation
- [x] Invocation section
- [x] Couple names section
- [x] Invitation message section
- [x] Timeline section
- [x] शुभ तिलक card
- [x] शुभ विवाह card
- [x] Share section (static)
- [x] Closing blessing
- [x] `हि | EN` language switch
- [x] Verify at 320/360/390/412/430 px

## Phase 2 — Motion layer
- [x] `LazyMotion` + `m` setup
- [x] Ganesha SVG path draw (opening)
- [x] Couple reveal (mirrored entrances + floral connector)
- [x] Timeline progressive draw
- [x] Event icon animations (tilak, vivah)
- [x] Event-card transitions
- [x] Language-switch sliding thumb + crossfade
- [x] Button press feedback
- [x] Ambient: petals, diya flame, leaves, bell
- [x] Reduced-motion variants for everything

## Phase 3 — Sharing & countdown
- [x] Web Share API + copy-link fallback + success feedback
- [x] Days-only countdown
- [x] OG image verified in link previews

## Phase 4 — QA & launch
- [x] Run `docs/QA_TEST_PLAN.md` fully
- [x] Performance audit (throttled CPU/network)
- [x] Accessibility audit
- [ ] Deploy + final family review

## Phase 5 — Content-dependent
- [x] Add-to-Calendar buttons for Tilak & Vivah dates (Google Calendar + Apple/Outlook .ics)
- [x] Venue + map link (Doila Bintoli, Bihar / https://maps.app.goo.gl/tQhtXHdjyp7GPzuD7)
- [x] Family / hosts section (Bride Rachna Kumari parents: Mrs. Ranju Prasad & Mr. Yogendra Prasad)
- [ ] RSVP (WhatsApp contact — to be added later)
- [ ] Additional ceremonies (pending family confirmation)
- [ ] Dress code, accommodation (pending family confirmation)
- [ ] Photo gallery (pending family confirmation)
- [ ] Background music + controls (pending family confirmation)
