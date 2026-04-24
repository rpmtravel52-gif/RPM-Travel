import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WAFloat from "@/components/WAFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <WhyUs />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
