"use client";

import React from "react";
import { LanguageSwitch } from "./LanguageSwitch";

interface FloatingControlsProps {
  onOpenTunnel?: () => void;
}

export function FloatingControls({ onOpenTunnel }: FloatingControlsProps) {
  return (
    <aside
      className="floating-controls-cluster"
      aria-label="Floating Controls"
    >
      {onOpenTunnel && (
        <button
          type="button"
          onClick={onOpenTunnel}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: "var(--surface)",
            color: "var(--gold)",
            border: "1px solid rgba(176, 122, 34, 0.45)",
            boxShadow: "0 2px 8px rgba(110, 30, 42, 0.08)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          title="मांगलिक उत्सव दर्शन • Ceremony Corridor"
          aria-label="मांगलिक उत्सव दर्शन • Ceremony Corridor"
        >
          ✨
        </button>
      )}
      <LanguageSwitch />
    </aside>
  );
}
