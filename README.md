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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, customizable visual accommodations, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Portal Ecosystem](#-target-audiences--portal-ecosystem)
- [🧩 Dyslexia-Friendly Design System & Accessibility Controls](#-dyslexia-friendly-design-system--accessibility-controls)
- [🚀 Core Features by Portal](#-core-features-by-portal)
- [🛡️ State Persistence & LocalStorage Synchronization](#️-state-persistence--localstorage-synchronization)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Deep Dive Developer Implementation Examples](#-deep-dive-developer-implementation-examples)
- [⚙️ Local Installation & Development Setup](#️-local-installation--development-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text blocks, rapid gamified pressure timers, harsh visual contrast, and high-frequency cognitive overload. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these default interface choices induce visual distortion, line-jumping, fatigue, and intense performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous peer-to-peer communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning journey.

---

## 👥 Target Audiences & Portal Ecosystem

Our application features three dedicated role-based portals and caters to four primary user personas:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parents/Guardians │      │ SEN Departments   │
   │    (/dashboard)   │      │     (/parent)     │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Students (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Specialized typefaces (such as **OpenDyslexic**), custom character/word/line spacing, an interactive Reading Ruler focus overlay, bimodal dictation utilities, color-coded syllable breakdown, and timer-free cooperative quizzes.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Reassuring, supportive, and informative.
* **Experience:** Real-time visibility into their child's confidence metrics, vocabulary acquisition, message volume, and customizable remote visual accommodation presets that sync directly to the child's workspace.

### 3. Special Education Needs (SEN) School Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and compliance-focused.
* **Experience:** Classroom roster management mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accessibility settings, log qualitative observations, track student stamina, and export school-compliant portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Modular, well-typed, and developer-friendly.
* **Experience:** Clean TypeScript codebase with React Context global stores, Web Speech API hooks, semantic HTML elements, and full keyboard navigation support.

---

## 🧩 Dyslexia-Friendly Design System & Accessibility Controls

Rather than treating accessibility as an afterthought, PenPal embeds visual and cognitive scaffolding directly into CSS variables and component primitives.

### 🔠 Specialized Typography & Spacing
* **Dyslexia-Optimized Typefaces:** Toggle between **OpenDyslexic** (weighted baselines that anchor letters to prevent flipping and rotation), geometric Sans-Serif (Arial), and System Standard fonts.
* **Granular Spacing Controls:** Granular custom CSS variables regulating letter-tracking (`letterSpacing`), word-spacing (`wordSpacing`), line-height (`lineHeight`), and font size scaling (`fontSizeMultiplier`).

### 🎨 Visual Comfort & Anti-Glare Themes
* **Irlen-Friendly Pastel Backgrounds:** Select from soft cream (`#FCF9F2`), pastel blue (`#EBF4F6`), leaf green (`#F1F7ED`), or high-contrast dark mode (`#0D0D0D`) to eliminate screen glare and ease Scotopic Sensitivity.
* **Interactive Reading Ruler:** A position-aware overlay focus bar with adjustable height (`readingRulerHeight`) that dims background content, helping guide the reader's eye smoothly across sentences without losing place.
* **Distraction-Free Mode:** Instantly hides navigation sidebars, decorative header elements, and ambient background widgets to maximize focus on primary content.

### 🧠 Cognitive Scaffolding & Bimodal Learning
* **Bimodal Presentation (Audio + Visual):** Synchronized Web Speech TTS audio playback paired with visual highlight cues maps graphemes to phonemes at adjustable speech rates (`0.75x` to `1.0x`).
* **Syllable Color Scaffolding:** Words split into color-coded alternating blocks (e.g., **fút · bol** in rose and emerald chips) for intuitive visual decoding.
* **No-Stress Timers:** Replaces countdown clocks and rapid pressure mechanics with self-paced, asynchronous penpal conversation frames and collaborative matching activities.

---

## 🚀 Core Features by Portal

### 1. Interactive Learner Dashboard (`/dashboard`)
* **Peer-to-Peer PenPal Exchange:** Practice Spanish with simulated penpals (e.g., *Mateo from Madrid*). Includes sentence starter prompts, writing assistance, and contextual translation helpers.
* **Interactive Word Breakdown Tooltip Desk:** Clicking any vocabulary word reveals color-coded syllable breaks, phonetic transcriptions, definitions, and natural audio pronunciation.
* **Timer-Free Collaborative Quizzes:** Interactive vocabulary matching and sentence building games solved with conversational partner hints instead of competitive clocks.
* **Bimodal Voice Input & Output:** Built-in Web Speech API integration for dictating messages (STT) and listening to incoming penpal letters (TTS).

### 2. Parent Progress & Insights Board (`/parent`)
* **Confidence & Stamina Tracker:** Visual summaries of total messages sent, quiz points earned, and vocabulary items mastered.
* **Remote Accommodation Overrides:** Parents can adjust typography, theme background colors, and audio playback speeds remotely, which instantly sync to the learner's live view.
* **Portfolio Exporter:** One-click summary generation for sharing progress logs with clinicians or school IEP teams.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Comprehensive overview of student reading activity, practice stamina, and vocabulary mastery levels.
* **IEP Target Alignment:** Map app interactions (messages sent, reading ruler usage, vocabulary growth) directly to formal IEP objectives.
* **Remote Accommodations & Case Notes:** Adjust student contrast themes or text scaling settings remotely and record qualitative observation notes.

---

## 🛡️ State Persistence & LocalStorage Synchronization

To prioritize user privacy and keep the application entirely self-contained without requiring external database servers, **PenPal utilizes browser `localStorage`** for cross-portal reactivity and state synchronization.

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │  Learner Chat &  │          │ Parent Remote    │          │  Classroom IEP   │
  │ Activity Metrics │          │ Accommodation    │          │ Portfolio Logs   │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

### Managed LocalStorage Keys
| Key Name | Purpose |
| :--- | :--- |
| `penpal_a11y_settings` | Centralized visual accessibility settings (font family, line height, letter spacing, word spacing, theme color, reading ruler toggle/height, speech speed, distraction-free state). |
| `penpal_messages` | Peer-to-peer message history between the student and penpals. |
| `penpal_messages_sent_count` | Quantitative tally of messages sent by the student. |
| `penpal_quiz_points` | Cumulative score earned across collaborative quiz exercises. |
| `penpal_learned_vocab` | Saved list of mastered Spanish vocabulary words. |

When a parent or educator updates accommodation parameters in their portal, the settings are written to `penpal_a11y_settings`, updating the global `AccessibilityContext` and instantly reflecting across all active application routes.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is built using modern web standards: **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
/
├── public/                     # Static assets & font definitions
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── layout.tsx          # Root HTML layout with context providers
│   │   ├── page.tsx            # Landing homepage with role selector
│   │   ├── dashboard/          # Learner interactive workspace (/dashboard)
│   │   ├── educator/           # SEN Educator classroom desk (/educator)
│   │   └── parent/             # Parent analytics & controls portal (/parent)
│   ├── components/             # Reusable UI components
│   │   ├── a11y/               # Reading Ruler overlay & visual accessibility controls
│   │   └── NavigationHeader.tsx# Top navigation bar with role switcher
│   ├── context/                # Global React state stores
│   │   ├── AccessibilityContext.tsx # Manages typography, themes, spacing, and CSS variables
│   │   └── AuthContext.tsx     # Handles role switching (learner | parent | educator)
│   ├── hooks/                  # Custom React hooks
│   │   ├── useSpeech.ts        # Web Speech API wrapper for Text-to-Speech & Speech-to-Text
│   │   └── useMatch.ts         # PenPal messaging state & response simulator
│   └── styles/                 # Styling configurations
│       └── globals.css         # CSS root custom properties & utility rules
├── LICENSE                     # MIT License
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript compiler options
└── README.md                   # Project documentation
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
Manages global accessibility state, persists user preferences in `localStorage`, and dynamically applies CSS variables directly to `document.documentElement`.

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

  // Load saved settings from localStorage on mount
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

  // Sync to localStorage and root CSS variables when settings update
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("penpal_a11y_settings", JSON.stringify(settings));
    }

    const root = document.documentElement;

    let fontValue = "system-ui, -apple-system, sans-serif";
    if (settings.fontFamily === "open-dyslexic") {
      fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
    } else if (settings.fontFamily === "sans-serif") {
      fontValue = "Arial, Helvetica, sans-serif";
    }
    root.style.setProperty("--font-family-current", fontValue);

    root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
    root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
    root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
    root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);

    const colors = getThemeColors(settings.themeColor);
    root.style.setProperty("--theme-bg-color", colors.bg);
    root.style.setProperty("--theme-text-color", colors.text);
    root.style.setProperty("--theme-card-bg", colors.cardBg);
    root.style.setProperty("--theme-border-color", colors.border);
    root.style.setProperty("--theme-accent-color", colors.accent);
  }, [settings, mounted]);

  const resetToDefaults = () => setSettings(defaultSettings);

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
```

### 2. Auditory Web Speech Custom Hook (`useSpeech.ts`)
Abstracts browser Text-to-Speech (`speechSynthesis`) and Speech-to-Text (`SpeechRecognition`), connecting speech rate directly to global user accessibility settings with a simulated fallback.

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
      utterance.rate = speechSpeed; // Adapted speech rate

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
        setIsListening(true);
        setTimeout(() => {
          setIsListening(false);
          onResult("¡Hola PenPal! ¿Cómo estás hoy?");
        }, 3000);
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = lang;

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        onResult(event.results[0][0].transcript);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognition.start();
    },
    []
  );

  return { speak, stop, isPlaying, isListening, startListening, speechSupported, recognitionSupported };
};
```

---

## ⚙️ Local Installation & Development Setup

Follow these steps to set up and run PenPal locally on your machine.

### Prerequisites
* **Node.js**: `v18.x` or higher
* **npm** or **yarn** / **pnpm**

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser to explore PenPal across Learner, Parent, and Educator portals.

### 4. Build for Production
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We welcome contributions from software developers, accessibility advocates, educators, and designers!

1. **Fork the Repository:** Create a feature branch (`git checkout -b feature/reading-ruler-enhancements`).
2. **Follow WCAG 2.1 AA Guidelines:** Ensure all new components support semantic HTML, appropriate `aria-*` attributes, full keyboard navigation, and custom spacing/theme rules.
3. **Write Meaningful Commits:** Explain the purpose and accessibility impact of your changes.
4. **Submit a Pull Request:** Provide a clear description of your feature or bug fix along with visual screenshots or recordings when applicable.

---

## 📄 License

This project is open-source under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
