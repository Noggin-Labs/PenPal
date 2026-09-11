"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  useAccessibility,
  ThemeColor,
  DyslexiaFont,
  RulerMode,
} from "@/context/AccessibilityContext";
import { NavigationHeader } from "@/components/NavigationHeader";
import {
  TrendingUp,
  Heart,
  Sliders,
  Calendar,
  Award,
  BookOpen,
  Eye,
  Settings,
  Save,
  CheckCircle,
  FileDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Type,
  X,
  Printer,
  Check,
} from "lucide-react";

export default function ParentPortal() {
  const router = useRouter();
  const { user, login } = useAuth();
  const {
    fontFamily,
    lineHeight,
    letterSpacing,
    wordSpacing,
    themeColor,
    readingRulerEnabled,
    readingRulerHeight,
    rulerMode,
    speechSpeed,
    fontSizeMultiplier,
    setSettings,
    playTactileChime,
  } = useAccessibility();

  const [messageCount, setMessageCount] = useState(3);
  const [points, setPoints] = useState(50);
  const [vocabCount, setVocabCount] = useState(6);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "parent") {
      login("parent");
    }

    // Load custom metrics from simulation storage
    if (typeof window !== "undefined") {
      setMessageCount(Number(localStorage.getItem("penpal_messages_sent_count") || "3"));
      setPoints(Number(localStorage.getItem("penpal_quiz_points") || "50"));
      const vocabs = JSON.parse(localStorage.getItem("penpal_learned_vocab") || "[]");
      setVocabCount(vocabs.length > 0 ? vocabs.length : 6);
    }
  }, [user, login]);

  const handleRoleChange = (role: "learner" | "parent" | "educator") => {
    playTactileChime("chime");
    login(role);
    if (role === "learner") {
      router.push("/dashboard");
    } else if (role === "educator") {
      router.push("/educator");
    }
  };

  const handleUpdateRemoteSetting = <K extends keyof ReturnType<typeof useAccessibility>>(
    key: K,
    value: any
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
    playTactileChime("pop");
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2200);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-purple-200 selection:text-slate-900">
      <NavigationHeader
        currentRole="parent"
        onRoleChange={handleRoleChange}
        title="👩‍👦 Parent Insights & Growth Sanctuary"
      />

      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24">
        {/* LEFT COLUMN: Child Insights & Trajectory (span 7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Confidence Overview Card */}
          <div
            className="p-6 sm:p-7 rounded-3xl border paper-card space-y-6 shadow-sm"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
            }}
          >
            {/* Header banner */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b gap-3"
              style={{ borderColor: "var(--theme-border-color)" }}
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-black uppercase tracking-wider mb-1.5">
                  <Heart className="h-3 w-3 fill-purple-600" />
                  Active Learner Profile: Alex
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                  Alex's Confidence & Learning Sanctuary
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Tracking asynchronous engagement with Mateo in Madrid, Spain
                </p>
              </div>

              <button
                onClick={() => {
                  setShowExportModal(true);
                  playTactileChime("chime");
                }}
                className="self-start sm:self-center flex items-center gap-1.5 text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-3.5 py-2 rounded-xl transition shadow-xs"
              >
                <FileDown className="h-4 w-4" />
                <span>Export Progress Portfolio</span>
              </button>
            </div>

            {/* Quick Metrics Trio */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-center space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 block">
                  Letters Sent
                </span>
                <span className="text-2xl sm:text-3xl font-black text-purple-900 block">
                  {messageCount}
                </span>
                <span className="text-[10px] text-purple-700 font-medium block">
                  100% Async comfort
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-center space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 block">
                  Team XP
                </span>
                <span className="text-2xl sm:text-3xl font-black text-indigo-900 block">
                  {points}
                </span>
                <span className="text-[10px] text-indigo-700 font-medium block">
                  Cooperative matches
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-center space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">
                  Word Bank
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-900 block">
                  {vocabCount}
                </span>
                <span className="text-[10px] text-emerald-700 font-medium block">
                  Spanish terms saved
                </span>
              </div>
            </div>

            {/* Confidence & Activity Trajectory */}
            <div className="space-y-4 pt-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                Cognitive Comfort & Autonomy Indicators
              </h3>

              <div className="space-y-4">
                {/* Metric 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Reading Stamina (Continuous focus before visual fatigue)</span>
                    <span className="text-purple-600 font-extrabold">84% (+14% this month)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-purple-600 h-full rounded-full transition-all duration-500" style={{ width: "84%" }} />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Warm cream theme and OpenDyslexic baseline eliminated Irlen scotopic fatigue.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Writing Autonomy (Independence from sentence scaffolds)</span>
                    <span className="text-indigo-600 font-extrabold">72% Self-Directed</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: "72%" }} />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Alex now drafts 2-sentence Spanish responses without relying on starters.
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Speech-to-Text Utilization</span>
                    <span className="text-emerald-600 font-extrabold">High Adoption (6 dictations)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: "88%" }} />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Voice dictation removed typing friction, empowering richer descriptive vocabulary.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Collectible Postage Stamp Milestones */}
          <div
            className="p-6 sm:p-7 rounded-3xl border paper-card space-y-4"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
            }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-500" />
                <h3 className="font-black text-lg text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                  Commemorative Achievement Stamps
                </h3>
              </div>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                4 Unlocked
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-amber-200 flex items-center justify-center text-xl shrink-0 shadow-inner">
                  📮
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Global Match Stamp</h4>
                  <p className="text-xs text-slate-600">Connected with Mateo from Madrid, Spain</p>
                  <span className="text-[10px] text-amber-700 font-bold block mt-1">Unlocked Sep 2026</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200/80 flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-rose-200 flex items-center justify-center text-xl shrink-0 shadow-inner">
                  🎙️
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Voice Dictation Star</h4>
                  <p className="text-xs text-slate-600">Completed 3 spoken audio letters</p>
                  <span className="text-[10px] text-rose-700 font-bold block mt-1">Unlocked Sep 2026</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/80 flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-indigo-200 flex items-center justify-center text-xl shrink-0 shadow-inner">
                  🤝
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Cooperative Quiz Hero</h4>
                  <p className="text-xs text-slate-600">Solved partner trivia with zero timer pressure</p>
                  <span className="text-[10px] text-indigo-700 font-bold block mt-1">Unlocked Sep 2026</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-200 flex items-center justify-center text-xl shrink-0 shadow-inner">
                  📚
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-800">Syllable Sleuth</h4>
                  <p className="text-xs text-slate-600">Dissected and saved 6 multi-syllable terms</p>
                  <span className="text-[10px] text-emerald-700 font-bold block mt-1">Unlocked Sep 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Parental Remote Adaptation Override Studio (span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div
            className="p-6 sm:p-7 rounded-3xl border paper-card space-y-5"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
            }}
          >
            <div className="flex items-center gap-2.5 border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="h-9 w-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                <Sliders className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-black text-base text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                  Alex's Remote Accommodation Studio
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Directly customize default sensory triggers for Alex's device
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Typeface override */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Type className="h-3.5 w-3.5 text-purple-600" />
                  Typographic Font Override
                </label>
                <select
                  value={fontFamily}
                  onChange={(e) => handleUpdateRemoteSetting("fontFamily", e.target.value as DyslexiaFont)}
                  className="w-full p-3 rounded-2xl border bg-slate-50 text-slate-800 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
                >
                  <option value="lexend">Lexend (Cognitive rhythm & reading speed)</option>
                  <option value="open-dyslexic">OpenDyslexic (Weighted baseline to stop flipping)</option>
                  <option value="atkinson">Atkinson Hyperlegible (Maximized character distinction)</option>
                  <option value="sans-serif">Clean Sans (Neutral modern clarity)</option>
                </select>
              </div>

              {/* Theme color override */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5 text-amber-600" />
                  Anti-Glare Scotopic Tint Filter
                </label>
                <select
                  value={themeColor}
                  onChange={(e) => handleUpdateRemoteSetting("themeColor", e.target.value as ThemeColor)}
                  className="w-full p-3 rounded-2xl border bg-slate-50 text-slate-800 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-inner"
                >
                  <option value="default-cream">Warm Parchment Cream (Calming ivory)</option>
                  <option value="pastel-blue">Serene Sky Tint (Cool visual rest)</option>
                  <option value="pastel-green">Meadow Sage (Scotopic fatigue ease)</option>
                  <option value="rose-twilight">Rose Mist (Gentle warm dusk)</option>
                  <option value="solar-amber">Solar Sepia (Balanced comfort)</option>
                  <option value="high-contrast">Midnight Slate (Non-glare dark)</option>
                </select>
              </div>

              {/* Reading Ruler Toggle & Mode */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="h-4 w-4 text-purple-600" />
                    <div>
                      <span className="text-xs font-bold text-slate-800 block">
                        Reading Ruler Strip
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Tracks mouse across words
                      </span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={readingRulerEnabled}
                    onChange={(e) => handleUpdateRemoteSetting("readingRulerEnabled", e.target.checked)}
                    className="h-5 w-5 rounded border-slate-300 text-purple-600 accent-purple-600 cursor-pointer"
                  />
                </div>

                {readingRulerEnabled && (
                  <div className="pt-2 border-t border-slate-200/70 grid grid-cols-3 gap-1 text-[11px]">
                    {[
                      { id: "strip", label: "Highlight" },
                      { id: "mask", label: "Curtain" },
                      { id: "underline", label: "Underline" },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => handleUpdateRemoteSetting("rulerMode", m.id as RulerMode)}
                        className={`py-1.5 px-2 rounded-lg font-bold text-center transition ${
                          rulerMode === m.id
                            ? "bg-purple-600 text-white shadow-xs"
                            : "bg-white border border-slate-200 text-slate-700"
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Text Zoom Scale */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                  <span>Zoom Level / Text Scale</span>
                  <span className="text-purple-600 font-black">{fontSizeMultiplier}x</span>
                </div>
                <input
                  type="range"
                  min="0.9"
                  max="1.4"
                  step="0.05"
                  value={fontSizeMultiplier}
                  onChange={(e) => handleUpdateRemoteSetting("fontSizeMultiplier", parseFloat(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Spacing Controls */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                    <span>Letter Spacing</span>
                    <span className="text-purple-600">+{letterSpacing}px</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.5"
                    step="0.5"
                    value={letterSpacing}
                    onChange={(e) => handleUpdateRemoteSetting("letterSpacing", parseFloat(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1">
                    <span>Word Spacing</span>
                    <span className="text-purple-600">+{wordSpacing}px</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="5.0"
                    step="0.5"
                    value={wordSpacing}
                    onChange={(e) => handleUpdateRemoteSetting("wordSpacing", parseFloat(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                  />
                </div>
              </div>

              {/* Success badge */}
              {savedSuccess && (
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-emerald-800 text-xs font-bold animate-fade-in">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Accommodations pushed & live-synced to Alex's Learner Desk.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* EXPORT PORTFOLIO MODAL */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs font-sans animate-fade-in">
          <div
            className="w-full max-w-xl rounded-3xl border p-6 sm:p-8 bg-white shadow-2xl space-y-6"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
              color: "var(--theme-text-color)",
            }}
          >
            <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <FileDown className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                    Alex Johnson • Learning Portfolio Summary
                  </h3>
                  <p className="text-xs text-slate-500">Official SEN & IEP Coordination Document</p>
                </div>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Dossier contents */}
            <div className="space-y-4 text-xs leading-relaxed text-slate-700">
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                <div className="flex justify-between font-bold text-purple-900 text-sm">
                  <span>Student: Alex Johnson</span>
                  <span>Date: September 2026</span>
                </div>
                <p>
                  <strong>Active Target:</strong> "Initiate 5 async Spanish penpal responses with syllable breakdown assistance and voice dictation."
                </p>
                <p>
                  <strong>Accommodations Active:</strong> {fontFamily.toUpperCase()} typography, {themeColor} anti-glare scotopic tint, {fontSizeMultiplier}x text zoom, Bimodal Web Speech dictation.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block font-bold text-[10px]">Letters Sent</span>
                  <span className="text-lg font-black text-purple-700">{messageCount} / 5</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block font-bold text-[10px]">Team Points</span>
                  <span className="text-lg font-black text-indigo-700">{points} XP</span>
                </div>
                <div className="p-3 rounded-xl border border-slate-200">
                  <span className="text-slate-400 block font-bold text-[10px]">Word Bank</span>
                  <span className="text-lg font-black text-emerald-700">{vocabCount} Words</span>
                </div>
              </div>

              <p className="text-slate-500 italic">
                This dossier is pre-formatted for direct integration into Alex's Annual IEP Review meeting with school SEN specialists.
              </p>
            </div>

            <div className="pt-3 border-t flex justify-end gap-2" style={{ borderColor: "var(--theme-border-color)" }}>
              <button
                onClick={() => {
                  window.print();
                  setShowExportModal(false);
                }}
                className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5"
              >
                <Printer className="h-4 w-4" />
                <span>Print Dossier</span>
              </button>
              <button
                onClick={() => {
                  alert("Alex's learning portfolio has been downloaded to PDF.");
                  setShowExportModal(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-black text-xs flex items-center gap-1.5 shadow-sm"
              >
                <FileDown className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
