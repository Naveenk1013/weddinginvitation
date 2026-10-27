"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";
import { CouplePortrait } from "./CouplePortrait";

interface CoupleRevealProps {
  isEntered?: boolean;
}

export function CoupleReveal({ isEntered = true }: CoupleRevealProps) {
  const { t, locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Couple Names & Portrait"
      className="relative overflow-hidden"
      style={{
        width: "100%",
        maxWidth: 450,
        margin: "16px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
        border: "1.5px solid rgba(176, 122, 34, 0.45)",
        boxShadow:
          "0 14px 36px -4px rgba(110, 30, 42, 0.14), inset 0 0 0 1px rgba(255, 253, 248, 0.75)",
        padding: "24px 14px 20px 14px",
        backgroundImage: "url('/images/backgrounds/02-couple-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Translucent Royal Overlay allowing the palace architecture to shine through */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255, 248, 237, 0.35) 0%, rgba(255, 253, 248, 0.48) 50%, rgba(255, 248, 237, 0.40) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1
          className="font-ceremonial text-maroon"
          style={{
            fontSize: "clamp(2.4rem, 10vw, 3.4rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            textAlign: "center",
            textShadow: "0 2px 10px rgba(255, 255, 255, 0.95), 0 1px 4px rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* Bride's Name (Enters from Left) */}
          <m.span
            key={isEntered ? "entered-bride" : "idle-bride"}
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            animate={isEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "inline-block" }}
          >
            {t.hero.brideName}
          </m.span>

          {/* Sacred Floral Connector Symbol (× / संग / weds) */}
          <m.span
            key={isEntered ? "entered-conn" : "idle-conn"}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            animate={isEntered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--gold)",
              fontSize: "clamp(1.6rem, 6vw, 2.1rem)",
              padding: "0 4px",
            }}
            aria-hidden="true"
          >
            ×
          </m.span>

          {/* Groom's Name (Enters from Right) */}
          <m.span
            key={isEntered ? "entered-groom" : "idle-groom"}
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            animate={isEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "inline-block" }}
          >
            {t.hero.groomName}
          </m.span>
        </h1>

        {/* Decorative subtitle ring with marriage auspiciousness */}
        <m.div
          key={isEntered ? "entered-sub" : "idle-sub"}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={isEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 1.15 }}
          style={{
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            gap: 8,
            color: "var(--muted)",
            fontSize: "0.95rem",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "var(--gold)" }}>✦</span>
          <span>{locale === "hi" ? "शुभ विवाह उत्सव" : "Wedding Celebrations"}</span>
          <span style={{ color: "var(--gold)" }}>✦</span>
        </m.div>

        {/* Auspicious Couple Portrait Illustration with Transformative Scroll Parallax */}
        <CouplePortrait />
      </div>
    </section>
  );
}
