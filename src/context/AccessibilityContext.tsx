"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type DyslexiaFont = "lexend" | "open-dyslexic" | "atkinson" | "sans-serif";
export type ThemeColor =
  | "default-cream"
  | "pastel-blue"
  | "pastel-green"
  | "rose-twilight"
  | "solar-amber"
  | "high-contrast";

export type RulerMode = "strip" | "mask" | "underline";

export interface AccessibilitySettings {
  fontFamily: DyslexiaFont;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  fontSizeMultiplier: number;
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number;
  rulerMode: RulerMode;
  speechSpeed: number;
  audioFeedback: boolean;
  distractionFree: boolean;
}

interface AccessibilityContextProps extends AccessibilitySettings {
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  resetToDefaults: () => void;
  playTactileChime: (type?: "pop" | "chime" | "success") => void;
}

const defaultSettings: AccessibilitySettings = {
  fontFamily: "lexend",
  lineHeight: 1.8,
  letterSpacing: 1.5,
  wordSpacing: 3.5,
  fontSizeMultiplier: 1.05,
  themeColor: "default-cream",
  readingRulerEnabled: false,
  readingRulerHeight: 48,
  rulerMode: "strip",
  speechSpeed: 0.85,
  audioFeedback: true,
  distractionFree: false,
};

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("penpal_a11y_settings_v2");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings((prev) => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error("Failed to parse accessibility settings:", e);
      }
    }
  }, []);

  // Save to localStorage on change and apply CSS variables
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("penpal_a11y_settings_v2", JSON.stringify(settings));
    }

    const root = document.documentElement;

    // Apply font variables
    let fontValue = "'Lexend', system-ui, sans-serif";
    if (settings.fontFamily === "open-dyslexic") {
      fontValue = "OpenDyslexic, 'Comic Sans MS', sans-serif";
    } else if (settings.fontFamily === "atkinson") {
      fontValue = "'Atkinson Hyperlegible', sans-serif";
    } else if (settings.fontFamily === "sans-serif") {
      fontValue = "'Plus Jakarta Sans', Arial, sans-serif";
    }
    root.style.setProperty("--font-family-current", fontValue);

    // Apply spacing and typography sizes
    root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
    root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
    root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
    root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);

    // Apply theme colors
    const colors = getThemeColors(settings.themeColor);
    root.style.setProperty("--theme-bg-color", colors.bg);
    root.style.setProperty("--theme-text-color", colors.text);
    root.style.setProperty("--theme-card-bg", colors.cardBg);
    root.style.setProperty("--theme-card-subtle", colors.cardSubtle);
    root.style.setProperty("--theme-border-color", colors.border);
    root.style.setProperty("--theme-accent-color", colors.accent);
    root.style.setProperty("--theme-accent-hover", colors.accentHover);
  }, [settings, mounted]);

  const resetToDefaults = () => {
    setSettings(defaultSettings);
  };

  // Subtle web audio synthesizer for pleasant non-jarring feedback
  const playTactileChime = (type: "pop" | "chime" | "success" = "pop") => {
    if (!settings.audioFeedback) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "pop") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === "chime") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.18); // A5
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      } else if (type === "success") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16); // G5
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
        osc.start();
        osc.stop(ctx.currentTime + 0.28);
      }
    } catch {
      // Audio context may be restricted before user gesture
    }
  };

  const getThemeColors = (theme: ThemeColor) => {
    switch (theme) {
      case "default-cream":
        return {
          bg: "#FAF6EE", // Warm soothing anti-glare parchment
          text: "#24201A",
          cardBg: "#FFFFFF",
          cardSubtle: "#F5EFE3",
          border: "#E5DCC5",
          accent: "#3B67E8",
          accentHover: "#2750CA",
        };
      case "pastel-blue":
        return {
          bg: "#F0F5FA", // Serene sky anti-glare
          text: "#152438",
          cardBg: "#FFFFFF",
          cardSubtle: "#E5EEF7",
          border: "#CCDCEB",
          accent: "#0284C7",
          accentHover: "#0369A1",
        };
      case "pastel-green":
        return {
          bg: "#F2F7F2", // Soothing meadow sage
          text: "#152E1C",
          cardBg: "#FFFFFF",
          cardSubtle: "#E5EFE6",
          border: "#CCE0CE",
          accent: "#15803D",
          accentHover: "#166534",
        };
      case "rose-twilight":
        return {
          bg: "#FCF4F6", // Calming rose twilight
          text: "#331622",
          cardBg: "#FFFFFF",
          cardSubtle: "#F7E8ED",
          border: "#EDD3DC",
          accent: "#C026D3",
          accentHover: "#A21CAF",
        };
      case "solar-amber":
        return {
          bg: "#FBF5E9", // Warm solar sepia
          text: "#2E210E",
          cardBg: "#FFFFFF",
          cardSubtle: "#F5EAD4",
          border: "#E9DAC0",
          accent: "#D97706",
          accentHover: "#B45309",
        };
      case "high-contrast":
        return {
          bg: "#121417", // Midnight charcoal (no harsh pitch black)
          text: "#F8FAFC",
          cardBg: "#1C1F26",
          cardSubtle: "#252A33",
          border: "#3B4252",
          accent: "#FACC15",
          accentHover: "#EAB308",
        };
      default:
        return {
          bg: "#FAF6EE",
          text: "#24201A",
          cardBg: "#FFFFFF",
          cardSubtle: "#F5EFE3",
          border: "#E5DCC5",
          accent: "#3B67E8",
          accentHover: "#2750CA",
        };
    }
  };

  return (
    <AccessibilityContext.Provider
      value={{
        ...settings,
        setSettings,
        resetToDefaults,
        playTactileChime,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-family-current)",
          lineHeight: "var(--line-height-current)",
          letterSpacing: "var(--letter-spacing-current)",
          wordSpacing: "var(--word-spacing-current)",
          backgroundColor: "var(--theme-bg-color)",
          color: "var(--theme-text-color)",
          minHeight: "100vh",
          transition: "background-color 0.25s ease, color 0.25s ease",
        }}
        className="a11y-container"
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
};
