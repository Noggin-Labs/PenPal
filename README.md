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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia, visual processing differences, and scotopic sensitivity (e.g., Irlen Syndrome). By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Multi-Portal Architecture & Features](#-multi-portal-architecture--features)
- [🛡️ State Persistence & Cross-Portal Synchronization](#️-state-persistence--cross-portal-synchronization)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Deep-Dive Implementation Insights](#-deep-dive-implementation-insights)
- [⚙️ Local Installation & Development Setup](#️-local-installation--development-setup)
- [🧪 Testing & Quality Verification](#-testing--quality-verification)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text blocks, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome, these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

### Core Principles
1. **Accessibility First, Not as an Afterthought:** Every component is designed to conform with WCAG 2.1 AA standards, supporting keyboard navigability and dynamic text scaling.
2. **Stress-Free Pedagogical Models:** No-stress gamification that removes ticking timers and replaces them with cooperative quizzes and contextual writing frameworks.
3. **Inclusive Workspace Co-regulation:** Enables parents and special education teachers to customize a learner's workspace settings remotely.

---

## 👥 Target Audiences & Brand Identity

Our platform is engineered to address the specific needs of four distinct user and community profiles:

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
* **Experience:** Tailored workspace supporting custom typefaces (e.g., OpenDyslexic), reading tools (Reading Ruler, customizable tracking/spacing parameters), and multi-sensory breakdown guides.

### 2. Parents & Guardians
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a parent-exclusive analytics dashboard tracking vocabulary acquisition and writing stamina, alongside remote accommodation controllers.

### 3. Special Education Needs (SEN) School Departments & Educators
* **Tone:** Professional, data-driven, and compliant.
* **Experience:** Comprehensive classroom analytics mapped directly to Individualized Education Program (IEP) targets. Educators can remotely toggle accommodation settings, log qualitative observations, and instantly export compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Modular, clean, and developer-friendly.
* **Experience:** Clean, strongly-typed codebase leveraging React contexts, custom speech API hooks, and fully accessible UI primitives.

---

## 🧩 Dyslexia-Friendly Design System

Visual and cognitive scaffolding are embedded directly into PenPal's CSS layout and React components.

### 🔠 Specialized Typography
* **Dyslexia-Optimized Font-Face:** Support for **OpenDyslexic** (featuring heavy baselines to help prevent letter-flipping and rotation) as well as highly legible geometric sans-serif layouts.
* **Granular Spacing Customization:** Adjustable letter-spacing, word-spacing, and line-height parameters configured dynamically via CSS variables to reduce visual crowding.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Backgrounds:** Calming, anti-glare themes (Warm Cream, Pastel Blue, Pastel Green, and High Contrast Dark) designed to minimize scotopic sensitivity fatigue.
* **Highlight Reading Ruler:** A customizable overlay focus strip tracking cursor vertical movement, dimming the rest of the viewport to guide the reader's eyes smoothly across text lines.
* **Distraction-Free Mode:** Toggled dynamically to hide sidebars, progress indicators, and non-essential visual elements, leaving only the primary core workspace.

---

## 🚀 Multi-Portal Architecture & Features

PenPal separates user journeys into three dedicated simulation portals, all accessible from a unified Role Selector dashboard:

```
                            ┌───────────────────┐
                            │   Role Selector   │
                            └─────────┬─────────┘
            ┌─────────────────────────┼─────────────────────────┐
            ▼                         ▼                         ▼
   ┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
   │ Learner Portal  │       │  Parent Portal  │       │ Educator Portal │
   │   (/dashboard)  │       │    (/parent)    │       │   (/educator)   │
   └─────────────────┘       └─────────────────┘       └─────────────────┘
```

### 1. Learner Dashboard (`/dashboard`)
* **Peer-to-Peer PenPal Matching:** Vetted communication with simulation partners (e.g., *Mateo from Madrid*). Includes safe conversation frames, helpful suggested vocabulary chips, and automatic translation helpers.
* **Interactive Syllabic & Phonetic Breakdown:** Clicking any word in the chat reveals a color-coded syllable breakdown (separating syllables with alternating colors to assist pronunciation), phonetic transcriptions, and localized translation.
* **Bimodal Dictation & Web Speech API Helpers:** Dynamic Text-to-Speech (TTS) vocalization and Speech-to-Text (STT) voice input buttons to eliminate writing and spelling anxiety.
* **Cooperative Quizzes:** Stress-free, collaborative matching activities solved with partner dialogue hints instead of competitive timers.

### 2. Parent Progress & Insights Board (`/parent`)
* **Confidence Metrics Tracker:** High-fidelity tracking of reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Override Controls:** Parents can remotely adjust default contrast themes, typography styles, text-scaling, and verbal speed settings.
* **IEP Portfolio Exporter:** One-click generation of academic and progress reports to share with clinical teams or educators.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time visibility of student progression against set targets.
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage) to formal IEP objectives.
* **Accommodation Override Controls:** Remotely adjust student font profiles, zoom scales, or default high-contrast layouts.

---

## 🛡️ State Persistence & Cross-Portal Synchronization

To maintain full frontend-only integrity without the friction of a remote database, PenPal implements an offline state persistence system utilizing standard browser **`localStorage`**.

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

### Core Synchronization Keys

The cross-portal real-time synchronization relies on the following dedicated local storage keys:

| Key | Type | Description | Synchronized Portals |
|:---|:---|:---|:---|
| `penpal_a11y_settings` | `JSON String` | Stores visual configuration presets (font family, line-height, letter-spacing, word-spacing, font-size multiplier, reading ruler, speech-rate, and theme color). | **Learner**, **Parent**, **Educator** |
| `penpal_messages` | `JSON String` | Persists conversation history between the learner and their PenPal simulation partner. | **Learner** (Chat Workspace) |
| `penpal_messages_sent_count` | `Number` | Counts total messages sent by the learner. | **Learner**, **Parent** (Confidence Metric), **Educator** (Classroom Roster & IEP Progress Goal) |
| `penpal_quiz_points` | `Number` | Holds points gained from completing cooperative quizzes. | **Learner** (Score Tracking), **Parent** (XP Metrics) |
| `penpal_learned_vocab` | `JSON String` | Persists the words clicked and analyzed by the learner. | **Learner**, **Parent** (Vocabulary Growth Tracker) |

### Real-Time Cross-Role Settings Synchronization
When a parent or an educator modifies typography settings (such as setting the default font to `OpenDyslexic`) or toggles the `Highlight Reading Ruler` in their respective portals, these settings are instantly written to `penpal_a11y_settings`. The global `AccessibilityProvider` context intercepts these modifications and immediately applies them to the document DOM, ensuring real-time workspace adaptation across the portals.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is designed as a modular, type-safe Next.js application using Tailwind CSS for visual comfort controls and Lucide Icons for clean visuals.

### **Directory Blueprint**

```
/
├── public/                 # Static assets (accessibility fonts, system vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Base layout wrapping HTML inside dynamic providers
│   │   ├── page.tsx        # Dashboard landing page introducing simulation role selector
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace (Learner Portal)
│   │   ├── educator/       # SEN Classroom & IEP Educator Dashboard
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Reusable UI Primitives
│   │   ├── a11y/           # Reading Ruler and Accessibility widget overlay
│   │   └── NavigationHeader.tsx # Universal header bar facilitating cross-role navigation
│   ├── context/            # React Global State contexts
│   │   ├── AccessibilityContext.tsx # Central orchestrator mapping typographic and contrast controls
│   │   └── AuthContext.tsx          # Mock user authorization framework
│   ├── hooks/              # Custom React hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper facilitating text-to-speech & speech-to-text
│   │   └── useMatch.ts     # P2P matching, chat persistence, and mock chat generator
│   └── styles/             # Global configurations
│       └── globals.css     # CSS Custom properties for typography & padding
├── LICENSE                 # MIT License Document
├── package.json            # Node dependencies & scripts
├── tailwind.config.js      # Tailwind CSS customized style utilities
└── tsconfig.json           # TypeScript configuration
```

---

## 💻 Deep-Dive Implementation Insights

### 1. Dynamic Accessibility Context (`AccessibilityContext.tsx`)
This provider coordinates typographic and theme custom properties, dynamically writing visual variables to the document root to update layout styling instantaneously.

```typescript
// Applying custom spacing and color tokens dynamically
useEffect(() => {
  const root = document.documentElement;

  // Font family mapping
  let fontValue = "system-ui, -apple-system, sans-serif";
  if (settings.fontFamily === "open-dyslexic") {
    fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
  } else if (settings.fontFamily === "sans-serif") {
    fontValue = "Arial, Helvetica, sans-serif";
  }
  root.style.setProperty("--font-family-current", fontValue);

  // Spacing variables
  root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
  root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
  root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
  root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);
}, [settings]);
```

### 2. Multi-Sensory Bimodal Dictation Hook (`useSpeech.ts`)
Encapsulates standard web APIs to perform low-latency text-to-speech pronunciation mapping and voice recognition dictation without requiring third-party libraries.

```typescript
export const useSpeech = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Text-To-Speech
  const speak = useCallback((text: string, lang = 'es-ES', speed = 0.8) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel(); // Terminate pending tracks
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speed; // Slower pace tailored for phonetic processing
    window.speechSynthesis.speak(utterance);
  }, []);

  // Speech-To-Text Voice Dictation
  const startListening = useCallback((onResult: (transcript: string) => void) => {
    if (typeof window === 'undefined') return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.onresult = (event: any) => {
      onResult(event.results[0][0].transcript);
    };
    recognition.start();
  }, []);

  return { speak, startListening, isPlaying, isListening };
};
```

---

## ⚙️ Local Installation & Development Setup

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

## 🧪 Testing & Quality Verification

To ensure visual stability, compliance, and regression-free builds, PenPal relies on strict compilation and verification tests.

### Build and Compilation Check
Verify that TypeScript and Next.js are error-free during compilation:
```bash
npm run build
```

### Code Style & Quality Verification
Ensure compliance with modern rulesets and Next.js optimization criteria:
```bash
npm run lint
```

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, accessibility researchers, designers, and educators!

1. **Fork the Repo** and create a descriptively named feature branch (`feature/reading-ruler-improvements`).
2. **Commit with Intention:** Write clear, informative commit messages explaining your modifications.
3. **Keep Code Accessible:** All modified or newly added modules must align with WCAG 2.1 AA design patterns, incorporate descriptive semantic `aria-*` markers, and support 100% keyboard-navigable operations.
4. **Submit a Pull Request:** Outline your changes clearly, linking any related issues and attaching screenshots or screen recordings showing visual accessibility features in action.

---

## 📄 License

This software is open-source, licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
