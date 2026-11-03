"use client";

import React from "react";
import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";
import { wedding } from "@/content/wedding";

interface FloatingRsvpProps {
  isVisible?: boolean;
}

export function FloatingRsvp({ isVisible = true }: FloatingRsvpProps) {
  const { locale } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  const rsvpNumber = wedding.rsvp?.value || "7217679066";
  const cleanNumber = rsvpNumber.replace(/\D/g, "");
  // Ensure India country code 91 prefix
  const formattedPhone = cleanNumber.length === 10 ? `91${cleanNumber}` : cleanNumber;

  const defaultMessage =
    locale === "hi"
      ? "॥ श्री गणेशाय नमः ॥\nनमस्ते, हम रचना संग उदित के शुभ विवाह उत्सव में सम्मिलित होने के लिए RSVP की पुष्टि करते हैं।"
      : "Shree Ganeshaya Namah.\nHello, we confirm our RSVP for the wedding celebration of Rachna and Udit.";

  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      style={{
        position: "fixed",
        bottom: "max(16px, calc(var(--safe-bottom) + 16px))",
        left: "max(16px, calc(var(--safe-left) + 16px))",
        zIndex: 850,
        pointerEvents: isVisible ? "auto" : "none",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1) translateY(0)" : "scale(0.85) translateY(14px)",
        transition: shouldReduceMotion
          ? "opacity 0.2s ease"
          : "opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1), transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      aria-hidden={!isVisible}
      aria-label="RSVP via WhatsApp"
    >
      <m.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`RSVP on WhatsApp: ${rsvpNumber}`}
        title={`WhatsApp RSVP: ${rsvpNumber}`}
        whileHover={
          shouldReduceMotion
            ? undefined
            : {
                scale: 1.05,
                boxShadow:
                  "0 8px 24px rgba(18, 140, 126, 0.45), 0 3px 8px rgba(0, 0, 0, 0.16)",
              }
        }
        whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        transition={{ type: "spring", visualDuration: 0.35, bounce: 0.15 }}
        style={{
          minHeight: 44,
          minWidth: 44,
          padding: "8px 18px 8px 14px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          borderRadius: 9999,
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          color: "#FFFFFF",
          textDecoration: "none",
          border: "1.5px solid rgba(255, 255, 255, 0.4)",
          boxShadow:
            "0 6px 20px -2px rgba(18, 140, 126, 0.4), 0 2px 6px rgba(0, 0, 0, 0.14)",
          cursor: "pointer",
          userSelect: "none",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      >
        {/* Official WhatsApp Vector Logo */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.52 3.48A11.93 11.93 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 6L0 24l6.23-1.63a11.93 11.93 0 005.83 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.52-8.42zM12.06 21.87h-.01a9.9 9.9 0 01-5.05-1.39l-.36-.22-3.7 1 .98-3.6-.24-.38a9.92 9.92 0 01-1.52-5.31c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.03 2.91a9.9 9.9 0 012.91 7.03c0 5.48-4.46 9.94-9.95 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.6-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35z"
            fill="#FFFFFF"
          />
        </svg>

        {/* CTA Label */}
        <span
          style={{
            fontFamily: "var(--font-sans-family)",
            fontWeight: 700,
            fontSize: "0.86rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          {locale === "hi" ? "RSVP करें" : "RSVP"}
        </span>
      </m.a>
    </aside>
  );
}
