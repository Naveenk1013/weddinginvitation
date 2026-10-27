# MOBILE_UX.md

Mobile is the primary product; tablet/desktop are progressive enhancement.

## Viewports
Design and QA at **320, 360, 390, 412, 430** CSS px widths. Also test landscape phone and a tablet (768) and desktop (1280) for sanity.

## Viewport units
- Use `svh` for hero sections that must fit the smallest visible area, `dvh` where dynamic browser chrome should be tracked, `lvh` sparingly.
- Do not rely on `100vh` for full-screen sections.
- Provide `min-height` fallbacks (`100vh`) before `svh`/`dvh` declarations.

## Safe areas
```css
.sticky-controls {
  padding-top: max(12px, env(safe-area-inset-top));
  padding-right: max(12px, env(safe-area-inset-right));
  padding-bottom: max(12px, env(safe-area-inset-bottom));
}
```
Set `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`.

## Touch
- Important controls (language switch, share, audio, map, calendar, RSVP) ≥ **44×44 CSS px** (internal target; WCAG 2.2 AA minimum is 24×24 with exceptions).
- ≥ 8 px spacing between adjacent targets.
- No hover-only interactions; no drag-only interactions; no double-tap requirements.
- Avoid scroll-hijacking, scroll snapping that traps users, and horizontal scroll on the page.

## Sticky controls
- One compact floating cluster: `हि | EN`, share, (later) audio.
- Must not cover key text; respect safe areas; hide/dim during opening sequence if needed.

## Slow network & low-end devices
- First viewport = text + lightweight SVG + CSS. Names and both dates readable before decorative modules load.
- Lazy-load maps, galleries, audio, RSVP.
- Skeleton-free: avoid layout jumps; reserve space for late content.
- Test: Slow 4G, 4× CPU throttle, 2 GB-RAM Android class device if possible.

## In-app browsers
Links will open inside WhatsApp/Instagram/Facebook in-app browsers. Test: Web Share may be unavailable → copy-link fallback; audio restrictions; `100vh` quirks; no reliance on `target=_blank` popups for essentials.

## Orientation & zoom
Do not lock orientation or disable pinch-zoom. Support text scaling up to 200% without loss of content.
