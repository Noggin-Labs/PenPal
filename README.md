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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia and visual processing differences. By combining web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Multi-Portal Architecture & Core Features](#-multi-portal-architecture--core-features)
- [🛡️ Privacy & LocalStorage Persistence Schema](#️-privacy--localstorage-persistence-schema)
- [🛠️ Directory Blueprint](#️-directory-blueprint)
- [💻 Developer Implementation Snippets](#-developer-implementation-snippets)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

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

### 1. Dyslexic & Neurodivergent Students
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom character/word spacing, an interactive highlight ruler, and bimodal dictation utilities to eliminate spelling anxiety.

### 2. Parents & Guardians
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a dedicated parent analytics panel showing vocabulary growth, message volume, and customizable remote font/theme adjustments to co-configure their child's workspace.

### 3. Special Education Needs (SEN) School Departments & Educators
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative progress, and instantly export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed codebase featuring structured React Contexts, custom Web Speech hooks, semantic HTML layouts, and fully keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography & Spacing
* **Dyslexia-Optimized Font-Face:** Dynamic typeface selector including **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation) alongside clean sans-serif layouts.
* **Granular Spacing Controls:** Custom properties regulating line height (`--line-height-current`), letter spacing (`--letter-spacing-current`), word spacing (`--word-spacing-current`), and font size scaling (`--font-size-multiplier`).

### 🎨 Visual Comfort & Contrast Overlays
* **Irlen-Friendly Warm Pastel Backgrounds:** Switch between warm anti-glare cream (`#FCF9F2`), soft pastel blue (`#EBF4F6`), leaf green (`#F1F7ED`), or high-contrast dark mode (`#0D0D0D`).
* **Interactive Reading Ruler:** Adjustable focus guide with variable highlight strip heights (30px - 60px) that tracks cursor position to prevent line skipping.
* **Distraction-Free Workspace:** Toggle mode that suppresses non-essential UI elements and statistics to focus strictly on reading and writing.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously displays written text and plays natural-tempo voice audio (via Web Speech API) to reinforce grapheme-to-phoneme mapping.
* **Low-Stress Interaction:** Eliminates rapid countdown clocks and competitive pressure in favor of self-paced asynchronous communication and cooperative activities.

---

## 🚀 Multi-Portal Architecture & Core Features

PenPal serves three main client portals connected seamlessly via shared state:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Learner Portal    │      │ Parent Portal     │      │ Educator Portal   │
   │  (/dashboard)     │      │  (/parent)        │      │  (/educator)      │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Interactive Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Exchange:** Engage in safe, structured correspondence with international PenPals (such as *Mateo from Madrid*).
* **Word Breakdown Tooltip Desk:** Interactive color-coded syllable breakdown (e.g., **fút · bol**), phonetic transcription, and localized translation hints.
* **Asynchronous Writing Scaffolds:** Sentence starter frames and quick-insert vocabulary chips to build writing confidence.
* **Cooperative Quizzes:** Stress-free matching games that award points and track learned vocabulary without time pressure.

### 2. Parent Progress & Insights Portal (`/parent`)
* **Confidence & Activity Metrics:** Live summary of messages dispatched, vocabulary acquired, and quiz points earned.
* **Remote Visual Settings Control:** Parents can adjust typography parameters, color themes, or speech playback speeds on behalf of the learner.
* **Portfolio & Report Exporter:** One-click summary generation for IEP reviews or clinical progress tracking.

### 3. SEN Educator & Classroom Desk (`/educator`)
* **Student Roster Management:** Overview of student activity, reading stamina, and vocabulary expansion.
* **IEP Target Integration:** Map penpal exchanges directly to individualized education program goals.
* **Classroom Accommodation Overrides:** Synchronize accessibility profiles across entire student cohorts.

---

## 🛡️ Privacy & LocalStorage Persistence Schema

PenPal is designed to be fully functional without external backend dependencies by utilizing browser `localStorage` keys to persist state and mock cross-portal synchronization:

| LocalStorage Key | Purpose & Data Structure |
| :--- | :--- |
| `penpal_a11y_settings` | Stores user's accessibility preferences (font, line height, letter/word spacing, theme color, reading ruler toggle, speech rate). |
| `penpal_messages` | Stores chat message history exchanged with PenPals. |
| `penpal_messages_sent_count` | Number counter tracking total messages dispatched by the student. |
| `penpal_quiz_points` | Cumulative score earned from cooperative learning quizzes. |
| `penpal_learned_vocab` | Array of saved vocabulary words mastered by the learner. |

---

## 🛠️ Directory Blueprint

```
/
├── public/                 # Static assets (accessibility fonts, vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Base layout wrapped with Accessibility & Auth providers
│   │   ├── page.tsx        # Role selection & portal switcher landing page
│   │   ├── dashboard/      # Dyslexic Learner Workspace
│   │   ├── educator/       # SEN Educator Dashboard
│   │   └── parent/         # Parent Insights & Remote Settings Portal
│   ├── components/         # Reusable UI Primitives
│   │   ├── a11y/           # Reading Ruler and Accessibility Controls Widget
│   │   │   ├── A11yWidget.tsx
│   │   │   └── ReadingRuler.tsx
│   │   └── NavigationHeader.tsx # Role navigation bar
│   ├── context/            # React Global State Contexts
│   │   ├── AccessibilityContext.tsx # Central store managing visual/audio settings & theme DOM mapping
│   │   └── AuthContext.tsx          # Role-based context switcher
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper for speech synthesis & recognition
│   │   └── useMatch.ts     # PenPal chat state machine & mock partner response generator
│   └── styles/             # Global Styling
│       └── globals.css     # CSS custom properties and OpenDyslexic @font-face declarations
├── LICENSE                 # MIT License Document
├── package.json            # Dependencies and npm scripts
└── README.md               # Project documentation
```

---

## 💻 Developer Implementation Snippets

### 1. Dynamic Accessibility Context (`src/context/AccessibilityContext.tsx`)
Manages accessibility settings state, persists to `localStorage`, and updates DOM root CSS custom properties dynamically:

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

interface AccessibilityContextProps extends AccessibilitySettings {
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  resetToDefaults: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

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

    // Dynamically apply theme background, text, card, and border CSS variables...
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
```

### 2. Speech Synthesis & Dictation Hook (`src/hooks/useSpeech.ts`)
Abstracts Web Speech API for auditory bimodal assistance and speech recognition:

```typescript
"use client";

import { useState, useCallback } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback(
    (text: string, lang = "es-ES") => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Synchronized with user's speech speed setting

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  return { speak, isPlaying, isListening, startListening, stop };
};
```

---

## ⚙️ Local Installation & Environment Setup

### Prerequisites
* **Node.js** (v18.x or later)
* **npm**, **pnpm**, or **yarn**

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
Open [http://localhost:3000](http://localhost:3000) in your browser to access PenPal.

### 4. Build & Verify Production Output
```bash
npm run build
npm run lint
```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility advocates, educators, and designers!

1. **Fork the Repository:** Create a feature branch (`git checkout -b feature/reading-ruler-enhancement`).
2. **Follow Accessibility Standards:** Ensure all UI components maintain WCAG 2.1 AA compliance, include semantic ARIA attributes, and support full keyboard navigation.
3. **Test Local State Synchronization:** Test across Learner, Parent, and Educator portals to ensure state updates mirror accurately.
4. **Submit a Pull Request:** Provide a clear description of the feature or bug fix.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
