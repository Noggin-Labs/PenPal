# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS 3" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

### **Empowering Every Learner to Connect, Write, and Grow.**

**PenPal** is an adaptive, social-first language learning platform designed from the ground up for learners with **dyslexia** and **visual processing differences** (such as Irlen Syndrome and scotopic sensitivity). Combining WCAG 2.1 AA web accessibility compliance, multi-sensory reading aids, and stress-free asynchronous penpal interactions, PenPal transforms foreign language acquisition into an inclusive, empowering experience.

---

## 📖 Table of Contents
- [🌟 Overview \& Problem Statement](#-overview--problem-statement)
- [👥 Target Audiences \& Multi-Portal Architecture](#-target-audiences--multi-portal-architecture)
- [🧩 Dyslexia-Friendly Accessibility Design System](#-dyslexia-friendly-accessibility-design-system)
- [🚀 Core Features \& Client Portals](#-core-features--client-portals)
  - [✍️ Learner Workspace (`/dashboard`)](#️-learner-workspace-dashboard)
  - [👩‍👦 Parent Progress Portal (`/parent`)](#-parent-progress-portal-parent)
  - [👨‍🏫 SEN Educator Desk (`/educator`)](#-sen-educator-desk-educator)
- [🛡️ Data Persistence \& State Schema](#️-data-persistence--state-schema)
- [🛠️ Project Architecture \& Directory Tree](#️-project-architecture--directory-tree)
- [💻 Code Implementation Highlights](#-code-implementation-highlights)
  - [1. Dynamic Accessibility Provider (`AccessibilityContext.tsx`)](#1-dynamic-accessibility-provider-accessibilitycontexttsx)
  - [2. Multi-Sensory Web Speech Hook (`useSpeech.ts`)](#2-multi-sensory-web-speech-hook-usespeechts)
  - [3. Interactive P2P Match Hook (`useMatch.ts`)](#3-interactive-p2p-match-hook-usematchts)
- [⚙️ Local Setup \& Installation Guide](#️-local-setup--installation-guide)
- [🧪 Development \& Production Scripts](#-development--production-scripts)
- [🤝 Contribution \& Accessibility Guidelines](#-contribution--accessibility-guidelines)
- [📄 License](#-license)

---

## 🌟 Overview & Problem Statement

Standard language learning applications rely heavily on dense walls of small text, bright glare backgrounds, and rapid competitive countdown timers. For learners with dyslexia, visual crowding, or visual fatigue, these patterns create significant cognitive barriers, causing stress and performance anxiety.

**PenPal** resolves these challenges by introducing:
* **Customizable Dyslexia Typography:** Including **OpenDyslexic** typefaces and granular controls for text scale, letter tracking, word spacing, and line height.
* **Warm Anti-Glare Color Overlays:** Soft cream, pastel blue, mint green, and dark mode presets to relieve visual fatigue.
* **Bimodal Visual & Auditory Scaffoldings:** Synchronized Text-to-Speech (TTS) playback and Speech-to-Text (STT) voice dictation.
* **Syllable & Phonetic Breakdown Tooltips:** Interactive word breakdown cards that highlight syllables in alternating scaffolding colors.
* **Interactive Reading Ruler:** An adjustable cursor-tracking highlight strip to maintain focus across text lines.
* **Stress-Free Asynchronous Social Messaging:** Peer-to-peer messaging with no timers or ranking ladders.

---

## 👥 Target Audiences & Multi-Portal Architecture

PenPal integrates three dedicated role portals connected through shared state and accessibility configurations:

```
                              ┌───────────────────────────┐
                              │  PENPAL DOCKING STATION   │
                              └─────────────┬─────────────┘
                                            │
               ┌────────────────────────────┼────────────────────────────┐
               ▼                            ▼                            ▼
   ┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
   │  Learner Workspace   │     │ Parent Insights Desk │     │ SEN Educator Portal  │
   │    (`/dashboard`)    │     │     (`/parent`)      │     │     (`/educator`)    │
   └──────────────────────┘     └──────────────────────┘     └──────────────────────┘
```

1. **Dyslexic & Neurodivergent Students (`/dashboard`)**:
   - Access to bimodal dictation, syllable breakdown cards, reading ruler, and asynchronous P2P chat with international penpals.
2. **Parents & Guardians (`/parent`)**:
   - Real-time visibility into reading stamina, writing frequency, and vocabulary growth, along with remote accessibility setup overrides.
3. **Special Education Needs (SEN) Educators (`/educator`)**:
   - Classroom roster metrics, IEP milestone mapping, accommodation adjustments, and official progress portfolio exports.
4. **Developers & Accessibility Advocates**:
   - Clean, modular Next.js App Router codebase built with strict TypeScript types, accessible ARIA attributes, and React contexts.

---

## 🧩 Dyslexia-Friendly Accessibility Design System

PenPal embeds accessibility into its structural primitives and CSS variables (`var(--font-family-current)`, `var(--theme-bg-color)`, etc.):

### 🔠 Typography & Spacing Controls
* **Dyslexia Font Presets:** OpenDyslexic (weighted bottom baselines to prevent letter flipping), Clean Arial, or Standard System fonts.
* **Text Scale:** Adjust text size from `0.8x` to `1.5x`.
* **Letter Spacing:** Expand tracking up to `5px` to eliminate visual crowding.
* **Word Spacing:** Expand gaps up to `10px` for clear word boundary recognition.
* **Line Height:** Expand line height from `1.4` to `2.2` to ease row tracking.

### 🎨 Anti-Glare Pastel Contrast Schemes
| Theme Name | Background Color | Text Color | Purpose |
| :--- | :--- | :--- | :--- |
| **Warm Cream 🍦** | `#FCF9F2` | `#2D2A24` | Eliminates bright white glare; warm tone eases visual fatigue |
| **Soft Blue 🌊** | `#EBF4F6` | `#1E293B` | Cool, calming palette designed for sustained reading focus |
| **Mint Green 🍃** | `#F1F7ED` | `#1C2D1F` | High-legibility pastel shade reduces glare and scotopic stress |
| **Dark Mode 🕶️** | `#0D0D0D` | `#F3F4F6` | High-contrast palette ideal for low-light environments |

### 🛠️ Visual & Auditory Scaffoldings
* **Interactive Reading Ruler:** Highlighting overlay bar (`20px` to `80px` height) that tracks vertical cursor movement.
* **Bimodal Text-to-Speech:** Slower speech synthesis rate (`0.5x` to `1.2x`) tailored for phonetic mastery.
* **Distraction-Free Mode:** Toggles extraneous UI sidebars and stats to maintain single-task focus.

---

## 🚀 Core Features & Client Portals

### ✍️ Learner Workspace (`/dashboard`)
* **Peer PenPal Chat:** Structured P2P exchange (e.g., with *Mateo from Spain 🇪🇸*). Includes instant English translation triggers.
* **Syllable & Phonetic Card Tooltip:** Clicking annotated words reveals color-coded syllable segments (e.g., `fút · bol`) and IPA phonetic representations.
* **Speech-to-Text Dictation:** Voice dictation button allows students to dictate Spanish messages directly.
* **Sentence Frameworks:** Expandable prompt templates (e.g., *"Me gusta mucho..."*) and suggested vocabulary chips.
* **Timer-Free Cooperative Quizzes:** Stress-free matching games that encourage collaboration without competitive timers.

### 👩‍👦 Parent Progress Portal (`/parent`)
* **Confidence & Stamina Metrics:** Visual trackers displaying reading stamina, writing autonomy, and total messages sent.
* **Remote Visual Settings Override:** Adjust default font styles, text scale, and audio speech speed remotely for the student profile.
* **Portfolio Exporter:** Generate printable/shareable student progress summaries.

### 👨‍🏫 SEN Educator Desk (`/educator`)
* **Classroom Roster Overview:** Monitor student engagement, messages sent, and vocabulary growth.
* **IEP Target Mapping:** Map student activity metrics directly to Individualized Education Program (IEP) goals.
* **Accommodation Preset Trigger:** Remotely deploy font, spacing, and contrast adjustments across student workspaces.

---

## 🛡️ Data Persistence & State Schema

PenPal uses `localStorage` to simulate database persistence across student, parent, and educator sessions:

| Storage Key | Data Type | Description |
| :--- | :--- | :--- |
| `penpal_a11y_settings` | `AccessibilitySettings` | Global visual theme, font choice, spacing values, ruler preferences, and TTS speed |
| `penpal_auth_user` | `User` | Active user persona simulation (`"Alex"`, `"Sarah"`, or `"Mr. Henderson"`) |
| `penpal_messages` | `Message[]` | Array of sent/received P2P messages, translations, and syllable metadata |
| `penpal_messages_sent_count` | `number` | Total number of messages dispatched by the learner |
| `penpal_quiz_points` | `number` | Accumulated points earned from cooperative activities |
| `penpal_learned_vocab` | `string[]` | Array of mastered Spanish vocabulary words |

When a parent or educator updates settings in their portal, changes write to `penpal_a11y_settings` and instantly update the learner's interface via `AccessibilityContext`.

---

## 🛠️ Project Architecture & Directory Tree

```
/
├── public/                     # Static assets & favicon icons
├── src/
│   ├── app/                    # Next.js App Router Pages
│   │   ├── layout.tsx          # Root layout wrapped with Accessibility & Auth Providers
│   │   ├── page.tsx            # Role Simulation Landing Page
│   │   ├── dashboard/          # Learner Interactive Workspace
│   │   │   └── page.tsx
│   │   ├── parent/             # Parent Progress & Remote Settings Portal
│   │   │   └── page.tsx
│   │   └── educator/           # SEN Educator Dashboard
│   │       └── page.tsx
│   ├── components/             # Reusable UI Primitives
│   │   ├── NavigationHeader.tsx# Universal simulation role navigation bar
│   │   └── a11y/
│   │       ├── A11yWidget.tsx  # Floating Adaptation Center configuration drawer
│   │       └── ReadingRuler.tsx# Cursor-tracking reading ruler overlay
│   ├── context/                # Global React Contexts
│   │   ├── AccessibilityContext.tsx # Centralized typography, theme & ruler state
│   │   └── AuthContext.tsx     # Mock role switcher & user session context
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useSpeech.ts        # Browser SpeechSynthesis & SpeechRecognition wrapper
│   │   └── useMatch.ts         # P2P state machine, mock bot engine & storage sync
│   └── styles/
│       └── globals.css         # CSS custom properties & global styles
├── LICENSE                     # MIT License
├── next.config.mjs             # Next.js configuration
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS Tailwind plugin configuration
├── tailwind.config.js          # Tailwind CSS theme extensions
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## 💻 Code Implementation Highlights

### 1. Dynamic Accessibility Provider (`AccessibilityContext.tsx`)
Manages custom typography, spacing, themes, and reading ruler settings, binding them dynamically to root CSS custom properties.

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

// Applies settings directly to document element custom CSS properties
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
```

### 2. Multi-Sensory Web Speech Hook (`useSpeech.ts`)
Wraps browser Web Speech APIs (`SpeechSynthesis` and `SpeechRecognition`), incorporating configurable playback rates and speech-to-text input fallbacks.

```typescript
export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback(
    (text: string, lang = "es-ES") => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      window.speechSynthesis.cancel(); // Clear queued utterances

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Adapted speech speed for learners

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  return { speak, isPlaying, isListening, startListening };
};
```

### 3. Interactive P2P Match Hook (`useMatch.ts`)
Handles message dispatch, local storage synchronization, simulated automated penpal responses, and vocabulary metrics tracking.

```typescript
export const useMatch = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updated = [...messages, newMessage];
    setMessages(updated);
    localStorage.setItem("penpal_messages", JSON.stringify(updated));

    // Simulated penpal response after 4 seconds
    setTimeout(() => {
      const responseText = getSimulatedResponse(text);
      // Append bot response and update progress metrics
    }, 4000);
  };

  return { partner, messages, sendMessage, clearChat };
};
```

---

## ⚙️ Local Setup & Installation Guide

Follow these steps to set up PenPal locally on your development machine:

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher (or `yarn` / `pnpm`)

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🧪 Development & Production Scripts

In the project root directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server at [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Compiles the production build for deployment |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs Next.js ESLint checks across source code |

---

## 🤝 Contribution & Accessibility Guidelines

We welcome contributions from developers, designers, accessibility advocates, and educators!

### Accessibility Requirements for PRs:
1. **WCAG 2.1 AA Compliance:** All new UI elements must maintain adequate contrast ratios across all pastel and dark themes.
2. **Keyboard Navigability:** Interactive controls must be reachable and triggerable using standard `Tab`, `Space`, and `Enter` keys.
3. **Semantic Markup & ARIA:** Use proper HTML tags (`<main>`, `<nav>`, `<button>`) and descriptive `aria-label` / `aria-hidden` attributes.

---

## 📄 License

This project is open source and available under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Building inclusive language tools for every mind.
</p>
