# AGENTS.md — Operating Rules for Coding / AI Agents

You are building a wedding invitation for a real family. Accuracy, respect and reliability matter more than flashy effects.

## Mandatory reading order (do not skip)

1. `README.md`
2. `INSTRUCTIONS.md`
3. `docs/PROJECT_BRIEF.md`
4. `docs/CONTENT_SPEC.md` — what may and may not be displayed
5. `docs/I18N.md`
6. `docs/DESIGN_SYSTEM.md`
7. `docs/MOBILE_UX.md`
8. `docs/PERFORMANCE.md` and `docs/ACCESSIBILITY.md`
9. `docs/MOTION_SYSTEM.md` and `docs/ANIMATION_CATALOG.md`
10. `docs/TECHNICAL_ARCHITECTURE.md`, `docs/COMPONENTS.md`
11. `TASKS.md`, `PROGRESS.md`, `DECISIONS.md`

Do **not** write animation code before reading cultural constraints, content rules, Hindi localization, mobile and performance budgets.

## Hard rules

- **Never invent** times, venues, parent names, RSVP contacts, dress codes, muhurat, accommodation, photos, music or extra ceremonies. Hide the section or show a clearly marked "pending" state.
- The opening `॥ श्री गणेशाय नमः ॥` is immutable.
- Hindi is the default locale on first visit.
- Names, dates, venues and actions are **real HTML text**, never only baked into images/SVG.
- Sacred imagery (Ganesha) gets only line-draw, soft fade/scale, glow or mask reveal. **No** spinning, shaking, bouncing, dragging or playful treatment.
- No flashing (never > 3 flashes/second; prefer none).
- Respect `prefers-reduced-motion` everywhere.
- No audio autoplay. Music only after a track is supplied and approved, with visible Play/Pause/Mute.
- Animate `transform` and `opacity`; avoid animating layout properties.
- Content first, animation second: ship a readable static version before choreography.

## Workflow

1. Pick the next unchecked item in `TASKS.md` (work in small vertical slices).
2. Implement, run lint/type-check/tests, check at 320 px and 390 px, and with reduced motion.
3. Update `PROGRESS.md` (what changed, what's blocked).
4. Record lasting architectural/product decisions in `DECISIONS.md`.
5. Add a line to `CHANGELOG.md`.

## Definition of done for any slice

- Works at 320–430 px, Hindi and English
- Reduced-motion path verified
- No new layout shift; no console errors
- Contrast and touch-target requirements met
- Docs updated

## When information is missing

Ask the family/owner or leave the field `null`. Do not guess, do not use placeholder names that look real.
