"use client";

import React, { useState } from "react";
import {
  useAccessibility,
  DyslexiaFont,
  ThemeColor,
  RulerMode,
} from "@/context/AccessibilityContext";
import {
  Sliders,
  RotateCcw,
  Sparkles,
  Eye,
  Type,
  Maximize,
  Volume2,
  X,
  Check,
  Compass,
} from "lucide-react";

export const A11yWidget: React.FC = () => {
  const {
    fontFamily,
    lineHeight,
    letterSpacing,
    wordSpacing,
    fontSizeMultiplier,
    themeColor,
    readingRulerEnabled,
    readingRulerHeight,
    rulerMode,
    speechSpeed,
    audioFeedback,
    distractionFree,
    setSettings,
    resetToDefaults,
    playTactileChime,
  } = useAccessibility();

  const [isOpen, setIsOpen] = useState(false);

  const updateSetting = <K extends keyof ReturnType<typeof useAccessibility>>(
    key: K,
    value: any
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
    playTactileChime("pop");
  };

  const THEMES: { id: ThemeColor; label: string; previewBg: string; previewBorder: string; desc: string }[] = [
    { id: "default-cream", label: "Parchment Cream", previewBg: "#FAF6EE", previewBorder: "#E5DCC5", desc: "Anti-glare warm ivory" },
    { id: "pastel-blue", label: "Serene Sky", previewBg: "#F0F5FA", previewBorder: "#CCDCEB", desc: "Calming visual fatigue relief" },
    { id: "pastel-green", label: "Meadow Sage", previewBg: "#F2F7F2", previewBorder: "#CCE0CE", desc: "Soft scotopic ease" },
    { id: "rose-twilight", label: "Rose Mist", previewBg: "#FCF4F6", previewBorder: "#EDD3DC", desc: "Gentle warm dusk" },
    { id: "solar-amber", label: "Solar Sepia", previewBg: "#FBF5E9", previewBorder: "#E9DAC0", desc: "Warm contrast comfort" },
    { id: "high-contrast", label: "Midnight Slate", previewBg: "#121417", previewBorder: "#3B4252", desc: "No harsh pure blacks" },
  ];

  const FONTS: { id: DyslexiaFont; label: string; tag: string }[] = [
    { id: "lexend", label: "Lexend", tag: "Cognitively paced" },
    { id: "open-dyslexic", label: "OpenDyslexic", tag: "Weighted baseline" },
    { id: "atkinson", label: "Atkinson", tag: "Hyperlegible shapes" },
    { id: "sans-serif", label: "Clean Sans", tag: "Modern clarity" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Action Trigger with Tactile Pulse */}
      {!isOpen && (
        <button
          onClick={() => {
            setIsOpen(true);
            playTactileChime("chime");
          }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 hover:bg-blue-700 focus:outline-none"
          aria-label="Open Sensory & Accessibility Adaptations Panel"
          title="Open Sensory & Accessibility Adaptations"
        >
          <Sliders className="h-6 w-6 transition-transform group-hover:rotate-45" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white"></span>
          </span>
        </button>
      )}

      {/* Slide-out / Popover Accessibility Studio */}
      {isOpen && (
        <div
          className="w-[92vw] sm:w-[420px] max-h-[88vh] overflow-y-auto rounded-3xl border bg-white p-5 shadow-2xl text-slate-800 transition-all animate-in fade-in zoom-in-95 duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Sensory Adaptations Studio"
          style={{
            borderColor: "var(--theme-border-color)",
            backgroundColor: "var(--theme-card-bg)",
            color: "var(--theme-text-color)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-3 mb-4" style={{ borderColor: "var(--theme-border-color)" }}>
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-black leading-tight text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                  Sensory Atelier
                </h2>
                <p className="text-xs text-slate-500 font-medium">Personalize visual & auditory accommodations</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  resetToDefaults();
                  playTactileChime("pop");
                }}
                className="p-1.5 text-xs text-rose-500 hover:bg-rose-50 rounded-lg transition"
                title="Reset to defaults"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  playTactileChime("pop");
                }}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition"
                title="Close panel"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="space-y-5 text-sm">
            {/* 1. Dyslexia Typography */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Type className="h-3.5 w-3.5 text-blue-600" />
                  Dyslexia-Optimized Typography
                </label>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {FONTS.map((font) => (
                  <button
                    key={font.id}
                    onClick={() => updateSetting("fontFamily", font.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      fontFamily === font.id
                        ? "border-blue-600 bg-blue-50/80 text-blue-900 font-bold ring-1 ring-blue-600"
                        : "border-slate-200/80 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{font.label}</span>
                      {fontFamily === font.id && <Check className="h-3.5 w-3.5 text-blue-600" />}
                    </div>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{font.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Scotopic Anti-Glare Theme Overlays */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 mb-2">
                <Eye className="h-3.5 w-3.5 text-amber-600" />
                Anti-Glare Tint Spectrum
              </label>
              <div className="grid grid-cols-3 gap-2">
                {THEMES.map((th) => (
                  <button
                    key={th.id}
                    onClick={() => updateSetting("themeColor", th.id)}
                    className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                      themeColor === th.id
                        ? "ring-2 ring-blue-600 border-transparent shadow-sm"
                        : "hover:scale-[1.02]"
                    }`}
                    style={{ backgroundColor: th.previewBg, borderColor: th.previewBorder }}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: th.previewBorder }}
                    />
                    <span className="text-[11px] font-bold text-slate-800 truncate w-full">
                      {th.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Reading Ruler Mode & Strip */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3" style={{ backgroundColor: "var(--theme-card-subtle)", borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-amber-600" />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Bimodal Reading Ruler</span>
                    <span className="text-[10px] text-slate-500">Guides ocular track across words</span>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={readingRulerEnabled}
                  onChange={(e) => updateSetting("readingRulerEnabled", e.target.checked)}
                  className="h-5 w-5 rounded border-slate-300 text-blue-600 accent-blue-600 cursor-pointer"
                />
              </div>

              {readingRulerEnabled && (
                <div className="space-y-3 pt-2 border-t border-slate-200/60">
                  <div className="grid grid-cols-3 gap-1.5 text-xs">
                    {[
                      { id: "strip", label: "Highlight" },
                      { id: "mask", label: "Curtain" },
                      { id: "underline", label: "Underline" },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() => updateSetting("rulerMode", mode.id as RulerMode)}
                        className={`py-1.5 px-2 rounded-lg font-bold text-center transition ${
                          rulerMode === mode.id
                            ? "bg-amber-500 text-white shadow-sm"
                            : "bg-white border border-slate-200 text-slate-700"
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>Ruler Strip Height</span>
                      <span className="font-bold text-blue-600">{readingRulerHeight}px</span>
                    </div>
                    <input
                      type="range"
                      min="24"
                      max="72"
                      step="4"
                      value={readingRulerHeight}
                      onChange={(e) => updateSetting("readingRulerHeight", parseInt(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 4. Fine-Tuned Spatial Spacing Sliders */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Spatial Spacing & Comfort
              </span>

              {/* Text Size Scale */}
              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1 font-medium">
                  <span>Text Size Scale</span>
                  <span className="font-bold text-blue-600">{fontSizeMultiplier}x</span>
                </div>
                <input
                  type="range"
                  min="0.9"
                  max="1.4"
                  step="0.05"
                  value={fontSizeMultiplier}
                  onChange={(e) => updateSetting("fontSizeMultiplier", parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Letter Spacing */}
              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1 font-medium">
                  <span>Letter Spacing (Prevents Crowding)</span>
                  <span className="font-bold text-blue-600">+{letterSpacing}px</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="4.0"
                  step="0.5"
                  value={letterSpacing}
                  onChange={(e) => updateSetting("letterSpacing", parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Word Spacing */}
              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1 font-medium">
                  <span>Word Spacing (Prevents Merging)</span>
                  <span className="font-bold text-blue-600">+{wordSpacing}px</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="6.0"
                  step="0.5"
                  value={wordSpacing}
                  onChange={(e) => updateSetting("wordSpacing", parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Speech Playback Rate */}
              <div>
                <div className="flex justify-between text-xs text-slate-700 mb-1 font-medium">
                  <span>Speech Pronunciation Speed</span>
                  <span className="font-bold text-blue-600">{speechSpeed}x</span>
                </div>
                <input
                  type="range"
                  min="0.6"
                  max="1.2"
                  step="0.05"
                  value={speechSpeed}
                  onChange={(e) => updateSetting("speechSpeed", parseFloat(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>
            </div>

            {/* 5. Toggles: Tactile Chimes & Distraction-Free */}
            <div className="pt-2 border-t space-y-2" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Volume2 className="h-3.5 w-3.5 text-blue-600" />
                  Tactile Audio Cues
                </span>
                <input
                  type="checkbox"
                  checked={audioFeedback}
                  onChange={(e) => updateSetting("audioFeedback", e.target.checked)}
                  className="h-4 w-4 rounded text-blue-600 accent-blue-600 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <Maximize className="h-3.5 w-3.5 text-indigo-600" />
                  Distraction-Free Zen Desk
                </span>
                <input
                  type="checkbox"
                  checked={distractionFree}
                  onChange={(e) => updateSetting("distractionFree", e.target.checked)}
                  className="h-4 w-4 rounded text-indigo-600 accent-indigo-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
