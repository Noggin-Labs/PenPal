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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia, visual crowding, and visual processing differences (such as Irlen Syndrome/scotopic sensitivity). By combining state-of-the-art web accessibility standards (**WCAG 2.1 AA**), multi-sensory bimodal tools, and safe, stress-free peer communication, PenPal transforms foreign language acquisition into an inclusive, supportive, and engaging journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Portal Experiences](#-target-audiences--portal-experiences)
- [🧩 Dyslexia-Friendly & Accessibility Architecture](#-dyslexia-friendly--accessibility-architecture)
- [🚀 Core Portals & Key Features](#-core-portals--key-features)
- [🛡️ Privacy & LocalStorage Persistence Schema](#️-privacy--localstorage-persistence-schema)
- [🛠️ Technical Architecture & Project Structure](#️-technical-architecture--project-structure)
- [💻 Developer Code Snippets & Implementation Examples](#-developer-code-snippets--implementation-examples)
- [⚙️ Local Installation & Development Setup](#️-local-installation--development-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning tools rely heavily on dense text layouts, rapid gamified pressure timers, and glaring high-contrast white backgrounds. For individuals with dyslexia, visual crowding, or Irlen Syndrome, these interfaces impose severe cognitive overload—leading to fatigue, stress, and avoidance.

**PenPal** bridges this divide by providing:
- **Warm Anti-Glare Contrast Themes:** Soft cream, pastel blue, and pastel green backgrounds designed to eliminate harsh screen glare.
- **Bimodal Sensory Learning:** Synchronized Text-to-Speech (TTS) voice playback and Speech-to-Text (STT) voice dictation via the browser Web Speech API.
- **Visual Scaffolding:** Interactive Reading Ruler focus bar, syllable color-coding, and phonetic transcriptions.
- **Timer-Free Asynchronous Socializing:** Peer-to-peer penpal messaging and cooperative quizzes with zero countdown clocks or high-pressure scoring.

---

## 👥 Target Audiences & Portal Experiences

PenPal provides three tailored role-based portals accessed through a universal simulation role selector:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Learner Portal    │      │  Parent Portal    │      │ Educator Portal   │
   │   (/dashboard)    │      │    (/parent)      │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
* **Experience:** Interactive penpal messaging with global partners (e.g., Mateo from Spain), sentence starter chips, word breakdown tooltips with syllable color-coding (`fút · bol`), bimodal audio controls, and collaborative timer-free quizzes.

### 2. Parents & Guardians (`/parent`)
* **Experience:** Real-time visibility into reading stamina, message count, and vocabulary growth metrics. Includes remote accessibility configuration tools to customize text scaling, line spacing, font family, and theme colors on behalf of their child.

### 3. Special Education Needs (SEN) Educators (`/educator`)
* **Experience:** Classroom roster management mapped directly to IEP (Individualized Education Program) targets. Educators can review quantitative student metrics, track accommodation settings, log qualitative observations, and export progress portfolios.

---

## 🧩 Dyslexia-Friendly & Accessibility Architecture

PenPal integrates accessibility directly into its core component architecture:

### 🔠 Dyslexia-Optimized Typography
- **OpenDyslexic Font Option:** Weighted baselines prevent character rotation and flipping.
- **Granular Spacing Customization:** Independently adjust line height (1.2–2.2), letter tracking (0–5px), word spacing (0–8px), and font size multipliers (1.0x–1.3x).

### 🎨 Visual Comfort & Contrast Control
- **Anti-Glare Theme Palette:** Warm Cream (`#FCF9F2`), Pastel Blue (`#EBF4F6`), Pastel Green (`#F1F7ED`), and High Contrast Dark (`#0D0D0D`).
- **Interactive Reading Ruler:** Adjustable focus bar (30px–60px height) that follows cursor movement while dimming surrounding content.
- **Distraction-Free Mode:** Toggles off decorative UI badges and non-essential sidebars to minimize visual noise.

### 🎙️ Bimodal Auditory Support
- **Text-to-Speech (TTS):** Plays Spanish pronunciations at customizable, slower playback rates (0.75x–1.0x).
- **Speech-to-Text (STT) Dictation:** Enables hands-free message composition using speech recognition with simulated fallbacks.

---

## 🚀 Core Portals & Key Features

### 1. Learner Dashboard (`/dashboard`)
* **P2P PenPal Messaging:** Asynchronous chat with simulated automated partner responses.
* **Syllable & Phonetic Breakdown:** Clickable vocabulary tooltips showing color-separated syllables and IPA phonetic transcriptions.
* **Cooperative Quizzes:** Stress-free matching exercises earned through collaborative problem solving.
* **Quick Writing Helpers:** Sentence frame starters (*"Me gusta mucho..."*) and suggestion chips to reduce spelling anxiety.

### 2. Parent Overview Portal (`/parent`)
* **Progress Analytics:** Visual tracking of total messages sent, vocabulary learned, and quiz points.
* **Remote Visual Settings:** Adjust font, line height, letter/word spacing, theme color, and voice speed.
* **Portfolio Export:** One-click progress summaries ready for parent-teacher conferences.

### 3. Educator & SEN Workspace (`/educator`)
* **Classroom Roster:** IEP goal alignment, accommodations status, and individual student progress metrics.
* **Accommodation Controls:** Remote overrides for student visual parameters and assistive tools.
* **Progress Logging:** Add teacher observations and generate official school progress reports.

---

## 🛡️ Privacy & LocalStorage Persistence Schema

PenPal operates as a self-contained frontend application utilizing browser `localStorage` to simulate database persistence and enable cross-portal state synchronization:

| LocalStorage Key | Data Type | Description |
|---|---|---|
| `penpal_auth_user` | `JSON Object` | Stores active user role (`learner`, `parent`, or `educator`), display name, and avatar. |
| `penpal_a11y_settings` | `JSON Object` | Stores global typography, theme color, spacing, reading ruler, and speech settings. |
| `penpal_messages` | `JSON Array` | Stores penpal chat conversation history, translations, and syllable metadata. |
| `penpal_messages_sent_count` | `string (number)` | Total count of dispatched learner messages (synced to parent/educator analytics). |
| `penpal_quiz_points` | `string (number)` | Accumulated points earned through cooperative quizzes. |
| `penpal_learned_vocab` | `JSON Array` | List of unique Spanish vocabulary words mastered by the learner. |

---

## 🛠️ Technical Architecture & Project Structure

Built with **Next.js 14 App Router**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Lucide React** icons.

```
/
├── public/                 # Static assets and accessibility fonts
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   │   ├── dashboard/      # Dyslexic Learner workspace (/dashboard)
│   │   ├── educator/       # SEN Educator & IEP management desk (/educator)
│   │   ├── parent/         # Parent Insights & Remote Settings portal (/parent)
│   │   ├── layout.tsx      # Root HTML layout wrapped with global providers
│   │   └── page.tsx        # Homepage featuring Role Selector & feature overview
│   ├── components/         # Reusable UI components
│   │   ├── a11y/           # Accessibility Widget & Reading Ruler focus overlay
│   │   │   ├── A11yWidget.tsx
│   │   │   └── ReadingRuler.tsx
│   │   └── NavigationHeader.tsx # Top navigation bar with live accessibility status
│   ├── context/            # React Global State contexts
│   │   ├── AccessibilityContext.tsx # Central store managing contrast, fonts, and spacing
│   │   └── AuthContext.tsx          # Role-based auth context and role switching
│   ├── hooks/              # Custom React hooks
│   │   ├── useMatch.ts     # P2P chat state machine and simulated responses
│   │   └── useSpeech.ts    # Web Speech API wrapper for speech synthesis and recognition
│   └── styles/             # Global CSS and custom property definitions
│       └── globals.css     # CSS custom variables for dynamic fonts and themes
├── LICENSE                 # MIT License Document
├── package.json            # Node dependencies and project scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Application documentation
```

---

## 💻 Developer Code Snippets & Implementation Examples

### 1. Dynamic Accessibility Context (`AccessibilityContext.tsx`)
Manages custom CSS properties dynamically on the DOM root node to apply font families, line heights, letter/word spacing, and theme color schemes across all pages:

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

const AccessibilityContext = createContext<AccessibilitySettings | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
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
  });

  useEffect(() => {
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
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={settings}>
      <div style={{ fontFamily: "var(--font-family-current)" }}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};
```

### 2. Low-Latency Web Speech Wrapper (`useSpeech.ts`)
Abstracts speech synthesis and recognition using the native browser Web Speech API:

```typescript
import { useState, useCallback, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback((text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Cancel active speech streams

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed; // Speed bound to accessibility context

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [speechSpeed]);

  return { speak, isPlaying, isListening };
};
```

---

## ⚙️ Local Installation & Development Setup

Follow these steps to run PenPal locally:

### Prerequisites
- **Node.js**: v18.x or later
- **npm**: v9.x or later

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
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build and Lint Project
```bash
# Run ESLint check
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, accessibility advocates, educators, and designers!

1. **Fork the repository** and create a feature branch (`git checkout -b feature/accessible-toolbar`).
2. **Follow WCAG 2.1 AA Guidelines:** Ensure proper semantic HTML tags, keyboard navigation (`tabIndex`, keyboard event handlers), high contrast visual feedback, and `aria-*` attributes.
3. **Test Accessibility Settings:** Verify that UI components respond appropriately to font shifts, line/word spacing adjustments, and high-contrast themes.
4. **Submit a Pull Request:** Provide a detailed description of changes and attach screenshots or GIFs demonstrating accessibility features.

---

## 📄 License

This project is open-source and licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
