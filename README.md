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

---

## 📖 Table of Contents
- [🌟 Why PenPal?](#-why-penpal)
- [👥 Target Audiences](#-target-audiences)
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

## 👥 Target Audiences

We design PenPal to deliver empathy, clarity, and precision across four distinct user groups:

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

### 1. Dyslexic & Neurodivergent Learners
- **Our Goal:** Alleviate reading and writing fatigue.
- **Experience:** A clean, distraction-free environment with personalized typography, color schemes, and real-time pronunciation support. Custom sentence-starters and bimodal reading minimize performance anxiety.

### 2. Parents & Guardians
- **Our Goal:** Provide transparent, supportive insights.
- **Experience:** A dedicated dashboard offering visual summaries of their child's confidence levels, vocabulary progress, and communication activity. Parents can co-adjust visual settings and assist in defining structured learning targets.

### 3. Special Education Needs (SEN) Departments & Educators
- **Our Goal:** Empower educators with actionable, individual-focused analytics.
- **Experience:** Scalable administration portals that map directly to IEP (Individualized Education Program) goals. Educators can remotely toggle features, export performance summaries, and support students in a structured, school-compliant environment.

### 4. Developers & Accessibility Advocates
- **Our Goal:** Build an extensible, state-of-the-art, open-source community platform.
- **Experience:** Fully commented TypeScript codebase, complete semantic-HTML structures, keyboard navigation flows, and WCAG 2.1 AA compliant styling using Radix UI primitives and custom CSS variables.

---

## 🧩 Dyslexia-Friendly Design System

PenPal does not treat accessibility as an afterthought—it is our primary design constraint. We implement specific cognitive and visual accommodations:

### 🔠 Specialized Typography
*   **Dyslexia-Optimized Typefaces:** Toggle between specialized weighted fonts such as **OpenDyslexic** or clean, heavy sans-serifs (e.g., Comic Sans, Arial, or custom-spaced system fonts) that combat letter-rotation, letters "flipping," or crowding.
*   **Interactive Visual Spacing:** Fine-tune character spacing (letter-tracking), word spacing, and line height to mitigate crowding effects (visual crowding).

### 🎨 Visual Comfort & Contrast Control
*   **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft cream, warm peach, soft blue, pale lavender, or muted grey-green themes designed to alleviate scotopic sensitivity (Irlen syndrome) and eliminate screen glare.
*   **Interactive Reading Ruler:** An overlay focusing tool that highlights only the line of text directly under the reader's cursor, helping eyes track text smoothly without drifting.
*   **Distraction-Free Mode:** Instant toggle to strip away non-essential UI components, sidebar navigations, achievement badges, or secondary panels—retaining only the learning activity.

### 🧠 Cognitive Scaffolding & Bimodal Design
*   **Bimodal Presentation:** Displays text and plays high-quality Speech-to-Text audio simultaneously, reinforcing phonemic awareness and mapping printed words directly to spoken sounds.
*   **Asynchronous-First Communication:** Eliminates stress-inducing countdown timers. Students read, process, draft, and speak on their own schedule.

---

## 🚀 Key Features

### 1. Peer-to-Peer PenPal Matching 🤝
*   **Safe & Structured Environments:** Fully vetted, age-gated, and moderation-protected connections pairing students with compatible global language-learning partners.
*   **Guided Communication Templates:** Ready-to-use sentence frames, vocabulary suggestion chips, and prompts that ease drafting anxiety and boost structured writing.
*   **Cooperative Quizzes:** Collaborative gamification where both matching partners contribute answers without speed penalties or competitive stress.

### 2. Multisensory Communication Tools 🔊🎙️
*   **Double-Tap Text-to-Speech (TTS):** Highlight, click, or double-tap any text string to hear it pronounced immediately with natural, customizable vocal speeds, pitches, and gender profiles.
*   **Speech-to-Text (STT) Input:** Dictation-driven input fields that allow students to comfortably articulate complex narratives without spelling barriers.
*   **Syllabic & Phonetic Breakdowns:** Expandable pronunciation tooltips that separate complex vocabulary into clear color-coded syllables and phonetic pronunciations.

### 3. SEN-Focused Parent & Educator Portals 📊
*   **Accommodation Remote Control:** Allows educators to adjust font sizing, default visual contrast, and TTS triggers for a student's profile directly from the portal.
*   **IEP-Aligned Progress Trackers:** Easy-to-read charts that highlight vocabulary growth, message volume, and interactive reading ruler utilization.
*   **Exportable Learning Portfolios:** Generates detailed reports detailing learning progress, useful for IEP reviews and school board assessments.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is engineered to be modern, lightning-fast, and deeply extensible. We leverage **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

### **Directory Structure**

```
/
├── public/                 # Static assets (fonts, icons, illustrations)
│   └── fonts/              # OpenDyslexic and specialized typography assets
├── src/
│   ├── app/                # Next.js App Router routes & page views
│   │   ├── layout.tsx      # Base layout containing A11y Providers
│   │   ├── page.tsx        # Homepage landing page
│   │   ├── dashboard/      # Dyslexic Learner Dashboard
│   │   ├── educator/       # SEN & Educator Portal
│   │   └── parent/         # Parent Progress Tracker
│   ├── components/         # Shared UI components
│   │   ├── a11y/           # Accessibility utilities (ReadingRuler, ContrastPicker)
│   │   ├── forms/          # Accessible input components with aria labels
│   │   └── ui/             # Unstyled, screen-reader-compliant base primitives (Radix)
│   ├── context/            # React global context providers
│   │   ├── AccessibilityContext.tsx # Manages typography, themes, rulers, and TTS presets
│   │   └── AuthContext.tsx          # Secure role-based user authentication
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper for low-latency custom TTS/STT
│   │   └── useMatch.ts     # P2P Matching state machine
│   └── styles/             # Global configurations
│       └── globals.css     # Tailwind configuration containing custom accessible variables
├── LICENSE                 # License documentation (MIT)
└── README.md               # Extensive project guides and developer onboarding
```

---

## 💻 Developer Code Snippets & Implementation Examples

Here are representative, highly structured code templates that showcase how PenPal implements adaptive dyslexia-friendly utilities.

### 1. `AccessibilityContext.tsx`
This provider leverages React and custom CSS variables to apply typography and color configurations in real time across the entire viewport.

```typescript
import React, { createContext, useContext, useState, useEffect } from 'react';

type DyslexiaFont = 'open-dyslexic' | 'sans-serif' | 'standard';
type ThemeColor = 'default-cream' | 'pastel-blue' | 'pastel-green' | 'high-contrast';

interface AccessibilitySettings {
  fontFamily: DyslexiaFont;
  lineHeight: number;
  letterSpacing: number;
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  setSettings: React.Dispatch<React.SetStateAction<AccessibilitySettings>>;
}

const AccessibilityContext = createContext<AccessibilitySettings | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontFamily: 'open-dyslexic',
    lineHeight: 1.8,
    letterSpacing: 2.0,
    themeColor: 'default-cream',
    readingRulerEnabled: false,
    setSettings: () => {},
  });

  useEffect(() => {
    const root = document.documentElement;
    // Inject dynamic CSS custom properties directly onto the root element
    root.style.setProperty('--font-family-current', settings.fontFamily === 'open-dyslexic' ? 'OpenDyslexic, sans-serif' : 'Arial, sans-serif');
    root.style.setProperty('--line-height-current', `${settings.lineHeight}`);
    root.style.setProperty('--letter-spacing-current', `${settings.letterSpacing}px`);
    root.style.setProperty('--theme-bg-color', getThemeColor(settings.themeColor));
  }, [settings]);

  return (
    <AccessibilityContext.Provider value={{ ...settings, setSettings }}>
      <div
        style={{
          fontFamily: 'var(--font-family-current)',
          lineHeight: 'var(--line-height-current)',
          letterSpacing: 'var(--letter-spacing-current)',
          backgroundColor: 'var(--theme-bg-color)',
          minHeight: '100vh',
          transition: 'all 0.25s ease'
        }}
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

const getThemeColor = (theme: ThemeColor): string => {
  switch (theme) {
    case 'default-cream': return '#FCF9F2'; // Warm anti-glare cream
    case 'pastel-blue': return '#EBF4F6';  // Soft pastel blue
    case 'pastel-green': return '#F1F7ED'; // Pastel leaf green
    case 'high-contrast': return '#000000';
    default: return '#FFFFFF';
  }
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAccessibility must be used within AccessibilityProvider');
  return context;
};
```

### 2. `ReadingRuler.tsx`
A highly focused interactive component that tracks vertical mouse movement, providing a highlight focus strip for visual tracking.

```typescript
import React, { useState, useEffect } from 'react';
import { useAccessibility } from '@/context/AccessibilityContext';

export const ReadingRuler: React.FC = () => {
  const { readingRulerEnabled } = useAccessibility();
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    if (!readingRulerEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [readingRulerEnabled]);

  if (!readingRulerEnabled) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: `${mouseY - 20}px`,
        left: 0,
        width: '100%',
        height: '40px',
        backgroundColor: 'rgba(253, 224, 71, 0.25)', // Transparent soft highlighter yellow
        borderTop: '2px solid rgba(254, 240, 138, 0.8)',
        borderBottom: '2px solid rgba(254, 240, 138, 0.8)',
        pointerEvents: 'none', // Allow cursor interactions beneath overlay
        zIndex: 9999,
        mixBlendMode: 'multiply',
      }}
      aria-hidden="true"
    />
  );
};
```

### 3. `useSpeech.ts`
Custom low-latency react wrapper around the browser's native Web Speech API to provide click-to-speech functionality.

```typescript
import { useState, useCallback } from 'react';

export const useSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = useCallback((text: string, lang = 'es-ES', speed = 0.85) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Terminate pending utterances

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speed; // Default to slower processing pace

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  return { speak, stop, isPlaying };
};
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
# or
pnpm install
# or
yarn install
```

### 3. Launch Local Development Server
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser to view the application.

### 4. Run Test Suites
```bash
npm run test
# or
pnpm test
# or
yarn test
```

### 5. Compile & Launch Production Build
```bash
# Compile and optimize static output
npm run build

# Start optimized product server
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
