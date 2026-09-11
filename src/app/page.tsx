"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useAccessibility, DyslexiaFont, ThemeColor } from "@/context/AccessibilityContext";
import { NavigationHeader } from "@/components/NavigationHeader";
import {
  Sparkles,
  BookOpen,
  Heart,
  Shield,
  GraduationCap,
  ChevronRight,
  MessageSquare,
  Volume2,
  Mic,
  Eye,
  CheckCircle,
  Award,
  ArrowRight,
  Globe,
  Sliders,
  Check,
  Flame,
  FileCheck,
} from "lucide-react";

// Interactive Spanish demo words for landing page demonstration
const DEMO_SYLLABLES: Record<string, { breakdown: string; ipa: string; translation: string; color: string }> = {
  "¡hola!": { breakdown: "¡ho · la!", ipa: "[ˈo.la]", translation: "hello!", color: "from-amber-400 to-orange-500" },
  "me": { breakdown: "me", ipa: "[me]", translation: "to me", color: "from-blue-400 to-indigo-500" },
  "encanta": { breakdown: "en · can · ta", ipa: "[ẽŋˈkãn.ta]", translation: "loves / enchants", color: "from-rose-400 to-pink-500" },
  "dibujar": { breakdown: "di · bu · jar", ipa: "[di.βuˈxaɾ]", translation: "to draw", color: "from-emerald-400 to-teal-500" },
  "animales": { breakdown: "a · ni · ma · les", ipa: "[a.niˈma.les]", translation: "animals", color: "from-violet-400 to-purple-500" },
  "y": { breakdown: "y", ipa: "[i]", translation: "and", color: "from-slate-400 to-slate-600" },
  "jugar": { breakdown: "ju · gar", ipa: "[xuˈɣaɾ]", translation: "to play", color: "from-amber-500 to-yellow-600" },
  "fútbol": { breakdown: "fút · bol", ipa: "[ˈfut.βol]", translation: "soccer / football", color: "from-cyan-400 to-blue-500" },
  "en": { breakdown: "en", ipa: "[ẽn]", translation: "in", color: "from-slate-400 to-slate-600" },
  "madrid": { breakdown: "ma · drid", ipa: "[maˈðɾið]", translation: "Madrid (Spain)", color: "from-rose-500 to-red-600" },
};

