/**
 * Calendar Utilities for Wedding Ceremonies
 * Generates Google Calendar web links and downloadable .ics files
 * for all-day and timed events in IST (Asia/Kolkata).
 */

export interface CalendarEventDetails {
  title: string;
  description: string;
  location: string;
  /** ISO Date string: YYYY-MM-DD */
  date: string;
  /** Optional time string in HH:mm format */
  time?: string | null;
  /** Duration in hours if time is provided, defaults to 4 hours */
  durationHours?: number;
}

/**
 * Format date for all-day Google Calendar URL (YYYYMMDD)
 * For all-day events, Google Calendar requires end date to be the day after.
 */
function getNextDay(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const d = new Date(Date.UTC(year, month - 1, day));
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10).replace(/-/g, "");
}

/**
 * Generates an instant Google Calendar event creation URL
 */
export function getGoogleCalendarUrl(event: CalendarEventDetails): string {
  const dateFormatted = event.date.replace(/-/g, "");
  let datesParam: string;

  if (event.time) {
    // Convert IST to UTC (subtract 5h 30m)
    const startDate = new Date(`${event.date}T${event.time}:00+05:30`);
    const endDate = new Date(startDate.getTime() + (event.durationHours || 4) * 3600 * 1000);

    const pad = (n: number) => String(n).padStart(2, "0");
    const toUtcStr = (d: Date) =>
      `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;

    datesParam = `${toUtcStr(startDate)}/${toUtcStr(endDate)}`;
  } else {
    // All-day event
    const nextDay = getNextDay(event.date);
    datesParam = `${dateFormatted}/${nextDay}`;
  }

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: datesParam,
    details: event.description,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates iCalendar (.ics) content
 */
export function generateIcsContent(event: CalendarEventDetails): string {
  const dateFormatted = event.date.replace(/-/g, "");
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const dtstamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}00Z`;
  const uid = `wedding-${event.date}-${Math.random().toString(36).slice(2, 9)}@rachna-udit-wedding.in`;

  let dtStartEnd: string;
  if (event.time) {
    const startDate = new Date(`${event.date}T${event.time}:00+05:30`);
    const endDate = new Date(startDate.getTime() + (event.durationHours || 4) * 3600 * 1000);
    const toUtcStr = (d: Date) =>
      `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
    dtStartEnd = `DTSTART:${toUtcStr(startDate)}\nDTEND:${toUtcStr(endDate)}`;
  } else {
    const nextDay = getNextDay(event.date);
    dtStartEnd = `DTSTART;VALUE=DATE:${dateFormatted}\nDTEND;VALUE=DATE:${nextDay}`;
  }

  // Clean description and location for .ics standard escaping
  const cleanDesc = event.description.replace(/\n/g, "\\n").replace(/,/g, "\\,");
  const cleanLoc = event.location.replace(/\n/g, " ").replace(/,/g, "\\,");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Rachna and Udit Wedding//Ceremony Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    dtStartEnd,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${cleanDesc}`,
    `LOCATION:${cleanLoc}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

/**
 * Triggers an immediate browser download of an .ics file
 */
export function downloadIcsFile(event: CalendarEventDetails, filename = "wedding-ceremony.ics") {
  const content = generateIcsContent(event);
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename.endsWith(".ics") ? filename : `${filename}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
