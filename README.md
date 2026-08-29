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
- [👥 Target Audiences & Portals](#-target-audiences--portals)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Core Features](#-key-core-features)
- [🛡️ State & Mock Data Persistence](#️-state--mock-data-persistence)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Developer Code Implementation Deep Dive](#-developer-code-implementation-deep-dive)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous peer-to-peer communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Target Audiences & Portals

Our branding and feature sets are carefully tailored to support four primary user categories through dedicated portals:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parents/Guardians │      │ SEN Departments   │
   │   (/dashboard)    │      │     (/parent)     │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Students (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom character/word/line spacing, an interactive highlight Reading Ruler, and bimodal dictation utilities to eliminate spelling anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a dedicated parent analytics panel showing vocabulary growth, message volume, and customizable remote font/theme adjustments to co-configure their child's workspace.

### 3. Special Education Needs (SEN) School Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative progress, and instantly export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed TypeScript codebase featuring structured React Contexts, custom Web Speech hooks, semantic HTML layouts, and fully keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography & Spacing
* **Dyslexia-Optimized Font Selector:** Choose between **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation), clean sans-serif (Arial), or system standard fonts.
* **Granular Spacing Controls:** Adjust letter-spacing, word-spacing, line-height, and overall text zoom (`fontSizeMultiplier`) to eliminate visual crowding.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Themes:** Soft Cream (`#FCF9F2`), Pastel Blue (`#EBF4F6`), Pastel Green (`#F1F7ED`), or High Contrast (`#0D0D0D` dark mode) to reduce visual stress and glare.
* **Interactive Reading Ruler:** A height-adjustable focus strip that follows the cursor, helping learners track lines of text without visual distraction.
* **Distraction-Free Mode:** Hides non-essential UI elements to create an ultra-focused reading and writing canvas.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously read and listen to natural Spanish audio playback with speed controls (`0.75x`, `0.8x`, `1.0x`).
* **No-Stress Timers:** Replaces pressure countdowns with self-paced, asynchronous penpal interaction prompts.

---

## 🚀 Key Core Features

### 1. Interactive Learner Dashboard (`/dashboard`)
* **Peer-to-Peer PenPal Matching:** Safe simulated penpal messaging with international peers (e.g., *Mateo from Madrid*). Includes sentence starter prompts and contextual translations.
* **Interactive Word Breakdown Tooltip:** Click any word in messages to view color-coded syllable breakdowns, phonetic guides, and translations.
* **Syllable Scaffolding:** Visually separates syllables using distinct background color blocks to simplify decoding.
* **Bimodal Dictation & Speech Synthesis:** Built-in speech-to-text input and text-to-speech audio reader powered by Web Speech APIs.

### 2. Parent Progress & Insights Board (`/parent`)
* **Analytics Tracker:** Summarizes total messages exchanged, quiz points earned, and learned vocabulary count.
* **Remote Visual Settings Control:** Adjust accessibility settings remotely to support your child's visual stamina.
* **Progress Report Export:** Export learner achievements for school meetings or therapist reviews.

### 3. SEN Educator & Classroom Desk (`/educator`)
* **Student Roster & IEP Goals:** Track progress against individualized learning milestones.
* **Classroom-Wide Accommodation Overrides:** Seamlessly apply accessibility presets across student profiles.

---

## 🛡️ State & Mock Data Persistence

PenPal is a self-contained web application. State persistence and cross-portal updates rely on structured `localStorage` keys:

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │ Learner Progress │          │ Visual Settings  │          │   Auth & User    │
  │   & Messages     │          │  Accommodation   │          │   Role Context   │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

### Key Storage Schema
* `penpal_a11y_settings`: Stores global typography, theme, spacing, and reading ruler configuration.
* `penpal_messages`: Persists the chat history between the learner and penpal.
* `penpal_messages_sent_count`: Tracks total sent messages count.
* `penpal_quiz_points`: Stores quiz points accumulated by the learner.
* `penpal_learned_vocab`: Stores saved vocabulary words in the learner's personal dictionary.
* `penpal_auth_user`: Manages active user authentication session state (`learner`, `parent`, `educator`).

---

## 🛠️ Technical Architecture & Directory Structure

Built using **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
/
├── public/                 # Static assets and accessibility fonts
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   │   ├── layout.tsx      # Base layout with Accessibility & Auth providers
│   │   ├── page.tsx        # Docking station / landing page
│   │   ├── dashboard/      # Dyslexic Learner Workspace
│   │   ├── educator/       # SEN Educator & Classroom Workspace
│   │   └── parent/         # Parent Analytics & Visual Setup Portal
│   ├── components/         # UI Primitives & Accessibility Overlay Widgets
│   │   ├── a11y/           # Reading Ruler, Spacing Controls, Theme Selectors
│   │   └── NavigationHeader.tsx # Multi-portal switching navigation header
│   ├── context/            # React Context Providers
│   │   ├── AccessibilityContext.tsx # Centralized store for visual and font settings
│   │   └── AuthContext.tsx          # Mock authentication & user role switching
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Bimodal text-to-speech & speech-to-text wrapper
│   │   └── useMatch.ts     # Penpal state machine & mock automated responder
│   └── styles/             # Global Tailwind and custom accessibility CSS variables
│       └── globals.css
├── LICENSE                 # MIT License
├── package.json            # Node.js dependencies & scripts
└── README.md               # Developer documentation & setup guide
```

---

## 💻 Developer Code Implementation Deep Dive

### 1. Centralized Accessibility Provider (`src/context/AccessibilityContext.tsx`)

Manages custom visual CSS variables dynamically on `document.documentElement`:

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

// Applies variables dynamically to root style properties
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

### 2. Web Speech API Wrapper Hook (`src/hooks/useSpeech.ts`)

Encapsulates speech synthesis (`speak`, `stop`) and speech recognition (`startListening`) with fallback support:

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

      window.speechSynthesis.cancel();
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

## ⚙️ Local Installation & Environment Setup

### Prerequisites
* **Node.js**: `v18.x` or higher
* **npm**: `v9.x` or higher

### 1. Clone Repository
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
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, accessibility designers, and educators!

1. **Fork the repository** and create your branch (`git checkout -b feature/accessible-enhancement`).
2. **Follow WCAG 2.1 AA Standards:** Ensure keyboard focus management, appropriate ARIA attributes, and sufficient contrast ratios.
3. **Commit clearly:** Provide detailed commit messages explaining your changes.
4. **Open a Pull Request:** Describe your changes and link relevant issues.

---

## 📄 License

This project is licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