export default function Home() {
  const router = useRouter();
  const { login } = useAuth();
  const {
    fontFamily,
    themeColor,
    readingRulerEnabled,
    setSettings,
    playTactileChime,
  } = useAccessibility();

  // Interactive Live Demo State
  const [activeWordKey, setActiveWordKey] = useState<string>("dibujar");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleRoleSelection = (role: "learner" | "parent" | "educator") => {
    playTactileChime("chime");
    login(role);
    if (role === "learner") {
      router.push("/dashboard");
    } else if (role === "parent") {
      router.push("/parent");
    } else if (role === "educator") {
      router.push("/educator");
    }
  };

  const speakDemoWord = (word: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const clean = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿]/g, "");
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = "es-ES";
    utterance.rate = 0.85;

    setIsPlayingAudio(true);
    playTactileChime("pop");

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleWordClick = (word: string) => {
    const clean = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿]/g, "");
    if (DEMO_SYLLABLES[clean] || DEMO_SYLLABLES[word.toLowerCase()]) {
      const match = DEMO_SYLLABLES[clean] ? clean : word.toLowerCase();
      setActiveWordKey(match);
      speakDemoWord(match);
    }
  };

  const selectedWordInfo = DEMO_SYLLABLES[activeWordKey] || DEMO_SYLLABLES["dibujar"];

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans selection:bg-amber-200 selection:text-slate-900">
      <NavigationHeader
        currentRole="learner"
        onRoleChange={handleRoleSelection}
        title="Welcome to PenPal"
      />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b" style={{ borderColor: "var(--theme-border-color)" }}>
          {/* Subtle warm paper grain background radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-100/40 via-blue-50/20 to-transparent -z-10 pointer-events-none rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto">
            {/* Top Pill & Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                Language Learning for Dyslexia
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
                <FileCheck className="h-3.5 w-3.5 text-blue-600" />
                Created by Noggin-Labs
              </div>
            </div>

            {/* Main Title & Editorial Pitch */}
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                Language learning where{" "}
                <span className="relative inline-block text-blue-600">
                  letters never dance.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-400" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium" style={{ color: "var(--theme-text-color)" }}>
                PenPal is designed from the ground up for learners with <strong>dyslexia, scotopic/Irlen sensitivity, and ADHD</strong>. Connect with friendly global penpals through bimodal reading, colored syllable chunks, timer-free collaboration, and anti-glare palettes.
              </p>
            </div>

            {/* Quick Live Accommodation Bar in Hero */}
            <div className="max-w-2xl mx-auto mb-12 p-3 sm:p-4 rounded-2xl border paper-card">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <Sliders className="h-4 w-4 text-blue-600" />
                  <span>Instant Sensory Filter Preview:</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { id: "default-cream", label: "🍦 Cream" },
                    { id: "pastel-blue", label: "🌊 Sky" },
                    { id: "pastel-green", label: "🍃 Sage" },
                    { id: "rose-twilight", label: "🌸 Rose" },
                    { id: "solar-amber", label: "☀️ Amber" },
                    { id: "high-contrast", label: "🌙 Slate" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setSettings((prev) => ({ ...prev, themeColor: t.id as ThemeColor }));
                        playTactileChime("pop");
                      }}
                      className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition ${
                        themeColor === t.id
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button
                onClick={() => handleRoleSelection("learner")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-base shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <span>✍️ Open Learner Dashboard</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleRoleSelection("parent")}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border-2 border-slate-200 shadow-sm transition-all hover:border-slate-300 flex items-center justify-center gap-2"
                style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)", color: "var(--theme-text-color)" }}
              >
                <span>👩‍👦 Parent Dashboard</span>
              </button>
              <button
                onClick={() => handleRoleSelection("educator")}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-base border-2 border-emerald-200 shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>👨‍🏫 SEN Educator Dashboard</span>
              </button>
            </div>

            {/* INTERACTIVE SYLLABLE ENGINE SHOWCASE (Direct Live Demonstration) */}
            <div className="max-w-4xl mx-auto rounded-3xl border paper-card overflow-hidden shadow-xl">
              {/* Postcard header style */}
              <div className="p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-3 bg-slate-50/70" style={{ borderColor: "var(--theme-border-color)", backgroundColor: "var(--theme-card-subtle)" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-2xl flex items-center justify-center shadow-inner">
                    🇪🇸
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      Live Multi-Sensory Syllable Engine
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Interactive Demo
                      </span>
                    </h2>
                    <p className="text-xs text-slate-500">Tap or click any word in Mateo's postcard below to hear & see it broken down:</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium hidden sm:inline">Postcard from Madrid</span>
                  <div className="px-2.5 py-1 rounded-md bg-amber-200/80 text-amber-900 border border-amber-300 font-mono text-[10px] font-black tracking-widest">
                    STAMP: AIRMAIL 1928
                  </div>
                </div>
              </div>

              {/* Postcard Body with Clickable Words */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/70 relative">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block mb-3">
                    Mateo's Letter:
                  </span>
                  <p className="text-xl sm:text-2xl leading-loose font-medium flex flex-wrap gap-2 text-slate-900">
                    {["¡Hola!", "Me", "encanta", "dibujar", "animales", "y", "jugar", "fútbol", "en", "Madrid."].map((w, idx) => {
                      const clean = w.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿]/g, "");
                      const isSelected = activeWordKey === clean || activeWordKey === w.toLowerCase();
                      return (
                        <button
                          key={idx}
                          onClick={() => handleWordClick(w)}
                          className={`px-2.5 py-1 rounded-xl transition-all cursor-pointer border ${
                            isSelected
                              ? "bg-blue-600 text-white font-black shadow-md scale-105 border-blue-600"
                              : "bg-white/80 hover:bg-amber-100 text-slate-800 border-amber-200/80 shadow-xs"
                          }`}
                        >
                          {w}
                        </button>
                      );
                    })}
                  </p>
                  <p className="text-xs text-slate-500 italic mt-4 pt-3 border-t border-amber-200/60">
                    🇬🇧 Translation: "Hello! I love to draw animals and play soccer in Madrid."
                  </p>
                </div>

                {/* Live Syllabic Analysis Output */}
                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase font-bold text-blue-700 tracking-wider block">
                      Active Word Breakdown:
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-2xl font-black text-slate-900 capitalize">
                        {activeWordKey}
                      </span>
                      <span className="text-sm font-mono bg-white px-2 py-0.5 rounded border border-blue-200 text-indigo-700">
                        {selectedWordInfo.ipa}
                      </span>
                      <span className="text-xs font-medium text-slate-600">
                        = "{selectedWordInfo.translation}"
                      </span>
                    </div>

                    {/* Syllable visual tags */}
                    <div className="flex items-center gap-1.5 pt-1">
                      {selectedWordInfo.breakdown.split(" · ").map((syl, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-lg text-sm font-black text-white shadow-xs bg-gradient-to-r ${
                            i % 3 === 0
                              ? "from-blue-600 to-indigo-600"
                              : i % 3 === 1
                              ? "from-emerald-500 to-teal-600"
                              : "from-amber-500 to-orange-600"
                          }`}
                        >
                          {syl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Audio Playback button */}
                  <button
                    onClick={() => speakDemoWord(activeWordKey)}
                    className={`px-5 py-3 rounded-xl border font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                      isPlayingAudio
                        ? "bg-amber-400 text-slate-900 border-amber-500 shadow-md animate-pulse"
                        : "bg-white hover:bg-slate-50 text-blue-700 border-blue-200 shadow-sm"
                    }`}
                  >
                    <Volume2 className="h-4 w-4" />
                    <span>{isPlayingAudio ? "Speaking in Spanish..." : "Listen Pronunciation"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 DISTINCTIVE DESK ROLES */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4" style={{ color: "var(--theme-text-color)" }}>
              Choose Your Workspace Desk
            </h2>
            <p className="text-base sm:text-lg text-slate-600" style={{ color: "var(--theme-text-color)" }}>
              Whether you are an aspiring author, a supportive parent, or a specialist educator, PenPal provides tailor-made interfaces for every neurodivergent journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Learner */}
            <div
              onClick={() => handleRoleSelection("learner")}
              className="group cursor-pointer rounded-3xl border paper-card p-7 flex flex-col justify-between transition-all hover:scale-[1.02] hover:border-blue-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-bl-full pointer-events-none" />
              <div>
                <div className="h-14 w-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-xs">
                  ✍️
                </div>
                <div className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 mb-2">
                  For Students & Kids
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-1.5 group-hover:text-blue-600 transition-colors" style={{ color: "var(--theme-text-color)" }}>
                  Learner Dashboard
                  <ChevronRight className="h-5 w-5 text-blue-500 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Write to global penpals without fear. Click any word for colored syllable breakdowns, use speech-to-text dictation, and play cooperative timer-free games.
                </p>

                <ul className="space-y-2 text-xs font-semibold text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span>OpenDyslexic & Lexend typographic pacing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span>Real-time Web Speech dictation & TTS audio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-600" />
                    <span>Sentence starters & scaffold chips</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>Enter Learner Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 2: Parent */}
            <div
              onClick={() => handleRoleSelection("parent")}
              className="group cursor-pointer rounded-3xl border paper-card p-7 flex flex-col justify-between transition-all hover:scale-[1.02] hover:border-purple-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100/50 rounded-bl-full pointer-events-none" />
              <div>
                <div className="h-14 w-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-xs">
                  👩‍👦
                </div>
                <div className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 mb-2">
                  For Families & Guardians
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-1.5 group-hover:text-purple-600 transition-colors" style={{ color: "var(--theme-text-color)" }}>
                  Parent Dashboard
                  <ChevronRight className="h-5 w-5 text-purple-500 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Celebrate your child's linguistic confidence, reading stamina, and milestone awards. Configure remote visual accommodation defaults seamlessly.
                </p>

                <ul className="space-y-2 text-xs font-semibold text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span>Reading stamina & autonomy trajectory</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span>Remote sensory adaptation overrides</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-purple-600" />
                    <span>Exportable progress portfolios</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-600">
                <span>Open Parent Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Card 3: Educator */}
            <div
              onClick={() => handleRoleSelection("educator")}
              className="group cursor-pointer rounded-3xl border paper-card p-7 flex flex-col justify-between transition-all hover:scale-[1.02] hover:border-emerald-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/50 rounded-bl-full pointer-events-none" />
              <div>
                <div className="h-14 w-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-xs">
                  👨‍🏫
                </div>
                <div className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 mb-2">
                  For SEN Coordinators & Teachers
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-1.5 group-hover:text-emerald-600 transition-colors" style={{ color: "var(--theme-text-color)" }}>
                  SEN Educator Dashboard
                  <ChevronRight className="h-5 w-5 text-emerald-500 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Classroom roster management tailored for Individualized Education Programs (IEP). Map writing tasks to concrete curriculum accommodations.
                </p>

                <ul className="space-y-2 text-xs font-semibold text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>IEP target achievement matrices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Batch accommodation overrides per desk</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" />
                    <span>Official SEN board print-ready dossiers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>Open SEN Dashboard</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </section>

        {/* 4 PILLARS OF ACCESSIBILITY & DYSLEXIA SCIENCE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: "var(--theme-border-color)", backgroundColor: "var(--theme-card-subtle)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
                Powered by Neuroscience Research
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight" style={{ color: "var(--theme-text-color)" }}>
                Why Neurodiverse Minds Excel with PenPal
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Typographic Stability</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Heavy-bottom baseline fonts (OpenDyslexic) and rhythm-paced letters (Lexend) physically ground glyphs to stop inversions (b/d/p/q) and horizontal crowding.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Anti-Glare Scotopic Lenses</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High contrast pure white backgrounds provoke optic fatigue and visual migraine in Irlen syndrome. Warm cream and sage tints calm visual receptors.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                    <Volume2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Bimodal Audio-Visual</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Simultaneous auditory and visual phoneme tracking engages dual cognitive channels, easing the working memory load for vocabulary retention.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Zero Competitive Pressure</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Timers trigger catastrophic executive freeze in dyslexic learners. PenPal is asynchronous, timer-free, and based on mutual peer encouragement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GLOBAL PENPAL CORRESPONDENCE MAP / EXCHANGES */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="rounded-3xl border paper-card p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4">
                <Globe className="h-3.5 w-3.5" /> Global Correspondence Network
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4" style={{ color: "var(--theme-text-color)" }}>
                From the United States to London, Bogotá to India.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Over 14,000 asynchronous letters exchanged across 32 countries. Learners share passions for drawing, football, culinary arts, and music while building language confidence at their own pace.
              </p>

              <div className="flex flex-wrap gap-6 pt-2">
                <div>
                  <span className="block text-3xl font-black text-blue-600">100%</span>
                  <span className="text-xs text-slate-500 font-bold">Free Forever</span>
                </div>
                <div className="border-l pl-6 border-slate-200">
                  <span className="block text-3xl font-black text-emerald-600">84%</span>
                  <span className="text-xs text-slate-500 font-bold">Confidence Gain</span>
                </div>
                <div className="border-l pl-6 border-slate-200">
                  <span className="block text-3xl font-black text-purple-600">Adaptive</span>
                  <span className="text-xs text-slate-500 font-bold">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t py-12 px-4 sm:px-6 lg:px-8 font-sans" style={{ borderColor: "var(--theme-border-color)", backgroundColor: "var(--theme-card-bg)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">✉️</span>
            <div>
              <span className="font-black text-lg text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                PenPal
              </span>
              <p className="text-xs text-slate-500">Accessible Social Language Learning • Designed for Neurodiversity</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-bold text-slate-600">
            <button onClick={() => handleRoleSelection("learner")} className="hover:text-blue-600">Learner Dashboard</button>
            <button onClick={() => handleRoleSelection("parent")} className="hover:text-purple-600">Parent Dashboard</button>
            <button onClick={() => handleRoleSelection("educator")} className="hover:text-emerald-600">SEN Dashboard</button>
          </div>

          <div className="text-xs text-slate-400">
            © 2026 PenPal. Created by Folarera Kassim (ORCiD: 0009-0007-2148-5675)
          </div>
        </div>
      </footer>
    </div>
  );
}
