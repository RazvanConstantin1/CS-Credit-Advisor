"use client";

import { useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ShieldCheck, Loader2, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ── Zod schemas ───────────────────────────────────────────────────────────────

const step3Schema = z.object({
  locality: z.string().min(1, "Selectează sau scrie localitatea"),
  name: z
    .string()
    .min(1, "Numele este obligatoriu")
    .refine((v) => v.trim().split(/\s+/).length >= 2, {
      message: "Te rugăm scrie numele și prenumele complet",
    }),
  phone: z
    .string()
    .regex(/^(\+40|0)[27][0-9]{8}$/, "Numărul pare incomplet. Format: 07xx xxx xxx"),
  email: z
    .string()
    .optional()
    .refine((v) => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), {
      message: "Verifică adresa — pare să lipsească ceva",
    }),
  notes: z.string().optional(),
  preferredCallSlot: z.string().min(1, "Selectează un interval de apel"),
  gdprConsent: z.literal(true, {
    message: "Trebuie să accepți prelucrarea datelor pentru a continua.",
  }),
});

type Step3Data = z.infer<typeof step3Schema>;

// ── Localities ────────────────────────────────────────────────────────────────

const LOCALITIES = [
  "București - Sector 1", "București - Sector 2", "București - Sector 3",
  "București - Sector 4", "București - Sector 5", "București - Sector 6",
  "Voluntari", "Otopeni", "Popești-Leordeni", "Pantelimon", "Chitila",
  "Chiajna", "Bragadiru", "Măgurele", "Jilava", "Buftea", "Mogoșoaia",
  "Tunari", "Afumați", "Brănești", "Cernica", "Corbeanca", "Cornetu",
  "1 Decembrie", "Ciorogârla", "Clinceni", "Copăceni", "Dărăști-Ilfov",
  "Dascălu", "Dobroești", "Domneşti", "Găneasa", "Glina", "Grădiştea",
  "Gruiu", "Moara Vlăsiei", "Nuci", "Periş", "Petrăchioaia", "Snagov",
  "Ştefăneştii de Jos", "Vidra", "Oltenița (jud. Călărași)",
];

const CALL_SLOTS = [
  "Mâine 10:00 - 12:00",
  "Mâine 14:00 - 16:00",
  "Mâine 18:00 - 20:00",
  "Nu contează / cât mai repede",
];

// ── Draft persistence ─────────────────────────────────────────────────────────

const DRAFT_KEY = "cs_credit_form_draft";
const DRAFT_TTL = 24 * 60 * 60 * 1000;

function saveDraft(data: Record<string, unknown>) {
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify({ data, ts: Date.now() })); } catch {}
}
function loadDraft(): Record<string, unknown> | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > DRAFT_TTL) { localStorage.removeItem(DRAFT_KEY); return null; }
    return data;
  } catch { return null; }
}
function clearDraft() { try { localStorage.removeItem(DRAFT_KEY); } catch {} }

// ── Field error ───────────────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 mt-1 text-[#DC2626] text-[13px]">
      <span className="font-bold leading-none">!</span> {message}
    </p>
  );
}

// ── Props ─────────────────────────────────────────────────────────────────────

interface LeadFormProps {
  dark?: boolean;
  compact?: boolean;
  formId: string;
}

const STEPS = ["Eligibilitate", "Detalii", "Contact"];

// ── Component ─────────────────────────────────────────────────────────────────

