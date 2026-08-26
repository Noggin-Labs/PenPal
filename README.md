# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

### **Empowering Every Learner to Connect, Write, and Grow.**

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia, visual processing differences, and scotopic sensitivity (Irlen Syndrome). By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, anti-glare pastel themes, and safe, stress-free social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Core Vision](#-problem-statement--core-vision)
- [👥 Target Audiences & Portal System](#-target-audiences--portal-system)
- [🧩 Dyslexia-Friendly Design & Adaptation System](#-dyslexia-friendly-design--adaptation-system)
- [🚀 Multi-Portal Key Features](#-multi-portal-key-features)
  - [1. Interactive Learner Workspace (`/dashboard`)](#1-interactive-learner-workspace-dashboard)
  - [2. Parent Progress & Remote Setup Portal (`/parent`)](#2-parent-progress--remote-setup-portal-parent)
  - [3. SEN Educator & Administration Desk (`/educator`)](#3-sen-educator--administration-desk-educator)
- [🛡️ State Persistence & LocalStorage Schema](#️-state-persistence--localstorage-schema)
- [🛠️ Technical Architecture & Directory Blueprint](#️-technical-architecture--directory-blueprint)
- [💻 Developer Implementation Examples](#-developer-implementation-examples)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🧪 Verification & Testing](#-verification--testing)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Core Vision

Traditional language learning software relies heavily on dense blocks of text, rapid gamified pressure timers, high-contrast glaring white interfaces, and harsh error penalties. For individuals with dyslexia, visual crowding, or visual processing differences, these standard user interfaces create severe cognitive overload, leading to frustration, eye strain, and performance anxiety.

**PenPal** bridges this digital divide. By providing customizable pastel color overlays, dynamic typography controls (including **OpenDyslexic** font and custom letter/word/line spacing), synchronized Text-to-Speech and Speech-to-Text bimodal aids, interactive reading rulers, syllable/phonetic breakdown tooltips, and timer-free asynchronous penpal interactions, PenPal creates an inclusive environment where students build real-world communication confidence at their own pace.

---

## 👥 Target Audiences & Portal System

PenPal features a multi-role architecture tailored to support four core user groups across dedicated portals:

```
                               ┌───────────────────────────┐
                               │     PENPAL PORTAL SYSTEM  │
                               └─────────────┬─────────────┘
                                             │
             ┌───────────────────────────────┼───────────────────────────────┐
             ▼                               ▼                               ▼
  ┌──────────────────────┐        ┌──────────────────────┐        ┌──────────────────────┐
  │  Learner Workspace   │        │ Parent Setup & Care  │        │  Educator SEN Desk   │
  │     (/dashboard)     │        │       (/parent)      │        │      (/educator)     │
  └──────────────────────┘        └──────────────────────┘        └──────────────────────┘
```

### 1. Dyslexic & Neurodivergent Students (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (such as **OpenDyslexic**), custom spacing sliders, an interactive highlight reading ruler, color-coded syllable breakdowns, bimodal dictation utilities, and timer-free cooperative quizzes.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Reassuring, supportive, and informative.
* **Experience:** Real-time visibility into their child's language gains and reading stamina. Features interactive metrics on vocabulary acquired, message volume, and remote accommodation override controls to configure their child's defaults.

### 3. Special Education Needs (SEN) Educators (`/educator`)
* **Tone:** Professional, data-driven, and school-compliant.
* **Experience:** Classroom roster management mapped to **Individualized Education Program (IEP)** targets. Educators can adjust student accessibility profiles remotely, record qualitative growth notes, and export progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Modular, well-documented, and developer-friendly.
* **Experience:** Clean Next.js & React App Router structure, strongly-typed TypeScript interfaces, centralized accessibility context, custom Web Speech hooks, semantic HTML, and 100% keyboard accessibility.

---

## 🧩 Dyslexia-Friendly Design & Adaptation System

Accessibility is embedded directly into PenPal's core CSS custom properties and React context primitives:

### 🔠 Specialized Dyslexia Typography
* **Weighted Baseline Typeface:** Dynamic font selector featuring **OpenDyslexic** (weighted bottoms prevent letter rotation and inversion), clean sans-serif (Arial), and system default fonts.
* **Granular Spacing Controls:** Independent real-time adjustments for letter spacing (`0px` to `5px`), word spacing (`0px` to `10px`), line height (`1.4` to `2.2`), and overall font scaling (`0.8x` to `1.5x`) to counteract visual crowding.

### 🎨 Visual Comfort & Anti-Glare Color Palettes
* **Pastel Anti-Glare Themes:**
  * 🍦 **Warm Cream** (`#FCF9F2` bg, `#2D2A24` text) — Reduces contrast glare while keeping text soft.
  * 🌊 **Soft Blue** (`#EBF4F6` bg, `#1E293B` text) — Calming tone for visual fatigue.
  * 🍃 **Mint Green** (`#F1F7ED` bg, `#1C2D1F` text) — Eases reading strain and visual stress.
  * 🕶️ **High-Contrast Dark Mode** (`#0D0D0D` bg, `#F3F4F6` text) — For high-contrast visual preferences.
* **Interactive Reading Ruler:** A customizable neon-yellow focus strip (`20px` to `80px` thickness) that tracks cursor position to guide horizontal reading lines.
* **Distraction-Free Mode:** Instantly toggles off non-essential side panels and headers to maximize focus.

### 🧠 Cognitive Scaffolding & Bimodal Aids
* **Bimodal Web Speech Integration:** Simultaneous auditory speech synthesis (Text-to-Speech) and microphone dictation (Speech-to-Text) with adjustable playback speeds (`0.5x` to `1.2x`).
* **Syllable & Phonetic Breakdown Desk:** Clicking words in penpal messages reveals color-coded syllable breaks (e.g., **fút · bol**) and phonetic pronunciation keys (IPA).
* **Asynchronous Writing Helpers:** Expandable Spanish sentence starters (e.g., *"Me gusta mucho..."*) and interactive vocabulary chips.

---

## 🚀 Multi-Portal Key Features

### 1. Interactive Learner Workspace (`/dashboard`)
* **Global PenPal Matching:** P2P chat experience with international penpals (e.g., *Mateo from Madrid*). Includes automatic simulated smart responses for continuous conversation.
* **Word Breakdown Tooltips:** Interactive modal popping up color-coded syllable splits, translations, and phonetic guides for highlighted vocabulary.
* **Timer-Free Cooperative Quiz:** Collaborative language matching games designed to build vocabulary without pressure or countdown clocks.
* **Floating Adaptation Center Widget:** Universal floating menu (`A11yWidget`) accessible from any screen to customize visual and speech parameters instantly.

### 2. Parent Progress & Remote Setup Portal (`/parent`)
* **Confidence & Stamina Metrics:** Visual trackers summarizing messages sent, vocabulary mastered, and reading ruler utilization.
* **Remote Accommodation Overrides:** Parents can remotely configure their child's default font, contrast theme, and speech rate.
* **Portfolio Exporter:** One-click summary portfolio generation to share with educators or specialists.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time summary of student engagement and vocabulary milestone completion.
* **IEP Target Alignment:** Maps platform activities directly to student IEP goals (e.g., written expression autonomy, decoding speed).
* **Student Accommodation Management:** Remotely fine-tune visual themes, font sizes, and reading ruler defaults per student.

---

## 🛡️ State Persistence & LocalStorage Schema

PenPal uses browser `localStorage` to simulate database persistence and maintain real-time synchronization across learner, parent, and educator portals without external database dependencies.

```
                    ┌──────────────────────────────────────────────┐
                    │            BROWSER LOCALSTORAGE              │
                    └──────────────────────┬───────────────────────┘
                                           │
         ┌─────────────────────────────────┼─────────────────────────────────┐
         ▼                                 ▼                                 ▼
┌──────────────────┐             ┌──────────────────┐             ┌──────────────────┐
│ Learner Activity │             │ Accessibility    │             │ Auth & Role      │
│ Metrics & Chat   │             │ Configurations   │             │ State            │
└──────────────────┘             └──────────────────┘             └──────────────────┘
```

### Key Storage Schema Keys

| Storage Key | Type | Description |
| :--- | :--- | :--- |
| `penpal_a11y_settings` | `JSON Object` | Stores global typography, theme color, line/word spacing, reading ruler, and speech speed preferences. |
| `penpal_messages` | `JSON Array` | Stores interactive P2P message history, translations, and syllable breakdowns. |
| `penpal_messages_sent_count` | `Number` | Tracks total student messages sent for parent & educator progress dashboards. |
| `penpal_learned_vocab` | `JSON Array` | List of unique vocabulary words acquired through chat and quizzes. |
| `penpal_quiz_points` | `Number` | Total points earned through cooperative, timer-free learning quizzes. |
| `penpal_auth_user` | `JSON Object` | Active simulation user profile (`learner`, `parent`, or `educator`). |

---

## 🛠️ Technical Architecture & Directory Blueprint

PenPal is built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
/
├── public/                     # Static assets, fonts, and icons
├── src/
│   ├── app/                    # Next.js App Router layout & pages
│   │   ├── layout.tsx          # Root HTML layout wrapped with Accessibility & Auth Providers
│   │   ├── page.tsx            # Landing page with interactive Role Selector simulation
│   │   ├── dashboard/          # Dyslexic Learner workspace & chat panel
│   │   │   └── page.tsx
│   │   ├── parent/             # Parent setup & progress insight portal
│   │   │   └── page.tsx
│   │   └── educator/           # SEN Educator classroom & IEP analytics desk
│   │       └── page.tsx
│   ├── components/             # Reusable React UI primitives
│   │   ├── NavigationHeader.tsx# Universal header with role switcher & user badge
│   │   └── a11y/               # Accessibility widgets & focus overlays
│   │       ├── A11yWidget.tsx  # Floating adaptation control panel
│   │       └── ReadingRuler.tsx# Cursor-tracking reading ruler overlay
│   ├── context/                # React Context state managers
│   │   ├── AccessibilityContext.tsx # Centralized typography, theme, and speech store
│   │   └── AuthContext.tsx     # Simulation user role manager
│   ├── hooks/                  # Custom React hooks
│   │   ├── useMatch.ts         # P2P chat state machine & simulated penpal engine
│   │   └── useSpeech.ts        # Web Speech API wrapper for speech synthesis & recognition
│   └── styles/                 # Global styles
│       └── globals.css         # CSS custom properties and font definitions
├── LICENSE                     # MIT License file
├── next-env.d.ts               # Next.js TypeScript declarations
├── package.json                # Project dependencies and script runner
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration with custom typography extensions
└── tsconfig.json               # TypeScript configuration
```

---

## 💻 Developer Implementation Examples

### 1. Centralized Accessibility Provider (`AccessibilityContext.tsx`)
This provider dynamically updates root CSS custom variables across the DOM tree whenever visual settings change.

```typescript
import React, { createContext, useContext, useState, useEffect } from "react";

export type DyslexiaFont = "open-dyslexic" | "sans-serif" | "standard";
export type ThemeColor = "default-cream" | "pastel-blue" | "pastel-green" | "high-contrast";

export interface AccessibilitySettings {
  fontFamily: DyslexiaFont;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  fontSizeMultiplier: number;
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number;
  speechSpeed: number;
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

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("penpal_a11y_settings");
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse settings:", e);
      }
    }
  }, []);

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
      <div className="a11y-container" style={{ fontFamily: "var(--font-family-current)" }}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};
```

### 2. Low-Stress Web Speech Hook (`useSpeech.ts`)
Encapsulates browser speech synthesis and recognition with graceful fallbacks.

```typescript
import { useState, useCallback, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback((text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [speechSpeed]);

  const startListening = useCallback((onResult: (text: string) => void, lang = "es-ES") => {
    if (typeof window === "undefined") return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        onResult("¡Hola PenPal! ¿Cómo estás hoy?");
      }, 3000);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang;
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (e: any) => onResult(e.results[0][0].transcript);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  }, []);

  return { speak, startListening, isPlaying, isListening };
};
```

---

## ⚙️ Local Installation & Environment Setup

Follow these steps to run PenPal on your local development machine.

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the application.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🧪 Verification & Testing

To ensure code quality and build integrity:

* **Type-Check & Linting:**
  ```bash
  npm run lint
  ```
* **Production Compilation Check:**
  ```bash
  npm run build
  ```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, educators, designers, and accessibility advocates!

1. **Fork the Repository** and create a feature branch (`git checkout -b feature/reading-ruler-modes`).
2. **Follow Accessibility Standards:** Ensure all new components support full keyboard navigation (`Tab` / `Enter` / `Space`), semantic HTML elements, and `aria-*` tags complying with WCAG 2.1 AA.
3. **Commit Your Changes:** Keep commit messages clear and concise.
4. **Open a Pull Request:** Describe your changes in detail, linking relevant issues and attaching screenshots or screen recordings where applicable.

---

## 📄 License

PenPal is open-source software licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
