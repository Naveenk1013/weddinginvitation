"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";

export function MarigoldGarland() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="marigold-garland-wrap"
      style={{
        width: "100%",
        maxWidth: 480,
        overflow: "hidden",
        position: "relative",
        height: 48,
        display: "flex",
        justifyContent: "center",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Main curved swag string (thread) */}
        <m.path
          d="M0 8 Q 100 32 200 8 Q 300 32 400 8"
          stroke="var(--gold)"
          strokeWidth="1.2"
          opacity="0.6"
          strokeDasharray="3 3"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Mango Leaves (Toran) */}
        <path d="M100 21 C96 28 92 34 100 40 C108 34 104 28 100 21 Z" fill="var(--leaf)" opacity="0.8" />
        <path d="M300 21 C296 28 292 34 300 40 C308 34 304 28 300 21 Z" fill="var(--leaf)" opacity="0.8" />

        {/* Marigold flowers on the string */}
        {[
          { cx: 30, cy: 12, r: 6, fill: "var(--saffron)" },
          { cx: 65, cy: 18, r: 7, fill: "#F59E0B" },
          { cx: 100, cy: 21, r: 7.5, fill: "var(--saffron)" },
          { cx: 135, cy: 18, r: 7, fill: "#F59E0B" },
          { cx: 170, cy: 12, r: 6, fill: "var(--saffron)" },
          { cx: 200, cy: 8, r: 5.5, fill: "#F59E0B" },
          { cx: 230, cy: 12, r: 6, fill: "var(--saffron)" },
          { cx: 265, cy: 18, r: 7, fill: "#F59E0B" },
          { cx: 300, cy: 21, r: 7.5, fill: "var(--saffron)" },
          { cx: 335, cy: 18, r: 7, fill: "#F59E0B" },
          { cx: 370, cy: 12, r: 6, fill: "var(--saffron)" },
        ].map((f, i) => (
          <g key={i}>
            <circle cx={f.cx} cy={f.cy} r={f.r} fill={f.fill} />
            <circle cx={f.cx} cy={f.cy} r={f.r * 0.55} fill="var(--maroon)" opacity="0.3" />
            <circle cx={f.cx} cy={f.cy} r={1.5} fill="var(--gold)" />
          </g>
        ))}
      </svg>
    </div>
  );
}
