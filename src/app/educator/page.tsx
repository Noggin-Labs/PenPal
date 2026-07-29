"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useAccessibility, ThemeColor, DyslexiaFont } from "@/context/AccessibilityContext";
import { NavigationHeader } from "@/components/NavigationHeader";
import {
  Users,
  GraduationCap,
  Sparkles,
  FileDown,
  Settings,
  Plus,
  BookOpen,
  MessageSquare,
  Award,
  Sliders,
  CheckCircle,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  iepGoal: string;
  messagesSent: number;
  quizzesCompleted: number;
  rulerUsage: string;
  preferredFont: string;
  status: "Achieved" | "On Track" | "Needs Support";
}

const INITIAL_ROSTER: Student[] = [
  {
    id: "1",
    name: "Alex Johnson",
    iepGoal: "Initiate 5 async Spanish penpal responses with syllable breakdown assistance.",
    messagesSent: 3,
    quizzesCompleted: 1,
    rulerUsage: "Frequently",
    preferredFont: "OpenDyslexic",
    status: "On Track",
  },
  {
    id: "2",
    name: "Chloe Smith",
    iepGoal: "Utilize dictation voice input on 3 consecutive writing tasks.",
    messagesSent: 6,
    quizzesCompleted: 2,
    rulerUsage: "Always",
    preferredFont: "Arial / Clean Space",
    status: "Achieved",
  },
  {
    id: "3",
    name: "Daniel Garcia",
    iepGoal: "Listen to 10 vocabulary pronunciations using text-to-speech scaffold.",
    messagesSent: 1,
    quizzesCompleted: 0,
    rulerUsage: "Rarely",
    preferredFont: "OpenDyslexic",
    status: "Needs Support",
  },
];

