"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AboutSection() {
  const points = [
    "Result Driven Strategies",
    "Transparent Communication",
    "Affordable Pricing",
    "On-Time Delivery",
    "Dedicated Support",
  ];

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="text-[#1746d4] text-xs font-extrabold uppercase tracking-wider mb-3">
              WHY CHOOSE US?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#071b4d] tracking-tight leading-[1.2] mb-6">
              We Don&apos;t Just Promise, <br className="hidden sm:inline" />
              We Deliver Results!
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              We focus on real results that impact your business. Our strategies are data-driven,
              transparent and tailored to your goals.
            </p>

            {/* Checklist items */}
            <div className="space-y-3.5 mb-10">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#1746d4] flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-current text-[#1746d4] bg-white rounded-full" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-[#071b4d]">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="bg-[#071b4d] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-[#1746d4] transition-all duration-300 shadow-md inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Right Column Visual Collaboration Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex items-center justify-center"
          >
            {/* Organic Soft Blue Backdrop */}
            <div className="absolute w-[95%] h-[95%] bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] rounded-[60px] transform -rotate-1 pointer-events-none -z-10" />

            {/* Decorative dot accents */}
            <div className="absolute -top-4 right-6 text-yellow-400 font-bold text-sm opacity-80 select-none">
              ✦ ✦ ✦
            </div>
            <div className="absolute bottom-4 left-6 text-yellow-400 font-bold text-sm opacity-80 select-none">
              ▲
            </div>

            {/* Main Image */}
            <div className="relative w-full max-w-[460px] aspect-[4/3.2] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/team_collab.jpg"
                alt="Marketing team collaboration"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge: 5+ Years of Experience */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-5 right-2 sm:right-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-3"
            >
              <div className="text-3xl font-black text-[#071b4d] leading-none">
                5+
              </div>
              <div className="text-xs font-bold text-gray-700 leading-tight">
                Years of <br />
                Experience
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}