import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { androidDownload, tagline } from "@/lib/content";

export function SectionCta({ title = "Bring everyday life into orbit.", href = androidDownload.href, label = androidDownload.label }: { title?: string; href?: string; label?: string }) {
  const isDownload = href === androidDownload.href;
  return <section className="closing-cta"><div className="container closing-inner"><div className="orbit-art" aria-hidden="true"><span /></div><div><span className="eyebrow">READY WHEN YOU ARE</span><h2>{title}</h2><p>{tagline}</p>{isDownload ? <a href={href} className="button button-dark">{label}<Download size={18} /></a> : <Link href={href} className="button button-dark">{label}<ArrowUpRight size={18} /></Link>}</div></div></section>;
}
