"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Zap,
  Code2,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function WebsiteDesignPage() {
  const capabilities = [
    {
      title: "Next.js & Full-Stack Web Apps",
      desc: "Blazing fast server-rendered web applications optimized for Core Web Vitals and lightning quick load times.",
      icon: Code2,
    },
    {
      title: "High-Converting Landing Pages",
      desc: "Dedicated ad campaign landing pages written and designed specifically to maximize PPC conversion rates.",
      icon: Zap,
    },
    {
      title: "E-Commerce & Shopify Stores",
      desc: "Seamless shopping experiences with 1-click checkouts, payment gateway integrations, and inventory sync.",
      icon: Globe,
    },
    {
      title: "Mobile-First Responsive UI/UX",
      desc: "Flawless mobile, tablet, and desktop interfaces with intuitive user flows and modern visual aesthetics.",
      icon: Smartphone,
    },
  ];

  const packages = [
    {
      name: "Starter Business",
      price: "₹25,000",
      desc: "Perfect for local businesses & professionals needing a fast, modern digital presence.",
      features: [
        "Up to 5 Custom Pages",
        "Mobile-Responsive Design",
        "Contact & Lead Forms",
        "Basic SEO Setup",
        "1 Year Free Hosting & SSL",
      ],
    },
    {
      name: "Growth Scale",
      popular: true,
      price: "₹55,000",
      desc: "Ideal for growing companies wanting high conversion rates, CMS, and dynamic features.",
      features: [
        "Up to 15 Custom Pages",
        "Next.js / React High-Speed Stack",
        "Blog & CMS Integration",
        "Advanced Conversion Copywriting",
        "Analytics & Heatmap Tracking",
        "Speed Optimization (<1.2s load)",
      ],
    },
    {
      name: "Custom Enterprise",
      price: "₹1,20,000+",
      desc: "For large organizations, SaaS platforms, and high-volume e-commerce stores.",
      features: [
        "Unlimited Custom Pages",
        "Full-Stack Web App Development",
        "CRM & Database Integrations",
        "Multi-Language & Global CDN",
        "Dedicated Engineering Support",
      ],
    },
  ];

  return (
    <main className="pt-24 pb-16 bg-white overflow-hidden">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#f4f8ff] to-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4"
          >
            <Link href="/" className="hover:text-[#1746d4]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#1746d4]">Services</Link>
            <span>/</span>
            <span className="text-[#1746d4]">Website Design &amp; Dev</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-[#1746d4] text-xs font-extrabold uppercase tracking-wider mb-4"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Web Engineering &amp; UI/UX</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071b4d] tracking-tight mb-6 leading-tight"
            >
              Websites Built to Turn <br />
              <span className="text-[#1746d4]">Visitors into High-Paying Clients</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8"
            >
              We design and engineer lightning-fast, visually stunning websites that look incredible on every screen and are structured from the ground up to rank on Google and drive sales inquiries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="bg-[#071b4d] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#1746d4] transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Request a Website Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-[#071b4d] border border-gray-300 px-7 py-3.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-all"
              >
                View Web Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-extrabold text-[#1746d4] uppercase tracking-wider block mb-3">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              Modern Web Development Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Every website we build adheres to the highest modern web standards for speed, accessibility, and conversion architecture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => {
              const IconC = cap.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#f8fafc] p-7 rounded-2xl border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <IconC className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#071b4d] mb-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 md:py-28 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-extrabold text-[#1746d4] uppercase tracking-wider block mb-3">
              TRANSPARENT PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              Website Development Plans
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Choose the package that fits your current business scale or request a custom proposal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-3xl p-8 border ${
                  pkg.popular ? "border-[#1746d4] shadow-2xl relative" : "border-gray-200 shadow-sm"
                } flex flex-col justify-between`}
              >
                <div>
                  {pkg.popular && (
                    <div className="inline-block bg-[#1746d4] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-xl font-extrabold text-[#071b4d] mb-1">{pkg.name}</h3>
                  <p className="text-xs text-gray-500 mb-6">{pkg.desc}</p>

                  <div className="mb-8">
                    <span className="text-3xl sm:text-4xl font-black text-[#071b4d]">{pkg.price}</span>
                    <span className="text-xs text-gray-400 font-semibold ml-1">one-time</span>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-gray-100 mb-8">
                    {pkg.features.map((f, fidx) => (
                      <div key={fidx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700 font-semibold">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-3.5 rounded-full text-center text-xs sm:text-sm font-bold transition-all ${
                    pkg.popular
                      ? "bg-[#1746d4] text-white hover:bg-[#071b4d] shadow-md"
                      : "bg-gray-100 text-[#071b4d] hover:bg-[#071b4d] hover:text-white"
                  }`}
                >
                  Choose {pkg.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
