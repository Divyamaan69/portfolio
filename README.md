# divyamaan.com — Personal Portfolio

Next.js 14 portfolio built with the App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| Animation | Framer Motion |
| Blog | Markdown files via `gray-matter` + `remark` |
| Fonts | Syne · Cormorant Garamond · DM Mono (Google Fonts) |
| Deployment | Vercel |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [https://www.divyamaan.com](https://www.divyamaan.com).

## Project Structure

```
divyamaan-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, nav, footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── experience/page.tsx
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/page.tsx # Dynamic post page
│   ├── contact/page.tsx
│   └── not-found.tsx
├── components/
│   ├── ui/                 # Shared UI (Navbar, Footer, Cursor, Reveal)
│   └── sections/           # Page sections (Hero, FeaturedProjects, etc.)
├── content/
│   └── posts/              # ← Drop .md files here to publish blog posts
├── lib/
│   ├── data.ts             # All CV/portfolio content (single source of truth)
│   └── posts.ts            # Markdown blog utilities
└── styles/
    └── globals.css         # Design tokens + global styles
```

## Writing Blog Posts

Create a new `.md` file in `content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2025-07-15"
category: "AI"          # AI | Tutorial | Thoughts
excerpt: "One sentence summary shown in listings."
readTime: "5 min read"
---

Your content here in Markdown...
```

That's it. The blog page and post page are auto-generated.

## Updating Content

All personal content lives in **`lib/data.ts`**. Edit that file to:
- Update bio, tagline, contact details
- Add/edit projects
- Add/edit experience and education entries
- Change skill cards

## Deploying to Vercel

```bash
# Push to GitHub, then:
npx vercel
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for automatic deploys on every push.

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#E9E4DC` | Page background |
| `--bg2` | `#E0DAD0` | Alternate section bg |
| `--sec` | `#BAC6B8` | Secondary / gradient start |
| `--acc` | `#8BA794` | Accent / labels |
| `--pri` | `#3A3456` | Primary / headings |

## Future: Adding a CMS

When ready to move from Markdown to a headless CMS:
1. Install `@sanity/client` (or Strapi SDK)
2. Replace `lib/posts.ts` with CMS fetch functions
3. Keep the same page structure — only the data layer changes
