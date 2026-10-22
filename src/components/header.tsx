"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { androidDownload } from "@/lib/content";
import { Brand } from "./brand";

const links = [
  { href: "/features", label: "Features" },
  { href: "/experience", label: "Experience" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const progressRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const updateHeader = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setCompact(window.scrollY > 32);
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? Math.max(0, Math.min(1, window.scrollY / scrollable)) : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
        frame = 0;
      });
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
      window.cancelAnimationFrame(frame);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return <header className={`site-header${compact ? " is-compact" : ""}`}>
    <div className="container header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
      </nav>
      <a className="button button-dark header-cta" href={androidDownload.href} target="_blank" rel="noopener noreferrer" aria-label="Open the Orbit GitHub release to download the Android APK in a new tab">{androidDownload.label} <Download size={17} /></a>
      <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" inert={!open}>
      {links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={16} /></Link>)}
      <a className="button button-dark" href={androidDownload.href} target="_blank" rel="noopener noreferrer" aria-label="Open the Orbit GitHub release to download the Android APK in a new tab" onClick={() => setOpen(false)}>{androidDownload.label} <Download size={17} /></a>
    </nav>
    <span ref={progressRef} className="scroll-progress" aria-hidden="true" />
  </header>;
}
