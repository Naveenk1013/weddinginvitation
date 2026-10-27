"use client";

import React from "react";
import { LazyMotion, domAnimation, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

export interface GaneshaLineProps {
  className?: string;
  size?: number;
  color?: string;
  isEntered?: boolean;
}

/**
 * A calm, traditional Ganesh ji face for wedding stationery and invitations.
 *
 * The eyes, cheeks, ears, crown and trunk are separate SVG paths so the
 * silhouette remains readable even when rendered at a small size.
 * The lightweight `m` components are supplied with their own LazyMotion
 * provider; this component does not depend on one being present upstream.
 */
export function GaneshaLine({
  className = "",
  size = 115,
  color = "var(--maroon, #7d263d)",
  isEntered = true,
}: GaneshaLineProps) {
  const reduceMotion = useReducedMotion();
  const gold = "var(--gold, #bd8d41)";
  const saffron = "var(--saffron, #da8548)";

  const draw = (delay: number, duration = 0.8) => ({
    initial: reduceMotion ? false : { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: isEntered ? 1 : 0,
      opacity: isEntered ? 1 : 0,
    },
    transition: {
      duration: reduceMotion ? 0 : duration,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  const fade = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0 },
    animate: { opacity: isEntered ? 1 : 0 },
    transition: {
      duration: reduceMotion ? 0 : 0.5,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`ganesha-art-wrap ${className}`.trim()}
        style={{
          width: size,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          width="100%"
          height="100%"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-label="॥ श्री गणेश ॥ — Lord Ganesha face"
          style={{ overflow: "visible" }}
        >
          {/* Wide elephant ears, placed behind the face. */}
          <m.path
            d="M60 64 C48 55 31 56 21 67 C10 78 13 96 25 107 C35 117 49 114 61 99 C56 87 56 74 60 64 Z"
            fill="var(--saffron, #e8a36b)"
            fillOpacity={0.13}
            stroke={color}
            strokeWidth={2.5}
            {...draw(0.12, 1.05)}
          />
          <m.path
            d="M100 64 C112 55 129 56 139 67 C150 78 147 96 135 107 C125 117 111 114 99 99 C104 87 104 74 100 64 Z"
            fill="var(--saffron, #e8a36b)"
            fillOpacity={0.13}
            stroke={color}
            strokeWidth={2.5}
            {...draw(0.17, 1.05)}
          />
          <m.path
            d="M51 69 C35 66 24 78 26 90 C28 100 35 105 45 105 M109 69 C125 66 136 78 134 90 C132 100 125 105 115 105 M36 82 C35 91 40 96 46 98 M124 82 C125 91 120 96 114 98"
            stroke={gold}
            strokeWidth={1.7}
            {...draw(0.3, 0.95)}
          />

          {/* Connected temples and rounded cheeks make this a face. */}
          <m.path
            d="M60 54 C55 63 54 81 60 98 C63 106 68 113 75 116 M100 54 C105 63 106 81 100 98 C97 106 92 113 85 116"
            stroke={color}
            strokeWidth={2.6}
            {...draw(0.24, 1.0)}
          />
          <m.path
            d="M63 98 Q67 105 73 106 M97 98 Q93 105 87 106"
            stroke={gold}
            strokeWidth={1.6}
            {...draw(0.57, 0.65)}
          />

          {/* Mukut: pointed centre, embellished band, finial and gemstone. */}
          <m.path
            d="M56 48 Q55 37 61 27 Q68 35 71 28 L80 13 L89 28 Q92 35 99 27 Q105 37 104 48 Z"
            fill={gold}
            fillOpacity={0.15}
            stroke={gold}
            strokeWidth={2.2}
            {...draw(0.05, 0.95)}
          />
          <m.path
            d="M54 49 Q80 43 106 49 L104 58 Q80 52 56 58 Z"
            fill={gold}
            fillOpacity={0.2}
            stroke={gold}
            strokeWidth={2.2}
            {...draw(0.2, 0.72)}
          />
          <m.path
            d="M64 43 Q67 36 70 40 M96 43 Q93 36 90 40 M80 20 V26"
            stroke={gold}
            strokeWidth={1.6}
            {...draw(0.29, 0.7)}
          />
          <m.path
            d="M80 29 L85 36 L80 43 L75 36 Z"
            fill="var(--maroon, #bc493e)"
            fillOpacity={0.58}
            stroke={gold}
            strokeWidth={1.5}
            {...draw(0.32, 0.55)}
          />
          <m.path
            d="M80 11 V14"
            stroke={gold}
            strokeWidth={2}
            {...draw(0.07, 0.5)}
          />
          <m.circle cx={80} cy={8} r={2.6} fill={gold} {...fade(0.05)} />
          {[64, 72, 88, 96].map((cx, index) => (
            <m.circle
              key={cx}
              cx={cx}
              cy={index === 0 || index === 3 ? 51 : 49.7}
              r={1.4}
              fill={gold}
              {...fade(0.36 + index * 0.04)}
            />
          ))}

          {/* Tilak and kumkum at the centre of the forehead. */}
          <m.path
            d="M74 62 C73 68 75 73 80 75 C85 73 87 68 86 62 M80 60 V71"
            stroke={saffron}
            strokeWidth={2}
            {...draw(0.45, 0.75)}
          />
          <m.circle cx={80} cy={67} r={1.8} fill="var(--maroon, #a52b43)" {...fade(0.63)} />

          {/* Gentle brows and closed, meditative eyes. */}
          <m.path
            d="M60 75 Q68 69 75 74 M85 74 Q92 69 100 75"
            stroke={color}
            strokeWidth={1.7}
            {...draw(0.54, 0.6)}
          />
          <m.path
            d="M63 81 Q69 86 75 81 M85 81 Q91 86 97 81"
            stroke={color}
            strokeWidth={2.3}
            {...draw(0.65, 0.6)}
          />
          <m.path
            d="M63 90 Q68 93 73 90 M87 90 Q92 93 97 90"
            stroke={gold}
            strokeWidth={1.5}
            {...draw(0.76, 0.55)}
          />

          {/* Ekadanta: a short/broken tusk and a gracefully intact one. */}
          <m.path
            d="M62 100 L52 104 L61 108 Z"
            fill="#fff8e8"
            stroke={gold}
            strokeWidth={1.8}
            {...draw(0.79, 0.55)}
          />
          <m.path
            d="M99 100 C106 106 114 102 119 96 C119 111 111 118 97 110"
            fill="#fff8e8"
            stroke={gold}
            strokeWidth={1.8}
            {...draw(0.81, 0.65)}
          />

          {/* Vakratunda: a continuous tapering trunk curling to the left. */}
          <m.path
            d="M75 89 C73 98 77 107 74 117 C72 124 67 128 59 128 C54 128 52 125 54 122 C55 120 58 120 60 122 C56 115 48 116 46 122 C42 132 49 140 61 140 C78 139 87 126 89 111 C91 101 89 94 85 88 Z"
            fill="var(--saffron, #e8a36b)"
            fillOpacity={0.18}
            stroke={color}
            strokeWidth={2.8}
            {...draw(0.84, 1.15)}
          />
          <m.path
            d="M75 102 Q82 105 89 101 M75 110 Q82 113 89 109"
            stroke={gold}
            strokeWidth={1.7}
            {...draw(1.03, 0.55)}
          />

          {/* Small lotus flourish keeps the emphasis on Ganesh ji's face. */}
          <m.path
            d="M80 153 C75 146 77 143 80 140 C83 143 85 146 80 153 Z M80 153 C69 145 60 144 49 149 Q64 154 80 153 Z M80 153 C91 145 100 144 111 149 Q96 154 80 153 Z M53 157 Q80 155 107 157"
            stroke={gold}
            strokeWidth={1.7}
            {...draw(1.15, 0.8)}
          />
        </svg>
      </div>
    </LazyMotion>
  );
}

export default GaneshaLine;
