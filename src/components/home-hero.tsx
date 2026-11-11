"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight } from "./icons";

export function HomeHero() {
  const portrait = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = preference.matches ? 0 : Math.min(Math.max(window.scrollY / 700, 0), 1);
      if (portrait.current) portrait.current.style.transform = `translateY(${progress * 60}px) scale(${1 - progress * 0.1})`;
      if (title.current) title.current.style.transform = `translateX(${-progress * 50}px)`;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    preference.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      preference.removeEventListener("change", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="container hero-grid">
        <div className="hero-portrait" ref={portrait}>
          <div className="portrait-frame">
            <Image src="/images/gioacchino-orlando.jpg" alt="Ritratto di Gioacchino Orlando" fill priority sizes="(max-width: 767px) calc(100vw - 48px), 420px" />
          </div>
        </div>
        <div className="hero-copy" ref={title}>
          <p className="hero-label mono">autore · editor · reporter</p>
          <h1 id="home-title">gioacchino<br />orlando</h1>
          <div className="hero-actions">
            <Link href="/libri" className="button mono">Libri<ArrowRight /></Link>
            <Link href="/articoli" className="button button-secondary mono">Articoli<ArrowRight /></Link>
          </div>
        </div>
      </div>
      <a href="#biografia" className="container scroll-hint mono">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14m-7-7 7 7 7-7" /></svg>
        scorri
      </a>
    </section>
  );
}
