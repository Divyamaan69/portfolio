"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig, stats } from "@/lib/data";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const currentWork = {
  project: {
    label: "Latest Project",
    title: "TrumpLine — Tweet-to-Market AI",
    description:
      "Correlating Trump's tweets with stock market direction using VADER sentiment analysis and Gradient Boosting.",
    link: "https://github.com/Divyamaan69",
    linkLabel: "View on GitHub →",
    tag: "Shipped",
  },
  learning: {
    label: "Currently Learning",
    title: "Copywriting & Technical Writing",
    description:
      "Studying persuasion, long-form content, and documentation craft — bridging the gap between engineering and clear communication.",
    tag: "In Progress",
  },
};

interface StatRowProps {
  value: string;
  label: string;
  index: number;
  isLast: boolean;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}

function StatRow({ value, label, isLast, isHovered, onEnter, onLeave }: StatRowProps) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`relative px-6 py-4 cursor-default overflow-hidden
        ${!isLast ? "border-b border-border" : ""}`}
    >
      {/* Hover fill */}
      <motion.div
        className="absolute inset-0 bg-pri pointer-events-none"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{ transformOrigin: "bottom" }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-baseline gap-3 whitespace-nowrap">
        <span className={`font-display font-extrabold text-2xl leading-none
          transition-colors duration-200
          ${isHovered ? "text-bg" : "text-pri"}`}>
          {value}
        </span>
        <span className={`font-mono text-[0.62rem] tracking-[0.08em] uppercase
          transition-colors duration-200
          ${isHovered ? "text-sec" : "text-muted"}`}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center
      pt-28 pb-16 px-8 md:px-16 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 90% 10%, rgba(139,167,148,0.13) 0%, transparent 70%),
            radial-gradient(ellipse 35% 45% at 5% 90%, rgba(58,52,86,0.06) 0%, transparent 60%)`,
        }} />
      <div className="absolute inset-0 z-0 grid-bg pointer-events-none" />

      {/* ── Role label ── */}
      <motion.p {...fadeUp(0.1)}
        className="relative z-10 font-mono text-[0.68rem] tracking-[0.22em] uppercase text-acc mb-4">
        {siteConfig.role}
      </motion.p>

      {/* ── Name + Stats mini-card ── */}
      <motion.div {...fadeUp(0.22)}
        className="relative z-10 flex flex-wrap items-start justify-between gap-6 mb-4 max-w-4xl">

        {/* Name */}
        <h1
          className="font-display font-extrabold text-pri leading-[0.93]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.5rem)" }}
        >
          {siteConfig.name.split(" ")[0]}<br />
          {siteConfig.name.split(" ")[1]}
        </h1>

        {/* Stats Card */}
        <div className="flex flex-col self-start mt-2 border border-border bg-card shrink-0 min-w-[220px]">
          {stats.map((s, i) => (
            <StatRow
              key={s.label}
              value={s.value}
              label={s.label}
              index={i}
              isLast={i === stats.length - 1}
              isHovered={hoveredStat === i}
              onEnter={() => setHoveredStat(i)}
              onLeave={() => setHoveredStat(null)}
            />
          ))}
        </div>
      </motion.div>

      {/* ── Tagline ── */}
      <motion.p {...fadeUp(0.33)}
        className="relative z-10 font-body italic text-muted mb-8"
        style={{ fontSize: "clamp(1rem, 1.8vw, 1.45rem)" }}>
        "{siteConfig.tagline}"
      </motion.p>

      {/* ── Divider ── */}
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 h-px bg-border origin-left mb-10 max-w-4xl"
      />

      {/* ── Two cards ── */}
      <motion.div {...fadeUp(0.52)}
        className="relative z-10 grid md:grid-cols-2 gap-4 max-w-4xl mb-10">

        {/* Latest Project */}
        <div className="group bg-card border border-border p-6 relative overflow-hidden
          transition-all duration-300 hover:border-pri/40
          hover:shadow-[0_8px_32px_rgba(58,52,86,0.1)]">
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg,#8BA794,#3A3456)" }} />
          <div className="flex items-start justify-between mb-3">
            <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">
              {currentWork.project.label}
            </p>
            <span className="font-mono text-[0.58rem] tracking-wider uppercase px-2 py-0.5
              bg-acc text-pri">
              {currentWork.project.tag}
            </span>
          </div>
          <h3 className="font-display font-bold text-pri text-xl leading-snug mb-2">
            {currentWork.project.title}
          </h3>
          <p className="font-body text-muted text-[0.9rem] leading-relaxed mb-4">
            {currentWork.project.description}
          </p>
          <a href={currentWork.project.link}
            target="_blank" rel="noopener noreferrer"
            className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-pri
              inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
            {currentWork.project.linkLabel}
          </a>
        </div>

        {/* Currently Learning */}
        <div className="bg-card border border-border p-6 relative overflow-hidden
          transition-all duration-300 hover:border-pri/40
          hover:shadow-[0_8px_32px_rgba(58,52,86,0.1)]">
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg,#BAC6B8,#8BA794)" }} />
          <div className="flex items-start justify-between mb-3">
            <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">
              {currentWork.learning.label}
            </p>
            <span className="font-mono text-[0.58rem] tracking-wider uppercase px-2 py-0.5
              bg-sec/40 text-pri">
              {currentWork.learning.tag}
            </span>
          </div>
          <h3 className="font-display font-bold text-pri text-xl leading-snug mb-2">
            {currentWork.learning.title}
          </h3>
          <p className="font-body text-muted text-[0.9rem] leading-relaxed mb-4">
            {currentWork.learning.description}
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-border relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-acc"
                initial={{ width: "0%" }}
                animate={{ width: "60%" }}
                transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}
              />
            </div>
            <span className="font-mono text-[0.58rem] text-muted tracking-wider">ongoing</span>
          </div>
        </div>
      </motion.div>

      {/* ── CTAs ── */}
      <motion.div {...fadeUp(0.65)}
        className="relative z-10 flex flex-wrap gap-3 max-w-4xl">
        <Link href="/projects"
          className="font-mono text-[0.68rem] tracking-[0.12em] uppercase px-6 py-3.5
            bg-pri text-bg hover:bg-pri-light transition-colors duration-200">
          View Projects
        </Link>
        <Link href="/contact"
          className="font-mono text-[0.68rem] tracking-[0.12em] uppercase px-6 py-3.5
            border border-pri text-pri hover:bg-pri hover:text-bg transition-all duration-200">
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}



// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { siteConfig, stats } from "@/lib/data";

// const fadeUp = (delay: number) => ({
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
// });

// const currentWork = {
//   project: {
//     label: "Latest Project",
//     title: "TrumpLine — Tweet-to-Market AI",
//     description: "Correlating Trump's tweets with stock market direction using VADER sentiment analysis and Gradient Boosting.",
//     link: "https://github.com/Divyamaan69",
//     linkLabel: "View on GitHub →",
//     tag: "Shipped",
//     tagColor: "bg-acc text-pri",
//   },
//   learning: {
//     label: "Currently Learning",
//     title: "Copywriting & Technical Writing",
//     description: "Studying persuasion, long-form content, and documentation craft — bridging the gap between engineering and clear communication.",
//     link: null,
//     tag: "In Progress",
//     tagColor: "bg-sec/40 text-pri",
//   },
// };

// export default function HeroSection() {
//   const [hoveredStat, setHoveredStat] = useState<number | null>(null);

//   return (
//     <section className="min-h-screen flex flex-col justify-center
//       pt-28 pb-16 px-8 md:px-16 relative overflow-hidden">

//       {/* Background */}
//       <div className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(ellipse 50% 50% at 90% 10%, rgba(139,167,148,0.13) 0%, transparent 70%),
//             radial-gradient(ellipse 35% 45% at 5% 90%, rgba(58,52,86,0.06) 0%, transparent 60%)`,
//         }} />
//       <div className="absolute inset-0 z-0 grid-bg pointer-events-none" />

