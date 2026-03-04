import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustSection from "@/components/sections/TrustSection";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustSection />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
