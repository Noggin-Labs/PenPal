"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useAccessibility, ThemeColor, DyslexiaFont } from "@/context/AccessibilityContext";
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
} from "lucide-react";

export default function ParentPortal() {
  const router = useRouter();
  const { user, login } = useAuth();
  const {
    fontFamily,
    lineHeight,
    letterSpacing,
    themeColor,
    readingRulerEnabled,
    speechSpeed,
    fontSizeMultiplier,
    setSettings,
  } = useAccessibility();

  const [messageCount, setMessageCount] = useState(3);
  const [points, setPoints] = useState(20);
  const [vocabCount, setVocabCount] = useState(6);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "parent") {
      login("parent");
    }

    // Load custom metrics from simulation storage
    if (typeof window !== "undefined") {
      setMessageCount(Number(localStorage.getItem("penpal_messages_sent_count") || "3"));
      setPoints(Number(localStorage.getItem("penpal_quiz_points") || "20"));
      const vocabs = JSON.parse(localStorage.getItem("penpal_learned_vocab") || "[]");
      setVocabCount(vocabs.length > 0 ? vocabs.length : 6);
    }
  }, [user, login]);

  const handleRoleChange = (role: "learner" | "parent" | "educator") => {
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
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader
        currentRole="parent"
        onRoleChange={handleRoleChange}
        title="👩‍👦 Parent Portal & Insights"
      />

      <main className="flex-grow max-w-7xl w-full mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24 font-sans">

        {/* Left Hand: Student Analytics & Confidence Metrics (span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div
            className="p-6 rounded-2xl border shadow-sm space-y-4"
            style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)" }}
          >
            <div className="flex justify-between items-center border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Alex's Confidence & Learning Insights</h2>
                <p className="text-xs text-slate-500">Live analytics mapping asynchronous interactions</p>
              </div>
              <button
                onClick={() => alert("Alex's progress portfolio has been exported successfully!")}
                className="flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-lg hover:bg-purple-100 transition"
              >
                <FileDown className="h-4 w-4" />
                Export Portfolio
              </button>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 text-center space-y-1">
                <span className="text-xs font-bold text-purple-600 uppercase">Messages Sent</span>
                <span className="block text-2xl font-black text-purple-800">{messageCount}</span>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-center space-y-1">
                <span className="text-xs font-bold text-indigo-600 uppercase">Quiz Points</span>
                <span className="block text-2xl font-black text-indigo-800">{points} XP</span>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-center space-y-1">
                <span className="text-xs font-bold text-emerald-600 uppercase">Vocabulary</span>
                <span className="block text-2xl font-black text-emerald-800">{vocabCount} Words</span>
              </div>
            </div>

            {/* Simulated progress graph */}
            <div className="space-y-4 pt-4">
              <h3 className="font-bold text-sm text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4" /> Confidence & Activity Trajectory
              </h3>

              <div className="space-y-3">
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Reading Stamina (Average duration without pause)</span>
                    <span className="text-purple-600 font-extrabold">84% Comfort</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-purple-600 h-full rounded-full transition-all" style={{ width: "84%" }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Writing Autonomy (Independence from sentence starters)</span>
                    <span className="text-indigo-600 font-extrabold">70% Independence</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full transition-all" style={{ width: "70%" }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Phonemic Mapping (Clicks on Syllable Breakdown tool)</span>
                    <span className="text-emerald-600 font-extrabold">Highly Active</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full transition-all" style={{ width: "92%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Milestones Accomplished */}
          <div
            className="p-6 rounded-2xl border shadow-sm space-y-4"
            style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)" }}
          >
            <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              Accomplished Milestones
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-2xl mt-0.5">🌟</span>
                <div>
                  <h4 className="font-bold text-slate-800">Perfect Match Partner</h4>
                  <p className="text-xs text-slate-500">Matched successfully with Mateo from Madrid, Spain</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-2xl mt-0.5">🗣️</span>
                <div>
                  <h4 className="font-bold text-slate-800">First Voice Message Dictation</h4>
                  <p className="text-xs text-slate-500">Alex completed a speech dictation containing Spanish verbs</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-2xl mt-0.5">🎯</span>
                <div>
                  <h4 className="font-bold text-slate-800">No-Stress Quiz Solved</h4>
                  <p className="text-xs text-slate-500">Answered translation matches with peer assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hand: Remote Accommodation Controls for Parents (span 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div
            className="p-6 rounded-2xl border shadow-sm space-y-5"
            style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)" }}
          >
            <div className="flex items-center gap-2 border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
              <Sliders className="h-5 w-5 text-purple-600" />
              <div>
                <h3 className="font-bold text-lg text-slate-800">Parental Remote Adaptation Control</h3>
                <p className="text-xs text-slate-400">Configure default view triggers for Alex</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Typeface override */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 block">Default Typographic Font</label>
                <select
                  value={fontFamily}
                  onChange={(e) => handleUpdateRemoteSetting("fontFamily", e.target.value as DyslexiaFont)}
                  className="w-full p-2.5 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="open-dyslexic">OpenDyslexic (Weighted baseline)</option>
                  <option value="sans-serif">Clean Arial (High legibility)</option>
                  <option value="standard">Standard System font</option>
                </select>
              </div>

              {/* Theme override */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600 block">Contrast Theme Scheme</label>
                <select
                  value={themeColor}
                  onChange={(e) => handleUpdateRemoteSetting("themeColor", e.target.value as ThemeColor)}
                  className="w-full p-2.5 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="default-cream">Warm Cream (Anti-glare)</option>
                  <option value="pastel-blue">Pastel Blue (Calming)</option>
                  <option value="pastel-green">Pastel Green (Soft reading)</option>
                  <option value="high-contrast">Dark High Contrast</option>
                </select>
              </div>

              {/* Text size scale */}
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-600 mb-1">
                  <span>Zoom Level / Text Scale</span>
                  <span className="text-purple-600">{fontSizeMultiplier}x</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="1.5"
                  step="0.05"
                  value={fontSizeMultiplier}
                  onChange={(e) => handleUpdateRemoteSetting("fontSizeMultiplier", parseFloat(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              {/* Speech rate override */}
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-600 mb-1">
                  <span>Speech Synthesizer Pace</span>
                  <span className="text-purple-600">{speechSpeed}x speed</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.2"
                  step="0.05"
                  value={speechSpeed}
                  onChange={(e) => handleUpdateRemoteSetting("speechSpeed", parseFloat(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>

              {/* Reading Ruler Toggle */}
              <div className="flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--theme-border-color)" }}>
                <div>
                  <span className="text-sm font-bold text-slate-600 block">Highlight Reading Ruler</span>
                  <span className="text-xs text-slate-400">Force overlay highlight bar</span>
                </div>
                <input
                  type="checkbox"
                  checked={readingRulerEnabled}
                  onChange={(e) => handleUpdateRemoteSetting("readingRulerEnabled", e.target.checked)}
                  className="h-5 w-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500 accent-purple-600"
                />
              </div>
            </div>

            {savedSuccess && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-green-800 text-xs font-bold animate-fade-in">
                <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                <span>Accommodation settings deployed & synced instantly to Alex's view!</span>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
