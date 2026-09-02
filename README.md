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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia, visual crowding, and visual processing differences. By combining state-of-the-art web accessibility standards (**WCAG 2.1 AA**), multi-sensory interactive scaffolding, and safe asynchronous social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into an empowering, inclusive, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
- [🧩 Dyslexia-Friendly Accessibility Pillars](#-dyslexia-friendly-accessibility-pillars)
- [🚀 Platform Portals & Feature Overview](#-platform-portals--feature-overview)
- [🛡️ State Architecture & Local Storage Persistence](#️-state-architecture--local-storage-persistence)
- [🛠️ Directory Structure](#️-directory-structure)
- [💻 Deep Dive Developer Implementation Snippets](#-deep-dive-developer-implementation-snippets)
- [⚙️ Local Installation & Development Workflow](#️-local-installation--development-workflow)
- [🤝 Contribution & Accessibility Guidelines](#-contribution--accessibility-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning software heavily relies on dense walls of text, high-contrast glaring white screens, and strict gamified timer pressures. For learners with dyslexia or Scotopic Sensitivity (Irlen Syndrome), these interface choices trigger visual distortion, character flipping, and acute cognitive overload—resulting in anxiety, frustration, and disengagement.

**PenPal** fundamentally reimagines the digital language learning workspace:
* **Visual Comfort First:** Eliminates harsh screen glare using warm pastel and anti-glare color palettes (`#FCF9F2` Warm Cream, `#EBF4F6` Pastel Blue, `#F1F7ED` Pastel Green).
* **Multi-Sensory Scaffolding:** Integrates bimodal presentation (synchronized Speech-to-Text and Text-to-Speech) to map graphemes to phonemes in real time.
* **Low-Stress Asynchronous Peer Connection:** Replaces stressful countdown timers with self-paced peer-to-peer penpal messaging, complete with color-coded syllable breakdown widgets and instant sentence frames.

---

## 👥 Target Audiences & Brand Identity

PenPal tailored its brand tone and design system across four primary user roles:

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

### 1. Dyslexic & Neurodivergent Learners
* **Tone:** Encouraging, warm, playful, and low-stress.
* **Experience:** Access to specialized typefaces (**OpenDyslexic**), granular line/letter/word spacing controls, a movable Reading Ruler, and voice dictation tools to eliminate spelling friction.

### 2. Parents & Guardians
* **Tone:** Reassuring, supportive, and informative.
* **Experience:** Dedicated progress portal (`/parent`) offering visibility into reading stamina, writing autonomy, and learned vocabulary, along with remote accommodation controls to tune their child's workspace.

### 3. Special Education Needs (SEN) Educators
* **Tone:** Professional, objective, and data-driven.
* **Experience:** Classroom administration desk (`/educator`) mapping student milestones directly to **IEP (Individualized Education Program)** targets, enabling remote accommodation updates and student report exports.

### 4. Accessibility Developers & Advocates
* **Tone:** Modular, technical, and developer-friendly.
* **Experience:** Fully typed TypeScript codebase using modular React contexts, CSS custom properties for dynamic visual themes, custom Web Speech hooks, and 100% keyboard-navigable UI components.

---

## 🧩 Dyslexia-Friendly Accessibility Pillars

Accessibility in PenPal is embedded at the root level through `AccessibilityContext.tsx` and custom global CSS variables (`/src/styles/globals.css`).

### 🔠 1. Specialized Typography & Spacing
* **Dyslexia-Optimized Typefaces:** Toggle dynamically between **OpenDyslexic** (featuring heavy baselines to prevent letter flipping and rotation), clean sans-serif (Arial), or standard system fonts.
* **Granular Spacing Regimens:** Custom user-controlled line-height ($1.5 - 2.5\times$), letter-spacing ($0 - 5\text{px}$), and word-spacing ($0 - 8\text{px}$) to drastically reduce visual crowding.
* **Font Scaling:** Global text size multiplier ($1.0 - 1.3\times$) adjusting all text dynamically across all portals.

### 🎨 2. Visual Comfort & Anti-Glare Themes
* **Irlen-Friendly Palettes:**
  * **Warm Cream (`default-cream`):** Soft `#FCF9F2` anti-glare background paired with `#2D2A24` muted charcoal text.
  * **Pastel Blue (`pastel-blue`):** `#EBF4F6` background with `#1E293B` dark slate text.
  * **Pastel Green (`pastel-green`):** `#F1F7ED` background with `#1C2D1F` deep forest text.
  * **High Contrast (`high-contrast`):** `#0D0D0D` dark background with `#F3F4F6` high-legibility text and yellow `#FBBF24` focus accents.

### 📏 3. Interactive Reading Ruler Overlay
* A draggable horizontal focus strip (`ReadingRuler.tsx`) tracking the user's cursor movement, dimming surrounding content to anchor visual tracking and eliminate line-skipping.

### 🎙️ 4. Bimodal Speech Integration
* **Text-to-Speech (TTS):** Auditory playback of penpal messages and vocabulary terms at adjustable natural speeds ($0.75\times - 1.0\times$).
* **Speech-to-Text (STT):** Voice dictation using browser-native Speech Recognition, letting learners dictate response messages directly into Spanish.

---

## 🚀 Platform Portals & Feature Overview

### 1. Dyslexic Learner Workspace (`/dashboard`)
* **Asynchronous PenPal Chat Engine:** Interactive chat with international penpal partners (e.g., *Mateo from Madrid*).
* **Interactive Syllable & Phonetic Tooltips:** Clicking any key vocabulary word opens an instant modal displaying color-coded syllable breakdowns (e.g., **fút · bol**), phonetic transcriptions (`[ˈfut.βol]`), and English translations.
* **Spanish Writing Scaffolds:** Expandable sentence frames (*"Me gusta mucho..."*, *"En mi tiempo libre..."*) and recommended vocabulary chips for low-stress sentence construction.
* **Cooperative Quizzes:** Collaborative vocabulary matching activities solved together with partner dialogue hints rather than timed competitive rounds.

### 2. Parent Insights & Setup Board (`/parent`)
* **Progress & Stamina Tracking:** Monitors total messages dispatched, learned vocabulary count, and cooperative quiz achievements.
* **Remote Accommodation Overrides:** Allows parents to adjust text size, font family, line spacing, background theme, and playback speed remotely.
* **Portfolio Exporter:** Single-click progress snapshot generator for sharing learning milestones with educators or clinical specialists.

### 3. SEN Educator & Classroom Desk (`/educator`)
* **Classroom Roster Management:** Real-time visibility across student profiles (e.g., Alex, Maya, Liam) tracking IEP goal accomplishment.
* **IEP Goal Alignment:** Direct mapping of platform interactions (e.g., reading ruler utilization, weekly message quota) to formal IEP targets.
* **Global Accommodation Overrides:** Remotely adjust dyslexia accessibility presets for individual students or whole classes.

---

## 🛡️ State Architecture & Local Storage Persistence

PenPal operates as a self-contained web application. Persistent data and cross-role state synchronizations are managed via `localStorage` and shared React context providers.

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
 ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
 │ penpal_a11y_settings │      │   penpal_messages    │      │  penpal_auth_user    │
 │ Font, Spacing, Theme │      │ Chat history & TTS   │      │ Active role profile  │
 └──────────┬───────────┘      └──────────┬───────────┘      └──────────┬───────────┘
            │                             │                             │
            ▼                             ▼                             ▼
 ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
 │ AccessibilityContext │      │     useMatch Hook    │      │     AuthContext      │
 └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

### Local Storage Schema
| Key | Type | Description |
|---|---|---|
| `penpal_a11y_settings` | `JSON Object` | Stores font choice, spacing parameters, theme color, ruler height, and speech speed. |
| `penpal_messages` | `JSON Array` | Stores message objects including text, sender, timestamp, translation, and syllable metadata. |
| `penpal_messages_sent_count` | `Number` | Tracks total outgoing learner messages for progress dashboard calculations. |
| `penpal_quiz_points` | `Number` | Tracks cooperative quiz score achievements. |
| `penpal_learned_vocab` | `JSON Array` | Array of saved vocabulary words unlocked by the learner. |
| `penpal_auth_user` | `JSON Object` | Active role profile (`learner`, `parent`, or `educator`). |

---

## 🛠️ Directory Structure

```
.
├── public/                     # Static typography and system graphic assets
└── src/
    ├── app/                    # Next.js App Router endpoints
    │   ├── layout.tsx          # Root layout wrapping Auth and Accessibility Providers
    │   ├── page.tsx            # PenPal landing page & role selector switch
    │   ├── dashboard/          # Learner interactive workspace & penpal chat
    │   ├── parent/             # Parent analytics & remote setup desk
    │   └── educator/           # SEN Educator classroom management board
    ├── components/             # Reusable UI component libraries
    │   ├── NavigationHeader.tsx# Universal top navigation bar and role toggle
    │   └── a11y/               # Specialized accessibility widgets
    │       ├── A11yWidget.tsx  # Floating accessibility drawer and controls
    │       └── ReadingRuler.tsx# Drag-and-follow reading ruler overlay
    ├── context/                # React state contexts
    │   ├── AccessibilityContext.tsx # Central theme, spacing, and font manager
    │   └── AuthContext.tsx     # Mock role-based authentication manager
    ├── hooks/                  # Custom React hooks
    │   ├── useMatch.ts         # PenPal chat state machine & simulated responses
    │   └── useSpeech.ts        # Web Speech API wrapper for TTS & voice recognition
    └── styles/                 # Global styles and Tailwind configuration
        └── globals.css         # Dynamic CSS custom properties and dyslexia fonts
```

---

## 💻 Deep Dive Developer Implementation Snippets

### 1. Dynamic Accessibility Context (`src/context/AccessibilityContext.tsx`)

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
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings, resetToDefaults }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
```

### 2. Web Speech API Wrapper (`src/hooks/useSpeech.ts`)

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

  return { speak, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Local Installation & Development Workflow

### Prerequisites
* **Node.js** v18.x or later
* **npm** or **yarn** or **pnpm**

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
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 4. Build for Production
```bash
npm run build
```

---

## 🤝 Contribution & Accessibility Guidelines

We welcome contributions from developers, accessibility advocates, educators, and designers!

### Core Accessibility Checklist for Contributors:
1. **Semantic HTML First:** Use `<main>`, `<nav>`, `<header>`, `<section>`, and `<button>` instead of non-semantic clickable `<div>` elements.
2. **WCAG 2.1 AA Color Contrast:** Ensure all custom UI components maintain at least a **4.5:1** contrast ratio for normal text and **3:1** for large text across all four color themes.
3. **Keyboard Navigability:** Every interactive element must be reachable and triggerable using `Tab`, `Shift+Tab`, `Space`, and `Enter` with visible focus indicators.
4. **ARIA Labels & Live Regions:** Mark dynamic voice dictation statuses and chat notifications using `aria-live="polite"` so screen readers convey status updates seamlessly.

---

## 📄 License

PenPal is open-source software made available under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 for inclusive, stress-free language learning.
</p>
