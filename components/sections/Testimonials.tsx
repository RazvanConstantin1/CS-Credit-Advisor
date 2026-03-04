import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    initials: "M",
    name: "Mihai Dumitrescu",
    city: "București",
    tag: "Credit Personal – 25.000 RON",
    quote:
      "Aveam un dosar respins de două bănci din cauza unui credit vechi neachitat. CS Credit Advisor a găsit o soluție în mai puțin de o săptămână. Profesionalism rar întâlnit!",
  },
  {
    initials: "A",
    name: "Andreea Ionescu",
    city: "Cluj-Napoca",
    tag: "Credit Ipotecar – 180.000 RON",
    quote:
      "Am apelat la CS Credit Advisor pentru un credit ipotecar și am rămas impresionată de cât de simplu a fost totul. M-au ghidat pas cu pas și am semnat contractul în 3 săptămâni.",
  },
  {
    initials: "G",
    name: "George Popa",
    city: "Timișoara",
    tag: "Credit Personal – 12.000 RON",
    quote:
      "Nu credeam că mai pot lua un credit după ce am intrat în insolvență acum câțiva ani. Consilierii de la CS m-au ajutat să înțeleg opțiunile și am obținut în final aprobarea.",
  },
  {
    initials: "E",
    name: "Elena Radu",
    city: "Iași",
    tag: "Credit Personal – 8.000 RON",
    quote:
      "Serviciul este cu adevărat gratuit — am verificat de mai multe ori. Echipa a fost transparentă din prima secundă. Recomand tuturor care au nevoie de un credit avantajos.",
  },
  {
    initials: "C",
    name: "Cristian & Maria Văduva",
    city: "Brașov",
    tag: "Credit Ipotecar Prima Casă",
    quote:
      "Doream să cumpărăm prima noastră locuință dar nu știam de unde să începem. CS Credit Advisor ne-a explicat tot procesul și ne-a obținut o dobândă mai mică decât ne așteptam.",
  },
  {
    initials: "L",
    name: "Laura Constantin",
    city: "Constanța",
    tag: "Credit Personal – 15.000 RON",
    quote:
      "Aveam scoring mic și nu știam că există soluții pentru mine. Consultantul meu de la CS a fost empatic, răbdător și mi-a găsit o ofertă potrivită. Mulțumesc!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center">
            <SectionLabel center>Testimoniale</SectionLabel>
          </div>
          <h2 className="font-playfair font-bold text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[-0.3px] text-navy mb-4">
            Clienții Noștri Vorbesc
          </h2>
          <p className="text-muted text-base sm:text-[1.05rem] leading-[1.75] max-w-lg mx-auto">
            Mii de români au accesat creditul potrivit cu ajutorul nostru. Iată câteva povești
            reale.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="group h-full bg-off-white border-[1.5px] border-[#eaecf0] rounded-2xl p-7 relative hover:border-gold hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                {/* Quote mark */}
                <span className="absolute top-4 left-5 font-playfair text-[4rem] text-gold/25 leading-none select-none">
                  "
                </span>

                {/* Stars */}
                <div className="text-gold text-sm mb-4 tracking-wider">★★★★★</div>

                <blockquote className="text-[14px] text-charcoal leading-[1.75] mb-5 italic">
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#eaecf0]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center font-playfair font-bold text-gold text-base flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <strong className="block text-[14px] text-navy font-semibold">{t.name}</strong>
                    <span className="text-[12px] text-muted">{t.city}</span>
                    <span className="block mt-0.5 bg-gold-pale text-charcoal text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full w-fit">
                      {t.tag}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
