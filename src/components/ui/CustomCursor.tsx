"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(finePointer);
    if (!finePointer) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const leave = () => setVisible(false);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, input, textarea, select, [role='button'], .cursor-hover",
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference transition-[width,height,opacity,transform] duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            clicking ? 0.75 : hovering ? 1.55 : 1
          })`,
          width: hovering ? 48 : 18,
          height: hovering ? 48 : 18,
        }}
        aria-hidden
      >
        <div className="h-full w-full rounded-full border border-white/80 bg-white/15 shadow-[0_0_24px_rgba(0,242,254,0.45)]" />
      </div>
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9998] transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
        aria-hidden
      >
        <div
          className={`h-1.5 w-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_12px_#00f2fe] transition-transform duration-150 ${
            clicking ? "scale-50" : "scale-100"
          }`}
        />
      </div>
    </>
  );
}
