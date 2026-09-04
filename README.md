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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 User Portals & Target Audiences](#-user-portals--target-audiences)
- [🧩 Dyslexia-Friendly Accessibility Engine](#-dyslexia-friendly-accessibility-engine)
- [🚀 Core Features Overview](#-core-features-overview)
- [🛡️ State Persistence & Cross-Portal Sync](#️-state-persistence--cross-portal-sync)
- [🛠️ Technical Architecture & Directory Blueprint](#️-technical-architecture--directory-blueprint)
- [💻 Technical Implementation Code Examples](#-technical-implementation-code-examples)
- [⚙️ Local Installation & Setup](#️-local-installation--setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, fine-grained typography controls (including **OpenDyslexic** and customizable line, letter, and word spacing), an interactive Reading Ruler focus strip, bimodal audio presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown tools, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 User Portals & Target Audiences

PenPal features three interconnected client portals tailored to key stakeholders in a learner's educational ecosystem:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Learner Portal    │      │   Parent Portal   │      │  Educator Desk    │
   │   (/dashboard)    │      │     (/parent)     │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
* **Focus:** Engaging, low-stress, and accessible language learning.
* **Key Capabilities:**
  * Interactive messaging with international peer partners (e.g., Mateo from Madrid).
  * Color-coded syllable breakdown and phonetic tools for any word clicked.
  * Sentence frame writing assistants to reduce composition anxiety.
  * Timer-free collaborative quizzes solved through partner dialogue hints.
  * Full control over fonts (OpenDyslexic, Sans-Serif, System), line height, letter/word spacing, theme overlays, and reading rulers.

### 2. Parents & Guardians (`/parent`)
* **Focus:** Reassurance, confidence tracking, and remote workspace configuration.
* **Key Capabilities:**
  * Real-time monitoring of reading stamina, writing autonomy, and vocabulary acquisition.
  * Remote accessibility controls to adjust contrast themes, font scaling, and voice playback speed for their child.
  * One-click PDF portfolio export to share progress with specialists and clinical teams.

### 3. SEN Educators & School Departments (`/educator`)
* **Focus:** Classroom management, compliance tracking, and IEP goal integration.
* **Key Capabilities:**
  * Student roster progress tracking mapped to **IEP (Individualized Education Program)** targets.
  * Remote accommodation overrides for font profiles, contrast modes, and zoom levels.
  * School-compliant qualitative progress reporting and portfolio generation.

---

## 🧩 Dyslexia-Friendly Accessibility Engine

Rather than treating accessibility as an afterthought, PenPal builds visual and cognitive scaffolding directly into its CSS variable system and React components.

### 🔠 Specialized Typography & Spacing Controls
* **Dyslexia-Optimized Typeface:** Dynamic support for **OpenDyslexic** (featuring weighted baselines to prevent letter rotation and flipping), clean geometric Sans-Serif, and standard system fonts.
* **Granular Spacing Variables:** Independent control over:
  * Line Height (e.g., 1.8x to 2.0x)
  * Letter Spacing (`letterSpacing` in px)
  * Word Spacing (`wordSpacing` in px)
  * Font Size Scale Multiplier (`fontSizeMultiplier`)

### 🎨 Visual Comfort & Anti-Glare Themes
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft cream (`#FCF9F2`), pale pastel blue (`#EBF4F6`), leaf green (`#F1F7ED`), or high-contrast dark mode (`#0D0D0D`) to eliminate screen glare and reduce visual strain.
* **Interactive Reading Ruler:** A position-tracked highlight overlay strip with customizable height that dims the rest of the screen, helping learners follow text line-by-line.
* **Distraction-Free Mode:** Hides non-essential navigation and UI elements, leaving an uninterrupted primary workspace to maintain focus.

### 🧠 Bimodal Learning & Audio Scaffolding
* **Text-to-Speech (TTS):** Browser Web Speech synthesis plays voice audio at adjustable, slower tempos (default `0.8x`) to map written text (graphemes) to spoken sounds (phonemes).
* **Speech-to-Text (STT):** Voice dictation integration allowing students to speak their responses instead of typing when struggling with spelling.

---

## 🚀 Core Features Overview

| Feature | Description | Portal / Location |
| :--- | :--- | :--- |
| **Peer-to-Peer Chat** | Asynchronous messaging with international penpals and simulated AI response fallbacks. | `/dashboard` |
| **Word Breakdown Tooltip** | Interactive popup displaying syllable separation (e.g. `fút · bol`), phonetics (`[ˈfut.βol]`), and translations. | `/dashboard` |
| **Sentence Scaffold Helper** | Expandable bank of structured sentence starters (e.g. *"Me gusta mucho..."*) and vocabulary chips. | `/dashboard` |
| **Collaborative Quizzes** | Stress-free, timer-free quiz challenges solved through conversation hints with penpals. | `/dashboard` |
| **Parent Analytics Board** | Metric charts tracking vocabulary acquisition, message volume, and reading stamina. | `/parent` |
| **SEN IEP Target Mapping** | Direct correlation of student chat activity and ruler usage to formal IEP targets. | `/educator` |
| **Floating A11y Drawer** | Instant slide-out accessibility panel available across all pages for real-time visual adjustment. | Universal Header |

---

## 🛡️ State Persistence & Cross-Portal Sync

To maintain client-side privacy while ensuring complete functionality without requiring an external backend database, PenPal leverages browser **`localStorage`**.

### **Persistent Keys Overview**

| LocalStorage Key | Purpose |
| :--- | :--- |
| `penpal_a11y_settings` | Stores typography preferences, spacing controls, theme colors, ruler settings, and speech speed. |
| `penpal_messages` | Persists conversation history between the learner and their assigned penpal. |
| `penpal_messages_sent_count` | Tracks total sent message count for parent/educator dashboard analytics. |
| `penpal_quiz_points` | Stores points earned during collaborative quiz activities. |
| `penpal_learned_vocab` | Maintains the student's personal vocabulary bank. |
| `penpal_auth_user` | Preserves active user role session (`learner`, `parent`, or `educator`). |

When a parent or educator updates Alex's accessibility settings in `/parent` or `/educator`, the updated settings write to `penpal_a11y_settings` and instantly re-render across the entire application via `AccessibilityContext`.

---

## 🛠️ Technical Architecture & Directory Blueprint

Built on **Next.js (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
penpal/
├── public/                     # Static assets (fonts, icons, vectors)
├── src/
│   ├── app/                    # Next.js App Router Pages & Layouts
│   │   ├── layout.tsx          # Root layout wrapping Accessibility & Auth providers
│   │   ├── page.tsx            # Landing page with interactive role simulator
│   │   ├── dashboard/          # Learner workspace portal
│   │   │   └── page.tsx        # Chat, word breakdown, sentence frames & quiz UI
│   │   ├── educator/           # Educator desk portal
│   │   │   └── page.tsx        # IEP goals, roster analytics & remote override UI
│   │   └── parent/             # Parent portal
│   │       └── page.tsx        # Confidence metrics & accessibility customization UI
│   ├── components/             # Reusable UI Primitives
│   │   ├── NavigationHeader.tsx# Universal header with role switcher & A11y drawer button
│   │   └── a11y/               # Accessibility components
│   │       ├── A11yWidget.tsx  # Slide-out accessibility control drawer
│   │       └── ReadingRuler.tsx# Interactive line-reading focus strip
│   ├── context/                # Global React Contexts
│   │   ├── AccessibilityContext.tsx # Central store managing typography, themes & spacing
│   │   └── AuthContext.tsx     # Mock role-based authentication context
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useMatch.ts         # PenPal message state, mock responses & metrics sync
│   │   └── useSpeech.ts        # Browser Web Speech API wrapper for TTS and STT
│   └── styles/                 # Global Styling
│       └── globals.css         # CSS custom properties and OpenDyslexic font imports
├── LICENSE                     # MIT License
├── package.json                # Dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS theme extension
└── tsconfig.json               # TypeScript configuration
```

---

## 💻 Technical Implementation Code Examples

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
Updates DOM custom properties dynamically whenever any typography, color, or spacing setting is altered:

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
  fontSizeMultiplier: number; // e.g. 1.0, 1.15, 1.3
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number; // e.g. 30, 45, 60
  speechSpeed: number;      // e.g. 0.75, 0.85, 1.0
  distractionFree: boolean;
}

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

### 2. Web Speech API Hook (`useSpeech.ts`)
Encapsulates Web Speech API Synthesis and Recognition with custom playback rates and fallback support:

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

      window.speechSynthesis.cancel(); // Cancel active utterances
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Uses setting configured in AccessibilityContext

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  return { speak, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Local Installation & Setup

### Prerequisites
* **Node.js** (v18.x or later)
* **npm** (v9.x or later) or **yarn** / **pnpm**

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
Open [http://localhost:3000](http://localhost:3000) in your web browser to explore the platform.

### 4. Build for Production
```bash
npm run build
```

### 5. Start Production Server
```bash
npm run start
```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, designers, accessibility researchers, and educators!

1. **Fork the Repository:** Create your feature branch (`git checkout -b feature/accessible-feature`).
2. **Follow Accessibility Standards:**
   - Ensure all interactive elements have semantic HTML tags and appropriate `aria-*` attributes.
   - Maintain 100% keyboard accessibility (`Tab`, `Enter`, `Space`, `Esc`).
   - Validate color contrast against WCAG 2.1 AA ratios.
3. **Test Your Changes:** Run `npm run build` and `npm run lint` before committing.
4. **Submit a Pull Request:** Provide a detailed overview of your changes and attach screenshots or video recordings demonstrating visual accessibility features.

---

## 📄 License

This project is open source and released under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
