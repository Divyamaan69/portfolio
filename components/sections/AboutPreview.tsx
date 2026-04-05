import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { interests } from "@/lib/data";

export default function AboutPreview() {
  return (
    <section className="py-28 px-8 md:px-16">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div>
          <Reveal>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">Who I am</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-bold text-pri mb-6"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.1 }}>
              Solving real problems<br />using AI & technology.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="font-body text-[1.05rem] leading-[1.9] text-[#1e1c2b] space-y-4">
              <p>
                I'm an AI/ML Engineer and Python developer with a completed Master's in Computer
                Applications (AI/ML) from Jain Deemed-to-be University. My work spans the full journey
                from raw data to deployed, production-ready solutions.
              </p>
              <blockquote className="border-l-2 border-acc pl-5 font-body italic text-xl text-pri my-4">
                "I build what I wish existed."
              </blockquote>
              <p>
                My path began in physics and mathematics — a foundation that drives every ML pipeline
                I design and every backend I architect.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8">
              <Link href="/about"
                className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-8 py-4
                  bg-pri text-bg hover:bg-pri-light transition-colors duration-200">
                Learn More
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "9.37", label: "MCA AI/ML CGPA" },
                { val: "8.75", label: "B.Sc PCM CGPA" },
              ].map((s) => (
                <div key={s.label} className="bg-card border border-border p-6">
                  <div className="font-display font-extrabold text-5xl text-pri leading-none">{s.val}</div>
                  <div className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-px bg-border" />
            <div className="pt-6">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted mb-3">Areas of Interest</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((tag) => (
                  <span key={tag}
                    className="font-mono text-[0.68rem] px-3 py-1.5 border border-border
                      text-pri bg-card hover:bg-pri hover:text-bg transition-all duration-200 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
