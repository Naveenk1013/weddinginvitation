"use client";

import React, { useRef, useState, useEffect } from "react";
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";
import { useReducedMotion } from "motion/react";
import { useLocale } from "@/i18n/LocaleProvider";

interface EntranceVideoPortalProps {
  isOpen: boolean;
  onComplete: () => void;
  videoSrc?: string;
  fallbackSrc?: string;
}

export function EntranceVideoPortal({
  isOpen,
  onComplete,
  videoSrc = "/videos/entrance.mp4",
  fallbackSrc = "https://res.cloudinary.com/dro6n6co1/video/upload/v1792999106/entrance_zifwoo.mp4",
}: EntranceVideoPortalProps) {
  const { locale } = useLocale();
  const shouldReduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-play video on mount/open
  useEffect(() => {
    if (!isOpen) return;

    // Reset scroll to top
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {
        // Autoplay policy fallback: keep muted and retry
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {
          setIsPlaying(false);
        });
      });
    }
  }, [isOpen]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress(video.currentTime / video.duration);
    }
  };

  const handleEnded = () => {
    onComplete();
  };

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onComplete();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      const nextMuted = !video.muted;
      video.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const skipText =
    locale === "hi" ? "सीधे आमंत्रण देखें →" : "Skip to Invitation →";
  const soundText = isMuted
    ? locale === "hi"
      ? "🔇 ध्वनि चालू करें"
      : "🔇 Unmute Audio"
    : locale === "hi"
      ? "🔊 ध्वनि बंद करें"
      : "🔊 Mute Audio";

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          key="entrance-video-portal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: shouldReduce ? 0.2 : 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          transition={{ duration: shouldReduce ? 0.2 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            backgroundColor: "#0D0407",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Grand Wedding Entrance Video"
        >
          {/* Subtle Royal Radial Glow Background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at center, rgba(176, 122, 34, 0.15) 0%, rgba(13, 4, 7, 0.95) 75%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Top Bar Controls (Sound & Skip) */}
          <header
            style={{
              position: "absolute",
              top: "max(18px, calc(var(--safe-top) + 12px))",
              left: 0,
              right: 0,
              padding: "0 18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
              maxWidth: 800,
              margin: "0 auto",
              width: "100%",
            }}
          >
            {/* Audio Toggle Button */}
            <button
              type="button"
              onClick={toggleMute}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "8px 16px",
                minHeight: 44,
                minWidth: 44,
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--gold-light, #FDE047)",
                backgroundColor: "rgba(18, 6, 9, 0.75)",
                border: "1px solid rgba(176, 122, 34, 0.55)",
                borderRadius: 9999,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
                transition: "all 0.2s ease",
              }}
              aria-label={soundText}
            >
              <span>{soundText}</span>
            </button>

            {/* Skip directly to Invitation Button */}
            <button
              type="button"
              onClick={handleSkip}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "8px 18px",
                minHeight: 44,
                minWidth: 44,
                fontSize: "0.84rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#FFFFFF",
                backgroundColor: "rgba(110, 30, 42, 0.85)",
                border: "1px solid rgba(245, 158, 11, 0.65)",
                borderRadius: 9999,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                cursor: "pointer",
                boxShadow:
                  "0 4px 18px rgba(0, 0, 0, 0.5), 0 0 12px rgba(245, 158, 11, 0.3)",
                transition: "all 0.2s ease",
              }}
              aria-label={skipText}
            >
              <span>{skipText}</span>
            </button>
          </header>

          {/* Main Video Presentation Stage */}
          <div
            onClick={togglePlay}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              maxWidth: 540,
              maxHeight: "92svh",
              aspectRatio: "9 / 16",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            <video
              ref={videoRef}
              playsInline
              autoPlay
              muted={isMuted}
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
              onError={() => {
                // Fallback to complete if video fails
                setTimeout(onComplete, 1200);
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 16,
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8)",
              }}
            >
              <source src={videoSrc} type="video/mp4" />
              <source src={fallbackSrc} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Tap to Pause / Play Overlay Indicator */}
            {!isPlaying && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "rgba(110, 30, 42, 0.85)",
                    border: "2px solid var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-light)",
                    fontSize: "1.6rem",
                    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  ▶
                </div>
              </div>
            )}
          </div>

          {/* Bottom Ceremonial Gold Flight Progress Line */}
          <footer
            style={{
              position: "absolute",
              bottom: "max(16px, calc(var(--safe-bottom) + 12px))",
              left: 0,
              right: 0,
              padding: "0 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              zIndex: 10,
              maxWidth: 540,
              margin: "0 auto",
              width: "100%",
            }}
          >
            {/* Elegant Golden Progress Bar */}
            <div
              style={{
                width: "100%",
                height: 3,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: 9999,
                overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${Math.min(100, Math.max(0, progress * 100))}%`,
                  background:
                    "linear-gradient(90deg, #B07A22 0%, #F59E0B 50%, #FDE047 100%)",
                  transition: "width 0.15s linear",
                  borderRadius: 9999,
                  boxShadow: "0 0 8px #F59E0B",
                }}
              />
            </div>

            {/* Auspicious Subtitle text */}
            <p
              style={{
                fontSize: "0.78rem",
                color: "var(--gold-light, #FDE047)",
                letterSpacing: "0.08em",
                margin: 0,
                textTransform: "uppercase",
                opacity: 0.85,
                textShadow: "0 1px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              {locale === "hi"
                ? "॥ मांगलिक प्रवेश द्वार ॥"
                : "॥ Shubh Pravesh ॥"}
            </p>
          </footer>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export default EntranceVideoPortal;
