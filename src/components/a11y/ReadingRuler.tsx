"use client";

import React, { useState, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const ReadingRuler: React.FC = () => {
  const { readingRulerEnabled, readingRulerHeight } = useAccessibility();
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    if (!readingRulerEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [readingRulerEnabled]);

  if (!readingRulerEnabled) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: `${mouseY - readingRulerHeight / 2}px`,
        left: 0,
        width: "100%",
        height: `${readingRulerHeight}px`,
        backgroundColor: "rgba(253, 224, 71, 0.22)", // Soft high-visibility neon yellow strip
        borderTop: "2px solid rgba(234, 179, 8, 0.7)",
        borderBottom: "2px solid rgba(234, 179, 8, 0.7)",
        pointerEvents: "none", // Allows clicking things "under" the ruler perfectly
        zIndex: 99999,
        mixBlendMode: "multiply",
      }}
      aria-hidden="true"
    />
  );
};
