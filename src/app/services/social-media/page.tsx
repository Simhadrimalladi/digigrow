"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare,
  ArrowRight,
  Video,
  Share2,
  Heart,
  Users,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function SocialMediaPage() {
  const capabilities = [
    {
      title: "Short-Form Video & Viral Reels",
      desc: "Scripting, filming direction, dynamic captions, and motion editing designed to maximize Instagram and YouTube algorithms.",
      icon: Video,
    },
    {
      title: "Aesthetic Feed & Brand Identity",
      desc: "Curated graphic carousels, custom branded templates, and cohesive color schemes that make your profile instantly recognizable.",
      icon: Share2,
    },
    {
      title: "Influencer & Creator Outreach",
      desc: "Vetting, negotiating, and executing collaborative campaigns with micro and macro influencers in your specific niche.",
      icon: Users,
    },
    {
      title: "Community & DM Management",
      desc: "Daily comment responses, inbound DM lead qualification, and proactive engagement to build genuine client loyalty.",
      icon: Heart,
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
            <span className="text-[#1746d4]">Social Media Growth</span>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 text-purple-900 text-xs font-extrabold uppercase tracking-wider mb-4"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Organic Social &amp; Video</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071b4d] tracking-tight mb-6 leading-tight"
            >
              Turn Casual Followers into <br />
              <span className="text-purple-600">Passionate Brand Advocates</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8"
            >
              We manage your entire social media presence from content strategy and viral video production to daily community engagement and influencer marketing.
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
                <span>Grow Your Social Brand</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-[#071b4d] border border-gray-300 px-7 py-3.5 rounded-full text-sm font-bold hover:bg-gray-50 transition-all"
              >
                View Social Case Studies
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
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
              OUR SOCIAL SUITE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              Complete Social Media Management
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              From creative concept to viral distribution, we handle everything end-to-end.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, idx) => {
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
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
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
