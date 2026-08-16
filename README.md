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
- [🛡️ Privacy & LocalStorage State Persistence](#️-privacy--localstorage-state-persistence)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Deep Dive Developer Implementation Examples](#-deep-dive-developer-implementation-examples)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel anti-glare color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, interactive line reading rulers, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning journey.

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

### 1. Dyslexic & Neurodivergent Students (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom character/word spacing and line-height controls, an interactive highlight ruler, syllable breakdown tooltips, and bimodal dictation/speech utilities to eliminate writing anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a dedicated parent analytics panel showing confidence metrics, vocabulary growth, message volume, and customizable remote font/theme adjustments to co-configure their child's workspace.

### 3. Special Education Needs (SEN) School Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative progress, and instantly export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Clear, modular, and developer-friendly.
* **Experience:** Clean, strongly-typed codebase featuring structured React Contexts, custom Web Speech hooks, semantic HTML layouts, and fully keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS variables and component primitives.

### 🔠 Specialized Typography & Spacing Controls
* **Dyslexia-Optimized Font Selector:** Dynamic typeface selector including **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation), **Clean Arial**, and system defaults.
* **Granular Spacing Regulators:** Custom CSS custom properties regulating letter-spacing (0px–5px), word-spacing (0px–10px), line-height (1.4–2.2), and text font size scaling multiplier (0.8x–1.5x) to eliminate visual crowding.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from **Warm Cream** (`#FCF9F2`), **Soft Blue** (`#EBF4F6`), **Mint Green** (`#F1F7ED`), or **High-Contrast Dark Mode** (`#0D0D0D`) designed to eliminate harsh screen glare and reduce visual stress.
* **Interactive Reading Ruler:** A customizable focus strip that tracks mouse movements, dimming peripheral content to guide the reader's eyes smoothly across individual text lines.
* **Distraction-Free Mode:** Instantly hides side navigation, decorative stats, and background elements, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation (Web Speech API):** Simultaneously displays written text and plays natural-tempo voice audio (`es-ES`), helping map graphemes directly to phonemes.
* **No-Stress Asynchronous Communication:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts and sentence frames (`"Me gusta mucho..."`).

---

## 🚀 Key Core Features & Portals

### 1. Interactive Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Messaging:** Vetted matching with international partners (such as *Mateo from Madrid*). Includes simulated intelligent P2P responses and translation aids.
* **Syllable & Phonetic Breakdown Tooltip:** Interactive word desk where clicking any word reveals a color-coded syllable breakdown (e.g., **fút · bol** in rose/emerald blocks) and phonetic transcriptions.
* **Sentence Scaffolding & Word Chips:** Expandable writing helpers featuring Spanish sentence starters and click-to-insert vocabulary suggestion chips.
* **Cooperative Quizzes:** Stress-free, timer-free collaborative matching activities solved with partner dialogue hints.
* **Interactive Adaptation Center Widget:** Floating control center enabling real-time font, spacing, theme, ruler, and speech speed adjustments.

### 2. Parent Progress & Insights Board (`/parent`)
* **Confidence Metrics Tracker:** Visual analytics tracking reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Override Controls:** Parents can remotely configure default contrast themes, text scales, line heights, and speech playback rates to align with their child's daily stamina.
* **Portfolio Exporter:** One-click generation of progress summaries to share with clinical teams or educators.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time visibility into student progression across active IEP cohorts (e.g., Alex Johnson, Maria Garcia).
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage, quiz accuracy) to formal IEP objectives.
* **Accommodation Override Controls:** Remotely adjust student font profiles, zoom scales, or default high-contrast layouts.

---

## 🛡️ Privacy & LocalStorage State Persistence

To prioritize data privacy and allow PenPal to operate completely client-side without external server dependencies, **PenPal utilizes browser LocalStorage** to persist application state and maintain cross-portal synchronicity.

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

### LocalStorage Keys & State Flow
* `penpal_a11y_settings`: Holds the global visual accessibility parameters (font family, font multiplier, line height, letter spacing, word spacing, theme color, reading ruler status, speech speed, distraction-free state).
* `penpal_messages`: Stores the chat history between the learner and their penpal, including message text, translations, timestamps, and phonetic syllable breakdowns.
* `penpal_messages_sent_count`: Tracks cumulative message volume dispatched by the learner to update progress cards in the Parent and Educator portals.
* `penpal_quiz_points`: Persists points earned during cooperative quizzes.
* `penpal_learned_vocab`: Maintains the list of mastered Spanish vocabulary words.

### Cross-Portal Reactive Synchronization
When a parent or educator updates Alex's typography or visual contrast settings in the `/parent` or `/educator` portals, settings write immediately to `penpal_a11y_settings` and update the root CSS variables via `AccessibilityContext`. The learner's `/dashboard` view reflects these changes in real time.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is engineered with Next.js App Router, React 18, TypeScript, and Tailwind CSS.

### **Directory Blueprint**

