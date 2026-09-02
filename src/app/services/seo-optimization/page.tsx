"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  LineChart,
  Globe2,
  FileCheck,
  Target,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function SEOOptimizationPage() {
  const pillars = [
    {
      title: "Technical SEO & Speed",
      desc: "Fix crawl errors, site architecture, XML sitemaps, structured schema data, and mobile Core Web Vitals.",
      icon: LineChart,
    },
    {
      title: "Keyword & Content Architecture",
      desc: "Target high-intent keywords that buyers actually search with in-depth topic clusters and conversion copy.",
      icon: Target,
    },
    {
      title: "High-Authority Backlink Outreach",
      desc: "Safe, white-hat editorial outreach to high Domain Authority (DA 60+) publications to build rank power.",
      icon: Globe2,
    },
    {
      title: "Local SEO & Google Business Profile",
      desc: "Dominate Google Maps local 3-pack rankings in your geographic territory for instant phone calls.",
      icon: FileCheck,
    },
  ];

  const packages = [
    {
      name: "Local SEO Growth",
      price: "₹18,000",
      desc: "Dominate local searches & Google Maps in your target city/metro.",
      features: [
        "15 Target Local Keywords",
        "Google Business Profile Optimization",
        "Local Citation Building (40+ sites)",
        "On-Page Content & Meta Tuning",
        "Monthly Ranking & Traffic Reports",
      ],
    },
    {
      name: "National Scale SEO",
      popular: true,
      price: "₹35,000",
      desc: "For brands competing across India or globally for high-volume keywords.",
      features: [
        "40+ High-Intent Keywords",
        "Comprehensive Technical SEO Audit & Fixes",
        "4 Long-form Authority Blog Articles / mo",
        "8 High DA Editorial Backlinks / mo",
        "Bi-Weekly Strategy Calls & Live Dashboard",
        "Conversion Funnel Tracking",
      ],
    },
    {
      name: "Enterprise Dominance",
      price: "₹75,000+",
      desc: "For large e-commerce catalogs, SaaS, and high-competition niches.",
      features: [
        "100+ Commercial Keyword Targets",
        "Full Content Engine (8 Articles/mo)",
        "15+ High-Tier Editorial PR Placements",
        "Dedicated Senior SEO Lead",
        "Weekly Optimization Sprints",
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
            <span className="text-[#1746d4]">SEO Optimization</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-extrabold uppercase tracking-wider mb-4"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Organic Traffic Mastery</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071b4d] tracking-tight mb-6 leading-tight"
            >
              Rank #1 on Google and <br />
              <span className="text-[#10b981]">Capture High-Intent Customers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8"
            >
              Stop paying for every single click. Our organic SEO strategies put your brand directly in front of buyers actively searching for your products and services on Google.
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
                <span>Request Free SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-[#071b4d] border border-gray-300 px-7 py-3.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-all"
              >
                View SEO Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 SEO Pillars */}
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
              THE 4 PILLARS OF GOOGLE DOMINANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              How We Get You to Page 1
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A scientific, white-hat SEO roadmap that outranks your competitors permanently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const IconC = p.icon;
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                    <IconC className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#071b4d] mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
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
              MONTHLY GROWTH PLANS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              SEO Retainer Packages
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              No long term lock-in contracts. Month-to-month results that prove their value.
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
                  pkg.popular ? "border-[#10b981] shadow-2xl relative" : "border-gray-200 shadow-sm"
                } flex flex-col justify-between`}
              >
                <div>
                  {pkg.popular && (
                    <div className="inline-block bg-[#10b981] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
                      Best ROI Choice
                    </div>
                  )}

                  <h3 className="text-xl font-extrabold text-[#071b4d] mb-1">{pkg.name}</h3>
                  <p className="text-xs text-gray-500 mb-6">{pkg.desc}</p>

                  <div className="mb-8">
                    <span className="text-3xl sm:text-4xl font-black text-[#071b4d]">{pkg.price}</span>
                    <span className="text-xs text-gray-400 font-semibold ml-1">/ month</span>
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
                      ? "bg-[#10b981] text-white hover:bg-[#071b4d] shadow-md"
                      : "bg-gray-100 text-[#071b4d] hover:bg-[#071b4d] hover:text-white"
                  }`}
                >
                  Start with {pkg.name}
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
