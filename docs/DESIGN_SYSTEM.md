# DESIGN_SYSTEM.md — "Sacred Marigold Garden"

## Color tokens
```css
:root {
  --bg:      #FFF8ED; /* warm ivory */
  --surface: #FFFDF8;
  --ink:     #2A1713;
  --muted:   #6B5149;
  --maroon:  #6E1E2A;
  --saffron: #C85A16;
  --gold:    #B07A22;
  --leaf:    #405B3E;
  --white:   #FFFFFF;
}
```
- **Gold is decorative** (borders, ornaments, large display text). Do not use for small body text unless contrast is measured ≥ 4.5:1.
- Body text: `--ink` on `--bg`/`--surface`. Headings: `--maroon`. Secondary text: `--muted` (verify ≥ 4.5:1).
- Saffron for accents/CTAs; verify text-on-saffron contrast before use.

## Typography
| Role | Font | Notes |
|---|---|---|
| Ceremonial display (invocation, names, event titles) | Noto Serif Devanagari | Verify Latin fallback pairing for English |
| UI / body | Noto Sans Devanagari | Covers Devanagari + supporting Unicode and OpenType features |
| Latin display (English) | A refined serif chosen during visual testing | Must pair with Noto Serif Devanagari |

- Self-host through `next/font`; subset sensibly; `display: swap` or equivalent.
- Test conjuncts, matras and line height on real Android and iOS devices. Devanagari needs generous line height (≈ 1.5–1.7 body, ≥ 1.3 display).
- Respect user font-size scaling; use `rem`.

## Ornament language
Marigold garlands/petals, lotus, diya, bells, ceremonial arches (toran), mandala/rangoli, paisley/henna forms, fine gold line borders, respectful Ganesha-inspired line art (single-weight strokes suitable for path drawing).

## Layout & hierarchy
1. Names and dates are the largest, highest-contrast text.
2. Ornament frames content and never competes with it.
3. One column on mobile; generous vertical rhythm; max content width ≈ 480–560 px, centered on larger screens with ornamental side margins.
4. Cards: ivory surface, thin gold border, soft maroon-tinted shadow, rounded corners (≈ 16–24 px).

## Components (visual)
- **Event card**: icon (tilak/vivah), title, weekday + date, optional time/venue slots (hidden when null).
- **Buttons**: min 44×44 px, clear focus ring (2 px maroon + offset), press feedback.
- **Language switch**: pill with sliding thumb, labels `हि` / `EN`.
- **Dividers**: thin floral/vine SVG dividers between sections.

## Dark mode
Not required for launch. If added, keep ivory/maroon identity (dark maroon surface, ivory text) and re-verify contrast.
