"use client";

import React from "react";
import { LanguageSwitch } from "./LanguageSwitch";

export function FloatingControls() {
  return (
    <aside
      className="floating-controls-cluster"
      aria-label="Floating Controls"
    >
      <LanguageSwitch />
    </aside>
  );
}
