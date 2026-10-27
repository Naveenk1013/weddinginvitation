"use client";

import React, { useRef } from "react";
import * as m from "motion/react-m";
import {
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

interface TimelineDrawProps {
  /** Total height of the vertical line in CSS units */
  height?: number;
  /** Color of the line */
  color?: string;
  /** Width of the line */
  width?: number;
  className?: string;
}

/**
 * A scroll-linked vertical timeline spine that draws itself progressively
 * as the user scrolls. Uses SVG line with pathLength for GPU-friendly animation.
 * Falls back to a fully-drawn static line when reduced motion is active.
 */
export function TimelineDraw({
  height = 200,
  color = "var(--gold)",
  width = 2,
  className = "",
}: TimelineDrawProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        bottom: 0,
        transform: "translateX(-50%)",
        width: width + 4,
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <svg
        width={width + 4}
        height="100%"
        viewBox={`0 0 ${width + 4} ${height}`}
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        {/* Background track (subtle) */}
        <line
          x1={(width + 4) / 2}
          y1="0"
          x2={(width + 4) / 2}
          y2={height}
          stroke={color}
          strokeWidth={width}
          strokeOpacity={0.15}
          strokeLinecap="round"
        />

        {/* Drawn progress line */}
        {shouldReduceMotion ? (
          <line
            x1={(width + 4) / 2}
            y1="0"
            x2={(width + 4) / 2}
            y2={height}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
          />
        ) : (
          <m.line
            x1={(width + 4) / 2}
            y1="0"
            x2={(width + 4) / 2}
            y2={height}
            stroke={color}
            strokeWidth={width}
            strokeLinecap="round"
            style={{
              pathLength,
              opacity: lineOpacity,
            }}
          />
        )}
      </svg>
    </div>
  );
}
