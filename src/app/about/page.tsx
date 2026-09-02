"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  ShieldCheck,
  Zap,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { StatsBanner } from "@/components/StatsBanner";
import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  const values = [
    {
      title: "Data Over Assumptions",
      desc: "Every campaign, keyword, and creative is backed by robust market data and real-time analytics.",
      icon: Target,
      color: "bg-blue-50 text-[#1746d4]",
    },
    {
      title: "Radical Transparency",
      desc: "No hidden fees, no opaque reporting. You get direct access to campaign numbers and weekly strategy calls.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Agile & Fast Execution",
      desc: "The digital world moves fast. We build, test, and iterate marketing funnels in days, not months.",
      icon: Zap,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Long-term Partnership",
      desc: "We treat your business as our own. 96.8% of our clients stay with us for more than 2 consecutive years.",
      icon: HeartHandshake,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Agency Founded",
      desc: "Started in Hyderabad with 3 passionate digital marketers helping local retail and education brands survive the pandemic online.",
    },
    {
      year: "2022",
      title: "100+ Active Clients",
      desc: "Expanded into high-growth SaaS and national e-commerce brands, managing over ₹2 Crore in monthly ad spends.",
    },
    {
      year: "2024",
      title: "Google & Meta Partner",
      desc: "Achieved Google Premier Partner & Meta Certified Marketing Company status with a team of 25+ certified experts.",
    },
    {
      year: "2026",
      title: "Full-Stack Growth Powerhouse",
      desc: "Serving 250+ clients globally with proprietary AI-powered SEO and performance advertising funnels.",
    },
  ];

  const team = [
    {
      name: "Siddharth Rao",
      role: "Founder & Chief Strategy Officer",
      exp: "10+ Years in Performance Marketing",
      avatar: "/images/avatar_ravi.svg",
    },
    {
      name: "Ananya Deshmukh",
      role: "Head of SEO & Organic Growth",
      exp: "Ex-Consultant, Scaled 80+ Brands",
      avatar: "/images/avatar_sneha.svg",
    },
    {
      name: "Karan Varma",
      role: "Lead Paid Ads Strategist (Meta/Google)",
      exp: "Managed ₹15Cr+ Profitable Ad Spend",
      avatar: "/images/avatar_manoj.svg",
    },
  ];

  return (
    <main className="pt-24 pb-16 bg-white overflow-hidden">
      {/* Hero / Header Banner */}
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
            <span className="text-[#1746d4]">About Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071b4d] tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          >
            We Help Visionary Businesses <br />
            <span className="text-[#1746d4]">Scale With Certainty</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            DigiGrow was built on a simple premise: marketing should generate measurable pipeline revenue, not just vanity impressions.
          </motion.p>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/team_collab.jpg"
                  alt="DigiGrow team meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-[#071b4d] text-white p-6 rounded-2xl shadow-xl hidden sm:block"
              >
                <p className="text-3xl font-black text-[#facc15]">96.8%</p>
                <p className="text-xs text-gray-300 font-medium">Client Retention Rate</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <span className="text-xs font-extrabold text-[#1746d4] uppercase tracking-wider block mb-3">
                OUR STORY &amp; MISSION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-6">
                From a 3-Person Team to an Industry-Leading Growth Agency
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                We founded DigiGrow in 2020 after seeing too many companies waste lakhs on generic marketing agencies that delivered fancy slide decks but zero real sales inquiries.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Today, our team of 25+ digital strategists, conversion copywriters, SEO engineers, and paid ad media buyers work together to transform your digital channels into predictable customer acquisition machines.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                  <span className="text-sm font-bold text-[#071b4d]">250+ Active Projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                  <span className="text-sm font-bold text-[#071b4d]">Google Premier Partner</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                  <span className="text-sm font-bold text-[#071b4d]">Meta Certified Agency</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
                  <span className="text-sm font-bold text-[#071b4d]">24/7 Dedicated Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Navy Banner */}
      <StatsBanner />

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-extrabold text-[#1746d4] uppercase tracking-wider block mb-3">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              Our Core Company Values
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              The foundational principles that guide every strategy we develop and client we partner with.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const IconC = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-7 rounded-2xl border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl ${val.color} flex items-center justify-center mb-5`}>
                      <IconC className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-[#071b4d] mb-2">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Year Growth Timeline */}
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
              OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              5+ Years of Proven Innovation
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              From our humble beginnings to scaling businesses across 15+ varied industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100 relative hover:border-blue-200 transition-colors"
              >
                <div className="inline-block bg-[#071b4d] text-white text-xs font-black px-3 py-1 rounded-full mb-3">
                  {m.year}
                </div>
                <h3 className="text-base font-extrabold text-[#071b4d] mb-2">{m.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
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
              THE EXPERTS BEHIND YOUR GROWTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              Meet Our Strategic Leadership
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Experienced performance marketers and creative strategists driving your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 bg-gray-100 shadow-md">
                  <Image src={member.avatar} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-extrabold text-[#071b4d] mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-[#1746d4] mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.exp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue CTA */}
      <CTASection />
    </main>
  );
}
