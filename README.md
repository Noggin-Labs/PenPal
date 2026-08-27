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
- [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Core Portals & Features](#-key-core-portals--features)
- [🛡️ State Persistence & Synchronization](#️-state-persistence--synchronization)
- [🛠️ Technical Architecture & Directory Blueprint](#️-technical-architecture--directory-blueprint)
- [💻 Developer Implementation Deep Dive](#-developer-implementation-deep-dive)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable and phonetic breakdown widgets, an interactive reading ruler, and stress-free asynchronous peer communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning journey.

---

## 👥 Target Audiences & Brand Identity

Our branding and feature sets are carefully tailored to support four primary user categories:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parents/Guardians │      │ SEN Departments   │
   │  (Interactive)    │      │  (Insight & Care) │      │  (IEP Management) │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Students (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom character/word/line spacing, an interactive highlight ruler, and bimodal dictation utilities to eliminate spelling anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a dedicated parent analytics panel showing vocabulary growth, message volume, and customizable remote font/theme adjustments to co-configure their child's workspace.

### 3. Special Education Needs (SEN) School Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative progress, and instantly export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed codebase featuring structured React Contexts, custom Web Speech hooks, semantic HTML layouts, and fully keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography & Spacing
* **Dyslexia-Optimized Font-Face:** Dynamic typeface selector supporting **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation), clean sans-serif (Arial), and standard system fonts.
* **Granular Spacing Controls:** Granular custom CSS properties regulating letter-tracking (`--letter-spacing-current`), word-spacing (`--word-spacing-current`), and line-height (`--line-height-current`), designed specifically to eliminate visual crowding.

### 🎨 Visual Comfort & Contrast Themes
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from default cream (`#FCF9F2`), soft pastel blue (`#EBF4F6`), pastel leaf green (`#F1F7ED`), or deep high-contrast dark theme (`#0D0D0D`) to eliminate glare and reduce visual strain.
* **Interactive Reading Ruler:** A customizable overlay focus strip (`ReadingRuler.tsx`) with adjustable height that tracks vertical cursor movement, dimming the rest of the viewport to guide the reader's eye smoothly across text.
* **Distraction-Free Mode:** Instantly hides side navigation, decorative stats, and background elements, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously displays written text and plays natural-tempo Spanish voice audio using browser Web Speech synthesis, mapping graphemes directly to phonemes.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts, encouraging self-paced comprehension.

---

## 🚀 Key Core Portals & Features

### 1. Interactive Learner Dashboard (`/dashboard`)
* **Peer-to-Peer PenPal Matching:** Vetted matching with international partners (such as *Mateo from Madrid*). Includes structured conversation frames and translation assists.
* **Word Breakdown & Syllable Tooltip:** Clicking any word in the chat reveals color-coded syllable breakdowns, phonetic transcriptions, and localized translations (e.g., **fút · bol**).
* **Asynchronous Writing Scaffolds:** Expandable writing helpers featuring Spanish sentence frames (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestion chips.
* **Cooperative Quizzes:** Stress-free, collaborative matching activities solved with partner dialogue hints instead of competitive timers.

### 2. Parent Progress & Insights Board (`/parent`)
* **Confidence Metrics Tracker:** Visual summary of the child's reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Override Controls:** Parents can remotely customize default contrast themes, text-scaling, letter/word/line spacing, and vocal playback speeds to align with their child's daily stamina.
* **Portfolio Exporter:** One-click generation of progress reports to share with clinical teams or educators.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time visibility of student progression against set targets.
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage) to formal IEP objectives.
* **Accommodation Override Controls:** Remotely adjust student font profiles, zoom scales, or default visual contrast layouts.

---

## 🛡️ State Persistence & Synchronization

To prioritize privacy and keep our application entirely self-contained without requiring external backend servers, **PenPal utilizes browser local storage (`localStorage`)** to mock database persistence and maintain cross-portal state dynamically.

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │ Learner Messages │          │ Parent & Educator│          │  Classroom IEP   │
  │ & Quiz Progress  │          │ Accommodations   │          │  Progress Logs   │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

### Key Storage Keys & Purpose
| LocalStorage Key | Description & Usage |
| :--- | :--- |
| `penpal_a11y_settings` | Stores global accessibility settings (font family, font size multiplier, line/letter/word spacing, theme color, reading ruler preferences, speech speed, distraction-free mode). |
| `penpal_messages_sent_count` | Tracks total number of penpal messages sent by the learner across sessions. |
| `penpal_quiz_points` | Stores cumulative quiz and activity points earned by the learner. |
| `penpal_learned_vocab` | Saves array of vocabulary words added to the student's personal word list. |
| `penpal_messages` | Preserves chat message history between the student and their penpal match. |
| `penpal_auth_user` | Persists mock user authentication state and active role (`learner`, `parent`, or `educator`). |

* **Cross-Role Synchronicity:** When a parent or educator remotely updates accommodation settings in their respective portal, the changes write directly to `penpal_a11y_settings` and `AccessibilityContext`, immediately updating the UI across all portals.

---

## 🛠️ Technical Architecture & Directory Blueprint

PenPal is built using **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
/
├── public/                 # Static assets and fonts
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── layout.tsx      # Base layout wrapping app with AccessibilityProvider and AuthProvider
│   │   ├── page.tsx        # Docking station homepage & role selection simulator
│   │   ├── dashboard/      # Interactive Dyslexic Learner workspace (/dashboard)
│   │   ├── educator/       # SEN Educator & Classroom dashboard (/educator)
│   │   └── parent/         # Parent progress portal & remote setup (/parent)
│   ├── components/         # Reusable UI component modules
│   │   ├── a11y/           # Accessibility overlay widgets
│   │   │   ├── A11yWidget.tsx    # Floating accessibility control panel
│   │   │   └── ReadingRuler.tsx  # Cursor-tracking reading ruler overlay
│   │   └── NavigationHeader.tsx # Top bar navigation and role switcher
│   ├── context/            # React global context providers
│   │   ├── AccessibilityContext.tsx # Centralized store for visual and auditory settings
│   │   └── AuthContext.tsx          # Mock user authorization context
│   ├── hooks/              # Custom React hooks
│   │   ├── useSpeech.ts    # Bimodal Web Speech API wrapper (TTS & STT)
│   │   └── useMatch.ts     # P2P messaging & simulated penpal conversation engine
│   └── styles/             # Global styling rules
│       └── globals.css     # CSS custom properties and OpenDyslexic font imports
├── LICENSE                 # MIT License details
├── package.json            # Dependencies and npm scripts
└── README.md               # Developer documentation & setup guide
```

---

## 💻 Developer Implementation Deep Dive

### 1. Centralized Accessibility Context (`src/context/AccessibilityContext.tsx`)
`AccessibilityContext` manages font selection, custom spacing, contrast themes, and reading ruler configuration across the entire viewport, applying custom properties directly to the DOM root element (`document.documentElement`).

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

  // Load settings from localStorage on initial render
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

  // Sync settings to localStorage and root CSS variables
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
      <div className="a11y-container" style={{ fontFamily: "var(--font-family-current)" }}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};
```

### 2. Low-Latency Web Speech Wrapper Hook (`src/hooks/useSpeech.ts`)
`useSpeech` provides auditory assistance using browser speech synthesis (Text-to-Speech) and speech recognition (Speech-to-Text).

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
      utterance.rate = speechSpeed; // Adapted speech speed from AccessibilityContext

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
        // Fallback simulation if speech recognition is unsupported in browser
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
        const resultText = event.results[0][0].transcript;
        onResult(resultText);
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

## ⚙️ Local Installation & Environment Setup

Follow these steps to run PenPal locally on your machine.

### Prerequisites
* **Node.js** (v18.x or later recommended)
* **npm** (v9.x or later)

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
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility advocates, researchers, designers, and educators!

1. **Fork the Repository** and create a descriptive feature branch (`git checkout -b feature/reading-ruler-improvements`).
2. **Commit with Clear Intent:** Write informative commit messages explaining your changes.
3. **Prioritize Accessibility:** Ensure all new or modified features comply with WCAG 2.1 AA standards, include explicit ARIA attributes, and remain 100% keyboard navigable.
4. **Submit a Pull Request:** Provide a clear description of your changes along with screenshots or recordings demonstrating visual accessibility enhancements.

---

## 📄 License

This project is open-source software licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
