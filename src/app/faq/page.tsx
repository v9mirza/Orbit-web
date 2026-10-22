import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = { title: "FAQ", description: "Answers about Orbit's features, Android availability, free access, and open source code." };

export default function Faq() {
  return <><section className="inner-hero faq-hero"><div className="container"><Reveal><span className="eyebrow">ORBIT / FAQ</span><h1>Good questions.<br /><em>Clear answers.</em></h1><p>Everything you need to know about Orbit and the experience we’re building.</p></Reveal></div></section><section className="faq-section section"><div className="container faq-grid"><div><span className="eyebrow">THE DETAILS</span><h2>Things you<br />might <em>wonder.</em></h2></div><FaqAccordion /></div></section><section className="faq-end"><div className="container"><h2>See what Orbit brings together.</h2><Link href="/features" className="text-link">Explore the features <ArrowUpRight size={18} /></Link></div></section></>;
}
