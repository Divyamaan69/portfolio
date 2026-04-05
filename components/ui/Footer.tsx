"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const pathname = usePathname();
  const isDark = pathname === "/contact";

  const bg = isDark ? "bg-[#3A3456] border-white/10" : "bg-bg2 border-border";
  const textColor = isDark ? "text-[rgba(233,228,220,0.4)]" : "text-muted";
  const linkColor = isDark ? "text-[rgba(233,228,220,0.4)] hover:text-[#E9E4DC]"
    : "text-muted hover:text-pri";

  return (
    <footer className={`border-t px-8 md:px-16 py-6
      flex flex-col md:flex-row items-center justify-between gap-4 ${bg}`}>
      <p className={`font-mono text-[0.65rem] tracking-wider ${textColor}`}>
        © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.domain}
      </p>
      <div className="flex gap-6">
        {[
          { href: `mailto:${siteConfig.email}`, label: "Email" },
          { href: siteConfig.github, label: "GitHub" },
          { href: "/", label: "Back to top ↑" },
        ].map((l) => (
          <Link
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            className={`font-mono text-[0.65rem] tracking-wider transition-colors ${linkColor}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}