export default function LeadForm({ dark = false, compact = false, formId }: LeadFormProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadSource, setLeadSource] = useState("Website");

  // Draft recovery
  const [showDraftBanner, setShowDraftBanner] = useState(false);
  const [draftData, setDraftData] = useState<Record<string, unknown> | null>(null);

  // Locality autocomplete
  const [localityInput, setLocalityInput] = useState("");
  const [localitySuggestions, setLocalitySuggestions] = useState<string[]>([]);
  const [localityFreeText, setLocalityFreeText] = useState(false);
  const localityRef = useRef<HTMLDivElement>(null);

  // Step 1 state
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [jobSeniority, setJobSeniority] = useState("");
  const [creditStatus, setCreditStatus] = useState("");

  // Step 2 state
  const [hasActiveLoans, setHasActiveLoans] = useState<"da" | "nu" | "">("");
  const [totalMonthlyPayments, setTotalMonthlyPayments] = useState("");
  const [loanType, setLoanType] = useState("");
  const [netIncome, setNetIncome] = useState("");

  const canProceedStep1 = !!(employmentStatus && ageGroup && jobSeniority && creditStatus);
  const canProceedStep2 = !!(hasActiveLoans && loanType && netIncome);

  // Step 3 — react-hook-form only here for blur validation
  const form3 = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    mode: "onBlur",
    defaultValues: {
      locality: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
      preferredCallSlot: "",
      gdprConsent: undefined,
    },
  });

  // UTM source
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const src = (params.get("utm_source") || "").toLowerCase();
    if (src.includes("instagram")) setLeadSource("Instagram");
    else if (src.includes("facebook") || src.includes("fb")) setLeadSource("Facebook");
  }, []);

  // Draft on mount
  useEffect(() => {
    const draft = loadDraft();
    if (draft) { setDraftData(draft); setShowDraftBanner(true); }
  }, []);

  // Save draft on any state change
  useEffect(() => {
    const vals = form3.getValues();
    const timer = setTimeout(() => {
      saveDraft({ employmentStatus, ageGroup, jobSeniority, creditStatus, hasActiveLoans, totalMonthlyPayments, loanType, netIncome, ...vals, _step: step });
    }, 500);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employmentStatus, ageGroup, jobSeniority, creditStatus, hasActiveLoans, totalMonthlyPayments, loanType, netIncome, step]);

  // Close locality dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (localityRef.current && !localityRef.current.contains(e.target as Node))
        setLocalitySuggestions([]);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Locality autocomplete debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localityInput.length < 2) { setLocalitySuggestions([]); return; }
      setLocalitySuggestions(
        LOCALITIES.filter((l) => l.toLowerCase().includes(localityInput.toLowerCase())).slice(0, 8)
      );
    }, 300);
    return () => clearTimeout(timer);
  }, [localityInput]);

  // ── Restore draft ───────────────────────────────────────────────────────────

  const restoreDraft = () => {
    if (!draftData) return;
    const d = draftData as Record<string, string>;
    setEmploymentStatus(d.employmentStatus || "");
    setAgeGroup(d.ageGroup || "");
    setJobSeniority(d.jobSeniority || "");
    setCreditStatus(d.creditStatus || "");
    setHasActiveLoans((d.hasActiveLoans as "da" | "nu" | "") || "");
    setTotalMonthlyPayments(d.totalMonthlyPayments || "");
    setLoanType(d.loanType || "");
    setNetIncome(d.netIncome || "");
    form3.reset({
      locality: d.locality || "",
      name: d.name || "",
      phone: d.phone || "",
      email: d.email || "",
      notes: d.notes || "",
      preferredCallSlot: d.preferredCallSlot || "",
      gdprConsent: d.gdprConsent === "true" ? true : undefined,
    });
    if (d.locality) { setLocalityInput(d.locality); }
    setStep(Number(d._step) || 1);
    setShowDraftBanner(false);
  };

  // ── Disqualify ──────────────────────────────────────────────────────────────

  const disqualify = (reason: string, redirectTo: string | false = "/necalificat") => {
    (window as any).gtag?.("event", "lead_submitted_unqualified", { form_id: formId, reason, lead_source: leadSource });
    (window as any).fbq?.("track", "Lead", { content_name: `Disqualified — ${reason}`, content_category: "IFN Redirect" });
    if (redirectTo) router.push(redirectTo);
  };

  // ── Step 1 handlers ─────────────────────────────────────────────────────────

  const onEmploymentChange = (value: string) => {
    setEmploymentStatus(value);
    if (value === "Neangajat / Fără venit stabil") disqualify("employment_status", false);
    else if (value === "Angajat part-time") disqualify("employment_status", "/necalificat");
  };

  const onAgeGroupChange = (value: string) => {
    setAgeGroup(value);
    if (value === "18 – 22 ani" || value === "Peste 65 ani") disqualify("age_group", "/necalificat");
  };

  const onJobSeniorityChange = (value: string) => {
    setJobSeniority(value);
    if (value === "Sub 6 luni") disqualify("job_seniority", "/necalificat");
  };

  const onCreditStatusChange = (value: string) => {
    setCreditStatus(value);
    if (value === "Dificil — întârzieri mari sau credite restante") disqualify("credit_status", "/necalificat");
    else if (value === "Mediu — câteva întârzieri mici (max 30 zile)") disqualify("credit_status", "/necalificat");
  };

  // ── Grad îndatorare check ───────────────────────────────────────────────────

  const checkDebtRatio = (): boolean => {
    if (hasActiveLoans !== "da") return true;
    const incomeMap: Record<string, number> = {
      "Salariu minim pe economie": 3300,
      "3.000 – 5.000 lei": 4000,
      "5.000 – 7.000 lei": 6000,
      "7.000 – 10.000 lei": 8500,
      "Peste 10.000 lei": 12000,
    };
    const income = incomeMap[netIncome] || 0;
    const payments = parseInt(totalMonthlyPayments || "0", 10);
    if (income > 0 && payments / income > 0.4) {
      disqualify("grad_indatorare", "/parteneri-ifn?reason=grad_indatorare");
      return false;
    }
    return true;
  };

  // ── Locality helpers ────────────────────────────────────────────────────────

  const selectLocality = (loc: string) => {
    setLocalityInput(loc);
    form3.setValue("locality", loc, { shouldValidate: true });
    setLocalitySuggestions([]);
    setLocalityFreeText(false);
    if (loc === "Altă localitate / Alt județ") disqualify("locality", "/necalificat?reason=locality");
  };

  // ── Submit ──────────────────────────────────────────────────────────────────

  const handleSubmit = async (data: Step3Data) => {
    setLoading(true);
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      );
      const { error } = await supabase.from("leads").insert({
        nume: data.name,
        numar_de_telefon: data.phone,
        email: data.email || null,
        localitate: data.locality,
        statut_angajare: employmentStatus,
        grupa_varsta: ageGroup,
        vechime: jobSeniority,
        situatia_curenta: creditStatus,
        procent_rate: null,
        has_active_loans: hasActiveLoans === "da",
        total_monthly_payments: totalMonthlyPayments ? parseInt(totalMonthlyPayments, 10) : null,
        tipul_creditului: loanType,
        venit_net: netIncome,
        preferred_call_slot: data.preferredCallSlot,
        sursa: leadSource,
        notes: data.notes || null,
        form_id: formId,
        gdpr_consent: true,
        is_qualified: true,
        disqualification_reason: null,
      });
      if (error) throw error;
      clearDraft();
      setSubmitted(true);
      (window as any).gtag?.("event", "lead_submitted_qualified", { form_id: formId, loan_type: loanType, lead_source: leadSource, preferred_call_slot: data.preferredCallSlot });
      (window as any).fbq?.("track", "Lead", { content_name: "Qualified Lead", content_category: "Form Submit" });
    } catch (err) {
      console.error("Eroare trimitere:", err);
      form3.setError("root", { message: "A apărut o eroare la trimitere. Contactează-ne direct la telefon." });
    }
    setLoading(false);
  };

  // ── Styles ──────────────────────────────────────────────────────────────────

  const inputBase = [
    "w-full rounded-lg px-3.5 py-3 text-sm outline-none transition-all duration-200 font-dm border-[1.5px]",
    dark
      ? "bg-white/15 border-white/20 text-white [color-scheme:dark] placeholder:text-white/40 focus:border-gold focus:bg-white/20"
      : "bg-[#fafbfc] border-[#e0e4ea] text-navy placeholder:text-muted focus:border-gold focus:bg-white focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]",
  ].join(" ");

  const inputError = dark ? "border-red-400" : "border-[#DC2626] bg-red-50/30";
  const labelClass = `block text-[12px] font-semibold mb-1.5 tracking-[0.3px] ${dark ? "text-white/70" : "text-charcoal"}`;

  const microcopy: Record<number, string> = {
    1: "4 întrebări rapide ca să vedem la ce bănci te califici. Fără interogare la Biroul de Credit.",
    2: "Ne ajută să găsim dobânda cea mai mică pentru profilul tău.",
    3: "Ultimul pas. Te sunăm când ai tu timp — îți alegi intervalul mai jos.",
  };

  // ── Submitted ───────────────────────────────────────────────────────────────

  if (submitted) {
    const slot = form3.getValues("preferredCallSlot");
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center gap-3 px-4">
        <div className="text-5xl mb-2">✅</div>
        <h4 className={`font-playfair text-xl font-bold ${dark ? "text-white" : "text-navy"}`}>
          Cerere înregistrată!
        </h4>
        <p className={`text-sm leading-relaxed max-w-xs ${dark ? "text-white/60" : "text-muted"}`}>
          {slot === "Nu contează / cât mai repede"
            ? "Te contactăm cât mai curând. Vei primi SMS de confirmare în câteva minute."
            : `Perfect! Te sunăm ${slot.toLowerCase()}. Vei primi SMS de confirmare în câteva minute.`}
        </p>
      </div>
    );
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-4">
      {/* Draft recovery banner */}
      {showDraftBanner && (
        <div className={`flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-[12px] border ${dark ? "border-gold/30 bg-gold/10 text-white/80" : "border-gold/30 bg-gold/5 text-navy"}`}>
          <span>Ai început o aplicație — continuă unde ai rămas.</span>
          <div className="flex gap-2 flex-shrink-0">
            <button onClick={restoreDraft} className="font-bold text-gold hover:underline">Continuă</button>
            <button onClick={() => { clearDraft(); setShowDraftBanner(false); }} className={`${dark ? "text-white/40" : "text-muted"} hover:underline`}>Începe din nou</button>
          </div>
        </div>
      )}

      {/* Step indicator */}
      <div className="flex items-center mb-1">
        {STEPS.map((label, i) => {
          const idx = i + 1;
          const isActive = step === idx;
          const isDone = step > idx;
          return (
            <div key={i} className="flex items-center flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 transition-colors ${isDone ? "bg-green-500 text-white" : isActive ? "bg-gold text-navy" : dark ? "bg-white/15 text-white/35" : "bg-[#e0e4ea] text-muted"}`}>
                  {isDone ? "✓" : idx}
                </div>
                <span className={`hidden xs:inline text-[11px] font-semibold tracking-wide whitespace-nowrap ${isActive ? "text-gold" : dark ? "text-white/30" : "text-muted"}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`flex-1 h-px mx-2 transition-colors ${isDone ? "bg-gold/50" : dark ? "bg-white/15" : "bg-[#e0e4ea]"}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Microcopy */}
      <p className={`text-[13px] leading-snug -mt-1 ${dark ? "text-white/45" : "text-slate-500"}`}>
        {microcopy[step]}
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4" noValidate>

        {/* ── Step 1 ── */}
        {step === 1 && (
          <div className="space-y-3.5">
            <div>
              <label className={labelClass}>Statutul tău de Angajare <span className="text-gold">*</span></label>
              <select
                value={employmentStatus}
                onChange={(e) => onEmploymentChange(e.target.value)}
                className={`${inputBase} custom-select cursor-pointer`}
              >
                <option value="" disabled>Selectează statutul tău...</option>
                <option value="Angajat normă întreagă">Angajat normă întreagă</option>
                <option value="Angajat part-time">Angajat part-time</option>
                <option value="Pensionar">Pensionar</option>
                <option value="Neangajat / Fără venit stabil">Neangajat / Fără venit stabil</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Grupa ta de Vârstă <span className="text-gold">*</span></label>
              <select
                value={ageGroup}
                onChange={(e) => onAgeGroupChange(e.target.value)}
                className={`${inputBase} custom-select cursor-pointer`}
              >
                <option value="" disabled>Selectează grupa de vârstă...</option>
                <option value="18 – 22 ani">18 – 22 ani</option>
                <option value="23 – 30 ani">23 – 30 ani</option>
                <option value="31 – 45 ani">31 – 45 ani</option>
                <option value="46 – 55 ani">46 – 55 ani</option>
                <option value="56 – 65 ani">56 – 65 ani</option>
                <option value="Peste 65 ani">Peste 65 ani</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Vechime la Actualul Loc de Muncă <span className="text-gold">*</span></label>
              <select
                value={jobSeniority}
                onChange={(e) => onJobSeniorityChange(e.target.value)}
                className={`${inputBase} custom-select cursor-pointer`}
              >
                <option value="" disabled>Selectează vechimea...</option>
                <option value="Sub 6 luni">Sub 6 luni</option>
                <option value="6 – 12 luni">6 – 12 luni</option>
                <option value="1 – 3 ani">1 – 3 ani</option>
                <option value="Peste 3 ani">Peste 3 ani</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Situația ta la Biroul de Credit <span className="text-gold">*</span></label>
              <select
                value={creditStatus}
                onChange={(e) => onCreditStatusChange(e.target.value)}
                className={`${inputBase} custom-select cursor-pointer`}
              >
                <option value="" disabled>Selectează situația ta...</option>
                <option value="Bun — fără întârzieri">Bun — fără întârzieri</option>
                <option value="Mediu — câteva întârzieri mici (max 30 zile)">Mediu — câteva întârzieri mici (max 30 zile)</option>
                <option value="Dificil — întârzieri mari sau credite restante">Dificil — întârzieri mari sau credite restante</option>
                <option value="Nu știu / nu am verificat">Nu știu / nu am verificat</option>
              </select>
            </div>

            <button
              type="button"
              onClick={() => { if (canProceedStep1) setStep(2); }}
              disabled={!canProceedStep1}
              className="btn-gold w-full py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm flex items-center justify-center gap-2 mt-1 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continuă <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* ── Step 2 ── */}
        {step === 2 && (
          <div className="space-y-3.5">
            {/* Credite active — radio */}
            <div>
              <label className={labelClass}>Ai alte credite sau rate active? <span className="text-gold">*</span></label>
              <div className="flex gap-3">
                {(["da", "nu"] as const).map((val) => (
                  <label
                    key={val}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-[1.5px] cursor-pointer transition-all text-[14px] font-semibold ${
                      hasActiveLoans === val
                        ? "border-gold bg-gold/10 text-gold"
                        : dark ? "border-white/20 text-white/60 hover:border-white/40" : "border-[#e0e4ea] text-muted hover:border-gold/40"
                    }`}
                  >
                    <input type="radio" className="sr-only" value={val} checked={hasActiveLoans === val} onChange={() => setHasActiveLoans(val)} />
                    {val === "da" ? "Da" : "Nu"}
                  </label>
                ))}
              </div>
            </div>

            {/* Suma rate — conditional */}
            {hasActiveLoans === "da" && (
              <div>
                <label className={labelClass}>Suma totală lunară a ratelor active <span className="text-gold">*</span></label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    placeholder="ex: 800"
                    value={totalMonthlyPayments}
                    onChange={(e) => setTotalMonthlyPayments(e.target.value)}
                    className={`${inputBase} pr-16`}
                  />
                  <span className={`absolute right-3.5 top-1/2 -translate-y-1/2 text-[12px] font-semibold pointer-events-none ${dark ? "text-white/40" : "text-muted"}`}>
                    lei/lună
                  </span>
                </div>
              </div>
            )}

            <div>
              <label className={labelClass}>Tipul de Credit Dorit <span className="text-gold">*</span></label>
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className={`${inputBase} custom-select cursor-pointer`}
              >
                <option value="" disabled>Selectează tipul de credit...</option>
                <option value="Credit de Nevoi Personale">Credit de Nevoi Personale</option>
                <option value="Credit Ipotecar / Imobiliar">Credit Ipotecar / Imobiliar</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Venit Net <span className="text-gold">*</span></label>
              <select
                value={netIncome}
                onChange={(e) => setNetIncome(e.target.value)}
                className={`${inputBase} custom-select cursor-pointer`}
              >
                <option value="" disabled>Selectează venitul net...</option>
                <option value="Salariu minim pe economie">Salariu minim pe economie</option>
                <option value="3.000 – 5.000 lei">3.000 – 5.000 lei</option>
                <option value="5.000 – 7.000 lei">5.000 – 7.000 lei</option>
                <option value="7.000 – 10.000 lei">7.000 – 10.000 lei</option>
                <option value="Peste 10.000 lei">Peste 10.000 lei</option>
              </select>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`flex-1 py-3.5 rounded-xl font-bold text-[14px] font-dm flex items-center justify-center gap-1.5 border-[1.5px] transition-colors ${dark ? "border-white/20 text-white/60 hover:text-white hover:border-white/40" : "border-[#e0e4ea] text-muted hover:text-navy hover:border-navy/30"}`}
              >
                <ChevronLeft size={16} /> Înapoi
              </button>
              <button
                type="button"
                onClick={() => { if (canProceedStep2 && checkDebtRatio()) setStep(3); }}
                disabled={!canProceedStep2}
                className="flex-[2] btn-gold py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuă <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3 ── */}
        {step === 3 && (
          <div className="space-y-3.5">
            {/* Locality autocomplete */}
            <div ref={localityRef} className="relative">
              <label className={labelClass}>Localitatea ta <span className="text-gold">*</span></label>
              <input
                type="text"
                value={localityInput}
                onChange={(e) => {
                  setLocalityInput(e.target.value);
                  setLocalityFreeText(false);
                  form3.setValue("locality", "", { shouldValidate: false });
                }}
                onBlur={() => {
                  if (!form3.getValues("locality") && localityInput) {
                    form3.setValue("locality", localityInput, { shouldValidate: true });
                    setLocalityFreeText(true);
                  }
                }}
                placeholder="Caută localitatea ta..."
                aria-invalid={!!form3.formState.errors.locality}
                className={`${inputBase} ${form3.formState.errors.locality ? inputError : ""}`}
              />
              {localitySuggestions.length > 0 && (
                <ul className={`absolute z-20 w-full mt-1 rounded-lg border shadow-lg overflow-hidden ${dark ? "bg-navy border-white/20" : "bg-white border-[#e0e4ea]"}`}>
                  {localitySuggestions.map((loc) => (
                    <li key={loc}>
                      <button type="button" onMouseDown={() => selectLocality(loc)}
                        className={`w-full text-left px-3.5 py-2.5 text-[13px] transition-colors ${dark ? "text-white/80 hover:bg-white/10" : "text-navy hover:bg-gold/5"}`}>
                        {loc}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button type="button" onMouseDown={() => selectLocality("Altă localitate / Alt județ")}
                      className={`w-full text-left px-3.5 py-2.5 text-[12px] italic transition-colors ${dark ? "text-white/40 hover:bg-white/10" : "text-muted hover:bg-gold/5"}`}>
                      Altă localitate / Alt județ
                    </button>
                  </li>
                </ul>
              )}
              {localityFreeText && (
                <p className={`text-[11px] mt-1 ${dark ? "text-white/40" : "text-muted"}`}>
                  Localitatea nu e în listă — o confirmăm la apel.
                </p>
              )}
              <FieldError message={form3.formState.errors.locality?.message} />
            </div>

            {/* Nume */}
            <div>
              <label className={labelClass}>Nume Complet <span className="text-gold">*</span></label>
              <Controller control={form3.control} name="name" render={({ field, fieldState }) => (
                <>
                  <input {...field} type="text" autoComplete="name" placeholder="ex: Ion Popescu"
                    aria-invalid={!!fieldState.error}
                    className={`${inputBase} ${fieldState.error ? inputError : ""}`} />
                  <FieldError message={fieldState.error?.message} />
                </>
              )} />
            </div>

            {/* Telefon */}
            <div>
              <label className={labelClass}>Număr de Telefon <span className="text-gold">*</span></label>
              <Controller control={form3.control} name="phone" render={({ field, fieldState }) => (
                <>
                  <input {...field} type="tel" autoComplete="tel" placeholder="ex: 07xx xxx xxx"
                    aria-invalid={!!fieldState.error}
                    className={`${inputBase} ${fieldState.error ? inputError : ""}`} />
                  <FieldError message={fieldState.error?.message} />
                </>
              )} />
            </div>

            {/* Email opțional */}
            {!compact && (
              <div>
                <label className={labelClass}>
                  Email <span className={`font-normal text-[11px] ${dark ? "text-white/40" : "text-muted"}`}>(opțional)</span>
                </label>
                <p className={`text-[11px] mb-1 ${dark ? "text-white/35" : "text-slate-400"}`}>
                  Folosit doar pentru trimiterea ofertei finale în scris.
                </p>
                <Controller control={form3.control} name="email" render={({ field, fieldState }) => (
                  <>
                    <input {...field} type="email" autoComplete="email" placeholder="exemplu@email.ro"
                      aria-invalid={!!fieldState.error}
                      className={`${inputBase} ${fieldState.error ? inputError : ""}`} />
                    <FieldError message={fieldState.error?.message} />
                  </>
                )} />
              </div>
            )}

            {/* Interval apel */}
            <div>
              <label className={labelClass}>Când preferi să fii sunat? <span className="text-gold">*</span></label>
              <div className="grid grid-cols-2 gap-2">
                {CALL_SLOTS.map((slot) => {
                  const selected = form3.watch("preferredCallSlot") === slot;
                  return (
                    <label key={slot} className={`flex items-center justify-center text-center px-2 py-3 rounded-lg border-[1.5px] cursor-pointer transition-all text-[12px] font-medium leading-snug ${selected ? "border-gold bg-gold/10 text-gold font-semibold" : dark ? "border-white/20 text-white/60 hover:border-white/40" : "border-[#e0e4ea] text-muted hover:border-gold/40"}`}>
                      <input type="radio" className="sr-only" value={slot} checked={selected}
                        onChange={() => form3.setValue("preferredCallSlot", slot, { shouldValidate: true })} />
                      {slot}
                    </label>
                  );
                })}
              </div>
              <FieldError message={form3.formState.errors.preferredCallSlot?.message} />
            </div>

            {/* Mențiuni opționale */}
            {!compact && (
              <div>
                <label className={labelClass}>
                  Mențiuni Suplimentare <span className={`font-normal text-[11px] ${dark ? "text-white/40" : "text-muted"}`}>(opțional — sari peste dacă nu e cazul)</span>
                </label>
                <Controller control={form3.control} name="notes" render={({ field }) => (
                  <textarea {...field} placeholder="ex: suma aproximativă, urgența, situație specifică" rows={2} className={`${inputBase} resize-none`} />
                )} />
              </div>
            )}

            {/* GDPR */}
            <div className={`flex items-start gap-3 p-3 rounded-lg border-[1.5px] transition-colors ${form3.watch("gdprConsent") ? "border-gold/50 bg-gold/5" : dark ? "border-white/15 bg-white/5" : "border-[#e0e4ea] bg-[#fafbfc]"}`}>
              <Controller control={form3.control} name="gdprConsent" render={({ field }) => (
                <input type="checkbox" id={`${formId}-gdpr`} checked={!!field.value}
                  onChange={(e) => field.onChange(e.target.checked || undefined)}
                  className="mt-0.5 w-4 h-4 accent-[#C9A84C] cursor-pointer flex-shrink-0" />
              )} />
              <label htmlFor={`${formId}-gdpr`} className={`text-[12px] leading-relaxed cursor-pointer ${dark ? "text-white/60" : "text-muted"}`}>
                Sunt de acord cu prelucrarea datelor mele conform{" "}
                <Link href="/politica-confidentialitate" target="_blank" className="text-gold underline hover:text-gold/80">Politicii de Confidențialitate</Link>{" "}
                și <Link href="/termeni-conditii" target="_blank" className="text-gold underline hover:text-gold/80">Termenilor și Condițiilor</Link>. <span className="text-gold">*</span>
              </label>
            </div>
            <FieldError message={form3.formState.errors.gdprConsent?.message} />

            {form3.formState.errors.root && (
              <p className="text-[#DC2626] text-[12px] text-center">{form3.formState.errors.root.message}</p>
            )}

            <div className="flex gap-2">
              <button type="button" onClick={() => setStep(2)}
                className={`flex-1 py-3.5 rounded-xl font-bold text-[14px] font-dm flex items-center justify-center gap-1.5 border-[1.5px] transition-colors ${dark ? "border-white/20 text-white/60 hover:text-white hover:border-white/40" : "border-[#e0e4ea] text-muted hover:text-navy hover:border-navy/30"}`}>
                <ChevronLeft size={16} /> Înapoi
              </button>
              <button type="button" onClick={() => form3.handleSubmit(handleSubmit)()}
                disabled={loading}
                className="flex-[2] btn-gold py-3.5 rounded-xl text-navy font-bold text-[14px] tracking-[0.3px] font-dm flex items-center justify-center gap-2 disabled:opacity-70">
                {loading ? <><Loader2 size={16} className="animate-spin" /> Se trimite...</> : "Solicită Consultație →"}
              </button>
            </div>

            {!compact && (
              <div className="text-center">
                <button type="button"
                  onClick={() => { form3.setValue("notes", ""); form3.setValue("email", ""); form3.handleSubmit(handleSubmit)(); }}
                  className={`text-[12px] underline cursor-pointer ${dark ? "text-white/35 hover:text-white/60" : "text-muted hover:text-navy"} transition-colors`}>
                  Sari peste câmpurile opționale și trimite →
                </button>
              </div>
            )}

            <div className="flex items-start gap-2 pt-0.5">
              <ShieldCheck size={13} className={`mt-0.5 flex-shrink-0 ${dark ? "text-white/40" : "text-muted"}`} />
              <p className={`text-[11px] leading-relaxed ${dark ? "text-white/40" : "text-muted"}`}>
                Datele tale sunt în siguranță și nu vor fi partajate cu terți fără consimțământul tău. Serviciu complet gratuit.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
