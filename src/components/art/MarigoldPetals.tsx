"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

interface PetalConfig {
  id: number;
  left: number; // percentage
  size: number;
  duration: number; // seconds
  delay: number; // seconds
  rotate: number;
}

export function MarigoldPetals() {
  const shouldReduceMotion = useReducedMotion();
  const [petals, setPetals] = useState<PetalConfig[]>([]);

  useEffect(() => {
    // If user prefers reduced motion, do not spawn falling petals
    if (shouldReduceMotion) return;

    // Strict performance budget: exactly 8 gentle petals
    const items: PetalConfig[] = [
      { id: 1, left: 8, size: 14, duration: 9, delay: 0.2, rotate: 25 },
      { id: 2, left: 24, size: 11, duration: 11, delay: 3.5, rotate: -40 },
      { id: 3, left: 45, size: 13, duration: 8.5, delay: 1.5, rotate: 60 },
      { id: 4, left: 62, size: 12, duration: 10, delay: 4.8, rotate: -20 },
      { id: 5, left: 78, size: 15, duration: 9.5, delay: 2.2, rotate: 45 },
      { id: 6, left: 91, size: 10, duration: 12, delay: 5.5, rotate: -35 },
      { id: 7, left: 16, size: 12, duration: 10.5, delay: 6.8, rotate: 15 },
      { id: 8, left: 70, size: 14, duration: 8.8, delay: 7.2, rotate: -50 },
    ];

    setPetals(items);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion || petals.length === 0) {
    return null;
  }

  return (
    <div
      className="ambient-petals-container"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes driftDown {
          0% {
            transform: translateY(-20px) rotate(0deg) scale(0.9);
            opacity: 0;
          }
          10% {
            opacity: 0.75;
          }
          90% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(105vh) rotate(360deg) scale(1);
            opacity: 0;
          }
        }
      `}</style>

      {petals.map((petal) => (
        <span
          key={petal.id}
          style={{
            position: "absolute",
            top: 0,
            left: `${petal.left}%`,
            width: petal.size,
            height: petal.size * 1.3,
            backgroundColor: petal.id % 2 === 0 ? "var(--saffron)" : "#F59E0B",
            borderRadius: "50% 50% 50% 10%",
            boxShadow: "0 2px 6px rgba(200, 90, 22, 0.25)",
            animation: `driftDown ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
