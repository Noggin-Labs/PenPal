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

**PenPal** is an adaptive, social-first language learning platform engineered specifically for learners with dyslexia, visual processing differences, and scotopic sensitivity (Irlen Syndrome). By combining accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity across specialized portals, PenPal transforms foreign language acquisition into an inclusive, low-stress, and empowering experience.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Personas](#-target-audiences--personas)
- [🧩 Dyslexia-Friendly Design System & Accessibility Engine](#-dyslexia-friendly-design-system--accessibility-engine)
- [🚀 Multi-Portal Ecosystem & Core Features](#-multi-portal-ecosystem--core-features)
- [🛡️ Privacy & Mock Data Persistence](#️-privacy--mock-data-persistence)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Deep Dive Developer Implementation Examples](#-deep-dive-developer-implementation-examples)
- [⚙️ Local Installation & Development Commands](#️-local-installation--development-commands)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications heavily rely on dense text layouts, rapid gamified countdown timers, and harsh high-contrast white interfaces. For individuals with dyslexia, visual crowding, or visual processing fatigue, these design patterns introduce high cognitive overload, causing frustration and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdowns, an interactive Reading Ruler, and stress-free asynchronous P2P pen pal messaging, PenPal creates a safe, motivating environment for language learning.

---

## 👥 Target Audiences & Personas

PenPal delivers tailored user interfaces for three primary client portals accessible from a unified role-switching navigation header:

```
                          ┌───────────────────────────┐
                          │    PENPAL DOCKING HUB     │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parents/Guardians │      │ SEN Departments   │
   │   (/dashboard)    │      │     (/parent)     │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (**OpenDyslexic**), custom character/word/line spacing, interactive Reading Ruler, bimodal Speech-to-Text/Text-to-Speech dictation, syllable breakdown tools, and interactive pen pal messaging with structured scaffolding.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Reassuring, supportive, and informative.
* **Experience:** Real-time visibility into their child's language gains (vocabulary count, quiz points earned, messages sent). Features remote controls to adjust visual accessibility parameters (theme background, font spacing, reading ruler height, playback speed) to co-configure their child's workspace.

### 3. SEN (Special Education Needs) Educators & School Departments (`/educator`)
* **Tone:** Professional, structured, and data-driven.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** goals, student progress tracking, accommodation overrides, and exportable portfolio summary logs.

### 4. Accessibility Developers & Advocates
* **Tone:** Modular, clean, and developer-friendly.
* **Experience:** Clean Next.js App Router codebase, strongly-typed TypeScript interfaces, structured React Contexts (`AccessibilityContext`, `AuthContext`), custom Web Speech hooks (`useSpeech`), and fully keyboard-navigable semantic UI components.

---

## 🧩 Dyslexia-Friendly Design System & Accessibility Engine

Accessibility is built directly into PenPal's component primitives and global CSS custom variables rather than added as an afterthought.

### 🔠 Specialized Typography & Custom Spacing
* **Dyslexia-Optimized Typeface:** Dynamic font selector supporting **OpenDyslexic** (weighted baselines to prevent letter flipping and rotation), geometric sans-serif, and standard system fonts.
* **Granular Spacing Controls:** Real-time adjustments for letter-spacing, word-spacing, line-height, and font-size multipliers to eliminate visual crowding.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Pastel Overlays:** Preset themes designed to minimize screen glare:
  * **Default Cream:** Warm anti-glare cream (`#FCF9F2`) with muted charcoal text (`#2D2A24`).
  * **Pastel Blue:** Soft calming blue background (`#EBF4F6`).
  * **Pastel Green:** Gentle leaf green background (`#F1F7ED`).
  * **High Contrast:** Dark slate theme (`#0D0D0D`) with high-legibility text (`#F3F4F6`) and amber accent (`#FBBF24`).
* **Interactive Reading Ruler:** Height-adjustable visual focus strip that follows the mouse cursor, dimming surrounding content to guide reading line-by-line.
* **Distraction-Free Mode:** Instantly hides non-essential side panels and decorative elements to reduce cognitive load.

### 🧠 Bimodal Sensory Learning & Low-Stress Interaction
* **Bimodal Presentation:** Simultaneous visual text display and natural-tempo spoken voice playback (Web Speech API with configurable speech speed).
* **Asynchronous Communication:** Eliminates countdown timers and pressure, replacing them with self-paced interactive prompts, sentence starters, and vocabulary suggestion chips.

---

## 🚀 Multi-Portal Ecosystem & Core Features

### 1. Interactive Learner Workspace (`/dashboard`)
* **Peer-to-Peer Pen Pal Chat:** Safe, asynchronous messaging with international pen pals (e.g., Mateo from Madrid). Includes built-in translation assistance and voice readout.
* **Interactive Word Breakdown Tooltip:** Clicking words in messages displays syllable-by-syllable breakdowns (e.g., **fút · bol**), phonetic guide, and translation.
* **Sentence Starter Scaffolding:** Clickable sentence starters (e.g., *"Me gusta mucho..."*) and interactive vocabulary chips to assist writing composition.
* **Cooperative Quizzes:** Stress-free vocabulary matching and practice activities earned without countdown clocks.

### 2. Parent Progress & Insights Portal (`/parent`)
* **Learning Metrics Tracker:** Overview of reading stamina, total practice messages, acquired vocabulary count, and earned quiz points.
* **Remote Accommodation Controls:** Adjust visual theme, font family, line/letter/word spacing, reading ruler, and speech speed.
* **Student Portfolio Summary:** Snapshot of student progress ready for parent-teacher reviews.

### 3. SEN Educator & Classroom Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time tracking of student activity, engagement metrics, and IEP milestone compliance.
* **IEP Target Alignment:** Direct mapping of learner engagement (messages sent, vocabulary learned, quiz completion) to formal IEP objectives.
* **Remote Accommodation Overrides:** Classroom-wide or student-specific accommodation settings adjustment.

---

## 🛡️ Privacy & Mock Data Persistence

PenPal relies entirely on standard browser **`localStorage`** keys to mock persistent database storage and maintain synchronicity across client portals:

| LocalStorage Key | Description |
|---|---|
| `penpal_a11y_settings` | Stores global typography, theme color, reading ruler, and voice speed settings. |
| `penpal_messages` | Persists conversation history between the learner and pen pal partners. |
| `penpal_messages_sent_count` | Tracks total number of practice messages sent by the student. |
| `penpal_quiz_points` | Stores cumulative points earned from cooperative quizzes. |
| `penpal_learned_vocab` | Tracks saved vocabulary words mastered by the learner. |
| `penpal_auth_user` | Persists current mock user role (`learner`, `parent`, or `educator`). |

* **Cross-Portal Synchronicity:** Updating visual accessibility settings in the Parent or Educator portal updates `penpal_a11y_settings` and instantly reflects on the Learner Dashboard.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is built with **Next.js 14 App Router**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
penpal/
├── public/                     # Static assets (fonts, icons)
├── src/
│   ├── app/                    # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx          # Root HTML wrapper with Accessibility & Auth Providers
│   │   ├── page.tsx            # Role selector homepage
│   │   ├── dashboard/          # Learner portal (/dashboard)
│   │   ├── parent/             # Parent insights portal (/parent)
│   │   └── educator/           # Educator & IEP portal (/educator)
│   ├── components/             # Reusable UI components
│   │   ├── NavigationHeader.tsx# Universal portal navigation bar
│   │   └── a11y/               # Accessibility widgets (A11yWidget, ReadingRuler)
│   ├── context/                # Global React Context stores
│   │   ├── AccessibilityContext.tsx # Central font, spacing, theme, & ruler state
│   │   └── AuthContext.tsx     # Mock authentication & role management
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useSpeech.ts        # Browser Web Speech API text-to-speech & speech-to-text hook
│   │   └── useMatch.ts         # Peer messaging & simulated response generator hook
│   └── styles/                 # Global styles
│       └── globals.css         # Custom CSS variables & typography rules
├── package.json                # Project dependencies and scripts
├── postcss.config.js           # PostCSS setup for Tailwind CSS
├── tailwind.config.js          # Tailwind styling configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Central Accessibility Provider (`src/context/AccessibilityContext.tsx`)
Manages custom typography variables, spacing parameters, theme color schemes, and localStorage persistence:

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

  // Sync settings with localStorage on initial mount
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("penpal_a11y_settings");
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse visual settings configuration:", e);
      }
    }
  }, []);

  // Update DOM custom properties whenever settings change
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
  }, [settings, mounted]);

  const resetToDefaults = () => setSettings(defaultSettings);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
