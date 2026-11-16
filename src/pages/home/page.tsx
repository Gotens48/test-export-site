import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/pages/home/components/Header";
import Hero from "@/pages/home/components/Hero";
import Presentation from "@/pages/home/components/Presentation";
import Services from "@/pages/home/components/Services";
import Realisations from "@/pages/home/components/Realisations";
import Process from "@/pages/home/components/Process";
import About from "@/pages/home/components/About";
import Pricing from "@/pages/home/components/Pricing";
import Contact from "@/pages/home/components/Contact";
import Footer from "@/pages/home/components/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <main className="min-h-screen bg-background-50 text-foreground-950 font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Presentation />
      <Services />
      <Realisations />
      <Process />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}