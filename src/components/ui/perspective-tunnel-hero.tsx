"use client";

import React, { useEffect, useRef, useState } from "react";
import * as m from "motion/react-m";
import {
  AnimatePresence,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";
import { RoyalGate } from "@/components/art/RoyalGate";
import "./perspective-tunnel-hero.css";

export interface TunnelItem {
  src: string;
  title: {
    hi: string;
    en: string;
  };
}

export const WEDDING_EVENT_IMAGES: TunnelItem[] = [
  { src: "/images/tunnel/01-tilak.jpg", title: { hi: "शुभ तिलक • 25 Nov", en: "Shubh Tilak • 25 Nov" } },
  { src: "/images/tunnel/02-haldi.jpg", title: { hi: "शुभ हल्दी उत्सव", en: "Haldi Celebration" } },
  { src: "/images/tunnel/03-mehendi.jpg", title: { hi: "मेहंदी की रात", en: "Mehendi Soirée" } },
  { src: "/images/tunnel/04-sangeet.jpg", title: { hi: "संगीत संध्या", en: "Sangeet Night" } },
  { src: "/images/tunnel/05-varmala.jpg", title: { hi: "जयमाला पावन क्षण", en: "Varmala Sacred Vows" } },
  { src: "/images/tunnel/06-phera.jpg", title: { hi: "सप्तपदी सात फेरे", en: "Saptapadi Seven Phere" } },
  { src: "/images/tunnel/07-sindoor.jpg", title: { hi: "सिंदूर एवं परिणय", en: "Sindoor & Nuptials" } },
  { src: "/images/tunnel/08-ashirwad.jpg", title: { hi: "सस्नेह आशीर्वाद", en: "Family Ashirwad" } },
  { src: "/images/tunnel/09-vivah.jpg", title: { hi: "शुभ विवाह • 2 Dec", en: "Shubh Vivah • 2 Dec" } },
];

interface TunnelCardData {
  item: TunnelItem;
  angleCos: number;
  angleSin: number;
  radiusFactorX: number;
  radiusFactorY: number;
  rotationZ: number;
  index: number;
}

function computeTunnelCards(items: TunnelItem[]): TunnelCardData[] {
  return items.map((item, i) => {
    const goldenAngle = i * 137.5 * (Math.PI / 180);
    const radiusFactorX = 0.28 + (i % 3) * 0.08;
    const radiusFactorY = 0.26 + (i % 2) * 0.09;

    return {
      item,
      angleCos: Math.cos(goldenAngle),
      angleSin: Math.sin(goldenAngle),
      radiusFactorX,
      radiusFactorY,
      rotationZ: (i % 2 === 0 ? 1 : -1) * (3 + (i % 5) * 2),
      index: i,
    };
  });
}

const SPRING_CONFIG = { stiffness: 60, damping: 25, mass: 0.5 };

interface StageDimensions {
  width: number;
  height: number;
  isMobile: boolean;
}

function useCameraParallax(enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING_CONFIG);
  const y = useSpring(rawY, SPRING_CONFIG);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, rawX, rawY]);

  return { x, y };
}

interface TunnelCardProps {
  card: TunnelCardData;
  progress: MotionValue<number>;
  pointer: { x: MotionValue<number>; y: MotionValue<number> };
  total: number;
  stage: StageDimensions;
  locale: "hi" | "en";
}

