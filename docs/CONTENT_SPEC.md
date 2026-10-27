# CONTENT_SPEC.md

## Exact copy

### Hindi (default, `hi-IN`)
```
॥ श्री गणेशाय नमः ॥

रचना × उदित

सप्रेम आमंत्रण
आप सपरिवार पधारकर रचना एवं उदित के शुभ विवाह उत्सव की शोभा बढ़ाएँ और नवयुगल को अपना स्नेह एवं आशीर्वाद प्रदान करें।

शुभ तिलक
बुधवार, 25 नवंबर 2026

शुभ विवाह
बुधवार, 2 दिसंबर 2026
```

### English (`en-IN`)
```
Shree Ganeshaya Namah

Rachna × Udit

With love, we invite you
Please join us with your family to celebrate the wedding of Rachna and Udit and bless the couple as they begin this beautiful new chapter.

Shubh Tilak
Wednesday, 25 November 2026

Shubh Vivah
Wednesday, 2 December 2026
```

The Hindi invocation must render exactly as `॥ श्री गणेशाय नमः ॥` in both locales (English locale may add the transliteration beneath it).

## Pending-field behavior
| State | Behavior |
|---|---|
| Field is `null`/absent | Do not render the row/section |
| Section needs data to be meaningful (venue, RSVP) | Hide entirely, or show a single honest line: "Details to follow" / "विवरण शीघ्र साझा किए जाएँगे" (needs owner approval before use) |
| Never | Placeholder names, sample addresses, fake times |

## Data model (TypeScript sketch)
```ts
type LocaleText = { hi: string; en: string };

interface WeddingEvent {
  id: "tilak" | "vivah" | string;
  title: LocaleText;
  date: string;              // ISO date "2026-11-25"
  time: string | null;       // "HH:mm" local, null until confirmed
  timezone: "Asia/Kolkata";
  venue: { name: LocaleText; address: LocaleText } | null;
  mapUrl: string | null;
  dressCode: LocaleText | null;
  notes: LocaleText | null;
}

interface Wedding {
  couple: { bride: LocaleText; groom: LocaleText };
  invocation: string;        // "॥ श्री गणेशाय नमः ॥" (immutable)
  events: WeddingEvent[];
  hosts: { name: LocaleText; relation: LocaleText }[] | null;
  rsvp: { method: "phone" | "whatsapp" | "form"; value: string; deadline: string | null } | null;
  accommodation: LocaleText | null;
  gallery: { src: string; alt: LocaleText }[] | null;
  music: { src: string; title: string } | null;
}
```

## Content rules
- Dates stored ISO, rendered via `Intl.DateTimeFormat(locale, { weekday:"long", day:"numeric", month:"long", year:"numeric" })`. Verify Hindi output visually.
- Both confirmed dates are Wednesdays; a unit test should assert this.
- Countdown: whole days only until `time` is non-null.
- Any copy change requires owner approval and a `DECISIONS.md` note.
