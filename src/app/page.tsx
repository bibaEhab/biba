import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative bg-habibauiuxframerwebsitewhite-black">
      <div className="relative w-full">
        <Hero />
        <Navbar />
      </div>

      <main className="flex flex-col w-full items-center relative bg-habibauiuxframerwebsiteblack">
        <About />
        <FAQ />
        <Services />
        <Pricing />
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}