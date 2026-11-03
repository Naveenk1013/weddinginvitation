"use client";

import React, { useEffect, useState } from "react";
import { FloatingControls } from "@/components/ui/FloatingControls";
import { FloatingRsvp } from "@/components/ui/FloatingRsvp";
import { ClickSpark } from "@/components/ui/ClickSpark";
import { Ribbons } from "@/components/ui/Ribbons";
import { MarigoldPetals } from "@/components/art/MarigoldPetals";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { OpeningInvocation } from "@/components/sections/OpeningInvocation";
import { CoupleReveal } from "@/components/sections/CoupleReveal";
import { InvitationMessage } from "@/components/sections/InvitationMessage";
import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";
import { EntranceVideoPortal } from "@/components/ui/EntranceVideoPortal";
import { CeremonyTimeline } from "@/components/sections/CeremonyTimeline";
import { Countdown } from "@/components/sections/Countdown";
import { ShareSection } from "@/components/sections/ShareSection";
import { ClosingBlessing } from "@/components/sections/ClosingBlessing";

export default function WeddingInvitationPage() {
  // Three-Stage Ceremonial Journey: 'tunnel' -> 'video' (sandwiched) -> 'invitation'
  const [entryStage, setEntryStage] = useState<"tunnel" | "video" | "invitation">("tunnel");

  // Disable automatic browser scroll restoration so entry always begins at the top
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  const handleTunnelComplete = () => {
    // Sandwich the Entrance Video directly after the tunnel gate opens
    setEntryStage("video");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  const handleVideoComplete = () => {
    // Transition from the entrance video into the main royal invitation
    setEntryStage("invitation");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <div className="page-container">
      {/* STAGE 1: INDIVIDUAL FIRST ENTRY EFFECT: Spatial Perspective Corridor */}
      <PerspectiveTunnelHero
        isOpen={entryStage === "tunnel"}
        onClose={handleTunnelComplete}
      />

      {/* STAGE 2: SANDWICHED GRAND ENTRANCE GATEWAY VIDEO */}
      <EntranceVideoPortal
        isOpen={entryStage === "video"}
        onComplete={handleVideoComplete}
      />

      {/* Sacred Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Floating Header Controls (Language Switcher) */}
      <FloatingControls />

      {/* Floating Bottom-Left WhatsApp RSVP CTA Button */}
      <FloatingRsvp isVisible={entryStage === "invitation"} />

      {/* Ambient Drifting Marigold Petals (Paused if prefers-reduced-motion) */}
      <MarigoldPetals />

      {/* Celebratory Fluid Silk Ribbons (Sacred gold, saffron, amber & maroon trails) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        <Ribbons
          colors={["#B07A22", "#C85A16", "#F59E0B", "#6E1E2A"]}
          thickness={24}
          length={1.3}
          spread={14}
          stiffness={0.42}
          bounce={0.45}
          wave={0.12}
          softness={0.25}
          opacity={0.32}
          fade={true}
        />
      </div>

      {/* Celebratory ClickSpark Effect for auspicious interactions */}
      <ClickSpark
        sparkColor={["#B07A22", "#C85A16", "#F59E0B", "#FDE047", "#FFFDF8"]}
        shape="star"
        sparkCount={9}
        sparkSize={12}
        sparkRadius={28}
        duration={550}
        glow={0.35}
        extraScale={1}
        className="w-full"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Main Ceremonial Invitation Container — Unattached, Clean Native Scroll */}
        <main id="main-invitation" className="ceremonial-scroll-wrap">
          {/* 1. Sacred Invocation */}
          <OpeningInvocation isEntered={entryStage === "invitation"} />

          {/* 2. Couple Reveal & Auspicious Portrait */}
          <CoupleReveal isEntered={entryStage === "invitation"} />

          {/* 3. Invitation Message */}
          <InvitationMessage />

          {/* 4. Auspicious Ceremonies Timeline (Tilak & Vivah) with Scroll-Drawn Spine */}
          <CeremonyTimeline />

          {/* 5. Countdown to Vivah with Full Time Rolling Digits */}
          <Countdown />

          {/* 6. Share Invitation */}
          <ShareSection />

          {/* 7. Closing Blessing */}
          <ClosingBlessing />
        </main>
      </ClickSpark>
    </div>
  );
}
