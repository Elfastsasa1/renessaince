import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { identity, skills, projects, experience, philosophy } from './content';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    gsap.utils.toArray('.reveal').forEach((el) => {
      gsap.fromTo(el, { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' }
      });
    });
    return () => lenis.destroy();
  }, []);

  return (
    <main ref={rootRef} className="relative overflow-hidden bg-obsidian">
      <section className="relative min-h-screen flex items-center px-6 md:px-16 marble-glow">
        <div className="absolute inset-0 opacity-25" style={{background:'radial-gradient(circle at 70% 20%, #c9a56a33, transparent 40%)'}} />
        <div className="max-w-5xl space-y-6 z-10 reveal">
          <p className="text-gold tracking-[0.3em] uppercase text-xs">Philosopher Builder from the Future</p>
          <h1 className="font-serif text-5xl md:text-8xl leading-[0.9]">{identity.name}</h1>
          <p className="text-lg md:text-2xl text-marble/80 max-w-3xl">{identity.intro}</p>
          <motion.a whileHover={{ scale: 1.04 }} className="inline-block border border-gold/60 px-8 py-3 rounded-full">Enter The Portfolio</motion.a>
        </div>
      </section>

      <section className="px-6 md:px-16 py-28 reveal"><h2 className="section-title">About</h2><div className="gold-line my-6" /><p className="text-marble/80 max-w-4xl text-lg">Sugeng Trianto is a modern digital craftsman blending renaissance composition, stoic clarity, and advanced frontend engineering. His work focuses on emotionally rich interfaces, premium brand storytelling, and precision-built web systems.</p></section>

      <section className="px-6 md:px-16 py-28 reveal"><h2 className="section-title">Skills</h2><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{skills.map(s=><div key={s} className="cinematic-card p-5 hover:border-gold/60 transition">{s}</div>)}</div></section>

      <section className="px-6 md:px-16 py-28 reveal"><h2 className="section-title">Projects</h2><div className="mt-10 space-y-6">{projects.map((p,i)=><article key={p.title} className="cinematic-card p-8"><p className="text-gold">0{i+1}</p><h3 className="font-serif text-3xl">{p.title}</h3><p className="text-marble/75 mt-3">{p.desc}</p></article>)}</div></section>

      <section className="px-6 md:px-16 py-28 reveal"><h2 className="section-title">Journey</h2><div className="mt-10 space-y-6">{experience.map(e=><div key={e.era} className="border-l-2 border-gold/40 pl-6"><h3 className="font-serif text-3xl text-gold">{e.era}</h3><p className="text-marble/80">{e.story}</p></div>)}</div></section>

      <section className="px-6 md:px-16 py-28 reveal"><h2 className="section-title">Philosophy</h2><div className="mt-10 grid md:grid-cols-2 gap-6">{philosophy.map(q=><blockquote key={q} className="cinematic-card p-6 font-serif text-2xl text-marble/90">{q}</blockquote>)}</div></section>

      <section className="px-6 md:px-16 py-28 reveal"><h2 className="section-title">Contact</h2><p className="mt-4 text-marble/80 max-w-3xl">If you are building a bold digital product and want timeless craft with future-ready execution, let’s build it together.</p><a href="mailto:sugeng@example.com" className="mt-8 inline-block border border-gold/70 px-8 py-3 rounded-full">Start a Conversation</a></section>
    </main>
  );
}