//       {/* ── Role label ── */}
//       <motion.p {...fadeUp(0.1)}
//         className="relative z-10 font-mono text-[0.68rem] tracking-[0.22em] uppercase text-acc mb-4">
//         {siteConfig.role}
//       </motion.p>

//       {/* ── Name ── */}
//       <motion.h1 {...fadeUp(0.22)}
//         className="relative z-10 font-display font-extrabold text-pri leading-[0.93] mb-4"
//         style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}>
//         {siteConfig.name.split(" ")[0]}<br />
//         {siteConfig.name.split(" ")[1]}
//       </motion.h1>

//       {/* ── Tagline ── */}
//       <motion.p {...fadeUp(0.33)}
//         className="relative z-10 font-body italic text-muted mb-8"
//         style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)" }}>
//         "{siteConfig.tagline}"
//       </motion.p>

//       {/* ── Divider ── */}
//       <motion.div
//         initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
//         transition={{ duration: 0.7, delay: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
//         className="relative z-10 h-px bg-border origin-left mb-10 max-w-4xl"
//       />

//       {/* ── Two cards: Project + Learning ── */}
//       <motion.div {...fadeUp(0.52)}
//         className="relative z-10 grid md:grid-cols-2 gap-4 max-w-4xl mb-10">

//         {/* Latest Project */}
//         <div className="group bg-card border border-border p-6 relative overflow-hidden
//           transition-all duration-300 hover:border-pri/40
//           hover:shadow-[0_8px_32px_rgba(58,52,86,0.1)]">
//           <div className="absolute top-0 left-0 right-0 h-[2px]"
//             style={{ background: "linear-gradient(90deg,#8BA794,#3A3456)" }} />

