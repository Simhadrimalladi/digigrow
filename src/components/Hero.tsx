"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-white overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#071b4d] leading-[1.2] sm:leading-[1.18] tracking-tight mb-5 sm:mb-6">
              We Help Businesses{" "}
              <span className="text-[#1746d4] inline-block font-extrabold">
                Grow Online
              </span>{" "}
              &amp; Get More Customers
            </h1>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 font-normal">
              We are a performance-focused digital marketing agency helping businesses
              increase visibility, generate quality leads and scale revenue predictably.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <Link
                href="/services"
                className="w-full sm:w-auto text-center bg-[#071b4d] text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-[#1746d4] transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-white text-[#071b4d] border border-gray-300 px-7 py-3.5 rounded-full text-sm font-bold hover:bg-gray-50 hover:border-[#071b4d] transition-all duration-300 inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Social Proof Rating */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="flex -space-x-2 sm:-space-x-2.5 flex-shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-blue-100 shadow-xs flex items-center justify-center font-bold text-xs text-blue-800">
                  <Image src="/images/avatar_ravi.svg" alt="Client 1" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-amber-100 shadow-xs flex items-center justify-center font-bold text-xs text-amber-800">
                  <Image src="/images/avatar_sneha.svg" alt="Client 2" width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-indigo-100 shadow-xs flex items-center justify-center font-bold text-xs text-indigo-800">
                  <Image src="/images/avatar_manoj.svg" alt="Client 3" width={40} height={40} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#facc15] text-[#facc15]"
                    />
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#071b4d] mt-0.5">
                  4.9/5 from 100+ Happy Clients
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0 px-2 sm:px-0">
            {/* Organic Blue Backdrop Shape */}
            <div className="absolute w-[95%] h-[95%] bg-gradient-to-tr from-[#dbeafe] via-[#eff6ff] to-[#f0fdf4] rounded-[40px] sm:rounded-[60px] transform rotate-1 scale-105 pointer-events-none -z-10" />

            {/* Decorative yellow cross & dots */}
            <div className="absolute top-2 left-4 sm:left-10 text-yellow-400 font-bold text-sm sm:text-xl opacity-80 select-none">
              <span className="inline-block rotate-12">✦ ✦ ✦</span>
            </div>
            <div className="absolute top-6 right-4 text-yellow-400 font-bold text-base sm:text-xl opacity-80 select-none">
              ▲
            </div>

            {/* Main Center Image */}
            <div className="relative w-full max-w-[340px] sm:max-w-[440px] aspect-[4/4.2] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/hero_person.jpg"
                alt="Digital marketing consultant working on laptop"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Floating Metric 1: Website Traffic (Top Left) */}
            <div className="absolute -top-3 left-1 sm:-top-4 sm:-left-4 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/80 animate-float z-20 flex flex-col min-w-[110px] sm:min-w-[130px]">
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500">Website Traffic</span>
              <div className="flex items-baseline justify-between gap-1.5 mt-0.5">
                <span className="text-base sm:text-lg font-extrabold text-[#10b981]">+180%</span>
                <svg className="w-8 h-4 sm:w-10 sm:h-5 text-[#10b981]" viewBox="0 0 40 20" fill="none">
                  <path d="M 2 18 Q 15 14 22 8 T 38 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Floating Metric 2: Leads Generated (Top Right) */}
            <div className="absolute -top-3 right-1 sm:top-4 sm:-right-4 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/80 animate-float-delayed z-20 flex flex-col min-w-[115px] sm:min-w-[135px]">
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500">Leads Generated</span>
              <div className="flex items-baseline justify-between gap-1.5 mt-0.5">
                <span className="text-base sm:text-lg font-extrabold text-[#10b981]">+250%</span>
                <svg className="w-8 h-4 sm:w-10 sm:h-5 text-[#10b981]" viewBox="0 0 40 20" fill="none">
                  <path d="M 2 16 Q 14 12 20 6 T 38 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Floating Metric 3: Revenue Growth (Bottom Right) */}
            <div className="absolute -bottom-3 right-2 sm:bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/80 animate-float z-20 flex flex-col min-w-[115px] sm:min-w-[135px]">
              <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500">Revenue Growth</span>
              <div className="flex items-baseline justify-between gap-1.5 mt-0.5">
                <span className="text-base sm:text-lg font-extrabold text-[#10b981]">+200%</span>
                <svg className="w-8 h-4 sm:w-10 sm:h-5 text-[#10b981]" viewBox="0 0 40 20" fill="none">
                  <path d="M 2 17 Q 12 15 24 8 T 38 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}