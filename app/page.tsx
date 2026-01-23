import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import FeaturedOpportunities from "@/components/FeaturedOpportunities";
import HowItWorks from "@/components/HowItWorks";
import TriCards from "@/components/TriCards";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import "./globals.css";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Trust Section */}
      <TrustSection />

      {/* Featured Listings */}
      <FeaturedOpportunities />

      {/* How It Works */}
      <HowItWorks />

      {/* Tri Cards Section */}
      <TriCards />

      {/* Testimonials */}
      <Testimonials />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />

      {/* Auth Modal (Global) */}
      <AuthModal />
    </>
  );
}
