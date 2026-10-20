import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AppShot } from "@/components/app-shot";
import { Reveal } from "@/components/reveal";
import { screens } from "@/lib/content";

export const metadata: Metadata = { title: "Features", description: "Explore Orbit's overview, expenses, notes, to-dos, and habits in one personal workspace." };

const details = [
  { title: "See the bigger picture.", text: "Bring the most relevant details of everyday life into one clear overview." },
  { title: "Make spending easier to see.", text: "Keep expenses and budget information visible, helping you understand where your money goes." },
  { title: "Keep the useful things close.", text: "Give your thoughts, notes, and useful information a dedicated place." },
  { title: "Give the next step a place.", text: "Organize everyday tasks so responsibilities are easier to see and manage." },
  { title: "Small actions, seen over time.", text: "Track habits and build a clearer picture of your consistency." },
];

export default function Features() {
  return <><section className="inner-hero"><div className="container"><Reveal><span className="eyebrow">ORBIT / FEATURES</span><h1>Make room for<br /><em>the things that matter.</em></h1><p>Tasks, habits, notes, and expenses come together in one calm personal workspace.</p></Reveal></div></section>
    <div className="feature-sections">{screens.map((screen, index) => <section id={screen.id} className={`feature-section feature-section-${index + 1}`} key={screen.id}><div className="container feature-row"><Reveal className="feature-image"><span className="feature-orbit" aria-hidden="true" /><AppShot screen={screen} /></Reveal><Reveal className="feature-copy"><span className="eyebrow">{String(index + 1).padStart(2, "0")} / {screen.label.toUpperCase()}</span><h2>{details[index].title}</h2><p>{details[index].text}</p><span className="feature-line" /></Reveal></div></section>)}</div>
    <section className="feature-outro section"><div className="container"><Reveal><span className="eyebrow">THE FULL PICTURE</span><h2>It all feels better <em>together.</em></h2><p>Explore the real app screens and see how Orbit brings everyday essentials into one place.</p><Link href="/experience" className="button button-dark">Explore the experience <ArrowUpRight size={18} /></Link></Reveal></div></section>
  </>;
}
