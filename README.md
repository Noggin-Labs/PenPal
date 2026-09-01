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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia, visual processing differences, and neurodivergent learning profiles. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive scaffolding, and safe peer-to-peer social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into an empowering, inclusive, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Client Portals](#-target-audiences--client-portals)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Core Features & Portals](#-key-core-features--portals)
- [🛡️ Local Data Persistence & Cross-Portal Synchronization](#️-local-data-persistence--cross-portal-synchronization)
- [🛠️ Technical Architecture & Directory Blueprint](#️-technical-architecture--directory-blueprint)
- [💻 Deep Dive Developer Implementation Examples](#-deep-dive-developer-implementation-examples)
- [⚙️ Local Installation & Development Commands](#️-local-installation--development-commands)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable anti-glare pastel color overlays, fine-grained typography controls, bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, an interactive Reading Ruler focus strip, and stress-free asynchronous peer communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Target Audiences & Client Portals

Our platform provides three dedicated client portals tailored to key stakeholders in a learner's educational journey:

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
* **Experience:** Access to specialized typefaces (including **OpenDyslexic** with weighted baselines to prevent letter-flipping), custom character/word/line spacing, an interactive Reading Ruler, syllable color scaffolding, writing prompts, and bimodal dictation utilities to eliminate spelling anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and informative.
* **Experience:** Real-time visibility into their child's language gains, reading stamina, vocabulary acquisition, and message volume. Features parental override controls to remotely co-configure their child's visual and font accommodation settings.

### 3. Special Education Needs (SEN) School Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings across student rosters, track qualitative milestones, and export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed Next.js codebase featuring structured React Contexts, custom Web Speech API hooks, semantic HTML layouts, CSS custom property overrides, and fully keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS architecture and component primitives.

### 🔠 Specialized Typography & Spacing
* **Dyslexia-Optimized Typefaces:** Dynamic font selector featuring **OpenDyslexic** (specially weighted baseline bottoms to indicate letter orientation and prevent symmetry rotation) as well as clean geometric sans-serif fallbacks.
* **Granular Spacing & Scale Controls:** Live CSS custom property manipulation for letter-tracking, word-spacing, line-height (e.g., 1.8–2.0), and font size multipliers (1.0x–1.3x) specifically configured to eliminate visual crowding.

### 🎨 Visual Comfort & Contrast Control
* **Anti-Glare Pastel Backgrounds:** Choose between Warm Default Cream (`#FCF9F2`), Soft Pastel Blue (`#EBF4F6`), Pastel Leaf Green (`#F1F7ED`), or High Contrast Dark (`#0D0D0D`) themes designed to reduce harsh glare and eye strain.
* **Interactive Reading Ruler:** A positionable visual focus strip (`ReadingRuler.tsx`) with customizable height (30px–60px) that tracks mouse/touch movements, helping guide the reader's line-by-line focus.
* **Distraction-Free Mode:** Instantly hides non-essential navigation, sidebars, and ambient UI elements, leaving only the primary active workspace visible to support sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation (Speech & Text):** Combines written Spanish text with natural-tempo speech synthesis (`useSpeech.ts`), helping learners map graphemes directly to phonemes.
* **Speech Recognition Dictation:** Integrated Web Speech API allows voice-to-text input, reducing mechanical typing friction and spelling apprehension.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with self-paced, asynchronous communication prompts and cooperative activities.

---

## 🚀 Key Core Features & Portals

### 1. Interactive Learner Dashboard (`/dashboard`)
* **Peer-to-Peer PenPal Matching:** Safe, structured conversation experience with international penpals (such as *Mateo from Madrid*).
* **Word Breakdown Tooltips:** Clicking any word in the message stream immediately reveals color-coded syllable breakdowns, phonetic transcriptions, and English translations.
* **Syllable Color Scaffolding:** Visually separates multi-syllable words into alternating highlight blocks (e.g., **fút · bol** in rose/emerald) to make pronunciation patterns intuitive.
* **Asynchronous Writing Scaffolds:** Expandable helper drawer featuring Spanish sentence frames (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestion chips.
* **Cooperative Quizzes:** Stress-free matching activities solved through partner dialogue hints instead of high-pressure countdowns.

### 2. Parent Progress & Insights Board (`/parent`)
* **Confidence & Stamina Metrics:** Visual trackers showing total messages exchanged, quiz points earned, and vocabulary words mastered.
* **Remote Accommodation Overrides:** Parents can adjust typography, contrast colors, line/letter spacing, and speech playback speed, which instantly syncs to the learner's active session.
* **Portfolio Exporter:** One-click progress report generation to share with SEN specialists, therapists, or school teachers.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time summary of student engagement and IEP goal completion.
* **IEP Goal Alignment:** Direct mapping of platform interactions (e.g., reading ruler utilization, sentence frame usage, vocabulary practice) to formal IEP targets.
* **Roster Accommodation Overrides:** Remotely adjust student font profiles, zoom scales, and contrast themes across classroom groups.

---

## 🛡️ Local Data Persistence & Cross-Portal Synchronization

PenPal operates as a self-contained application using browser **`localStorage`** to mock persistent backend storage and coordinate state seamlessly across all three client portals:

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

### Key Storage Schema
* `penpal_a11y_settings`: Holds the global `AccessibilitySettings` object (font family, line height, letter spacing, word spacing, font size multiplier, theme color, reading ruler status, reading ruler height, speech speed, distraction-free state).
* `penpal_messages_sent_count`: Integer tracking total messages dispatched by the student.
* `penpal_quiz_points`: Accumulated cooperative quiz score total.
* `penpal_learned_vocab`: JSON array of mastered vocabulary terms.
* `penpal_messages`: JSON array representing active penpal conversation thread history.
* `penpal_auth_user`: Current authenticated simulated session role (`learner`, `parent`, or `educator`).

---

## 🛠️ Technical Architecture & Directory Blueprint

PenPal is built with modern, performant web tools: **Next.js (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
penpal/
├── public/                 # Public static assets & fonts
├── src/
│   ├── app/                # Next.js App Router Page Routes & Layouts
│   │   ├── layout.tsx      # Root layout wrapping Accessibility & Auth Contexts
│   │   ├── page.tsx        # Role Selector landing page
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace
│   │   │   └── page.tsx
│   │   ├── educator/       # SEN Classroom & IEP Educator Desk
│   │   │   └── page.tsx
│   │   └── parent/         # Parent Progress & Remote Customization Portal
│   │       └── page.tsx
│   ├── components/         # Shared Reusable UI Components
│   │   ├── NavigationHeader.tsx # Universal portal switcher header
│   │   └── a11y/           # Accessibility UI Primitives
│   │       ├── A11yWidget.tsx   # Global accessibility control drawer
│   │       └── ReadingRuler.tsx # Focus overlay ruler component
│   ├── context/            # React Global State Providers
│   │   ├── AccessibilityContext.tsx # Central CSS variables & accessibility state
│   │   └── AuthContext.tsx          # Simulated multi-role auth session context
│   ├── hooks/              # Custom React Hooks
│   │   ├── useMatch.ts     # PenPal message state & interactive chat generator
│   │   └── useSpeech.ts    # Bimodal Web Speech API wrapper (TTS & STT)
│   └── styles/             # Global CSS & Tailwind Configurations
│       └── globals.css     # CSS custom property definitions & font face declarations
├── LICENSE                 # MIT Open Source License
├── next.config.mjs         # Next.js build configuration
├── package.json            # Node dependencies and project scripts
├── postcss.config.js       # PostCSS plugins configuration
├── tailwind.config.js      # Tailwind CSS design system rules
├── tsconfig.json           # TypeScript configuration
└── README.md               # Developer documentation & guide
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
This context provider orchestrates visual variables across the entire application viewport, dynamically injecting customized values into CSS variables on the root document element.

```typescript
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type DyslexiaFont = "open-dyslexic" | "sans-serif" | "standard";
export type ThemeColor = "default-cream" | "pastel-blue" | "pastel-green" | "high-contrast";

export interface AccessibilitySettings {
  fontFamily: DyslexiaFont;
  lineHeight: number;          // e.g. 1.8, 2.0
  letterSpacing: number;       // e.g. 1.5, 3.0 (in px)
  wordSpacing: number;         // e.g. 2.0, 4.0 (in px)
  fontSizeMultiplier: number;  // e.g. 1.0, 1.15, 1.3
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number;  // e.g. 30, 45, 60
  speechSpeed: number;         // e.g. 0.75, 0.85, 1.0
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

    // Dynamically apply font family configuration
    let fontValue = "system-ui, -apple-system, sans-serif";
    if (settings.fontFamily === "open-dyslexic") {
      fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
    } else if (settings.fontFamily === "sans-serif") {
      fontValue = "Arial, Helvetica, sans-serif";
    }
    root.style.setProperty("--font-family-current", fontValue);

    // Apply spacing and typography sizing
    root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
    root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
    root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
    root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);

    // Apply theme colors
    const colors = getThemeColors(settings.themeColor);
    root.style.setProperty("--theme-bg-color", colors.bg);
    root.style.setProperty("--theme-text-color", colors.text);
    root.style.setProperty("--theme-card-bg", colors.cardBg);
    root.style.setProperty("--theme-border-color", colors.border);
    root.style.setProperty("--theme-accent-color", colors.accent);
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
```

### 2. Bimodal Web Speech Hook (`useSpeech.ts`)
This custom hook wraps browser speech synthesis (Text-to-Speech) and speech recognition (Speech-to-Text), enabling speech input and auditory assistance.

```typescript
"use client";

import { useState, useCallback, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Text-to-Speech synthesis with dynamic speed control
  const speak = useCallback(
    (text: string, lang = "es-ES") => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      window.speechSynthesis.cancel(); // Terminate pending utterances

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Synchronized with global accessibility setting

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  // Speech-to-Text voice recognition
  const startListening = useCallback(
    (onResult: (text: string) => void, lang = "es-ES") => {
      if (typeof window === "undefined") return;

      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) return;

      const recognition = new SpeechRecognition();
      recognition.lang = lang;
      recognition.onresult = (event: any) => {
        const resultText = event.results[0][0].transcript;
        onResult(resultText);
      };

      recognition.start();
    },
    []
  );

  return { speak, stop, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Local Installation & Development Commands

Follow these steps to run PenPal locally on your machine.

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (v9.0.0 or higher) or **yarn** / **pnpm**

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Available npm Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches local Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles production-optimized build output |
| `npm run start` | Serves the compiled production build locally |
| `npm run lint` | Executes Next.js ESLint static code analysis checks |

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, accessibility specialists, UX designers, and educators!

1. **Fork the Repository** and create a descriptive feature branch (`git checkout -b feature/reading-ruler-enhancements`).
2. **Follow WCAG 2.1 AA Standards:** Ensure all new components support proper color contrast ratios, full keyboard navigation, screen reader ARIA landmarks, and anti-glare styling.
3. **Commit Your Changes:** Keep commit messages clear, direct, and scope-specific.
4. **Submit a Pull Request:** Describe the visual and functional improvements, linking relevant issues or providing test steps for verification.

---

## 📄 License

PenPal is open-source software released under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
