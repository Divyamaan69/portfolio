import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="py-28 px-8 md:px-16 bg-bg2">
      <Reveal>
        <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">What I've built</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-bold text-pri mb-3"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.1 }}>
          Featured Projects
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-body text-muted max-w-lg mb-14 leading-relaxed">
          End-to-end solutions spanning ML research, recommendation systems, and production web deployments.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <div data-hover className="group bg-card border border-border p-8 relative overflow-hidden
              transition-transform duration-300 hover:-translate-y-1.5
              hover:shadow-[0_20px_60px_rgba(58,52,86,0.1)] cursor-pointer">
              {/* bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px]
                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                style={{ background: "linear-gradient(90deg,#BAC6B8,#8BA794)" }} />

              <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-acc mb-3">{p.year}</p>
              <h3 className="font-display font-bold text-pri text-2xl mb-3 leading-tight">{p.title}</h3>
              <p className="font-body text-muted text-[0.95rem] leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.62rem] px-2.5 py-1
                    bg-bg border border-border text-muted tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[0.68rem] tracking-[0.1em] uppercase text-pri
                  inline-flex items-center gap-1 transition-all duration-200 group-hover:gap-2">
                {p.linkLabel} →
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25}>
        <div className="mt-12">
          <Link href="/projects"
            className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-8 py-4
              border border-pri text-pri hover:bg-pri hover:text-bg transition-all duration-200">
            View All Projects
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
