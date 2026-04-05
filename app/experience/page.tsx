import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { experience, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Experience — ${siteConfig.name}`,
  description: "Work experience and professional history of Divyamaan Singh.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="pt-36 pb-16 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
        <div className="relative z-10">
          <Reveal>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">Where I've worked</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold text-pri leading-tight mb-4"
              style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>
              Experience
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16">
        <div className="max-w-3xl space-y-0">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.08}>
              <div className={`grid md:grid-cols-[160px_1fr] gap-6 md:gap-10 py-12
                ${i < experience.length - 1 ? "border-b border-border" : ""}`}>
                <div>
                  <p className="font-mono text-[0.65rem] text-acc tracking-[0.1em] uppercase leading-relaxed">{e.period}</p>
                  <p className="font-mono text-[0.65rem] text-muted tracking-wide mt-1">{e.company}</p>
                  <p className="font-mono text-[0.6rem] text-muted tracking-wide">{e.type}</p>
                </div>
                <div>
                  <h2 className="font-display font-semibold text-pri text-2xl mb-4">{e.role}</h2>
                  <ul className="space-y-2">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="font-body text-muted text-[0.95rem] leading-relaxed pl-4 relative
                        before:absolute before:left-0 before:top-2 before:w-1.5 before:h-px before:bg-acc">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Positions of Responsibility */}
      <section className="py-16 px-8 md:px-16 bg-bg2">
        <Reveal>
          <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">Leadership</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-bold text-pri mb-10"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>
            Positions of Responsibility
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="bg-card border border-border p-8 max-w-2xl relative">
            <div className="absolute top-0 left-0 bottom-0 w-[3px]"
              style={{ background: "linear-gradient(180deg,#8BA794,#BAC6B8)" }} />
            <h3 className="font-display font-bold text-pri text-xl mb-1">Class Representative</h3>
            <p className="font-mono text-[0.68rem] text-muted tracking-wide mb-1">
              Amrita Vishwa Vidyapeetham, Mysore · B.Sc PCM & PMCS
            </p>
            <p className="font-mono text-[0.65rem] text-acc tracking-[0.1em] uppercase mb-4">2020 – 2023</p>
            <p className="font-body text-muted leading-relaxed">
              Served as the primary liaison between 60+ students and faculty, facilitating communication,
              addressing grievances, and coordinating academic activities across three years.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
