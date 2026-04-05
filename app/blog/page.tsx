import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import { blogPlaceholders, siteConfig } from "@/lib/data";
import { getSortedPostsMetadata } from "@/lib/posts";

export const metadata: Metadata = {
  title: `Blog — ${siteConfig.name}`,
  description: "Writing on AI, technology, content, journalism, and creative work.",
};

const categories = ["All", "AI", "Tutorial", "Technical Writing", "Copywriting", "Creative Writing", "Journalism", "Thoughts"];

const writingAreas = [
  {
    icon: "⚙️",
    title: "Technical Writing",
    description: "Documentation, guides, and explainers that make complex systems understandable.",
  },
  {
    icon: "✍️",
    title: "Copywriting",
    description: "Persuasive, conversion-focused writing — ads, landing pages, brand voice.",
  },
  {
    icon: "📰",
    title: "Journalism & Content",
    description: "News articles, long-form features, and editorial content across verticals.",
  },
  {
    icon: "🖊️",
    title: "Creative Writing",
    description: "Essays, poetry, narrative non-fiction, and opinion pieces.",
  },
];

export default function BlogPage() {
  const realPosts = getSortedPostsMetadata();

  return (
    <>
      <section className="pt-36 pb-16 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
        <div className="relative z-10 max-w-5xl">
          <Reveal>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">Writing & Ideas</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-extrabold text-pri leading-tight mb-4"
              style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>
              Blog
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-muted max-w-xl text-lg leading-relaxed mb-3">
              Writing across multiple tracks — AI and technology, technical documentation,
              copywriting, journalism, creative essays, and opinion. Not just a dev blog.
            </p>
          </Reveal>

          {/* Category pills */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-2 mt-6">
              {categories.map((cat) => (
                <span key={cat}
                  className="font-mono text-[0.65rem] px-3.5 py-2 border border-border
                    text-muted bg-card hover:bg-pri hover:text-bg hover:border-pri
                    transition-all duration-200 cursor-pointer tracking-wide">
                  {cat}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Writing areas */}
      <section className="py-12 px-8 md:px-16 bg-bg2">
        <Reveal>
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-acc mb-6">What I write</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {writingAreas.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <div className="bg-card border border-border p-6">
                <div className="text-2xl mb-3">{w.icon}</div>
                <h3 className="font-display font-bold text-pri text-lg mb-2">{w.title}</h3>
                <p className="font-body text-muted text-[0.9rem] leading-relaxed">{w.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 md:px-16">
        {/* Real published posts */}
        {realPosts.length > 0 && (
          <div className="mb-16">
            <Reveal>
              <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-acc mb-8">Published</p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <a href={`/blog/${post.slug}`}
                    className="block bg-card border border-border p-8 group
                      hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,52,86,0.08)]
                      transition-all duration-300">
                    <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-acc mb-3">{post.category}</p>
                    <h2 className="font-display font-semibold text-pri text-xl leading-snug mb-3
                      group-hover:text-pri-light transition-colors">{post.title}</h2>
                    <p className="font-body text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                      {post.date} · {post.readTime}
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming */}
        <Reveal>
          <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-8">Coming Soon</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPlaceholders.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <div className="bg-card border border-dashed border-border p-8 opacity-75
                hover:opacity-100 transition-opacity duration-200">
                <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-acc mb-3">
                  {post.category} · Upcoming
                </p>
                <h2 className="font-display font-semibold text-pri text-xl leading-snug mb-3">{post.title}</h2>
                <p className="font-body text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">{post.readTime}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}