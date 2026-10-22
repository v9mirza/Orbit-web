import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Brand } from "./brand";
import { androidDownload, sourceRepository, tagline } from "@/lib/content";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div><Brand light /><p>{tagline}</p></div>
      <nav aria-label="Footer navigation">
        <Link href="/features">Features</Link><Link href="/experience">Experience</Link><Link href="/philosophy">Philosophy</Link><Link href="/faq">FAQ</Link><Link href="/privacy">Privacy Policy</Link><a href={sourceRepository}>Open source on GitHub</a><a href={androidDownload.href} target="_blank" rel="noopener noreferrer">Download for Android</a>
      </nav>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Orbit. Made for the everyday.</span><a href="#top">Back to top <ArrowUp size={15} /></a></div>
  </footer>;
}
