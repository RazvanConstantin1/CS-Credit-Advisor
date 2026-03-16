import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import Calculator from "@/components/sections/Calculator";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/ui/CookieBanner";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustSection />
      <Calculator />
      <About />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <CookieBanner />
    </main>
  );
}
