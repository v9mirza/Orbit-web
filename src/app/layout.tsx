import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { tagline } from "@/lib/content";
import "./globals.css";
import "./editorial.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")),
  title: { default: "Orbit — A Personal Workspace for Everything That Matters", template: "%s | Orbit" },
  description: "Bring tasks, habits, notes, and expenses together in Orbit, a personal workspace designed to make everyday life clearer and easier to organize.",
  openGraph: { title: "Orbit — A Personal Workspace for Everything That Matters", description: tagline, type: "website", siteName: "Orbit" },
  twitter: { card: "summary_large_image", title: "Orbit", description: tagline },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} ${instrument.variable}`}><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /><noscript><style>{`[style*="opacity: 0"] { opacity: 1 !important; transform: none !important; }`}</style></noscript></body></html>;
}
