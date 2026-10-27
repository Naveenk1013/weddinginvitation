# RESEARCH.md — Source Index & Research-Derived Decisions

## Source index (verify current versions before relying on specifics)
| Topic | Source | Used for |
|---|---|---|
| Motion for React docs (motion.dev) | Official docs | Animation APIs, SVG path animation, gestures, in-view, scroll, layout/presence, `LazyMotion`, reduced motion |
| WCAG 2.2 (w3.org/TR/WCAG22) | W3C | Contrast (1.4.3), text vs images of text (1.4.5), target size (2.5.8 / 2.5.5), flashing (2.3.1/2.3.2), animation from interactions (2.3.3) |
| W3C WAI technique on `prefers-reduced-motion` | W3C WAI | Respecting motion-sensitivity preferences |
| web.dev (Core Web Vitals, animations) | Google | LCP/INP/CLS thresholds; transform-based animation guidance |
| MDN Web Docs | Mozilla | Viewport units (`svh/lvh/dvh`), `env(safe-area-inset-*)`, Web Share API, autoplay policy / Web Audio, `Intl.DateTimeFormat` |
| Next.js docs | Vercel | App Router, metadata & Open Graph, `next/font` |
| Tailwind CSS docs | Tailwind Labs | Next.js integration (optional) |
| Google Fonts / Noto | Google | Noto Sans & Serif Devanagari coverage |
| Open Graph protocol / Meta sharing docs | Meta | `og:image` and link-preview behavior |
| Digital-invitation products (Greenvelope, Paperless Post, Joy) | Vendor sites | Market patterns: animated presentation, rich event info, sharing, RSVP |
| Indian wedding-invitation collections | Vendor sites | Motif vocabulary: ornament, henna/paisley, mandala, floral, metallic accents |

## Research-derived decisions
1. **Scroll journey over card clone** — current products blend stationery cues with animation, sharing and RSVP.
2. **Motion for React** — covers SVG draw, scroll, gestures, presence in one library.
3. **LazyMotion + `m`** — full `motion` ≈ 43 KB vs roughly 5 KB initial with `LazyMotion` (config-dependent).
4. **Reduced motion is mandatory** — WCAG guidance + `prefers-reduced-motion`; Motion offers `MotionConfig` and `useReducedMotion`.
5. **No flashing** — WCAG flashing thresholds (> 3 flashes/second can be problematic).
6. **Real text over images of text** — WCAG favors real text.
7. **Gold decorative only** — WCAG AA 4.5:1 normal / 3:1 large.
8. **`svh/dvh` + safe-area insets** — mobile browser chrome and notches.
9. **44×44 internal target** — stricter than WCAG 2.2 AA (24×24); AAA uses 44×44.
10. **Core Web Vitals thresholds** — LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at p75.
11. **Transform/opacity animation** — avoids layout-shifting, expensive rendering.
12. **Noto Devanagari fonts via `next/font`** — good coverage, self-hosting, reduced layout shift.
13. **`hi-IN` default, `Intl.DateTimeFormat`** — locale-aware date formatting.
14. **Web Share API + fallback** — native share where supported.
15. **Open Graph preview in v1** — rich link previews matter for WhatsApp-style sharing.
16. **No audio autoplay** — browser autoplay restrictions; create/resume audio on user gesture.

## Notes
- Version-specific details (Motion import paths, Next.js APIs, bundle sizes) change; re-check official docs at implementation time.
- Asset licenses should be logged here as assets are added.
