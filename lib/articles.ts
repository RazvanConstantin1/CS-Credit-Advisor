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
  coverImage?: string;
  sections: ArticleSection[];
  conclusion: string;
}

export const articles: Article[] = [
  {
    slug: "cum-obtii-credit-nevoi-personale-bucuresti",
    title:
      "Credit de Nevoi Personale în București: Ghid Complet prin Broker Autorizat",
    excerpt:
      "Cum obții un credit de nevoi personale în București rapid și avantajos? Află de ce un broker de credite îți aduce dobânzi mai mici, aprobare mai rapidă și zero bătăi de cap cu băncile.",
    date: "16 Martie 2026",
    readTime: "9 min",
    category: "Ghiduri",
    featured: true,
    coverImage: "/blog/romanian_couple_bank_loan_1.png",
    sections: [
      {
        id: "credit-nevoi-personale-bucuresti-intro",
        heading:
          "1. Credit de nevoi personale în București — ce opțiuni ai în 2026",
        content: [
          "Piața creditelor de nevoi personale din București este una dintre cele mai competitive din România. Cu peste 15 bănci și zeci de IFN-uri active în capitală, ofertele variază enorm — de la DAE de 7,5% pentru clienții premium până la 18-20% la instituțiile nebancare. În 2026, dobânzile s-au stabilizat după anii de creșteri, iar băncile concurează agresiv pentru clienții bucureșteni.",
          "Un credit de nevoi personale poate fi accesat pentru orice scop: renovarea apartamentului, achiziția unui autoturism, acoperirea unor cheltuieli medicale sau consolidarea mai multor datorii într-o singură rată. Sumele disponibile variază între 2.000 și 200.000 RON, cu perioade de rambursare de la 12 la 120 de luni.",
          "Întrebarea pe care și-o pune majoritatea bucureștenilor este: mergi direct la bancă sau lucrezi cu un broker autorizat? Răspunsul scurt: un broker compară automat ofertele tuturor băncilor partenere și negociază în numele tău, fără niciun cost pentru tine.",
        ],
      },
      {
        id: "de-ce-broker-nu-banca",
        heading:
          "2. De ce să alegi un broker de credite în loc să mergi direct la bancă",
        content: [
          "Când mergi direct la o bancă, vezi o singură ofertă — cea a băncii respective. Funcționarul bancar are obiective de vânzare și nu este motivat să-ți spună că altă bancă oferă condiții mai bune. Un broker autorizat ANP (Autoritatea Națională pentru Protecția Consumatorilor) are acces la ofertele actualizate ale tuturor băncilor partenere și îți prezintă o comparație obiectivă.",
          "Costul unui broker de credite este zero pentru client. Brokerul este remunerat de banca la care se semnează contractul, printr-un comision de intermediere. Aceasta înseamnă că primești consultanță profesională, comparație de oferte și asistență completă fără să plătești nimic în plus față de costul creditului.",
          "Un alt avantaj major: brokerul face o singură interogare la Biroul de Credit, indiferent câte bănci compară. Dacă aplici singur la 4-5 bănci, fiecare face câte o interogare separată, ceea ce îți poate afecta scorul de credit și poate reduce șansele de aprobare.",
        ],
      },
      {
        id: "dobanzi-2025-2026",
        heading:
          "3. Dobânzi orientative pentru credite personale în București (2025–2026)",
        content: [
          "În perioada 2025–2026, DAE (Dobânda Anuală Efectivă) pentru creditele de nevoi personale în București se situează între 7,5% și 16%, în funcție de bancă, suma solicitată, durata creditului și profilul financiar al solicitantului. Clienții cu venituri peste 5.000 RON net și fără istorii negative beneficiază de cele mai bune condiții.",
          "Dobânzile fixe (pe primii 1-5 ani) variază între 6,5% și 10% nominal, iar cele variabile sunt legate de IRCC (indicele de referință al BNR), care în martie 2026 se situează la aproximativ 5,8%. La dobânda variabilă se adaugă marja fixă a băncii, de regulă 2-5 puncte procentuale.",
          "Exemplu orientativ: pentru un credit de 50.000 RON pe 5 ani, rata lunară variază între 950 și 1.150 RON, în funcție de bancă. Diferența de 200 RON lunar înseamnă 12.000 RON pe toată durata creditului — suficient motiv pentru a compara ofertele cu atenție.",
        ],
      },
      {
        id: "documente-necesare-bucuresti",
        heading: "4. Documente necesare și timp de aprobare",
        content: [
          "Pentru un credit de nevoi personale în București, documentele standard sunt: cartea de identitate cu domiciliul în București sau Ilfov, adeverința de venit sau fluturaș de salariu pe ultimele 3 luni, extras de cont bancar pe ultimele 3-6 luni și, opțional, ultimul contract de muncă.",
          "Dacă ești PFA, profesie liberală sau ai venituri din chirii ori dividende, vei avea nevoie suplimentar de: declarația unică (formularul 212), ultimele două decizii de impunere ANAF, certificatul de înregistrare la Registrul Comerțului și extrasele de cont ale firmei.",
          "Timpul de aprobare variază între 24 de ore și 7 zile lucrătoare, în funcție de bancă și de complexitatea dosarului. Prin intermediul unui broker, procesul este de regulă mai rapid deoarece dosarul ajunge la bancă complet și corect întocmit din prima, evitând solicitările de completare care întârzie aprobarea.",
        ],
      },
      {
        id: "pasii-obtinere-credit",
        heading:
          "5. Pașii practici pentru obținerea unui credit de nevoi personale în București",
        content: [
          "Pasul 1 — Consultație gratuită: contactezi un broker autorizat (telefonic, online sau la sediu) și discuți suma necesară, destinația fondurilor și situația ta financiară. La CS Credit Advisor, consultația inițială durează 15-20 de minute.",
          "Pasul 2 — Verificare eligibilitate: brokerul verifică profilul tău financiar, interogă Biroul de Credit (o singură dată) și identifică băncile care oferă cele mai bune condiții pentru situația ta specifică.",
          "Pasul 3 — Comparație și alegere: primești o prezentare clară cu 2-4 oferte de la bănci diferite, cu rata lunară, DAE, costul total și condițiile fiecăreia. Alegi oferta care ți se potrivește.",
          "Pasul 4 — Depunere dosar și aprobare: brokerul pregătește dosarul complet și îl depune la banca aleasă. Te informează la fiecare etapă și intervine dacă banca solicită documente suplimentare.",
          "Pasul 5 — Semnare și virare fonduri: după aprobarea finală, te prezinți la bancă pentru semnarea contractului. Banii ajung în contul tău în 1-3 zile lucrătoare de la semnare.",
        ],
      },
      {
        id: "greseli-de-evitat",
        heading:
          "6. Greșeli frecvente când aplici pentru un credit de nevoi personale",
        content: [
          "Să te uiți doar la rata lunară, nu la costul total. O rată mică pe o perioadă lungă poate însemna că plătești aproape dublu față de suma împrumutată. Compară întotdeauna costul total al creditului, nu doar rata.",
          "Să aplici la multe bănci simultan. Fiecare aplicație generează o interogare la Biroul de Credit. Mai mult de 2-3 interogări într-o perioadă scurtă semnalizează băncilor că ești un client \\u201Edisperat\\u201D și îți scade scorul.",
          "Să nu negociezi. Băncile au marjă de negociere, mai ales pentru clienții cu profil bun. Un broker experimentat poate obține reduceri de 0,5-1,5 puncte procentuale la dobândă, ceea ce pe 5 ani înseamnă economii de mii de lei.",
          "Să ignori asigurările obligatorii. Unele bănci cer asigurare de viață sau de șomaj inclusă în DAE. Verifică dacă asigurarea este opțională sau obligatorie și cât adaugă la costul lunar.",
        ],
      },
    ],
    conclusion:
      "Obținerea unui credit de nevoi personale în București nu trebuie să fie un proces stresant sau consumator de timp. Cu un broker autorizat care compară ofertele, negociază dobânzile și te asistă la fiecare pas, ai garanția că primești cel mai bun credit pentru situația ta — fără costuri suplimentare. Consultanții CS Credit Advisor din București sunt disponibili pentru o consultație gratuită și fără obligații, fie la sediu, fie online.",
  },
  {
    slug: "credit-ipotecar-bucuresti-2026",
    title:
      "Credit Ipotecar București 2026: Ghid Complet de la Consultație la Semnare",
    excerpt:
      "Tot ce trebuie să știi despre creditul ipotecar în București în 2026: avans minim, calculul ratei, documente necesare, greșeli de evitat și cum te ajută un broker autorizat să obții cele mai bune condiții.",
    date: "14 Martie 2026",
    readTime: "10 min",
    category: "Ghiduri",
    coverImage: "/blog/couple_receiving_house_keys_1.png",
    sections: [
      {
        id: "credit-ipotecar-bucuresti-2026-intro",
        heading:
          "1. Credit ipotecar în București 2026 — situația actuală a pieței",
        content: [
          "Piața imobiliară din București rămâne cea mai dinamică din România. Prețul mediu pe metru pătrat pentru un apartament nou în zonele semicentrale se situează între 1.800 și 2.500 EUR în 2026, ceea ce înseamnă că un apartament cu 2 camere costă în medie 95.000-140.000 EUR. Pentru majoritatea cumpărătorilor, creditul ipotecar este singura cale realistă de a achiziționa o locuință.",
          "Vestea bună: dobânzile ipotecare au intrat pe un trend descendent după maximele din 2023-2024. În martie 2026, DAE pentru un credit ipotecar standard variază între 5,5% și 8,5%, în funcție de bancă, tipul dobânzii (fixă sau variabilă) și profilul clientului. Programul Noua Casă rămâne o opțiune pentru cei care achiziționează prima locuință.",
          "Procesul de obținere a unui credit ipotecar este mai complex decât cel pentru un credit de consum — implică evaluare imobiliară, ipotecare la notar și mai multe etape de verificare. Tocmai de aceea, asistența unui broker de credite experimentat face diferența între o experiență fluidă și luni de stres.",
        ],
      },
      {
        id: "avans-minim-ipotecar",
        heading: "2. Avansul minim și cum îl calculezi corect",
        content: [
          "Pentru un credit ipotecar standard (fără programul Noua Casă), băncile din București cer un avans minim de 15-25% din valoarea imobilului. Procentul exact depinde de bancă, de tipul imobilului (nou vs. vechi) și de profilul tău financiar.",
          "Prin programul Noua Casă, avansul minim scade la 15% din valoarea proprietății, cu un plafon maxim de 70.000 EUR pentru locuințele noi și 140.000 EUR total. Acest program este accesibil celor care nu dețin o locuință sau dețin maximum 50% dintr-una.",
          "Exemplu concret: pentru un apartament de 120.000 EUR în București, avansul minim de 15% înseamnă 18.000 EUR (aproximativ 89.000 RON). La 25%, avansul ajunge la 30.000 EUR (148.000 RON). Un avans mai mare reduce rata lunară și costul total al creditului.",
          "Un aspect pe care mulți cumpărători îl uită: pe lângă avans, trebuie să ai disponibili încă 3-5% din valoarea imobilului pentru costuri conexe — evaluare imobiliară (500-1.500 RON), taxe notariale, comision imobiliar și asigurări obligatorii.",
        ],
      },
      {
        id: "calculul-ratei-ipotecare",
        heading: "3. Calculul ratei lunare — ce trebuie să știi",
        content: [
          "Rata lunară depinde de trei factori principali: suma împrumutată, durata creditului și dobânda. În 2026, pentru un credit ipotecar de 100.000 EUR pe 30 de ani, cu DAE de 6,5%, rata lunară este de aproximativ 632 EUR (3.100 RON). Pe 25 de ani, aceeași sumă înseamnă o rată de circa 676 EUR (3.330 RON) — mai mare pe lună, dar cu un cost total mai mic.",
          "Regula de bază impusă de BNR: rata lunară totală (toate creditele) nu trebuie să depășească 40% din venitul net al familiei. Pentru un credit ipotecar de 100.000 EUR cu rată de 3.100 RON, ai nevoie de un venit net familial de minimum 7.750 RON.",
          "Dobânda fixă vs. variabilă: dobânda fixă (disponibilă pe 5-10 ani) oferă predictibilitate — știi exact cât plătești. Dobânda variabilă (IRCC + marjă) este de regulă mai mică la început, dar poate fluctua. În 2026, diferența între cele două tipuri este de aproximativ 0,5-1,5 puncte procentuale.",
        ],
      },
      {
        id: "procesul-complet-ipotecar",
        heading:
          "4. Procesul complet de obținere a unui credit ipotecar în București",
        content: [
          "Etapa 1 — Pre-calificare (1-2 zile): Un broker analizează venitul, istoricul de credit și capacitatea ta de îndatorare. Afli exact cât poți împrumuta și la ce condiții, înainte de a căuta apartamentul.",
          "Etapa 2 — Căutare imobil și pre-aprobare (variabil): Cu pre-aprobarea în mână, cauți apartamentul știind exact bugetul disponibil. Vânzătorii și agențiile tratează cu mai multă seriozitate cumpărătorii pre-aprobați.",
          "Etapa 3 — Antecontract și evaluare (7-14 zile): După ce alegi apartamentul, semnezi antecontractul. Banca trimite un evaluator autorizat care stabilește valoarea de piață a imobilului. Creditul se acordă pe baza valorii mai mici dintre prețul de achiziție și valoarea din evaluare.",
          "Etapa 4 — Analiză dosar și aprobare finală (7-21 zile): Banca verifică toate documentele, solicită eventuale completări și emite decizia finală de aprobare cu condițiile exacte ale creditului.",
          "Etapa 5 — Semnare contract de credit și act de vânzare-cumpărare (1-2 zile): Te prezinți la notar pentru semnarea ambelor contracte. Ipoteca se înscrie în Cartea Funciară. Suma creditului este virată vânzătorului.",
        ],
      },
      {
        id: "documente-ipotecar",
        heading: "5. Documente necesare pentru un credit ipotecar",
        content: [
          "Documente personale: carte de identitate, certificat de căsătorie (dacă este cazul), acord ANAF și declarații pe propria răspundere privind situația financiară.",
          "Documente de venit: pentru salariați — adeverință de venit și extrase de cont pe 6 luni; pentru PFA sau profesii liberale — declarația unică, decizii de impunere pe ultimii 2 ani, extrase de cont firmă și personal.",
          "Documente proprietate: antecontract de vânzare-cumpărare, extras de Carte Funciară, certificat energetic, cadastru și intabulare actualizate.",
          "Un broker experimentat te ajută să pregătești dosarul complet din prima, evitând cele mai frecvente cauze de întârziere: documente expirate, adeverințe incomplete sau extrase de cont insuficiente ca perioadă.",
        ],
      },
      {
        id: "greseli-ipotecar",
        heading: "6. Greșeli comune de evitat la creditul ipotecar",
        content: [
          "Să nu faci pre-calificarea înainte de a căuta apartamentul. Fără ea, riști să te îndrăgostești de o proprietate pe care nu ți-o permiți sau să pierzi oportunități pentru că nu ai documente pregătite.",
          "Să alegi banca doar după dobândă, ignorând costurile ascunse. Comisionul de evaluare, asigurarea obligatorie, comisionul de administrare lunară și taxele notariale pot adăuga câteva mii de lei la costul total.",
          "Să te extinzi la maxim cu rata. Doar pentru că banca aprobă un anumit plafon nu înseamnă că este confortabil. Lasă o marjă de 20-30% din venit pentru cheltuieli neprevăzute, mai ales cu dobândă variabilă.",
          "Să nu negociezi dobânda. Băncile au marjă de negociere, iar un broker cu volum mare de dosare are putere de negociere semnificativ mai mare decât un client individual.",
        ],
      },
    ],
    conclusion:
      "Creditul ipotecar în București în 2026 este accesibil, dar complexitatea procesului necesită pregătire și informare. De la calculul avansului minim și alegerea între dobândă fixă sau variabilă, până la pregătirea dosarului și negocierea condițiilor — fiecare etapă contează. Consultanții CS Credit Advisor te ghidează gratuit prin întregul proces, de la prima consultație până la semnarea la notar, asigurându-se că obții cele mai bune condiții disponibile pe piață.",
  },
  {
    slug: "broker-credite-bucuresti",
    title:
      "Broker de Credite București: Ce Face, De Ce E Gratuit și Cum Te Ajută",
    excerpt:
      "Ce este un broker de credite în București, cum te ajută să economisești bani și timp, de ce serviciul este gratuit pentru tine și cum se compară cu a merge singur la bancă.",
    date: "12 Martie 2026",
    readTime: "8 min",
    category: "Ghiduri",
    coverImage: "/blog/financial_advisor_client_consultation_1.png",
    sections: [
      {
        id: "ce-face-broker-credite-bucuresti",
        heading: "1. Ce face un broker de credite în București",
        content: [
          "Un broker de credite este un intermediar financiar autorizat care lucrează în numele tău, nu al băncii. Rolul său este să analizeze piața creditelor, să compare ofertele băncilor partenere și să îți găsească soluția de finanțare optimă — fie că ai nevoie de un credit de nevoi personale, ipotecar, auto sau de refinanțare.",
          "În București, un broker autorizat colaborează de regulă cu 8-15 bănci și instituții financiare. Aceasta înseamnă acces la o gamă largă de produse, de la creditele standard ale marilor bănci (BCR, BRD, Banca Transilvania, ING, Raiffeisen) până la ofertele de nișă ale băncilor mai mici, care pot fi surprinzător de competitive.",
          "Pe lângă compararea ofertelor, brokerul te asistă cu pregătirea dosarului, depunerea la bancă, urmărirea aprobării și rezolvarea eventualelor probleme care apar pe parcurs. Practic, ai un specialist dedicat care se ocupă de tot ce ține de credit, astfel încât tu să nu pierzi timp și energie.",
        ],
      },
      {
        id: "de-ce-gratuit",
        heading: "2. De ce serviciul de broker este gratuit pentru client",
        content: [
          "Aceasta este întrebarea pe care o auzim cel mai des. Răspunsul este simplu: brokerul este plătit de banca la care semnezi contractul de credit, nu de tine. Banca plătește un comision de intermediere, de obicei un procent din suma creditului, ca recompensă pentru faptul că brokerul i-a adus un client calificat.",
          "Pentru bancă, lucrul cu un broker este eficient: primește dosare complete, bine pregătite, cu clienți pre-calificați. Banca economisește timp și resurse pe care altfel le-ar folosi pentru promovare și procesarea dosarelor incomplete sau neeligibile.",
          "Costul creditului tău rămâne identic indiferent dacă aplici direct sau prin broker. Dobânda, comisioanele și condițiile sunt aceleași — ba chiar, în multe cazuri, brokerul negociază condiții mai bune decât cele standard, datorită volumului de dosare pe care îl aduce băncii.",
        ],
      },
      {
        id: "broker-vs-direct-banca",
        heading: "3. Comparație: broker de credite vs. direct la bancă",
        content: [
          "Acces la oferte: la bancă vezi o singură ofertă; prin broker compari 8-15 bănci simultan. Aceasta este cea mai importantă diferență, pentru că o variație de 1-2% la DAE poate însemna zeci de mii de lei pe durata unui credit ipotecar.",
          "Timp investit: dacă mergi singur, trebuie să vizitezi fizic 3-5 sucursale, să completezi formulare diferite și să aștepți oferta fiecărei bănci. Prin broker, depui un singur set de documente și primești comparația în 1-2 zile lucrătoare.",
          "Impact asupra scorului de credit: fiecare bancă la care aplici face o interogare la Biroul de Credit. Mai multe interogări într-un interval scurt îți scad scorul. Brokerul face o singură interogare, indiferent la câte bănci compară.",
          "Negociere: un client individual are putere limitată de negociere. Un broker cu sute de dosare procesate anual are relații directe cu echipele de risc ale băncilor și poate obține reduceri de dobândă sau eliminarea unor comisioane.",
          "Cost pentru client: în ambele cazuri, zero costuri suplimentare. Singura diferență este că prin broker ai mai multe șanse să primești oferta optimă.",
        ],
      },
      {
        id: "cum-alegi-broker",
        heading: "4. Cum alegi un broker de credite de încredere în București",
        content: [
          "Verifică autorizarea. Un broker serios este înregistrat în Registrul Intermediarilor de Credite de la Autoritatea Națională pentru Protecția Consumatorilor (ANPC). Cere numărul de înregistrare și verifică-l online.",
          "Număr de bănci partenere. Cu cât are mai multe parteneriate bancare, cu atât comparația este mai relevantă. Un broker bun are minimum 5-8 bănci partenere active.",
          "Transparență. Brokerul trebuie să-ți explice clar cum funcționează remunerarea sa, care sunt opțiunile tale și de ce recomandă o anumită ofertă. Dacă simți presiune să semnezi rapid, caută altundeva.",
          "Experiență și recenzii. Verifică recenziile Google, întreabă de numărul de dosare procesate și de rata de aprobare. Un broker experimentat din București are minimum câteva sute de dosare procesate cu succes.",
        ],
      },
      {
        id: "intrebari-frecvente-broker",
        heading: "5. Întrebări frecvente despre brokerii de credite",
        content: [
          "Brokerul poate garanta aprobarea creditului? Nu. Niciun broker serios nu garantează aprobarea, deoarece decizia finală aparține băncii. Ce poate face este să maximizeze șansele de aprobare alegând banca și produsul potrivite profilului tău.",
          "Pot folosi un broker dacă am deja o ofertă de la bancă? Da, și este chiar recomandat. Brokerul poate verifica dacă oferta primită este competitivă sau poate negocia condiții mai bune la aceeași bancă sau la una concurentă.",
          "Cât durează procesul prin broker? Pentru un credit de nevoi personale, de la prima consultație la virarea banilor: 3-10 zile lucrătoare. Pentru un credit ipotecar: 3-6 săptămâni, în funcție de complexitatea tranzacției.",
          "Ce se întâmplă dacă sunt refuzat? Brokerul analizează motivul refuzului și caută soluții alternative — fie la altă bancă cu criterii diferite, fie după ce rezolvi problema identificată (de exemplu, achitarea unei datorii restante).",
        ],
      },
    ],
    conclusion:
      "Un broker de credite din București este aliatul tău financiar — lucrează pentru tine, nu pentru bancă, și serviciul este complet gratuit. Fie că ai nevoie de un credit personal, ipotecar sau de refinanțare, un broker autorizat îți economisește timp, bani și stres. CS Credit Advisor colaborează cu toate băncile majore din România și oferă consultanță gratuită, fără obligații. Contactează-ne pentru a afla ce oferte ai disponibile.",
  },
  {
    slug: "refinantare-credit-bucuresti-2026",
    title:
      "Refinanțare Credit București 2026: Când Merită, Cât Economisești și Ce Pași Urmezi",
    excerpt:
      "Ghid complet despre refinanțarea creditelor în București în 2026: când are sens să refinanțezi, exemplu numeric cu economii concrete, pași practici și documente necesare.",
    date: "10 Martie 2026",
    readTime: "9 min",
    category: "Sfaturi",
    coverImage: "/blog/person_reviewing_savings_growth_1.png",
    sections: [
      {
        id: "refinantare-credit-bucuresti-2026-intro",
        heading:
          "1. Refinanțare credit în București 2026 — de ce este momentul potrivit",
        content: [
          "Dacă ai contractat un credit în perioada 2022-2024, când dobânzile erau la maxime istorice, 2026 poate fi anul în care refinanțarea îți aduce economii semnificative. Dobânda de referință IRCC a scăzut de la vârful de 5,9% din 2023 la aproximativ 5,8% în martie 2026, iar concurența dintre bănci a dus la marje mai mici, rezultând DAE-uri cu 1-3 puncte procentuale mai mici decât în urmă cu doi ani.",
          "Refinanțarea înseamnă contractarea unui credit nou, la condiții mai bune, pentru a plăti integral creditul vechi. Poți refinanța la aceeași bancă (renegociere) sau la o altă bancă. Noul credit poate avea dobândă mai mică, rată lunară redusă, perioadă de rambursare diferită sau o combinație a acestor avantaje.",
          "În București, refinanțarea este accesibilă prin majoritatea băncilor majore și poate fi aplicată atât pentru credite de nevoi personale, cât și pentru credite ipotecare, auto sau carduri de credit cu sold mare.",
        ],
      },
      {
        id: "cand-merita-refinantare",
        heading: "2. Când merită să refinanțezi — 5 situații concrete",
        content: [
          "Dobânda actuală a creditului tău este cu cel puțin 1,5-2 puncte procentuale mai mare decât ofertele curente. Aceasta este regula de bază: dacă diferența este mai mică, economiile s-ar putea să nu acopere costurile refinanțării.",
          "Ai mai multe credite active și vrei să le consolidezi într-o singură rată. Consolidarea simplifică managementul financiar și, de obicei, reduce costul total lunar prin obținerea unei dobânzi medii mai mici.",
          "Ți-ai îmbunătățit profilul financiar față de momentul contractării. Dacă venitul a crescut, ai avansat profesional sau ai rezolvat eventuale probleme la Biroul de Credit, poți accesa acum condiții pe care nu le aveai anterior.",
          "Ai un credit cu dobândă variabilă și vrei predictibilitate. Poți refinanța într-un credit cu dobândă fixă pe 5-10 ani, protejându-te de eventuale creșteri viitoare ale IRCC.",
          "Mai ai cel puțin 3-5 ani de rambursare. Dacă ești aproape de finalul creditului, costurile refinanțării (comisioane, taxe notariale pentru ipotecar) s-ar putea să depășească economiile.",
        ],
      },
      {
        id: "exemplu-numeric-refinantare",
        heading:
          "3. Exemplu numeric: cât economisești la o refinanțare în 2026",
        content: [
          "Scenariul: credit de nevoi personale contractat în 2023. Suma inițială: 80.000 RON pe 7 ani (84 luni). Dobândă fixă 12% DAE. Sold rămas în martie 2026: aproximativ 58.000 RON, cu încă 48 de luni de plată. Rata actuală: 1.425 RON/lună. Total de plată rămas: 68.400 RON.",
          "Refinanțare în martie 2026: sold 58.000 RON pe 48 de luni cu DAE 8,5% (ofertă obținută prin broker). Rata nouă: 1.430 RON/lună (practic identică) DAR pe o perioadă redusă cu implicit rambursare anticipată. Alternativ, pe același termen de 48 luni: rata scade la circa 1.285 RON/lună.",
          "Economie lunară: aproximativ 140 RON. Economie totală pe 48 de luni: 6.720 RON. Din aceasta scazi comisionul de rambursare anticipată a creditului vechi (maximum 1% din sold = 580 RON) și obții o economie netă de peste 6.000 RON.",
          "Pentru un credit ipotecar, economiile sunt și mai semnificative datorită sumelor mai mari și perioadelor mai lungi. O reducere de 1,5 puncte procentuale la un credit ipotecar de 80.000 EUR pe 25 de ani poate genera economii de 15.000-20.000 EUR pe durata creditului.",
        ],
      },
      {
        id: "pasi-refinantare",
        heading: "4. Pașii practici pentru refinanțare în București",
        content: [
          "Pasul 1 — Analiza creditului actual: adună contractul de credit, graficul de rambursare actualizat și ultimul extras de cont. Notează: sold rămas, dobândă curentă, luni rămase și comisionul de rambursare anticipată (dacă există).",
          "Pasul 2 — Consultație cu un broker: un broker autorizat calculează gratuit dacă refinanțarea este avantajoasă. La CS Credit Advisor, analiza include comparația a minimum 5 oferte de refinanțare de la bănci diferite.",
          "Pasul 3 — Alegerea ofertei și depunerea dosarului: odată ce ai ales oferta optimă, brokerul pregătește dosarul complet. Documentele sunt similare cu cele pentru un credit nou: CI, adeverință venit, extrase de cont plus contractul de credit existent și graficul de rambursare.",
          "Pasul 4 — Aprobare și plata creditului vechi: după aprobarea noului credit, banca nouă virează suma direct către banca veche pentru închiderea creditului. Primești confirmarea că vechiul credit a fost închis.",
          "Pasul 5 — Noul grafic de rambursare: începi să plătești rata nouă, mai mică, la banca nouă. Întregul proces durează între 5 și 15 zile lucrătoare pentru creditele de consum și 3-6 săptămâni pentru cele ipotecare.",
        ],
      },
      {
        id: "costuri-refinantare",
        heading: "5. Costuri ascunse și capcane de evitat la refinanțare",
        content: [
          "Comisionul de rambursare anticipată: conform legislației, pentru creditele de consum comisionul este de maximum 1% din soldul rambursat anticipat (dacă mai sunt peste 12 luni până la scadență) sau 0,5% (dacă sunt sub 12 luni). Pentru creditele ipotecare contractate după 2009, comisionul de rambursare anticipată este zero.",
          "Costurile noului credit: comision de analiză dosar (0-200 RON), comision de administrare lunară (0-25 RON) și, pentru creditele ipotecare, taxe notariale pentru radierea vechii ipoteci și înscrierea celei noi (500-2.000 RON).",
          "Asigurările: noul credit poate impune o asigurare de viață sau de proprietate diferită de cea actuală. Compară costul asigurărilor înainte de a lua decizia finală.",
          "Capcana perioadei extinse: unele bănci oferă o rată lunară mult mai mică, dar extind perioada de rambursare. Verifică întotdeauna costul total al creditului, nu doar rata. O rată mai mică pe 7 ani poate costa mai mult decât una mai mare pe 4 ani.",
        ],
      },
      {
        id: "refinantare-prin-broker",
        heading: "6. De ce să refinanțezi prin broker, nu singur",
        content: [
          "Brokerul compară simultan ofertele de refinanțare ale tuturor băncilor partenere și identifică cea mai avantajoasă opțiune pentru profilul tău specific. Calculează precis economiile nete, luând în considerare toate costurile implicate.",
          "Are experiență cu dosarele de refinanțare și știe exact ce bănci acceptă anumite profiluri — de exemplu, care bănci refinanțează credite cu istoric de plată imperfect sau care oferă cele mai bune condiții pentru refinanțarea creditelor ipotecare.",
          "Negociază condiții preferențiale datorită volumului de dosare. Un broker experimentat din București poate obține reduceri de dobândă care nu sunt disponibile clienților individuali.",
          "Serviciul este gratuit pentru tine — brokerul este remunerat de banca la care se face refinanțarea. Nu există costuri suplimentare sau comisioane ascunse.",
        ],
      },
    ],
    conclusion:
      "Refinanțarea creditului în București în 2026 poate fi una dintre cele mai inteligente decizii financiare, mai ales dacă ai contractat un credit în perioada de dobânzi ridicate din 2022-2024. Cu economii potențiale de mii sau zeci de mii de lei, merită să verifici dacă ai opțiuni mai bune. Consultanții CS Credit Advisor calculează gratuit economiile tale potențiale și te ghidează prin fiecare pas al refinanțării, fără costuri și fără obligații.",
  },
  {
    slug: "credit-personal-2026-ghid-complet",
    title: "Cum Să Obții un Credit de Nevoi Personale în 2026: Ghid Complet",
    coverImage: "/blog/romanian_couple_bank_loan_1.png",
    excerpt:
      "Tot ce trebuie să știi despre creditele personale în 2026: condiții, dobânzi, documente și cum să obții cea mai bună ofertă pentru situația ta.",
    date: "5 Martie 2026",
    readTime: "8 min",
    category: "Ghiduri",
    sections: [
      {
        id: "ce-este",
        heading: "1. Ce este un credit de nevoi personale?",
        content: [
          "Un credit de nevoi personale este un împrumut acordat de o bancă sau instituție financiară fără a necesita o garanție imobiliară. Poate fi utilizat pentru orice scop — renovare, vacanță, achiziții mari sau situații neprevăzute.",
          "În 2026, băncile din România oferă credite personale cu sume între 1.000 și 150.000 RON și perioade de rambursare de la 6 luni la 10 ani. Dobânzile variază în funcție de bancă, profil financiar și tipul de credit ales.",
        ],
      },
      {
        id: "conditii",
        heading: "2. Condiții de eligibilitate",
        content: [
          "Pentru a obține un credit de nevoi personale în 2026, vei avea nevoie de: vârsta între 18 și 70 de ani la finalul creditului, venituri stabile și demonstrabile, un istoricul de credit acceptabil și documente de identitate valabile.",
          "Un profil financiar solid — venituri stabile, grad de îndatorare redus și istoricul de credit curat — îți oferă acces la cele mai competitive dobânzi din piață. Un broker autorizat te poate ajuta să îți prezinți dosarul în cel mai avantajos mod posibil.",
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
      "Obținerea unui credit de nevoi personale în 2026 nu trebuie să fie un proces complicat. Cu documentele corecte, o comparație atentă a ofertelor și sprijinul unui broker autorizat, poți accesa finanțarea de care ai nevoie în condiții avantajoase. Consultanții CS Credit Advisor sunt disponibili să te ghideze gratuit prin fiecare pas al procesului.",
  },
  {
    slug: "prima-casa-noua-casa-ghid-comparativ",
    title: "Prima Casă sau Noua Casă: Cum Alegi Cel Mai Bun Program",
    coverImage: "/blog/couple_receiving_house_keys_1.png",
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
          "Băncile participante evaluează venitul familiei, gradul de îndatorare și istoricul de plată. Un dosar bine pregătit, cu documente complete și un scor de credit bun, crește semnificativ șansele de aprobare în condiții avantajoase.",
        ],
      },
    ],
    conclusion:
      "Dacă îndeplinești condițiile, Noua Casă poate fi o soluție avantajoasă pentru achiziționarea primei locuințe. Consultanții CS Credit Advisor te ajută gratuit să determini eligibilitatea și să pregătești dosarul.",
  },
  {
    slug: "biroul-de-credit-explicat",
    title: "Ce Este Biroul de Credit și Cum Îți Afectează Dosarul",
    coverImage: "/blog/credit_score.png",
    excerpt:
      "Cum funcționează Biroul de Credit în România, ce înseamnă un scor bun și cum îți menții și îmbunătățești scorul pentru a accesa cele mai bune oferte de creditare.",
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
        id: "imbunatatire-scor",
        heading: "3. Cum îți menții și îmbunătățești scorul de credit",
        content: [
          "Cel mai eficient mod de a menține un scor ridicat este simplu: plătești ratele la timp, în fiecare lună. Chiar și o singură întârziere de 30 de zile poate reduce scorul cu zeci de puncte.",
          "Evită să aplici la mai multe bănci simultan — fiecare interogare la Biroul de Credit îți afectează ușor scorul. Lucrând cu un broker, se face o singură interogare, în numele tău, negociind cu toate băncile partenere simultan.",
          "Menține gradul de îndatorare sub 40% din venitul net. Dacă ai carduri de credit, folosește-le moderat. Un raport bun între limita disponibilă și suma utilizată semnalează băncilor un comportament financiar responsabil.",
        ],
      },
    ],
    conclusion:
      "Înțelegerea Biroului de Credit te ajută să iei decizii financiare mai bune și să accesezi cele mai competitive oferte din piață. Consultanții CS Credit Advisor îți analizează gratuit profilul și te ghidează să obții creditul în cele mai avantajoase condiții posibile.",
  },
  {
    slug: "refinantare-credit-ghid",
    title: "Refinanțare Credit: Când Merită și Cum Procedezi",
    coverImage: "/blog/person_reviewing_savings_growth_1.png",
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
    slug: "cum-obtii-cel-mai-bun-credit-bucuresti",
    title: "Cum Obții Cel Mai Bun Credit în București: 6 Sfaturi Practice pentru 2026",
    coverImage: "/blog/man_reviewing_report.png",
    excerpt:
      "Vrei cel mai avantajos credit de nevoi personale sau ipotecar din București? Iată 6 sfaturi concrete pentru a obține dobânda minimă și aprobarea rapidă.",
    date: "15 Ianuarie 2026",
    readTime: "6 min",
    category: "Sfaturi",
    sections: [
      {
        id: "pregateste-dosarul",
        heading: "1. Pregătește dosarul înainte de a aplica",
        content: [
          "Băncile aprobă cel mai rapid dosarele complete și bine organizate. Adună din timp: carte de identitate valabilă, ultimele 3 fluturași de salariu sau adeverință de venit, extrasele de cont pe ultimele 3-6 luni și, dacă este cazul, contractul de muncă.",
          "Verifică-ți raportul de la Biroul de Credit înainte de aplicare — îl poți solicita gratuit o dată pe an. Asigură-te că datele sunt corecte și că nu există erori care ar putea afecta decizia băncii.",
        ],
      },
      {
        id: "grad-indatorare",
        heading: "2. Calculează-ți gradul de îndatorare",
        content: [
          "Băncile din România acceptă un grad de îndatorare de maximum 40-45% din venitul net al familiei. Înainte de a aplica, adună toate ratele lunare existente și verifică dacă suma noii rate se încadrează în acest plafon.",
          "Dacă ai carduri de credit active, acestea sunt incluse în calculul gradului de îndatorare chiar dacă nu le folosești. Închiderea unui card neutilizat înainte de aplicare poate îmbunătăți semnificativ eligibilitatea ta.",
        ],
      },
      {
        id: "compara-dae",
        heading: "3. Compară DAE, nu doar dobânda nominală",
        content: [
          "Dobânda Anuală Efectivă (DAE) include toate costurile creditului: dobânda, comisioanele de administrare, asigurările obligatorii și orice alte taxe. Două credite cu aceeași dobândă nominală pot avea DAE foarte diferite.",
          "În 2026, DAE pentru creditele de nevoi personale variază între 7,5% și 16% în funcție de bancă și profilul clientului. O diferență de 2 puncte procentuale la DAE înseamnă mii de lei în plus pe durata unui credit de 80.000 RON.",
        ],
      },
      {
        id: "negociaza",
        heading: "4. Negociază — băncile au marjă de flexibilitate",
        content: [
          "Clienții cu venituri stabile și scor de credit bun au putere de negociere. Băncile preferă să ofere condiții mai bune unui client calitativ decât să-l piardă în favoarea unui competitor.",
          "Un broker de credite autorizat negociază în numele tău cu toate băncile partenere simultan, beneficiind de condiții preferențiale datorită volumului de dosare procesate — condiții pe care nu le-ai putea obține singur la ghișeu.",
        ],
      },
      {
        id: "moment-potrivit",
        heading: "5. Alege momentul potrivit pentru aplicare",
        content: [
          "Evită să aplici la credit imediat după ce ai schimbat locul de muncă. Băncile preferă o vechime de minimum 6-12 luni la actualul angajator. Dacă ești la un job nou, mai bine aștepți câteva luni pentru condiții mai bune.",
          "Aplică atunci când venitul tău este la nivel maxim și îndatorarea minimă. Dacă știi că urmează o majorare salarială sau că vei închide un credit existent, poate fi avantajos să aștepți acel moment.",
        ],
      },
      {
        id: "broker-vs-direct",
        heading: "6. Broker vs. direct la bancă — ce alegi?",
        content: [
          "Mergând direct la o singură bancă, primești o singură ofertă. Prin broker, primești simultan ofertele tuturor băncilor partenere, comparate obiectiv. Serviciul este 100% gratuit pentru tine — brokerul este remunerat de bancă.",
          "În plus, brokerul face o singură interogare la Biroul de Credit în locul mai multor interogări individuale — protejând astfel scorul tău de credit pe durata procesului de comparare.",
        ],
      },
    ],
    conclusion:
      "Obținerea celui mai bun credit în București în 2026 nu ține de noroc, ci de pregătire. Cu dosarul corect, la momentul potrivit și cu sprijinul unui broker autorizat, ai toate șansele să obții dobânda minimă disponibilă pe piață. Consultanții CS Credit Advisor compară gratuit toate ofertele și negociază în numele tău.",
  },
  {
    slug: "top-banci-romania-2026",
    title: "Top Bănci România 2026: Comparație Dobânzi Credite Personale",
    coverImage: "/blog/financial_advisor_client_consultation_1.png",
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
