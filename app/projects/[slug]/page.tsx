import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { use } from "react";
import { projectDetails } from "@/lib/projects-detail";
import { siteConfig } from "@/lib/data";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
    return projectDetails.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projectDetails.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} — ${siteConfig.name}`,
        description: project.tagline,
    };
}

export default function ProjectDetailPage({ params }: Props) {
    const { slug } = use(params);
    const project = projectDetails.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <>
            {/* Header */}
            <section className="pt-36 pb-16 px-8 md:px-16 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
                <div className="relative z-10 max-w-4xl">
                    <Link href="/projects"
                        className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-muted
                          hover:text-pri transition-colors inline-flex items-center gap-1 mb-10">
                        ← All Projects
                    </Link>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-acc">
                            {project.year}
                        </span>
                        <span className="font-mono text-[0.62rem] tracking-wider uppercase px-2.5 py-1
                          bg-sec/30 text-pri border border-border">
                            {project.status}
                        </span>
                    </div>
                    <h1 className="font-display font-extrabold text-pri leading-tight mb-4"
                        style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}>
                        {project.title}
                    </h1>
                    <p className="font-body italic text-muted text-xl mb-6">{project.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((t) => (
                            <span key={t} className="font-mono text-[0.62rem] px-2.5 py-1
                              bg-card border border-border text-muted tracking-wide">
                                {t}
                            </span>
                        ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-6 py-3.5
                          bg-pri text-bg hover:bg-pri-light transition-colors duration-200 inline-block">
                        {project.linkLabel} →
                    </a>
                </div>
            </section>

            {/* Body */}
            <section className="py-16 px-8 md:px-16 bg-bg2">
                <div className="max-w-4xl space-y-16">

                    {/* What + Why */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { label: "What", content: project.what },
                            { label: "Why", content: project.why },
                        ].map((block) => (
                            <div key={block.label} className="bg-card border border-border p-8 relative">
                                <div className="absolute top-0 left-0 bottom-0 w-[3px]"
                                    style={{ background: "linear-gradient(180deg,#8BA794,#BAC6B8)" }} />
                                <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-acc mb-3">
                                    {block.label}
                                </p>
                                <p className="font-body text-[#1e1c2b] leading-relaxed">{block.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* How I built it */}
                    <div>
                        <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-acc mb-6">
                            How I built it
                        </p>
                        <div className="space-y-3">
                            {project.how.map((step, i) => (
                                <div key={i} className="flex flex-col sm:flex-row gap-3 sm:gap-5
                                  bg-card border border-border p-5">
                                    <span className="font-display font-extrabold text-xl text-sec/60 leading-none shrink-0">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <p className="font-body text-[#1e1c2b] leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Challenges */}
                    <div>
                        <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-acc mb-6">
                            Challenges
                        </p>
                        <div className="space-y-3">
                            {project.challenges.map((c, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <span className="text-acc mt-1.5 shrink-0">—</span>
                                    <p className="font-body text-muted leading-relaxed">{c}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Outcome */}
                    <div className="bg-pri p-8">
                        <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-acc mb-3">
                            Outcome
                        </p>
                        <p className="font-body text-bg text-lg leading-relaxed">{project.outcome}</p>
                    </div>

                    {/* Stack */}
                    <div>
                        <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-acc mb-6">
                            Tech Stack
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {project.stack.map((s) => (
                                <div key={s.category} className="bg-card border border-border p-5">
                                    <p className="font-mono text-[0.62rem] tracking-wider uppercase text-muted mb-3">
                                        {s.category}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {s.items.map((item) => (
                                            <span key={item} className="font-mono text-[0.65rem] px-2 py-1
                                              bg-bg border border-border text-pri tracking-wide">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer nav */}
            <section className="py-12 px-8 md:px-16 border-t border-border">
                <Link href="/projects"
                    className="font-mono text-[0.72rem] tracking-[0.12em] uppercase text-muted
                      hover:text-pri transition-colors inline-flex items-center gap-2">
                    ← Back to all projects
                </Link>
            </section>
        </>
    );
}