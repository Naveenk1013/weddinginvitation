"use client";

import React from "react";
import * as m from "motion/react-m";
import { useScroll, useReducedMotion } from "motion/react";

/**
 * A thin scroll-progress bar fixed at the top of the viewport.
 * Uses scaleX transform for GPU compositing (no layout reflow).
 * Styled in saffron-to-maroon gradient to match the Sacred Marigold Garden theme.
 * Hidden under prefers-reduced-motion.
 */
export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  if (shouldReduceMotion) return null;

  return (
    <m.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background:
          "linear-gradient(90deg, var(--saffron) 0%, var(--maroon) 50%, var(--gold) 100%)",
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        zIndex: 1000,
        pointerEvents: "none",
      }}
    />
  );
}
