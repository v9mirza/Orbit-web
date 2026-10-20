import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Brand } from "./brand";
import { tagline } from "@/lib/content";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div><Brand light /><p>{tagline}</p></div>
      <nav aria-label="Footer navigation">
        <Link href="/features">Features</Link><Link href="/experience">Experience</Link><Link href="/philosophy">Philosophy</Link><Link href="/faq">FAQ</Link>
      </nav>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Orbit. Made for the everyday.</span><a href="#top">Back to top <ArrowUp size={15} /></a></div>
  </footer>;
}
