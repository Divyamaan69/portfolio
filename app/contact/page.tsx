import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Get in touch with Divyamaan Singh.",
};

export default function ContactPage() {
  return <ContactForm />;
}



// "use client";
// import type { Metadata } from "next";
// import Reveal from "@/components/ui/Reveal";
// import { siteConfig } from "@/lib/data";
// import { useState } from "react";

// export default function ContactPage() {
//   const [sent, setSent] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // In production: hook up to Resend / Formspree / your own API route
//     setSent(true);
//     setTimeout(() => setSent(false), 4000);
//   };

//   return (
//     <>
//       <section
//         className="min-h-screen pt-36 pb-24 px-8 md:px-16"
//         style={{ background: "#3A3456" }}
//       >
//         <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
//           {/* Left */}
//           <div>
//             <Reveal>
//               <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-3">Say hello</p>
//             </Reveal>
//             <Reveal delay={0.05}>
//               <h1 className="font-display font-extrabold leading-tight mb-4"
//                 style={{ fontSize: "clamp(2.8rem,6vw,5rem)", color: "#E9E4DC" }}>
//                 Let's build<br />something real.
//               </h1>
//             </Reveal>
//             <Reveal delay={0.1}>
//               <p className="font-body text-[rgba(233,228,220,0.65)] max-w-md text-lg leading-relaxed mb-12">
//                 Open to roles in AI/ML engineering, Python development, or backend web —
//                 and always happy to talk about interesting problems.
//               </p>
//             </Reveal>

//             {[
//               { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
//               { label: "GitHub", value: "github.com/Divyamaan69", href: siteConfig.github },
//               { label: "Location", value: siteConfig.location, href: null },
//             ].map((item, i) => (
//               <Reveal key={item.label} delay={0.12 + i * 0.06}>
//                 <div className="mb-7">
//                   <p className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-acc mb-1">{item.label}</p>
//                   {item.href ? (
//                     <a href={item.href}
//                       target={item.href.startsWith("http") ? "_blank" : undefined}
//                       rel="noopener noreferrer"
//                       className="font-display font-semibold text-xl transition-colors duration-200"
//                       style={{ color: "#E9E4DC" }}
//                       onMouseEnter={(e) => (e.currentTarget.style.color = "#BAC6B8")}
//                       onMouseLeave={(e) => (e.currentTarget.style.color = "#E9E4DC")}
//                     >
//                       {item.value}
//                     </a>
//                   ) : (
//                     <span className="font-display font-semibold text-xl" style={{ color: "#E9E4DC" }}>
//                       {item.value}
//                     </span>
//                   )}
//                 </div>
//               </Reveal>
//             ))}
//           </div>

//           {/* Right — form */}
//           <Reveal delay={0.15}>
//             <form onSubmit={handleSubmit} className="space-y-4 mt-8 md:mt-24">
//               {[
//                 { name: "name", placeholder: "Your name", type: "text" },
//                 { name: "email", placeholder: "Your email", type: "email" },
//                 { name: "subject", placeholder: "Subject", type: "text" },
//               ].map((f) => (
//                 <input
//                   key={f.name}
//                   type={f.type}
//                   placeholder={f.placeholder}
//                   required
//                   value={form[f.name as keyof typeof form]}
//                   onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
//                   className="w-full bg-white/[0.06] border border-white/20 text-[#E9E4DC]
//                     placeholder-[rgba(233,228,220,0.35)] px-4 py-3.5
//                     font-body text-base outline-none
//                     focus:border-acc transition-colors duration-200"
//                 />
//               ))}
//               <textarea
//                 rows={5}
//                 placeholder="Your message"
//                 required
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full bg-white/[0.06] border border-white/20 text-[#E9E4DC]
//                   placeholder-[rgba(233,228,220,0.35)] px-4 py-3.5
//                   font-body text-base outline-none resize-none
//                   focus:border-acc transition-colors duration-200"
//               />
//               <button
//                 type="submit"
//                 className="font-mono text-[0.72rem] tracking-[0.12em] uppercase
//                   px-8 py-4 bg-acc text-pri hover:bg-sec transition-all duration-200
//                   hover:-translate-y-0.5"
//               >
//                 {sent ? "Message Sent ✓" : "Send Message →"}
//               </button>
//             </form>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }
