import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MouseFollower } from "@/components/MouseFollower";
import { OffCanvasDrawer } from "@/components/OffCanvasDrawer";
import { AuditDialog } from "@/components/AuditDialog";

export const metadata: Metadata = {
  title: "DigiGrow | High-Performance Digital Marketing Agency",
  description:
    "DigiGrow is a premier digital marketing agency specializing in SEO, Google Ads, website design, and social media growth to scale your revenue.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#071b4d] font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-[#1746d4] selection:text-white">
        {/* Trailing Orange Follower Ball */}
        <MouseFollower />

        {/* Global Navigation Header */}
        <Header />

        {/* Page Content */}
        <div className="flex-1">{children}</div>

        {/* Redesigned Premium Footer */}
        <Footer />

        {/* Global Off-Canvas Drawer (Growth Hub / Estimator) */}
        <OffCanvasDrawer />

        {/* Global Free Audit Modal Dialog */}
        <AuditDialog />
      </body>
    </html>
  );
}