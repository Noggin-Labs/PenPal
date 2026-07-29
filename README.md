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

**PenPal** is an adaptive, social-first language learning platform designed from the ground up for learners with dyslexia and visual processing differences. By combining state-of-the-art accessibility (A11y) standards, interactive multisensory utilities, and safe social connectivity, PenPal transforms language learning from a source of anxiety into a rewarding, highly inclusive, and collaborative journey.

The application is a self-contained frontend utilizing `localStorage` to mock database persistence, peer-to-peer messaging, and student progress metrics.

---

## 📖 Table of Contents
- [🌟 Why PenPal?](#-why-penpal)
- [👥 Target Audiences & Role-Based Workspaces](#-target-audiences--role-based-workspaces)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Features](#-key-features)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Developer Code Snippets & Implementation Examples](#-developer-code-snippets--implementation-examples)
- [⚙️ Getting Started & Installation](#️-getting-started--installation)
- [🤝 Contributing Guidelines](#-contributing-guidelines)
- [📄 License](#-license)

---

## 🌟 Why PenPal?

Traditional language learning platforms rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome, these layouts create massive barriers to engagement, causing cognitive overload and self-doubt.

**PenPal** bridges this digital divide. By introducing customizable sensory adaptations, safe structured social matching, and real-time auditory/visual bimodal learning, PenPal provides a supportive, stress-free space where language acquisition feels natural, rewarding, and deeply collaborative.

---

## 👥 Target Audiences & Role-Based Workspaces

We design PenPal to deliver empathy, clarity, and precision across four distinct user groups. The application simulates the platform via three interconnected, role-based dashboards:

```
                  ┌─────────────────────────────────────────┐
                  │              PENPAL SYSTEM              │
                  └────┬───────────┬───────────┬────────────┘
                       │           │           │
                       ▼           ▼           ▼
        ┌──────────────────┐ ┌───────────┐ ┌──────────────────┐
        │ Dyslexic Learner │ │  Parents  │ │ SEN Departments │
        └──────────────────┘ └───────────┘ └──────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
- **Our Goal:** Alleviate reading and writing fatigue.
- **Experience:** A clean, distraction-free environment with personalized typography, color schemes, and real-time pronunciation support. Custom sentence-starters, vocabulary suggestions, and bimodal reading minimize performance anxiety.

### 2. Parents & Guardians (`/parent`)
- **Our Goal:** Provide transparent, supportive insights.
- **Experience:** A dedicated dashboard offering visual summaries of their child's confidence levels, vocabulary progress, and communication activity. Parents can remotely override and configure visual settings (fonts, contrast schemes, text size, and speech speed) that sync instantly to the learner's view.

### 3. Special Education Needs (SEN) Departments & Educators (`/educator`)
- **Our Goal:** Empower educators with actionable, individual-focused analytics.
- **Experience:** Scalable administration portals that map directly to IEP (Individualized Education Program) goals. Educators can manage classroom rosters, remotely toggle features, export performance summaries to SEN board compliant formats, and configure remote student accommodations.

### 4. Developers & Accessibility Advocates
- **Our Goal:** Build an extensible, state-of-the-art, open-source community platform.
- **Experience:** Fully commented TypeScript codebase, complete semantic-HTML structures, keyboard navigation flows, and WCAG 2.1 AA compliant styling using Radix UI primitives, Lucide icons, and custom CSS variables.

---

## 🧩 Dyslexia-Friendly Design System

PenPal does not treat accessibility as an afterthought—it is our primary design constraint. We implement specific cognitive and visual accommodations:

### 🔠 Specialized Typography
*   **Dyslexia-Optimized Typefaces:** Toggle between specialized weighted fonts such as **OpenDyslexic** (with heavy baselines that combat letter-rotation and "flipping") or clean, heavy sans-serifs (e.g., Comic Sans, Arial, or custom-spaced system fonts).
*   **Interactive Visual Spacing:** Fine-tune character spacing (letter-tracking), word spacing, and line height to mitigate crowding effects (visual crowding).

### 🎨 Visual Comfort & Contrast Control
*   **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft cream (`#FCF9F2`), soft blue (`#EBF4F6`), pale lavender/mint green (`#F1F7ED`), or muted high-contrast black (`#0D0D0D`) themes designed to alleviate scotopic sensitivity (Irlen syndrome) and eliminate screen glare.
*   **Interactive Reading Ruler:** An overlay focusing tool with custom height thickness that highlights only the line of text directly under the reader's cursor, helping eyes track text smoothly without drifting.
*   **Distraction-Free Mode:** Instant toggle to strip away non-essential UI components, sidebar navigations, achievement badges, or secondary panels—retaining only the learning activity.

### 🧠 Cognitive Scaffolding & Bimodal Design
*   **Bimodal Presentation:** Displays text and plays high-quality Speech-to-Text audio simultaneously, reinforcing phonemic awareness and mapping printed words directly to spoken sounds.
*   **Asynchronous-First Communication:** Eliminates stress-inducing countdown timers. Students read, process, draft, and speak on their own schedule.

---

## 🚀 Key Features

### 1. Peer-to-Peer PenPal Matching 🤝
*   **Safe & Structured Environments:** Fully vetted, age-gated, and moderation-protected connections pairing students with compatible global language-learning partners (e.g., Mateo from Madrid, Spain).
*   **Guided Communication Templates:** Ready-to-use sentence frames (like `"Me gusta mucho..."`), vocabulary suggestion chips, and prompts that ease drafting anxiety and boost structured writing.
*   **Cooperative Quizzes:** Collaborative gamification where both matching partners contribute answers without speed penalties or competitive stress.

### 2. Multisensory Communication Tools 🔊🎙️
*   **Double-Tap Text-to-Speech (TTS):** Highlight, click, or double-tap any text string to hear it pronounced immediately with natural, customizable vocal speeds, pitches, and gender profiles.
*   **Speech-to-Text (STT) Input:** Dictation-driven input fields that allow students to comfortably articulate complex narratives without spelling barriers, utilizing the Web Speech API with built-in fallbacks.
*   **Syllabic & Phonetic Breakdowns:** Expandable pronunciation tooltips that separate complex vocabulary into clear color-coded syllables and phonetic pronunciations.

### 3. SEN-Focused Parent & Educator Portals 📊
*   **Accommodation Remote Control:** Allows parents and educators to adjust font sizing, default visual contrast, speech synthesizer pace, and reading ruler height for a student's profile directly from the portal.
*   **IEP-Aligned Progress Trackers:** Easy-to-read charts that highlight vocabulary growth, message volume, reading stamina, writing autonomy, and interactive reading ruler utilization.
*   **Exportable Learning Portfolios:** Generates detailed reports detailing learning progress, useful for IEP reviews and school board assessments.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is engineered to be modern, lightning-fast, and deeply extensible. We leverage **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

### **Directory Structure**

```
/
├── public/                 # Static assets (fonts, icons, illustrations)
├── src/
│   ├── app/                # Next.js App Router routes & page views
│   │   ├── layout.tsx      # Base layout containing Context Providers
│   │   ├── page.tsx        # Homepage landing page (Simulation Role Selector)
│   │   ├── dashboard/      # Dyslexic Learner Dashboard & Workstation
│   │   ├── educator/       # SEN & Educator Administration Board
│   │   └── parent/         # Parent Progress Tracker & Remote Controls
│   ├── components/         # Shared UI components
│   │   ├── a11y/           # Accessibility utilities
│   │   │   ├── A11yWidget.tsx    # Floating Adaptation Center panel
│   │   │   └── ReadingRuler.tsx  # Dynamic highlighter strip
│   │   └── NavigationHeader.tsx  # Global header containing simulator navigation controls
│   ├── context/            # React global context providers
│   │   ├── AccessibilityContext.tsx # Manages typography, themes, rulers, and TTS presets
│   │   └── AuthContext.tsx          # Secure role-based user authentication
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper for low-latency custom TTS/STT
│   │   └── useMatch.ts     # P2P Matching state machine (simulated chat partner)
│   └── styles/             # Global configurations
│       └── globals.css     # Tailwind configuration containing custom accessible variables
├── LICENSE                 # License documentation (MIT)
└── README.md               # Extensive project guides and developer onboarding
```

---

## 💻 Developer Code Snippets & Implementation Examples

Here are the real-world, highly structured code templates from the PenPal implementation showing how the platform achieves dynamic dyslexia-friendly adaptations.

### 1. `AccessibilityContext.tsx`
This provider leverages React and custom CSS variables to apply typography, spacing, and color configurations in real-time across the entire viewport, persisting changes to `localStorage`.

```typescript
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

// Default settings are carefully crafted to provide optimal dyslexia styling out-of-the-box
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
```

On state changes, configurations are automatically synced to the browser viewport as CSS custom properties:

```typescript
useEffect(() => {
  if (mounted) {
    localStorage.setItem("penpal_a11y_settings", JSON.stringify(settings));
  }

  const root = document.documentElement;

  // Apply font variables
  let fontValue = "system-ui, -apple-system, sans-serif";
  if (settings.fontFamily === "open-dyslexic") {
    fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
  } else if (settings.fontFamily === "sans-serif") {
    fontValue = "Arial, Helvetica, sans-serif";
  }
  root.style.setProperty("--font-family-current", fontValue);

  // Apply spacing and typography sizes
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
}, [settings, mounted]);
```

### 2. `ReadingRuler.tsx`
A highly focused interactive component that tracks vertical mouse movement, providing a highlight focus strip for visual tracking without blocking pointer interactions.

```typescript
import React, { useState, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const ReadingRuler: React.FC = () => {
  const { readingRulerEnabled, readingRulerHeight } = useAccessibility();
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    if (!readingRulerEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [readingRulerEnabled]);

  if (!readingRulerEnabled) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: `${mouseY - readingRulerHeight / 2}px`,
        left: 0,
        width: "100%",
        height: `${readingRulerHeight}px`,
        backgroundColor: "rgba(253, 224, 71, 0.22)", // Soft high-visibility neon yellow strip
        borderTop: "2px solid rgba(234, 179, 8, 0.7)",
        borderBottom: "2px solid rgba(234, 179, 8, 0.7)",
        pointerEvents: "none", // Allows clicking things "under" the ruler perfectly
        zIndex: 99999,
        mixBlendMode: "multiply",
      }}
      aria-hidden="true"
    />
  );
};
```

### 3. `useSpeech.ts`
Custom hooks wrap the web browser's native Speech Synthesizer and Speech Recognition APIs to handle click-to-speech, reading rates, and speech dictation helpers seamlessly:

```typescript
const speak = useCallback(
  (text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Terminate pending utterances

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed; // Synchronized dynamically to user speech rate settings

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  },
  [speechSpeed]
);
```

---

## ⚙️ Getting Started & Installation

Follow these instructions to set up the PenPal development environment locally.

### Prerequisites
*   **[Node.js](https://nodejs.org/)** (v18.x or later highly recommended)
*   **npm**, **pnpm**, or **yarn** package manager installed

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Launch Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser to view the application.

### 4. Code Quality & Formatting Check
```bash
npm run lint
```

### 5. Compile & Launch Production Build
```bash
# Compile and optimize static output
npm run build

# Start optimized production server
npm run start
```

---

## 🤝 Contributing Guidelines

We welcome and deeply appreciate contributions from software developers, designers, neurodiversity advocates, and educators!

### Guidelines for Submitting Contributions
1. **Fork this repository** and create a feature branch:
   ```bash
   git checkout -b feature/your-awesome-feature
   ```
2. **Adhere to Code Guidelines:** Ensure all custom components support semantic HTML structures, include precise `aria-*` tags, pass contrast requirements under all pastel presets, and maintain 100% keyboard navigability.
3. **Write Tests:** Include comprehensive unit or integration tests for core logic, custom hooks, and dynamic layout controls.
4. **Clean Commits:** Provide concise and clear commit messages detailing your implementation patterns.
5. **Open a Pull Request:** Provide clear context, mention corresponding issue tickets, and attach screen recordings or screenshots showing accessibility improvements.

---

## 📄 License

This project is licensed under the terms of the MIT License. For more information, please consult the [LICENSE](LICENSE) file located in the project's root.

---

<p align="center">
  Made with 💙 and ☕ to make language learning accessible to everyone.
</p>
