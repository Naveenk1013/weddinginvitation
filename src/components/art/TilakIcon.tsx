"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";

export function TilakIcon({ size = 40 }: { size?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      {/* Outer subtle halo ring */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="var(--gold)"
        strokeWidth="1.2"
        strokeDasharray="2 2"
        opacity="0.6"
      />

      {/* Auspicious U-shaped Chandan tilak mark */}
      <m.path
        d="M15 11 C15 19 16.5 24 20 25 C23.5 24 25 19 25 11"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Central Kumkum / Roli Bindi */}
      <m.circle
        cx="20"
        cy="17"
        r="2.5"
        fill="var(--maroon)"
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      {/* Akshat (Auspicious rice grain accents) */}
      <circle cx="18" cy="21" r="0.8" fill="var(--bg)" stroke="var(--gold)" strokeWidth="0.5" />
      <circle cx="21.5" cy="21" r="0.8" fill="var(--bg)" stroke="var(--gold)" strokeWidth="0.5" />
    </svg>
  );
}
