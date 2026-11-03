"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";

export function MatkorIcon({ size = 40 }: { size?: number }) {
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

      {/* Sacred Earthen Pot (Matka / Kalash) of Matti Pujan */}
      <m.path
        d="M15 18 H25 L24 21 C26.5 22.5 28 25 28 28 C28 31.5 24.5 33 20 33 C15.5 33 12 31.5 12 28 C12 25 13.5 22.5 16 21 Z"
        stroke="var(--maroon)"
        strokeWidth="1.6"
        fill="rgba(200, 90, 22, 0.12)"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Pot Rim Neck Band */}
      <line x1="14" y1="18" x2="26" y2="18" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Auspicious Mango Leaves (Aam ke Patte) emerging from Kalash */}
      <m.path
        d="M16 18 C14 14 12 13 10 14 C12 16 15 17 16 18 Z
           M24 18 C26 14 28 13 30 14 C28 16 25 17 24 18 Z
           M18 18 C18 13 19 11 20 10 C21 11 22 13 22 18 Z"
        stroke="var(--gold)"
        strokeWidth="1.3"
        fill="rgba(176, 122, 34, 0.2)"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />

      {/* Sacred Coconut (Nariyal) atop the Kalash */}
      <m.circle
        cx="20"
        cy="13.5"
        r="2.5"
        fill="var(--saffron)"
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.35 }}
      />

      {/* Central Kumkum / Swastika symbol mark on Pot */}
      <circle cx="20" cy="27" r="2.2" fill="var(--maroon)" />
      {/* Akshat rice / blessed earth at base */}
      <circle cx="16.5" cy="31" r="0.75" fill="var(--gold)" />
      <circle cx="20" cy="31.5" r="0.75" fill="var(--gold)" />
      <circle cx="23.5" cy="31" r="0.75" fill="var(--gold)" />
    </svg>
  );
}

