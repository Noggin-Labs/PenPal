"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Sparkles, BookOpen, Heart, Shield, GraduationCap, ChevronRight, MessageSquare, Play, Settings } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const { login } = useAuth();

  const handleRoleSelection = (role: "learner" | "parent" | "educator") => {
    login(role);
    if (role === "learner") {
      router.push("/dashboard");
    } else if (role === "parent") {
      router.push("/parent");
    } else if (role === "educator") {
      router.push("/educator");
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col justify-between">
      {/* Dynamic Warm Pastel Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-[40rem] bg-gradient-to-b from-blue-100/40 via-yellow-50/20 to-transparent -z-10 pointer-events-none" />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 text-center flex-grow flex flex-col justify-center items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold font-sans mb-6">
          <Sparkles className="h-4 w-4" /> Fully WCAG 2.1 AA Compliant & Dyslexia-Friendly
        </div>

        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="text-5xl md:text-6xl" role="img" aria-label="PenPal Mascot Brush and Pen">🎨✍️</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-blue-600 font-sans">
            PenPal
          </h1>
        </div>

        <p className="max-w-3xl text-lg md:text-2xl font-bold leading-relaxed text-slate-700 mb-10 text-center">
          Empowering every learner to connect, write, and grow. An adaptive, social-first language learning platform designed from the ground up for learners with dyslexia and visual processing differences.
        </p>

        {/* Dynamic Simulation Role Selector */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Learner */}
          <button
            onClick={() => handleRoleSelection("learner")}
            className="flex flex-col text-left p-6 rounded-2xl bg-white border-2 border-dashed border-blue-200 shadow-sm transition-all hover:shadow-md hover:border-blue-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)" }}
          >
            <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl mb-4">
              ✍️
            </div>
            <h3 className="text-xl font-bold text-blue-600 mb-2 font-sans flex items-center gap-1">
              Enter as Learner
              <ChevronRight className="h-4 w-4" />
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Connect with global penpals, play timer-free collaborative quizzes, use bimodal reading (TTS/STT), and customized typography.
            </p>
          </button>

          {/* Card 2: Parent */}
          <button
            onClick={() => handleRoleSelection("parent")}
            className="flex flex-col text-left p-6 rounded-2xl bg-white border-2 border-dashed border-purple-200 shadow-sm transition-all hover:shadow-md hover:border-purple-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)" }}
          >
            <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl mb-4">
              👩‍👦
            </div>
            <h3 className="text-xl font-bold text-purple-600 mb-2 font-sans flex items-center gap-1">
              Enter as Parent
              <ChevronRight className="h-4 w-4" />
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Monitor your child's confidence metrics, customize default accessibility triggers, and view progress portfolios.
            </p>
          </button>

          {/* Card 3: Educator */}
          <button
            onClick={() => handleRoleSelection("educator")}
            className="flex flex-col text-left p-6 rounded-2xl bg-white border-2 border-dashed border-emerald-200 shadow-sm transition-all hover:shadow-md hover:border-emerald-500 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-500"
            style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)" }}
          >
            <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl mb-4">
              👨‍🏫
            </div>
            <h3 className="text-xl font-bold text-emerald-600 mb-2 font-sans flex items-center gap-1">
              Enter as Educator
              <ChevronRight className="h-4 w-4" />
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Manage classroom rosters, map activity levels to IEP targets, export portfolios, and configure remote accommodations.
            </p>
          </button>
        </div>

        {/* Feature Highlights Grid */}
        <div className="w-full max-w-5xl border-t pt-16" style={{ borderColor: "var(--theme-border-color)" }}>
          <h2 className="text-3xl font-bold text-slate-800 mb-10 font-sans">
            Designed for Dyslexia, Built for Accessibility
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-base mb-2 font-sans">Specialized Fonts</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                OpenDyslexic & customizable spacing controls reduce crowding & flipping effects.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 mb-3">
                <Heart className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-base mb-2 font-sans">Pastel anti-glare</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Soft cream, lavender, & mint green backgrounds ease scotopic/Irlen fatigue.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-3">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-base mb-2 font-sans">Bimodal Guidance</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Hear words spelled, color-coded syllables, and dictate messages with Web Speech.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mb-3">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-base mb-2 font-sans">Stress-Free P2P</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Zero competitive timers, asynchronous messaging, and structured templates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 text-center" style={{ borderColor: "var(--theme-border-color)" }}>
        <p className="text-sm text-slate-500 font-sans">
          PenPal 🎨✍️ — Made with 💙 and ☕ to make language learning accessible to everyone.
        </p>
      </footer>
    </main>
  );
}
