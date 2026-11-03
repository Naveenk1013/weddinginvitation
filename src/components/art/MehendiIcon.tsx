"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";

export function MehendiIcon({ size = 40 }: { size?: number }) {
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

      {/* Auspicious Henna Flower Petals */}
      <m.path
        d="M20 12 C18 15 18 17 20 20 C22 17 22 15 20 12 Z 
           M20 28 C18 25 18 23 20 20 C22 23 22 25 20 28 Z
           M12 20 C15 18 17 18 20 20 C17 22 15 22 12 20 Z
           M28 20 C25 18 23 18 20 20 C23 22 25 22 28 20 Z
           M14.3 14.3 C16.5 16 17.5 17.5 20 20 C17.5 17.5 16 16.5 14.3 14.3 Z
           M25.7 25.7 C23.5 24 22.5 22.5 20 20 C22.5 22.5 24 23.5 25.7 25.7 Z
           M14.3 25.7 C16.5 24 17.5 22.5 20 20 C17.5 22.5 16 23.5 14.3 25.7 Z
           M25.7 14.3 C23.5 16 22.5 17.5 20 20 C22.5 17.5 24 16.5 25.7 14.3 Z"
        stroke="var(--gold)"
        strokeWidth="1.4"
        fill="rgba(176, 122, 34, 0.12)"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Central Henna Mandala Core */}
      <m.circle
        cx="20"
        cy="20"
        r="3"
        fill="var(--maroon)"
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.3 }}
      />

      {/* Surrounding auspicious henna dots */}
      <circle cx="20" cy="9" r="1.2" fill="var(--maroon)" />
      <circle cx="20" cy="31" r="1.2" fill="var(--maroon)" />
      <circle cx="9" cy="20" r="1.2" fill="var(--maroon)" />
      <circle cx="31" cy="20" r="1.2" fill="var(--maroon)" />
    </svg>
  );
}

