# ASSET_GUIDE.md

## SVG art
- Hand-authored or commissioned **single-weight line art** suitable for `pathLength` drawing; strokes with `vector-effect: non-scaling-stroke` where useful.
- Optimize with SVGO; keep viewBox consistent; prefer inline components over `<img>` for animated pieces.
- Use `currentColor` / CSS variables so tokens control color.
- Reuse motifs through `<symbol>`/`<use>`.
- Provide accessible handling: decorative = `aria-hidden`; meaningful = `role="img"` + title.

## Required art set
Ganesha line art · mandala/rangoli · lotus · marigold garland & petals · vine/leaf divider · diya · bell · tilak icon · vivah icon (mandap/lotus/garland) · calendar icon · toran/arch frame.

## Cultural handling
- Ganesha is sacred: respectful depiction only; placed at the top/opening, never as a decorative pattern repeated randomly, never tiled, never obscured by UI, never animated playfully (no spin/shake/bounce/drag).
- Avoid placing sacred imagery behind small text or in footers/error states.
- Review art with the family before launch.

## Photography (future)
- Only family-approved photos. Alt text in both languages. Compress to AVIF/WebP, responsive sizes, lazy-load; reserve aspect ratio.
- Never commit unapproved personal images or metadata (strip EXIF/location).

## Music (future)
- Needs: track file, rights/permission confirmation, family approval.
- Format: AAC/MP3 (+ Ogg optional), moderate bitrate; lazy-loaded; **never autoplay**; created/resumed on user gesture.
- Visible Play / Pause / Mute control.

## Open Graph image
1200×630, ivory background, maroon type: **रचना × उदित / शुभ विवाह / 2 दिसंबर 2026**, restrained Ganesha/floral motif. Text must remain legible at thumbnail size.

## File naming
`kebab-case`, descriptive, no spaces: `ganesha-line.svg`, `mandala-gold.svg`, `og-default.png`, `tilak-icon.svg`. Photos: `gallery-01-<slug>.avif`. Audio: `music-<slug>.m4a`.

## Licensing
Record the source/license of every asset in `docs/RESEARCH.md` (or an `ASSETS_LICENSES` section). Fonts: Noto fonts are open-licensed (OFL) — keep license files.
