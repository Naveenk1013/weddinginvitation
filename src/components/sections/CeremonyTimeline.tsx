"use client";

import React from "react";
import { wedding } from "@/content/wedding";
import { useLocale } from "@/i18n/LocaleProvider";
import { EventCard } from "./EventCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { TimelineDraw } from "@/components/motion/TimelineDraw";

export function CeremonyTimeline() {
  const { t } = useLocale();

  return (
    <section
      id="ceremonies"
      aria-labelledby="timeline-heading"
      style={{
        width: "100%",
        maxWidth: 440,
        margin: "28px auto",
        position: "relative",
        borderRadius: 24,
        padding: "24px 14px",
        backgroundImage:
          "linear-gradient(180deg, rgba(255, 252, 247, 0.32) 0%, rgba(253, 246, 233, 0.48) 100%), url('/images/backgrounds/04-timeline-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1.5px solid rgba(176, 122, 34, 0.45)",
        boxShadow:
          "0 14px 38px -6px rgba(110, 30, 42, 0.16), 0 4px 16px rgba(176, 122, 34, 0.18)",
      }}
    >
      <SectionTransition effect="curtain-up">
        <ScrollReveal variant="blur-in" delay={0.05}>
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <h2
              id="timeline-heading"
              className="font-ceremonial text-maroon"
              style={{
                fontSize: "clamp(1.4rem, 6vw, 1.85rem)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                marginBottom: 4,
                textShadow: "0 1px 4px rgba(255, 255, 255, 0.95), 0 2px 8px rgba(255, 255, 255, 0.85)",
              }}
            >
              {t.timeline.heading}
            </h2>

            <p style={{ fontSize: "0.95rem", color: "var(--muted)", fontWeight: 600, textShadow: "0 1px 3px rgba(255, 255, 255, 0.95)" }}>
              {t.timeline.subheading}
            </p>
          </div>
        </ScrollReveal>

        {/* Ceremonial Vertical Spine Line — draws with scroll */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {/* Scroll-linked timeline spine connecting the event cards */}
          <TimelineDraw color="var(--gold)" width={2} />

          {wedding.events.map((event, index) => (
            <ScrollReveal
              key={event.id}
              variant={index % 2 === 0 ? "fade-left" : "fade-right"}
              staggerIndex={index}
              staggerDelay={0.1}
              style={{ position: "relative", zIndex: 1 }}
            >
              <EventCard
                event={event}
                isPrimary={event.id === "vivah"}
              />
            </ScrollReveal>
          ))}
        </div>
      </SectionTransition>
    </section>
  );
}