//           <div className="flex items-start justify-between mb-3">
//             <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">
//               {currentWork.project.label}
//             </p>
//             <span className={`font-mono text-[0.58rem] tracking-wider uppercase px-2 py-0.5
//               ${currentWork.project.tagColor}`}>
//               {currentWork.project.tag}
//             </span>
//           </div>

//           <h3 className="font-display font-bold text-pri text-xl leading-snug mb-2">
//             {currentWork.project.title}
//           </h3>
//           <p className="font-body text-muted text-[0.9rem] leading-relaxed mb-4">
//             {currentWork.project.description}
//           </p>

//           <a href={currentWork.project.link!}
//             target="_blank" rel="noopener noreferrer"
//             className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-pri
//               inline-flex items-center gap-1.5
//               group-hover:gap-2.5 transition-all duration-200">
//             {currentWork.project.linkLabel}
//           </a>
//         </div>

//         {/* Currently Learning */}
//         <div className="bg-card border border-border p-6 relative overflow-hidden
//           transition-all duration-300 hover:border-pri/40
//           hover:shadow-[0_8px_32px_rgba(58,52,86,0.1)]">
//           <div className="absolute top-0 left-0 right-0 h-[2px]"
//             style={{ background: "linear-gradient(90deg,#BAC6B8,#8BA794)" }} />

//           <div className="flex items-start justify-between mb-3">
//             <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">
//               {currentWork.learning.label}
//             </p>
//             <span className={`font-mono text-[0.58rem] tracking-wider uppercase px-2 py-0.5
//               ${currentWork.learning.tagColor}`}>
//               {currentWork.learning.tag}
//             </span>
//           </div>

//           <h3 className="font-display font-bold text-pri text-xl leading-snug mb-2">
//             {currentWork.learning.title}
//           </h3>
//           <p className="font-body text-muted text-[0.9rem] leading-relaxed mb-4">
//             {currentWork.learning.description}
//           </p>

//           {/* Animated progress indicator */}
//           <div className="flex items-center gap-2">
//             <div className="flex-1 h-px bg-border relative overflow-hidden">
//               <motion.div
//                 className="absolute left-0 top-0 h-full bg-acc"
//                 initial={{ width: "0%" }}
//                 animate={{ width: "60%" }}
//                 transition={{ duration: 1.4, delay: 1, ease: "easeOut" }}
//               />
//             </div>
//             <span className="font-mono text-[0.58rem] text-muted tracking-wider">ongoing</span>
//           </div>
//         </div>
//       </motion.div>

//       {/* ── Stats + CTA Row ── */}
//       <motion.div {...fadeUp(0.65)}
//         className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border mb-10 max-w-2xl">

//         {/* Stats */}
//         <div className="flex gap-0 border border-border shrink-0">
//           {stats.map((s, i) => (
//             <div
//               key={s.label}
//               onMouseEnter={() => setHoveredStat(i)}
//               onMouseLeave={() => setHoveredStat(null)}
//               className={`relative px-5 py-3.5 cursor-default overflow-hidden
//                 ${i < stats.length - 1 ? "border-r border-border" : ""}`}
//             >
//               <motion.div
//                 className="absolute inset-0 bg-pri pointer-events-none"
//                 initial={{ scaleY: 0 }}
//                 animate={{ scaleY: hoveredStat === i ? 1 : 0 }}
//                 transition={{ duration: 0.22, ease: "easeOut" }}
//                 style={{ transformOrigin: "bottom" }}
//               />
//               <div className="relative z-10">
//                 <div className={`font-display font-extrabold text-2xl leading-none
//                   transition-colors duration-200
//                   ${hoveredStat === i ? "text-bg" : "text-pri"}`}>
//                   {s.value}
//                 </div>
//                 <div className={`font-mono text-[0.58rem] tracking-[0.08em] uppercase mt-0.5
//                   transition-colors duration-200
//                   ${hoveredStat === i ? "text-sec" : "text-muted"}`}>
//                   {s.label}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTAs */}
//         <div className="flex flex-wrap gap-3">
//           <Link href="/projects"
//             className="font-mono text-[0.68rem] tracking-[0.12em] uppercase px-6 py-3.5
//               bg-pri text-bg hover:bg-pri-light transition-colors duration-200">
//             View Projects
//           </Link>
//           <Link href="/contact"
//             className="font-mono text-[0.68rem] tracking-[0.12em] uppercase px-6 py-3.5
//               border border-pri text-pri hover:bg-pri hover:text-bg transition-all duration-200">
//             Get in Touch
//           </Link>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { siteConfig, stats, heroSkills } from "@/lib/data";

