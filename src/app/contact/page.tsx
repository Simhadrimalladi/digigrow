"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
} from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website Design & Development",
    budget: "₹25,000 - ₹50,000",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          formType: "Contact Us Page Consultation",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "Website Design & Development",
          budget: "₹25,000 - ₹50,000",
          message: "",
        });
      }, 4000);
    } catch (err) {
      console.error(err);
      // Still show success fallback so user doesn't get blocked
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "How soon can we expect results from digital marketing?",
      a: "For Google & Meta Paid Advertising, qualified inquiries start within 48 to 72 hours of campaign launch. For organic SEO, measurable ranking shifts and organic traffic compounding typically occur between months 2 and 4.",
    },
    {
      q: "Do you require long-term lock-in contracts?",
      a: "No. We work primarily on flexible monthly retainer agreements. We believe our ongoing return on investment and lead quality should earn your partnership each month.",
    },
    {
      q: "What makes DigiGrow different from other digital agencies?",
      a: "We do not sell vanity impressions. Every campaign is engineered around measurable revenue, pipeline value, and return on ad spend (ROAS). You get direct Slack/WhatsApp access to senior marketers.",
    },
    {
      q: "How do you track and report campaign progress?",
      a: "We provide live 24/7 client dashboards, weekly performance summaries, and bi-weekly strategic sync calls with your dedicated growth manager.",
    },
  ];

  return (
    <main className="pt-24 pb-16 bg-white overflow-hidden">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-[#f4f8ff] to-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4"
          >
            <Link href="/" className="hover:text-[#1746d4]">Home</Link>
            <span>/</span>
            <span className="text-[#1746d4]">Contact Us</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071b4d] tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          >
            Let&apos;s Build Something <br />
            <span className="text-[#1746d4]">Remarkable Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our growth services, custom pricing, or ready to launch your next campaign? Reach out today.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Info Cards & Quick WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <span className="text-xs font-extrabold text-[#1746d4] uppercase tracking-wider block mb-2">
                  DIRECT CONTACT
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071b4d] mb-4">
                  Our Office &amp; Channels
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Visit our Hyderabad headquarters or connect directly via phone, WhatsApp, or email.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-start gap-4 hover:border-blue-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1746d4] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Hyderabad Headquarters</h3>
                    <p className="text-sm font-bold text-[#071b4d] mt-1">
                      123, Business Park, Hitech City, Hyderabad, Telangana - 500081
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-start gap-4 hover:border-emerald-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Call Directly</h3>
                    <a href="tel:+919876543210" className="text-sm font-bold text-[#071b4d] hover:text-[#1746d4] transition-colors mt-1 block">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-start gap-4 hover:border-amber-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Inquiry</h3>
                    <a href="mailto:info@digigrow.com" className="text-sm font-bold text-[#071b4d] hover:text-[#1746d4] transition-colors mt-1 block">
                      info@digigrow.com
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#f8fafc] border border-gray-100 flex items-start gap-4 hover:border-purple-200 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Operating Hours</h3>
                    <p className="text-sm font-bold text-[#071b4d] mt-1">
                      Monday to Saturday: 9:00 AM - 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Banner */}
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h3 className="text-sm font-extrabold text-emerald-950">Chat on WhatsApp</h3>
                    <p className="text-xs text-emerald-700">Instant replies during work hours</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-emerald-700 transition-colors"
                >
                  Start Chat &rarr;
                </a>
              </div>
            </motion.div>

            {/* Right Column: Full Consultation Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-[#f8fafc] p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xl"
            >
              <span className="text-xs font-extrabold text-[#1746d4] uppercase tracking-wider block mb-2">
                PROJECT CONSULTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071b4d] mb-3">
                Send Us Your Project Details
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below. We will review your goals and schedule a 1-on-1 strategy call with our senior lead.
              </p>

              {submitted ? (
                <div className="py-14 text-center animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-[#071b4d] mb-2">Consultation Request Received!</h4>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto">
                    Thank you, {formData.name || "friend"}! A senior growth strategist will contact you within 2 to 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#071b4d] uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071b4d] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#071b4d] uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071b4d] uppercase tracking-wider mb-1.5">
                        Company Name / Website
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Corporation"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#071b4d] uppercase tracking-wider mb-1.5">
                        Primary Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all text-[#071b4d]"
                      >
                        <option value="Website Design & Development">Website Design &amp; Development</option>
                        <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                        <option value="Google & Social Media Ads">Google &amp; Social Media Ads</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Complete Digital Transformation">Complete Digital Transformation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071b4d] uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all text-[#071b4d]"
                      >
                        <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                        <option value="₹30,000 - ₹60,000">₹30,000 - ₹60,000</option>
                        <option value="₹60,000 - ₹1,50,000">₹60,000 - ₹1,50,000</option>
                        <option value="₹1,50,000+">₹1,50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#071b4d] uppercase tracking-wider mb-1.5">
                      Tell Us About Your Project &amp; Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Current website URL, specific challenges, target growth metrics, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1746d4]/20 focus:border-[#1746d4] transition-all"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto bg-[#071b4d] text-white px-9 py-4 rounded-full font-bold text-sm hover:bg-[#1746d4] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Submitting Details...</span>
                      ) : (
                        <>
                          <span>Submit Project Details</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-28 bg-[#f4f7fb]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-extrabold text-[#1746d4] uppercase tracking-wider block mb-3">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071b4d] tracking-tight mb-4">
              Answers to Common Questions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Everything you need to know about working with DigiGrow.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-extrabold text-sm sm:text-base text-[#071b4d] hover:text-[#1746d4] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180 text-[#1746d4]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
