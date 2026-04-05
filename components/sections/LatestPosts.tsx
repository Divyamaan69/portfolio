import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { blogPlaceholders } from "@/lib/data";

export default function LatestPosts() {
  return (
    <section className="py-28 px-8 md:px-16">
      <Reveal>
        <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">Writing & Thoughts</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display font-bold text-pri mb-3"
          style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.1 }}>
          Blog
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="font-body text-muted max-w-lg mb-14 leading-relaxed">
          Weekly updates on AI, tutorials, and thoughts on building with technology.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {blogPlaceholders.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <div data-hover
              className="bg-card border border-border p-8 transition-transform duration-300
                hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(58,52,86,0.08)] cursor-pointer">
              <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-acc mb-3">
                {post.category} · Coming Soon
              </p>
              <h3 className="font-display font-semibold text-pri text-[1.3rem] leading-snug mb-3">
                {post.title}
              </h3>
              <p className="font-body text-muted text-[0.93rem] leading-relaxed mb-4">{post.excerpt}</p>
              <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                Upcoming · {post.readTime}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25}>
        <div className="mt-12">
          <Link href="/blog"
            className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-8 py-4
              border border-pri text-pri hover:bg-pri hover:text-bg transition-all duration-200">
            View All Posts
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
