import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OutcomesStrip from "@/components/OutcomesStrip";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import FlagshipProduct from "@/components/FlagshipProduct";
import AboutFounder from "@/components/AboutFounder";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <OutcomesStrip />
        <Services />
        <Industries />
        <WhyUs />
        <Process />
        <FlagshipProduct />
        <AboutFounder />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
