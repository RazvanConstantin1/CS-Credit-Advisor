"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#trust", label: "Beneficii" },
  { href: "/#calculator", label: "Calculator" },
  { href: "/#about", label: "Despre Noi" },
  { href: "/#faq", label: "Întrebări Frecvente" },
  { href: "/blog", label: "Articole" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "bg-navy/95 backdrop-blur-sm border-b border-gold/20",
          scrolled ? "shadow-[0_4px_40px_rgba(0,0,0,0.4)]" : "",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[70px] sm:h-[78px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="flex-shrink-0 rounded-xl ring-2 ring-gold/60 shadow-[0_0_14px_rgba(201,168,76,0.35)] overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="CS Credit Advisor"
                width={54}
                height={54}
                className="block"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-playfair font-bold text-[16px] sm:text-[18px] text-white tracking-[0.3px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                CS Credit Advisor
              </span>
              <span className="text-[9px] sm:text-[11px] text-gold tracking-[2px] uppercase font-semibold">
                Broker de Credite
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-gold text-sm font-medium tracking-[0.3px] transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#hero"
              className="btn-gold text-navy px-5 py-2.5 rounded-lg text-[13px] font-bold tracking-[0.3px] whitespace-nowrap"
            >
              Consultație Gratuită
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={[
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer panel */}
        <div
          className={[
            "absolute top-16 left-0 right-0 bg-navy border-b border-gold/20 px-4 py-6 transition-all duration-300",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          ].join(" ")}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={handleNavClick}
                className="text-white/80 hover:text-gold text-base font-medium py-3 px-3 rounded-lg hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="#hero"
                onClick={handleNavClick}
                className="btn-gold block text-center text-navy font-bold py-4 rounded-xl text-base tracking-[0.3px]"
              >
                🎁 Consultație 100% Gratuită
              </Link>
            </div>
          </nav>

          {/* Mobile quick info */}
          <div className="mt-5 flex items-center justify-center gap-6 text-[11px] text-white/40 tracking-wider uppercase">
            <span>Serviciu Gratuit</span>
            <span>·</span>
            <span>Top 5 Bănci Partenere</span>
            <span>·</span>
            <span>GDPR</span>
          </div>
        </div>
      </div>
    </>
  );
}
