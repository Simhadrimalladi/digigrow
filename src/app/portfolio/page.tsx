"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp, Filter } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { openAuditModal } from "@/components/AuditDialog";

type CaseStudy = {
  id: string;
  title: string;
  client: string;
  category: "all" | "web" | "seo" | "ads" | "social";
  categoryName: string;
  image: string;
  stats: { label: string; value: string };
  summary: string;
  deliverables: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "BuildEx Commercial Construction Portal",
    client: "BuildEx Constructions",
    category: "web",
    categoryName: "Website Design & SEO",
    image: "/images/portfolio_buildex.jpg",
    stats: { label: "Organic Inbound Leads", value: "+320%" },
    summary: "Complete redesign of a legacy corporate site into a high-speed Next.js platform paired with local commercial SEO.",
    deliverables: ["Next.js Architecture", "Local 3-Pack SEO", "Conversion Rate Optimization"],
  },
  {
    id: "2",
    title: "GreenLeaf Agro Organic Products Scaling",
    client: "GreenLeaf Agro",
    category: "seo",
    categoryName: "SEO & Google Ads",
    image: "/images/portfolio_greenleaf.svg",
    stats: { label: "Return on Ad Spend (ROAS)", value: "4.8x" },
    summary: "Executed full-funnel Google Shopping and Performance Max campaigns combined with high-volume organic keyword clusters.",
    deliverables: ["Google Shopping Ads", "Category Page SEO", "UTM Conversion Tracking"],
  },
  {
    id: "3",
    title: "Elite Interiors Luxury Studio Launch",
    client: "Elite Interiors",
    category: "social",
    categoryName: "Website & Social Media",
    image: "/images/portfolio_elite.svg",
    stats: { label: "Instagram Lead Inquiries", value: "+250%" },
    summary: "Built an aesthetic, luxury portfolio website paired with viral video reels and interior design carousel marketing.",
    deliverables: ["Luxury Web Design", "Viral Reel Production", "Influencer Collaborations"],
  },
  {
    id: "4",
    title: "SmartTech Cloud Enterprise Lead Engine",
    client: "SmartTech Solutions",
    category: "ads",
    categoryName: "SEO & B2B Paid Funnels",
    image: "/images/portfolio_smarttech.svg",
    stats: { label: "Cost Per Acquisition Reduction", value: "-42%" },
    summary: "Engineered LinkedIn Ads and Google Search funnels targeting CTOs and Engineering Managers for high-ticket SaaS deals.",
    deliverables: ["LinkedIn B2B Lead Gen", "Comparison Landing Pages", "CRM Pipeline Sync"],
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "seo" | "ads" | "social">("all");

  const filteredProjects = activeFilter === "all"
    ? caseStudies
    : caseStudies.filter((item) => item.category === activeFilter);

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
            <span className="text-[#1746d4]">Portfolio &amp; Case Studies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071b4d] tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          >
            Proven Results Across <br />
            <span className="text-[#1746d4]">250+ Successful Client Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Explore how we engineered transformative organic traffic, ROAS gains, and qualified pipeline for diverse brands.
          </motion.p>

          {/* Filter Tabs with Active Spring Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto"
          >
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Website Design" },
              { id: "seo", label: "SEO & Rankings" },
              { id: "ads", label: "Google & Meta Ads" },
              { id: "social", label: "Social Media" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-[#071b4d] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Browser Mockup Image Frame */}
                    <div className="relative aspect-[16/10] bg-gray-50 border-b border-gray-100 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-black text-[#10b981] shadow-md border border-emerald-100 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{project.stats.value} {project.stats.label}</span>
                      </div>
                    </div>

                    <div className="p-8">
                      <span className="text-[11px] font-extrabold uppercase text-[#1746d4] tracking-wider mb-2 block">
                        {project.categoryName}
                      </span>

                      <h3 className="text-2xl font-extrabold text-[#071b4d] mb-3 group-hover:text-[#1746d4] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                        {project.deliverables.map((item, fidx) => (
                          <span
                            key={fidx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-semibold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 pt-0">
                    <button
                      onClick={openAuditModal}
                      className="w-full bg-gray-50 text-[#071b4d] hover:bg-[#1746d4] hover:text-white py-3 rounded-full text-xs sm:text-sm font-bold transition-all text-center border border-gray-200 cursor-pointer"
                    >
                      Discuss Similar Project With Us &rarr;
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
