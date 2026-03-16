import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    image: "/download%20(5).jpeg",
    name: "Mihai Dumitrescu",
    city: "București",
    tag: "Credit Personal – 25.000 RON",
    stars: 5,
    quote:
      "Aveam un dosar respins de două bănci din cauza unui credit vechi neachitat. CS Credit Advisor a găsit o soluție în mai puțin de o săptămână. Profesionalism rar întâlnit!",
  },
  {
    image: "/download%20(1).jpeg",
    name: "Andreea Ionescu",
    city: "București",
    tag: "Credit Ipotecar – 180.000 RON",
    stars: 4,
    quote:
      "Am apelat la CS Credit Advisor pentru un credit ipotecar și am rămas impresionată de cât de simplu a fost totul. M-au ghidat pas cu pas și am semnat contractul în 3 săptămâni.",
  },
  {
    image: "/download%20(6).jpeg",
    name: "George Popa",
    city: "Ilfov",
    tag: "Credit Personal – 12.000 RON",
    stars: 5,
    quote:
      "Nu credeam că mai pot lua un credit după ce am intrat în insolvență acum câțiva ani. Consilierii de la CS m-au ajutat să înțeleg opțiunile și am obținut în final aprobarea.",
  },
  {
    image: "/download%20(2).jpeg",
    name: "Elena Radu",
    city: "București",
    tag: "Credit Personal – 8.000 RON",
    stars: 5,
    quote:
      "Serviciul este cu adevărat gratuit — am verificat de mai multe ori. Echipa a fost transparentă din prima secundă. Recomand tuturor care au nevoie de un credit avantajos.",
  },
  {
    image: "/download%20(3).jpeg",
    name: "Cristian & Maria Văduva",
    city: "Ilfov",
    tag: "Credit Ipotecar Prima Casă",
    stars: 4,
    quote:
      "Doream să cumpărăm prima noastră locuință dar nu știam de unde să începem. CS Credit Advisor ne-a explicat tot procesul și ne-a obținut o dobândă mai mică decât ne așteptam.",
  },
  {
    image: "/download.jpeg",
    name: "Laura Constantin",
    city: "București",
    tag: "Credit Personal – 15.000 RON",
    stars: 5,
    quote:
      "Aveam scoring mic și nu știam că există soluții pentru mine. Consultantul meu de la CS a fost empatic, răbdător și mi-a găsit o ofertă potrivită. Mulțumesc!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-gold/6 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center">
            <SectionLabel light center>Testimoniale</SectionLabel>
          </div>
          <h2 className="font-playfair font-bold text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[-0.3px] text-white mb-4">
            Ce Spun Clienții
          </h2>
          <p className="text-white/55 text-base sm:text-[1.05rem] leading-[1.75] max-w-lg mx-auto">
            Mii de români au accesat creditul potrivit cu ajutorul nostru. Iată câteva povești
            reale.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-7 relative hover:bg-navy-light/60 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                {/* Quote mark */}
                <span className="absolute top-4 left-5 font-playfair text-[4rem] text-gold/20 leading-none select-none">
                  "
                </span>

                {/* Stars */}
                <div className="text-gold text-sm mb-4 tracking-wider">
                  {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
                </div>

                <blockquote className="text-[14px] text-white/70 leading-[1.75] mb-5 italic">
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <strong className="block text-[14px] text-white font-semibold">{t.name}</strong>
                    <span className="text-[12px] text-white/45">{t.city}</span>
                    <span className="block mt-0.5 bg-gold/15 text-gold text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full w-fit border border-gold/20">
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
