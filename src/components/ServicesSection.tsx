"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Search, Target, MessageSquare, ArrowRight } from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  borderColor: string;
};

const services: ServiceItem[] = [
  {
    id: "web-design",
    title: "Website Design & Development",
    description: "We build fast, responsive and user-friendly websites that convert visitors into customers.",
    href: "/services/website-design",
    icon: Monitor,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-300",
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description: "Rank higher on Google and get more organic traffic with our proven SEO strategies.",
    href: "/services/seo-optimization",
    icon: Search,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "hover:border-emerald-300",
  },
  {
    id: "ads",
    title: "Google & Social Media Ads",
    description: "Generate high-quality leads and grow your business with targeted ad campaigns.",
    href: "/services/paid-advertising",
    icon: Target,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "hover:border-amber-300",
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    description: "Build your brand, engage your audience and grow your social media presence.",
    href: "/services/social-media",
    icon: MessageSquare,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "hover:border-purple-300",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-[#1746d4] text-xs font-extrabold uppercase tracking-wider mb-3">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#071b4d] tracking-tight mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We offer result-driven digital solutions to help your business grow and stay ahead in today&apos;s competitive market.
          </p>
        </motion.div>

        {/* 4 Service Cards Grid with Framer Motion Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {services.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-2xl p-7 border border-gray-100/90 shadow-xs hover:shadow-xl transition-all duration-300 ${service.borderColor} flex flex-col justify-between group interactive-card`}
              >
                <div>
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xs`}
                  >
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="font-extrabold text-[#071b4d] text-lg leading-snug mb-3 group-hover:text-[#1746d4] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#071b4d] group-hover:text-[#1746d4] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
