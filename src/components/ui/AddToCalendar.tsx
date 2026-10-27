"use client";

import React, { useState, useRef, useEffect } from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";
import type { WeddingEvent } from "@/content/wedding";
import { getGoogleCalendarUrl, downloadIcsFile } from "@/lib/calendar";

interface AddToCalendarProps {
  event: WeddingEvent;
}

export function AddToCalendar({ event }: AddToCalendarProps) {
  const { locale, t } = useLocale();
  const shouldReduce = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  const eventTitle =
    locale === "hi"
      ? `रचना × उदित — ${event.title.hi}`
      : `Rachna × Udit — ${event.title.en}`;

  const eventDescription =
    locale === "hi"
      ? `॥ श्री गणेशाय नमः ॥\nरचना एवं उदित के ${event.title.hi} का सप्रेम आमंत्रण।\nस्थान: दोइला बिनटोली, बिहार\nमैप: ${event.mapUrl || ""}`
      : `Shree Ganeshaya Namah\nWedding Celebration of Rachna and Udit — ${event.title.en}.\nVenue: Doila Bintoli, Bihar\nMap: ${event.mapUrl || ""}`;

  const locationText =
    event.venue?.address[locale] || "Doila Bintoli, Bihar";

  const calendarPayload = {
    title: eventTitle,
    description: eventDescription,
    location: locationText,
    date: event.date,
    time: event.time,
  };

  const handleGoogleCalendar = () => {
    const url = getGoogleCalendarUrl(calendarPayload);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const handleIcsDownload = () => {
    const filename = `rachna-udit-${event.id}.ics`;
    downloadIcsFile(calendarPayload, filename);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${t.events.addToCalendar} — ${event.title[locale]}`}
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
          color: "var(--maroon)",
          backgroundColor: "rgba(255, 253, 248, 0.95)",
          border: "1.2px solid rgba(176, 122, 34, 0.55)",
          boxShadow: "0 2px 6px rgba(110, 30, 42, 0.08)",
          cursor: "pointer",
          letterSpacing: "0.02em",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        }}
      >
        <span aria-hidden="true">📅</span>
        <span>{t.events.addToCalendar}</span>
        <span
          style={{
            fontSize: "0.68rem",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            display: "inline-block",
          }}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <m.div
          initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -4, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          role="menu"
          aria-label={t.events.addToCalendar}
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#FFFDF8",
            border: "1.5px solid rgba(176, 122, 34, 0.6)",
            borderRadius: 14,
            boxShadow:
              "0 10px 28px -4px rgba(110, 30, 42, 0.22), 0 2px 8px rgba(176, 122, 34, 0.15)",
            padding: 6,
            minWidth: 200,
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {/* Google Calendar Option */}
          <button
            type="button"
            role="menuitem"
            onClick={handleGoogleCalendar}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              minHeight: 44,
              borderRadius: 8,
              border: "none",
              backgroundColor: "transparent",
              color: "var(--ink)",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              textAlign: "left",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(176, 122, 34, 0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <span style={{ fontSize: "1rem" }} aria-hidden="true">🌐</span>
            <span>{t.events.googleCalendar}</span>
          </button>

          {/* Apple Calendar / Outlook (.ics) Option */}
          <button
            type="button"
            role="menuitem"
            onClick={handleIcsDownload}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              minHeight: 44,
              borderRadius: 8,
              border: "none",
              backgroundColor: "transparent",
              color: "var(--ink)",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              textAlign: "left",
              transition: "background-color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(176, 122, 34, 0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            <span style={{ fontSize: "1rem" }} aria-hidden="true">🍏</span>
            <span>{t.events.appleCalendar}</span>
          </button>
        </m.div>
      )}
    </div>
  );
}
