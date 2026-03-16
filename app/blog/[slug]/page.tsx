import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import LeadForm from "@/components/ui/LeadForm";
import { articles, getArticle, getRecentArticles } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — CS Credit Advisor`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRecentArticles(3, article.slug);

  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Article hero */}
        <section className="bg-navy py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 hero-grid-bg opacity-50" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1b2a 0%, #080e16 100%)" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-5 text-[12px] text-white/40">
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gold">{article.category}</span>
            </div>
            <h1 className="font-playfair font-bold text-white text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[-0.3px] mb-5 max-w-3xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[13px] text-white/45">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} de citire</span>
              <span>·</span>
              <span className="bg-gold/15 text-gold border border-gold/20 px-3 py-0.5 rounded-full text-[11px] font-semibold">
                {article.category}
              </span>
            </div>
          </div>
        </section>

        {/* Cover image */}
        {article.coverImage && (
          <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
            <Image src={article.coverImage} alt={article.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-off-white/30" />
          </div>
        )}

        {/* Article body + sidebar */}
        <section className="bg-off-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">

              {/* Main content */}
              <article>
                {/* Excerpt / lead */}
                <p className="text-base sm:text-lg text-charcoal leading-[1.8] mb-8 font-medium border-l-4 border-gold pl-5 py-1">
                  {article.excerpt}
                </p>

                {/* Sections */}
                <div className="space-y-10">
                  {article.sections.map((section) => (
                    <div key={section.id} id={section.id}>
                      <h2 className="font-playfair font-bold text-navy text-[1.3rem] sm:text-[1.5rem] leading-snug mb-4">
                        {section.heading}
                      </h2>
                      <div className="space-y-4">
                        {section.content.map((para, i) => (
                          <p key={i} className="text-[15px] text-charcoal leading-[1.8]">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="mt-10 bg-navy rounded-2xl p-7 relative overflow-hidden">
                  <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-gold/8 rounded-full pointer-events-none" />
                  <h3 className="font-playfair font-bold text-gold text-[1.1rem] mb-3">
                    Concluzie
                  </h3>
                  <p className="text-white/70 text-[14.5px] leading-[1.8]">
                    {article.conclusion}
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/#hero"
                      className="btn-gold inline-block text-navy font-bold py-3 px-6 rounded-xl text-[13px]"
                    >
                      Consultație Gratuită →
                    </Link>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">

                {/* TOC */}
                <div className="bg-white border border-[#e8e3d8] rounded-2xl p-5 sticky top-24">
                  <h4 className="font-playfair font-bold text-navy text-[0.95rem] mb-4">
                    Cuprins
                  </h4>
                  <nav className="space-y-2">
                    {article.sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="flex items-start gap-2 text-[13px] text-muted hover:text-gold transition-colors py-1 border-l-2 border-transparent hover:border-gold pl-3 -ml-0.5"
                      >
                        {s.heading}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-5 pt-5 border-t border-[#e8e3d8]">
                    <div className="flex items-center gap-2 text-[12px] text-muted mb-1">
                      <span>⏱️</span>
                      <span>{article.readTime} de citire</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-muted">
                      <span>📅</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>

                {/* Mini form */}
                <div className="bg-navy rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-[-20px] right-[-20px] w-28 h-28 bg-gold/8 rounded-full pointer-events-none" />
                  <p className="font-playfair font-bold text-white text-[1rem] mb-1">
                    Consultație Gratuită
                  </p>
                  <p className="text-white/50 text-[12px] mb-5">
                    Te contactăm în maxim 24h
                  </p>
                  <LeadForm formId="blog-sidebar" dark compact />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related articles */}
        <section className="bg-navy py-14 sm:py-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-playfair font-bold text-white text-[1.4rem] sm:text-[1.8rem] mb-8">
              Articole Similare
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group block">
                  <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold/30 hover:bg-navy-light/50 transition-all duration-300">
                    <div className="h-36 bg-gradient-to-br from-navy-light to-navy-mid relative overflow-hidden">
                      {a.coverImage ? (
                        <Image src={a.coverImage} alt={a.title} fill className="object-cover opacity-80" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-40">📄</div>
                      )}
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] text-gold uppercase tracking-[1px] font-semibold">
                        {a.category}
                      </span>
                      <h4 className="font-playfair font-bold text-white text-[0.95rem] leading-snug mt-1.5 mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {a.title}
                      </h4>
                      <span className="text-[11px] text-white/35">{a.readTime} citire</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
