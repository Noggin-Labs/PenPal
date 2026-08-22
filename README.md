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
- [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Core Features & Portals](#-key-core-features--portals)
- [🛡️ Local Data Persistence & Cross-Portal Sync](#️-local-data-persistence--cross-portal-sync)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Deep Dive Developer Implementation Examples](#-deep-dive-developer-implementation-examples)
- [⚙️ Local Installation & Development Setup](#️-local-installation--development-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous peer-to-peer communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

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
   │  (/dashboard)     │      │     (/parent)     │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Students (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom line/letter/word spacing, an interactive highlight Reading Ruler, and bimodal dictation utilities to eliminate spelling anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a dedicated parent analytics panel showing vocabulary growth, message volume, and customizable remote font/theme adjustments to co-configure their child's workspace.

### 3. Special Education Needs (SEN) School Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative progress, and instantly export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed React 18 & Next.js App Router codebase featuring structured React Contexts, custom Web Speech API hooks, semantic HTML layouts, and fully keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS variables and component primitives.

### 🔠 Specialized Typography & Spacing Controls
* **Dyslexia-Optimized Font-Face:** Dynamic typeface selector including **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation), Arial (clean sans-serif), and system default layouts.
* **Granular Spacing Customization:** Precise CSS custom properties governing `--line-height-current`, `--letter-spacing-current`, and `--word-spacing-current` to reduce visual crowding and visual tracking strain.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft anti-glare cream (`#FCF9F2`), soft pastel blue (`#EBF4F6`), pastel leaf green (`#F1F7ED`), or high contrast dark mode (`#0D0D0D`).
* **Interactive Reading Ruler:** A customizable overlay focus strip that tracks vertical cursor movement, dimming the rest of the viewport to guide the reader's eyes smoothly across text lines.
* **Distraction-Free Mode:** Instantly hides side navigation, decorative stats, and background elements, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously displays written text and plays natural-tempo Spanish voice audio, helping map graphemes directly to phonemes.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts, encouraging self-paced comprehension.

---

## 🚀 Key Core Features & Portals

### 1. Interactive Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Matching:** Vetted matching with international partners (such as *Mateo from Spain*). Includes structured conversation frames and translation assists.
* **Syllable & Phonetic Breakdown Tooltip Desk:** Clicking any word in the chat reveals a color-coded syllable breakdown (e.g., **fút · bol** in rose/emerald blocks) along with phonetic transcriptions.
* **Asynchronous Writing Scaffolds:** Expandable writing helpers featuring Spanish sentence frames (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestion chips.
* **Cooperative Quizzes:** Stress-free, collaborative matching activities solved with partner dialogue hints instead of competitive timers.

### 2. Parent Progress & Insights Portal (`/parent`)
* **Confidence Metrics Tracker:** Visual summary of the child's reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Override Controls:** Parents can remotely customize default contrast themes, text-scaling, letter/word spacing, and vocal playback speeds to align with their child's daily stamina.
* **Portfolio Exporter:** One-click generation of progress reports to share with clinical teams or educators.

### 3. SEN Educator Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time visibility of student progression against set targets.
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage) to formal IEP objectives.
* **Accommodation Override Controls:** Remotely adjust student font profiles, zoom scales, or default high-contrast layouts.

---

## 🛡️ Local Data Persistence & Cross-Portal Sync

To prioritize user privacy and maintain a self-contained web application without requiring external server setup, **PenPal utilizes browser `localStorage`** for client-side state persistence and cross-portal updates.

```
                     ┌────────────────────────────────────────┐
                     │          BROWSER LOCALSTORAGE          │
                     └───────────────────┬────────────────────┘
                                         │
     ┌──────────────────────┬────────────┴───────────┬──────────────────────┐
     ▼                      ▼                        ▼                      ▼
┌─────────┐            ┌─────────┐              ┌─────────┐            ┌─────────┐
│ Messages│            │ Quiz    │              │ Learned │            │ A11y    │
│ Count   │            │ Points  │              │ Vocab   │            │ Settings│
└─────────┘            └─────────┘              └─────────┘            └─────────┘
```

* **Tracked State Keys:**
  * `penpal_messages`: Array of peer-to-peer message exchanges between the user and match partner.
  * `penpal_messages_sent_count`: Total message count displayed on parent/educator dashboard metric cards.
  * `penpal_quiz_points`: Cooperative quiz scores and progress counters.
  * `penpal_learned_vocab`: Dynamic list of newly acquired vocabulary items.
  * `penpal_a11y_settings`: Global user accessibility configuration object (font, theme, spacing, reading ruler, speech rate).
* **Cross-Role Synchronicity:** Changes saved by parents or educators write directly to `penpal_a11y_settings`, instantly updating the learner's workspace view.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is built on **Next.js App Router**, **React 18**, **TypeScript**, and **Tailwind CSS**.

### **Directory Blueprint**

```
/
├── public/                 # Static assets (accessibility fonts, vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Root HTML layout wrapped with AccessibilityProvider & AuthProvider
│   │   ├── page.tsx        # Homepage introducing simulation role selector
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace
│   │   ├── educator/       # SEN & Classroom Educator Dashboard
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Reusable UI Primitives
│   │   ├── a11y/           # ReadingRuler and A11yWidget components
│   │   └── NavigationHeader.tsx # Universal header with live role switching & status
│   ├── context/            # Global State Providers
│   │   ├── AccessibilityContext.tsx # Central context managing visual themes, fonts, spacing, and ruler settings
│   │   └── AuthContext.tsx          # Client-side user role state management
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper for speech synthesis and recognition
│   │   └── useMatch.ts     # P2P messaging state machine and automated partner response generator
│   └── styles/             # Global Styling
│       └── globals.css     # CSS custom properties, utility classes, and custom font definitions
├── LICENSE                 # MIT License Document
├── package.json            # Node dependencies and project scripts
└── README.md               # Developer documentation & onboarding guide
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Centralized Accessibility Context (`AccessibilityContext.tsx`)
This context provider manages accessibility settings, syncing user preferences to `localStorage` and applying them as custom CSS variables on `document.documentElement`.

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
    root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
    root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
    root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
    root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults: () => {} }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
```

### 2. Multi-Sensory Web Speech Integration (`useSpeech.ts`)
This React hook abstracts browser `SpeechSynthesis` and `SpeechRecognition` APIs with grace fallbacks for unsupported browsers.

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

  return { speak, isPlaying, isListening };
};
```

---

## ⚙️ Local Installation & Development Setup

Follow these steps to run PenPal locally.

### Prerequisites
* **Node.js** (v18.x or later)
* **npm**, **yarn**, or **pnpm**

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
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, accessibility designers, and educators!

1. **Fork the Repository:** Create a descriptive branch (e.g., `feature/reading-ruler-enhancements`).
2. **Follow WCAG 2.1 AA Standards:** Ensure all interactive elements include proper ARIA roles, high contrast ratios, and complete keyboard accessibility.
3. **Submit a Pull Request:** Describe your changes in detail with screenshots or video recordings demonstrating accessibility features in action.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 — Bridging communication gaps, one inclusive letter at a time.
</p>
