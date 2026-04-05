"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const rx = useRef(0);
  const ry = useRef(0);
  const cx = useRef(0);
  const cy = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cx.current = e.clientX;
      cy.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      rx.current += (cx.current - rx.current) * 0.12;
      ry.current += (cy.current - ry.current) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current}px`;
        ringRef.current.style.top  = `${ry.current}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const els = document.querySelectorAll("a,button,[data-hover]");
    const enter = () => {
      if (cursorRef.current) { cursorRef.current.style.transform = "translate(-50%,-50%) scale(2.5)"; cursorRef.current.style.background = "#8BA794"; }
      if (ringRef.current)   { ringRef.current.style.width = "54px"; ringRef.current.style.height = "54px"; }
    };
    const leave = () => {
      if (cursorRef.current) { cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)"; cursorRef.current.style.background = "#3A3456"; }
      if (ringRef.current)   { ringRef.current.style.width = "36px"; ringRef.current.style.height = "36px"; }
    };
    els.forEach((el) => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
