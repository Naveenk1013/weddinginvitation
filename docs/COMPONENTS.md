# COMPONENTS.md — Inventory & Responsibilities

## Layout / providers
| Component | Type | Responsibility |
|---|---|---|
| `RootLayout` | Server | Fonts, `<html lang>`, metadata, providers |
| `MotionProvider` | Client | `LazyMotion` + `MotionConfig reducedMotion="user"` |
| `LocaleProvider` | Client | Locale state, persistence after explicit change |
| `SafeAreaShell` | Server | Safe-area padding, `dvh/svh` containers |

## Sections
| Component | Responsibility | Pending-data behavior |
|---|---|---|
| `OpeningInvocation` | Ganesha art + `॥ श्री गणेशाय नमः ॥` | Always shown |
| `CoupleReveal` | रचना × उदित, floral connector | Always shown |
| `InvitationMessage` | सप्रेम आमंत्रण + message | Always shown |
| `CeremonyTimeline` | Drawn line + markers for events | Shows only known events |
| `EventCard` | Title, weekday/date, icon; optional time/venue/map/dress code | Hides null fields |
| `Countdown` | Days-only countdown | Days only until time known |
| `VenueSection` | Venue, map, directions | Hidden until data |
| `RsvpSection` | Contact/form | Hidden until data |
| `HostsSection` | Family/hosts | Hidden until data |
| `GallerySection` | Photos | Hidden until data |
| `ShareSection` | Share/copy link | Always shown |
| `ClosingBlessing` | Closing message | Always shown |

## UI primitives
`LanguageSwitch` · `ShareButton` · `AudioControl` (later) · `IconButton` · `SectionDivider` · `ScrollCue` · `FloatingControls`

## Motion primitives
`Reveal` (in-view fade/rise) · `DrawPath` (SVG path draw) · `Petals` (few drifting elements) · `Diya` (flame) · `Bell` (single swing) · `Bloom` (lotus) · `MirroredEntrance`

## Art (inline SVG)
`GaneshaLine` · `Mandala` · `Lotus` · `MarigoldGarland` · `Vine` · `TilakIcon` · `VivahIcon` · `DiyaIcon` · `BellIcon` · `CalendarIcon`

## Component contract
- Accept `locale`-resolved strings via props/context; no hard-coded copy.
- Provide reduced-motion behavior by default via shared primitives.
- Decorative SVG: `aria-hidden="true"`. Meaningful SVG: `role="img"` + label.
- Each interactive component documents keyboard behavior and focus style.
