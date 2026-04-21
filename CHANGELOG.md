# Changelog — CS Credit Advisor

Toate modificările semnificative ale site-ului sunt documentate aici în ordine cronologică inversă (cele mai noi primele).

Format: `[DATA] — Descriere scurtă` urmată de detalii.

---

## [2026-04-21] — Faza 2 Form Refactor (branch feat/form-refactor)

### Obiectiv
Conversion rate formular de la 0,7% la minim 3%.

### Modificări
- `components/ui/LeadForm.tsx` — rescris complet cu react-hook-form + Zod:
  - Înlocuit "Procent din Venitul Net pe Rate" cu Radio Da/Nu + câmp conditional suma rate; calcul automat grad îndatorare >40% → redirect /parteneri-ifn
  - Autocomplete localitate: input text, debounce 300ms, max 8 sugestii, fallback free-text
  - Progress bar gold animat (câmpuri completate/total) + "~X secunde rămase"
  - Microcopy reasuring sub titlu pe fiecare pas
  - Bifă verde pe pașii completați
  - Câmp obligatoriu "Când preferi să fii sunat?" — grid 2×2 cu 4 intervale
  - Validări on-blur: telefon regex, nume 2 cuvinte, email format, `aria-invalid`
  - Erori roșii `#DC2626` cu icon `!` sub câmp
  - Draft localStorage `cs_credit_form_draft`, expiră 24h, banner recovery la reintrare
  - Buton "Sari peste câmpurile opționale și trimite"
  - GA4: `lead_submitted_qualified` / `lead_submitted_unqualified` cu parametru `reason`
  - Thank-you personalizat cu intervalul ales
- `MIGRATION.md` — SQL pentru coloanele noi: `has_active_loans`, `total_monthly_payments`, `preferred_call_slot`, `is_qualified`, `disqualification_reason`

### Înainte de merge
Rulează SQL din `MIGRATION.md` în Supabase Dashboard → SQL Editor.

---

## [2026-04-21] — Faza 1 Performance: runda 2 (după măsurare pe producție)

### Rezultate după runda 1 (baseline → runda 1)
- Performance: 58 → 67, FCP: 3,9s → 2,5s, TBT: 380ms → 210ms, Render-blocking: 1.950ms → 150ms

### Modificări runda 2
- `components/sections/Hero.tsx` — eliminat `animate-fade-up` / `animate-fade-up-delay` din toate elementele above-fold (MobileFormCard, h1, desktop form); LCP candidate nu mai pornesc cu `opacity:0`
- `components/ui/LeadForm.tsx` — mutat `import createClient from @supabase/supabase-js` la lazy `import()` în `handleSubmit`; First Load JS scade de la 162kB la 111kB (−51kB)

---

## [2026-04-21] — Faza 1 Performance: PageSpeed optimization (branch perf/lighthouse-score)

### Obiectiv
PageSpeed mobil de la 60 → minim 85. FCP sub 1,8s, LCP sub 2,5s.

### Modificări
- `app/layout.tsx` — migrare fonturi de la Google Fonts extern la `next/font/google` (self-hosted, preload automat); eliminat `<link>` și `<link rel=preconnect>` către fonts.googleapis.com
- `app/globals.css` — eliminat `@import url(fonts.googleapis.com)` duplicat; adăugat CSS-only scroll animation via `animation-timeline: view()`
- `components/ui/FadeIn.tsx` — convertit din Client Component (IntersectionObserver JS) în Server Component CSS-only; elimină JS din toate secțiunile statice
- `components/sections/Header.tsx` — adăugat `priority` pe logo (above-the-fold LCP candidate)
- `components/sections/Testimonials.tsx` — adăugat `sizes="40px"` și `quality={75}` pe avatare; fix ghilimele escapate
- `next.config.mjs` — adăugat cache headers `max-age=31536000, immutable` pentru assets și `_next/static`; integrat `@next/bundle-analyzer`
- `.eslintrc.json` — creat configurare ESLint `next/core-web-vitals`
- `app/necalificat/page.tsx`, `app/parteneri-ifn/page.tsx`, `components/ui/LeadForm.tsx` — eliminat comentarii eslint-disable pentru plugin TypeScript neinstalat

