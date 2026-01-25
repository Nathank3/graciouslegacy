import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home | Grace Mithamo - PR & Admin Specialist",
  description: "Elevate your business with professional Public Relations and Executive Administrative support. Based in Nairobi, serving clients globally.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <PortfolioSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
