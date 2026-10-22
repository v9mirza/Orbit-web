import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, CodeXml, Download, NotebookPen, Repeat2, Wallet, ListTodo } from "lucide-react";
import { AppShot } from "@/components/app-shot";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal } from "@/components/reveal";
import { SectionCta } from "@/components/section-cta";
import { androidDownload, screens, sourceRepository } from "@/lib/content";

export const metadata: Metadata = { title: "Orbit — Free and Open Source Personal Workspace", description: "Orbit is a free, open source Android app for tasks, habits, notes, and expenses. Download the app and explore its MIT-licensed code on GitHub." };

const cards = [
  { icon: ListTodo, number: "01", title: "Make a plan", text: "Give tasks a clear place and make the next step easier to find." },
  { icon: Repeat2, number: "02", title: "Build a rhythm", text: "Keep track of habits and the small actions that add up." },
  { icon: NotebookPen, number: "03", title: "Keep your notes close", text: "Capture information you want to revisit without losing the thread." },
  { icon: Wallet, number: "04", title: "Understand your spending", text: "Track expenses and maintain a clearer view of your budget." },
];

export default function Home() {
  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy"><Reveal><span className="eyebrow">FREE &amp; OPEN SOURCE / A PERSONAL WORKSPACE</span><h1>Make space for<br /><em>everything that<br />matters.</em></h1></Reveal><Reveal delay={0.1}><p className="lead">Your tasks, habits, notes, and expenses. One calm place to bring everyday life together, free and open source.</p><div className="hero-actions"><a className="button button-dark" href={androidDownload.href}>{androidDownload.label} <Download size={18} /></a><Link className="text-link" href="/experience">Discover the experience <ArrowRight size={17} /></Link></div><p className="hero-download-note">On GitHub, tap <strong>{androidDownload.filename}</strong> under Assets.</p><a className="hero-source-link" href={sourceRepository}><CodeXml size={16} /> View the source on GitHub <ArrowUpRight size={15} /></a></Reveal></div>
      <Reveal className="hero-visual" delay={0.15}>
        <div className="hero-orbit" aria-hidden="true" />
        <span className="hero-visual-eyebrow">ORBIT / YOUR DAILY OVERVIEW</span>
        <div className="hero-phone"><AppShot screen={screens[0]} priority /></div>
      </Reveal>
    </div><div className="container hero-bottom"><span>THE EVERYDAY, TOGETHER</span><nav className="orbit-map" aria-label="Explore Orbit's core areas"><Link href="/features#to-dos">TASKS</Link><Link href="/features#habits">HABITS</Link><Link href="/features#notes">NOTES</Link><Link href="/features#expenses">EXPENSES</Link></nav><ArrowDownRight size={18} aria-hidden="true" /></div></section>

    <section className="intro section"><div className="container intro-grid"><Reveal><span className="eyebrow">A LITTLE MORE ROOM TO THINK</span><h2>Less noise.<br /><em>More clarity.</em></h2></Reveal><Reveal delay={0.1}><p>Everyday life has enough moving parts. Orbit gives your tasks, habits, notes, and expenses a considered place, so you can focus on what deserves your attention.</p><span className="intro-rule" /></Reveal></div></section>

    <section className="open-source-section" aria-labelledby="open-source-title"><div className="container open-source-grid"><Reveal><span className="eyebrow">OPEN BY DESIGN</span><h2 id="open-source-title">Your workspace.<br /><em>Open to everyone.</em></h2></Reveal><Reveal delay={0.1} className="open-source-copy"><p>Orbit is free to download and use. Its source code is public under the MIT license, so you can see how the app is built and follow its development.</p><a className="text-link" href={sourceRepository}>Explore the code on GitHub <ArrowUpRight size={18} /></a></Reveal></div></section>

    <section className="showcase section"><div className="container"><Reveal className="section-heading"><span className="eyebrow">THE ORBIT EXPERIENCE</span><div className="section-heading-grid"><h2>A clearer view of<br /><em>everyday life.</em></h2><p>Four connected tools. One place to see the bigger picture.</p></div></Reveal><div className="showcase-grid">{screens.map((screen, i) => <Reveal className={`showcase-card showcase-card-${i + 1}`} key={screen.id} delay={i % 3 * 0.06} hoverLift><div className="showcase-image"><span className="showcase-card-label">{String(i + 1).padStart(2, "0")} / {screen.label.toUpperCase()}</span><AppShot screen={screen} /></div><div className="showcase-card-copy">{i === 0 && <span className="showcase-feature-kicker">YOUR DAY, ALL TOGETHER</span>}<h3>{screen.title}</h3><p>{screen.description}</p><Link className="showcase-card-link" href={screen.id === "overview" ? "/experience" : `/features#${screen.id}`}>Explore {screen.label} <ArrowUpRight size={15} /></Link></div></Reveal>)}</div><Link className="text-link showcase-more" href="/features">Explore all features <ArrowUpRight size={18} /></Link></div></section>

    <section className="benefits section"><div className="container"><Reveal className="benefits-heading"><span className="eyebrow">THE ESSENTIALS</span><h2>Everything you need.<br /><em>Nothing in the way.</em></h2></Reveal><div className="benefit-grid">{cards.map((card, index) => <Reveal className="benefit-card" key={card.title} delay={index * 0.06} hoverLift><div className="benefit-top"><card.icon size={24} strokeWidth={1.5} /><span>{card.number}</span></div><div><h3>{card.title}</h3><p>{card.text}</p></div></Reveal>)}</div></div></section>

    <section id="one-workspace" className="dark-statement"><div className="container dark-grid">
      <Reveal className="dark-copy">
        <span className="eyebrow">ONE LIFE. ONE WORKSPACE.</span>
        <h2><span>Your life isn’t one thing.</span><em>Your workspace shouldn’t be either.</em></h2>
        <p>Tasks, habits, notes, and expenses are different parts of the same life. Orbit gives them room to come together.</p>
        <div className="dark-areas" aria-label="In your Orbit workspace"><span>Tasks</span><span>Habits</span><span>Notes</span><span>Expenses</span></div>
      </Reveal>
      <Reveal className="dark-visual"><span className="dark-ring" aria-hidden="true" /><span className="dark-visual-label">THE EVERYDAY, TOGETHER <span>OVERVIEW / 01</span></span><AppShot screen={screens[0]} /></Reveal>
    </div></section>

    <section className="personal section"><div className="container personal-grid"><Reveal className="personal-visual"><div className="personal-orbit" aria-hidden="true" /><AppShot screen={screens[3]} /></Reveal><Reveal className="personal-copy"><span className="eyebrow">MADE FOR THE EVERYDAY</span><h2>Room for the things <em>that matter.</em></h2><p>From the next task to the habits you’re building and the money you’re managing, Orbit brings everyday essentials into one more considered view.</p><ul><li>Everyday essentials, together.</li><li>A clearer view of what needs attention.</li><li>A calmer way to stay organized.</li></ul><Link className="text-link" href="/experience">See the experience <ArrowUpRight size={18} /></Link></Reveal></div></section>

    <section className="philosophy-preview section"><div className="container philosophy-grid"><Reveal><span className="eyebrow">THE THINKING BEHIND ORBIT</span><h2>Progress doesn’t<br />need to be <em>loud.</em></h2><p>A little more clarity. A little less friction. Better systems for the life you’re already living.</p><Link className="text-link" href="/philosophy">Explore our philosophy <ArrowUpRight size={18} /></Link></Reveal><div className="philosophy-orbit" aria-hidden="true"><span /></div></div></section>
    <section className="home-faq section"><div className="container home-faq-grid"><Reveal><span className="eyebrow">GOOD TO KNOW</span><h2>Questions,<br /><em>answered.</em></h2><p>The essentials about Orbit, all in one place.</p><Link className="text-link" href="/faq">View all questions <ArrowUpRight size={18} /></Link></Reveal><FaqAccordion limit={4} /></div></section>
    <SectionCta />
  </>;
}
