"use client";

import React, { useState, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Sparkles, Phone, MessageSquare, ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import { openAuditModal } from "./AuditDialog";

export function OffCanvasDrawer() {
  const [open, setOpen] = useState(false);
  const [budget, setBudget] = useState(50000);
  const [quickFormSubmitted, setQuickFormSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-offcanvas-drawer", handleOpen);
    return () => window.removeEventListener("open-offcanvas-drawer", handleOpen);
  }, []);

  // Growth projection calculation
  const estimatedLeads = Math.round((budget / 1000) * 4.5);
  const estimatedTraffic = Math.round((budget / 100) * 18);
  const [quickName, setQuickName] = useState("");
  const [quickPhone, setQuickPhone] = useState("");

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quickName,
          phone: quickPhone,
          service: `Quick Callback (Budget ₹${budget.toLocaleString("en-IN")}/mo)`,
          formType: "Quick Strategy Call Request",
          message: `Requested 15-min callback with estimated budget ₹${budget.toLocaleString("en-IN")}/mo (~${estimatedLeads} Leads, ~${estimatedTraffic.toLocaleString("en-IN")} Visits)`,
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setQuickFormSubmitted(true);
    setTimeout(() => {
      setQuickFormSubmitted(false);
      setQuickName("");
      setQuickPhone("");
      setOpen(false);
    }, 2500);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        {/* Backdrop */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200" />

        {/* Slide-in Drawer from Right */}
        <DialogPrimitive.Content className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white p-6 sm:p-8 shadow-2xl overflow-y-auto focus:outline-none transition-transform animate-in slide-in-from-right duration-300 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-5 border-b border-gray-100 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#071b4d] text-white flex items-center justify-center font-black text-sm">
                  D
                </div>
                <div>
                  <DialogPrimitive.Title className="text-lg font-black text-[#071b4d] leading-none">
                    Growth Hub
                  </DialogPrimitive.Title>
                  <p className="text-[11px] font-semibold text-gray-500 mt-0.5">Quick Consultation &amp; Tools</p>
                </div>
              </div>

              <DialogPrimitive.Close className="p-2 text-gray-400 hover:text-[#071b4d] hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </DialogPrimitive.Close>
            </div>

            <DialogPrimitive.Description className="sr-only">
              Quick consultation and ROI estimate calculator drawer
            </DialogPrimitive.Description>

            {/* Quick Growth Estimator Widget */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 p-5 rounded-2xl border border-blue-100 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#1746d4] uppercase tracking-wider flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  ROI Lead Estimator
                </span>
                <span className="text-xs font-extrabold text-[#071b4d]">
                  ₹{budget.toLocaleString("en-IN")}/mo
                </span>
              </div>

              <input
                type="range"
                min="15000"
                max="250000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-[#1746d4] mb-4"
              />

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-blue-200/50">
                <div className="bg-white p-2.5 rounded-xl shadow-2xs">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Est. Monthly Leads</span>
                  <p className="text-base font-black text-[#10b981]">~{estimatedLeads} Leads</p>
                </div>
                <div className="bg-white p-2.5 rounded-xl shadow-2xs">
                  <span className="text-[10px] font-bold text-gray-500 uppercase">Est. Monthly Visits</span>
                  <p className="text-base font-black text-[#1746d4]">~{estimatedTraffic.toLocaleString("en-IN")} Visits</p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Form */}
            <div className="mb-6">
              <h4 className="text-sm font-extrabold text-[#071b4d] mb-2">Request 15-Min Strategy Call</h4>
              <p className="text-xs text-gray-500 mb-4">
                Leave your number and a growth advisor will call you directly.
              </p>

              {quickFormSubmitted ? (
                <div className="p-4 bg-green-50 rounded-2xl text-center border border-green-100">
                  <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-green-900">Request Sent!</p>
                  <p className="text-[11px] text-green-700">We will call you in a few minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={quickName}
                    onChange={(e) => setQuickName(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (e.g. +91 98765 43210)"
                    value={quickPhone}
                    onChange={(e) => setQuickPhone(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#071b4d] text-white py-2.5 rounded-xl font-bold text-xs hover:bg-[#1746d4] transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Callback</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
                Instant Connect
              </span>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors text-xs font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </div>
                <span className="text-[11px] bg-emerald-200 px-2 py-0.5 rounded-full font-extrabold text-emerald-900">
                  Online
                </span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center justify-between p-3 rounded-xl bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors text-xs font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#1746d4]" />
                  <span>Call +91 98765 43210</span>
                </div>
                <span className="text-[11px] text-gray-500 font-semibold">9am-7pm</span>
              </a>
            </div>
          </div>

          {/* Bottom Audit Trigger */}
          <div className="pt-6 border-t border-gray-100 mt-6">
            <button
              onClick={() => {
                setOpen(false);
                openAuditModal();
              }}
              className="w-full bg-[#facc15] text-[#071b4d] py-3 rounded-full font-black text-xs sm:text-sm hover:bg-[#071b4d] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Full Free Website Audit &rarr;</span>
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export function openOffCanvasDrawer() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-offcanvas-drawer"));
  }
}
