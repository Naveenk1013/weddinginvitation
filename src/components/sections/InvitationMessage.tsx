"use client";

import React from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { SectionDivider } from "@/components/art/SectionDivider";

export function InvitationMessage() {
  const { t } = useLocale();

  return (
    <section
      aria-labelledby="invitation-heading"
      className="relative overflow-hidden"
      style={{
        width: "100%",
        maxWidth: 450,
        margin: "18px auto 24px auto",
        textAlign: "center",
        borderRadius: 22,
        border: "1.5px solid rgba(176, 122, 34, 0.45)",
        boxShadow:
          "0 14px 34px -4px rgba(110, 30, 42, 0.12), inset 0 0 0 1px rgba(255, 253, 248, 0.7)",
        padding: "26px 16px 22px 16px",
        backgroundImage: "url('/images/backgrounds/03-invitation-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Translucent parchment overlay — allows gold foil border and watermark mandala to shine */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(255, 248, 237, 0.32) 0%, rgba(255, 253, 248, 0.48) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <SectionTransition effect="curtain-up">
          <ScrollReveal variant="fade-up" delay={0}>
            <SectionDivider />
          </ScrollReveal>

          <ScrollReveal variant="blur-in" delay={0.06}>
            <h2
              id="invitation-heading"
              className="font-ceremonial text-maroon"
              style={{
                fontSize: "clamp(1.4rem, 6vw, 1.85rem)",
                fontWeight: 700,
                marginBottom: 12,
                letterSpacing: "0.02em",
                textShadow: "0 1px 4px rgba(255, 255, 255, 0.95), 0 2px 8px rgba(255, 255, 255, 0.8)",
              }}
            >
              {t.invitation.heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.12}>
            <p
              className="text-ink"
              style={{
                fontSize: "clamp(1.05rem, 4.2vw, 1.2rem)",
                lineHeight: 1.8,
                padding: "0 8px",
                maxWidth: 380,
                margin: "0 auto",
                fontWeight: 600,
                color: "var(--ink)",
                textShadow: "0 1px 3px rgba(255, 255, 255, 0.95)",
              }}
            >
              {t.invitation.message}
            </p>
          </ScrollReveal>

          {/* Sacred Bride's Parents Honor Card */}
          <ScrollReveal variant="fade-up" delay={0.16}>
            <div
              style={{
                marginTop: 18,
                marginBottom: 14,
                padding: "12px 16px",
                borderRadius: 14,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1.2px solid rgba(176, 122, 34, 0.45)",
                boxShadow: "0 2px 8px rgba(110, 30, 42, 0.06)",
                display: "inline-block",
                maxWidth: 360,
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  color: "var(--muted)",
                  fontWeight: 600,
                  marginBottom: 3,
                  textTransform: "uppercase",
                }}
              >
                {t.hosts.brideParentsTitle}
              </p>
              <p
                className="font-ceremonial text-maroon"
                style={{
                  fontSize: "clamp(1.02rem, 3.8vw, 1.2rem)",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                }}
              >
                {t.hosts.brideParentsNames}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.2}>
            <SectionDivider />
          </ScrollReveal>
        </SectionTransition>
      </div>
    </section>
  );
}
