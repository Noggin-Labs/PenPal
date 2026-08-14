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
- [👥 Target Audiences & Portal Breakdown](#-target-audiences--portal-breakdown)
  - [1. Learner Dashboard (`/dashboard`)](#1-learner-dashboard-dashboard)
  - [2. Parent Progress Portal (`/parent`)](#2-parent-progress-portal-parent)
  - [3. SEN Educator Desk (`/educator`)](#3-sen-educator-desk-educator)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🛡️ State Management & Local Storage Persistence](#️-state-management--local-storage-persistence)
- [🛠️ Technical Architecture & Directory Blueprint](#️-technical-architecture--directory-blueprint)
- [💻 Developer Code Snippets](#-developer-code-snippets)
- [⚙️ Local Installation & Development Setup](#️-local-installation--development-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Target Audiences & Portal Breakdown

PenPal provides dedicated portals tailored to three core user roles:

```
                            ┌───────────────────────────┐
                            │     PENPAL PORTAL HUB     │
                            └─────────────┬─────────────┘
                                          │
             ┌────────────────────────────┼────────────────────────────┐
             ▼                            ▼                            ▼
   ┌───────────────────┐        ┌───────────────────┐        ┌───────────────────┐
   │ Dyslexic Learner  │        │ Parent / Guardian │        │ SEN Educator Desk │
   │   `/dashboard`    │        │     `/parent`     │        │    `/educator`    │
   └───────────────────┘        └───────────────────┘        └───────────────────┘
```

### 1. Learner Dashboard (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Peer-to-Peer PenPal Exchange:** Vetted asynchronous chat with international penpals (e.g., *Mateo from Madrid*). Includes structured conversation frames and translation assists.
* **Interactive Syllable & Phonetic Breakdown:** Clicking any word in the chat reveals a color-coded syllable breakdown, phonetic transcriptions, and localized translation (e.g., **fút · bol** in rose/emerald blocks).
* **Cooperative Quizzes:** Stress-free matching activities solved with partner dialogue hints instead of competitive pressure timers.
* **Bimodal Dictation & Speech Support:** Built-in Web Speech API integration allowing dual Text-to-Speech playback and Speech-to-Text dictation.

### 2. Parent Progress Portal (`/parent`)
* **Tone:** Reassuring, clear, and informative.
* **Confidence Metrics Tracker:** Visual summary of the child's reading stamina, writing autonomy, message activity, and vocabulary growth.
* **Parental Override Controls:** Parents can remotely adjust visual and typography settings (font family, font size, letter spacing, word spacing, line height, theme contrast, and reading ruler height) to align with their child's needs.
* **IEP Progress Exporting:** One-click generation of qualitative progress logs for clinical teams and school staff.

### 3. SEN Educator Desk (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Classroom Roster Analytics:** Real-time visibility into student performance, total messages sent, and learned vocabulary count.
* **IEP Goal Integration:** Direct mapping of learner milestones to formal Individualized Education Program (IEP) targets.
* **Remote Accommodation Overrides:** Educators can update accommodation settings across student profiles on the fly.

---

## 🧩 Dyslexia-Friendly Design System

PenPal embeds visual and cognitive scaffolding directly into its styling and component primitives:

### 🔠 Specialized Typography
* **Dyslexia-Optimized Fonts:** Select between **OpenDyslexic** (weighted baselines to prevent letter-flipping), clean sans-serif (Arial), or standard system fonts.
* **Granular Spacing Controls:** Adjust letter-spacing, word-spacing, line-height, and font-size multiplier dynamically to eliminate visual crowding.

### 🎨 Visual Comfort & Anti-Glare Themes
* **Irlen-Friendly Color Overlays:** Choose from soft cream (`#FCF9F2`), pastel blue (`#EBF4F6`), pastel green (`#F1F7ED`), or high-contrast dark theme (`#0D0D0D`).
* **Interactive Reading Ruler:** Focus strip tracking mouse position vertically to dim surrounding text lines, guiding eye movements smoothly.
* **Distraction-Free Mode:** Hides non-essential UI elements to keep focus on the core activity workspace.

---

## 🛡️ State Management & Local Storage Persistence

PenPal is completely client-side and self-contained, using browser `localStorage` to persist user data and synchronize state across the three role portals:

| Storage Key | Description |
| :--- | :--- |
| `penpal_a11y_settings` | Stores global typography, spacing, theme, reading ruler, and speech configurations. |
| `penpal_messages` | Persists conversation history between the learner and penpal. |
| `penpal_messages_sent_count` | Tracks total number of messages dispatched by the student. |
| `penpal_quiz_points` | Stores points earned in cooperative learning activities. |
| `penpal_learned_vocab` | List of words unlocked and practiced by the learner. |

---

## 🛠️ Technical Architecture & Directory Blueprint

PenPal is built with **Next.js 14** (App Router), **React 18**, **TypeScript**, and **Tailwind CSS**.

```
penpal/
├── public/                     # Public assets (e.g. OpenDyslexic font files)
├── src/
│   ├── app/                    # Next.js App Router Pages
│   │   ├── layout.tsx          # Root layout wrapped with AccessibilityProvider
│   │   ├── page.tsx            # Role selector landing page
│   │   ├── dashboard/          # Learner interactive workspace
│   │   ├── educator/           # SEN Educator dashboard
│   │   └── parent/             # Parent monitoring & remote setup portal
│   ├── components/             # Reusable UI components
│   │   ├── a11y/               # ReadingRuler accessibility widget
│   │   └── NavigationHeader.tsx# Role navigation & accessibility toolbar
│   ├── context/                # Global React Contexts
│   │   ├── AccessibilityContext.tsx # Central context managing contrast, typography, & ruler
│   │   └── AuthContext.tsx     # Role management context (Learner, Parent, Educator)
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useSpeech.ts        # Browser Web Speech API hook (Speech Synthesis & Recognition)
│   │   └── useMatch.ts         # PenPal chat state machine & automated responder
│   └── styles/                 # Global styles
│       └── globals.css         # CSS custom properties and baseline styles
├── LICENSE                     # MIT License
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS design system configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 💻 Developer Code Snippets

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

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  useEffect(() => {
    const saved = localStorage.getItem("penpal_a11y_settings");
    if (saved) {
      try { setSettings(JSON.parse(saved)); } catch (e) { /* handle error */ }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("penpal_a11y_settings", JSON.stringify(settings));
    const root = document.documentElement;
    // Apply CSS variables dynamically to the document root
    root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
    root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
    root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
```

### 2. Speech Synthesis & Dictation Hook (`src/hooks/useSpeech.ts`)

```typescript
"use client";

import { useState, useCallback } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback((text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [speechSpeed]);

  return { speak, isPlaying, isListening };
};
```

---

## ⚙️ Local Installation & Development Setup

### Prerequisites
* **Node.js** (v18.x or later)
* **npm** (v9.x or later)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
   cd PenPal
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build and lint:**
   ```bash
   npm run build
   npm run lint
   ```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, educators, accessibility experts, and designers!

1. **Fork the Repository** and create a feature branch (`git checkout -b feature/accessible-feature`).
2. **Adhere to Accessibility Guidelines:** Ensure all new components follow WCAG 2.1 AA standards, include appropriate `aria-*` tags, and maintain keyboard accessibility.
3. **Commit & Push:** Submit clear, concise commits.
4. **Open a Pull Request:** Describe the changes made and link relevant issues.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 — Bridging communication gaps, one inclusive letter at a time.
</p>
