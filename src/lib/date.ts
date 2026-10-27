import type { Locale } from "@/content/wedding";

export interface TimeRemaining {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
  isToday: boolean;
}

export function formatWeddingDate(
  isoDate: string,
  locale: Locale = "hi"
): { weekday: string; dateFormatted: string } {
  // Parse date components safely to avoid timezone offset shifts for date-only strings
  const [year, month, day] = isoDate.split("-").map(Number);
  const dateObj = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));

  const intlLocale = locale === "hi" ? "hi-IN" : "en-IN";

  const weekdayFormatter = new Intl.DateTimeFormat(intlLocale, {
    weekday: "long",
    timeZone: "Asia/Kolkata",
  });

  const dateFormatter = new Intl.DateTimeFormat(intlLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });

  return {
    weekday: weekdayFormatter.format(dateObj),
    dateFormatted: dateFormatter.format(dateObj),
  };
}

export function getDaysRemaining(targetIsoDate: string): number {
  const [tYear, tMonth, tDay] = targetIsoDate.split("-").map(Number);

  // Target start of day in IST (UTC+05:30)
  const targetMidnightUtc = Date.UTC(tYear, tMonth - 1, tDay, 0, 0, 0) - (5.5 * 3600 * 1000);

  // Current time in IST
  const now = new Date();
  const nowUtc = now.getTime();
  const istOffsetMs = 5.5 * 3600 * 1000;
  const istNow = new Date(nowUtc + istOffsetMs);
  const istTodayMidnightUtc =
    Date.UTC(istNow.getUTCFullYear(), istNow.getUTCMonth(), istNow.getUTCDate(), 0, 0, 0) - istOffsetMs;

  const diffMs = targetMidnightUtc - istTodayMidnightUtc;
  const days = Math.round(diffMs / (1000 * 60 * 60 * 24));

  return Math.max(0, days);
}

/**
 * Calculates complete days, hours, minutes, seconds remaining
 * until the auspicious ceremony target in IST (UTC+05:30).
 */
export function getTimeRemaining(targetIsoDate: string, targetTime?: string | null): TimeRemaining {
  const [tYear, tMonth, tDay] = targetIsoDate.split("-").map(Number);
  let tHour = 0;
  let tMin = 0;

  if (targetTime) {
    const [h, m] = targetTime.split(":").map(Number);
    if (!isNaN(h)) tHour = h;
    if (!isNaN(m)) tMin = m;
  }

  // Target epoch in IST (UTC+05:30)
  const istOffsetMs = 5.5 * 3600 * 1000;
  const targetUtcMs = Date.UTC(tYear, tMonth - 1, tDay, tHour, tMin, 0) - istOffsetMs;

  const nowMs = Date.now();
  const diffMs = targetUtcMs - nowMs;

  if (diffMs <= 0) {
    // Check if it is the wedding day today in IST
    const istNow = new Date(nowMs + istOffsetMs);
    const isToday =
      istNow.getUTCFullYear() === tYear &&
      istNow.getUTCMonth() === tMonth - 1 &&
      istNow.getUTCDate() === tDay;

    return {
      totalMs: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: !isToday,
      isToday,
    };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    totalMs: diffMs,
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
    isToday: false,
  };
}
