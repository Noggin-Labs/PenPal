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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia and visual processing differences (such as Irlen Syndrome/scotopic sensitivity). By combining state-of-the-art web accessibility features (such as specialized typography, reading guides, and bimodal dictation utilities), safe asynchronous social connectivity, and synchronized parent/educator portals, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Multi-Role Platform Architecture](#-multi-role-platform-architecture)
  - [1. Dyslexic Learner Workspace (`/dashboard`)](#1-dyslexic-learner-workspace-dashboard)
  - [2. Parent Progress & Insights Board (`/parent`)](#2-parent-progress--insights-board-parent)
  - [3. SEN Educator & Admin Desk (`/educator`)](#3-sen-educator--admin-desk-educator)
- [🛡️ Privacy & State Persistence Model](#️-privacy--state-persistence-model)
- [🛠️ Directory Blueprint](#️-directory-blueprint)
- [💻 Technical Deep Dive & Key Implementations](#-technical-deep-dive--key-implementations)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous peer-to-peer (P2P) communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning journey.

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
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom character/word spacing, an interactive highlight reading ruler, and bimodal dictation utilities to eliminate spelling anxiety.

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

## 🚀 Multi-Role Platform Architecture

The platform operates across three interconnected, role-based portals mapped to specific user workflows.

### 1. Dyslexic Learner Workspace (`/dashboard`)
An interactive learning panel engineered to enable comfortable expression, asynchronous practice, and bimodal reinforcement:
* **Peer-to-Peer PenPal Matching:** Vetted, safe simulated matching with international partners (such as *Mateo from Madrid*). Includes structured conversation frames and translation assists.
* **Word Breakdown Tooltip Desk:** Clicking any word in the chat immediately reveals a color-coded syllable breakdown, phonetic transcriptions, and localized translation.
* **Syllable Color Scaffolding:** Visually separates syllables in alternating colors (e.g., **fút · bol** in rose/emerald blocks) to make pronunciation patterns intuitive.
* **Asynchronous Writing Scaffolds:** Expandable writing helpers featuring Spanish sentence frames (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestion chips.
* **Cooperative Quizzes:** Stress-free, collaborative matching activities solved with partner dialogue hints instead of competitive timers.
* **Web-Speech Mic Integration:** Speak-to-write translation assisting learners who have spelling challenges but strong spoken command.

### 2. Parent Progress & Insights Board (`/parent`)
An informative dashboard offering visibility and active support:
* **Confidence Metrics Tracker:** Visual summaries tracking reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Override Controls:** Parents can remotely customize default contrast themes, text-scaling, and vocal playback speeds to align with their child's daily stamina.
* **Portfolio Exporter:** One-click generation of progress reports to share with clinical teams or educators.

### 3. SEN Educator & Admin Desk (`/educator`)
A professional grade workspace structured for school environments and educators:
* **Classroom Roster Analytics:** Real-time visibility of student progression against set targets.
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage) to formal IEP objectives.
* **Accommodation Override Controls:** Remotely adjust student font profiles, zoom scales, or default high-contrast layouts.
* **IEP Report Generation:** Instantly export student portfolios formatted for special education compliance audits.

---

## 🛡️ Privacy & State Persistence Model

To prioritize visual security and keep our application entirely self-contained, **PenPal utilizes local storage (`localStorage`)** to mock database persistence and maintain cross-role settings dynamically.

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

The application leverages the following dedicated `localStorage` keys to persist mock database state, student statistics, and accessibility preferences:

| LocalStorage Key | Purpose |
|---|---|
| `penpal_a11y_settings` | Holds the serialized global accessibility configurations (font-family, spacing, theme, reading ruler state, speech rate). Modified dynamically by learner, parent, or educator. |
| `penpal_messages` | Stores the complete chat message log list of the P2P PenPal session. |
| `penpal_messages_sent_count` | An integer tracker representing total messages sent, used for parent confidence metrics and classroom IEP goals. |
| `penpal_quiz_points` | Stores points earned during collaborative quizzes. |
| `penpal_learned_vocab` | A JSON-serialized array containing unique words the learner clicked and dissected using the Syllable Breakdown Analyzer. |

* **Cross-Role Synchronicity:** When a parent or educator remotely updates Alex's typography settings or visual contrast values in their respective portals, the changes write to our centralized `penpal_a11y_settings` localStorage key and synchronize instantly to the learner's dashboard interface.

---

## 🛠️ Directory Blueprint

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
│   │   │   ├── A11yWidget.tsx    # Floating drawer control panel for local overrides
│   │   │   └── ReadingRuler.tsx  # Cursor-tracking highlight ruler overlay
│   │   └── NavigationHeader.tsx  # Universal role selection bar
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

## 💻 Technical Deep Dive & Key Implementations

### 1. Dynamic Accessibility Context (`AccessibilityContext.tsx`)
This context provider orchestrates visual variables across the entire application viewport, dynamically mapping user overrides onto root custom CSS variables.

```typescript
// Applying font, spacing, and theme variables to the document root dynamically
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

### 2. Multi-Sensory Audio & Speech Engine (`useSpeech.ts`)
This React hook abstracts browser voice synthesis and recognition, enabling low-stress, real-time auditory bimodal assistance.

```typescript
const speak = useCallback(
  (text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Terminate pending utterances

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed; // Adjustable speed pace (slower for dyslexic mapping)

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  },
  [speechSpeed]
);
```

### 3. Cursor-Tracking Reading Ruler (`ReadingRuler.tsx`)
A custom pointer-listener overlay component guiding readers through text lines to counteract Irlen fatigue or focal hopping.

```typescript
useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setYPosition(e.clientY);
  };

  if (readingRulerEnabled) {
    window.addEventListener("mousemove", handleMouseMove);
  }

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, [readingRulerEnabled]);
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
Open [http://localhost:3000](http://localhost:3000) inside your web browser to interact with the application.

### 4. Build and Compile for Production
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility researchers, designers, and educators!

1. **Fork the Repo** and create a descriptively named feature branch (e.g., `feature/reading-ruler-improvements`).
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
