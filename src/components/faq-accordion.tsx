"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  { question: "What is Orbit?", answer: "Orbit is a personal workspace that brings tasks, habits, notes, and expenses into one calm place." },
  { question: "Is Orbit free to use?", answer: "Yes. Orbit is free to download and use on Android." },
  { question: "Is Orbit open source?", answer: "Yes. Orbit's source code is public on GitHub under the MIT license." },
  { question: "What can I manage with Orbit?", answer: "The app includes an everyday overview plus dedicated areas for expenses, notes, to-dos, and habits." },
  { question: "Can I track expenses and budgets?", answer: "Yes. Orbit shows expenses, monthly spending, and budget information in its Expenses area." },
  { question: "Can I organize tasks and habits?", answer: "Yes. Orbit has separate To-dos and Habits areas for keeping track of everyday responsibilities and routines." },
  { question: "Can I keep notes in Orbit?", answer: "Yes. Orbit has a Notes area for capturing and finding information you want to revisit." },
  { question: "Is Orbit available on Android and iOS?", answer: "Orbit is available as an Android APK from the GitHub release linked on this website. Under Assets, tap orbit-v1.0.0.apk. iOS availability has not been announced." },
  { question: "Does Orbit work offline?", answer: "Offline functionality has not yet been announced." },
  { question: "How does Orbit handle personal data?", answer: <>Orbit stores your records locally on your device. It does not require an account or offer cloud sync. Read the <Link href="/privacy">Privacy Policy</Link> for backup and deletion details.</> },
];

export function FaqAccordion({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  return <div className="faq-list">{faqs.slice(0, limit).map((item, index) => <div className="faq-item" key={item.question}><h2><button type="button" id={`faq-button-${limit ?? "all"}-${index}`} aria-expanded={open === index} aria-controls={`faq-answer-${limit ?? "all"}-${index}`} onClick={() => setOpen(open === index ? null : index)}><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{item.question}</span><span className="faq-icon">{open === index ? <Minus size={20} /> : <Plus size={20} />}</span></button></h2><motion.div id={`faq-answer-${limit ?? "all"}-${index}`} role="region" aria-labelledby={`faq-button-${limit ?? "all"}-${index}`} aria-hidden={open !== index} inert={open !== index} initial={false} animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }} className="faq-answer"><p>{item.answer}</p></motion.div></div>)}</div>;
}
