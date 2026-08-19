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
- [👥 Target Audiences & Three Portal Roles](#-target-audiences--three-portal-roles)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Core Features & User Portals](#-key-core-features--user-portals)
- [🛡️ Privacy & Local State Persistence](#️-privacy--local-state-persistence)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Deep Dive Developer Implementation Examples](#-deep-dive-developer-implementation-examples)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Target Audiences & Three Portal Roles

Our branding and feature sets are carefully tailored across three dedicated client portals:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Learner Portal    │      │ Parent Portal     │      │ Educator Portal   │
   │  (`/dashboard`)   │      │   (`/parent`)     │      │   (`/educator`)   │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Students (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (including **OpenDyslexic**), custom character/word/line spacing, an interactive highlight Reading Ruler, syllable breakdown tools, and bimodal dictation utilities to eliminate spelling anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a dedicated parent analytics panel showing vocabulary growth, message volume, and customizable remote font/theme adjustments to co-configure their child's workspace.

### 3. Special Education Needs (SEN) School Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative progress, and export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed codebase featuring structured React Contexts, custom Web Speech hooks, semantic HTML layouts, and fully keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography & Spacing
* **Dyslexia-Optimized Font-Face:** Dynamic typeface selector including **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation), clean sans-serif layouts, and system standard typography.
* **Interactive Spacing Controls:** Granular custom CSS properties regulating letter-tracking (`--letter-spacing-current`), word-spacing (`--word-spacing-current`), and line-height (`--line-height-current`), designed specifically to reduce visual crowding effects.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft anti-glare cream (`#FCF9F2`), pastel blue (`#EBF4F6`), pastel leaf green (`#F1F7ED`), or high-contrast slate dark (`#0D0D0D`) themes designed to eliminate harsh screen glare and help students focus.
* **Interactive Reading Ruler:** A customizable overlay focus strip with adjustable height (`readingRulerHeight`) that tracks vertical cursor movement, dimming the surrounding viewport to guide the reader's eyes smoothly across text lines.
* **Distraction-Free Mode:** Instantly hides side navigation, decorative stats, and background elements, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously displays written text and plays natural-tempo Spanish voice audio, helping map graphemes directly to phonemes.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts, encouraging self-paced comprehension.

---

## 🚀 Key Core Features & User Portals

### 1. Interactive Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Matching:** Vetted matching with international partners (such as *Mateo from Madrid*). Includes structured conversation frames and translation assists.
* **Word Breakdown Tooltip Desk:** Clicking any word in the chat immediately reveals a color-coded syllable breakdown, phonetic transcriptions, and localized translation.
* **Syllable Color Scaffolding:** Visually separates syllables in alternating colors (e.g., **fút · bol** in rose/emerald blocks) to make pronunciation patterns intuitive.
* **Asynchronous Writing Scaffolds:** Expandable writing helpers featuring Spanish sentence frames (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestion chips.
* **Cooperative Quizzes:** Stress-free, collaborative matching activities solved with partner dialogue hints instead of competitive timers.

### 2. Parent Progress & Insights Board (`/parent`)
* **Confidence Metrics Tracker:** Visual summary of the child's reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Override Controls:** Parents can remotely customize default contrast themes, text-scaling, and vocal playback speeds to align with their child's daily stamina.
* **Portfolio Exporter:** One-click generation of progress reports to share with clinical teams or educators.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time visibility of student progression against set targets.
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage) to formal IEP objectives.
* **Accommodation Override Controls:** Remotely adjust student font profiles, zoom scales, or default high-contrast layouts.

---

## 🛡️ Privacy & Local State Persistence

To prioritize visual security and keep our application entirely self-contained, **PenPal utilizes browser local storage (`localStorage`)** to mock database persistence, peer-to-peer messaging, student progress metrics, and cross-portal settings dynamically.

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

### Managed Storage Keys:
* **`penpal_messages_sent_count`**: Tracks total messages dispatched by the learner to update progress metrics across all portals.
* **`penpal_quiz_points`**: Persists gamified point scores earned through cooperative language activities.
* **`penpal_learned_vocab`**: Array of acquired vocabulary words saved during interactive chat sessions.
* **`penpal_messages`**: JSON record of peer-to-peer conversation history between the student and penpal.
* **`penpal_a11y_settings`**: Global accessibility configuration object synchronizing fonts, spacing, themes, reading ruler, and speech settings across all client portals.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is engineered to be modern, modular, and extensible. We leverage **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

### **Directory Blueprint**

```
/
├── public/                 # Static assets (accessibility fonts, vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Root layout with Accessibility & Auth context providers
│   │   ├── page.tsx        # Homepage introducing Role Simulator
│   │   ├── dashboard/      # Dyslexic Learner Interactive Portal
│   │   ├── educator/       # SEN Educator & IEP Management Portal
│   │   └── parent/         # Parent Progress & Remote Accommodation Portal
│   ├── components/         # Modular React UI Components
│   │   ├── a11y/           # ReadingRuler, AccessibilityToolbar, SyllableBreakdown
│   │   └── NavigationHeader.tsx # Role selector navigation bar
│   ├── context/            # React Global State Management
│   │   ├── AccessibilityContext.tsx # Centralized accessibility state & CSS variable engine
│   │   └── AuthContext.tsx          # Mock role authentication context
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper for TTS & Speech Recognition
│   │   └── useMatch.ts     # PenPal chat state machine & simulation engine
│   └── styles/             # Global Styling Rules
│       └── globals.css     # CSS custom properties & utility styles
├── LICENSE                 # MIT License Document
├── package.json            # Node dependencies & npm scripts
├── postcss.config.js       # PostCSS configuration for Tailwind
├── tailwind.config.js      # Custom theme and color extension settings
└── tsconfig.json           # TypeScript configuration
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Dynamic Accessibility Context Engine (`AccessibilityContext.tsx`)
This context provider orchestrates visual variables across the entire application viewport, dynamically mapping user overrides onto root custom CSS variables and persisting settings to `localStorage`.

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

  // Sync with localStorage and document DOM variables
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

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
```

### 2. Low-Latency Web Speech Hook (`useSpeech.ts`)
This custom hook abstracts browser voice synthesis and speech recognition, integrating user-selected speech rate settings for low-stress auditory learning.

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
      utterance.rate = speechSpeed; // Slower or custom rate tailored for dyslexia

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  return { speak, stop, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Local Installation & Environment Setup

Follow these steps to set up and run PenPal locally on your machine.

### Prerequisites
* **Node.js** (v18.x or later recommended)
* **npm**, **yarn**, or **pnpm** package manager

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
Open [http://localhost:3000](http://localhost:3000) in your browser to view and interact with the application.

### 4. Build for Production
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility researchers, designers, and educators!

1. **Fork the Repository** and create a feature branch (`feature/reading-ruler-enhancements`).
2. **Commit Changes:** Write clear, informative commit messages explaining your modifications.
3. **Maintain High Accessibility Standards:** All newly added components must adhere to WCAG 2.1 AA guidelines, provide appropriate `aria-*` attributes, and remain fully keyboard navigable.
4. **Submit a Pull Request:** Detail your changes and reference any related issues.

---

## 📄 License

This software is open-source, licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
