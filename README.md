# Rachna & Udit — Mobile-First E-Wedding Invitation

A Hindi-first, culturally respectful, richly animated, mobile-first digital wedding invitation.

## Creative direction: "Sacred Marigold Garden"

Warm ivory backgrounds, deep maroon typography, restrained saffron, decorative gold, botanical greens, fine mandala/rangoli details, marigolds, lotus forms, diya flames, bells, ceremonial arches, and respectful Ganesha-inspired line art.

The invitation is **not** a digital copy of a printed card. It is a **ceremonial scroll experience**:

> sacred opening → couple reveal → invitation message → animated ceremonial timeline → शुभ तिलक → शुभ विवाह → countdown → future venue/RSVP modules → share invitation → closing blessing

## Confirmed facts (the ONLY facts that may be shown as final)

| Item | Value |
|---|---|
| Opening line | `॥ श्री गणेशाय नमः ॥` (immutable unless the family changes it) |
| Couple | रचना × उदित / Rachna × Udit |
| Heading | सप्रेम आमंत्रण |
| शुभ तिलक | Wednesday, 25 November 2026 |
| शुभ विवाह | Wednesday, 2 December 2026 |
| Default language | Hindi (`hi-IN`), secondary English (`en-IN`) |

Everything else (times, venues, parent names, RSVP contacts, dress code, muhurat, accommodation, photos, music, extra ceremonies) is **pending**. Never invent it. See `docs/CONTENT_SPEC.md`.

## Stack (recommended)

- Next.js (App Router) + TypeScript
- Motion for React (formerly Framer Motion), with `LazyMotion` + `m` components
- Tailwind CSS (optional, not a hard dependency)
- `next/font` for self-hosted Noto Serif Devanagari + Noto Sans Devanagari
- Web Share API with copy-link fallback

## Success criteria

1. First viewport readable on a slow connection: names + both dates visible before decorative modules load.
2. Works at 320, 360, 390, 412, 430 px widths.
3. Correct Hindi and English; language switch without reload or scroll reset.
4. Fully usable with reduced motion; no flashing.
5. Core Web Vitals "good": LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.
6. Text contrast meets WCAG 2.2 AA; important touch targets 44×44 px.
7. Graceful degradation when sharing/audio/decorative assets fail.

## Where to start

Read `AGENTS.md` first (mandatory reading order), then `INSTRUCTIONS.md`, `TASKS.md`, `PROGRESS.md`, and `DECISIONS.md`. Deep specs live in `docs/`.

## File map

```
README.md  AGENTS.md  INSTRUCTIONS.md  TASKS.md  PROGRESS.md  DECISIONS.md  CHANGELOG.md  manifest.json
docs/
  PROJECT_BRIEF.md  CONTENT_SPEC.md  DESIGN_SYSTEM.md  MOTION_SYSTEM.md  ANIMATION_CATALOG.md
  MOBILE_UX.md  I18N.md  TECHNICAL_ARCHITECTURE.md  COMPONENTS.md  PERFORMANCE.md
  ACCESSIBILITY.md  ASSET_GUIDE.md  QA_TEST_PLAN.md  IMPLEMENTATION_BLUEPRINT.md  RESEARCH.md
```
