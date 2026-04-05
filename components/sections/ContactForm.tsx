"use client";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/data";

export default function ContactForm() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("https://formspree.io/f/mwvwrqww", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        if (res.ok) {
            setSent(true);
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setSent(false), 4000);
        }
    };

    return (
        <section className="min-h-screen pt-36 pb-24 px-8 md:px-16" style={{ background: "#3A3456" }}>

            <style>{`
        #cursor { background: #8BA794 !important; }
        #cursor-ring { border-color: #8BA794 !important; }
      `}</style>

            <div className="max-w-6xl mx-auto">
                <Reveal>
                    <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-4">Say hello</p>
                </Reveal>
                <Reveal delay={0.05}>
                    <h1 className="font-display font-extrabold leading-tight mb-3"
                        style={{ fontSize: "clamp(2.2rem,5vw,4rem)", color: "#E9E4DC" }}>
                        Let's build something real.
                    </h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="font-body mb-10 max-w-xl text-lg leading-relaxed"
                        style={{ color: "rgba(233,228,220,0.65)" }}>
                        Open to roles in AI/ML engineering, Python development, backend web,
                        content writing, technical writing, and copywriting — and always happy
                        to talk about interesting problems.
                    </p>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
                    {/* Left */}
                    <div>
                        {[
                            { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                            { label: "GitHub", value: "github.com/Divyamaan69", href: siteConfig.github },
                            { label: "Location", value: siteConfig.location, href: null },
                        ].map((item, i) => (
                            <Reveal key={item.label} delay={0.12 + i * 0.06}>
                                <div className="mb-7">
                                    <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-acc mb-1">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel="noopener noreferrer"
                                            className="font-display font-semibold text-xl transition-colors duration-200"
                                            style={{ color: "#E9E4DC" }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = "#BAC6B8")}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = "#E9E4DC")}
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="font-display font-semibold text-xl" style={{ color: "#E9E4DC" }}>
                                            {item.value}
                                        </span>
                                    )}
                                </div>
                            </Reveal>
                        ))}

                        <Reveal delay={0.3}>
                            <div className="mt-8 border border-white/10 p-5">
                                <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-acc mb-3">Open to</p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "AI/ML Engineering", "Python Development",
                                        "Backend Web", "Technical Writing",
                                        "Content Writing", "Copywriting",
                                    ].map((role) => (
                                        <span key={role}
                                            className="font-mono text-[0.62rem] tracking-wide px-2.5 py-1.5
                        border border-white/15 text-[rgba(233,228,220,0.7)]">
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right — form */}
                    <Reveal delay={0.15}>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {[
                                { name: "name", placeholder: "Your name", type: "text" },
                                { name: "email", placeholder: "Your email", type: "email" },
                                { name: "subject", placeholder: "Subject", type: "text" },
                            ].map((f) => (
                                <input
                                    key={f.name}
                                    type={f.type}
                                    placeholder={f.placeholder}
                                    required
                                    value={form[f.name as keyof typeof form]}
                                    onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                                    className="w-full bg-white/[0.06] border border-white/20 text-[#E9E4DC]
                    placeholder-[rgba(233,228,220,0.35)] px-4 py-3.5
                    font-body text-base outline-none
                    focus:border-acc transition-colors duration-200"
                                />
                            ))}
                            <textarea
                                rows={5}
                                placeholder="Your message"
                                required
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="w-full bg-white/[0.06] border border-white/20 text-[#E9E4DC]
                  placeholder-[rgba(233,228,220,0.35)] px-4 py-3.5
                  font-body text-base outline-none resize-none
                  focus:border-acc transition-colors duration-200"
                            />
                            <button type="submit"
                                className="font-mono text-[0.72rem] tracking-[0.12em] uppercase
                  px-8 py-4 bg-acc text-pri hover:bg-sec transition-all duration-200
                  hover:-translate-y-0.5 cursor-none">
                                {sent ? "Message Sent ✓" : "Send Message →"}
                            </button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}