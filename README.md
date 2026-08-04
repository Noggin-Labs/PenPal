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
- [♿ WCAG 2.1 AA Compliance Matrix](#-wcag-21-aa-compliance-matrix)
- [🚀 Key Core Features & Role Portals](#-key-core-features--role-portals)
- [🛡️ Privacy & Local Persistence Mapping](#️-privacy--local-persistence-mapping)
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

### 🔠 Specialized Typography
* **Dyslexia-Optimized Font-Face:** Dynamic typeface selector including **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation) and highly legible geometric sans-serif layouts.
* **Interactive Spacing Controls:** Granular custom properties regulating letter-tracking, word-spacing, and line-height, designed specifically to reduce visual crowding effects.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft cream, pastel blue, pale mint green, or muted gray themes designed to eliminate harsh screen glare and help students focus.
* **Interactive Reading Ruler:** A customizable overlay focus strip that tracks vertical cursor movement, dimming the rest of the viewport to guide the reader's eyes smoothly across text lines.
* **Distraction-Free Mode:** Instantly hides side navigation, decorative stats, and background elements, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously displays written text and plays natural-tempo Spanish voice audio, helping map graphemes directly to phonemes.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts, encouraging self-paced comprehension.

---

## ♿ WCAG 2.1 AA Compliance Matrix

PenPal is engineered to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 AA criteria, providing practical visual and sensory adapters.

| WCAG Criteria | Requirement Name | PenPal Implementation |
| :--- | :--- | :--- |
| **1.4.3** | Contrast (Minimum) | Dynamic themes (e.g., Warm Anti-Glare Cream `#FCF9F2` on `#2D2A24` text, Pastel Mint) ensure a contrast ratio of at least 4.5:1. High Contrast Dark Mode is available for users requiring maximum contrast. |
| **1.4.4** | Resize Text | Global font multiplier scales all typography programmatically (from `0.8x` to `1.5x`) using CSS variables without breaking layout flow or clipping text container bounds. |
| **1.4.12** | Text Spacing | Granular sliders allow the user to expand CSS variable-controlled line height (up to `2.2`), letter spacing (up to `5px`), and word spacing (up to `10px`) dynamically to mitigate visual crowding. |
| **2.1.1** | Keyboard Accessible | Entire simulation environment is keyboard-navigable with clear focus indicators, interactive modal prompts, and standard tab-stops. |
| **3.1.1** | Language of Page | Uses standard semantic layout rendering with custom language attributes (`lang="es-ES"` or `lang="en-GB"`) on components and vocal speech synthesis queries to instruct assistive devices. |

---

## 🚀 Key Core Features & Role Portals

PenPal divides its architecture into three distinct, dedicated portal routes corresponding to our main target audiences.

### 1. Interactive Learner Dashboard (`/dashboard`)
The learner's workspace focuses on supportive, low-stress language building:
* **Peer-to-Peer PenPal Matching:** Vetted matching with international partners (such as *Mateo from Madrid*). Includes structured conversation frames and translation assists.
* **Syllable breakdown & Tooltips:** Clicking any word in the chat reveals a color-coded syllable breakdown, phonetic transcriptions, and English translation.
* **Syllable Color Scaffolding:** Separates syllables into alternating visual blocks (e.g., **fút · bol** in rose/emerald blocks) to make pronunciation patterns intuitive.
* **Asynchronous Writing Scaffolds:** Expandable writing helpers featuring Spanish sentence frames (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestion chips.
* **Cooperative Quizzes:** Stress-free, collaborative matching activities solved with partner dialogue hints instead of competitive timers.

### 2. Parent Progress & Insights Board (`/parent`)
The Parent Portal provides high-quality insights and direct support:
* **Confidence Metrics Tracker:** Visual summary of the child's reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Override Controls:** Parents can remotely customize default contrast themes, text-scaling, and vocal playback speeds to align with their child's daily stamina.
* **Portfolio Exporter:** One-click generation of progress reports to share with clinical teams or educators.

### 3. SEN Educator & Administration Desk (`/educator`)
The Educator Board is designed for classroom monitoring and school compliance:
* **Classroom Roster Analytics:** Real-time visibility of student progression against set targets.
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage) to formal IEP objectives.
* **Accommodation Override Controls:** Remotely adjust student font profiles, zoom scales, or default high-contrast layouts.

---

## 🛡️ Privacy & Local Persistence Mapping

To prioritize data privacy and keep our application entirely self-contained, **PenPal utilizes local storage (`localStorage`)** to mock database persistence and maintain cross-role settings dynamically.

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

The system binds the following localStorage keys to preserve simulation state:

* `penpal_a11y_settings`: Holds the serialized user accessibility preferences including typeface selectors, font scaling multiplier, line spacing, and color schemes.
* `penpal_messages`: Stores asynchronous message histories between the user and their designated Spanish PenPal partner.
* `penpal_messages_sent_count`: An active tracker representing the total count of messages drafted and successfully dispatched by the learner.
* `penpal_quiz_points`: The running cooperative experience point total, incrementing when a user successfully completes peer-assisted puzzles.
* `penpal_learned_vocab`: Tracks the vocabulary list containing clicked terms parsed using the word analyzer.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is built with a modern Next.js structure, making custom accessibility configurations highly accessible.

### **Directory Blueprint**

```
/
├── public/                 # Static assets (accessibility fonts, system vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Base HTML configuration with Accessibility Provider wraps
│   │   ├── page.tsx        # Homepage introducing Simulation Role Selector
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace
│   │   ├── educator/       # SEN & Classroom Educator Dashboard
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Shared Reusable UI Primitives
│   │   ├── a11y/           # Reading Ruler and Color Overlay Widgets
│   │   └── NavigationHeader.tsx # Universal role selection bar
│   ├── context/            # React Global State and Accessibility Contexts
│   │   ├── AccessibilityContext.tsx # Central store managing contrast, fonts, and zoom
│   │   └── AuthContext.tsx          # Mock user role authorization
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Audio wrapper using browser Web Speech API
│   │   └── useMatch.ts     # P2P message state machine & mock chat generator
│   └── styles/             # Global Configurations
│       └── globals.css     # CSS Custom properties for typography & padding
├── LICENSE                 # MIT License Document
├── package.json            # Node dependencies & project scripts
└── README.md               # Developer documentation & onboarding guide
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
This context provider orchestrates visual variables across the entire application viewport, dynamically mapping user overrides onto root custom CSS variables.

```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';

export type DyslexiaFont = 'open-dyslexic' | 'sans-serif' | 'standard';
export type ThemeColor = 'default-cream' | 'pastel-blue' | 'pastel-green' | 'high-contrast';

interface AccessibilitySettings {
  fontFamily: DyslexiaFont;
  lineHeight: number;
  letterSpacing: number;
  wordSpacing: number;
  themeColor: ThemeColor;
  fontSizeMultiplier: number;
  readingRulerEnabled: boolean;
  speechSpeed: number;
  distractionFree: boolean;
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
}

const AccessibilityContext = createContext<AccessibilitySettings | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontFamily: 'open-dyslexic',
    lineHeight: 1.8,
    letterSpacing: 2.0,
    wordSpacing: 4.0,
    themeColor: 'default-cream',
    fontSizeMultiplier: 1.15,
    readingRulerEnabled: false,
    speechSpeed: 0.85,
    distractionFree: false,
  });

  useEffect(() => {
    const root = document.documentElement;

    const fontMapping = {
      'open-dyslexic': 'OpenDyslexic, "Comic Sans MS", Chalkboard SE, sans-serif',
      'sans-serif': 'Arial, sans-serif',
      'standard': 'system-ui, -apple-system, sans-serif'
    };

    const bgColors = {
      'default-cream': '#FCF9F2',
      'pastel-blue': '#EBF4F6',
      'pastel-green': '#F1F7ED',
      'high-contrast': '#0F172A'
    };

    const textColors = {
      'default-cream': '#2D2A24',
      'pastel-blue': '#1E293B',
      'pastel-green': '#1C2E1A',
      'high-contrast': '#F8FAFC'
    };

    root.style.setProperty('--font-family-current', fontMapping[settings.fontFamily]);
    root.style.setProperty('--theme-bg-color', bgColors[settings.themeColor]);
    root.style.setProperty('--theme-text-color', textColors[settings.themeColor]);
    root.style.setProperty('--font-size-multiplier', `${settings.fontSizeMultiplier}`);
    root.style.setProperty('--line-height-current', `${settings.lineHeight}`);
    root.style.setProperty('--letter-spacing-current', `${settings.letterSpacing}px`);
    root.style.setProperty('--word-spacing-current', `${settings.wordSpacing}px`);
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
```

### 2. Low-Latency Web Speech Wrapper (`useSpeech.ts`)
This React hook abstracts browser voice synthesis and recognition, enabling low-stress, real-time auditory bimodal assistance.

```typescript
import { useState, useCallback } from 'react';

export const useSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback((text: string, lang = 'es-ES', speed = 0.85) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Terminate pending audio streams

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speed; // Slower pace tailored for phonetic processing

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  const startListening = useCallback((onResult: (transcript: string) => void) => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice speech recognition is not supported in this browser version. We recommend Google Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognition.onresult = (event: any) => {
      const resultText = event.results[0][0].transcript;
      onResult(resultText);
    };

    recognition.start();
  }, []);

  return { speak, startListening, isPlaying, isListening };
};
```

---

## ⚙️ Local Installation & Environment Setup

Follow these straightforward steps to boot up PenPal locally on your machine.

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

### 3. Run Validation Commands
```bash
# Run typescript compilation verification
npm run build

# Run project linter checks
npm run lint
```

### 4. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser to interact with the application.

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility researchers, designers, and educators!

1. **Fork the Repo** and create a descriptively named feature branch (`feature/reading-ruler-improvements`).
2. **Commit with Intention:** Write clear, informative commit messages explaining your modifications.
3. **Keep Code Accessible:** All modified or newly added modules must align with WCAG 2.1 AA design patterns, incorporate descriptive semantic `aria-*` markers, and support 100% keyboard-navigable operations.
4. **Submit a Pull Request:** Outline your changes clearly, linking any related issues and, where possible, attaching screenshots or screen recordings showing visual accessibility features in action.

---

## 📄 License

This software is open-source, licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
