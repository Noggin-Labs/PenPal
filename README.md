# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.3.1-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.3.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

### **Empowering Every Learner to Connect, Write, and Grow.**

**PenPal** is an adaptive, social-first language learning platform engineered specifically for learners with **dyslexia and visual processing differences**. By uniting web accessibility standards (**WCAG 2.1 AA**), multi-sensory interactive features, and supportive social connectivity, PenPal transforms foreign language acquisition into an inclusive, anxiety-free, and engaging experience.

---

## 📖 Table of Contents
- [🌟 Vision & Core Philosophy](#-vision--core-philosophy)
- [👥 Core Portals & User Roles](#-core-portals--user-roles)
- [🧩 Dyslexia-Friendly Accessibility Suite](#-dyslexia-friendly-accessibility-suite)
- [🛠️ System Architecture & Data Flow](#️-system-architecture--data-flow)
- [📂 Directory Blueprint](#-directory-blueprint)
- [💻 Technical Implementation Highlights](#-technical-implementation-highlights)
- [⚙️ Getting Started & Local Setup](#️-getting-started--local-setup)
- [🤝 Accessibility & Contribution Guidelines](#-accessibility--contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Vision & Core Philosophy

Traditional language learning tools rely heavily on text-dense layouts, fast-paced gamified timers, and harsh high-contrast white backgrounds. For individuals with dyslexia, visual crowding, or Scotopic Sensitivity/Irlen Syndrome, these interfaces induce visual distortion, cognitive fatigue, and learning anxiety.

**PenPal** reimagines language learning through an inclusive, multi-sensory design approach:
- **Low-Stress Environment:** Replaces aggressive countdown clocks with asynchronous, self-paced penpal messaging.
- **Visual Comfort:** Provides anti-glare pastel color themes and customizable line/letter/word spacing to reduce visual crowding.
- **Bimodal Scaffolding:** Combines synchronized text-to-speech (TTS) and voice dictation (STT) so learners can hear, speak, and read simultaneously.
- **Phonetic & Syllable Breakdown:** Offers color-coded syllable chunking and interactive translation tooltips for immediate vocabulary decoding.

---

## 👥 Core Portals & User Roles

PenPal caters to a tri-portal model connecting students, family members, and educators in a unified learning ecosystem:

```
                            ┌───────────────────────────┐
                            │    PENPAL DOCKING HUB     │
                            └─────────────┬─────────────┘
                                          │
             ┌────────────────────────────┼────────────────────────────┐
             ▼                            ▼                            ▼
   ┌────────────────────┐       ┌────────────────────┐       ┌────────────────────┐
   │   Learner Portal   │       │   Parent Portal    │       │   Educator Desk    │
   │   `/dashboard`     │       │     `/parent`      │       │    `/educator`     │
   └────────────────────┘       └────────────────────┘       └────────────────────┘
```

### 1. 🎓 Dyslexic Learner Portal (`/dashboard`)
* **Asynchronous P2P Chat:** Connects students with penpals (e.g., *Mateo from Madrid*) featuring built-in translation assists and scaffolded sentence frames (e.g., *"Me gusta mucho..."*).
* **Phonetic & Syllable Desk:** Clicking any word displays alternating color-coded syllables (e.g., **fút · bol** in rose/emerald blocks) and phonetic guides.
* **Cooperative Quizzes:** Low-stress matching activities solved with partner hints rather than speed timers.
* **Integrated Accessibility Widget:** On-demand access to font adjustments, reading ruler toggles, and audio controls.

### 2. 🏠 Parent Progress Portal (`/parent`)
* **Stamina & Vocabulary Insights:** Real-time visibility into reading stamina, writing autonomy, and vocabulary acquisition.
* **Remote Accommodation Controls:** Parents can co-configure their child's accessibility profile (e.g., font choice, background theme, playback rate) which synchronizes immediately to the learner's interface.
* **Progress Report Export:** One-click generation of qualitative progress summaries for therapists, tutors, or school counselors.

### 3. 🏫 SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time progress monitoring mapped directly to Individualized Education Program (**IEP**) targets.
* **Remote Accommodation Management:** Adjust visual parameters and reading supports for individual students or whole cohorts.
* **Portfolio & Compliance Logging:** Export school-compliant growth portfolios and qualitative IEP goal achievements.

---

## 🧩 Dyslexia-Friendly Accessibility Suite

PenPal builds accessibility directly into the core user experience rather than offering it as an afterthought:

| Feature | Description | Benefit for Dyslexic & Neurodivergent Learners |
| :--- | :--- | :--- |
| **OpenDyslexic Typography** | Specialized font with weighted baselines and unique letterforms. | Prevents letter flipping, rotation, and line skipping. |
| **Granular Spacing Controls** | Adjustable letter spacing, word spacing, and line height. | Minimizes visual crowding and line blurring effects. |
| **Anti-Glare Pastel Themes** | Warm Cream (`#FCF9F2`), Pastel Blue (`#EBF4F6`), Pastel Green (`#F1F7ED`), and High Contrast (`#0D0D0D`). | Eliminates glare and reduces visual fatigue caused by Scotopic Sensitivity. |
| **Interactive Reading Ruler** | Movable focus band dimming non-target screen areas. | Helps guide vertical tracking and prevents skipping lines while reading. |
| **Bimodal Audio (TTS & STT)** | Web Speech API integration with variable speed control (`0.75x` to `1.0x`). | Maps written graphemes to vocal phonemes in real time. |
| **Distraction-Free Mode** | Instantly hides sidebars, statistics, and decorative UI elements. | Promotes sustained focus and reduces cognitive load. |

---

## 🛠️ System Architecture & Data Flow

PenPal is a self-contained web application built on **Next.js App Router** and **React**. State persistence and cross-portal synchronicity are driven by browser `localStorage` and React Contexts.

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │  penpal_messages │          │   penpal_a11y_   │          │  penpal_quiz_    │
  │  & sent count    │          │     settings     │          │   points & vocab │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

### LocalStorage Keys Reference

| LocalStorage Key | Purpose & Data Scope |
| :--- | :--- |
| `penpal_a11y_settings` | Visual overrides (font, line/word/letter spacing, pastel theme, reading ruler, speech rate). |
| `penpal_messages` | Peer-to-peer chat history and exchanged messages. |
| `penpal_messages_sent_count` | Quantitative count of sent messages used for engagement metrics. |
| `penpal_quiz_points` | Cooperative quiz score accumulation. |
| `penpal_learned_vocab` | Array of mastered vocabulary items. |
| `penpal_auth_user` | Active session simulation role (Learner, Parent, or Educator). |

---

## 📂 Directory Blueprint

```
/
├── public/                 # Static assets and typography files
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Root layout wrapped with AccessibilityProvider & AuthProvider
│   │   ├── page.tsx        # Portal selection landing hub
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace
│   │   ├── educator/       # SEN Educator IEP Desk
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Modular UI Primitives
│   │   ├── a11y/           # Reading Ruler and Accessibility Settings Modal
│   │   │   ├── A11yWidget.tsx
│   │   │   └── ReadingRuler.tsx
│   │   └── NavigationHeader.tsx # Universal portal switcher and accessibility bar
│   ├── context/            # React Global State Providers
│   │   ├── AccessibilityContext.tsx # Central theme, spacing, and font manager
│   │   └── AuthContext.tsx          # Mock authentication and role context
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper for TTS and speech recognition
│   │   └── useMatch.ts     # P2P conversation state machine & message store
│   └── styles/             # Global CSS
│       └── globals.css     # CSS Custom Properties and typography rules
├── LICENSE                 # MIT Open Source License
├── package.json            # Node dependencies and npm scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 💻 Technical Implementation Highlights

### 1. Dynamic Accessibility Context (`src/context/AccessibilityContext.tsx`)

This context manages accessibility configurations, persisting settings to `localStorage` and dynamically setting root CSS custom variables across the DOM tree:

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
  fontSizeMultiplier: number;
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number;
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

  useEffect(() => {
    const root = document.documentElement;

    // Apply font family variables
    let fontValue = "system-ui, -apple-system, sans-serif";
    if (settings.fontFamily === "open-dyslexic") {
      fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
    } else if (settings.fontFamily === "sans-serif") {
      fontValue = "Arial, Helvetica, sans-serif";
    }
    root.style.setProperty("--font-family-current", fontValue);

    // Apply spacing custom properties
    root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
    root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
    root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
    root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults }}>
      <div className="a11y-container">{children}</div>
    </AccessibilityContext.Provider>
  );
};
```

### 2. Multi-Sensory Web Speech Hook (`src/hooks/useSpeech.ts`)

This hook abstracts browser Web Speech API interactions, supporting rate-controlled Text-to-Speech playback and Speech Recognition dictation with built-in fallbacks:

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

      window.speechSynthesis.cancel(); // Cancel active playback

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

  return { speak, stop, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Getting Started & Local Setup

### Prerequisites
* **Node.js** (v18.x or later)
* **npm** or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

### Available NPM Scripts
- `npm run dev` — Starts the Next.js development server at port 3000.
- `npm run build` — Compiles optimized production build.
- `npm run start` — Boots the compiled production server.
- `npm run lint` — Runs ESLint checks across the codebase.

---

## 🤝 Accessibility & Contribution Guidelines

We welcome contributions from developers, accessibility specialists, designers, and educators!

When contributing, please follow these core standards:
1. **WCAG 2.1 AA Compliance:** All UI components must maintain strong contrast ratios, accessible ARIA attributes (`aria-expanded`, `aria-label`, `aria-live`), and keyboard navigation support.
2. **Keyboard Accessibility:** Ensure all interactive elements can be focused and triggered using standard `Tab`, `Space`, and `Enter` keys.
3. **Clean Component Scaffolding:** Avoid embedding inline hardcoded font sizes or background colors; utilize CSS variables defined in `AccessibilityContext`.

---

## 📄 License

PenPal is open-source software licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 — Bridging communication gaps, one inclusive message at a time.
</p>
