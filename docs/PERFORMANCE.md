# PERFORMANCE.md

## Targets (p75 real users)
| Metric | Good threshold |
|---|---|
| LCP | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |

Measure load, responsiveness and visual stability — not just HTML arrival time.

## Budgets (starting points; tune with measurements)
| Area | Budget |
|---|---|
| Initial JS (gzip) | ≤ 100 KB, stretch ≤ 70 KB |
| Motion feature bundle | Use `LazyMotion` + `m`; target ≈ 5 KB features initially |
| Inline SVG art, first viewport | ≤ 30 KB |
| Fonts (Devanagari subsets) | Subset and limit weights (≈ 2–3 files per script) |
| Images (future photos) | Responsive `srcset`, AVIF/WebP, lazy below the fold |
| Total first-load transfer | ≤ ~300 KB excluding lazy modules |

## Rules
1. **Choreography over count**: one animated mandala/vine beats dozens of animated stickers.
2. Animate `transform` and `opacity`; never animate layout-triggering properties.
3. Reserve space for fonts/SVG/images to prevent CLS; `next/font` for self-hosted fonts.
4. First viewport = text + lightweight SVG + CSS + essential Motion code.
5. Lazy-load: galleries, map embeds, audio, RSVP tools, ambient layers (after idle).
6. Ambient animation: pause off-screen (`IntersectionObserver`/`useInView`) and when `document.hidden`.
7. Cap simultaneous animated elements (mobile ≤ ~12 ambient items).
8. Optimize SVG (SVGO), reuse `<symbol>`/`<use>` for repeated motifs, keep path point counts sane.
9. Avoid heavy filters (`blur`, large `box-shadow` animation, `backdrop-filter`) on animated elements.
10. Avoid long main-thread tasks (> 50 ms) during scroll; debounce scroll handlers or use Motion's scroll utilities.

## Verification
- Lighthouse (mobile) + PageSpeed Insights; WebPageTest on mid-range Android profile.
- Chrome DevTools Performance with 4× CPU throttle + Slow 4G.
- Bundle analyzer on every phase completion.
- Record results in `PROGRESS.md`.
