import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/lib/data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: `${post.title} — ${siteConfig.name}`,
      description: post.excerpt,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <section className="pt-36 pb-12 px-8 md:px-16 max-w-3xl">
        <Link href="/blog"
          className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-muted
            hover:text-pri transition-colors inline-flex items-center gap-1 mb-10">
          ← Back to Blog
        </Link>
        <p className="font-mono text-[0.68rem] tracking-[0.15em] uppercase text-acc mb-3">{post.category}</p>
        <h1 className="font-display font-extrabold text-pri leading-tight mb-4"
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
          {post.title}
        </h1>
        <p className="font-mono text-[0.65rem] text-muted tracking-wider uppercase">
          {post.date} · {post.readTime}
        </p>
      </section>

      <section className="pb-24 px-8 md:px-16">
        <div className="h-px bg-border mb-12 max-w-3xl" />
        <article
          className="prose prose-lg max-w-3xl
            prose-headings:font-display prose-headings:font-bold prose-headings:text-pri
            prose-p:font-body prose-p:text-[#1e1c2b] prose-p:leading-relaxed
            prose-a:text-pri-light prose-a:no-underline hover:prose-a:underline
            prose-strong:text-pri prose-blockquote:border-l-acc prose-blockquote:italic
            prose-code:font-mono prose-code:text-sm prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </section>
    </>
  );
}