function TunnelCard({ card, progress, pointer, total, stage, locale }: TunnelCardProps) {
  const staggerSpan = 0.58;
  const start = (card.index / total) * (1 - staggerSpan);
  const end = start + staggerSpan;

  const localProgress = useTransform(progress, [start, end], [0, 1]);

  const farZ = stage.isMobile ? -1400 : -2000;
  const nearZ = stage.isMobile ? 420 : 580;
  const z = useTransform(localProgress, [0, 1], [farZ, nearZ]);

  const opacity = useTransform(localProgress, [0, 0.15, 0.85, 0.98], [0, 1, 1, 0]);

  const cardWidth = stage.isMobile
    ? Math.max(130, Math.min(180, stage.width * 0.38))
    : Math.max(180, Math.min(270, stage.width * 0.18));

  const baseX = card.angleCos * (stage.width * card.radiusFactorX);
  const baseY = card.angleSin * (stage.height * card.radiusFactorY);
  const panStrength = stage.isMobile ? 20 : 45;

  const transform = useTransform(
    [z, pointer.x, pointer.y],
    ([currZ, px, py]: number[]) => {
      const offsetX = baseX - px * panStrength;
      const offsetY = baseY - py * panStrength;
      return `translate3d(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px), ${currZ}px) rotateZ(${card.rotationZ}deg)`;
    }
  );

  const displayTitle = card.item.title[locale] || card.item.title.hi;

  return (
    <m.div
      style={{
        width: cardWidth,
        transform,
        opacity,
        zIndex: card.index + 1,
      }}
      className="tunnel-card-wrap select-none"
    >
      <div className="tunnel-card-inner group">
        <img
          src={card.item.src}
          alt={displayTitle}
          draggable={false}
          className="tunnel-card-img"
        />
        <div className="tunnel-card-overlay">
          <span className="tunnel-card-label drop-shadow-md">
            {displayTitle}
          </span>
        </div>
      </div>
    </m.div>
  );
}

export interface PerspectiveTunnelHeroProps {
  isOpen?: boolean;
  onClose?: () => void;
  items?: TunnelItem[];
  tag?: string;
  className?: string;
}

