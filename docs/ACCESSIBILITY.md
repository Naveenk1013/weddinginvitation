# ACCESSIBILITY.md

Target: WCAG 2.2 Level AA, with some AAA-leaning choices for mobile comfort.

## Text & contrast
- Normal text ≥ **4.5:1**; large text ≥ **3:1**. Measure every token pair actually used.
- Gold (`#B07A22`) is decorative; do not use for small body text without verification.
- Key information (names, dates, venues, actions) is **real HTML text**, not text baked into images/SVG.
- Support browser text zoom to 200% and OS font scaling without clipped or overlapping content (test at 320 px).

## Motion
- Honor `prefers-reduced-motion` globally (Motion `reducedMotion="user"` + `useReducedMotion`).
- Reduced motion: large positional/parallax → opacity-only or static; ambient loops off.
- Interaction-triggered nonessential animation must be disableable; provide an in-page control if any remains.
- **No flashing**: never exceed 3 flashes per second; prefer none. Avoid large high-contrast strobing areas.
- Auto-playing movement lasting > 5 s (ambient loops) needs a pause mechanism or must respect reduced motion; keep loops subtle.

## Touch & pointer
- Internal target 44×44 CSS px for important controls (WCAG 2.2 AA minimum 24×24 with exceptions).
- No path-based gestures or drag-only actions; single-pointer alternatives always available.

## Keyboard & focus
- All controls reachable and operable by keyboard; logical order; visible focus ring (≥ 3:1 against adjacent colors, 2 px maroon with offset).
- Focus not obscured by sticky controls (WCAG 2.2 Focus Not Obscured).
- Skip link to main content.

## Semantics & screen readers
- Landmarks: `header`/`main`/`footer`; one `h1` (couple names), logical `h2` per section.
- `<html lang>` and inline `lang` on mixed-language text; update on locale switch.
- Language switch: grouped buttons with `aria-pressed`, announced result via polite live region ("हिन्दी चुनी गई" / "English selected").
- Decorative SVG/motion elements `aria-hidden="true"`; meaningful icons labeled.
- Dates in `<time datetime="2026-12-02">`.
- Countdown: don't announce every tick; update `aria-live="off"` or announce only at load.
- Share success: polite live-region message, not just a visual check.

## Audio (when added)
- No autoplay. Visible Play/Pause/Mute with accessible names and state.
- Default volume moderate; remember mute choice for the session.

## Forms (future RSVP)
Labels, error messages tied with `aria-describedby`, no reliance on color alone, accessible authentication-friendly (no cognitive tests).

## Testing
Axe/Lighthouse automated checks + manual: keyboard-only pass, VoiceOver (iOS), TalkBack (Android), 200% zoom, reduced-motion on, high-contrast/forced-colors sanity check.
