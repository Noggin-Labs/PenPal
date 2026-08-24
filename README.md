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

**PenPal** is an adaptive, social-first language learning platform engineered specifically for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, customizable visual overlays, and safe social connectivity, PenPal transforms foreign language acquisition from a source of cognitive anxiety into an engaging, supportive, and empowering journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Client Portals](#-target-audiences--client-portals)
- [🧩 Dyslexia-Friendly Accessibility & Design System](#-dyslexia-friendly-accessibility--design-system)
- [🚀 Core Features & Portals Breakdown](#-core-features--portals-breakdown)
  - [1. Learner Workspace (`/dashboard`)](#1-learner-workspace-dashboard)
  - [2. Parent Progress & Insights Board (`/parent`)](#2-parent-progress--insights-board-parent)
  - [3. SEN Educator & Administration Desk (`/educator`)](#3-sen-educator--administration-desk-educator)
- [🛡️ State Persistence & LocalStorage Synchronization](#️-state-persistence--localstorage-synchronization)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Developer Implementation Snippets](#-developer-implementation-snippets)
- [⚙️ Local Installation & Setup](#️-local-installation--setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense walls of text, high-contrast glaring interfaces, rapid gamified timers, and harsh penalty mechanics. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard user interfaces create high cognitive friction, resulting in visual fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By incorporating customizable pastel color themes, granular typographic adjustments (font choice, line/letter/word spacing), an interactive Reading Ruler, bimodal auditory support (synchronized Speech-to-Text and Text-to-Speech), syllable breakdown tooltips, and stress-free asynchronous peer communication, PenPal delivers a inclusive space where students feel confident, motivated, and fully supported.

---

## 👥 Target Audiences & Client Portals

PenPal is architected around three interconnected client portals matching core stakeholder personas:

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

| Role / Target Audience | Primary Focus & Tone | Key Capabilities & Features |
| :--- | :--- | :--- |
| **Dyslexic Learners** | *Warm, encouraging, low-stress, playful* | OpenDyslexic typography, bimodal dictation, syllable scaffolding tooltips, asynchronous pen pal messaging, cooperative quizzes. |
| **Parents & Guardians** | *Supportive, reassuring, informative* | Real-time tracking of vocabulary gains and message metrics, remote accommodation configuration, portfolio progress export. |
| **SEN Educators & Schools** | *Professional, data-driven, IEP-aligned* | Roster analytics, direct IEP goal mapping, bulk/remote accommodation overrides, qualitative progress logging. |
| **Accessibility Advocates & Devs** | *Modular, clean, compliant* | Strongly-typed React Contexts, custom Web Speech API hooks, full keyboard accessibility, semantic HTML structure. |

---

## 🧩 Dyslexia-Friendly Accessibility & Design System

Accessibility is not an afterthought in PenPal—it is embedded directly into its design system, React state hierarchy, and component primitives.

### 🔠 Specialized Typography & Spacing Controls
* **Dyslexia-Optimized Font Support:** Includes **OpenDyslexic** (weighted baselines to reduce letter flipping/rotation), standard sans-serif (`Arial`), and system fonts.
* **Granular Spacing Adjustments:** Real-time controls for line-height (`lineHeight`), letter-spacing (`letterSpacing`), word-spacing (`wordSpacing`), and global text scaling (`fontSizeMultiplier`).

### 🎨 Visual Comfort & Anti-Glare Themes
* **Irlen-Friendly Pastel Overlays:** Four distinct visual display themes designed to eliminate harsh screen glare:
  * **Warm Cream** (`#FCF9F2` background, `#2D2A24` soft charcoal text)
  * **Pastel Blue** (`#EBF4F6` background, `#1E293B` text)
  * **Pastel Green** (`#F1F7ED` background, `#1C2D1F` text)
  * **High Contrast** (`#0D0D0D` dark background, `#F3F4F6` light text)
* **Interactive Reading Ruler:** A positionable focus ruler overlay (`readingRulerEnabled`, `readingRulerHeight`) that tracks cursor movement and dims non-focused content to guide reading line-by-line.
* **Distraction-Free Mode:** Instantly toggles non-essential visual elements (navigation bars, side widgets, stats) to minimize cognitive load during writing sessions.

### 🧠 Bimodal Multi-Sensory Scaffolding
* **Bimodal Dictation & Speech:** Integrated Web Speech API (`useSpeech`) hook enabling both Text-to-Speech (TTS) auditory playback and Speech-to-Text (STT) voice-to-writing input.
* **Syllable & Phonetic Decomposition:** Interactive tooltip overlays providing syllable color breakdown (e.g., `fút · bol`), phonetic guides, and localized translations for foreign vocabulary.

---

## 🚀 Core Features & Portals Breakdown

### 1. Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Communications:** Vetted pen pal chat (e.g., *Mateo from Madrid*) featuring asynchronous messaging, speech-to-text dictation, and sentence starters.
* **Word Breakdown Tooltips:** Click any Spanish word to inspect its color-segmented syllables, pronunciation, and English translation.
* **Cooperative Learning Quizzes:** Low-pressure, hint-assisted matching activities that award non-competitive points (`penpal_quiz_points`).
* **Saved Vocabulary Notebook:** One-click saving of learned words into a persistent personal notebook (`penpal_learned_vocab`).

### 2. Parent Progress & Insights Board (`/parent`)
* **Engagement & Activity Analytics:** Real-time visibility into message activity, quiz scores, and saved vocabulary items.
* **Remote Visual Accommodations:** Parents can customize font choice, spacing parameters, contrast themes, and speech playback speed (`speechSpeed`) for their child's sessions.
* **Progress Report Exporters:** Instant export of summarized learning achievements for sharing with educators or clinical specialists.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Overview:** Monitor individual student metrics, reading stamina trends, and active accommodations.
* **IEP (Individualized Education Program) Mapping:** Align platform milestones (message volume, vocabulary retention, reading ruler usage) directly to formal IEP goals.
* **Remote Accommodation Overrides:** Adjust accessibility settings across individual or grouped student profiles.

---

## 🛡️ State Persistence & LocalStorage Synchronization

PenPal is completely self-contained and utilizes browser `localStorage` to emulate persistent backend database storage and ensure seamless cross-role synchronization between Learner, Parent, and Educator views.

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │ Learner Activity │          │ Parent Remote    │          │ Classroom IEP    │
  │  & Saved Vocab   │          │ Accessibility    │          │ Progress Logs    │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

### **Core LocalStorage Keys**
* **`penpal_a11y_settings`**: Stores global accessibility parameters (font family, line/letter/word spacing, theme color, reading ruler preferences, speech speed, distraction-free mode).
* **`penpal_messages`**: Array of chat message objects exchanged between the learner and their pen pal partner.
* **`penpal_messages_sent_count`**: Counter tracking total messages dispatched by the student.
* **`penpal_quiz_points`**: Cumulative points earned through cooperative practice quizzes.
* **`penpal_learned_vocab`**: Saved list of target vocabulary words collected during reading sessions.

Changes saved in `localStorage` update `AccessibilityContext` and trigger real-time reactive re-renders across all active portals.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
penpal/
├── public/                 # Static assets (fonts, icons, public assets)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Root layout wrapping AccessibilityProvider & AuthProvider
│   │   ├── page.tsx        # Landing / Docking Station simulation page
│   │   ├── dashboard/      # Dyslexic Learner Workspace
│   │   ├── educator/       # SEN Educator & IEP Management Desk
│   │   └── parent/         # Parent Progress & Accommodation Portal
│   ├── components/         # Reusable UI Primitives
│   │   ├── a11y/           # Reading Ruler and Accessibility Floating Controller
│   │   └── NavigationHeader.tsx # Universal portal switcher and top navigation bar
│   ├── context/            # React Contexts (Global State Management)
│   │   ├── AccessibilityContext.tsx # Central store for typography, themes, & ruler
│   │   └── AuthContext.tsx          # Mock user role authorization context
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Bimodal Web Speech API wrapper (TTS & STT)
│   │   └── useMatch.ts     # PenPal partner state machine & simulated response engine
│   └── styles/             # Stylesheets & CSS Custom Property Definitions
│       └── globals.css     # Global styles and Tailwind base configurations
├── LICENSE                 # MIT License Document
├── package.json            # Project dependencies and script declarations
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS theme & font extensions
├── tsconfig.json           # TypeScript configuration
└── README.md               # Repository documentation
```

---

## 💻 Developer Implementation Snippets

### 1. Centralized Accessibility Context (`src/context/AccessibilityContext.tsx`)
Manages reading preferences, themes, and CSS root custom properties with `localStorage` persistence.

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
  fontSizeMultiplier: number; // scale multiplier
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number; // in px
  speechSpeed: number;      // e.g. 0.8, 1.0
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

// ... In Provider: dynamically updates document.documentElement style properties
```

### 2. Web Speech Hook (`src/hooks/useSpeech.ts`)
Encapsulates browser text-to-speech synthesis and speech-to-text recognition with fallback handling.

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
      utterance.rate = speechSpeed; // Slower pace tailored for dyslexic processing

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

## ⚙️ Local Installation & Setup

### **Prerequisites**
* **Node.js**: `v18.x` or higher
* **npm**: `v9.x` or higher (or `yarn` / `pnpm`)

### **1. Clone the Repository**
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Launch Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to test the application.

### **4. Linting & Building for Production**
```bash
# Run ESLint validation
npm run lint

# Compile Next.js production build
npm run build

# Start production server
npm run start
```

---

## 🤝 Contribution Guidelines

We welcome contributions from software engineers, accessibility specialists, UX designers, and SEN educators!

1. **Fork & Branch:** Create a descriptive feature branch (`git checkout -b feature/reading-ruler-enhancement`).
2. **Accessibility Standards:** Ensure all UI elements follow WCAG 2.1 AA specifications (proper contrast, keyboard focus indicators, ARIA labeling, and OpenDyslexic compatibility).
3. **Commit Messages:** Follow standard concise git commit conventions.
4. **Pull Requests:** Describe your changes in detail, link relevant issues, and attach visual verification (screenshots or video recordings) where applicable.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
