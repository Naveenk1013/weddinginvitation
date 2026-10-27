"use client";

import React from "react";

interface SacredOmProps {
  size?: number;
  className?: string;
  glow?: boolean;
  opacity?: number;
  style?: React.CSSProperties;
}

export function SacredOm({
  size = 280,
  className = "",
  glow = true,
  opacity = 1,
  style,
}: SacredOmProps) {

  return (
    <div
      className={`sacred-om-wrapper ${className}`.trim()}
      style={{
        width: size,
        height: size,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        userSelect: "none",
        opacity,
        ...style,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        <defs>
          {/* Royal Sacred Gold Gradient */}
          <linearGradient id="omGoldGrad" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="35%" stopColor="#D97706" />
            <stop offset="70%" stopColor="#B07A22" />
            <stop offset="100%" stopColor="#8A5A14" />
          </linearGradient>

          {/* Radiant Halo Filter */}
          {glow && (
            <filter id="omGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feColorMatrix
                type="matrix"
                values="
                  1 0 0 0 0.96
                  0 0.7 0 0 0.62
                  0 0 0.2 0 0.12
                  0 0 0 0.45 0
                "
                result="coloredBlur"
              />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}

          {/* Radial Aura for Vanishing Point */}
          <radialGradient id="omRadialAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#B07A22" stopOpacity="0.18" />
            <stop offset="75%" stopColor="#6E1E2A" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#6E1E2A" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Vanishing Point Radiant Halo */}
        <circle cx="100" cy="100" r="94" fill="url(#omRadialAura)" />

        {/* Sacred Vedic Sun Rays / Radiance Ring */}
        <g stroke="var(--gold, #B07A22)" strokeWidth="0.8" opacity="0.35">
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 15 * Math.PI) / 180;
            const x1 = Number((100 + 78 * Math.cos(angle)).toFixed(2));
            const y1 = Number((100 + 78 * Math.sin(angle)).toFixed(2));
            const x2 = Number((100 + (i % 2 === 0 ? 92 : 86) * Math.cos(angle)).toFixed(2));
            const y2 = Number((100 + (i % 2 === 0 ? 92 : 86) * Math.sin(angle)).toFixed(2));
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* Ornamental Concentric Sacred Rings */}
        <circle
          cx="100"
          cy="100"
          r="76"
          stroke="var(--gold, #B07A22)"
          strokeWidth="1.2"
          strokeDasharray="3 4"
          opacity="0.45"
        />
        <circle
          cx="100"
          cy="100"
          r="66"
          stroke="var(--gold, #B07A22)"
          strokeWidth="0.8"
          opacity="0.3"
        />

        {/* ========================================================
            THE SACRED DEVANAGARI OM (ॐ) SYMBOL
            Precision Calligraphic Bezier Geometry
            ======================================================== */}
        <g
          filter={glow ? "url(#omGlowFilter)" : undefined}
          fill="url(#omGoldGrad)"
          stroke="#784C0F"
          strokeWidth="0.75"
        >
          {/* Main Body of ॐ: Upper loop, lower sweep, and trailing tail */}
          <path
            d="
              M 76 66
              C 74 54, 84 46, 96 46
              C 108 46, 116 54, 116 63
              C 116 72, 107 79, 96 82
              C 109 84, 122 93, 122 108
              C 122 125, 107 138, 88 138
              C 70 138, 56 128, 52 115
              C 50 108, 55 103, 61 105
              C 66 107, 67 113, 72 118
              C 77 123, 83 126, 90 126
              C 102 126, 110 118, 110 107
              C 110 94, 98 87, 86 87
              L 86 79
              C 94 79, 104 74, 104 64
              C 104 56, 99 52, 94 52
              C 88 52, 83 57, 83 63
              C 83 67, 79 70, 76 66
              Z
            "
          />

          {/* Sweeping Rightward Tail (Sushupti / Deep Sleep Realm) */}
          <path
            d="
              M 96 82
              C 108 82, 126 86, 138 98
              C 148 108, 150 124, 145 138
              C 143 143, 137 141, 138 136
              C 141 126, 138 114, 131 107
              C 122 98, 108 93, 96 92
              Z
            "
          />

          {/* Upper Crescent Moon (Chandra / Maya Realm) */}
          <path
            d="
              M 112 50
              C 124 58, 138 58, 150 50
              C 142 54, 128 54, 120 48
              C 116 45, 110 47, 112 50
              Z
            "
          />

          {/* Supreme Dot of Consciousness (Bindu / Turiya Realm) */}
          <circle cx="131" cy="40" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

export default SacredOm;
