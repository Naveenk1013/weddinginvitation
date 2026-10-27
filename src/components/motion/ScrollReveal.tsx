"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
import type { TargetAndTransition } from "motion/react";

type ScrollRevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "blur-in"
  | "image-reveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: ScrollRevealVariant;
  delay?: number;
  duration?: number;
  staggerIndex?: number;
  staggerDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
  amount?: number;
}

const variantMap: Record<
  ScrollRevealVariant,
  { initial: TargetAndTransition; animate: TargetAndTransition }
> = {
  "fade-up": {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-down": {
    initial: { opacity: 0, y: -16 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-left": {
    initial: { opacity: 0, x: -18 },
    animate: { opacity: 1, x: 0 },
  },
  "fade-right": {
    initial: { opacity: 0, x: 18 },
    animate: { opacity: 1, x: 0 },
  },
  "scale-in": {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
  },
  "blur-in": {
    // Silky hardware-accelerated entrance without mobile GPU blur thrashing
    initial: { opacity: 0, y: 12, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
  },
  "image-reveal": {
    initial: { opacity: 0, scale: 1.04, y: 10 },
    animate: { opacity: 1, scale: 1, y: 0 },
  },
};

/**
 * Scroll-triggered reveal with multiple animation variants.
 * Respects prefers-reduced-motion by collapsing to opacity-only.
 * Uses transform + opacity for GPU compositing (no layout thrashing).
 */
export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.5,
  staggerIndex = 0,
  staggerDelay = 0.08,
  className = "",
  style,
  once = true,
  amount = 0.08,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const { initial, animate } = variantMap[variant];

  // Reduced motion: simple opacity-only fade
  const reducedInitial: TargetAndTransition = { opacity: 0 };
  const reducedAnimate: TargetAndTransition = { opacity: 1 };

  const computedDelay = delay + staggerIndex * staggerDelay;

  return (
    <m.div
      initial={shouldReduceMotion ? reducedInitial : initial}
      whileInView={shouldReduceMotion ? reducedAnimate : animate}
      viewport={{ once, amount, margin: "0px 0px -30px 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0.2 : duration,
        delay: shouldReduceMotion ? 0 : computedDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  );
}
