"use client";

import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { openAuditModal } from "./AuditDialog";

export function CTASection() {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-[#071b4d] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[1.8]" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Ready to Grow Your Business?
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Let&apos;s discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="w-full md:w-auto flex justify-start md:justify-end flex-shrink-0">
            <button
              onClick={openAuditModal}
              className="w-full sm:w-auto bg-[#facc15] text-[#071b4d] font-extrabold px-8 py-3.5 rounded-full text-sm hover:bg-white hover:text-[#071b4d] transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Get a Free Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}