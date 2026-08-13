# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

### **Empowering Every Learner to Connect, Write, and Grow.**

**PenPal** is an adaptive, social-first language learning platform designed from the ground up for learners with dyslexia, visual processing differences, and neurodivergent profiles. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and highly collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Three Key Portals (Roles)](#-three-key-portals-roles)
- [🧩 Dyslexia-Friendly Design System & Accommodations](#-dyslexia-friendly-design-system--accommodations)
- [🚀 Key Core Features](#-key-core-features)
- [🛡️ State Persistence & Synchronization](#️-state-persistence--synchronization)
- [🛠️ Directory Structure](#️-directory-structure)
- [💻 Technical Implementation Code Examples](#-technical-implementation-code-examples)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Three Key Portals (Roles)

PenPal is organized into three client portals matching user roles, each featuring a tailored interface design and targeted feature-sets:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Learner Portal    │      │ Parent Portal     │      │ Educator Portal   │
   │   (/dashboard)    │      │    (/parent)      │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Core Experience:** Accessible workspace configured with specialized typefaces (like **OpenDyslexic**), custom spacing, an interactive reading ruler, and bimodal dictation utilities to eliminate spelling anxiety. Includes chat with Spanish penpals, interactive translation, and cooperative, stress-free quizzes.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and informative.
* **Core Experience:** Real-time visibility into their child's language gains. Features a dedicated parent analytics panel showing vocabulary growth, message volume, and customizable remote font/theme adjustments to co-configure their child's workspace.

### 3. SEN Departments & Special Education Teachers (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Core Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative progress, and instantly export school-compliant progress portfolios.

---

## 🧩 Dyslexia-Friendly Design System & Accommodations

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography
* **Dyslexia-Optimized Font-Face:** Dynamic typeface selector including **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation), clean sans-serif (Arial/Helvetica), and standard system layouts.
* **Interactive Spacing Controls:** Granular custom properties regulating letter-tracking, word-spacing, and line-height, designed specifically to reduce visual crowding effects.
* **Text Scale:** Dynamic font-size scaling up to `1.5x` base size.

### 🎨 Visual Comfort & Contrast Control (Anti-Glare)
* **Irlen-Friendly Warm Pastel Backgrounds:** Mapped onto root custom CSS variables to eliminate harsh screen glare:
  * 🍦 **Warm Cream** (`#FCF9F2` bg / `#2D2A24` text): Soft anti-glare cream.
  * 🌊 **Soft Blue** (`#EBF4F6` bg / `#1E293B` text): Calm sea-foam blue.
  * 🍃 **Mint Green** (`#F1F7ED` bg / `#1C2D1F` text): Gentle pastel leaf green.
  * 🕶️ **Dark Mode** (`#0D0D0D` bg / `#F3F4F6` text): Vibrant high-contrast dark scheme.
* **Interactive Reading Ruler:** A customizable overlay focus strip that tracks vertical cursor movement, highlighting a horizontal band and dimming/guiding the viewport to guide the reader's eyes smoothly across text lines. Fully adjustable height thickness (`20px` to `80px`).
* **Distraction-Free Mode:** Instantly hides side navigation, decorative stats, and background elements, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously displays written Spanish text and plays natural-tempo Spanish voice audio, mapping graphemes directly to phonemes.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts, encouraging self-paced comprehension.

---

## 🚀 Key Core Features

### 1. Peer-to-Peer PenPal Matching (`/dashboard`)
* Vetted matching with international partners (such as *Mateo from Madrid*). Includes structured conversation frames, sentence starters, and translation assists.
* **Word Breakdown Tooltip Desk:** Clicking any word in the chat reveals an interactive color-coded syllable breakdown, phonetic transcriptions, and localized translation.
* **Syllable Color Scaffolding:** Visually separates syllables in alternating colors (e.g., **fút · bol** in rose/emerald blocks) to make pronunciation patterns intuitive.

### 2. Cooperative, Timer-Free Quizzes
* Collaborative matching and vocabulary activities solved with dialogue hints from your penpal. Designed without time constraints to eliminate testing anxiety.

### 3. Parent Remote Setup & Progress
* Parents can remotely adjust default contrast themes, text-scaling, and vocal playback speeds to align with their child's daily stamina, directly syncing to the learner portal.
* Export classroom-ready reports for pediatricians or clinical specialists.

### 4. Classroom IEP Progress Logs
* Dedicated educator portal displaying student milestones (e.g. reading ruler usage, messages sent) mapped to custom IEP targets.

---

## 🛡️ State Persistence & Synchronization

To prioritize security and keep our application entirely self-contained, **PenPal utilizes local storage (`localStorage`)** to mock database persistence and maintain cross-role settings dynamically.

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │  Learner Chat    │          │ Parent Remote    │          │  Classroom IEP   │
  │  & Quiz Points   │          │ Accommodation    │          │  Progress Logs   │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

The application synchronizes state dynamically using the following standardized keys:
* `penpal_a11y_settings`: Holds the serialized global visual accessibility configuration, including fonts, sizing scales, spacings, and theme parameters.
* `penpal_messages`: Holds persistent peer-to-peer message queue history for mock chats.
* `penpal_messages_sent_count`: Holds the persistent count of learner's sent messages.
* `penpal_quiz_points`: Score/progress points earned by the learner in cooperative activities.
* `penpal_learned_vocab`: List of words or vocabulary acquired during interactive sessions.

Whenever a parent or educator remotely updates Alex's typography settings or visual contrast values, the changes are written to `penpal_a11y_settings` in `localStorage` and synchronized instantly to the learner's dashboard interface.

---

## 🛠️ Directory Structure

PenPal is engineered to be modern, modular, and extensible. We leverage **Next.js App Router**, **React**, **TypeScript**, and **Tailwind CSS**.

```
/
├── public/                 # Static assets (accessibility fonts, system vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Base HTML configuration with Accessibility Provider wraps
│   │   ├── page.tsx        # Homepage introducing Simulation Role Selector
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace
│   │   ├── educator/       # SEN & Classroom Educator Dashboard
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Shared Reusable UI Primitives
│   │   ├── a11y/           # Reading Ruler and Color Overlay Widgets
│   │   │   ├── A11yWidget.tsx    # Accessible float menu adjusting size, font, spacing, speed, and themes
│   │   │   └── ReadingRuler.tsx  # Cursor-tracking highlight ruler overlay
│   │   └── NavigationHeader.tsx  # Universal role selection bar
│   ├── context/            # React Global State and Accessibility Contexts
│   │   ├── AccessibilityContext.tsx # Central store managing contrast, fonts, zoom, and spacing
│   │   └── AuthContext.tsx          # Mock user role authorization
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Audio wrapper using browser Web Speech API (with simulated STT fallback)
│   │   └── useMatch.ts     # P2P message state machine & mock chat generator
│   └── styles/             # Global CSS Variables
│       └── globals.css     # CSS Custom properties for typography & padding
├── LICENSE                 # MIT License Document
├── package.json            # Node dependencies & project scripts
└── README.md               # Developer documentation & onboarding guide
```

---

## 💻 Technical Implementation Code Examples

Here is the exact implementation of PenPal's core accessibility systems:

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
This context provider orchestrates visual variables across the entire application viewport, dynamically mapping user overrides onto root custom CSS variables.

```typescript
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
```

### 2. Multi-sensory Web Speech Wrapper (`useSpeech.ts`)
This wrapper controls browser-level speech recognition and synthesis, setting custom voices and playback rate constraints while implementing simulation fallbacks when browser APIs are absent.

```typescript
"use client";

import { useState, useCallback, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [recognitionSupported, setRecognitionSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSpeechSupported(!!window.speechSynthesis);
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      setRecognitionSupported(!!SpeechRecognition);
    }
  }, []);

  const speak = useCallback(
    (text: string, lang = "es-ES") => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      window.speechSynthesis.cancel(); // Terminate pending utterances

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Slower or custom speed

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  const startListening = useCallback(
    (onResult: (text: string) => void, lang = "es-ES") => {
      if (typeof window === "undefined") return;

      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        // Fallback simulated listening if API not supported
        setIsListening(true);
        setTimeout(() => {
          setIsListening(false);
          // Simulate some useful response based on predefined sentence structures
          onResult("¡Hola PenPal! ¿Cómo estás hoy?");
        }, 3000);
        return;
      }

      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = lang;

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          const resultText = event.results[0][0].transcript;
          onResult(resultText);
        };

        recognition.onerror = (e: any) => {
          console.error("Speech recognition error:", e);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.start();
      } catch (err) {
        console.error("Error starting speech recognition:", err);
        setIsListening(false);
      }
    },
    []
  );

  return {
    speak,
    stop,
    isPlaying,
    isListening,
    startListening,
    speechSupported,
    recognitionSupported,
  };
};
```

---

## ⚙️ Local Installation & Environment Setup

Follow these straightforward steps to boot up PenPal locally on your machine.

### Prerequisites
* **Node.js** (v18.x or later recommended)
* **npm** or **yarn** package manager

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to interact with the application.

### 4. Build and Compile for Production
```bash
npm run build
```

### 5. Start Production Server
```bash
npm run start
```

### 6. Run Code Linter
```bash
npm run lint
```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility researchers, designers, and educators!

1. **Fork the Repo** and create a descriptively named feature branch (e.g., `feature/reading-ruler-improvements`).
2. **Commit with Intention:** Write clear, informative commit messages explaining your modifications.
3. **Keep Code Accessible:** All modified or newly added modules must align with WCAG 2.1 AA design patterns, incorporate descriptive semantic `aria-*` markers, and support 100% keyboard-navigable operations.
4. **Submit a Pull Request:** Outline your changes clearly, linking any related issues and, where possible, attaching screenshots or screen recordings showing visual accessibility features in action.

---

## 📄 License

This software is open-source, licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
