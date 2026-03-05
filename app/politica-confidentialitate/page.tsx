export default function PoliticaConfidentialitate() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-navy font-dm">
      <h1 className="font-playfair text-3xl font-bold mb-2">Politică de Confidențialitate</h1>
      <p className="text-muted text-sm mb-10">Ultima actualizare: iunie 2025</p>

      <section className="space-y-8 text-[15px] leading-relaxed text-charcoal">

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">1. Identitatea Operatorului</h2>
          <p>
            <strong>ACS CREDIT ADVISOR S.R.L.</strong>, cu sediul social în Municipiul București, Sector 6,
            Bld. Iuliu Maniu, nr. 94-100, camera 1, bl. 18, sc. 2, CUI 53290320, este operatorul datelor
            cu caracter personal colectate prin intermediul site-ului <strong>cscreditadvisor.com</strong>.
          </p>
          <p className="mt-2">
            Contact: <a href="mailto:contact@cscreditadvisor.ro" className="text-gold underline">contact@cscreditadvisor.ro</a>
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">2. Ce Date Colectăm</h2>
          <p>Prin completarea formularului de pe site, colectăm următoarele date:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Nume și prenume</li>
            <li>Număr de telefon</li>
            <li>Adresă de email (opțional)</li>
            <li>Situația curentă a creditului</li>
            <li>Tipul de credit dorit</li>
            <li>Vechimea la locul de muncă</li>
            <li>Venitul net lunar</li>
            <li>Mențiuni suplimentare (opțional)</li>
          </ul>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">3. Scopul Prelucrării</h2>
          <p>Datele colectate sunt utilizate exclusiv în scopul:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Contactării dumneavoastră în vederea oferirii unei consultații gratuite</li>
            <li>Identificării celei mai potrivite soluții de creditare</li>
            <li>Transmiterii de informații relevante despre produsele bancare disponibile</li>
          </ul>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">4. Temeiul Legal</h2>
          <p>
            Prelucrarea datelor se realizează pe baza consimțământului explicit acordat de dumneavoastră
            prin bifarea căsuței de acord din formular, în conformitate cu Art. 6 alin. (1) lit. a) din
            Regulamentul (UE) 2016/679 (GDPR).
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">5. Durata Stocării</h2>
          <p>
            Datele dumneavoastră vor fi stocate pentru o perioadă de maximum <strong>2 ani</strong> de la
            data colectării, sau până la retragerea consimțământului, oricare dintre acestea intervine mai devreme.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">6. Destinatarii Datelor</h2>
          <p>
            Datele dumneavoastră nu vor fi vândute sau transferate către terți în scopuri comerciale.
            Acestea pot fi accesate de către consultanții ACS Credit Advisor S.R.L. și, în limita necesară,
            de instituțiile bancare partenere în vederea elaborării unei oferte de creditare, cu acordul
            dumneavoastră prealabil.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">7. Drepturile Dumneavoastră</h2>
          <p>Conform GDPR, aveți următoarele drepturi:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Dreptul de acces</strong> — să solicitați o copie a datelor deținute despre dumneavoastră</li>
            <li><strong>Dreptul la rectificare</strong> — să corectați datele inexacte</li>
            <li><strong>Dreptul la ștergere</strong> — să solicitați ștergerea datelor ("dreptul de a fi uitat")</li>
            <li><strong>Dreptul la restricționarea prelucrării</strong></li>
            <li><strong>Dreptul la portabilitatea datelor</strong></li>
            <li><strong>Dreptul de a retrage consimțământul</strong> oricând, fără a afecta legalitatea prelucrării anterioare</li>
          </ul>
          <p className="mt-3">
            Pentru exercitarea acestor drepturi, ne puteți contacta la:{" "}
            <a href="mailto:contact@cscreditadvisor.ro" className="text-gold underline">contact@cscreditadvisor.ro</a>
          </p>
          <p className="mt-2">
            Aveți de asemenea dreptul de a depune o plângere la{" "}
            <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>{" "}
            — <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-gold underline">www.dataprotection.ro</a>.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">8. Securitatea Datelor</h2>
          <p>
            Datele dumneavoastră sunt stocate în siguranță prin intermediul platformei Supabase, care
            utilizează criptare SSL/TLS și respectă standardele europene de securitate a datelor.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">9. Cookie-uri</h2>
          <p>
            Informații detaliate despre utilizarea cookie-urilor se regăsesc în{" "}
            <a href="/politica-cookies" className="text-gold underline">Politica de Cookie-uri</a>.
          </p>
        </div>

        <div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-3">10. Modificări</h2>
          <p>
            Ne rezervăm dreptul de a actualiza această politică. Orice modificare va fi publicată pe
            această pagină cu data actualizării.
          </p>
        </div>

      </section>
    </main>
  );
}
