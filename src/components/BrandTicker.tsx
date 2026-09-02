"use client";

import React from "react";
import { motion } from "framer-motion";

export function BrandTicker() {
  const brands = [
    { name: "BuildEx Constructions", tag: "Real Estate & Infrastructure" },
    { name: "GreenLeaf Agro", tag: "Organic Retail & FMCG" },
    { name: "Elite Interiors", tag: "Luxury Architecture" },
    { name: "SmartTech Cloud", tag: "Enterprise B2B SaaS" },
    { name: "Apex HealthTech", tag: "Healthcare & MedTech" },
    { name: "Nova Fintech", tag: "Payments & Banking" },
    { name: "Zenith EduTech", tag: "E-Learning Platforms" },
  ];

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="py-8 bg-gradient-to-r from-[#030d28] via-[#071b4d] to-[#030d28] overflow-hidden border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 mb-3 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#60a5fa]">
          TRUSTED BY OVER 250+ FAST-GROWING COMPANIES &amp; BRANDS
        </p>
      </div>

      <div className="flex select-none relative w-full overflow-hidden mask-gradient">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-xs hover:bg-white/10 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span className="text-white font-extrabold text-xs tracking-wider">
                {brand.name}
              </span>
              <span className="text-gray-400 text-[10px] hidden sm:inline-block">
                • {brand.tag}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
