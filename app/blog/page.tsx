import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import { articles, getFeaturedArticle, getRecentArticles } from "@/lib/articles";

const categories = ["Toate", "Ghiduri", "Știri", "Sfaturi"];

const categoryColors: Record<string, string> = {
  Ghiduri: "bg-navy/10 text-navy",
  Știri: "bg-gold/15 text-charcoal",
  Sfaturi: "bg-gold-pale text-charcoal",
};

export const metadata = {
  title: "Blog — CS Credit Advisor | Ghiduri, Știri și Sfaturi Financiare",
  description:
    "Articole despre credite personale, ipotecare, Biroul de Credit și sfaturi financiare pentru români.",
};

export default function BlogPage() {
  const featured = getFeaturedArticle();
  const recent = getRecentArticles(6, featured.slug);
  const archive = articles.slice(0, 4);

  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-off-white py-16 sm:py-20 border-b border-[#e8e3d8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-[11px] text-gold uppercase tracking-[2px] font-semibold mb-3">
              Resurse & Informații
            </p>
            <h1 className="font-playfair font-bold text-navy text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] leading-[1.15] tracking-[-0.5px] mb-4 max-w-2xl">
              Ghiduri, Știri și{" "}
              <em className="text-gold italic">Sfaturi Financiare</em>
            </h1>
            <p className="text-muted text-base sm:text-lg leading-[1.75] max-w-xl">
              Tot ce trebuie să știi despre credite, dobânzi și finanțare personală
              — explicat simplu și aplicabil în viața reală.
            </p>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((c) => (
                <span
                  key={c}
                  className={`px-4 py-2 rounded-full text-[13px] font-semibold border cursor-pointer transition-all ${
                    c === "Toate"
                      ? "bg-navy text-white border-navy"
                      : "bg-white border-[#ddd8ce] text-navy hover:border-gold"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured article */}
        <section className="py-12 sm:py-16 bg-navy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-[11px] text-gold uppercase tracking-[2px] font-semibold mb-6">
              Articol Recomandat
            </p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-center">
                {/* Image placeholder */}
                <div className="relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-navy-light to-navy-mid border border-white/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📰</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${categoryColors[featured.category] ?? "bg-white/10 text-white"}`}>
                      {featured.category}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <h2 className="font-playfair font-bold text-white text-[1.6rem] sm:text-[2rem] leading-[1.25] mb-4 group-hover:text-gold transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-white/60 text-base leading-[1.75] mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[12px] text-white/40 mb-6">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime} citire</span>
                  </div>
                  <span className="btn-gold inline-block text-navy font-bold py-3 px-6 rounded-xl text-[13px]">
                    Citește Articolul →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Recent articles */}
        <section className="py-16 sm:py-20 bg-off-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-playfair font-bold text-navy text-[1.6rem] sm:text-[2rem]">
                Articole Recente
              </h2>
              <span className="text-[12px] text-muted">
                {articles.length} articole
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-[#e8e3d8] hover:border-gold hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    {/* Image placeholder */}
                    <div className="h-44 bg-gradient-to-br from-navy-light to-navy-mid relative">
                      <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
                        📄
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${categoryColors[a.category] ?? "bg-white/10 text-white"}`}>
                          {a.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-playfair font-bold text-navy text-[1rem] leading-[1.35] mb-2 group-hover:text-gold transition-colors duration-200">
                        {a.title}
                      </h3>
                      <p className="text-[13px] text-muted leading-relaxed mb-4 line-clamp-2">
                        {a.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-muted">
                        <span>{a.date}</span>
                        <span>{a.readTime} citire</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Archive + Newsletter */}
        <section className="bg-navy py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
              {/* Archive */}
              <div>
                <h2 className="font-playfair font-bold text-white text-[1.4rem] sm:text-[1.8rem] mb-8">
                  Din Arhivă
                </h2>
                <div className="space-y-4">
                  {archive.map((a) => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} className="group block">
                      <div className="flex gap-4 p-4 rounded-xl border border-white/8 hover:border-gold/30 hover:bg-navy-light/50 transition-all duration-200">
                        <div className="w-16 h-16 rounded-xl bg-navy-light flex-shrink-0 flex items-center justify-center text-2xl border border-white/8">
                          📰
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[14px] font-semibold text-white leading-snug mb-1 group-hover:text-gold transition-colors line-clamp-2">
                            {a.title}
                          </h4>
                          <div className="flex items-center gap-2 text-[11px] text-white/35">
                            <span>{a.date}</span>
                            <span>·</span>
                            <span>{a.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-fit">
                <p className="text-[11px] text-gold uppercase tracking-[2px] font-semibold mb-3">
                  Newsletter
                </p>
                <h3 className="font-playfair font-bold text-white text-[1.3rem] leading-snug mb-3">
                  Sfaturi Financiare,<br />Direct în Inbox
                </h3>
                <p className="text-white/55 text-[13.5px] leading-relaxed mb-6">
                  Primești săptămânal ghiduri practice despre credite, dobânzi și
                  finanțe personale — fără spam.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="adresa@email.ro"
                    className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-gold transition-colors"
                  />
                  <button className="btn-gold w-full py-3 rounded-xl text-navy font-bold text-[14px]">
                    Abonează-te Gratuit
                  </button>
                </div>
                <p className="text-[11px] text-white/30 mt-3 text-center">
                  Fără spam. Dezabonare oricând.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-off-white py-14 sm:py-18 border-t border-[#e8e3d8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-playfair font-bold text-navy text-[1.8rem] sm:text-[2.4rem] leading-[1.2] mb-4">
              <em className="text-gold italic">Hai să vorbim.</em>
            </h2>
            <p className="text-muted text-base leading-[1.75] mb-7 max-w-lg mx-auto">
              Ai citit suficient — e momentul să afli exact ce credit poți obține.
              Consultația este gratuită și fără obligații.
            </p>
            <Link
              href="/#hero"
              className="btn-gold inline-block text-navy font-bold py-4 px-8 rounded-xl text-[15px] tracking-[0.3px]"
            >
              Solicită Consultație →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
