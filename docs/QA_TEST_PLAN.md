# QA_TEST_PLAN.md

## Devices & browsers
| Platform | Browsers |
|---|---|
| Android (low/mid/high) | Chrome, Samsung Internet, Firefox, WhatsApp/Instagram in-app |
| iOS | Safari, Chrome iOS, WhatsApp/Instagram in-app |
| Desktop | Chrome, Safari, Firefox, Edge |

Widths: 320, 360, 390, 412, 430; tablet 768; desktop 1280.

## Checklist

### Content
- [ ] Opening reads exactly `॥ श्री गणेशाय नमः ॥`
- [ ] Names रचना × उदित / Rachna × Udit correct
- [ ] शुभ तिलक: Wednesday, 25 Nov 2026; शुभ विवाह: Wednesday, 2 Dec 2026 (both locales)
- [ ] No invented times, venues, names, contacts
- [ ] Pending sections hidden / honest

### Language
- [ ] Hindi default on first visit
- [ ] `हि | EN` switch: no reload, scroll preserved, `lang` updated
- [ ] Preference stored only after explicit change
- [ ] Conjuncts/matras render correctly; no clipped text at 200% zoom

### Layout & mobile
- [ ] No horizontal scroll at any width
- [ ] `svh/dvh` behavior with collapsing browser chrome
- [ ] Safe areas on notched devices
- [ ] Touch targets ≥ 44×44 px on key controls
- [ ] Sticky controls don't cover content

### Motion
- [ ] Opening sequence completes; never blocks scrolling
- [ ] Timeline draw, couple reveal, icon animations, event-card transitions OK
- [ ] Reduced motion: opacity-only/static, ambient off
- [ ] No flashing; Ganesha only gets approved motion
- [ ] Smooth scroll at 4× CPU throttle

### Performance
- [ ] LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (lab + field when available)
- [ ] Names + both dates visible on Slow 4G before decorative modules
- [ ] Bundle budgets met

### Accessibility
- [ ] Axe/Lighthouse clean
- [ ] Keyboard-only pass; focus visible/not obscured
- [ ] VoiceOver + TalkBack pass
- [ ] Contrast measured for all token pairs used

### Sharing & resilience
- [ ] Web Share works where supported; copy-link fallback elsewhere (incl. in-app browsers)
- [ ] OG preview correct in WhatsApp, Telegram, iMessage, Facebook, X
- [ ] Decorative assets fail (blocked) → all information still present
- [ ] Storage disabled / private mode → no errors
- [ ] Audio blocked/unsupported → no errors (when added)

### Countdown
- [ ] Days only; correct in Asia/Kolkata; graceful after the date; no hydration mismatch

## Sign-off
Record results, device list and issues in `PROGRESS.md`. Family reviews final Hindi copy before launch.