// const fadeUp = (delay: number) => ({
//   initial: { opacity: 0, y: 22 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
// });

// export default function HeroSection() {
//   return (
//     <section className="min-h-screen grid md:grid-cols-2 items-center
//       pt-36 pb-20 px-8 md:px-16 relative overflow-hidden">

//       {/* Backgrounds */}
//       <div className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(ellipse 60% 70% at 75% 40%, rgba(139,167,148,0.18) 0%, transparent 70%),
//             radial-gradient(ellipse 40% 50% at 20% 80%, rgba(58,52,86,0.08) 0%, transparent 60%)`,
//         }} />
//       <div className="absolute inset-0 z-0 grid-bg pointer-events-none" />

//       {/* Left — text */}
//       <div className="relative z-10">
//         <motion.p
//           {...fadeUp(0.2)}
//           className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-acc mb-5"
//         >
//           {siteConfig.role}
//         </motion.p>

//         <motion.h1
//           {...fadeUp(0.35)}
//           className="font-display font-extrabold text-pri leading-[0.95] mb-5"
//           style={{ fontSize: "clamp(3.5rem,7vw,6rem)" }}
//         >
//           {siteConfig.name.split(" ")[0]}<br />{siteConfig.name.split(" ")[1]}
//         </motion.h1>

//         <motion.p
//           {...fadeUp(0.5)}
//           className="font-body italic font-light text-muted mb-6"
//           style={{ fontSize: "clamp(1.3rem,2.5vw,1.9rem)" }}
//         >
//           "{siteConfig.tagline}"
//         </motion.p>

//         <motion.p
//           {...fadeUp(0.65)}
//           className="font-body text-base text-[#1e1c2b] max-w-md mb-10 leading-relaxed"
//         >
//           {siteConfig.description} Currently based in {siteConfig.location}.
//         </motion.p>

//         <motion.div {...fadeUp(0.8)} className="flex flex-wrap gap-4">
//           <Link href="/projects"
//             className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-8 py-4
//               bg-pri text-bg hover:bg-pri-light transition-colors duration-200">
//             View Projects
//           </Link>
//           <Link href="/contact"
//             className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-8 py-4
//               border border-pri text-pri hover:bg-pri hover:text-bg transition-all duration-200">
//             Get in Touch
//           </Link>
//         </motion.div>
//       </div>

//       {/* Right — stats card */}
//       <div className="hidden md:flex justify-end items-start relative z-10 pt-24">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1, y: [0, -10, 0] }}
//           transition={{ opacity: { duration: 1, delay: 0.9 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
//           className="relative w-[340px] h-[420px] bg-card border border-border overflow-hidden mt-16"
//         >
//           {/* top accent bar */}
//           <div className="absolute top-0 left-8 right-8 h-[3px]"
//             style={{ background: "linear-gradient(90deg,#BAC6B8,#8BA794,#3A3456)" }} />

//           <div className="p-10 h-full flex flex-col">
//             <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-acc mb-6">
//               At a glance
//             </p>

//             {stats.map((s) => (
//               <div key={s.label} className="mb-5">
//                 <div className="font-display font-extrabold text-5xl text-pri leading-none">{s.value}</div>
//                 <div className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-muted mt-0.5">{s.label}</div>
//               </div>
//             ))}

//             <div className="mt-auto flex flex-wrap gap-1">
//               {heroSkills.map((sk) => (
//                 <span key={sk}
//                   className="font-mono text-[0.62rem] px-2.5 py-1 bg-bg2 border border-border text-pri tracking-wide">
//                   {sk}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* floating labels */}
//           <p className="absolute bottom-[-2rem] left-[-3rem] font-mono text-[0.62rem] text-muted tracking-widest"
//             style={{ writingMode: "vertical-rl" }}>
//             bengaluru, india
//           </p>
//           <p className="absolute top-4 right-[-4rem] font-mono text-[0.62rem] text-muted tracking-wider">
//             {siteConfig.email}
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
