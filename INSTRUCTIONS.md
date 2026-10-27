# INSTRUCTIONS.md — Non-Negotiable Rules

## Product
- Single-page, scroll-driven, mobile-first invitation.
- Section order: Invocation → Couple reveal → Invitation message → Timeline → शुभ तिलक → शुभ विवाह → Countdown → (future) Venue / RSVP / Family / Gallery → Share → Closing blessing.
- Pending modules render nothing, or an honest "details coming soon" note — never fake data.

## Content
- Exact Hindi/English copy lives in `docs/CONTENT_SPEC.md`. Do not paraphrase it without approval.
- Both confirmed dates are Wednesdays.
- Countdown shows **days only** until an exact ceremony time is supplied.
- Dates stored as ISO date strings and formatted with `Intl.DateTimeFormat`.

## Language
- `hi-IN` default on first visit; `en-IN` secondary.
- `हि | EN` switch is persistent and touch-friendly; switching does not reload or reset scroll.
- Remember the choice only after an explicit change.

## Animation
- Three layers: **interface** (fast), **narrative** (scroll/ceremonial), **ambient** (slow, low amplitude).
- Richness from choreography, not element count: prefer one animated SVG mandala/vine over dozens of stickers.
- Keep ambient elements few (e.g., ≤ 12 petals on mobile).
- Reduced motion → opacity-only or static; ambient loops off.

## Mobile
- Design/QA widths: 320, 360, 390, 412, 430 px.
- Use `svh`/`dvh`, not bare `100vh`.
- Respect `env(safe-area-inset-*)` for sticky controls.
- Important controls ≥ 44×44 CSS px (internal target; WCAG 2.2 AA minimum is 24×24).

## Audio
- Off by default. Requires a user-supplied track and approval.
- Visible Play / Pause / Mute control. Audio context created/resumed on user gesture.

## Sharing
- Native Web Share API when available; copy-link fallback otherwise.
- Open Graph preview: ivory/maroon card reading रचना × उदित / शुभ विवाह / 2 दिसंबर 2026.

## Accessibility & Performance
- Text contrast ≥ 4.5:1 (3:1 for large text). Gold is decorative, not small body text.
- LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (p75).
- Lazy-load maps, galleries, audio, RSVP tools.
