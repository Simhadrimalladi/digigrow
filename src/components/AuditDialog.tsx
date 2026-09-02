"use client";

import React, { useState, useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function AuditDialog() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "Full Digital Growth Strategy",
  });

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-audit-modal", handleOpen);
    return () => window.removeEventListener("open-audit-modal", handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          service: formData.service,
          formType: "Free Website Audit Request",
          message: `Requested Free Audit for website: ${formData.website || "Not provided"}`,
        }),
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          service: "Full Digital Growth Strategy",
        });
      }, 3000);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in" />
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-[92%] max-w-lg -translate-x-[50%] -translate-y-[50%] bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-100 focus:outline-none animate-in zoom-in-95">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-royal text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free • No Obligation</span>
              </div>
              <DialogPrimitive.Title className="text-2xl font-extrabold text-navy">
                Get a Free Audit
              </DialogPrimitive.Title>
            </div>
            <DialogPrimitive.Close className="rounded-full p-2 text-gray-400 hover:text-navy hover:bg-gray-100 transition-colors">
              <X className="w-5 h-5" />
            </DialogPrimitive.Close>
          </div>

          <DialogPrimitive.Description className="text-muted text-sm mb-6 leading-relaxed">
            Fill out the form below and our marketing specialists will analyze your website, competitor rankings, and growth opportunities within 24 hours.
          </DialogPrimitive.Description>

          {submitted ? (
            <div className="py-8 text-center animate-in zoom-in-90">
              <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-extrabold text-navy mb-2">Audit Request Received!</h3>
              <p className="text-muted text-sm max-w-xs mx-auto">
                Thank you! Our growth team is preparing your custom audit and will email it to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Website URL / Social Page
                </label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
                  Primary Goal / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all bg-white text-navy"
                >
                  <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                  <option value="Website Design & Development">Website Design &amp; Development</option>
                  <option value="Google & Social Media Ads">Google &amp; Social Media Ads</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Full Digital Growth Strategy">Full Digital Growth Strategy</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#071b4d] text-white py-3.5 px-6 rounded-full font-bold text-sm hover:bg-[#1746d4] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <span>Submitting request...</span>
                  ) : (
                    <>
                      <span>Get My Free Audit Report</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export function openAuditModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-audit-modal"));
  }
}