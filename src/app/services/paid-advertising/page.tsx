"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  ArrowRight,
  BarChart,
  Layers,
  Zap,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function PaidAdvertisingPage() {
  const adChannels = [
    {
      title: "Google Search & Performance Max",
      desc: "Capture active high-intent search queries with precision keyword bidding, negative match filters, and optimized ad copy.",
      icon: Target,
    },
    {
      title: "Meta (Instagram & Facebook) Funnels",
      desc: "Full-funnel video creatives, lookalike audiences, and dynamic retargeting that nurture cold prospects into buyers.",
      icon: Zap,
    },
    {
      title: "LinkedIn B2B Lead Generation",
      desc: "Target exact job titles, company sizes, and decision-makers for enterprise contracts and high-ticket B2B deals.",
      icon: BarChart,
    },
    {
      title: "Conversion Tracking & CRO Sprints",
      desc: "Server-side tracking (CAPI), UTM parameters, and ongoing landing page A/B tests to cut your cost-per-acquisition (CPA).",
      icon: Layers,
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
            <span className="text-[#1746d4]">Google &amp; Meta Ads</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-extrabold uppercase tracking-wider mb-4"
            >
              <Target className="w-3.5 h-3.5" />
              <span>High-ROAS Paid Media</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071b4d] tracking-tight mb-6 leading-tight"
            >
              Turn ₹1 in Ad Spend into <br />
              <span className="text-amber-500">₹4.80 in Predictable Revenue</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8"
            >
              We create, optimize, and scale profitable paid advertising campaigns across Google, Meta, and LinkedIn. No wasted ad budget. Only verified leads and profitable returns.
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
                <span>Launch Your Paid Ads</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-[#071b4d] border border-gray-300 px-7 py-3.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-all"
              >
                View Paid Ad Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Channels */}
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
              PAID MEDIA CHANNELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              Multi-Channel Paid Advertising
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We place your offers in front of high-intent prospects across every relevant platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adChannels.map((c, idx) => {
              const IconC = c.icon;
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
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                    <IconC className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#071b4d] mb-2">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
