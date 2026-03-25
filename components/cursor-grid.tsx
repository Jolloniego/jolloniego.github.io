"use client";

import { useEffect, useRef } from "react";

export function CursorGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty("--cursor-x", `${e.clientX}px`);
      containerRef.current.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="cursor-grid-container">
      {/* Base dots — always visible, very subtle */}
      <div className="cursor-grid-base" />
      {/* Highlight dots — same pattern, brighter, masked to cursor */}
      <div className="cursor-grid-highlight" />
    </div>
  );
}
