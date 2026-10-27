"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import * as m from "motion/react-m";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";

interface ParentsParallaxCardProps {
  className?: string;
}

/**
 * 3D Parallax Portrait Card of Bride's Parents:
 * Mrs. Ranju Prasad & Mr. Yogendra Prasad.
 *
 * Features:
 * - Interactive 3D perspective tilt (tracks mouse cursor and touch swipes)
 * - True multi-plane 3D depth separation (transformStyle: preserve-3d)
 * - Background warm radiant halo aura (Layer 0, Z: -15px)
 * - Traditional royal Jharokha arch frame with gold foil filigree (Layer 1, Z: 0px)
 * - Dynamic light sheen / specular glare reflection (Layer 2, Z: 20px)
 * - Popped-out cutout portrait with depth drop-shadow (Layer 3, Z: 40px)
 * - Auspicious honor plaque with localized parent names (Layer 4, Z: 30px)
 * - Scroll-linked transformative parallax depth translation
 * - Full prefers-reduced-motion fallback (dignified static view)
 */
export function ParentsParallaxCard({ className = "" }: ParentsParallaxCardProps) {
  const { t } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // Normalized pointer offset (-0.5 to 0.5)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  // Smooth mechanical spring dampening
  const springConfig = { stiffness: 220, damping: 24, mass: 0.8 };
  const smoothX = useSpring(pointerX, springConfig);
  const smoothY = useSpring(pointerY, springConfig);

  // 3D rotation angles (-12deg to +12deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  // Dynamic light sheen / glare position
  const glareX = useTransform(smoothX, [-0.5, 0.5], ["15%", "85%"]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ["15%", "85%"]);
  const glareOpacity = useTransform(
    smoothX,
    [-0.5, 0, 0.5],
    [0.35, 0.15, 0.35]
  );

  // Scroll-linked gentle parallax translation
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const scrollParallaxY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const auraScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1.1, 0.9]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(Math.max(-0.5, Math.min(0.5, x)));
    pointerY.set(Math.max(-0.5, Math.min(0.5, y)));
    setIsInteracting(true);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
    setIsInteracting(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || e.touches.length === 0) return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const touch = e.touches[0];
    const x = (touch.clientX - rect.left) / rect.width - 0.5;
    const y = (touch.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(Math.max(-0.5, Math.min(0.5, x)));
    pointerY.set(Math.max(-0.5, Math.min(0.5, y)));
    setIsInteracting(true);
  };

  const handleTouchEnd = () => {
    pointerX.set(0);
    pointerY.set(0);
    setIsInteracting(false);
  };

  const altText = `${t.hosts.brideParentsNames} (${t.hosts.brideParentsTitle})`;

  return (
    <figure
      ref={cardRef}
      className={`parents-parallax-wrapper ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label={altText}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 360,
        margin: "20px auto 14px auto",
        perspective: 1100,
        WebkitPerspective: 1100,
        touchAction: "pan-y",
        cursor: shouldReduceMotion ? "default" : "grab",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {/* 3D Motion Stage */}
      <m.div
        style={{
          position: "relative",
          width: "100%",
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          y: shouldReduceMotion ? 0 : scrollParallaxY,
          transformOrigin: "center center",
        }}
        animate={
          !shouldReduceMotion && !isInteracting
            ? {
                rotateX: [0, 2, -2, 0],
                rotateY: [0, -2.5, 2.5, 0],
              }
            : undefined
        }
        transition={
          !shouldReduceMotion && !isInteracting
            ? {
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
      >
        {/* Layer 0: Auspicious Radiant Halo Aura (Z: -15px) */}
        {!shouldReduceMotion ? (
          <m.div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "10%",
              left: "5%",
              width: "90%",
              height: "80%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(254, 215, 170, 0.72) 0%, rgba(251, 191, 36, 0.28) 45%, rgba(176, 122, 34, 0.08) 70%, transparent 85%)",
              filter: "blur(18px)",
              scale: auraScale,
              transform: "translateZ(-15px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        ) : (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "12%",
              left: "8%",
              width: "84%",
              height: "76%",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(254, 215, 170, 0.45) 0%, rgba(251, 191, 36, 0.15) 55%, transparent 75%)",
              filter: "blur(12px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}

        {/* Layer 1: Royal Jharokha Arch Backdrop (Z: 0px) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: 22,
            borderTopLeftRadius: 150,
            borderTopRightRadius: 150,
            background:
              "linear-gradient(180deg, rgba(255, 253, 248, 0.96) 0%, rgba(253, 246, 235, 0.92) 100%)",
            border: "1.5px solid rgba(176, 122, 34, 0.48)",
            boxShadow:
              "0 14px 34px -4px rgba(110, 30, 42, 0.14), inset 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 0 24px rgba(176, 122, 34, 0.06)",
            padding: "26px 14px 18px 14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            transform: "translateZ(0px)",
            zIndex: 1,
          }}
        >
          {/* Inner concentric gold dashed border */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 5,
              borderRadius: 18,
              borderTopLeftRadius: 145,
              borderTopRightRadius: 145,
              border: "1px dashed rgba(176, 122, 34, 0.32)",
              pointerEvents: "none",
            }}
          />

          {/* Arch Crown Pinnacle Ornament */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 6,
              left: "50%",
              transform: "translateX(-50%)",
              color: "var(--gold)",
              fontSize: "1.1rem",
              lineHeight: 1,
              zIndex: 3,
            }}
          >
            𑁍
          </div>

          {/* Layer 2: Dynamic Interactive Specular Glare (Z: 20px) */}
          {!shouldReduceMotion && (
            <m.div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 22,
                borderTopLeftRadius: 150,
                borderTopRightRadius: 150,
                background: useTransform(
                  [glareX, glareY],
                  ([xVal, yVal]) =>
                    `radial-gradient(circle 220px at ${xVal} ${yVal}, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.1) 45%, transparent 75%)`
                ),
                opacity: glareOpacity,
                transform: "translateZ(20px)",
                pointerEvents: "none",
                zIndex: 4,
              }}
            />
          )}

          {/* Layer 3: Parents Cutout Portrait (Z: 40px) */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 290,
              height: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              marginTop: 10,
              marginBottom: 4,
              transform: "translateZ(40px)",
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: "relative",
                width: 280,
                height: 245,
                filter: "drop-shadow(0 12px 18px rgba(110, 30, 42, 0.22))",
              }}
            >
              <Image
                src="/images/parents.png"
                alt={altText}
                fill
                priority
                sizes="(max-width: 480px) 280px, 320px"
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Layer 4: Auspicious Honor Plaque (Z: 30px) */}
          <figcaption
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 320,
              marginTop: 6,
              padding: "10px 14px",
              borderRadius: 14,
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              border: "1.2px solid rgba(176, 122, 34, 0.42)",
              boxShadow:
                "0 4px 14px rgba(110, 30, 42, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.9)",
              transform: "translateZ(30px)",
              textAlign: "center",
              zIndex: 3,
            }}
          >
            <p
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.09em",
                color: "var(--muted)",
                fontWeight: 600,
                marginBottom: 3,
                textTransform: "uppercase",
              }}
            >
              {t.hosts.brideParentsTitle}
            </p>
            <p
              className="font-ceremonial text-maroon"
              style={{
                fontSize: "clamp(1.05rem, 4vw, 1.25rem)",
                fontWeight: 700,
                letterSpacing: "0.02em",
                lineHeight: 1.35,
              }}
            >
              {t.hosts.brideParentsNames}
            </p>

            {/* Sacred Lotus Filigree Accent */}
            <div
              aria-hidden="true"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                marginTop: 5,
                color: "var(--gold)",
                fontSize: "0.82rem",
                opacity: 0.85,
              }}
            >
              <span>—</span>
              <span>𑁍</span>
              <span>—</span>
            </div>
          </figcaption>
        </div>
      </m.div>
    </figure>
  );
}
