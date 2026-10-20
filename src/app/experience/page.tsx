import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ExperienceGallery } from "@/components/experience-gallery";
import { SectionCta } from "@/components/section-cta";

export const metadata: Metadata = { title: "Experience", description: "Explore the real Orbit app screens for overview, expenses, notes, to-dos, and habits." };

export default function Experience() {
  return <><section className="inner-hero experience-hero"><div className="container"><Reveal><span className="eyebrow">ORBIT / EXPERIENCE</span><h1>A clearer view<br /><em>of everyday life.</em></h1><p>Explore the everyday essentials that come together inside Orbit.</p></Reveal></div></section><section className="gallery-section"><ExperienceGallery /></section><section className="experience-outro section"><div className="container"><Reveal><span className="eyebrow">A SPACE FOR IT ALL</span><h2>Different parts of life.<br /><em>One considered place.</em></h2><p>Orbit brings your tasks, habits, notes, and expenses into a personal workspace designed to make the day easier to see.</p></Reveal></div></section><SectionCta /></>;
}
