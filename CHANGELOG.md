# Changelog — CS Credit Advisor

Toate modificările semnificative ale site-ului sunt documentate aici în ordine cronologică inversă (cele mai noi primele).

Format: `[DATA] — Descriere scurtă` urmată de detalii.

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
