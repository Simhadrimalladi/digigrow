"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Globe, Search, Target, MessageSquare, SlidersHorizontal } from "lucide-react";
import { openAuditModal } from "./AuditDialog";
import { openOffCanvasDrawer } from "./OffCanvasDrawer";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subServices = [
    {
      title: "Website Design & Dev",
      href: "/services/website-design",
      desc: "Fast, high-converting websites & landing pages",
      icon: Globe,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "SEO Optimization",
      href: "/services/seo-optimization",
      desc: "Top Google rankings & organic buyer traffic",
      icon: Search,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Google & Meta Ads",
      href: "/services/paid-advertising",
      desc: "High ROAS paid campaigns & instant leads",
      icon: Target,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Social Media Growth",
      href: "/services/social-media",
      desc: "Brand engagement, viral reels & authority",
      icon: MessageSquare,
      color: "text-purple-600 bg-purple-50",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-gray-100"
          : "bg-white py-4 border-b border-gray-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 relative flex-shrink-0">
            <svg viewBox="0 0 40 40" className="w-full h-full">
              <polygon
                points="20,2 37,11 37,29 20,38 3,29 3,11"
                fill="none"
                stroke="#1746d4"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M 12 15 L 20 10 L 28 15 L 28 25 L 20 30 L 12 25 Z"
                fill="none"
                stroke="#1746d4"
                strokeWidth="1.8"
              />
              <circle cx="20" cy="20" r="3.5" fill="#facc15" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[#071b4d] text-lg sm:text-xl tracking-wider leading-none">
              DIGI GROW
            </span>
            <span className="text-[9px] font-semibold text-gray-500 tracking-wider uppercase mt-0.5">
              Digital Marketing Agency
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-semibold transition-all relative py-1 ${
              isActive("/") ? "text-[#1746d4]" : "text-gray-700 hover:text-[#1746d4]"
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1746d4] rounded-full" />
            )}
          </Link>

          <Link
            href="/about"
            className={`text-sm font-semibold transition-all relative py-1 ${
              isActive("/about") ? "text-[#1746d4]" : "text-gray-700 hover:text-[#1746d4]"
            }`}
          >
            About Us
            {isActive("/about") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1746d4] rounded-full" />
            )}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative py-1"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`text-sm font-semibold transition-all inline-flex items-center gap-1 ${
                isActive("/services") ? "text-[#1746d4]" : "text-gray-700 hover:text-[#1746d4]"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </Link>
            {isActive("/services") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1746d4] rounded-full" />
            )}

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full -left-20 w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 animate-in fade-in zoom-in-95 duration-150 z-50">
                <div className="p-2 border-b border-gray-100 flex items-center justify-between mb-2">
                  <span className="text-[11px] font-extrabold uppercase text-[#071b4d] tracking-wider">
                    Our Core Services
                  </span>
                  <Link
                    href="/services"
                    className="text-[11px] font-bold text-[#1746d4] hover:underline"
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    View All Services &rarr;
                  </Link>
                </div>

                <div className="space-y-1">
                  {subServices.map((sub) => {
                    const IconComp = sub.icon;
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className={`w-8 h-8 rounded-lg ${sub.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-extrabold text-[#071b4d] group-hover:text-[#1746d4] transition-colors">
                            {sub.title}
                          </p>
                          <p className="text-[11px] text-gray-500 line-clamp-1">{sub.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/portfolio"
            className={`text-sm font-semibold transition-all relative py-1 ${
              isActive("/portfolio") ? "text-[#1746d4]" : "text-gray-700 hover:text-[#1746d4]"
            }`}
          >
            Portfolio
            {isActive("/portfolio") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1746d4] rounded-full" />
            )}
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-all relative py-1 ${
              isActive("/contact") ? "text-[#1746d4]" : "text-gray-700 hover:text-[#1746d4]"
            }`}
          >
            Contact Us
            {isActive("/contact") && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1746d4] rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Hub OffCanvas Button */}
          <button
            onClick={openOffCanvasDrawer}
            title="Open Growth Hub & Calculator"
            className="p-2.5 rounded-full text-[#071b4d] hover:bg-blue-50 hover:text-[#1746d4] transition-colors cursor-pointer border border-gray-200 hidden sm:inline-flex items-center gap-1.5 text-xs font-bold"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Growth Hub</span>
          </button>

          {/* Free Audit Modal Button */}
          <button
            onClick={openAuditModal}
            className="bg-[#071b4d] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-[#1746d4] transition-all duration-300 shadow-sm cursor-pointer"
          >
            Get a Free Audit
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#1746d4] rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-bold text-base py-1 ${isActive("/") ? "text-[#1746d4]" : "text-gray-700"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-bold text-base py-1 ${isActive("/about") ? "text-[#1746d4]" : "text-gray-700"}`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-bold text-base py-1 ${isActive("/services") ? "text-[#1746d4]" : "text-gray-700"}`}
            >
              Services
            </Link>

            {/* Sub-services in Mobile */}
            <div className="pl-4 space-y-2 py-1 border-l-2 border-blue-100">
              <Link
                href="/services/website-design"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-gray-600 block hover:text-[#1746d4]"
              >
                &bull; Website Design &amp; Dev
              </Link>
              <Link
                href="/services/seo-optimization"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-gray-600 block hover:text-[#1746d4]"
              >
                &bull; SEO Optimization
              </Link>
              <Link
                href="/services/paid-advertising"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-gray-600 block hover:text-[#1746d4]"
              >
                &bull; Google &amp; Meta Ads
              </Link>
              <Link
                href="/services/social-media"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-gray-600 block hover:text-[#1746d4]"
              >
                &bull; Social Media Growth
              </Link>
            </div>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-bold text-base py-1 ${isActive("/portfolio") ? "text-[#1746d4]" : "text-gray-700"}`}
            >
              Portfolio
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-bold text-base py-1 ${isActive("/contact") ? "text-[#1746d4]" : "text-gray-700"}`}
            >
              Contact Us
            </Link>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openOffCanvasDrawer();
                }}
                className="w-full bg-blue-50 text-[#1746d4] py-2.5 rounded-full text-xs font-bold"
              >
                Growth Hub &amp; ROI Calculator
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuditModal();
                }}
                className="w-full bg-[#071b4d] text-white py-3 rounded-full text-sm font-bold hover:bg-[#1746d4] transition-colors"
              >
                Get a Free Audit
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}