"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type DyslexiaFont = "open-dyslexic" | "sans-serif" | "standard";
export type ThemeColor = "default-cream" | "pastel-blue" | "pastel-green" | "high-contrast";

export interface AccessibilitySettings {
  fontFamily: DyslexiaFont;
  lineHeight: number;       // e.g. 1.8, 2.0
  letterSpacing: number;    // e.g. 1.5, 3.0 (in px)
  wordSpacing: number;      // e.g. 2.0, 4.0 (in px)
  fontSizeMultiplier: number; // e.g. 1.0, 1.15, 1.3
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number; // e.g. 30, 45, 60
  speechSpeed: number;      // e.g. 0.75, 0.85, 1.0
  distractionFree: boolean;
}

interface AccessibilityContextProps extends AccessibilitySettings {
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  resetToDefaults: () => void;
}

const defaultSettings: AccessibilitySettings = {
  fontFamily: "open-dyslexic",
  lineHeight: 1.8,
  letterSpacing: 2.0,
  wordSpacing: 4.0,
  fontSizeMultiplier: 1.15,
  themeColor: "default-cream",
  readingRulerEnabled: false,
  readingRulerHeight: 40,
  speechSpeed: 0.8,
  distractionFree: false,
};

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("penpal_a11y_settings");
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse visual setting configurations:", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("penpal_a11y_settings", JSON.stringify(settings));
    }

    const root = document.documentElement;

    // Apply font variables
    let fontValue = "system-ui, -apple-system, sans-serif";
    if (settings.fontFamily === "open-dyslexic") {
      fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
    } else if (settings.fontFamily === "sans-serif") {
      fontValue = "Arial, Helvetica, sans-serif";
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
    root.style.setProperty("--theme-border-color", colors.border);
    root.style.setProperty("--theme-accent-color", colors.accent);
  }, [settings, mounted]);

  const resetToDefaults = () => {
    setSettings(defaultSettings);
  };

  const getThemeColors = (theme: ThemeColor) => {
    switch (theme) {
      case "default-cream":
        return {
          bg: "#FCF9F2", // Warm anti-glare cream
          text: "#2D2A24", // Muted charcoal for softer contrast
          cardBg: "#FFFFFF",
          border: "#E9E3D3",
          accent: "#3B82F6",
        };
      case "pastel-blue":
        return {
          bg: "#EBF4F6", // Soft pastel blue
          text: "#1E293B",
          cardBg: "#FFFFFF",
          border: "#CBD5E1",
          accent: "#0284C7",
        };
      case "pastel-green":
        return {
          bg: "#F1F7ED", // Pastel leaf green
          text: "#1C2D1F",
          cardBg: "#FFFFFF",
          border: "#D1E2D3",
          accent: "#16A34A",
        };
      case "high-contrast":
        return {
          bg: "#0D0D0D", // Deep dark
          text: "#F3F4F6", // Vibrant light
          cardBg: "#1F2937",
          border: "#4B5563",
          accent: "#FBBF24",
        };
      default:
        return {
          bg: "#FCF9F2",
          text: "#2D2A24",
          cardBg: "#FFFFFF",
          border: "#E9E3D3",
          accent: "#3B82F6",
        };
    }
  };

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults }}>
      <div
        style={{
          fontFamily: "var(--font-family-current)",
          lineHeight: "var(--line-height-current)",
          letterSpacing: "var(--letter-spacing-current)",
          wordSpacing: "var(--word-spacing-current)",
          backgroundColor: "var(--theme-bg-color)",
          color: "var(--theme-text-color)",
          minHeight: "100vh",
          transition: "all 0.25s ease",
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