export function PerspectiveTunnelHero({
  isOpen = true,
  onClose,
  items = WEDDING_EVENT_IMAGES,
  tag = "॥ श्री गणेशाय नमः ॥",
  className = "",
}: PerspectiveTunnelHeroProps) {
  const reduce = useReducedMotion();
  const { locale } = useLocale();
  const [internalOpen, setInternalOpen] = useState(true);
  const [isGateOpening, setIsGateOpening] = useState(false);

  const activeOpen = onClose ? isOpen : internalOpen;

  const stageRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<StageDimensions>({
    width: 1440,
    height: 900,
    isMobile: false,
  });

  const cards = computeTunnelCards(items);

  // Motion value tracking 0 to 1 through internal entry interactions
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 50,
    damping: 26,
    restDelta: 0.0003,
  });

  // Manage body scroll lock and reset state when standalone entry overlay is active
  useEffect(() => {
    if (activeOpen) {
      rawProgress.set(0);
      setIsGateOpening(false);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeOpen, rawProgress]);

  useEffect(() => {
    const updateDimensions = () => {
      const el = stageRef.current;
      const w = el ? el.clientWidth : window.innerWidth;
      const h = el ? el.clientHeight : window.innerHeight;
      setStage({
        width: Math.max(300, w),
        height: Math.max(480, h),
        isMobile: w < 768,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [activeOpen]);

  // Trigger Royal Opening Gate effect
  const handleOpenGate = () => {
    if (isGateOpening) return;
    setIsGateOpening(true);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  // Called when the royal gates complete their outward swing
  const handleGateAnimationComplete = () => {
    // Force scroll to remain strictly at the top of the wedding invitation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Transient guard to discard trailing trackpad/momentum wheel events
    const startTime = performance.now();
    const guardScroll = () => {
      window.scrollTo(0, 0);
      if (performance.now() - startTime < 700) {
        requestAnimationFrame(guardScroll);
      }
    };
    requestAnimationFrame(guardScroll);

    if (onClose) {
      onClose();
    } else {
      setInternalOpen(false);
    }
    setIsGateOpening(false);
  };

  // Standalone Wheel, Touch, and Keyboard listeners
  useEffect(() => {
    if (!activeOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isGateOpening) return;

      const delta = e.deltaY * 0.00045;
      const current = rawProgress.get();
      const next = Math.min(1, Math.max(0, current + delta));
      rawProgress.set(next);

      if (next >= 0.99) {
        handleOpenGate();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      e.preventDefault();
      e.stopPropagation();
      if (isGateOpening) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      const delta = deltaY * 0.0012;
      const current = rawProgress.get();
      const next = Math.min(1, Math.max(0, current + delta));
      rawProgress.set(next);

      if (next >= 0.99) {
        handleOpenGate();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGateOpening) return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        const next = Math.min(1, rawProgress.get() + 0.12);
        rawProgress.set(next);
        if (next >= 0.99) handleOpenGate();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        rawProgress.set(Math.max(0, rawProgress.get() - 0.12));
      } else if (e.key === "Enter" || e.key === "Escape") {
        handleOpenGate();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeOpen, isGateOpening, rawProgress]);

  const pointer = useCameraParallax(!reduce);

  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

  // Main Header: Solely ॥ श्री गणेशाय नमः ॥ as requested
  const resolvedHeader = tag;
  const enterButtonText =
    locale === "hi" ? "सप्रेम आमंत्रण में प्रवेश करें • Enter" : "Enter Royal Invitation • सप्रेम प्रवेश";
  const skipText = locale === "hi" ? "सीधे प्रवेश करें →" : "Enter Directly →";
  const scrollPromptText =
    locale === "hi" ? "नीचे स्क्रॉल करें • Scroll Down" : "Scroll Down • नीचे स्क्रॉल करें";

  return (
    <AnimatePresence>
      {activeOpen && (
        <m.div
          key="perspective-tunnel-entry-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className={`perspective-tunnel-overlay ${className}`.trim()}
          role="dialog"
          aria-modal="true"
          aria-label="Wedding Ceremonies Sacred Corridor"
        >
          <div
            ref={stageRef}
            className="perspective-tunnel-stage"
            style={{
              perspective: stage.isMobile ? "900px" : "1200px",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Auspicious Ambient Radiant Warm Background */}
            <div className="tunnel-radial-glow" />

            {/* Decorative Traditional Depth Rings */}
            <div className="tunnel-depth-ring-inner" />
            <div className="tunnel-depth-ring-outer" />

            {/* SOLE MAIN HEADER: ॥ श्री गणेशाय नमः ॥ */}
            <header className="tunnel-header">
              <m.h1
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="tunnel-header-title"
              >
                {resolvedHeader}
              </m.h1>

              {/* Decorative Golden Auspicious Arch Underline */}
              <div className="tunnel-header-arch" aria-hidden="true">
                <div className="tunnel-header-arch-line" />
                <span className="tunnel-header-arch-gem">❖</span>
                <div className="tunnel-header-arch-line reverse" />
              </div>
            </header>

            {/* Top-Right Quick Skip Option */}
            <div className="tunnel-skip-wrap">
              <button
                type="button"
                onClick={handleOpenGate}
                className="tunnel-skip-button"
                aria-label="Enter invitation directly"
              >
                <span>{skipText}</span>
              </button>
            </div>

            {/* 3D Z-Space Spatial Corridor: 9 Wedding Ceremonies */}
            <div className="perspective-tunnel-plane">
              {cards.map((card, i) => (
                <TunnelCard
                  key={i}
                  card={card}
                  progress={smoothProgress}
                  pointer={pointer}
                  total={cards.length}
                  stage={stage}
                  locale={locale}
                />
              ))}
            </div>

            {/* Interactive Scroll & Enter Prompt — Centered at Bottom */}
            <div className="tunnel-enter-wrap">
              {/* Animated Royal Scroll Down Indicator — Softly fades away as user scrolls */}
              <m.div
                style={{
                  opacity: scrollIndicatorOpacity,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 10,
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              >
                {/* Royal Mouse Icon with Scrolling Gold Bead */}
                <div className="tunnel-mouse-icon">
                  <div className="tunnel-mouse-wheel" />
                </div>

                {/* Scroll Down Instruction Text */}
                <span className="tunnel-scroll-text">
                  {scrollPromptText}
                </span>

                {/* Animated Pulsing Down Chevron */}
                <svg
                  className="tunnel-scroll-chevron"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </m.div>

              {/* Enter Button with Golden Badge */}
              <button
                type="button"
                onClick={handleOpenGate}
                className="tunnel-enter-button"
                aria-label="सप्रेम आमंत्रण में प्रवेश करें / Enter Invitation"
              >
                <span className="tunnel-enter-badge">
                  <span>✨</span>
                  <span>{enterButtonText}</span>
                </span>
              </button>
            </div>

            {/* Subtle Royal Flight Progress Indicator */}
            {!reduce && (
              <div className="tunnel-progress-track">
                <m.div
                  style={{ scaleX: smoothProgress }}
                  className="tunnel-progress-bar"
                />
              </div>
            )}

            {/* AT THE END: ROYAL OPENING GATE EFFECT */}
            <RoyalGate
              isOpen={isGateOpening}
              onAnimationComplete={handleGateAnimationComplete}
            />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export const CurtainSplitHero = PerspectiveTunnelHero;
export default PerspectiveTunnelHero;
