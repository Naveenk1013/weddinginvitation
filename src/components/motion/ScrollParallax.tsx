"use client";

import React, { useRef } from "react";
import * as m from "motion/react-m";
import {
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface ScrollParallaxProps {
  children: React.ReactNode;
  /** Vertical offset range in pixels — e.g. 40 means ±40px travel */
  offset?: number;
  /** Slight scale effect on scroll (e.g. 0.05 = 0.95→1.05) */
  scaleRange?: number;
  /** Slight rotation in degrees */
  rotateRange?: number;
  /** Opacity range [start, end] mapped to scroll progress */
  opacityRange?: [number, number];
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Scroll-linked parallax using useScroll + useTransform.
 * Animates ONLY transform & opacity for GPU compositing.
 * Completely disabled when prefers-reduced-motion is active.
 *
 * IMPORTANT: Per AGENTS.md, never apply parallax to sacred artwork (Ganesha).
 */
export function ScrollParallax({
  children,
  offset = 30,
  scaleRange = 0,
  rotateRange = 0,
  opacityRange,
  className = "",
  style,
}: ScrollParallaxProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1 - scaleRange, 1, 1 - scaleRange]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-rotateRange, rotateRange]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    opacityRange
      ? [opacityRange[0], 1, 1, opacityRange[1]]
      : [1, 1, 1, 1]
  );

  // When reduced-motion is active, render children without any parallax
  if (shouldReduceMotion) {
    return (
      <div ref={containerRef} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} style={style}>
      <m.div
        style={{
          y,
          scale: scaleRange > 0 ? scale : undefined,
          rotate: rotateRange > 0 ? rotate : undefined,
          opacity: opacityRange ? opacity : undefined,
        }}
      >
        {children}
      </m.div>
    </div>
  );
}
