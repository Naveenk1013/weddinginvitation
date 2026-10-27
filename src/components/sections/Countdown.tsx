"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LocaleProvider";
import { getTimeRemaining, type TimeRemaining } from "@/lib/date";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { Counter } from "@/components/ui/Counter";

interface CountdownTileProps {
  value: number;
  label: string;
  minDigits?: number;
  locale: string;
}

function CountdownTile({ value, label, minDigits = 2, locale }: CountdownTileProps) {
  return (
    <div
      style={{
        flex: "1 1 0",
        minWidth: 54,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.88)",
        backdropFilter: "blur(6px)",
        border: "1.2px solid rgba(176, 122, 34, 0.45)",
        borderRadius: "14px",
        padding: "10px 4px",
        boxShadow:
          "inset 0 1px 4px rgba(110, 30, 42, 0.05), 0 3px 10px -2px rgba(176, 122, 34, 0.14)",
      }}
    >
      <Counter
        value={value}
        minDigits={minDigits}
        fontSize="clamp(1.5rem, 5.2vw, 2.15rem)"
        fontWeight={700}
        textColor="var(--maroon)"
        duration={0.7}
        bounce={0.2}
        stagger={0.03}
        intro={true}
        motionBlur={true}
        locale={locale === "hi" ? "hi-IN" : "en-US"}
        style={{
          fontFamily: "var(--font-serif-family)",
          lineHeight: 1.1,
        }}
      />

      <span
        style={{
          fontSize: "clamp(0.7rem, 2.5vw, 0.85rem)",
          fontWeight: 600,
          color: "var(--gold)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginTop: 4,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const { t, locale } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(null);

  useEffect(() => {
    setMounted(true);
    // Wedding Vivah target date: 2026-12-02
    const update = () => {
      setTimeRemaining(getTimeRemaining("2026-12-02", null));
    };
    update();
    const intervalId = setInterval(update, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-label="Wedding Countdown"
      style={{
        width: "100%",
        maxWidth: 440,
        margin: "24px auto",
        textAlign: "center",
      }}
    >
      <SectionTransition effect="warm-glow">
        <ScrollReveal variant="scale-in">
          <div
            className="ceremonial-card"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 252, 247, 0.32) 0%, rgba(250, 240, 223, 0.48) 100%), url('/images/backgrounds/05-countdown-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1.5px solid rgba(176, 122, 34, 0.45)",
              padding: "26px 16px",
              boxShadow:
                "0 12px 34px -4px rgba(110, 30, 42, 0.15), 0 4px 14px rgba(176, 122, 34, 0.16)",
            }}
          >
            <p
              className="font-ceremonial text-maroon"
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                marginBottom: 14,
                letterSpacing: "0.04em",
                textShadow: "0 1px 4px rgba(255, 255, 255, 0.95), 0 2px 8px rgba(255, 255, 255, 0.85)",
              }}
            >
              {t.countdown.heading}
            </p>

            {mounted && timeRemaining !== null ? (
              !timeRemaining.isComplete && !timeRemaining.isToday ? (
                /* Full Time Format: Days : Hours : Minutes : Seconds */
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(4px, 1.8vw, 8px)",
                    width: "100%",
                    maxWidth: 380,
                    margin: "0 auto",
                  }}
                >
                  <CountdownTile
                    value={timeRemaining.days}
                    label={t.countdown.daysLabel}
                    minDigits={1}
                    locale={locale}
                  />

                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--gold)",
                      fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)",
                      fontWeight: 700,
                      lineHeight: 1,
                      userSelect: "none",
                      marginBottom: 18,
                    }}
                  >
                    :
                  </span>

                  <CountdownTile
                    value={timeRemaining.hours}
                    label={t.countdown.hoursLabel}
                    minDigits={2}
                    locale={locale}
                  />

                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--gold)",
                      fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)",
                      fontWeight: 700,
                      lineHeight: 1,
                      userSelect: "none",
                      marginBottom: 18,
                    }}
                  >
                    :
                  </span>

                  <CountdownTile
                    value={timeRemaining.minutes}
                    label={t.countdown.minutesLabel}
                    minDigits={2}
                    locale={locale}
                  />

                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--gold)",
                      fontSize: "clamp(1.1rem, 3.5vw, 1.5rem)",
                      fontWeight: 700,
                      lineHeight: 1,
                      userSelect: "none",
                      marginBottom: 18,
                    }}
                  >
                    :
                  </span>

                  <CountdownTile
                    value={timeRemaining.seconds}
                    label={t.countdown.secondsLabel}
                    minDigits={2}
                    locale={locale}
                  />
                </div>
              ) : timeRemaining.isToday ? (
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--maroon)",
                  }}
                >
                  {t.countdown.todayMessage}
                </p>
              ) : (
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--muted)",
                  }}
                >
                  {t.countdown.completedMessage}
                </p>
              )
            ) : (
              // SSR Placeholder to prevent layout shift
              <div
                style={{
                  height: 76,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                  gap: 8,
                }}
              >
                <span>...</span>
              </div>
            )}
          </div>
        </ScrollReveal>
      </SectionTransition>
    </section>
  );
}
