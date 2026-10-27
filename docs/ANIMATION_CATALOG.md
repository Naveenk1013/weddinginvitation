# ANIMATION_CATALOG.md

Each motif has a "motion signature". Reduced-motion column is mandatory.

| Element | Normal motion | Reduced motion |
|---|---|---|
| Ganesha line art | SVG `pathLength` 0→1 draw + soft fade/glow | Fully drawn, static |
| Invocation text | Fade/reveal + extremely subtle highlight sweep (no flashing) | Static text |
| Rachna & Udit | Mirrored entrance from left/right + floral connector draw | Fade only |
| Timeline | Vertical ceremonial line draws with scroll; markers bloom | Line fully drawn |
| Tilak icon | Tilak reveal + one-time tiny radial accent | Static icon |
| Vivah icon | Mandap/lotus/garland line drawing | Static icon |
| Diya | Low-amplitude flame movement (scaleY ±3%, slight skew) | Static flame |
| Bell | One gentle entrance swing (≤ 8°, once) | Static |
| Lotus | Soft bloom (scale 0.92→1, opacity) | Static |
| Calendar icon | Tiny page movement on interaction | None |
| Language switch | Sliding selector + 150 ms crossfade of text | Instant swap |
| Share button | Short radial flourish + success check | Check only |
| Marigold petals | Slow drift and rotation (few elements) | Hidden or static |
| Mandala | Fade/scale-in; **no fast perpetual rotation** | Static |
| Leaves/vines | Slight sway (≤ 2°) | Static |
| Section dividers | Vine draws on enter | Fully drawn |
| Event cards | Rise + fade on enter; subtle lift on press | Fade only |
| Countdown digits | Soft crossfade on change | Instant |

## Opening sequence (≈ 3.5 s, skippable by scrolling)
1. 0.0 s — ivory background, border ornament fades in.
2. 0.3 s — Ganesha outline draws (≈ 1.4 s).
3. 1.2 s — `॥ श्री गणेशाय नमः ॥` fades in beneath.
4. 2.2 s — marigold garland sweeps across top (transform only).
5. 3.0 s — scroll cue (small lotus chevron) appears.
Names and dates must be reachable immediately by scrolling; never block the page with the intro.

## Prohibited
Spinning/shaking/bouncing/dragging Ganesha; parallax on sacred art; strobing; auto-scrolling; large full-screen particle effects; sound on load.
