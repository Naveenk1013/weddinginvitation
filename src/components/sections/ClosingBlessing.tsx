"use client";

import React from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { SectionDivider } from "@/components/art/SectionDivider";

export function ClosingBlessing() {
  const { t } = useLocale();

  return (
    <footer
      style={{
        width: "100%",
        maxWidth: 440,
        margin: "36px auto 48px auto",
        textAlign: "center",
        paddingBottom: "max(24px, env(safe-area-inset-bottom))",
      }}
    >
      <SectionTransition effect="warm-glow">
        <ScrollReveal variant="fade-up" delay={0}>
          <SectionDivider />
        </ScrollReveal>

        {/* Royal Blessing Card with Sacred Silk Damask Backdrop */}
        <div
          className="ceremonial-card"
          style={{
            marginTop: 20,
            padding: "28px 20px",
            backgroundImage:
              "radial-gradient(ellipse at 50% 30%, rgba(255, 250, 240, 0.35) 0%, rgba(253, 245, 230, 0.50) 100%), url('/images/backgrounds/01-ganesha-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "1.5px solid rgba(176, 122, 34, 0.45)",
            borderRadius: 22,
            boxShadow:
              "0 12px 34px -4px rgba(110, 30, 42, 0.14), 0 4px 14px rgba(176, 122, 34, 0.15)",
          }}
        >
          {/* Diya Flame Motif */}
          <ScrollReveal variant="scale-in" delay={0.05}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
              aria-hidden="true"
            >
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                {/* Diya lamp base */}
                <path
                  d="M7 19 C7 25 25 25 25 19 C25 18 7 18 7 19 Z"
                  fill="var(--gold)"
                  stroke="var(--maroon)"
                  strokeWidth="1.2"
                />
                {/* Diya flame */}
                <path
                  d="M16 6 C14 11 13 14 16 17 C19 14 18 11 16 6 Z"
                  fill="var(--saffron)"
                />
                <circle cx="16" cy="14" r="1.5" fill="#FDE047" />
              </svg>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="blur-in" delay={0.1}>
            <p
              className="font-ceremonial text-maroon"
              style={{
                fontSize: "clamp(1.15rem, 4.5vw, 1.45rem)",
                fontWeight: 700,
                lineHeight: 1.5,
                marginBottom: 8,
                textShadow: "0 1px 4px rgba(255, 255, 255, 0.95), 0 2px 8px rgba(255, 255, 255, 0.85)",
              }}
            >
              {t.closing.blessing}
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--muted)",
                fontWeight: 600,
                letterSpacing: "0.02em",
                textShadow: "0 1px 3px rgba(255, 255, 255, 0.95)",
              }}
            >
              {t.closing.familyGreeting}
            </p>
          </ScrollReveal>
        </div>
      </SectionTransition>
    </footer>
  );
}
