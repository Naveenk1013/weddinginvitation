# TECHNICAL_ARCHITECTURE.md

## Stack
Next.js (App Router) · TypeScript (strict) · Motion for React (`LazyMotion`) · Tailwind CSS (optional) · `next/font` · Web Share API.

## Proposed structure
```
src/
  app/
    layout.tsx            # fonts, <html lang>, metadata, MotionConfig provider
    page.tsx              # server component: composes sections from data
    opengraph-image.tsx   # generated OG image (or static /public/og.png)
    globals.css           # tokens, base, safe-area utilities
  components/
    sections/             # Invocation, Couple, Invitation, Timeline, EventCard, Countdown, Share, Closing
    motion/               # MotionProvider, Reveal, DrawPath, Petals, Diya, Bell
    ui/                   # LanguageSwitch, ShareButton, AudioControl, IconButton
    art/                  # inline SVG components (Ganesha, Mandala, Lotus, Vine, Marigold)
  content/
    wedding.ts            # canonical data object
  i18n/
    hi.ts en.ts types.ts  # dictionaries
    LocaleProvider.tsx
  lib/
    date.ts               # Intl formatting, days-until
    share.ts              # Web Share + clipboard fallback
    motion.ts             # tokens, variants, reduced-motion helpers
public/
  fonts/ (if self-hosting beyond next/font)  audio/ (later)  images/ (later)
```

## Server vs client boundaries
- **Server components**: page composition, static copy, metadata, SVG art that is not animated.
- **Client components** (`"use client"`): anything using Motion, `localStorage`, Web Share, countdown, audio, language switch.
- Keep client islands small; pass serializable props only.

## Locale handling
`LocaleProvider` (client) holds `locale` state, initialized to `hi`. Both dictionaries ship in the bundle (small). Switching updates context + `document.documentElement.lang`.

## Metadata & sharing
- `metadata` export with title, description (Hindi-first), `openGraph` (`title`, `description`, `images`, `locale`), `twitter` card.
- OG image: ivory/maroon composition reading **रचना × उदित / शुभ विवाह / 2 दिसंबर 2026** with restrained Ganesha/floral motif. Requires Devanagari font loaded in the image generator.
- Share: `navigator.share({ title, text, url })` when `navigator.canShare`/`share` exists; otherwise `navigator.clipboard.writeText(url)` with success feedback; final fallback = select-and-copy input.

## Countdown
Client component. Computes whole days between "today" (Asia/Kolkata) and the target date. Shows days only until `event.time !== null`. After the date: show a graceful message, no negative numbers. Hydration-safe (render after mount).

## Deployment
Static or Node hosting both fine (Vercel/Netlify/Cloudflare). Compress assets, long-cache hashed files, HTTPS only.

## Privacy
No third-party trackers by default. If analytics are added, use a privacy-respecting option and record in `DECISIONS.md`. RSVP data (future) requires a clear storage/consent plan.

## Error handling
All optional features (share, audio, storage, map embed) wrapped so failure never breaks the invitation.
