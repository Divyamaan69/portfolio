import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { projects, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: "ML, deep learning, and web development projects by Divyamaan Singh.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-36 pb-16 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
        <div className="relative z-10">
          <Reveal>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">What I've built</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold text-pri leading-tight mb-4"
              style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>
              Projects
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-muted max-w-lg text-lg leading-relaxed">
              End-to-end solutions spanning ML research, recommendation systems, and production web deployments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16 bg-bg2">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <div data-hover
                className="group bg-card border border-border p-8 relative overflow-hidden
                  transition-transform duration-300 hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(58,52,86,0.1)]">
                <div className="absolute bottom-0 left-0 right-0 h-[3px]
                  scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  style={{ background: "linear-gradient(90deg,#BAC6B8,#8BA794)" }} />

                <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-acc mb-3">{p.year}</p>
                <h2 className="font-display font-bold text-pri text-2xl leading-tight mb-3">{p.title}</h2>
                <p className="font-body text-muted text-[0.95rem] leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t}
                      className="font-mono text-[0.62rem] px-2.5 py-1 bg-bg border border-border text-muted tracking-wide">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-5">
                  <Link href={`/projects/${p.slug}`}
                    className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-pri
                      inline-flex items-center gap-1 hover:gap-2 transition-all duration-200
                      font-semibold">
                    Read More →
                  </Link>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-muted
                      inline-flex items-center gap-1 hover:gap-2 hover:text-pri
                      transition-all duration-200">
                    {p.linkLabel} ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
