export interface ArticleSection {
  id: string;
  heading: string;
  content: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Ghiduri" | "Știri" | "Sfaturi";
  featured?: boolean;
  sections: ArticleSection[];
  conclusion: string;
}

export const articles: Article[] = [
  {
    slug: "credit-personal-2026-ghid-complet",
    title: "Cum Să Obții un Credit Personal în 2026: Ghid Complet",
    excerpt:
      "Tot ce trebuie să știi despre creditele personale în 2026: condiții, dobânzi, documente și cum să obții cea mai bună ofertă pentru situația ta.",
    date: "5 Martie 2026",
    readTime: "8 min",
    category: "Ghiduri",
    featured: true,
    sections: [
      {
        id: "ce-este",
        heading: "1. Ce este un credit personal?",
        content: [
          "Un credit personal este un împrumut acordat de o bancă sau instituție financiară fără a necesita o garanție imobiliară. Poate fi utilizat pentru orice scop — renovare, vacanță, achiziții mari sau situații neprevăzute.",
          "În 2026, băncile din România oferă credite personale cu sume între 1.000 și 150.000 RON și perioade de rambursare de la 6 luni la 10 ani. Dobânzile variază în funcție de bancă, profil financiar și tipul de credit ales.",
        ],
      },
      {
        id: "conditii",
        heading: "2. Condiții de eligibilitate",
        content: [
          "Pentru a obține un credit personal în 2026, vei avea nevoie de: vârsta între 18 și 70 de ani la finalul creditului, venituri stabile și demonstrabile, un istoricul de credit acceptabil și documente de identitate valabile.",
          "Chiar dacă ai înregistrări negative la Biroul de Credit, unele bănci partenere acceptă dosare cu istorii dificile. Un broker autorizat te poate ajuta să identifici exact ce opțiuni ai disponibile.",
          "Venitul minim acceptat variază în funcție de suma solicitată și de bancă. De regulă, rata lunară nu trebuie să depășească 40-45% din venitul net al familiei.",
        ],
      },
      {
        id: "documente",
        heading: "3. Documente necesare",
        content: [
          "Lista de documente diferă ușor de la o bancă la alta, dar în general vei avea nevoie de: carte de identitate în termen de valabilitate, adeverință de venit sau fluturași de salariu (ultimele 3 luni), extras de cont (ultimele 3-6 luni) și, opțional, un contract de muncă.",
          "Dacă ești PFA sau desfășori activitate independentă, vei mai avea nevoie de declarația de venit și certificatul de înregistrare. Banca poate solicita documente suplimentare în funcție de profilul tău.",
        ],
      },
      {
        id: "cum-compari",
        heading: "4. Cum compari ofertele corect",
        content: [
          "Nu te uita doar la rata dobânzii nominale — compară întotdeauna DAE (Dobânda Anuală Efectivă), care include toate costurile creditului: dobânda, comisioanele și asigurările obligatorii.",
          "Folosește un calculator de credit pentru a vedea rata lunară exactă și costul total al împrumutului. O diferență de 1-2% la DAE poate însemna mii de lei în plus pe toată durata creditului.",
          "Un broker de credite autorizat compară automat ofertele celor mai mari bănci și îți prezintă cele mai avantajoase variante pentru profilul tău — fără niciun cost pentru tine.",
        ],
      },
      {
        id: "procesul",
        heading: "5. Procesul de aplicare pas cu pas",
        content: [
          "Pasul 1 — Consultație inițială: Discuți cu un specialist suma necesară, durata dorită și situația ta financiară. La CS Credit Advisor, această consultație este 100% gratuită.",
          "Pasul 2 — Analiza dosarului: Specialistul identifică cel mai potrivit produs și bancă pentru profilul tău și pregătește dosarul de aplicare.",
          "Pasul 3 — Aplicarea la bancă: Dosarul tău este depus la bancă cu sprijinul consultantului. Vei fi informat la fiecare etapă.",
          "Pasul 4 — Aprobare și semnare: Odată aprobat, semnezi contractul la bancă. Banii ajung în contul tău în 1-3 zile lucrătoare.",
        ],
      },
      {
        id: "sfaturi",
        heading: "6. Sfaturi pentru a obține cea mai bună ofertă",
        content: [
          "Verifică-ți istoricul de credit înainte de aplicare — poți solicita un raport gratuit la Biroul de Credit. Corectează eventualele erori înainte de a depune dosarul.",
          "Nu aplica la mai multe bănci simultan — fiecare interogare la Biroul de Credit îți poate afecta scorul. Lucrează cu un broker care face o singură interogare și negociază în numele tău.",
          "Negociază întotdeauna — băncile au marjă de negociere, mai ales pentru clienții cu profil bun. Un broker experimentat poate obține condiții mai avantajoase decât ai obține singur.",
        ],
      },
    ],
    conclusion:
      "Obținerea unui credit personal în 2026 nu trebuie să fie un proces complicat. Cu documentele corecte, o comparație atentă a ofertelor și sprijinul unui broker autorizat, poți accesa finanțarea de care ai nevoie în condiții avantajoase. Consultanții CS Credit Advisor sunt disponibili să te ghideze gratuit prin fiecare pas al procesului.",
  },
  {
    slug: "prima-casa-noua-casa-ghid-comparativ",
    title: "Prima Casă sau Noua Casă: Cum Alegi Cel Mai Bun Program",
    excerpt:
      "Comparăm programele Prima Casă și Noua Casă — avans, dobânzi, condiții de eligibilitate și ce s-a schimbat în 2026.",
    date: "20 Februarie 2026",
    readTime: "6 min",
    category: "Ghiduri",
    sections: [
      {
        id: "diferente",
        heading: "1. Principalele diferențe",
        content: [
          "Programul Noua Casă a înlocuit Prima Casă și vine cu câteva modificări importante: plafonul maxim al imobilului a crescut, iar condițiile de eligibilitate sunt ușor modificate.",
          "Ambele programe sunt garantate parțial de stat și permit achiziționarea primei proprietăți cu un avans minim, mult mai mic decât pentru un credit ipotecar clasic.",
        ],
      },
      {
        id: "avans",
        heading: "2. Avansul minim",
        content: [
          "Pentru Noua Casă, avansul minim este de 15% din valoarea proprietății, față de 5% cât era în Prima Casă. Această modificare urmărește reducerea riscului de supraîndatorare.",
          "Pentru un credit ipotecar clasic, băncile cer de regulă un avans de 20-25%. Prin urmare, programul Noua Casă rămâne avantajos pentru cei care nu au economii mari.",
        ],
      },
      {
        id: "eligibilitate",
        heading: "3. Condiții de eligibilitate",
        content: [
          "Poți accesa programul Noua Casă dacă nu deții în prezent nicio proprietate imobiliară sau ai o cotă de cel mult 50% dintr-una. Venitul familiei trebuie să fie suficient pentru a susține rata lunară.",
          "Nu există restricții legate de istoricul de credit în sensul strict, dar băncile participante pot refuza dosarele cu înregistrări negative semnificative.",
        ],
      },
    ],
    conclusion:
      "Dacă îndeplinești condițiile, Noua Casă poate fi o soluție avantajoasă pentru achiziționarea primei locuințe. Consultanții CS Credit Advisor te ajută gratuit să determini eligibilitatea și să pregătești dosarul.",
  },
  {
    slug: "biroul-de-credit-explicat",
    title: "Ce Este Biroul de Credit și Cum Îți Afectează Dosarul",
    excerpt:
      "Cum funcționează Biroul de Credit în România, ce înseamnă un scor bun sau slab și ce poți face dacă ai înregistrări negative.",
    date: "10 Februarie 2026",
    readTime: "5 min",
    category: "Sfaturi",
    sections: [
      {
        id: "ce-este",
        heading: "1. Ce este Biroul de Credit",
        content: [
          "Biroul de Credit (BC) este o bază de date națională care centralizează informații despre comportamentul de plată al persoanelor fizice și juridice. Toate băncile și instituțiile financiare înregistrate raportează lunar datele clienților.",
          "Informațiile includ creditele active, istoricul plăților, eventualele restanțe sau executări silite. Aceste date sunt folosite de bănci pentru a evalua riscul unui nou dosar de credit.",
        ],
      },
      {
        id: "scor",
        heading: "2. Cum se calculează scorul de credit",
        content: [
          "Scorul de credit variază de la 300 la 850 de puncte. Un scor peste 700 este considerat bun, peste 750 — excelent. Sub 600 poate îngreuna accesul la credite în condiții standard.",
          "Factorii care influențează scorul: plățile la timp (cel mai important), gradul de utilizare a creditelor existente, diversitatea produselor financiare și vechimea istoricului de credit.",
        ],
      },
      {
        id: "negative",
        heading: "3. Ce se întâmplă cu înregistrările negative",
        content: [
          "Înregistrările negative rămân în baza de date timp de 4 ani de la data înregistrării sau 7 ani pentru restanțe severe. Dacă ai achitat datoria, statutul se actualizează dar înregistrarea rămâne vizibilă.",
          "Chiar și cu înregistrări negative, există soluții de creditare. Unele bănci și IFN-uri acceptă dosare cu risc mai ridicat, la dobânzi mai mari. Un broker te poate ajuta să identifici opțiunile disponibile.",
        ],
      },
    ],
    conclusion:
      "Înțelegerea Biroului de Credit te ajută să iei decizii financiare mai bune. Dacă ai nelămuriri despre istoricul tău sau vrei să știi ce opțiuni de creditare ai, consultanții CS Credit Advisor îți oferă gratuit această informație.",
  },
  {
    slug: "refinantare-credit-ghid",
    title: "Refinanțare Credit: Când Merită și Cum Procedezi",
    excerpt:
      "Refinanțarea poate reduce rata lunară sau costul total al creditului. Află când are sens să refinanțezi și care sunt pașii necesari.",
    date: "28 Ianuarie 2026",
    readTime: "5 min",
    category: "Sfaturi",
    sections: [
      {
        id: "ce-este",
        heading: "1. Ce înseamnă refinanțarea",
        content: [
          "Refinanțarea înseamnă contractarea unui nou credit pentru a plăti creditul sau creditele existente, de obicei la condiții mai avantajoase: dobândă mai mică, rată lunară redusă sau perioadă de rambursare ajustată.",
          "Poate fi făcută la aceeași bancă (renegociere) sau la o altă bancă. În al doilea caz, noul creditor plătește soldul rămas al creditului vechi.",
        ],
      },
      {
        id: "cand-merita",
        heading: "2. Când merită să refinanțezi",
        content: [
          "Refinanțarea are sens când: dobânzile au scăzut semnificativ față de momentul contractării, ai îmbunătățit scorul de credit și poți accesa condiții mai bune, sau vrei să consolidezi mai multe credite într-unul singur.",
          "Nu uita să iei în calcul costurile refinanțării: comisionul de rambursare anticipată (dacă există), costurile noului credit și eventualele taxe notariale pentru ipotecare.",
        ],
      },
    ],
    conclusion:
      "Refinanțarea poate fi o decizie financiară excelentă, dar necesită o analiză atentă a costurilor și beneficiilor. Consultanții CS Credit Advisor calculează gratuit dacă refinanțarea este avantajoasă pentru situația ta.",
  },
  {
    slug: "credit-cu-istorii-negative",
    title: "Credit cu Istoric Negativ la Biroul de Credit: Există Soluții?",
    excerpt:
      "Ai restanțe sau înregistrări negative? Află ce opțiuni de creditare ai în 2026 și cum poți crește șansele de aprobare.",
    date: "15 Ianuarie 2026",
    readTime: "6 min",
    category: "Sfaturi",
    sections: [
      {
        id: "situatia",
        heading: "1. Ce înseamnă istoric negativ",
        content: [
          "Istoricul negativ include: plăți întârziate cu mai mult de 30 de zile, credite trecute la pierderi, executări silite sau declararea insolvenței. Fiecare tip de înregistrare are un impact diferit asupra scorului.",
          "Important de știut: dacă ai achitat integral datoria, banca are obligația să actualizeze statutul la Biroul de Credit. Verifică periodic raportul pentru a te asigura că datele sunt corecte.",
        ],
      },
      {
        id: "optiuni",
        heading: "2. Opțiuni de creditare disponibile",
        content: [
          "Nu toate băncile aplică aceleași criterii. Unele bănci partenere CS Credit Advisor acceptă dosare cu înregistrări negative vechi (3-4 ani) dacă situația curentă este stabilă.",
          "IFN-urile (instituții financiare nebancare) sunt o alternativă, dar cu dobânzi semnificativ mai mari. Le recomandăm doar ca soluție temporară, nu pe termen lung.",
          "Creditele cu garanție (ipotecare) au o rată de aprobare mai mare chiar și cu istoricul negativ, deoarece riscul băncii este acoperit de proprietate.",
        ],
      },
    ],
    conclusion:
      "Un istoric negativ nu înseamnă că nu mai poți accesa creditare. Specialiștii CS Credit Advisor au experiență în dosare complexe și știu exact ce bănci acceptă situații similare cu a ta. Consultația este gratuită.",
  },
  {
    slug: "top-banci-romania-2026",
    title: "Top Bănci România 2026: Comparație Dobânzi Credite Personale",
    excerpt:
      "Comparăm ofertele principale ale băncilor din România pentru credite personale în 2026: BCR, BRD, Banca Transilvania, ING și Raiffeisen.",
    date: "3 Ianuarie 2026",
    readTime: "7 min",
    category: "Știri",
    sections: [
      {
        id: "context",
        heading: "1. Contextul pieței în 2026",
        content: [
          "După perioada de creșteri succesive ale dobânzilor din 2022-2024, piața creditelor din România a intrat într-o fază de stabilizare. DAE pentru creditele personale se situează în prezent între 7% și 16%, în funcție de bancă și profilul clientului.",
          "Concurența între băncile mari a dus la îmbunătățirea condițiilor pentru clienții cu profil bun: comisioane reduse, procese digitalizate și aprobare mai rapidă.",
        ],
      },
      {
        id: "comparatie",
        heading: "2. Comparație orientativă",
        content: [
          "BCR — una dintre cele mai mari bănci din România, oferă credite personale cu DAE între 8% și 14%. Procesul de aprobare este rapid pentru clienții existenți.",
          "BRD — dobânzi competitive, cu produse special dedicate salariaților și pensionarilor. DAE orientativă: 8.5% - 15%.",
          "Banca Transilvania — flexibilă în evaluarea dosarelor și cu una dintre cele mai bune experiențe digitale. DAE: 7.5% - 13%.",
          "ING — 100% online, procese rapide, dar cu criterii mai stricte de eligibilitate. DAE: 8% - 12%.",
          "Raiffeisen — oferte personalizate, comisioane mici, DAE orientativă: 8% - 14%.",
        ],
      },
      {
        id: "cum-alegi",
        heading: "3. Cum alegi banca potrivită",
        content: [
          "Cel mai important factor nu este dobânda nominală ci DAE — dobânda anuală efectivă care include toate costurile. Două credite cu aceeași rată nominală pot avea costuri totale foarte diferite.",
          "Un broker de credite autorizat compară automat toate ofertele disponibile și negociază în numele tău, fără costuri suplimentare. Astfel, ai garanția că alegi cea mai bună ofertă pentru situația ta specifică.",
        ],
      },
    ],
    conclusion:
      "Fiecare bancă are avantajele și dezavantajele ei. Cel mai eficient mod de a alege este prin intermediul unui broker autorizat care cunoaște în detaliu ofertele curente și poate negocia condiții personalizate. CS Credit Advisor colaborează cu toate cele 5 bănci enumerate și oferă consultanță gratuită.",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getRecentArticles(count = 6, excludeSlug?: string): Article[] {
  return articles.filter((a) => a.slug !== excludeSlug).slice(0, count);
}
