"use client";

import React, { useState, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const ReadingRuler: React.FC = () => {
  const { readingRulerEnabled, readingRulerHeight, rulerMode } = useAccessibility();
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    if (!readingRulerEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [readingRulerEnabled]);

  if (!readingRulerEnabled) return null;

  if (rulerMode === "mask") {
    // Focus Curtain: dims everything above and below the reader's active line
    return (
      <div className="fixed inset-0 pointer-events-none z-[99999]" aria-hidden="true">
        {/* Top curtain */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: `${Math.max(0, mouseY - readingRulerHeight / 2)}px`,
            backgroundColor: "rgba(15, 23, 42, 0.45)",
            backdropFilter: "blur(0.5px)",
          }}
        />
        {/* Active focus strip */}
        <div
          style={{
            position: "fixed",
            top: `${mouseY - readingRulerHeight / 2}px`,
            left: 0,
            width: "100%",
            height: `${readingRulerHeight}px`,
            borderTop: "2px solid #F59E0B",
            borderBottom: "2px solid #F59E0B",
            backgroundColor: "rgba(254, 240, 138, 0.12)",
          }}
        />
        {/* Bottom curtain */}
        <div
          style={{
            position: "fixed",
            top: `${mouseY + readingRulerHeight / 2}px`,
            left: 0,
            bottom: 0,
            width: "100%",
            backgroundColor: "rgba(15, 23, 42, 0.45)",
            backdropFilter: "blur(0.5px)",
          }}
        />
      </div>
    );
  }

  if (rulerMode === "underline") {
    // Underline tracking guide
    return (
      <div
        style={{
          position: "fixed",
          top: `${mouseY + readingRulerHeight / 3}px`,
          left: 0,
          width: "100%",
          height: "3px",
          backgroundColor: "#3B82F6",
          boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
          pointerEvents: "none",
          zIndex: 99999,
        }}
        aria-hidden="true"
      />
    );
  }

  // Default: Soft warm highlighter strip
  return (
    <div
      style={{
        position: "fixed",
        top: `${mouseY - readingRulerHeight / 2}px`,
        left: 0,
        width: "100%",
        height: `${readingRulerHeight}px`,
        backgroundColor: "rgba(253, 224, 71, 0.22)",
        borderTop: "2px solid rgba(217, 119, 6, 0.75)",
        borderBottom: "2px solid rgba(217, 119, 6, 0.75)",
        boxShadow: "0 0 18px rgba(251, 191, 36, 0.18)",
        pointerEvents: "none",
        zIndex: 99999,
        mixBlendMode: "multiply",
      }}
      aria-hidden="true"
    />
  );
};
