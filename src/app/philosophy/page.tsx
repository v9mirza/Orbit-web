import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { SectionCta } from "@/components/section-cta";

export const metadata: Metadata = { title: "Philosophy", description: "The thinking behind Orbit: clarity, consistency, and personal tools that serve everyday life." };

const principles = [
  { number: "01", title: "Clarity over clutter", text: "Useful information should be accessible without overwhelming the experience." },
  { number: "02", title: "Consistency over intensity", text: "Small, repeatable actions can matter more than elaborate systems." },
  { number: "03", title: "One workspace, many priorities", text: "Everyday life is interconnected. Personal organization should reflect that reality." },
  { number: "04", title: "Tools should serve the person", text: "The interface should support your life rather than demand constant attention." },
];

export default function Philosophy() {
  return <><section className="inner-hero philosophy-hero"><div className="container"><Reveal><span className="eyebrow">ORBIT / PHILOSOPHY</span><h1>Clarity is a practice.<br /><em>Not a destination.</em></h1><p>We believe a good personal workspace should make everyday life easier to navigate, not give you another system to maintain.</p></Reveal><span className="philosophy-hero-ring" aria-hidden="true" /></div></section><section className="principles section"><div className="container"><Reveal className="principles-intro"><span className="eyebrow">WHAT GUIDES US</span><h2>A more thoughtful way<br />to <em>stay organized.</em></h2></Reveal><div className="principles-list">{principles.map(principle => <Reveal className="principle" key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.text}</p></Reveal>)}</div></div></section><section className="philosophy-quote"><div className="container"><Reveal><span className="eyebrow">A SIMPLE IDEA</span><p>“A little more room for the life you’re already living.”</p><span className="quote-orbit" aria-hidden="true" /></Reveal></div></section><SectionCta title="Make room for what matters." href="/features" label="Explore the features" /></>;
}
