"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";

export function VivahIcon({ size = 40 }: { size?: number }) {
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
      {/* Outer decorative ring */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="var(--gold)"
        strokeWidth="1.2"
        strokeDasharray="2 2"
        opacity="0.6"
      />

      {/* Sacred Mandap Arch / Canopy */}
      <m.path
        d="M9 30 L9 18 C9 13 14 10 20 10 C26 10 31 13 31 18 L31 30"
        stroke="var(--maroon)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Kalash / Finial on top of Mandap */}
      <m.path
        d="M20 7 V10 M17.5 10 H22.5"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Sacred Agni / Havan Kund in center */}
      <m.path
        d="M15 28 L25 28 M16 28 L17 31 H23 L24 28"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Auspicious Flame of the Sacred Vows (Saptapadi) */}
      <m.path
        d="M20 20 C18.5 23 18.5 25 20 26.5 C21.5 25 21.5 23 20 20 Z"
        fill="var(--saffron)"
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
    </svg>
  );
}
