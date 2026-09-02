import React from "react";
import { Hero } from "@/components/Hero";
import { BrandTicker } from "@/components/BrandTicker";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsBanner } from "@/components/StatsBanner";
import { AboutSection } from "@/components/AboutSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { AuditDialog } from "@/components/AuditDialog";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Client Logo Continuous Animated Ticker */}
      <BrandTicker />

      {/* 3. Services Section (What We Do) with Scroll Stagger */}
      <ServicesSection />

      {/* 4. Stats Navy Banner */}
      <StatsBanner />

      {/* 5. Why Choose Us / About Section */}
      <AboutSection />

      {/* 6. Portfolio / Our Work Section */}
      <PortfolioSection />

      {/* 7. Animated Testimonials Slider */}
      <Testimonials />

      {/* 8. Blue CTA Banner (Ready to Grow Your Business?) */}
      <CTASection />

      {/* Interactive Free Audit Modal */}
      <AuditDialog />
    </main>
  );
}