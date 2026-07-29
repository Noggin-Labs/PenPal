"use client";

import React, { useState } from "react";
import { useAccessibility, DyslexiaFont, ThemeColor } from "@/context/AccessibilityContext";
import { Sliders, RotateCcw, Eye, HelpCircle, Sparkles } from "lucide-react";

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
    speechSpeed,
    distractionFree,
    setSettings,
    resetToDefaults,
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
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main floating action trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105 active:scale-95 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        aria-label="Open Accessibility Adaptations Menu"
        title="Open Adaptations Panel"
      >
        <Sliders className="h-6 w-6" />
      </button>

      {isOpen && (
        <div
          className="absolute bottom-16 right-0 w-80 md:w-96 max-h-[80vh] overflow-y-auto rounded-2xl border bg-white p-6 shadow-2xl text-slate-800 focus:outline-none transition-all duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Adaptations Panel"
          style={{
            borderColor: "var(--theme-border-color)",
          }}
        >
          <div className="flex items-center justify-between border-b pb-3 mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-blue-600">
              <Sparkles className="h-5 w-5" />
              Adaptation Center
            </h2>
            <button
              onClick={resetToDefaults}
              className="flex items-center gap-1 text-xs text-rose-500 hover:underline hover:text-rose-600 transition"
              title="Reset configuration to defaults"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          </div>

          {/* Dyslexia Typography */}
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-sm tracking-wide text-slate-500 uppercase">
              1. Typography Settings
            </h3>

            <div>
              <label className="block text-sm font-medium mb-1">Dyslexia Font style</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "open-dyslexic", label: "OpenDyslexic" },
                  { value: "sans-serif", label: "Clean Arial" },
                  { value: "standard", label: "Standard" },
                ].map((f) => (
                  <button
                    key={f.value}
                    onClick={() => updateSetting("fontFamily", f.value as DyslexiaFont)}
                    className={`px-2 py-1.5 text-xs rounded border transition ${
                      fontFamily === f.value
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Multiplier */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Text Size Scale</span>
                <span className="text-blue-600 font-bold">{fontSizeMultiplier}x</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="1.5"
                step="0.05"
                value={fontSizeMultiplier}
                onChange={(e) => updateSetting("fontSizeMultiplier", parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Letter Spacing */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Letter Spacing</span>
                <span className="text-blue-600 font-bold">{letterSpacing}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={letterSpacing}
                onChange={(e) => updateSetting("letterSpacing", parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Word Spacing */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Word Spacing</span>
                <span className="text-blue-600 font-bold">{wordSpacing}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={wordSpacing}
                onChange={(e) => updateSetting("wordSpacing", parseInt(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Line Height */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Line Height spacing</span>
                <span className="text-blue-600 font-bold">{lineHeight}</span>
              </div>
              <input
                type="range"
                min="1.4"
                max="2.2"
                step="0.1"
                value={lineHeight}
                onChange={(e) => updateSetting("lineHeight", parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Color Presets */}
          <div className="space-y-4 mb-6 border-t pt-4">
            <h3 className="font-semibold text-sm tracking-wide text-slate-500 uppercase">
              2. Pastel Contrast Schemes (Anti-Glare)
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: "default-cream", label: "Warm Cream 🍦", bg: "#FCF9F2", border: "#E9E3D3" },
                { value: "pastel-blue", label: "Soft Blue 🌊", bg: "#EBF4F6", border: "#CBD5E1" },
                { value: "pastel-green", label: "Mint Green 🍃", bg: "#F1F7ED", border: "#D1E2D3" },
                { value: "high-contrast", label: "Dark Mode 🕶️", bg: "#0D0D0D", border: "#4B5563" },
              ].map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => updateSetting("themeColor", theme.value as ThemeColor)}
                  style={{ backgroundColor: theme.bg, borderColor: theme.border }}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border text-left flex flex-col justify-between h-14 transition ${
                    themeColor === theme.value
                      ? "ring-2 ring-blue-600 font-bold"
                      : "hover:scale-[1.02]"
                  }`}
                >
                  <span
                    className="truncate"
                    style={{ color: theme.value === "high-contrast" ? "#F3F4F6" : "#2D2A24" }}
                  >
                    {theme.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Extras: Reading Ruler & Audio Pitch */}
          <div className="space-y-4 mb-4 border-t pt-4">
            <h3 className="font-semibold text-sm tracking-wide text-slate-500 uppercase">
              3. Visual & Auditory Scaffoldings
            </h3>

            {/* Reading Ruler Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="rulerToggle" className="block text-sm font-medium">
                  Reading Highlight Ruler
                </label>
                <p className="text-xs text-slate-400">Underline/highlight current line with mouse cursor</p>
              </div>
              <input
                id="rulerToggle"
                type="checkbox"
                checked={readingRulerEnabled}
                onChange={(e) => updateSetting("readingRulerEnabled", e.target.checked)}
                className="h-5 w-5 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-blue-500"
              />
            </div>

            {readingRulerEnabled && (
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Ruler Height thickness</span>
                  <span className="text-blue-600 font-bold">{readingRulerHeight}px</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={readingRulerHeight}
                  onChange={(e) => updateSetting("readingRulerHeight", parseInt(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            )}

            {/* Audio Speed */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Text-to-Speech Speed</span>
                <span className="text-blue-600 font-bold">{speechSpeed}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="1.2"
                step="0.05"
                value={speechSpeed}
                onChange={(e) => updateSetting("speechSpeed", parseFloat(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Distraction Free Toggle */}
            <div className="flex items-center justify-between border-t pt-4">
              <div>
                <label htmlFor="distractToggle" className="block text-sm font-medium text-emerald-600 flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  Distraction-Free Mode
                </label>
                <p className="text-xs text-slate-400">Hides extra panels and headers</p>
              </div>
              <input
                id="distractToggle"
                type="checkbox"
                checked={distractionFree}
                onChange={(e) => updateSetting("distractionFree", e.target.checked)}
                className="h-5 w-5 rounded border-slate-300 text-emerald-600 accent-emerald-500 focus:ring-emerald-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
