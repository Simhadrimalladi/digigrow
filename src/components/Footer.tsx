"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Send,
} from "lucide-react";
import { openOffCanvasDrawer } from "./OffCanvasDrawer";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      bg: "bg-[#1877f2] hover:bg-[#166fe5]",
      svg: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      bg: "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90",
      svg: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      bg: "bg-[#0a66c2] hover:bg-[#095196]",
      svg: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/919876543210",
      bg: "bg-[#25d366] hover:bg-[#20ba5a]",
      svg: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      bg: "bg-[#ff0000] hover:bg-[#cc0000]",
      svg: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#071330] via-[#040c22] to-[#020614] text-white pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1746d4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Newsletter & Strategy Callout Bar */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 mb-16 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1746d4]/30 border border-[#1746d4]/50 text-[#60a5fa] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Growth Insights</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Get Weekly Marketing Strategies
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Join 5,000+ founders receiving our actionable playbooks on SEO, paid ads, and high-converting websites.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-shrink-0">
            {subscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-6 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>You&apos;re subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full sm:w-72 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#1746d4] text-white px-7 py-3.5 rounded-full text-xs font-bold hover:bg-[#2563eb] transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Badges (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 mb-5 group inline-flex">
                <div className="w-10 h-10 relative flex-shrink-0">
                  <svg viewBox="0 0 40 40" className="w-full h-full">
                    <polygon
                      points="20,2 37,11 37,29 20,38 3,29 3,11"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 12 15 L 20 10 L 28 15 L 28 25 L 20 30 L 12 25 Z"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth="1.8"
                    />
                    <circle cx="20" cy="20" r="3.5" fill="#facc15" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-white text-xl tracking-wider leading-none">
                    DIGI GROW
                  </span>
                  <span className="text-[8.5px] font-semibold text-gray-400 tracking-wider uppercase mt-0.5">
                    Digital Marketing Agency
                  </span>
                </div>
              </Link>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
                We are a performance-focused digital growth agency transforming visionary brands through data-backed SEO, high-ROAS ads, and modern web applications.
              </p>

              {/* Partner Badges */}
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-[10px] font-bold text-gray-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Google Premier Partner</span>
                </div>
                <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-[10px] font-bold text-gray-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Meta Certified</span>
                </div>
              </div>

              {/* Highly Visible Vibrant Social Media Icons */}
              <div className="pt-2">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3">
                  Connect With Us
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className={`w-10 h-10 rounded-xl ${social.bg} flex items-center justify-center shadow-lg transition-all transform hover:scale-110 hover:-translate-y-0.5`}
                    >
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-sm tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1746d4]" />
              Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400 font-medium">
              <li>
                <Link href="/" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-[#38bdf8] transition-colors" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-[#38bdf8] transition-colors" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-[#38bdf8] transition-colors" />
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-[#38bdf8] transition-colors" />
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-[#38bdf8] transition-colors" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={openOffCanvasDrawer}
                  className="hover:text-[#38bdf8] transition-colors flex items-center gap-1.5 group text-left cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-[#38bdf8] transition-colors" />
                  <span>Growth Hub &amp; ROI</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Growth Services (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-sm tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              Our Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-400 font-medium">
              <li>
                <Link href="/services/website-design" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Website Design &amp; Dev</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-bold">Fast</span>
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimization" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>SEO Optimization</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">Hot</span>
                </Link>
              </li>
              <li>
                <Link href="/services/paid-advertising" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Google &amp; Meta Ads</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">Top ROI</span>
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Social Media Growth</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Full-Funnel CRO Strategy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-extrabold text-sm tracking-wide uppercase mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#facc15]" />
              Office &amp; Inquiries
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-blue-400 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>123, Business Park, Hitech City, Hyderabad - 500081</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-amber-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:info@digigrow.com" className="hover:text-white transition-colors">
                  info@digigrow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 DigiGrow Digital Marketing Agency. All Rights Reserved.</p>

          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Cookie Settings</Link>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-xl bg-[#1746d4] text-white flex items-center justify-center hover:bg-[#2563eb] transition-all shadow-md cursor-pointer hover:scale-105"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
}