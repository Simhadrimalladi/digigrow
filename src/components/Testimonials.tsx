"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  highlight: string;
};

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Their SEO strategy helped us rank #1 on Google for our primary commercial keywords and we have seen a massive 320% increase in inbound client inquiries. Great team, fast communication and outstanding support!",
    name: "Ravi Kumar",
    role: "Managing Director",
    company: "BuildEx Constructions",
    avatar: "/images/avatar_ravi.svg",
    rating: 5,
    highlight: "+320% Organic Leads",
  },
  {
    id: "2",
    quote: "Very professional and result-oriented growth team. Our modern Next.js website looks amazing, loads in under a second, and our sales pipeline has grown significantly within just 90 days of launch.",
    name: "Sneha Reddy",
    role: "Founder & Creative Director",
    company: "Elite Interiors",
    avatar: "/images/avatar_sneha.svg",
    rating: 5,
    highlight: "2.5x Revenue Growth",
  },
  {
    id: "3",
    quote: "Their Google Ads and Meta campaigns brought us consistent, qualified enterprise leads at 40% lower cost per acquisition. They manage our budget like it's their own money. Highly recommended!",
    name: "Manoj Singh",
    role: "VP of Growth",
    company: "SmartTech Cloud Solutions",
    avatar: "/images/avatar_manoj.svg",
    rating: 5,
    highlight: "4.8x Campaign ROAS",
  },
  {
    id: "4",
    quote: "DigiGrow scaled our organic e-commerce revenue from scratch. Their keyword clusters and speed optimization made our store rank above national competitors.",
    name: "Vikram Malhotra",
    role: "Co-Founder",
    company: "GreenLeaf Agro Retail",
    avatar: "/images/avatar_ravi.svg",
    rating: 5,
    highlight: "+280% Monthly Orders",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#f4f7fb] overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-100/70 text-[#1746d4] text-xs font-extrabold uppercase tracking-wider mb-3">
            TESTIMONIALS &amp; SUCCESS STORIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#071b4d] tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Real feedback from business owners and marketing executives scaling with DigiGrow.
          </p>
        </div>

        {/* Animated Testimonials Carousel Slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[320px] sm:min-h-[280px] bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 flex flex-col justify-between overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-[#facc15] text-[#facc15]"
                        />
                      ))}
                    </div>

                    <span className="text-xs font-extrabold text-[#10b981] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
                      {current.highlight}
                    </span>
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-8 italic">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-blue-50 border-2 border-[#1746d4]/20 shadow-xs">
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-extrabold text-[#071b4d] text-base">
                        {current.name}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm font-medium">
                        {current.role}, <span className="text-[#1746d4] font-bold">{current.company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? "w-8 bg-[#1746d4]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#071b4d] flex items-center justify-center hover:bg-[#071b4d] hover:text-white transition-all shadow-xs cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#071b4d] flex items-center justify-center hover:bg-[#071b4d] hover:text-white transition-all shadow-xs cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}