import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { tagline } from "@/lib/content";

export function SectionCta({ title = "Bring everyday life into orbit.", href = "/experience", label = "Explore Orbit" }: { title?: string; href?: string; label?: string }) {
  return <section className="closing-cta"><div className="container closing-inner"><div className="orbit-art" aria-hidden="true"><span /></div><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>{title}</h2><p>{tagline}</p><Link href={href} className="button button-dark">{label}<ArrowUpRight size={18} /></Link></div></div></section>;
}
