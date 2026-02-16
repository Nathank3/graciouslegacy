import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home | Grace Mithamo - PR Specialist & Executive Support",
  description: "Elevate your business with professional PR, corporate writing, virtual assistance, and brand management services. Based in Nairobi, serving clients globally.",
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
