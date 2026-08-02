# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

### **Empowering Every Learner to Connect, Write, and Grow.**

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia, visual processing differences, and scotopic sensitivity (Irlen Syndrome). By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
1. [🌟 Problem Statement & Vision](#-problem-statement--vision)
2. [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
3. [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
4. [🚀 Deep Walkthrough of Portals & Key Features](#-deep-walkthrough-of-portals--key-features)
   - [Learner Workspace (`/dashboard`)](#1-interactive-learner-workspace-dashboard)
   - [Parent Insights Board (`/parent`)](#2-parent-insights-board-parent)
   - [SEN Educator & Administration Desk (`/educator`)](#3-sen-educator--administration-desk-educator)
5. [🛡️ Data Flow & State Persistence Mechanics](#️-data-flow--state-persistence-mechanics)
6. [🛠️ Technical Architecture & Enhanced Directory Blueprint](#️-technical-architecture--enhanced-directory-blueprint)
7. [💻 Deep Dive Developer Implementation Examples](#-deep-dive-developer-implementation-examples)
8. [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
9. [🤝 Contribution Guidelines](#-contribution-guidelines)
10. [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome, these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

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

| Adaptive Parameter | Purpose | Implementation Details |
| :--- | :--- | :--- |
| **OpenDyslexic Font** | Prevents letter flipping & rotation | Custom heavy-weighted baselines (`font-family-current`) |
| **Pastel Overlays** | Minimizes screen glare & Irlen symptoms | Warm cream, pastel blue, and mint green backdrops |
| **Spacing Controls** | Eliminates visual crowding effects | Custom tracking (`letter-spacing`), word margins, and taller line heights |
| **Highlight Reading Ruler**| Focuses visual attention on active lines | Neon yellow cursor-following spotlight overlay strip |
| **Bimodal Audio Support** | Connects graphemes directly to phonemes | Synchronized Text-to-Speech speed adjustment and speech-to-text dictation |
| **Distraction-Free Mode** | Promotes sustained cognitive focus | One-click toggling that hides non-essential side panels and headers |

---

## 🚀 Deep Walkthrough of Portals & Key Features

PenPal features a three-tier portal architecture tailored for learners, parents, and educators.

### 1. Interactive Learner Workspace (`/dashboard`)
The primary learner portal is designed to feel highly interactive, warm, and zero-pressure. It includes:
* **Peer-to-Peer PenPal Matching:** Connects learners with international buddies (e.g., *Mateo from Madrid*) via structured asynchronous conversation interfaces and instant inline translation guides.
* **Clickable Word Breakdown Tooltip Desk:** Learners click any word inside a message to trigger an instant breakdown view. It displays:
  - **Color-Coded Syllables:** Splits words into clear phonetic syllables (e.g., **fút · bol**, **di · bu · jar**) using alternating colored tags (rose, emerald, blue) to visually anchor phonology.
  - **Phonetics & IPA Spelling:** Displays proper pronunciation formatting (e.g., `[ˈfut.βol]`).
  - **Targeted Pronunciation:** Simple Text-To-Speech pronunciation audio playback.
* **Speech-to-Text Dictation Helper (Microphone):** Integrates browser Speech Recognition, allowing learners who struggle with typing or spelling to dictate their responses in Spanish directly.
* **Interactive Writing Scaffolds:** Expandable writing helpers containing high-utility Spanish sentence starters (e.g., *"Me gusta mucho..."*) and clickable vocabulary chips (e.g., *videojuegos*, *dibujar*).
* **Cooperative Quizzes:** Stress-free vocabulary matching activities where learners solve challenges with dialogue hints from their partner instead of beating a competitive, high-anxiety clock.

### 2. Parent Insights Board (`/parent`)
Provides parents with full visibility and remote calibration tools without invading the child’s learning privacy:
* **Confidence & Activity Analytics:** Highlights key cognitive metrics including:
  - *Reading Stamina* (average time spent on dialogue blocks)
  - *Writing Autonomy* (independence from pre-defined sentence starters)
  - *Syllabic Breakdown Utility* (usage patterns of phonology tools)
* **Parental Remote Adaptations Control Panel:** Allows parents to adjust their child's workspace live. They can modify default typography (OpenDyslexic vs Arial), line spacing, text size scaling, auditory pace, or enable/disable the highlight Reading Ruler.
* **One-Click IEP Exporter:** Instantly generates a clean progress summary ready to download and share with tutors or pediatric therapists.

### 3. SEN Educator & Administration Desk (`/educator`)
A professional management workstation designed for Special Education Needs (SEN) coordinators:
* **Interactive Classroom Roster:** Summarizes individual progress, showing current task statuses (*Achieved*, *On Track*, *Needs Support*) for IEP goals.
* **IEP Progress Alignment Tracker:** Integrates student activities directly against specific IEP milestones (e.g., *"Initiate 5 async Spanish responses"*).
* **Live Accommodation Override Panel:** Allows educators to deploy default layout styles, typography presets, anti-glare pastels, or font size scaling to individual learners remotely.
* **Teacher Observational Logs:** Stores qualitative logs mapping student behaviors and successes.

---

## 🛡️ Data Flow & State Persistence Mechanics

PenPal operates as a **P2P Simulator** using standard browser storage to emulate database updates and cross-portal synchronicity in real-time.

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

When changes occur in any of the roles, the state is persisted instantly through React Context coupled with a dynamic local storage binding.

### Key LocalStorage Schemas & Bindings
* `penpal_a11y_settings`: Holds the JSON configuration for global styling parameters, dynamically mapping onto root-level CSS variables on document mount.
* `penpal_messages_sent_count`: Holds the quantity of messages successfully dispatched by the learner, updating classroom metrics immediately.
* `penpal_quiz_points`: Persists XP points earned during Cooperative Quizzes.
* `penpal_learned_vocab`: Tracks discovered Spanish vocabulary.

---

## 🛠️ Technical Architecture & Enhanced Directory Blueprint

PenPal relies on Next.js 14 (App Router), React 18, TypeScript, and Tailwind CSS. The folder structure is carefully modularized to maintain separation between components, state contexts, custom sensory hooks, and route portals.

```
/
├── public/                     # Static assets (custom accessibility fonts, illustrations)
├── src/
│   ├── app/                    # Next.js App Router Page Layouts
│   │   ├── layout.tsx          # Base HTML, wrapping the app in Auth & Accessibility Providers
│   │   ├── page.tsx            # Portal Selector (Landing simulation dock)
│   │   ├── dashboard/          # /dashboard - Learner Workspace Portal
│   │   ├── educator/           # /educator - SEN Educator & Classroom Desk Portal
│   │   └── parent/             # /parent - Parent Progress & Remote Adaptation Portal
│   ├── components/             # Reusable UI Primitives
│   │   ├── a11y/
│   │   │   ├── A11yWidget.tsx  # Floating adaptation menu widget (text, spacing, themes)
│   │   │   └── ReadingRuler.tsx# Cursor-tracking highlighter overlay strip
│   │   └── NavigationHeader.tsx# Dynamic portal switcher header bar
│   ├── context/                # Global React Context Stores
│   │   ├── AccessibilityContext.tsx # Manages fonts, spacing, pastels, and TTS speeds
│   │   └── AuthContext.tsx      # Emulates mock user role authorization & switching
│   ├── hooks/                  # Custom React Hooks
│   │   ├── useSpeech.ts        # Auditory Speech-to-Text and Text-to-Speech API wrappers
│   │   └── useMatch.ts         # Mock P2P peer dialogue & matching simulator
│   └── styles/                 # Tailwind custom property style maps
│       └── globals.css         # Global root mappings for dynamically loaded accessibility properties
├── LICENSE                     # MIT License
├── package.json                # Project dependencies and script bindings
├── tailwind.config.js          # Tailwind styling definitions
└── tsconfig.json               # TypeScript configuration settings
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
This context orchestrates visual configurations globally, mapping settings to CSS root custom properties.

```typescript
// Located at: src/context/AccessibilityContext.tsx
// Translates React settings to live DOM changes
useEffect(() => {
  const root = document.documentElement;

  // 1. Resolve target fonts
  let fontValue = "system-ui, -apple-system, sans-serif";
  if (settings.fontFamily === "open-dyslexic") {
    fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
  } else if (settings.fontFamily === "sans-serif") {
    fontValue = "Arial, Helvetica, sans-serif";
  }
  root.style.setProperty("--font-family-current", fontValue);

  // 2. Set dynamic spacing & layouts
  root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
  root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
  root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
  root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);

  // 3. Deploys background overlays to eliminate screen glare
  const colors = getThemeColors(settings.themeColor);
  root.style.setProperty("--theme-bg-color", colors.bg);
  root.style.setProperty("--theme-text-color", colors.text);
  root.style.setProperty("--theme-card-bg", colors.cardBg);
  root.style.setProperty("--theme-border-color", colors.border);
}, [settings]);
```

### 2. Low-Latency Web Speech Wrapper (`useSpeech.ts`)
This wrapper facilitates slow-paced speech playback to assist auditory-grapheme association.

```typescript
// Located at: src/hooks/useSpeech.ts
// Abstracts standard speech APIs into React hooks
export const useSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback((text: string, lang = 'es-ES', speed = 0.8) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Clears any active voice tasks

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speed; // Tailored pace optimized for learning processing

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  return { speak, isPlaying };
};
```

---

## ⚙️ Local Installation & Environment Setup

Follow these steps to spin up PenPal locally on your machine.

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
Open [http://localhost:3000](http://localhost:3000) inside your browser to interact with the simulated client portal.

### 4. Build and Compile for Production
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility researchers, designers, and educators!

### Key Guidelines
1. **Fork and Branch:** Create a descriptively named feature branch off `main` (e.g., `feature/reading-ruler-heights`).
2. **Commit with Purpose:** Keep your commit messages descriptive and precise.
3. **Ensure WCAG Compliance:** All visual components must preserve keyboard-navigable focus styles and clear `aria-*` markers.
4. **Code Quality:** Ensure standard TypeScript strict types are maintained. Run a build checklist (`npm run build`) locally before opening a pull request.

---

## 📄 License

This software is open-source, licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
