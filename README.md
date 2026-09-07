# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.3.1-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.3.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

### **Empowering Every Learner to Connect, Write, and Grow.**

**PenPal** is an adaptive, social-first language learning platform engineered specifically for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of cognitive stress into an empowering, collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Multi-Portal Platform Architecture](#-multi-portal-platform-architecture)
- [🛡️ Privacy & Mock Data Persistence](#️-privacy--mock-data-persistence)
- [🛠️ Technical Architecture & Directory Blueprint](#️-technical-architecture--directory-blueprint)
- [💻 Developer Implementation Highlights](#-developer-implementation-highlights)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified countdown timers, and high-contrast glaring interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard designs introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous peer-to-peer communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning journey.

---

## 👥 Target Audiences & Brand Identity

Our platform and feature set are tailored to support four core user roles across connected portals:

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

### 1. Dyslexic & Neurodivergent Students
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Specialized font selectors (**OpenDyslexic**, sans-serif, system), custom character/word/line spacing, an interactive highlight Reading Ruler, bimodal dictation utilities, and visual syllable breakdowns.

### 2. Parents & Guardians
* **Tone:** Reassuring, supportive, and informative.
* **Experience:** Real-time visibility into their child's language progress. Features a dedicated analytics panel showing vocabulary growth, message counts, quiz achievements, and remote font/theme adjustments to help co-configure their child's workspace.

### 3. Special Education Needs (SEN) Educators & Departments
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative observations, and export school-compliant progress reports.

### 4. Accessibility Developers & Advocates
* **Tone:** Modular, structured, and developer-friendly.
* **Experience:** Strongly-typed TypeScript codebase featuring React Contexts, custom Web Speech hooks, semantic HTML markup, and full keyboard accessibility.

---

## 🧩 Dyslexia-Friendly Design System

PenPal embeds visual and cognitive scaffolding directly into CSS variables and component primitives.

### 🔠 Specialized Typography & Spacing
* **Dyslexia-Optimized Typeface:** Dynamic typeface selector featuring **OpenDyslexic** (weighted baselines to prevent letter rotation and flipping), legible sans-serif, and system fonts.
* **Granular Spacing Controls:** Real-time customization of letter-spacing, word-spacing, line-height, and font-size multipliers to eliminate visual crowding.

### 🎨 Visual Comfort & Contrast Control
* **Anti-Glare Pastel Themes:** Choose from soft cream (`#FCF9F2`), pastel blue (`#EBF4F6`), pastel green (`#F1F7ED`), or high-contrast dark mode (`#0D0D0D`) to prevent visual stress.
* **Interactive Reading Ruler:** A customizable visual overlay focus strip that tracks vertical cursor movement, dimming surrounding content to guide reading line by line.
* **Distraction-Free Mode:** Hides non-essential UI elements to assist learners in focusing strictly on reading and writing.

### 🧠 Bimodal Sensory & Cognitive Scaffolding
* **Bimodal Audio Assistance:** Synchronized Spanish voice audio playback (with speed regulation from 0.75x to 1.0x) alongside written text.
* **No-Stress Asynchronous Interaction:** Eliminates high-pressure timers and competition, fostering self-paced comprehension and natural communication.

---

## 🚀 Multi-Portal Platform Architecture

PenPal provides dedicated interfaces tailored to each stakeholder:

### 1. Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Exchange:** Interactive dialogue exchange with international penpals (e.g., *Mateo from Madrid*). Includes sentence starter frames and translation helpers.
* **Syllable & Phonetic Breakdown Tooltip:** Clicking any word in the chat instantly reveals alternating color-coded syllable segments (e.g., **fút · bol**), phonetic guide, and translation.
* **Speech Input & Playback:** Native Speech-to-Text dictation with speech recognition support and simulated fallback modes for full browser compatibility.
* **Cooperative Quizzes:** Low-stress matching activities solved with contextual dialogue hints instead of countdown timers.

### 2. Parent Insight Portal (`/parent`)
* **Progress Tracking:** Monitors messages dispatched, vocabulary learned, and cooperative quiz points earned.
* **Remote Visual Settings:** Parents can remotely customize their child's font size, spacing, line height, theme colors, and audio playback speeds.
* **Portfolio Exporter:** Single-click progress report generation to share with SEN specialists or teachers.

### 3. SEN Educator Workspace (`/educator`)
* **Classroom Roster Analytics:** Real-time visibility into student progress across IEP milestones.
* **IEP Objective Alignment:** Connects application metrics directly to formal learning targets.
* **Accommodation Override Controls:** Remotely adjust student font preferences, high-contrast themes, or reading ruler defaults.
* **Qualitative Progress Notes Log:** Allows educators to record classroom observations and individualized accommodations.

---

## 🛡️ Privacy & Mock Data Persistence

PenPal operates as a self-contained web application using browser **`localStorage`** to simulate backend persistence and enable cross-portal synchronization:

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
       ┌──────────────────────────────────┼──────────────────────────────────┐
       ▼                                  ▼                                  ▼
┌──────────────────────────────┐ ┌──────────────────────────────┐ ┌──────────────────────────────┐
│  `penpal_a11y_settings`      │ │  `penpal_messages_sent_count`│ │  `penpal_messages`           │
│  Global visual & audio config│ │  `penpal_quiz_points`        │ │  P2P message history         │
│                              │ │  `penpal_learned_vocab`      │ │                              │
└──────────────────────────────┘ └──────────────────────────────┘ └──────────────────────────────┘
```

* **Cross-Portal Synchronization:** Updates made in the Parent (`/parent`) or Educator (`/educator`) portals write directly to `penpal_a11y_settings`, instantly reflecting in the Learner (`/dashboard`) portal.
* **Zero External Data Tracking:** Ensures learner privacy by keeping all interactions local to the browser instance.

---

## 🛠️ Technical Architecture & Directory Blueprint

PenPal is built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

```
PenPal/
├── public/                     # Static assets & OpenDyslexic web fonts
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout wrapped with AccessibilityProvider & AuthProvider
│   │   ├── page.tsx            # Portal selector & home splash page
│   │   ├── dashboard/          # Learner portal (/dashboard)
│   │   ├── educator/           # Educator IEP portal (/educator)
│   │   └── parent/             # Parent analytics & remote controls (/parent)
│   ├── components/             # Reusable UI primitives
│   │   ├── NavigationHeader.tsx# Universal top portal navigation
│   │   └── a11y/               # Accessibility widgets
│   │       ├── A11yWidget.tsx  # Slide-over accessibility settings control panel
│   │       └── ReadingRuler.tsx# Interactive focus ruler overlay
│   ├── context/                # React state management
│   │   ├── AccessibilityContext.tsx # Centralized typography, theme, and ruler context
│   │   └── AuthContext.tsx     # Role management context (Learner, Parent, Educator)
│   ├── hooks/                  # Custom React hooks
│   │   ├── useSpeech.ts        # Bimodal Speech Synthesis & Speech-to-Text hook
│   │   └── useMatch.ts         # P2P chat state machine & automated response generator
│   └── styles/                 # Global styles
│       └── globals.css         # CSS custom properties & theme definitions
├── LICENSE                     # MIT License
├── package.json                # Project dependencies & scripts
└── README.md                   # Project documentation
```

---

## 💻 Developer Implementation Highlights

### 1. Accessibility Context & CSS Variable Engine (`AccessibilityContext.tsx`)
Manages user visual preferences and updates CSS custom properties on the root DOM element in real time:

```typescript
"use client";

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

// ... Context initialization and default values ...

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

  // Synchronize CSS custom variables and update localStorage
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

  // ...
};
```

### 2. Bimodal Audio & Dictation Hook (`useSpeech.ts`)
Wraps the browser Web Speech API for low-latency text-to-speech synthesis and speech recognition with built-in fallbacks:

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

      window.speechSynthesis.cancel(); // Terminate pending utterances

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Synchronized with learner's configured speed

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  const startListening = useCallback((onResult: (text: string) => void, lang = "es-ES") => {
    // Native browser Web Speech recognition with fallback simulation
  }, []);

  return { speak, stop, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Local Installation & Environment Setup

### Prerequisites
* **Node.js**: `v18.x` or higher
* **npm**: `v9.x` or higher (or `yarn` / `pnpm`)

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 4. Available NPM Scripts
* `npm run dev` – Launch local Next.js development server.
* `npm run build` – Build optimized production bundle.
* `npm run start` – Run production build locally.
* `npm run lint` – Run Next.js linter checks.

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, accessibility researchers, designers, and educators!

1. **Fork the Repository** and create a feature branch (`git checkout -b feature/accessibility-enhancement`).
2. **Adhere to WCAG Standards:** Ensure all new components support semantic HTML, proper `aria-*` labels, screen reader support, and full keyboard navigation.
3. **Run Code Quality Checks:** Ensure `npm run lint` and `npm run build` pass before submitting.
4. **Submit a Pull Request:** Provide a clear description of your changes and any relevant visual screenshots or recordings.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<p align="center">
  Made with 💙 for inclusive, accessible learning everywhere.
</p>
