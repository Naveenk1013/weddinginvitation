"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";
import { GaneshaLine } from "@/components/art/GaneshaLine";
import { MarigoldGarland } from "@/components/art/MarigoldGarland";

interface OpeningInvocationProps {
  isEntered?: boolean;
}

export function OpeningInvocation({ isEntered = true }: OpeningInvocationProps) {
  const { t } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <header
      className="opening-invocation-section relative overflow-hidden"
      style={{
        width: "100%",
        maxWidth: 450,
        margin: "12px auto 20px auto",
        textAlign: "center",
        borderRadius: 22,
        border: "1.5px solid rgba(176, 122, 34, 0.45)",
        boxShadow:
          "0 12px 32px -4px rgba(110, 30, 42, 0.12), inset 0 0 0 1px rgba(255, 253, 248, 0.7)",
        padding: "16px 14px 22px 14px",
        backgroundImage: "url('/images/backgrounds/01-ganesha-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Subtle translucent warm veil — allows the royal Banarasi silk damask to shine vibrantly */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255, 250, 240, 0.35) 0%, rgba(253, 246, 233, 0.50) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top ceremonial toran / marigold garland */}
        <MarigoldGarland />

        {/* Sacred Ganesha Drawing Motif */}
        <div style={{ marginTop: 14, marginBottom: 12 }}>
          <GaneshaLine size={118} isEntered={isEntered} />
        </div>

        {/* Immutable Sacred Invocation: ॥ श्री गणेशाय नमः ॥ */}
        <m.div
          key={isEntered ? "entered-invoc" : "idle-invoc"}
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12, scale: 0.98 }}
          animate={isEntered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.85, delay: shouldReduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="font-ceremonial text-maroon"
            style={{
              fontSize: "clamp(1.25rem, 5.5vw, 1.55rem)",
              fontWeight: 700,
              letterSpacing: "0.06em",
              margin: "4px 0",
              lineHeight: 1.4,
              textShadow: "0 1px 4px rgba(255, 255, 255, 0.95), 0 2px 10px rgba(255, 255, 255, 0.8)",
            }}
          >
            {t.hero.sacredInvocation}
          </p>

          {t.hero.sacredInvocationSubtitle && (
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginTop: 2,
                fontWeight: 600,
                textShadow: "0 1px 3px rgba(255, 255, 255, 0.9)",
              }}
            >
              {t.hero.sacredInvocationSubtitle}
            </p>
          )}
        </m.div>
      </div>
    </header>
  );
}
