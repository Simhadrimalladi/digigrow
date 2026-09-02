"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { openAuditModal } from "./AuditDialog";

type ProjectItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

const projects: ProjectItem[] = [
  {
    id: "buildex",
    title: "BuildEx Constructions",
    category: "Website Design & SEO",
    image: "/images/portfolio_buildex.jpg",
  },
  {
    id: "greenleaf",
    title: "GreenLeaf Agro",
    category: "SEO & Google Ads",
    image: "/images/portfolio_greenleaf.svg",
  },
  {
    id: "elite",
    title: "Elite Interiors",
    category: "Website Design",
    image: "/images/portfolio_elite.svg",
  },
  {
    id: "smarttech",
    title: "SmartTech Solutions",
    category: "SEO & Social Media",
    image: "/images/portfolio_smarttech.svg",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#1746d4] text-xs font-extrabold uppercase tracking-wider mb-3">
            OUR WORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#071b4d] tracking-tight mb-4">
            Some Of Our Recent Projects
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We help businesses from different industries achieve their digital goals.
          </p>
        </motion.div>

        {/* 4 Projects Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mb-14">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100/90 shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between interactive-card"
            >
              {/* Browser/Device Preview Container */}
              <div className="relative aspect-[16/11] bg-gray-50 overflow-hidden border-b border-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#071b4d]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={openAuditModal}
                    className="w-10 h-10 rounded-full bg-white text-[#071b4d] shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5">
                <h3 className="font-extrabold text-[#071b4d] text-base mb-1 group-hover:text-[#1746d4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm font-medium">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="bg-white text-[#071b4d] border border-gray-300 px-8 py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-gray-50 hover:border-[#071b4d] transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