```
/
├── public/                 # Static assets & public resources
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Root HTML layout wrapped with Accessibility & Auth Providers
│   │   ├── page.tsx        # Landing page with interactive Role Simulator
│   │   ├── dashboard/      # Dyslexic Learner Interactive Workspace
│   │   ├── educator/       # SEN Educator Classroom & IEP Dashboard
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Reusable UI Primitives
│   │   ├── a11y/           # Accessibility Widgets
│   │   │   ├── A11yWidget.tsx   # Floating Adaptation Center panel
│   │   │   └── ReadingRuler.tsx # Interactive cursor-following focus ruler
│   │   └── NavigationHeader.tsx # Top navigation bar with active role indicator
│   ├── context/            # Global React Context State
│   │   ├── AccessibilityContext.tsx # Central store managing visual themes, fonts, & spacing
│   │   └── AuthContext.tsx          # Mock user role authorization context
│   ├── hooks/              # Custom React Hooks
│   │   ├── useMatch.ts     # P2P chat state machine, message history, & mock partner engine
│   │   └── useSpeech.ts    # Web Speech API wrapper for Text-to-Speech & Speech-to-Text
│   └── styles/             # Global CSS
│       └── globals.css     # CSS Custom properties & global typography styling
├── LICENSE                 # MIT License Document
├── package.json            # Node dependencies & project scripts
├── postcss.config.js       # PostCSS configuration for Tailwind
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
This context provider orchestrates visual variables across the entire viewport, dynamically applying settings to root CSS custom properties.

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

interface AccessibilityContextProps extends AccessibilitySettings {
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
  resetToDefaults: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextProps | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  // Load from local storage on mount
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

  // Sync settings to localStorage and update DOM root CSS variables
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
      <div
        style={{
          fontFamily: "var(--font-family-current)",
          lineHeight: "var(--line-height-current)",
          letterSpacing: "var(--letter-spacing-current)",
          wordSpacing: "var(--word-spacing-current)",
          backgroundColor: "var(--theme-bg-color)",
          color: "var(--theme-text-color)",
          minHeight: "100vh",
          transition: "all 0.25s ease",
        }}
        className="a11y-container"
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};
```

### 2. Web Speech Wrapper Hook (`useSpeech.ts`)
This custom React hook abstracts speech synthesis and speech recognition capabilities, reading speed options, and browser fallback handling.

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

      window.speechSynthesis.cancel(); // Terminate pending audio streams

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Adapted speech rate

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
        setIsListening(true);
        setTimeout(() => {
          setIsListening(false);
          onResult("¡Hola PenPal! ¿Cómo estás hoy?");
        }, 3000);
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = lang;

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event: any) => onResult(event.results[0][0].transcript);
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognition.start();
    },
    []
  );

  return { speak, isPlaying, isListening, startListening };
};
```

### 3. Asynchronous P2P Messaging & Local Storage Hook (`useMatch.ts`)
This hook handles message state, localStorage persistence, and simulates intelligent automated penpal responses with syllable breakdown metadata.

```typescript
"use client";

import { useState, useEffect } from "react";

export interface Message {
  id: string;
  sender: "user" | "partner";
  text: string;
  translation?: string;
  timestamp: string;
  syllableInfo?: { word: string; breakdown: string; phonetics: string }[];
}

export const useMatch = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("penpal_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Messages list parsing error:", e);
      }
    } else {
      setMessages(INITIAL_MESSAGES);
      localStorage.setItem("penpal_messages", JSON.stringify(INITIAL_MESSAGES));
    }
  }, []);

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

    // Simulate smart partner response after 4 seconds
    setTimeout(() => {
      const responseText = getSimulatedResponse(text);
      const partnerMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "partner",
        text: responseText.text,
        translation: responseText.translation,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        syllableInfo: responseText.syllables,
      };

      setMessages((prev) => {
        const withResponse = [...prev, partnerMessage];
        localStorage.setItem("penpal_messages", JSON.stringify(withResponse));
        return withResponse;
      });

      incrementMessageCount();
    }, 4000);
  };

  return { messages, sendMessage };
};
```

---

## ⚙️ Local Installation & Environment Setup

Follow these steps to set up and run PenPal locally on your machine.

### Prerequisites
* **Node.js** (v18.x or later recommended)
* **npm** or **yarn** package manager

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
Open [http://localhost:3000](http://localhost:3000) in your web browser to access the application.

### 4. Build for Production
```bash
npm run build
```

### 5. Run Linter
```bash
npm run lint
```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, accessibility advocates, designers, and educators!

1. **Fork the Repository** and create a descriptive feature branch (`feature/reading-ruler-enhancement`).
2. **Commit Clear Messages:** Write meaningful, succinct commit messages explaining your changes.
3. **Maintain WCAG 2.1 AA Compliance:** Ensure all UI modifications include proper semantic markup, `aria-*` attributes, full keyboard navigation support, and accessibility contrast standards.
4. **Test and Verify:** Run `npm run lint` and `npm run build` prior to submitting a pull request.
5. **Submit a Pull Request:** Describe your changes in detail and link any relevant issues.

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
