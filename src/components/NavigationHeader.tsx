"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccessibility } from "@/context/AccessibilityContext";
import {
  Compass,
  Maximize2,
  Minimize2,
  Sparkles,
  BookOpen,
  Heart,
  GraduationCap,
  PenTool,
  Home,
} from "lucide-react";

interface HeaderProps {
  currentRole: "learner" | "parent" | "educator";
  onRoleChange: (role: "learner" | "parent" | "educator") => void;
  title: string;
}

export const NavigationHeader: React.FC<HeaderProps> = ({
  currentRole,
  onRoleChange,
  title,
}) => {
  const pathname = usePathname();
  const {
    readingRulerEnabled,
    distractionFree,
    setSettings,
    playTactileChime,
  } = useAccessibility();

  const toggleRuler = () => {
    setSettings((prev) => ({
      ...prev,
      readingRulerEnabled: !prev.readingRulerEnabled,
    }));
    playTactileChime("pop");
  };

  const toggleDistractionFree = () => {
    setSettings((prev) => ({
      ...prev,
      distractionFree: !prev.distractionFree,
    }));
    playTactileChime("chime");
  };

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-md transition-all duration-200"
      style={{
        borderColor: "var(--theme-border-color)",
        backgroundColor: "var(--theme-card-bg)",
      }}
    >
      {/* Decorative airmail thin band at top */}
      <div className="airmail-strip" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-sans">
        {/* Brand / Logo */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => playTactileChime("pop")}
          >
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-rose-400 p-0.5 shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center text-white font-black text-xl">
              <span className="drop-shadow-sm">✉️</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors" style={{ color: "var(--theme-text-color)" }}>
                  PenPal
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-amber-100/90 text-amber-800 border border-amber-300">
                  Dyslexia-First
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Social Language Learning for Neurodiverse Minds
              </p>
            </div>
          </Link>

          {/* Mobile quick controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={toggleRuler}
              className={`p-2 rounded-xl text-xs font-bold border transition ${
                readingRulerEnabled
                  ? "bg-amber-100 text-amber-800 border-amber-300"
                  : "bg-slate-50 text-slate-600 border-slate-200"
              }`}
              title="Toggle reading ruler"
            >
              <Compass className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Center / Navigation Links */}
        <nav className="flex items-center gap-1 self-start md:self-auto overflow-x-auto py-1 max-w-full" aria-label="Main Navigation">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              pathname === "/"
                ? "bg-slate-200/70 text-slate-900 font-black shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
            onClick={() => playTactileChime("pop")}
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>

          <button
            onClick={() => {
              onRoleChange("learner");
              playTactileChime("pop");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentRole === "learner" && pathname === "/dashboard"
                ? "bg-blue-600 text-white font-black shadow-sm shadow-blue-500/20"
                : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            <PenTool className="h-3.5 w-3.5" />
            Learner Desk
          </button>

          <button
            onClick={() => {
              onRoleChange("parent");
              playTactileChime("pop");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentRole === "parent" && pathname === "/parent"
                ? "bg-purple-600 text-white font-black shadow-sm shadow-purple-500/20"
                : "text-slate-600 hover:text-purple-600 hover:bg-purple-50"
            }`}
          >
            <Heart className="h-3.5 w-3.5" />
            Parent Portal
          </button>

          <button
            onClick={() => {
              onRoleChange("educator");
              playTactileChime("pop");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentRole === "educator" && pathname === "/educator"
                ? "bg-emerald-600 text-white font-black shadow-sm shadow-emerald-500/20"
                : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            Educator SEN
          </button>
        </nav>

        {/* Quick Sensory Tools bar */}
        <div className="hidden md:flex items-center gap-2">
          {/* Quick Reading Ruler Button */}
          <button
            onClick={toggleRuler}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition ${
              readingRulerEnabled
                ? "bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400/40"
                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
            }`}
            title="Toggle Bimodal Reading Ruler"
          >
            <Compass className="h-3.5 w-3.5 text-amber-600" />
            <span>Ruler {readingRulerEnabled ? "ON" : "OFF"}</span>
          </button>

          {/* Quick Distraction Free Toggle */}
          <button
            onClick={toggleDistractionFree}
            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold border flex items-center gap-1.5 transition ${
              distractionFree
                ? "bg-indigo-100 text-indigo-900 border-indigo-300"
                : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
            }`}
            title="Toggle Distraction-Free Zen Desk"
          >
            {distractionFree ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            <span>{distractionFree ? "Exit Zen" : "Zen Focus"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