```

### 2. Web Speech Hook (`src/hooks/useSpeech.ts`)
Abstracts browser SpeechSynthesis and SpeechRecognition APIs with built-in fallback handling for supported browsers:

```typescript
"use client";

import { useState, useCallback, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback(
    (text: string, lang = "es-ES") => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      window.speechSynthesis.cancel(); // Cancel any ongoing audio

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Adapted speed setting

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

  return { speak, stop, isPlaying, isListening };
};
```

---

## ⚙️ Local Installation & Development Commands

### Prerequisites
* **Node.js**: v18.x or later recommended
* **npm**: v9.x or later

### Installation Steps

1. **Clone repository:**
   ```bash
   git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
   cd PenPal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Start production server:**
   ```bash
   npm start
   ```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, educators, designers, and accessibility advocates!

1. **Fork the Repository** and create a feature branch (`git checkout -b feature/accessibility-enhancement`).
2. **Follow WCAG Guidelines:** Ensure all visual elements support standard ARIA attributes (`aria-label`, `aria-expanded`), high color contrast ratios, and full keyboard navigation.
3. **Keep Code Typed:** Use TypeScript types consistently across contexts, components, and hooks.
4. **Submit a Pull Request:** Provide a detailed description of your feature or bug fix along with visual screenshots where applicable.

---

## 📄 License

PenPal is open-source software licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Empowering every learner to communicate and grow without barriers.
</p>
