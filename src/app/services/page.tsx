"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Target,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function ServicesPage() {
  const servicePillars = [
    {
      id: "website-design",
      title: "Website Design & Development",
      badge: "High-Converting UI/UX",
      desc: "Fast, mobile-responsive, modern websites and conversion-focused landing pages engineered to convert visitors into loyal clients.",
      href: "/services/website-design",
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
      features: [
        "Custom Next.js & React Web Apps",
        "WordPress & Shopify E-Commerce",
        "Mobile-First Responsive Layouts",
        "Conversion Rate Optimization (CRO)",
      ],
      metrics: "+85% Avg. Conversion Lift",
    },
    {
      id: "seo-optimization",
      title: "Search Engine Optimization (SEO)",
      badge: "Organic Google Dominance",
      desc: "Comprehensive technical SEO, high-authority backlink outreach, and content strategies that rank you #1 for high-intent buyer searches.",
      href: "/services/seo-optimization",
      icon: Search,
      color: "bg-emerald-50 text-emerald-600",
      features: [
        "Technical SEO & Core Web Vitals",
        "High-Intent Keyword Architecture",
        "Local SEO & Google Business Profile",
        "Quality Editorial Backlink Building",
      ],
      metrics: "+340% Organic Traffic Growth",
    },
    {
      id: "paid-advertising",
      title: "Google & Meta Paid Ads",
      badge: "Predictable Lead Engine",
      desc: "Data-driven Google Search, Shopping, YouTube, and Instagram/Facebook ad campaigns built for maximum return on ad spend (ROAS).",
      href: "/services/paid-advertising",
      icon: Target,
      color: "bg-amber-50 text-amber-600",
      features: [
        "Google Search & Performance Max Ads",
        "Meta (Facebook/Instagram) Retargeting",
        "LinkedIn B2B Lead Gen Campaigns",
        "A/B Creative & Copy Testing",
      ],
      metrics: "4.8x Average Campaign ROAS",
    },
    {
      id: "social-media",
      title: "Social Media Growth & Marketing",
      badge: "Brand Authority & Engagement",
      desc: "Engaging short-form video content, viral Reels, aesthetic feed curation, and community management that turns followers into brand champions.",
      href: "/services/social-media",
      icon: MessageSquare,
      color: "bg-purple-50 text-purple-600",
      features: [
        "Instagram, LinkedIn & YouTube Strategy",
        "Viral Short & Reel Scripting & Editing",
        "Influencer & Creator Collaborations",
        "Daily Community & DM Management",
      ],
      metrics: "+300% Engagement Increase",
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Comprehensive Audit & Discovery",
      desc: "We analyze your current website traffic, competitor rankings, target demographics, and conversion leaks to uncover untapped revenue.",
    },
    {
      step: "02",
      title: "Custom Growth Blueprint",
      desc: "We formulate a 90-day execution roadmap specifying exact keyword targets, ad creatives, funnels, and expected ROI benchmarks.",
    },
    {
      step: "03",
      title: "Agile Launch & Testing",
      desc: "Our developers and media buyers deploy landing pages, tracking pixels, and ads with multi-variant testing from day one.",
    },
    {
      step: "04",
      title: "Data Optimization & Scaling",
      desc: "We double down on the highest-performing campaigns, cut underperforming variables, and scale your inbound leads profitably.",
    },
  ];

  return (
    <main className="pt-24 pb-16 bg-white overflow-hidden">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#f4f8ff] to-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4"
          >
            <Link href="/" className="hover:text-[#1746d4]">Home</Link>
            <span>/</span>
            <span className="text-[#1746d4]">Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071b4d] tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          >
            Full-Funnel Digital Services <br />
            <span className="text-[#1746d4]">Engineered for Rapid Revenue</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From modern web engineering to top Google rankings and high-ROAS paid ads, discover our customized growth services.
          </motion.p>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="space-y-16">
            {servicePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={pillar.id}
                  id={pillar.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl border border-gray-100 bg-[#f8fafc] hover:border-blue-200 transition-all duration-300 shadow-xs hover:shadow-xl`}
                >
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : ""}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-[#1746d4] text-xs font-extrabold uppercase tracking-wider mb-3">
                      {pillar.badge}
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071b4d] mb-4">
                      {pillar.title}
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {pillar.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {pillar.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-bold text-[#071b4d]">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={pillar.href}
                        className="bg-[#071b4d] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-[#1746d4] transition-all shadow-md inline-flex items-center gap-2 group"
                      >
                        <span>Explore {pillar.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <div className="text-xs font-extrabold text-[#10b981] bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-100">
                        {pillar.metrics}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : ""}`}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-200/80 shadow-md flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-2xl ${pillar.color} flex items-center justify-center mb-5 shadow-xs`}>
                        <IconComp className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#071b4d] mb-2">{pillar.title}</h3>
                      <p className="text-xs text-gray-500 mb-6">
                        Customized strategies tailored to your exact industry requirements and growth targets.
                      </p>
                      <Link
                        href={pillar.href}
                        className="w-full bg-gray-50 text-[#071b4d] hover:bg-[#1746d4] hover:text-white py-2.5 rounded-xl font-bold text-xs transition-colors border border-gray-200"
                      >
                        View Full Details &amp; Pricing &rarr;
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Methodology */}
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
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              Our 4-Step Proven Growth Framework
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A systematic approach to testing, scaling, and guaranteeing marketing ROI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#1746d4]/20 block mb-3">{m.step}</span>
                  <h3 className="text-base font-extrabold text-[#071b4d] mb-2">{m.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                </div>
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
