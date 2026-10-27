"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";

interface RoyalGateProps {
  isOpen: boolean;
  onAnimationComplete?: () => void;
  className?: string;
}

export function RoyalGate({
  isOpen,
  onAnimationComplete,
  className = "",
}: RoyalGateProps) {
  const reduce = useReducedMotion();

  const transitionConfig = {
    duration: reduce ? 0.4 : 1.4,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div
      className={`royal-gate-container fixed inset-0 pointer-events-none z-40 overflow-hidden ${className}`.trim()}
      style={{
        perspective: "1400px",
        transformStyle: "preserve-3d",
      }}
      aria-hidden="true"
    >
      {/* Golden Light Beam Pouring from the Parting Gates */}
      <m.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: isOpen ? [0, 1, 0.8, 0] : 0,
          scaleX: isOpen ? [0, 1.2, 2.5] : 0,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(253, 224, 71, 0.85) 0%, rgba(245, 158, 11, 0.5) 30%, rgba(176, 122, 34, 0.2) 65%, transparent 80%)",
          transformOrigin: "center",
          zIndex: 42,
          mixBlendMode: "screen",
        }}
      />

      {/* LEFT ROYAL GATE LEAF */}
      <m.div
        initial={{ rotateY: 0, x: 0 }}
        animate={{
          rotateY: isOpen ? (reduce ? 0 : -88) : 0,
          x: isOpen && reduce ? "-100%" : "0%",
        }}
        transition={transitionConfig}
        onAnimationComplete={() => {
          if (isOpen && onAnimationComplete) {
            onAnimationComplete();
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          zIndex: 45,
          boxShadow: isOpen
            ? "none"
            : "10px 0 35px -5px rgba(0, 0, 0, 0.65), inset -2px 0 6px rgba(245, 158, 11, 0.4)",
        }}
      >
        <svg
          viewBox="0 0 500 1000"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          className="w-full h-full"
        >
          <defs>
            {/* Rich Royal Maroon Velvet Gradient */}
            <linearGradient id="gateMaroonLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B0D14" />
              <stop offset="50%" stopColor="#5C1420" />
              <stop offset="96%" stopColor="#6E1E2A" />
              <stop offset="100%" stopColor="#8A2535" />
            </linearGradient>

            {/* Gold Leaf Border Gradient */}
            <linearGradient id="gateGoldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="35%" stopColor="#D97706" />
              <stop offset="70%" stopColor="#B07A22" />
              <stop offset="100%" stopColor="#784C0F" />
            </linearGradient>

            {/* Traditional Jaali Lattice Pattern */}
            <pattern id="jaaliPatternLeft" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 40 20 L 20 40 L 0 20 Z"
                fill="none"
                stroke="url(#gateGoldTrim)"
                strokeWidth="1.2"
                opacity="0.32"
              />
              <circle cx="20" cy="20" r="3" fill="#D97706" opacity="0.45" />
            </pattern>
          </defs>

          {/* Door Base Plate */}
          <rect width="500" height="1000" fill="url(#gateMaroonLeft)" />

          {/* Traditional Outer Rajput Border */}
          <rect
            x="24"
            y="24"
            width="452"
            height="952"
            fill="none"
            stroke="url(#gateGoldTrim)"
            strokeWidth="5"
          />
          <rect
            x="36"
            y="36"
            width="428"
            height="928"
            fill="none"
            stroke="url(#gateGoldTrim)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          {/* Top Rajput / Jharokha Arch Carving */}
          <path
            d="
              M 60 450
              L 60 160
              Q 60 70 250 70
              Q 440 70 440 160
              L 440 450
              Z
            "
            fill="url(#jaaliPatternLeft)"
            stroke="url(#gateGoldTrim)"
            strokeWidth="3"
          />

          {/* Inner Cusped Arch Inset */}
          <path
            d="
              M 80 430
              L 80 180
              Q 80 110 250 110
              Q 420 110 420 180
              L 420 430
              Z
            "
            fill="none"
            stroke="url(#gateGoldTrim)"
            strokeWidth="2"
            opacity="0.8"
          />

          {/* Lower Panel with Diamond Jaali Lattice */}
          <rect
            x="60"
            y="520"
            width="380"
            height="410"
            fill="url(#jaaliPatternLeft)"
            stroke="url(#gateGoldTrim)"
            strokeWidth="3"
          />
          <rect
            x="80"
            y="540"
            width="340"
            height="370"
            fill="none"
            stroke="url(#gateGoldTrim)"
            strokeWidth="1.5"
            opacity="0.75"
          />

          {/* Traditional Brass Studs along frame */}
          {[100, 250, 400, 550, 700, 850].map((y, i) => (
            <g key={i}>
              <circle cx="42" cy={y} r="6" fill="url(#gateGoldTrim)" stroke="#4A121A" strokeWidth="1" />
              <circle cx="42" cy={y} r="2" fill="#FDE047" />
            </g>
          ))}

          {/* Royal Brass Door Handle & Rosette (Center Seam Right Side of Left Door) */}
          <g transform="translate(460, 500)">
            {/* Brass Rosette Medallion */}
            <circle cx="-20" cy="0" r="28" fill="url(#gateGoldTrim)" stroke="#4A121A" strokeWidth="2" />
            <circle cx="-20" cy="0" r="20" fill="none" stroke="#FDE047" strokeWidth="1.2" strokeDasharray="3 3" />
            {/* Hanging Ring Pull */}
            <circle cx="-20" cy="18" r="16" fill="none" stroke="url(#gateGoldTrim)" strokeWidth="4.5" />
          </g>

          {/* Right Edge Brass Astragal Trim */}
          <rect x="492" y="0" width="8" height="1000" fill="url(#gateGoldTrim)" />
        </svg>
      </m.div>

      {/* RIGHT ROYAL GATE LEAF */}
      <m.div
        initial={{ rotateY: 0, x: 0 }}
        animate={{
          rotateY: isOpen ? (reduce ? 0 : 88) : 0,
          x: isOpen && reduce ? "100%" : "0%",
        }}
        transition={transitionConfig}
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          transformOrigin: "right center",
          transformStyle: "preserve-3d",
          zIndex: 45,
          boxShadow: isOpen
            ? "none"
            : "-10px 0 35px -5px rgba(0, 0, 0, 0.65), inset 2px 0 6px rgba(245, 158, 11, 0.4)",
        }}
      >
        <svg
          viewBox="0 0 500 1000"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="gateMaroonRight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A2535" />
              <stop offset="4%" stopColor="#6E1E2A" />
              <stop offset="50%" stopColor="#5C1420" />
              <stop offset="100%" stopColor="#3B0D14" />
            </linearGradient>

            <pattern id="jaaliPatternRight" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 40 20 L 20 40 L 0 20 Z"
                fill="none"
                stroke="url(#gateGoldTrim)"
                strokeWidth="1.2"
                opacity="0.32"
              />
              <circle cx="20" cy="20" r="3" fill="#D97706" opacity="0.45" />
            </pattern>
          </defs>

          {/* Door Base Plate */}
          <rect width="500" height="1000" fill="url(#gateMaroonRight)" />

          {/* Traditional Outer Rajput Border */}
          <rect
            x="24"
            y="24"
            width="452"
            height="952"
            fill="none"
            stroke="url(#gateGoldTrim)"
            strokeWidth="5"
          />
          <rect
            x="36"
            y="36"
            width="428"
            height="928"
            fill="none"
            stroke="url(#gateGoldTrim)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          {/* Top Rajput / Jharokha Arch Carving */}
          <path
            d="
              M 60 450
              L 60 160
              Q 60 70 250 70
              Q 440 70 440 160
              L 440 450
              Z
            "
            fill="url(#jaaliPatternRight)"
            stroke="url(#gateGoldTrim)"
            strokeWidth="3"
          />

          {/* Inner Cusped Arch Inset */}
          <path
            d="
              M 80 430
              L 80 180
              Q 80 110 250 110
              Q 420 110 420 180
              L 420 430
              Z
            "
            fill="none"
            stroke="url(#gateGoldTrim)"
            strokeWidth="2"
            opacity="0.8"
          />

          {/* Lower Panel with Diamond Jaali Lattice */}
          <rect
            x="60"
            y="520"
            width="380"
            height="410"
            fill="url(#jaaliPatternRight)"
            stroke="url(#gateGoldTrim)"
            strokeWidth="3"
          />
          <rect
            x="80"
            y="540"
            width="340"
            height="370"
            fill="none"
            stroke="url(#gateGoldTrim)"
            strokeWidth="1.5"
            opacity="0.75"
          />

          {/* Traditional Brass Studs along frame */}
          {[100, 250, 400, 550, 700, 850].map((y, i) => (
            <g key={i}>
              <circle cx="458" cy={y} r="6" fill="url(#gateGoldTrim)" stroke="#4A121A" strokeWidth="1" />
              <circle cx="458" cy={y} r="2" fill="#FDE047" />
            </g>
          ))}

          {/* Royal Brass Door Handle & Rosette (Center Seam Left Side of Right Door) */}
          <g transform="translate(40, 500)">
            <circle cx="20" cy="0" r="28" fill="url(#gateGoldTrim)" stroke="#4A121A" strokeWidth="2" />
            <circle cx="20" cy="0" r="20" fill="none" stroke="#FDE047" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="20" cy="18" r="16" fill="none" stroke="url(#gateGoldTrim)" strokeWidth="4.5" />
          </g>

          {/* Left Edge Brass Astragal Trim */}
          <rect x="0" y="0" width="8" height="1000" fill="url(#gateGoldTrim)" />
        </svg>
      </m.div>
    </div>
  );
}

export default RoyalGate;
