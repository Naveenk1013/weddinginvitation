"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";

export function SectionDivider({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={`section-divider ${className}`}
      style={{
        width: "100%",
        maxWidth: 280,
        height: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "18px auto",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        {/* Left decorative vine line */}
        <m.path
          d="M10 12 H95 M60 12 C70 8 75 8 82 12 C75 16 70 16 60 12"
          stroke="var(--gold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Central Lotus Motif */}
        <g transform="translate(120, 12)">
          {/* Center petal */}
          <path
            d="M0 -9 C-3 -3 -3 2 0 4 C3 2 3 -3 0 -9 Z"
            fill="var(--maroon)"
            opacity="0.9"
          />
          {/* Left petal */}
          <path
            d="M-1 -1 C-6 -5 -9 0 -4 4 C-2 3 -1 1 -1 -1 Z"
            fill="var(--saffron)"
            opacity="0.8"
          />
          {/* Right petal */}
          <path
            d="M1 -1 C6 -5 9 0 4 4 C2 3 1 1 1 -1 Z"
            fill="var(--saffron)"
            opacity="0.8"
          />
          {/* Base pearl dot */}
          <circle cx="0" cy="6" r="1.5" fill="var(--gold)" />
        </g>

        {/* Right decorative vine line */}
        <m.path
          d="M145 12 H230 M158 12 C165 8 170 8 180 12 C170 16 165 16 158 12"
          stroke="var(--gold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </svg>
    </div>
  );
}
