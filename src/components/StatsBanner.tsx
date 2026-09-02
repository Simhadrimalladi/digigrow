"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, TrendingUp, Award, Headphones } from "lucide-react";

export function StatsBanner() {
  const stats = [
    {
      icon: User,
      value: "100+",
      label: "Happy Clients",
    },
    {
      icon: TrendingUp,
      value: "250+",
      label: "Projects Done",
    },
    {
      icon: Award,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "Priority Support",
    },
  ];

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#071b4d] rounded-2xl sm:rounded-3xl py-6 sm:py-10 px-5 sm:px-10 shadow-xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 sm:gap-4 p-2 sm:p-0"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-none mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 font-medium leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}