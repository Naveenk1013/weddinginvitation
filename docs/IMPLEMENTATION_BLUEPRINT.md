# IMPLEMENTATION_BLUEPRINT.md

Build **content-first, animation-second**.

## Phase 1 — Foundation
```bash
npx create-next-app@latest rachna-udit-invitation --ts --app --eslint
npm i motion          # Motion for React
```
- `src/content/wedding.ts` canonical data; dictionaries; tokens; fonts; metadata shell; reduced-motion infra.

### Fonts
```ts
// src/app/fonts.ts
import { Noto_Serif_Devanagari, Noto_Sans_Devanagari } from "next/font/google";
export const serif = Noto_Serif_Devanagari({ subsets: ["devanagari","latin"], weight: ["500","700"], variable: "--font-serif", display: "swap" });
export const sans  = Noto_Sans_Devanagari({ subsets: ["devanagari","latin"], weight: ["400","600"], variable: "--font-sans",  display: "swap" });
```

### Data
```ts
export const wedding = {
  invocation: "॥ श्री गणेशाय नमः ॥",
  events: [
    { id: "tilak", date: "2026-11-25", time: null, venue: null, mapUrl: null },
    { id: "vivah", date: "2026-12-02", time: null, venue: null, mapUrl: null },
  ],
} as const;
```

## Phase 2 — Static mobile invitation
Compose all sections as readable server-rendered HTML with final copy and layout. Verify 320–430 px, both locales, no JS needed to read essentials.

## Phase 3 — Motion
```tsx
// MotionProvider.tsx
"use client";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>{children}</LazyMotion>
    </MotionConfig>
  );
}
```
```tsx
// DrawPath.tsx — SVG line drawing
"use client";
import * as m from "motion/react-m";
export function DrawPath({ d, duration = 1.4 }: { d: string; duration?: number }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true">
      <m.path d={d} fill="none" stroke="currentColor" strokeWidth={1.5}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }} />
    </svg>
  );
}
```
```tsx
// Reveal.tsx — respects reduced motion
"use client";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
export function Reveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <m.div initial={{ opacity: 0, y: reduce ? 0 : 16 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </m.div>
  );
}
```
Check the installed Motion version's import paths (`motion/react`, `motion/react-m`) against current docs before copying.

Order: opening path draw → couple reveal → timeline draw → event icons/cards → language-switch motion → button feedback → ambient (petals, diya, leaves, bell).

## Phase 4 — Share & countdown
```ts
export async function shareInvite(url: string, title: string, text: string) {
  try {
    if (navigator.share) { await navigator.share({ url, title, text }); return "shared"; }
    await navigator.clipboard.writeText(url); return "copied";
  } catch { return "failed"; }
}
```

## Phase 5 — Hardening
Reduced-motion, slow-network, CPU-throttle tests; accessibility audit; QA plan; family review; deploy.

## Phase 6 — Content-dependent features
Add as data arrives: times (→ calendar `.ics`, exact countdown), venue/map (lazy), RSVP, hosts, gallery, music (with controls). Each module hidden until its data is non-null.

## Definition of launch-ready
All `QA_TEST_PLAN.md` boxes checked; performance and accessibility targets met; family signs off on Hindi copy and sacred-art placement.
