"use client";

import React, { useRef } from "react";
import Image from "next/image";
import * as m from "motion/react-m";
import { useScroll, useTransform, useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";

interface CouplePortraitProps {
  className?: string;
}

/**
 * Auspicious Couple Portrait of Rachna & Udit.
 * Features:
 * - Traditional royal arch halo backdrop with warm gold radiance
 * - Multi-layered scroll-linked transformative parallax (depth translation + halo aura expansion)
 * - Next.js Image with priority and responsive sizing
 * - Semantic <figure> element with localized accessibility alt text
 * - Complete graceful fallback when prefers-reduced-motion is active
 */
export function CouplePortrait({ className = "" }: CouplePortraitProps) {
  const { t } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked transformative motion for the portrait
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax translation: subtle float upwards as user scrolls down
  const portraitY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Transformative scale: subtle breathing depth
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1.02, 0.98]);

  // Halo aura expansion: expands and brightens during scroll
  const auraScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.15, 0.95]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.25, 0.65, 0.65, 0.3]);

  // Subtle floating rotation for the traditional floral accents
  const leftAccentRotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);
  const rightAccentRotate = useTransform(scrollYProgress, [0, 1], [6, -6]);

  const altText = t.hero.portraitAlt || "रचना एवं उदित का विवाह चित्र";

  return (
    <figure
      ref={containerRef}
      className={`couple-portrait-wrapper ${className}`}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 380,
        margin: "18px auto 14px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label={altText}
    >
      {/* 1. Auspicious Radiant Halo Aura (Background) */}
      {!shouldReduceMotion ? (
        <m.div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "clamp(260px, 75vw, 340px)",
            height: "clamp(260px, 75vw, 340px)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(254, 215, 170, 0.75) 0%, rgba(251, 191, 36, 0.28) 45%, rgba(176, 122, 34, 0.08) 70%, transparent 85%)",
            filter: "blur(18px)",
            zIndex: 0,
            scale: auraScale,
            opacity: auraOpacity,
            pointerEvents: "none",
          }}
        />
      ) : (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(251, 191, 36, 0.15) 55%, transparent 75%)",
            filter: "blur(14px)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      )}

      {/* 2. Traditional Jharokha Arch / Sacred Mandap Arch Silhouette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 6,
          width: "clamp(250px, 72vw, 320px)",
          height: "clamp(340px, 92vw, 430px)",
          borderTopLeftRadius: "160px",
          borderTopRightRadius: "160px",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          border: "1.5px solid rgba(176, 122, 34, 0.38)",
          boxShadow:
            "inset 0 0 20px rgba(176, 122, 34, 0.08), 0 8px 32px -4px rgba(110, 30, 42, 0.12)",
          background:
            "linear-gradient(180deg, rgba(255, 253, 248, 0.85) 0%, rgba(251, 242, 227, 0.5) 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* Inner concentric gold line */}
        <div
          style={{
            position: "absolute",
            inset: 5,
            borderTopLeftRadius: "155px",
            borderTopRightRadius: "155px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            border: "1px dashed rgba(176, 122, 34, 0.28)",
          }}
        />

        {/* Arch Pinnacle Top Lotus Flourish */}
        <div
          style={{
            position: "absolute",
            top: -12,
            left: "50%",
            transform: "translateX(-50%)",
            color: "var(--gold)",
            fontSize: "1.1rem",
            background: "var(--bg)",
            padding: "0 6px",
            borderRadius: "10px",
            lineHeight: 1,
          }}
        >
          𑁍
        </div>
      </div>

      {/* 3. Floating Sacred Decorative Accents (Sides) */}
      {!shouldReduceMotion && (
        <>
          <m.span
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "clamp(4px, 4vw, 16px)",
              top: "35%",
              color: "var(--gold)",
              fontSize: "1.15rem",
              zIndex: 3,
              rotate: leftAccentRotate,
              pointerEvents: "none",
              opacity: 0.8,
            }}
          >
            ✦
          </m.span>
          <m.span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "clamp(4px, 4vw, 16px)",
              top: "35%",
              color: "var(--gold)",
              fontSize: "1.15rem",
              zIndex: 3,
              rotate: rightAccentRotate,
              pointerEvents: "none",
              opacity: 0.8,
            }}
          >
            ✦
          </m.span>
        </>
      )}

      {/* 4. Couple Illustration Image with Transformative Scroll Parallax */}
      <m.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          zIndex: 2,
          y: shouldReduceMotion ? 0 : portraitY,
          scale: shouldReduceMotion ? 1 : portraitScale,
          transformOrigin: "bottom center",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingTop: 18,
          paddingBottom: 8,
          filter: "drop-shadow(0 10px 22px rgba(110, 30, 42, 0.18))",
        }}
      >
        <Image
          src="/images/couple.png"
          alt={altText}
          width={310}
          height={520}
          priority
          sizes="(max-width: 480px) 270px, 310px"
          style={{
            width: "clamp(230px, 66vw, 290px)",
            height: "auto",
            maxHeight: "clamp(370px, 92vw, 440px)",
            objectFit: "contain",
            display: "block",
            pointerEvents: "none",
          }}
        />
      </m.div>

      {/* 5. Auspicious Floral Lotus Base Ornament */}
      <div
        aria-hidden="true"
        style={{
          position: "relative",
          zIndex: 3,
          marginTop: -10,
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "var(--gold)",
          fontSize: "0.95rem",
        }}
      >
        <span>—</span>
        <span>𑁍</span>
        <span>✦</span>
        <span>𑁍</span>
        <span>—</span>
      </div>
    </figure>
  );
}
