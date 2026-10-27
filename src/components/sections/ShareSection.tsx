"use client";

import React, { useState } from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";
import { shareInvite } from "@/lib/share";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function ShareSection() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://rachna-udit-wedding.in";
    const result = await shareInvite(url, t.share.shareTitle, t.share.shareText);

    if (result === "copied") {
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    }
  };

  return (
    <section
      aria-label="Share Wedding Invitation"
      style={{
        width: "100%",
        maxWidth: 440,
        margin: "16px auto",
        textAlign: "center",
      }}
    >
      <ScrollReveal variant="fade-up" delay={0.1}>
        <m.button
          type="button"
          onClick={handleShare}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.025,
                  boxShadow: "0 6px 20px rgba(110, 30, 42, 0.3)",
                  transition: { type: "spring", visualDuration: 0.3, bounce: 0.2 },
                }
          }
          whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
          className="btn-primary touch-target"
          style={{ width: "100%", maxWidth: 320 }}
          aria-live="polite"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <span>{copied ? t.share.copiedMessage : t.share.buttonLabel}</span>
        </m.button>

        {copied && (
          <m.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            style={{
              marginTop: 8,
              fontSize: "0.9rem",
              color: "var(--maroon)",
              fontWeight: 600,
            }}
          >
            ✓ {t.share.copiedMessage}
          </m.p>
        )}
      </ScrollReveal>
    </section>
  );
}