---

## [2026-04-18] — Fix mobile: toate câmpurile formularului vizibile pe mobil

### Fișiere modificate
- `components/sections/Hero.tsx` — eliminat `compact={true}` din MobileFormCard; acum câmpurile Email și Mențiuni Suplimentare sunt vizibile și pe mobil (identic cu desktop)
- `.gitignore` — fix: fișierul conținea comenzi shell în loc de patterns; corectat la format standard
- `.next/` — eliminat din git tracking (acum corect ignorat)

---

## [2026-04-16] — Adăugare parteneri IFN noi: Via Conto + Hora Credit

### Fișiere noi
- `public/partners/viaconto-logo.svg` — logo SVG text-based Via Conto
- `public/partners/horacredit-logo.svg` — logo SVG text-based Hora Credit

### Fișiere modificate
- `constants/affiliateLinks.ts` — adăugat `viaConto` și `horaCredit` cu link-urile Admitad
- `app/parteneri-ifn/page.tsx` — adăugat 2 intrări noi în `ifnList` (Via Conto, Hora Credit)
- `app/necalificat/page.tsx` — adăugat beneficii și 2 carduri `IFNCard` noi

### Link-uri afiliere (Admitad)
- Via Conto: `https://heqgr.com/g/2k0zn3cn8y029db2ecd3e9d82934dd/` → redirect `viaconto.ro` ✓
- Hora Credit: `https://rzekl.com/g/hnimhgl6y7029db2ecd3527fa9a677/` → redirect `tracker.horacredit.ro` ✓
- Ambele link-uri testate: HTTP 302, cookie-uri Admitad setate corect (publisher_id=2523858)
- Ambele butoane au `target="_blank"` și `rel="noopener noreferrer"`

---

## [2026-04-16] — Actualizare link afiliat Axi-card

### Fișiere modificate
- `constants/affiliateLinks.ts` — link Axi-card actualizat de la `15618842` la `15618955`
- Modificarea se propagă automat în `app/parteneri-ifn/page.tsx` și `app/necalificat/page.tsx` (ambele folosesc `AFFILIATE_LINKS.axiCard`)
- Ambele butoane aveau deja `target="_blank"` și `rel="noopener noreferrer"` — nicio modificare necesară

---

## [2026-04-16] — Logo-uri parteneri IFN (CreditPrime + Axi-card)

### Fișiere noi
- `public/partners/creditprime-logo.svg` — logo oficial de pe creditprime.ro
- `public/partners/axicard-logo.svg` — logo oficial de pe axi-card.ro

### Fișiere modificate
- `app/parteneri-ifn/page.tsx` — adăugat `logo`, `logoWidth`, `logoHeight` în `ifnList`; render logo cu `next/image` deasupra badge-ului în fiecare card

---

## [2026-04-16] — Pagină parteneri IFN: numere BNR, FAQ afiliere, birou credit

### Fișiere modificate
- `app/parteneri-ifn/page.tsx`
  - Birou Credit CreditPrime: "Acceptă și negativ" → "Flexibil — analizează individual"
  - Adăugat `bnrInfo` pe fiecare card IFN (ECOFINANCE RG-PJR-41-110328 / AXI Finance RG-PJR-41-110308)
  - Nota editorială sub rating: "Evaluare editorială CS Credit Advisor"
  - FAQ nou: "De ce recomandați aceste IFN-uri?" cu răspuns transparent despre afiliere

---

## [2026-04-16] — Sistem afiliere IFN & redirect descalificați

### Fișiere noi
- `constants/affiliateLinks.ts` — sursă centralizată pentru link-urile afiliate Profitshare
  - CreditPrime: `https://l.profitshare.ro/l/15617768`
  - Axi-card: `https://l.profitshare.ro/l/15618842`
