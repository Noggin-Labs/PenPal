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
  Search,
  Check,
  Compass,
  Eye,
  Type,
  Printer,
  X,
  FileText,
  Clock,
} from "lucide-react";

interface Student {
  id: string;
  name: string;
  avatar: string;
  iepGoal: string;
  messagesSent: number;
  quizzesCompleted: number;
  rulerUsage: string;
  preferredFont: DyslexiaFont;
  preferredTheme: ThemeColor;
  status: "Achieved" | "On Track" | "Needs Support";
  sensoryNotes: string;
  observationLogs: { date: string; note: string }[];
}

const INITIAL_ROSTER: Student[] = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "👦",
    iepGoal: "Initiate 5 async Spanish penpal responses with syllable breakdown assistance & voice dictation.",
    messagesSent: 3,
    quizzesCompleted: 1,
    rulerUsage: "Frequently (82%)",
    preferredFont: "open-dyslexic",
    preferredTheme: "default-cream",
    status: "On Track",
    sensoryNotes: "Scotopic sensitivity to high-contrast white. Letter reversals with 'b' and 'd' without weighted baseline font.",
    observationLogs: [
      {
        date: "Sep 10, 2026",
        note: "Alex engaged enthusiastically with Mateo in Madrid. Successfully clicked on 4 multi-syllable Spanish words.",
      },
      {
        date: "Sep 07, 2026",
        note: "Introduced voice dictation tool; Alex dictated first 2-sentence response without spelling hesitation.",
      },
    ],
  },
  {
    id: "2",
    name: "Chloe Smith",
    avatar: "👧",
    iepGoal: "Utilize dictation voice input on 3 consecutive writing tasks without anxiety.",
    messagesSent: 6,
    quizzesCompleted: 2,
    rulerUsage: "Always (100%)",
    preferredFont: "lexend",
    preferredTheme: "pastel-blue",
    status: "Achieved",
    sensoryNotes: "Prefers calming sky background; reading speed increases 28% with Lexend rhythm spacing.",
    observationLogs: [
      {
        date: "Sep 09, 2026",
        note: "Chloe surpassed writing goal, completing 6 full penpal exchanges and helping peer solve quiz hints.",
      },
    ],
  },
  {
    id: "3",
    name: "Daniel Garcia",
    avatar: "🧑",
    iepGoal: "Listen to 10 vocabulary pronunciations using text-to-speech scaffold before submitting letters.",
    messagesSent: 1,
    quizzesCompleted: 0,
    rulerUsage: "Rarely (15%)",
    preferredFont: "atkinson",
    preferredTheme: "pastel-green",
    status: "Needs Support",
    sensoryNotes: "Working memory overload during rapid typing; benefits greatly from sentence starter scaffolds.",
    observationLogs: [
      {
        date: "Sep 08, 2026",
        note: "Daniel needed teacher prompt to explore syllable audio player. Encouraged to try the soccer vocab chips.",
      },
    ],
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
    rulerMode,
    letterSpacing,
    wordSpacing,
    setSettings,
    playTactileChime,
  } = useAccessibility();

  const [roster, setRoster] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [activeTab, setActiveTab] = useState<"progress" | "remote" | "notes">("progress");
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [statusFilter, setStatusFilter] = useState<"All" | "On Track" | "Needs Support" | "Achieved">("All");
  const [searchQuery, setSearchQuery] = useState("");

  // New Observation Note state
  const [newNoteText, setNewNoteText] = useState("");
  const [showExportModal, setShowExportModal] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "educator") {
      login("educator");
    }

    // Dynamic sync of Alex's messages count from storage
    const simulatedAlexMessages = Number(localStorage.getItem("penpal_messages_sent_count") || "3");
    const syncRoster = INITIAL_ROSTER.map((std) => {
      if (std.id === "1") {
        return {
          ...std,
          messagesSent: simulatedAlexMessages,
          status: simulatedAlexMessages >= 5 ? ("Achieved" as const) : ("On Track" as const),
        };
      }
      return std;
    });

    setRoster(syncRoster);
    setSelectedStudent(syncRoster[0]);
  }, [user, login]);

  const handleRoleChange = (role: "learner" | "parent" | "educator") => {
    playTactileChime("chime");
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
    playTactileChime("pop");
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2200);
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim() || !selectedStudent) return;
    playTactileChime("success");

    const newEntry = {
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
      note: newNoteText.trim(),
    };

    const updatedRoster = roster.map((s) => {
      if (s.id === selectedStudent.id) {
        return {
          ...s,
          observationLogs: [newEntry, ...s.observationLogs],
        };
      }
      return s;
    });

    setRoster(updatedRoster);
    setSelectedStudent({
      ...selectedStudent,
      observationLogs: [newEntry, ...selectedStudent.observationLogs],
    });
    setNewNoteText("");
  };

  const filteredRoster = roster.filter((student) => {
    const matchesFilter = statusFilter === "All" || student.status === statusFilter;
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.iepGoal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-emerald-200 selection:text-slate-900">
      <NavigationHeader
        currentRole="educator"
        onRoleChange={handleRoleChange}
        title="👨‍🏫 SEN Inclusion & IEP Command Atelier"
      />

      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24">
        {/* LEFT COLUMN: Classroom Roster & Status Filter (span 4) */}
        <div className="lg:col-span-4 space-y-4">
          <div
            className="p-5 sm:p-6 rounded-3xl border paper-card space-y-4"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-600" />
                <h2 className="font-black text-base text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                  SEN Classroom Roster
                </h2>
              </div>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                {roster.length} Active Desks
              </span>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search student or IEP goal..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
              />
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 text-[11px] font-bold">
              {(["All", "On Track", "Needs Support", "Achieved"] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => {
                    setStatusFilter(st);
                    playTactileChime("pop");
                  }}
                  className={`px-2.5 py-1 rounded-lg transition whitespace-nowrap ${
                    statusFilter === st
                      ? "bg-emerald-600 text-white font-black shadow-xs"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Student list */}
            <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-1">
              {filteredRoster.map((student) => {
                const isSelected = selectedStudent?.id === student.id;
                return (
                  <button
                    key={student.id}
                    onClick={() => {
                      setSelectedStudent(student);
                      playTactileChime("pop");
                    }}
                    className={`w-full p-4 rounded-2xl text-left border-2 transition-all ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/70 shadow-sm"
                        : "border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{student.avatar}</span>
                        <span className="font-black text-sm text-slate-900">{student.name}</span>
                      </div>
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                          student.status === "Achieved"
                            ? "bg-emerald-100 text-emerald-800"
                            : student.status === "On Track"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-rose-100 text-rose-800"
                        }`}
                      >
                        {student.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {student.iepGoal}
                    </p>

                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-bold">
                      <span>Letters: {student.messagesSent}/5</span>
                      <span>•</span>
                      <span>Font: {student.preferredFont}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Detailed Workspace for Selected Student (span 8) */}
        <div className="lg:col-span-8 space-y-6">
          {selectedStudent ? (
            <div
              className="p-6 sm:p-7 rounded-3xl border paper-card space-y-6 shadow-sm"
              style={{
                backgroundColor: "var(--theme-card-bg)",
                borderColor: "var(--theme-border-color)",
              }}
            >
              {/* Student Header */}
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-3"
                style={{ borderColor: "var(--theme-border-color)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl shadow-inner border border-emerald-200">
                    {selectedStudent.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                      {selectedStudent.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Special Educational Needs Profile: Dyslexia & Scotopic Sensitivity (Year 5)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setShowExportModal(true);
                      playTactileChime("chime");
                    }}
                    className="flex items-center gap-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl shadow-xs transition"
                  >
                    <FileDown className="h-4 w-4" />
                    <span>Export Official IEP Portfolio</span>
                  </button>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b text-xs font-bold" style={{ borderColor: "var(--theme-border-color)" }}>
                {[
                  { value: "progress", label: "📈 IEP Milestones & Metrics" },
                  { value: "remote", label: "⚙️ Remote Accommodations" },
                  { value: "notes", label: "📝 Observational Log & Notes" },
                ].map((t) => (
                  <button
                    key={t.value}
                    onClick={() => {
                      setActiveTab(t.value as any);
                      playTactileChime("pop");
                    }}
                    className={`px-4 py-2.5 border-b-2 transition -mb-px flex items-center gap-1.5 ${
                      activeTab === t.value
                        ? "border-emerald-600 text-emerald-800 font-black"
                        : "border-transparent text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* TAB 1: Progress Metrics */}
              {activeTab === "progress" && (
                <div className="space-y-6 animate-fade-in text-sm">
                  {/* Mapped IEP Goal */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                      Statutory IEP Target Objective
                    </span>
                    <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 text-sm font-semibold text-emerald-950 leading-relaxed flex items-start gap-2.5">
                      <Sparkles className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>"{selectedStudent.iepGoal}"</div>
                    </div>
                  </div>

                  {/* Quantitative metrics cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Letters Exchanged</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-emerald-700">{selectedStudent.messagesSent}</span>
                        <span className="text-xs text-slate-400">/ 5 required</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-emerald-600 h-full rounded-full"
                          style={{ width: `${Math.min(100, (selectedStudent.messagesSent / 5) * 100)}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Cooperative Quizzes</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-black text-indigo-700">{selectedStudent.quizzesCompleted}</span>
                        <span className="text-xs text-slate-400">Collaborations</span>
                      </div>
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                        <div
                          className="bg-indigo-600 h-full rounded-full"
                          style={{ width: `${Math.min(100, selectedStudent.quizzesCompleted * 50)}%` }}
                        />
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase block">Reading Ruler Utility</span>
                      <span className="text-lg font-black text-purple-700 block">{selectedStudent.rulerUsage}</span>
                      <span className="text-[10px] text-slate-400">High visual tracking benefit</span>
                    </div>
                  </div>

                  {/* Sensory Profile Notes */}
                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1">
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest block">
                      Diagnostic Sensory Summary
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {selectedStudent.sensoryNotes}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: Remote Accommodation Overrides */}
              {activeTab === "remote" && (
                <div className="space-y-6 animate-fade-in text-xs">
                  <p className="text-slate-500 leading-relaxed">
                    Instantly push visual and auditory accommodations to <strong>{selectedStudent.name}'s</strong> workstation. The changes apply seamlessly upon their next interaction.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Typographic choice */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Type className="h-3.5 w-3.5 text-emerald-600" />
                        Target Typographic Pacing
                      </label>
                      <select
                        value={fontFamily}
                        onChange={(e) => handleRemoteOverride("fontFamily", e.target.value as DyslexiaFont)}
                        className="w-full p-3 rounded-2xl border bg-slate-50 text-slate-800 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
                      >
                        <option value="open-dyslexic">OpenDyslexic (Heavy Bottom Baseline)</option>
                        <option value="lexend">Lexend (Cognitively Paced Rhythms)</option>
                        <option value="atkinson">Atkinson Hyperlegible (Distinguishable Characters)</option>
                        <option value="sans-serif">Clean Sans</option>
                      </select>
                    </div>

                    {/* Scotopic Tint */}
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5 text-emerald-600" />
                        Anti-Glare Scotopic Tint
                      </label>
                      <select
                        value={themeColor}
                        onChange={(e) => handleRemoteOverride("themeColor", e.target.value as ThemeColor)}
                        className="w-full p-3 rounded-2xl border bg-slate-50 text-slate-800 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
                      >
                        <option value="default-cream">Warm Parchment Cream 🍦</option>
                        <option value="pastel-blue">Serene Sky Tint 🌊</option>
                        <option value="pastel-green">Meadow Sage 🍃</option>
                        <option value="rose-twilight">Rose Mist 🌸</option>
                        <option value="solar-amber">Solar Sepia ☀️</option>
                        <option value="high-contrast">Midnight Slate 🌙</option>
                      </select>
                    </div>

                    {/* Font Size Zoom */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between font-bold text-slate-600 uppercase">
                        <span>Font Size Zoom</span>
                        <span className="text-emerald-600">{fontSizeMultiplier}x</span>
                      </div>
                      <input
                        type="range"
                        min="0.9"
                        max="1.4"
                        step="0.05"
                        value={fontSizeMultiplier}
                        onChange={(e) => handleRemoteOverride("fontSizeMultiplier", parseFloat(e.target.value))}
                        className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                      />
                    </div>

                    {/* Reading Ruler Toggle */}
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-700 block">Enforce Reading Ruler</span>
                        <span className="text-[10px] text-slate-400">Ocular tracking highlighter</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={readingRulerEnabled}
                        onChange={(e) => handleRemoteOverride("readingRulerEnabled", e.target.checked)}
                        className="h-5 w-5 rounded border-slate-300 text-emerald-600 accent-emerald-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  {savedSuccess && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2 text-emerald-800 font-bold animate-fade-in">
                      <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Remote configurations deployed & synced successfully to {selectedStudent.name}'s profile.</span>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Observational Logs & Add Note */}
              {activeTab === "notes" && (
                <div className="space-y-6 animate-fade-in text-xs">
                  {/* Add Note Form */}
                  <form onSubmit={handleAddNote} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <label className="font-bold text-slate-700 uppercase tracking-wider block">
                      Record Teacher Observational Entry for {selectedStudent.name}
                    </label>
                    <textarea
                      value={newNoteText}
                      onChange={(e) => setNewNoteText(e.target.value)}
                      placeholder="Add specific notes on vocabulary phonetics, dictation ease, or stamina..."
                      rows={3}
                      className="w-full p-3 rounded-xl border bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner"
                    />
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={!newNoteText.trim()}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-xl transition shadow-xs flex items-center gap-1.5"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Save Observation Note</span>
                      </button>
                    </div>
                  </form>

                  {/* History of notes */}
                  <div className="space-y-3">
                    <span className="font-bold text-slate-500 uppercase tracking-wider block">
                      Historical Observation Timeline
                    </span>

                    {selectedStudent.observationLogs.map((log, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
                        <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px]">
                          <Clock className="h-3 w-3" />
                          <span>{log.date}</span>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {log.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-24 text-slate-400 text-sm">
              Please choose a student from the classroom roster to review goals and adjust sensory accommodations.
            </div>
          )}
        </div>
      </main>

      {/* EXPORT OFFICIAL IEP PORTFOLIO MODAL */}
      {showExportModal && selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs font-sans animate-fade-in">
          <div
            className="w-full max-w-2xl rounded-3xl border p-6 sm:p-8 bg-white shadow-2xl space-y-6"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
              color: "var(--theme-text-color)",
            }}
          >
            <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                    Official SEN Board IEP Compliance Docket
                  </h3>
                  <p className="text-xs text-slate-500">Document Reference: SEN-2026-PENPAL-{selectedStudent.id}</p>
                </div>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex justify-between items-center">
                <div>
                  <span className="font-black text-sm text-emerald-950 block">{selectedStudent.name}</span>
                  <span className="text-[11px] text-emerald-700">Year 5 • SEN Accommodation Plan</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-900 font-black text-xs">
                  Status: {selectedStudent.status}
                </span>
              </div>

              <div>
                <strong className="block text-slate-900 mb-1">Target Curriculum Goal:</strong>
                <p className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  "{selectedStudent.iepGoal}"
                </p>
              </div>

              <div>
                <strong className="block text-slate-900 mb-1">Active Assistive Accommodations:</strong>
                <p className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  {selectedStudent.preferredFont.toUpperCase()} Dyslexia typeface, Anti-glare {selectedStudent.preferredTheme} tint, Reading Ruler enabled ({selectedStudent.rulerUsage}), Asynchronous Web Speech dictation.
                </p>
              </div>

              <div className="border-t pt-4 grid grid-cols-2 gap-4 text-[11px] text-slate-500">
                <div>
                  <span className="block font-bold">Inclusion Lead:</span>
                  <span>Mr. Henderson (SEN Specialist)</span>
                </div>
                <div>
                  <span className="block font-bold">Review Date:</span>
                  <span>September 11, 2026</span>
                </div>
              </div>
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
                <span>Print Official Docket</span>
              </button>
              <button
                onClick={() => {
                  alert(`Official IEP Docket for "${selectedStudent.name}" exported to SEN board PDF.`);
                  setShowExportModal(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs flex items-center gap-1.5 shadow-sm"
              >
                <FileDown className="h-4 w-4" />
                <span>Export SEN PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
