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
- [👥 Target Audiences & User Portals](#-target-audiences--user-portals)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Core Features](#-core-features)
- [🛡️ Privacy & LocalStorage Persistence](#️-privacy--localstorage-persistence)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Developer Implementation Examples](#-developer-implementation-examples)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Target Audiences & User Portals

Our platform is tailored to support three primary user roles across specialized portals, along with dedicated tools for accessibility advocates and developers:

```
                          ┌───────────────────────────┐
                          │     PENPAL APPLICATION    │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parents/Guardians │      │ SEN Departments   │
   │    (/dashboard)   │      │     (/parent)     │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom character/word/line spacing controls, an interactive Reading Ruler focus strip, syllable-colored breakdowns, and bimodal Web Speech utilities to eliminate spelling anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a parent insights board showing vocabulary growth, message counts, quiz progress, and remote font/theme accessibility adjustments to co-configure their child's workspace.

### 3. Special Education Needs (SEN) School Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, monitor roster performance metrics, and export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed TypeScript codebase featuring structured React Contexts (`AccessibilityContext`, `AuthContext`), custom Web Speech hooks, semantic HTML layouts, and fully keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography
* **Dyslexia-Optimized Font-Face:** Dynamic typeface selector including **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation), clean sans-serif layouts, and standard system typefaces.
* **Interactive Spacing Controls:** Granular custom properties regulating letter-tracking, word-spacing, line-height, and font-size scaling, designed specifically to eliminate visual crowding effects.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft cream (`#FCF9F2`), pastel blue (`#EBF4F6`), pastel green (`#F1F7ED`), or high-contrast dark (`#0D0D0D`) themes designed to eliminate harsh screen glare and help students focus.
* **Interactive Reading Ruler:** A customizable overlay focus strip with adjustable height that tracks vertical cursor movement, dimming the rest of the viewport to guide the reader's eyes smoothly across text lines.
* **Distraction-Free Mode:** Instantly hides side navigation and non-essential background UI, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously displays written text and plays natural-tempo Spanish voice audio, helping map graphemes directly to phonemes.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts, encouraging self-paced comprehension.

---

## 🚀 Core Features

### 1. Interactive Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Matching:** Vetted matching with international partners (such as *Mateo from Madrid*). Includes structured conversation frames and translation assists.
* **Word Breakdown Tooltip Desk:** Clicking words in the chat immediately reveals color-coded syllable breakdowns, phonetic transcriptions, and localized translation.
* **Syllable Color Scaffolding:** Visually separates syllables in alternating colors (e.g., **fút · bol** in rose/emerald blocks) to make pronunciation patterns intuitive.
* **Asynchronous Writing Scaffolds:** Expandable writing helpers featuring Spanish sentence frames (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestion chips.
* **Cooperative Quizzes:** Stress-free, collaborative matching activities solved with partner dialogue hints instead of competitive timers.

### 2. Parent Progress & Insights Board (`/parent`)
* **Confidence Metrics Tracker:** Visual summary of the child's reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Remote Accommodations:** Parents can remotely customize default contrast themes, text-scaling, spacing, and vocal playback speeds to align with their child's daily stamina.
* **Portfolio Exporter:** One-click generation of progress reports to share with clinical teams or educators.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time visibility of student progression against set targets.
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage, quiz scores) to formal IEP objectives.
* **Accommodation Controls:** Remotely adjust student font profiles, zoom scales, or default high-contrast layouts across classroom rosters.

---

## 🛡️ Privacy & LocalStorage Persistence

To prioritize visual security and keep our application entirely self-contained, **PenPal utilizes client-side `localStorage`** to mock database persistence and maintain cross-role settings dynamically across all portals.

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

### Managed LocalStorage Keys
* `penpal_a11y_settings`: Central JSON configuration for fonts, theme colors, line/letter/word spacing, font scaling, speech speed, and reading ruler settings.
* `penpal_messages`: Persisted chat history between the learner and penpal partners.
* `penpal_messages_sent_count`: Cumulative count of messages sent by the learner.
* `penpal_quiz_points`: Earned cooperative quiz points.
* `penpal_learned_vocab`: Saved vocabulary list and mastered terms.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is built using **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

### **Directory Structure**

```
src/
├── app/                        # Next.js App Router Pages and Layouts
│   ├── layout.tsx              # Base HTML configuration with Accessibility Provider wraps
│   ├── page.tsx                # Landing page with role-based simulator selection
│   ├── dashboard/              # Dyslexic Learner Workspace portal
│   │   └── page.tsx            # Main chat, word breakdown, and quiz dashboard
│   ├── educator/               # SEN Educator Dashboard portal
│   │   └── page.tsx            # Roster analytics & IEP management
│   └── parent/                 # Parent Progress & Remote Setup Portal
│       └── page.tsx            # Analytics dashboard & accommodation controls
├── components/                 # Reusable UI Primitives
│   ├── a11y/                   # Accessibility widgets
│   │   ├── A11yWidget.tsx      # Floating drawer for font/theme customization
│   │   └── ReadingRuler.tsx    # Interactive cursor-following reading ruler overlay
│   └── NavigationHeader.tsx    # Universal portal header and role switcher
├── context/                    # React Global State Contexts
│   ├── AccessibilityContext.tsx# Centralized accessibility settings & DOM CSS variable manager
│   └── AuthContext.tsx          # Mock user role authentication context
├── hooks/                      # Custom React Hooks
│   ├── useMatch.ts             # P2P message state machine & simulated penpal responses
│   └── useSpeech.ts            # Web Speech API wrapper for Text-to-Speech & Speech-to-Text
└── styles/                     # Global CSS Styling
    └── globals.css             # Tailwind base & CSS custom variables for typography
```

---

## 💻 Developer Implementation Examples

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
This context provider orchestrates visual variables across the entire application viewport, dynamically applying user settings to root CSS custom variables.

```typescript
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

interface AccessibilityContextProps extends AccessibilitySettings {
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  resetToDefaults: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

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
    // Theme color properties updated on document root...
  }, [settings, mounted]);

  // ... Provider rendering
};
```

### 2. Web Speech API Hook (`useSpeech.ts`)
This custom React hook abstracts speech synthesis (Text-to-Speech) and recognition (Speech-to-Text), enabling auditory assistance with built-in fallback support.

```typescript
import { useState, useCallback, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

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
      utterance.rate = speechSpeed; // Adapted speed from user accessibility settings

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  const startListening = useCallback(
    (onResult: (text: string) => void, lang = "es-ES") => {
      if (typeof window === "undefined") return;

      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        // Fallback simulation when Web Speech API is unavailable
        setIsListening(true);
        setTimeout(() => {
          setIsListening(false);
          onResult("¡Hola PenPal! ¿Cómo estás hoy?");
        }, 3000);
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = lang;
      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => {
        onResult(event.results[0][0].transcript);
      };
      recognition.onend = () => setIsListening(false);
      recognition.start();
    },
    []
  );

  return { speak, stop, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Local Installation & Environment Setup

Follow these steps to set up and run PenPal locally.

### Prerequisites
* **Node.js** (v18.x or later recommended)
* **npm** (v9.x or later)

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 4. Build and Verify Production Bundle
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility researchers, designers, and educators!

1. **Fork the Repository** and create a feature branch (`git checkout -b feature/accessible-ruler-improvements`).
2. **Follow WCAG 2.1 AA Standards:** Ensure all new UI components are fully keyboard-navigable and include semantic `aria-*` attributes.
3. **Test Accessibility Settings:** Verify that UI elements adapt dynamically to font scaling, line/letter/word spacing, and high-contrast themes.
4. **Submit a Pull Request:** Provide a detailed description of changes, linking relevant issues and attaching screenshots or screen recordings where applicable.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
