"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isDark = pathname === "/contact";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const bg = isDark ? "bg-[#3A3456]" : "bg-bg/85 backdrop-blur-md";
  const border = scrolled
    ? isDark ? "border-b border-white/10" : "border-b border-border"
    : "border-b border-transparent";
  const logoColor = isDark ? "text-[#E9E4DC]" : "text-pri";
  const linkColor = isDark ? "text-[rgba(233,228,220,0.55)] hover:text-[#E9E4DC]"
    : "text-muted hover:text-pri";
  const linkLine = isDark ? "after:bg-[#8BA794]" : "after:bg-pri";
  const barColor = isDark ? "bg-[#E9E4DC]" : "bg-pri";
  const mobileBg = isDark ? "bg-[#3A3456] border-white/10" : "bg-bg border-border";
  const mobileLinkColor = isDark ? "text-[rgba(233,228,220,0.6)] hover:text-[#E9E4DC]"
    : "text-muted hover:text-pri";

  return (
    <nav className={`fixed top-0 w-full z-50 flex items-center justify-between
      px-8 md:px-16 py-5 transition-all duration-300 ${bg} ${border}`}>

      <Link href="/" className={`font-display font-bold tracking-widest text-sm ${logoColor}`}>
        DS
      </Link>

      {/* Desktop */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={`font-mono text-[0.68rem] tracking-[0.14em] uppercase
                relative transition-colors duration-200 ${linkColor}
                after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0
                ${linkLine} after:transition-all after:duration-300 hover:after:w-full`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px transition-transform duration-300 ${barColor}
          ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-px transition-opacity duration-300 ${barColor}
          ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px transition-transform duration-300 ${barColor}
          ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className={`absolute top-full left-0 right-0 border-b
          flex flex-col gap-5 px-8 py-6 list-none md:hidden ${mobileBg}`}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${mobileLinkColor}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}