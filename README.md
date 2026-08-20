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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Client Portals & Target Audiences](#-client-portals--target-audiences)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Core Features & Interactive Workspaces](#-core-features--interactive-workspaces)
- [🛡️ State Management & Data Persistence](#️-state-management--data-persistence)
- [🛠️ Project Architecture & Directory Structure](#️-project-architecture--directory-structure)
- [💻 Developer Implementation Reference](#-developer-implementation-reference)
- [⚙️ Getting Started & Local Development](#️-getting-started--local-development)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Client Portals & Target Audiences

PenPal features three dedicated, synchronized client portals designed for seamless collaboration between learners, families, and educators:

```
                          ┌───────────────────────────┐
                          │    PENPAL PORTAL SYSTEM   │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Learner Workspace │      │   Parent Portal   │      │  Educator Desk    │
   │   (/dashboard)    │      │     (/parent)     │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom letter/word/line spacing controls, an interactive reading ruler, syllable breakdowns, sentence frames, and bimodal dictation utilities to eliminate spelling anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Reassuring, supportive, and informative.
* **Experience:** Real-time visibility into their child's language gains, reading stamina, vocabulary expansion, and message history. Parents can remotely fine-tune typography, color overlays, and playback speeds to align with their child's daily needs.

### 3. Special Education Needs (SEN) Educators & Schools (`/educator`)
* **Tone:** Professional, data-driven, and IEP-compliant.
* **Experience:** Classroom roster management mapped directly to **Individualized Education Program (IEP)** targets. Educators can remotely toggle accommodation settings, monitor qualitative progress logs, and export student progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed codebase leveraging Next.js App Router, React Contexts, Web Speech API integration, WCAG 2.1 AA accessibility guidelines, and 100% keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS variables and component primitives.

### 🔠 Specialized Typography
* **Dyslexia-Optimized Typefaces:** Dynamic font selector supporting **OpenDyslexic** (weighted baselines to prevent letter rotation and flipping), geometric sans-serif, and system fonts.
* **Granular Spacing Controls:** Customizable line-height, letter-spacing, and word-spacing properties that prevent letter crowding and visual overlaps.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft cream, pastel blue, pale leaf green, or high-contrast dark mode to eliminate screen glare and reduce visual stress.
* **Interactive Reading Ruler:** A positionable visual guide overlay that highlights the line being read while dimming surrounding content to guide horizontal focus.
* **Distraction-Free Mode:** Hides non-essential sidebar controls and decorative statistics, providing a clean focus zone for reading and writing.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Audio-Visual Presentation:** Synchronized written text and natural-tempo Spanish text-to-speech audio mapped directly to phonemes.
* **Stress-Free Environment:** Replaces countdown timers with self-paced, asynchronous communication prompts and collaborative tasks.

---

## 🚀 Core Features & Interactive Workspaces

### 1. Interactive Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Exchange:** Guided penpal messaging with international peers (such as *Mateo from Madrid*). Includes structured conversation frames and quick translation helpers.
* **Word Breakdown Tooltip Desk:** Hovering or clicking on any word in the chat stream reveals interactive syllable breakdowns, phonetic transcriptions, and contextual definitions.
* **Syllable Scaffolding:** Visually separates syllables in alternating color blocks (e.g., **fút · bol**) to render pronunciation patterns intuitive.
* **Asynchronous Writing Scaffolds:** Expandable helper cards with Spanish sentence frames (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestion chips.
* **Cooperative Quizzes:** Low-stress, collaborative matching activities solved with partner hints instead of rapid timers.

### 2. Parent Progress & Remote Setup Portal (`/parent`)
* **Confidence & Activity Metrics:** Visual progress indicators for total messages exchanged, vocabulary learned, and quiz points earned.
* **Remote Accommodation Overrides:** Parents can remotely configure font profiles, spacing, contrast themes, and voice playback speed.
* **Portfolio Exporter:** One-click progress summaries formatted for sharing with clinical specialists or school committees.

### 3. SEN Educator Desk (`/educator`)
* **Classroom Roster Analytics:** Direct insight into individual student practice sessions and milestones.
* **IEP Target Alignment:** Track progress against official IEP goals (e.g., reading stamina, vocabulary acquisition, ruler usage).
* **Remote Roster Overrides:** Remotely apply typography and visual settings across entire classroom groups or individual students.

---

## 🛡️ State Management & Data Persistence

To prioritize privacy and keep the application entirely self-contained without requiring external database dependencies, **PenPal leverages browser `localStorage`** for cross-portal synchronization and state persistence.

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │  Learner Chat    │          │  Parent Remote   │          │  Classroom IEP   │
  │  & Quiz Progress │          │  Accommodation   │          │  Progress Logs   │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

### Primary Persistence Keys
| Storage Key | Description | Synchronized Portals |
| :--- | :--- | :--- |
| `penpal_a11y_settings` | Visual, font, ruler, and speech configurations | Learner, Parent, Educator |
| `penpal_messages` | Active penpal conversation messages | Learner, Parent |
| `penpal_messages_sent_count` | Quantitative counter of sent messages | Learner, Parent, Educator |
| `penpal_quiz_points` | Cooperative quiz score metrics | Learner, Parent, Educator |
| `penpal_learned_vocab` | Saved vocabulary items and definitions | Learner, Parent, Educator |

---

## 🛠️ Project Architecture & Directory Structure

PenPal is built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
/
├── public/                 # Static assets (accessibility fonts, vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Root HTML layout wrapped with AccessibilityProvider
│   │   ├── page.tsx        # Homepage with role-switching preview selector
│   │   ├── dashboard/      # Dyslexic Learner Workspace
│   │   ├── educator/       # SEN Educator & IEP Management Desk
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Shared Reusable UI Components
│   │   ├── a11y/           # Accessibility Widget & Reading Ruler Component
│   │   └── NavigationHeader.tsx # Universal Portal Navigation Bar
│   ├── context/            # React Global State Providers
│   │   ├── AccessibilityContext.tsx # Central store for typography, spacing, themes, & ruler
│   │   └── AuthContext.tsx          # Mock user role authorization
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper (Text-to-Speech & Speech-to-Text)
│   │   └── useMatch.ts     # PenPal messaging state machine & simulated replies
│   └── styles/             # Global CSS & Tailwind Configurations
│       └── globals.css     # CSS custom variables for adaptive accessibility properties
├── LICENSE                 # MIT License
├── package.json            # Node dependencies and npm scripts
└── README.md               # Project documentation
```

---

## 💻 Developer Implementation Reference

### 1. Central Accessibility Provider (`src/context/AccessibilityContext.tsx`)
Manages user visual preferences and dynamically injects custom CSS variables directly onto the DOM root element (`document.documentElement`).

```typescript
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type DyslexiaFont = "open-dyslexic" | "sans-serif" | "standard";
export type ThemeColor = "default-cream" | "pastel-blue" | "pastel-green" | "high-contrast";

export interface AccessibilitySettings {
  fontFamily: DyslexiaFont;
  lineHeight: number;       // e.g. 1.8, 2.0
  letterSpacing: number;    // in px
  wordSpacing: number;      // in px
  fontSizeMultiplier: number;
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number;
  speechSpeed: number;      // e.g. 0.75, 0.85, 1.0
  distractionFree: boolean;
}

interface AccessibilityContextProps extends AccessibilitySettings {
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  resetToDefaults: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  // Load saved preferences from localStorage on initial render
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

  // Update CSS root variables and persist to localStorage
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

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults }}>
      <div className="a11y-container">{children}</div>
    </AccessibilityContext.Provider>
  );
};
```

### 2. Web Speech API Wrapper Hook (`src/hooks/useSpeech.ts`)
Encapsulates browser SpeechSynthesis and SpeechRecognition APIs, complete with customizable playback rates and simulated voice recognition fallbacks.

```typescript
"use client";

import { useState, useCallback, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Speech synthesis audio playback
  const speak = useCallback(
    (text: string, lang = "es-ES") => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      window.speechSynthesis.cancel(); // Cancel any ongoing audio

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed;

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

  return { speak, stop, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Getting Started & Local Development

### Prerequisites
* **Node.js** (v18.x or later)
* **npm** or **yarn**

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
Open [http://localhost:3000](http://localhost:3000) in your browser to test the application.

### 4. Build for Production
```bash
npm run build
```

### 5. Linting and Type Checking
```bash
npm run lint
```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, accessibility advocates, designers, and educators!

1. **Fork the Repository:** Create a descriptive branch (`git checkout -b feature/reading-ruler-enhancements`).
2. **Follow Accessibility Standards:** Ensure all new components comply with WCAG 2.1 AA standards, include appropriate `aria-*` attributes, and support full keyboard navigation.
3. **Test Code & Builds:** Run `npm run build` and `npm run lint` before submitting code changes.
4. **Submit a Pull Request:** Describe your changes clearly and include screenshots or recordings demonstrating accessibility improvements.

---

## 📄 License

This project is licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
