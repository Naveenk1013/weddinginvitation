# MOTION_SYSTEM.md

## Library
**Motion for React** (formerly Framer Motion): declarative animation for HTML/SVG, variants, gestures, layout animation, scroll-linked animation, in-view triggers, SVG path animation, presence transitions.

## Three motion layers
| Layer | Purpose | Duration | Examples |
|---|---|---|---|
| Interface | Responsive feedback | 100–250 ms | Language-thumb slide, button press, accordion, share success, RSVP state |
| Narrative | Ceremonial storytelling | 600–1600 ms | Ganesha path draw, couple reveal, timeline draw, ceremony marker bloom |
| Ambient | Make the page feel alive | 4–12 s loops, low amplitude | Petal drift, diya breathe, leaf sway, tiny shimmer, bell swing |

## Shared tokens
```ts
export const ease = {
  gentle: [0.22, 1, 0.36, 1],
  soft:   [0.4, 0, 0.2, 1],
} as const;

export const dur = { fast: 0.18, base: 0.45, slow: 0.9, epic: 1.4 } as const;

export const reveal = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: dur.base, ease: ease.gentle } },
};
```

## Bundle strategy
Use `LazyMotion` with the lightweight `m` component and load features asynchronously (`domAnimation`, or `domMax` only if layout animation is truly needed). The full `motion` component is roughly 43 KB; `LazyMotion` can bring the initial feature bundle to roughly 5 KB depending on configuration. Verify with the bundle analyzer.

## Rules
1. Animate `transform` and `opacity`. Avoid animating `width/height/top/left/margin`.
2. Trigger narrative motion with `whileInView` + `viewport={{ once: true, amount: 0.3 }}`.
3. Scroll-linked effects use `useScroll`/`useTransform`; keep them off the first viewport critical path.
4. Sacred artwork: **only** path draw, soft scale (≤ 1.03), opacity, glow, mask reveal.
5. Ambient loops pause when off-screen and when the tab is hidden.
6. Never exceed 3 flashes per second; prefer no flashing at all.
7. Limit concurrent animated elements on mobile; prefer one rich SVG over many small ones.

## Reduced motion
- Wrap the app in `<MotionConfig reducedMotion="user">`.
- Use `useReducedMotion()` to swap large positional/parallax animation for opacity-only or static states.
- Disable ambient loops (petals, flame, sway, shimmer) entirely.
- Provide an in-page "Reduce animation" toggle if any interaction-triggered nonessential animation remains.
- Content must be fully visible and in final state without any animation running.

## Performance guardrails
- Use `will-change` sparingly and only during animation.
- Test with 4× CPU throttling and slow 4G.
- If a frame budget is missed on a mid-range Android device, reduce element count before reducing quality of key moments.
