import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { interests, education, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `About — ${siteConfig.name}`,
  description: "Journey, skills, and mindset of Divyamaan Singh — AI/ML Engineer.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
        <div className="relative z-10 max-w-3xl">
          <Reveal>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">Who I am</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold text-pri leading-tight mb-6"
              style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>
              Builder.<br />Problem Solver.<br />Writer.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body italic text-muted text-2xl">
              "I build what I wish existed."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-8 md:px-16 bg-bg2">
        <div className="grid md:grid-cols-2 gap-20 items-start max-w-6xl">
          <div>
            <Reveal>
              <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-4">My Journey</p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="font-body text-[1.1rem] leading-[1.9] space-y-5">
                <p>
                  I started with physics, chemistry, and mathematics at Amrita Vishwa Vidyapeetham —
                  a degree that taught me how to think precisely and ask the right questions.
                  That analytical foundation became the engine for everything I've built since.
                </p>
                <p>
                  My pivot to AI/ML through Jain University's MCA program wasn't just academic —
                  it was driven by a genuine curiosity about <em className="text-pri-light italic">what machines can learn</em> and
                  how that learning can solve problems that matter.
                </p>
                <p>
                  I've built a mental health detection model from self-collected data, engineered
                  a recommendation system for Indian literature, and shipped a full-stack Django
                  website live to production — handling everything from model design to DNS config.
                </p>
                <p>
                  Beyond code, I've co-authored academic research papers, written SEO content
                  across six editorial verticals, and served as class representative for 60+ students.
                  That range — technical depth alongside communication skill — shapes how I approach
                  every project.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { val: "9.37", label: "MCA AI/ML CGPA" },
                  { val: "8.75", label: "B.Sc PCM CGPA" },
                  { val: "1", label: "ML/NLP Project" },
                  { val: "2", label: "Production Sites Live" },
                ].map((s) => (
                  <div key={s.label} className="bg-card border border-border p-6">
                    <div className="font-display font-extrabold text-5xl text-pri leading-none">{s.val}</div>
                    <div className="font-mono text-[0.63rem] tracking-[0.1em] uppercase text-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="h-px bg-border" />
              <div className="pt-5">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted mb-3">Areas of Interest</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((tag) => (
                    <span key={tag}
                      className="font-mono text-[0.68rem] px-3 py-1.5 border border-border
                        text-pri bg-bg hover:bg-pri hover:text-bg transition-all duration-200 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-8 md:px-16">
        <Reveal>
          <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">Academic Background</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-bold text-pri mb-12"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>
            Education
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <div className="bg-card border border-border p-8 relative">
                <div className="absolute top-0 left-0 bottom-0 w-[3px]"
                  style={{ background: "linear-gradient(180deg,#8BA794,#BAC6B8)" }} />
                <h3 className="font-display font-bold text-pri text-xl leading-snug mb-2">{e.degree}</h3>
                <p className="font-mono text-[0.68rem] text-muted tracking-wide mb-3">{e.school}</p>
                <p className="font-mono text-[0.65rem] text-acc tracking-[0.1em] uppercase">{e.year}</p>
                <div className="mt-4">
                  <span className="font-display font-extrabold text-5xl text-pri">{e.gpa}</span>
                  <span className="font-mono text-[0.63rem] text-muted tracking-wider ml-2 align-middle">{e.gpaLabel}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mindset */}
      <section className="py-20 px-8 md:px-16 bg-bg2">
        <Reveal>
          <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">How I work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-bold text-pri mb-12"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>
            Mindset
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
          {[
            { title: "Curiosity First", body: "Every project starts with a question I genuinely want answered. That curiosity drives deeper exploration than any deadline could." },
            { title: "End-to-End Ownership", body: "From dataset design to DNS configuration — I don't hand off at the edge of comfort. I follow the problem wherever it leads." },
            { title: "Clear Communication", body: "Years of writing, research, and representing 60+ students taught me that good technical work means nothing if it can't be clearly explained." },
          ].map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <div className="bg-card border border-border p-8">
                <h3 className="font-display font-bold text-pri text-xl mb-3">{m.title}</h3>
                <p className="font-body text-muted leading-relaxed">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
