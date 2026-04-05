import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
      <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-acc mb-4">404</p>
      <h1 className="font-display font-extrabold text-pri mb-4"
        style={{ fontSize: "clamp(3rem,8vw,7rem)", lineHeight: 0.95 }}>
        Not Found
      </h1>
      <p className="font-body italic text-muted text-xl mb-10">
        This page doesn't exist — yet.
      </p>
      <Link href="/"
        className="font-mono text-[0.72rem] tracking-[0.12em] uppercase px-8 py-4
          bg-pri text-bg hover:bg-pri-light transition-colors duration-200">
        Back Home
      </Link>
    </section>
  );
}