- `app/necalificat/page.tsx` — pagină dedicată clienților descalificați de formular
  - Mesaj empatic de descalificare
  - Grid 2 carduri IFN (CreditPrime + Axi-card) cu beneficii și CTA gold
  - Secțiunea "Situația ta se poate schimba" cu CTA de revenire
  - Disclaimer afiliere obligatoriu Profitshare
  - Tracking FB Pixel: `ViewContent` la intrare, `Lead` la click afiliat
- `app/necalificat/layout.tsx` — metadata pagină (`robots: noindex, nofollow`)
- `app/parteneri-ifn/page.tsx` — pagină publică cu prezentarea IFN-urilor partenere
  - Hero section navy
  - Secțiune explicativă "Ce este un IFN?" (3 coloane)
  - Carduri extinse cu tabel condiții, avantaje, dezavantaje, rating stele
  - FAQ accordion (4 întrebări frecvente)
  - Disclaimer afiliere + CTA spre brokeraj
  - Tracking FB Pixel + GA4
- `app/parteneri-ifn/layout.tsx` — metadata SEO (fără cuvinte brand interzise în keywords)

### Fișiere modificate
- `components/ui/LeadForm.tsx`
  - Adăugat `useRouter` din `next/navigation`
  - Funcția `disqualify()` extinsă cu parametrul `redirectToIFN = true`
  - La descalificare: redirect automat către `/necalificat` (cu tracking FB Pixel)
  - **Excepție:** `"Neangajat / Fără venit stabil"` → rămâne pe formular cu mesaj inline (`redirectToIFN = false`), fără redirect spre IFN
- `components/sections/Header.tsx`
  - Adăugat link `{ href: "/parteneri-ifn", label: "Soluții IFN" }` în `navLinks`
- `components/sections/Footer.tsx`
  - Adăugat `["/parteneri-ifn", "Soluții IFN"]` în lista de linkuri din footer

---

## [2026-04-16] — Verificare ownership Admitad

### Fișiere modificate
- `app/layout.tsx`
  - Adăugat `<meta name="verify-admitad" content="9f74b14d08" />` în `<head>` pentru verificarea de ownership pe Admitad.ro

---

## [2026-04-15 aprox.] — Commit: `admitad verification` (`cb8d2905`)

Verificare Admitad adăugată (detalii în commit).

---

## [anterior] — Commit: `update traffic monitor` (`877cc1f6`)

Actualizare monitor trafic.

---

## [anterior] — Commit: `update formular` (`69407cfe`)

Modificări formular lead.

---

## [anterior] — Commit: `added icon.png` (`094fa011`)

Adăugat icon.png în public.

---

## [anterior] — Commit: `fav icon added` (`ed0e4428`)

Adăugat favicon site.

---

## [anterior] — Commit: `modificare formular, respingere automata la intarzieri mari si vechime sub 6 luni` (`5b93c62d`)

- Formular: respingere automată pentru întârzieri mari la Birou de Credit
- Respingere automată pentru vechime sub 6 luni la locul de muncă

---

## [anterior] — Commit: `changed meta pixel` (`782f8ee8`)

Actualizare ID Meta Pixel.

---

## [anterior] — Commit: `meta pixel adaugat` (`38a95e72`)

Integrare Meta Pixel Facebook în `app/layout.tsx`.

---

## [anterior] — Commit: `modifcare formulare adaugare optiune slab-intarzieri mari` (`a819bf50`)

Adăugată opțiunea "Dificil — întârzieri mari sau credite restante" în formularul de eligibilitate.

---

## [anterior] — Commit: `modificare contrast formular 2, refactor text review` (`285d805f`)

Îmbunătățire contrast vizual formular + refactor texte.

---

> **Notă:** Pentru orice rollback, folosește `git checkout <hash> -- <cale/fisier>` pentru a restaura un fișier specific, sau `git revert <hash>` pentru a anula un commit întreg fără a pierde istoricul.
