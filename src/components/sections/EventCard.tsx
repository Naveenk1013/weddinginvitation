"use client";

import React from "react";
import Image from "next/image";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
import type { WeddingEvent } from "@/content/wedding";
import { useLocale } from "@/i18n/LocaleProvider";
import { TilakIcon } from "@/components/art/TilakIcon";
import { VivahIcon } from "@/components/art/VivahIcon";
import { AddToCalendar } from "@/components/ui/AddToCalendar";

interface EventCardProps {
  event: WeddingEvent;
  isPrimary?: boolean;
}

export function EventCard({ event, isPrimary = false }: EventCardProps) {
  const { locale, t } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const isTilak = event.id === "tilak";
  const title = event.title[locale];

  const weekdayText = isTilak ? t.events.tilak.weekday : t.events.vivah.weekday;
  const formattedDate = isTilak ? t.events.tilak.dateFormatted : t.events.vivah.dateFormatted;
  const imageAltText = event.imageAlt ? event.imageAlt[locale] : `${title} ceremony`;

  return (
    <m.article
      className="ceremonial-card"
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -3,
              boxShadow:
                "0 12px 32px -4px rgba(110, 30, 42, 0.16), 0 4px 14px rgba(176, 122, 34, 0.2)",
              transition: { type: "spring", visualDuration: 0.35, bounce: 0.15 },
            }
      }
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      style={{
        padding: 0,
        overflow: "hidden",
        border: isPrimary
          ? "1.5px solid rgba(176, 122, 34, 0.6)"
          : "1px solid rgba(176, 122, 34, 0.4)",
        backgroundImage: isPrimary
          ? "linear-gradient(180deg, rgba(255, 253, 248, 0.58) 0%, rgba(253, 246, 233, 0.72) 100%), url('/images/backgrounds/03-invitation-bg.jpg')"
          : "linear-gradient(180deg, rgba(255, 252, 247, 0.58) 0%, rgba(250, 242, 228, 0.72) 100%), url('/images/backgrounds/03-invitation-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: isPrimary
          ? "0 10px 28px -4px rgba(110, 30, 42, 0.14), 0 3px 12px rgba(176, 122, 34, 0.16)"
          : "0 6px 20px -3px rgba(110, 30, 42, 0.1), 0 2px 8px rgba(176, 122, 34, 0.12)",
        cursor: "default",
      }}
      aria-labelledby={`event-title-${event.id}`}
    >
      {/* Event Image Banner with Scroll Reveal Entrance Effect */}
      {event.image && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 190,
            overflow: "hidden",
            backgroundColor: "rgba(110, 30, 42, 0.08)",
          }}
        >
          <m.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
            whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <Image
              src={event.image}
              alt={imageAltText}
              fill
              sizes="(max-width: 480px) 100vw, 440px"
              style={{ objectFit: "cover" }}
            />
          </m.div>

          {/* Warm Golden Ceremonial Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(42, 23, 19, 0.72) 0%, rgba(42, 23, 19, 0.15) 45%, rgba(0, 0, 0, 0) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Auspicious Ceremony Top Badge */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              backgroundColor: "rgba(110, 30, 42, 0.88)",
              backdropFilter: "blur(6px)",
              color: "#FFF8ED",
              fontSize: "0.78rem",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "9999px",
              border: "1px solid rgba(245, 158, 11, 0.6)",
              letterSpacing: "0.04em",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            {locale === "hi"
              ? (isTilak ? "शुभ मुहूर्त" : "मांगलिक लग्न")
              : (isTilak ? "Auspicious Muhurat" : "Sacred Nuptials")}
          </div>
        </div>
      )}

      {/* Card Content Container */}
      <div style={{ padding: event.image ? "0 20px 22px 20px" : "24px 20px 22px 20px" }}>
        {/* Floating Auspicious Icon Seal */}
        {event.image ? (
          <div
            style={{
              marginTop: -26,
              marginBottom: 12,
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 3,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: isPrimary ? "var(--surface)" : "var(--surface-alt)",
                border: "2px solid var(--gold)",
                boxShadow: "0 4px 14px rgba(110, 30, 42, 0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isTilak ? <TilakIcon size={30} /> : <VivahIcon size={30} />}
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: 12, display: "flex", justifyContent: "center" }}>
            {isTilak ? <TilakIcon size={44} /> : <VivahIcon size={44} />}
          </div>
        )}

        {/* Ceremony Title */}
        <h3
          id={`event-title-${event.id}`}
          className="font-ceremonial text-maroon"
          style={{
            fontSize: "clamp(1.35rem, 5vw, 1.65rem)",
            fontWeight: 700,
            marginBottom: 6,
            textAlign: "center",
          }}
        >
          {title}
        </h3>

        {/* Semantic <time> Element */}
        <time
          dateTime={event.date}
          style={{
            display: "block",
            fontSize: "1.05rem",
            color: "var(--ink)",
            fontWeight: 600,
            margin: "4px 0",
            textAlign: "center",
          }}
        >
          <span style={{ color: "var(--maroon)", fontWeight: 700 }}>{weekdayText}</span>
          <span style={{ margin: "0 6px", color: "var(--gold)" }}>•</span>
          <span>{formattedDate}</span>
        </time>

        {/* Only render time/venue if they exist (never fake data) */}
        {event.time && (
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--muted)",
              marginTop: 6,
              textAlign: "center",
            }}
          >
            {event.time}
          </p>
        )}

        {/* Venue Information Card */}
        {event.venue && (
          <div
            style={{
              marginTop: 12,
              padding: "10px 14px",
              borderRadius: 14,
              backgroundColor: "rgba(176, 122, 34, 0.08)",
              border: "1px dashed rgba(176, 122, 34, 0.35)",
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: 700, color: "var(--maroon)", fontSize: "0.96rem" }}>
              📍 {event.venue.name[locale]}
            </p>
            <p style={{ color: "var(--muted)", marginTop: 2, fontSize: "0.88rem" }}>
              {event.venue.address[locale]}
            </p>
          </div>
        )}

        {/* Action Buttons: Google Maps & Add to Calendar */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          {event.mapUrl && (
            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                fontSize: "0.82rem",
                fontWeight: 600,
                padding: "8px 16px",
                minHeight: 44,
                minWidth: 44,
                borderRadius: 9999,
                color: "var(--white)",
                backgroundColor: "var(--maroon)",
                border: "1px solid rgba(176, 122, 34, 0.4)",
                boxShadow: "0 2px 8px rgba(110, 30, 42, 0.18)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "transform 0.15s ease",
              }}
              aria-label={`${t.events.viewOnMap} — ${title}`}
            >
              <span aria-hidden="true">📍</span>
              <span>{t.events.viewOnMap}</span>
            </a>
          )}

          <AddToCalendar event={event} />
        </div>
      </div>
    </m.article>
  );
}

