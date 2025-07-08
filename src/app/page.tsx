import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="flex flex-col w-full  relative bg-habibauiuxframerwebsitewhite-black">
      <div className="relative w-full ">
      <section id="hero">
      <Hero />
      </section>
      <Navbar />
      </div>

      <main className="flex flex-col w-full pb-[24px] items-center relative bg-habibauiuxframerwebsiteblack">
        <section id="about">
          <About />
        </section>
        <section id="Services">
        <Services />
        </section>
        <section id="FAQ">
        <FAQ />
        </section>
        <section id="Pricing">
        <Pricing />
        </section>
        <section id="ContactCTA">
        <ContactCTA />
        </section>
        <Footer />
      </main>
    </div>
  );
}