"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";

export function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="group"
      aria-label={t.ui.languageSwitchLabel}
      className="lang-switch-pill"
    >
      <button
        type="button"
        role="button"
        aria-pressed={locale === "hi"}
        onClick={() => setLocale("hi")}
        className="lang-switch-btn"
        style={{
          color: locale === "hi" ? "var(--white)" : "var(--muted)",
        }}
        title="हिन्दी"
      >
        {locale === "hi" && (
          <m.span
            layoutId="lang-active-thumb"
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", visualDuration: 0.28, bounce: 0.12 }
            }
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "var(--maroon)",
              borderRadius: 9999,
              boxShadow: "0 1px 4px rgba(110, 30, 42, 0.25)",
              zIndex: 1,
            }}
          />
        )}
        <span style={{ position: "relative", zIndex: 2 }}>हि</span>
      </button>

      <button
        type="button"
        role="button"
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
        className="lang-switch-btn"
        style={{
          color: locale === "en" ? "var(--white)" : "var(--muted)",
        }}
        title="English"
      >
        {locale === "en" && (
          <m.span
            layoutId="lang-active-thumb"
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { type: "spring", visualDuration: 0.28, bounce: 0.12 }
            }
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "var(--maroon)",
              borderRadius: 9999,
              boxShadow: "0 1px 4px rgba(110, 30, 42, 0.25)",
              zIndex: 1,
            }}
          />
        )}
        <span style={{ position: "relative", zIndex: 2 }}>EN</span>
      </button>
    </div>
  );
}