export default function EducatorPortal() {
  const router = useRouter();
  const { user, login } = useAuth();
  const {
    fontFamily,
    themeColor,
    fontSizeMultiplier,
    readingRulerEnabled,
    setSettings,
  } = useAccessibility();

  const [roster, setRoster] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeTab, setActiveTab] = useState<"roster" | "iep" | "remote">("roster");
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "educator") {
      login("educator");
    }

    // Dynamic sync of Alex's messages count
    const simulatedAlexMessages = Number(localStorage.getItem("penpal_messages_sent_count") || "3");
    const syncRoster = INITIAL_ROSTER.map((std) => {
      if (std.id === "1") {
        return {
          ...std,
          messagesSent: simulatedAlexMessages,
          status: simulatedAlexMessages >= 5 ? "Achieved" as const : "On Track" as const,
        };
      }
      return std;
    });

    setRoster(syncRoster);
    setSelectedStudent(syncRoster[0]);
  }, [user, login]);

  const handleRoleChange = (role: "learner" | "parent" | "educator") => {
    login(role);
    if (role === "learner") {
      router.push("/dashboard");
    } else if (role === "parent") {
      router.push("/parent");
    }
  };

  const handleRemoteOverride = <K extends keyof ReturnType<typeof useAccessibility>>(
    key: K,
    value: any
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleExportIEPReport = (studentName: string) => {
    alert(`IEP report file for "${studentName}" generated & exported successfully to SEN board format.`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader
        currentRole="educator"
        onRoleChange={handleRoleChange}
        title="👨‍🏫 SEN & Educator Administration Board"
      />

      <main className="flex-grow max-w-7xl w-full mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24 font-sans text-slate-800">

        {/* Left Hand: Student List & IEP tracking status (span 4) */}
        <div className="lg:col-span-4 space-y-4">
          <div
            className="p-5 rounded-2xl border shadow-sm space-y-4"
            style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)" }}
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg text-slate-800 flex items-center gap-1.5">
                <Users className="h-5 w-5 text-blue-600" /> Class Roster
              </h2>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                3 Students
              </span>
            </div>

            <div className="space-y-2">
              {roster.map((student) => (
                <button
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className={`w-full p-4 rounded-xl text-left border transition-all ${
                    selectedStudent?.id === student.id
                      ? "border-blue-600 bg-blue-50/70 shadow-sm"
                      : "border-slate-100 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm block">{student.name}</span>
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                        student.status === "Achieved"
                          ? "bg-green-100 text-green-800"
                          : student.status === "On Track"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">Goal: {student.iepGoal}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Hand: Detailed workspace for selected student IEP / Accommodations (span 8) */}
        <div className="lg:col-span-8 space-y-6">
          {selectedStudent ? (
            <div
              className="p-6 rounded-2xl border shadow-sm space-y-6"
              style={{ backgroundColor: "var(--theme-card-bg)", borderColor: "var(--theme-border-color)" }}
            >
              {/* Student Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4 gap-4" style={{ borderColor: "var(--theme-border-color)" }}>
                <div>
                  <h3 className="text-2xl font-black text-slate-800">{selectedStudent.name}</h3>
                  <p className="text-xs text-slate-500">Accommodation Group: Specific Learning Difficulty (Dyslexia)</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleExportIEPReport(selectedStudent.name)}
                    className="flex items-center gap-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-xl shadow-sm transition"
                  >
                    <FileDown className="h-4 w-4" />
                    Export IEP Portfolio
                  </button>
                </div>
              </div>

              {/* Tabs selector */}
              <div className="flex border-b" style={{ borderColor: "var(--theme-border-color)" }}>
                {[
                  { value: "roster", label: "📈 IEP Goal Progress Analytics" },
                  { value: "remote", label: "⚙️ Accommodation Override Controls" },
                ].map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setActiveTab(t.value as any)}
                    className={`px-4 py-2 text-xs font-bold border-b-2 transition-all -mb-px ${
                      activeTab === t.value
                        ? "border-blue-600 text-blue-600 font-extrabold"
                        : "border-transparent text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT 1: IEP Progress */}
              {activeTab === "roster" && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-2">Mapped IEP Target Frame</h4>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-700 leading-relaxed">
                      💡 "{selectedStudent.iepGoal}"
                    </div>
                  </div>

                  {/* Quantitative metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1">
                      <span className="text-xs text-slate-400 font-bold block uppercase">Messages Sent</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-blue-600">{selectedStudent.messagesSent}</span>
                        <span className="text-xs text-slate-400">/ 5 required</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1">
                      <span className="text-xs text-slate-400 font-bold block uppercase">Quizzes Contributed</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-indigo-600">{selectedStudent.quizzesCompleted}</span>
                        <span className="text-xs text-slate-400">Collaborative</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1">
                      <span className="text-xs text-slate-400 font-bold block uppercase">Reading Ruler Utility</span>
                      <span className="text-lg font-black text-emerald-600 block">{selectedStudent.rulerUsage}</span>
                    </div>
                  </div>

                  {/* Qualitative IEP progress */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-xs text-slate-400 uppercase tracking-wider">Teacher Observational Logs</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Alex has shown major confidence gains when drafting Spanish responses. The colored syllable breakdown is highly effective; Alex is clicking on average 4 complex terms per dialogue session. High-contrast cream theme keeps scotopic fatigue under control.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB CONTENT 2: Accommodation controls overrides */}
              {activeTab === "remote" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-sm text-slate-500 leading-relaxed">
                    Override visual/auditory presets for <strong>{selectedStudent.name}</strong> remotely. Changes will be deployed immediately to their learner workspace layout upon their next interaction.
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Typography select */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">Primary Font Setting</label>
                      <select
                        value={fontFamily}
                        onChange={(e) => handleRemoteOverride("fontFamily", e.target.value as DyslexiaFont)}
                        className="w-full p-2.5 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="open-dyslexic">OpenDyslexic (Heavy Baseline)</option>
                        <option value="sans-serif">Clean Arial</option>
                        <option value="standard">Standard System default</option>
                      </select>
                    </div>

                    {/* Pastel overlay select */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">Contrast Anti-Glare Theme</label>
                      <select
                        value={themeColor}
                        onChange={(e) => handleRemoteOverride("themeColor", e.target.value as ThemeColor)}
                        className="w-full p-2.5 rounded-xl border bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="default-cream">Warm Anti-Glare Cream 🍦</option>
                        <option value="pastel-blue">Pastel Blue 🌊</option>
                        <option value="pastel-green">Pastel Green 🍃</option>
                        <option value="high-contrast">Dark High Contrast</option>
                      </select>
                    </div>

                    {/* Zoom / scale control */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold text-slate-500 uppercase">
                        <span>Font Size Zoom</span>
                        <span className="text-blue-600">{fontSizeMultiplier}x</span>
                      </div>
                      <input
                        type="range"
                        min="0.8"
                        max="1.5"
                        step="0.05"
                        value={fontSizeMultiplier}
                        onChange={(e) => handleRemoteOverride("fontSizeMultiplier", parseFloat(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>

                    {/* Reading Ruler Toggle */}
                    <div className="flex items-center justify-between border-l pl-4 border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-slate-500 uppercase block">Reading Highlight Ruler</span>
                        <span className="text-[10px] text-slate-400">Force highlighter strip</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={readingRulerEnabled}
                        onChange={(e) => handleRemoteOverride("readingRulerEnabled", e.target.checked)}
                        className="h-5 w-5 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {savedSuccess && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-green-800 text-xs font-bold animate-fade-in">
                      <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                      <span>Remote configurations deployed & synced successfully onto {selectedStudent.name}'s profile.</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-400">
              Please select a student from the classroom roster to review goals and configure custom sensory adaptations.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
