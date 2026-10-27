"use client";

import React, { useRef } from "react";
import * as m from "motion/react-m";
import {
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface SectionTransitionProps {
  children: React.ReactNode;
  /** Which transition effect to apply */
  effect?: "curtain-up" | "golden-border" | "warm-glow";
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wraps a section with scroll-linked transition effects that make
 * sections feel like they smoothly "transition" into view.
 * All effects use transform/opacity only — no layout property animation.
 * Disabled entirely under prefers-reduced-motion.
 */
export function SectionTransition({
  children,
  effect = "curtain-up",
  className = "",
  style,
}: SectionTransitionProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Delicate vertical settle without blocking inner content
  const y = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.85, 1]);

  // Gentle scale for "warm-glow" effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.99, 1]);

  // Border glow opacity for "golden-border"
  const glowOpacity = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);

  if (shouldReduceMotion) {
    return (
      <div ref={sectionRef} className={className} style={style}>
        {children}
      </div>
    );
  }

  if (effect === "curtain-up") {
    return (
      <div ref={sectionRef} className={className} style={style}>
        <m.div style={{ y, opacity }}>
          {children}
        </m.div>
      </div>
    );
  }

  if (effect === "warm-glow") {
    return (
      <div ref={sectionRef} className={className} style={style}>
        <m.div style={{ scale, opacity }}>
          {children}
        </m.div>
      </div>
    );
  }

  if (effect === "golden-border") {
    return (
      <div
        ref={sectionRef}
        className={className}
        style={{ ...style, position: "relative" }}
      >
        {/* Animated golden border glow */}
        <m.div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: -2,
            borderRadius: "var(--radius-card)",
            border: "1.5px solid var(--gold)",
            opacity: glowOpacity,
            boxShadow: "var(--shadow-glow)",
            pointerEvents: "none",
          }}
        />
        <m.div style={{ y, opacity }}>
          {children}
        </m.div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className={className} style={style}>
      {children}
    </div>
  );
}
