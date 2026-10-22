"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { screens } from "@/lib/content";
import { AppShot } from "./app-shot";

export function ExperienceGallery() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const screen = screens[active];
  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % screens.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + screens.length) % screens.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = screens.length - 1;
    else return;
    event.preventDefault(); setActive(next);
    document.getElementById(`tab-${screens[next].id}`)?.focus();
  }
  return <div className="experience-gallery container"><div className="gallery-copy"><div className="gallery-tabs" role="tablist" aria-label="Explore Orbit screens">{screens.map((item, index) => <button key={item.id} id={`tab-${item.id}`} type="button" role="tab" aria-selected={active === index} aria-controls="gallery-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => onKeyDown(event, index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}<span className="tab-arrow">↗</span></button>)}</div><div id="gallery-panel" role="tabpanel" aria-labelledby={`tab-${screen.id}`} tabIndex={0} className="gallery-description"><AnimatePresence mode="wait" initial={false}><motion.div key={screen.id} initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : 0.25, ease: "easeOut" }}><span className="eyebrow">INSIDE ORBIT / {screen.label.toUpperCase()}</span><h2>{screen.title}</h2><p>{screen.description}</p><Link className="text-link" href="/features">Explore the features <ArrowUpRight size={18} /></Link></motion.div></AnimatePresence></div></div><div className="gallery-stage"><span className="gallery-ring" aria-hidden="true" /><AnimatePresence mode="wait"><motion.div key={screen.id} initial={reduced ? false : { opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduced ? undefined : { opacity: 0, y: -10, scale: 0.99 }} transition={{ duration: reduced ? 0 : 0.36, ease: "easeOut" }}><AppShot screen={screen} /></motion.div></AnimatePresence><span className="gallery-caption">REAL SCREENS. EVERYDAY CLARITY.</span></div></div>;
}
