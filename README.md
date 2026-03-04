# CS Credit Advisor — Landing Page

A high-converting, professionally designed landing page for CS Credit Advisor, built with **Next.js 14 (App Router)** + **Tailwind CSS** + **TypeScript**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
cs-credit-advisor/
├── app/
│   ├── globals.css          # Tailwind directives + global styles
│   ├── layout.tsx           # Root layout + fonts + metadata
│   └── page.tsx             # Main page (assembles all sections)
│
├── components/
│   ├── ui/
│   │   ├── FadeIn.tsx       # Scroll-triggered fade-in wrapper
│   │   ├── LeadForm.tsx     # Reusable lead capture form (light + dark)
│   │   └── SectionLabel.tsx # Gold label with line decorator
│   │
│   └── sections/
│       ├── Header.tsx       # Sticky header + mobile drawer
│       ├── Hero.tsx         # Hero section with dual form (mobile/desktop)
│       ├── TrustSection.tsx # Benefits, stats, badges, bank logos
│       ├── HowItWorks.tsx   # 4-step process (vertical mobile / grid desktop)
│       ├── About.tsx        # Mission, values, stat cards
│       ├── Testimonials.tsx # 6 testimonial cards
│       ├── FAQ.tsx          # Accordion FAQ (client component)
│       ├── FinalCTA.tsx     # Final CTA with form
│       └── Footer.tsx       # Footer with nav links
│
├── tailwind.config.ts       # Custom colors, fonts, animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `navy` | `#0d1b2a` | Primary dark background |
| `forest` | `#1a3a2a` | Secondary dark (accents) |
| `gold` | `#c9a84c` | Primary accent |
| `gold-light` | `#e0c070` | Hover/gradient end |
| `gold-pale` | `#f5ecd4` | Light gold backgrounds |
| `charcoal` | `#2c3e50` | Body text |
| `muted` | `#6b7a8d` | Secondary text |
| `off-white` | `#f8f6f1` | Page background |

### Fonts
- **Headings**: `Playfair Display` (Google Fonts)
- **Body**: `DM Sans` (Google Fonts)

---

## 📱 Mobile Optimizations

- **Form-first layout**: On mobile, the lead form appears above the headline in the hero
- **Mobile drawer**: Smooth slide-down navigation drawer with backdrop
- **Vertical stepper**: How It Works section uses a vertical step-by-step flow on mobile
- **Touch-friendly**: All interactive elements have `min-height: 44px` tap targets
- **Responsive grid**: All grids collapse gracefully: 4-col → 2-col → 1-col
- **No horizontal scroll**: All sections are overflow-safe

---

## 📋 Form Integration

The `LeadForm` component (`components/ui/LeadForm.tsx`) currently simulates submission with a 1-second delay. To connect to a real backend:

```tsx
// In LeadForm.tsx, replace the mock with your API call:
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);

  await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, email, creditStatus, negative, loanType, notes }),
  });

  setLoading(false);
  setSubmitted(true);
};
```

### API Route Example
Create `app/api/leads/route.ts`:

```ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // Forward to CRM, email service, Google Sheets, etc.
  // e.g. await sendToHubSpot(data);
  // e.g. await sendEmail({ to: "office@cscreditadvisor.ro", ...data });

  return NextResponse.json({ success: true });
}
```

---

## 🔧 Customization

### Update agency info
Edit the content in each section component directly — all text is co-located with its component.

### Add/remove FAQ items
Edit the `faqs` array in `components/sections/FAQ.tsx`.

### Change bank partners
Edit the `banks` array in `components/sections/TrustSection.tsx` and `components/sections/Hero.tsx`.

---

## 📦 Dependencies

- `next` 14.2.5
- `react` 18
- `tailwindcss` 3.4
- `typescript` 5
- `lucide-react` — icons (Shield, Loader, ChevronDown, Menu, X)
