# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

> **Empowering Every Learner to Connect, Write, and Grow.**

**PenPal** is an adaptive, social-first language learning platform engineered specifically for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms language acquisition from a source of anxiety into a supportive, engaging, and collaborative experience.

---

## 📖 Table of Contents

- [🌟 Problem Statement & Mission](#-problem-statement--mission)
- [👥 Multi-Portal Architecture & Target Audiences](#-multi-portal-architecture--target-audiences)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Portal Features](#-key-portal-features)
  - [1. Learner Workspace (`/dashboard`)](#1-learner-workspace-dashboard)
  - [2. Parent Progress Portal (`/parent`)](#2-parent-progress-portal-parent)
  - [3. Educator IEP Desk (`/educator`)](#3-educator-iep-desk-educator)
- [🛡️ State Persistence & `localStorage` Schema](#️-state-persistence--localstorage-schema)
- [🛠️ Technical Architecture & Code Highlights](#️-technical-architecture--code-highlights)
  - [Global Accessibility Context (`AccessibilityContext.tsx`)](#global-accessibility-context-accessibilitycontexttsx)
  - [Low-Latency Bimodal Speech Hook (`useSpeech.ts`)](#low-latency-bimodal-speech-hook-usespeechts)
- [📂 Project Directory Structure](#-project-directory-structure)
- [⚙️ Local Installation & Development](#️-local-installation--development)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Mission

Traditional language learning applications rely heavily on dense text walls, rapid gamified timers, and high-contrast glaring interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce intense cognitive overload, visual stress, and performance anxiety.

**PenPal** bridges this digital divide with:
* **Anti-glare warm pastel themes** (soft cream, pastel blue, pale mint green) that eliminate harsh screen contrast.
* **OpenDyslexic typography** with weighted baselines to prevent letter flipping and rotation.
* **Granular text controls** for line height, letter tracking, and word spacing to reduce visual crowding.
* **Interactive Reading Ruler** to guide horizontal reading line by line.
* **Bimodal sensory presentation** with synchronized Text-to-Speech (TTS) and Speech-to-Text (STT) dictation.
* **Syllable & phonetic breakdown widgets** to demystify complex word structures.
* **Timer-free asynchronous P2P messaging** for low-stress communication with global penpals.

---

## 👥 Multi-Portal Architecture & Target Audiences

PenPal supports three distinct user roles through tailored, cross-synchronous client portals:

```
                          ┌───────────────────────────┐
                          │   PENPAL PLATFORM CORE    │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parent / Guardian │      │ SEN Educator Desk │
   │   `/dashboard`    │      │     `/parent`     │      │    `/educator`    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and stress-free.
* **Experience:** Peer-to-peer chat with instant syllable breakdowns, sentence starters, bimodal dictation, and cooperative matching quizzes without countdown timers.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Reassuring, insightful, and supportive.
* **Experience:** Real-time visibility into reading stamina, writing autonomy, and vocabulary acquisition. Parents can remotely fine-tune fonts and color themes to optimize their child's home learning environment.

### 3. Special Education Needs (SEN) Educators (`/educator`)
* **Tone:** Professional, objective, and IEP-aligned.
* **Experience:** Classroom roster tracking with milestones mapped directly to Individualized Education Program (IEP) goals, remote accommodation controls, and exportable progress reports.

---

## 🧩 Dyslexia-Friendly Design System

Accessibility is not an afterthought in PenPal—it is embedded directly into the UI primitives and CSS dynamic variables.

* **Specialized Typography:** Choose between `OpenDyslexic`, clean sans-serif, or system standard fonts. Adjust letter-spacing, word-spacing, line-height, and font-size multipliers dynamically across the entire viewport.
* **Anti-Glare Color Palette:**
  * 🌾 **Default Cream:** Warm, low-contrast background (`#FCF9F2`) with muted text (`#2D2A24`).
  * 🌊 **Pastel Blue:** Soft sky background (`#EBF4F6`) to soothe visual fatigue.
  * 🌿 **Pastel Green:** Muted leaf background (`#F1F7ED`) ideal for Irlen Syndrome visual comfort.
  * 🌙 **High Contrast:** Dark slate background (`#0D0D0D`) with high-legibility amber/white text (`#F3F4F6`).
* **Focus & Reading Support:**
  * **Reading Ruler:** A translucent highlight strip tracking cursor movement while dimming the surrounding viewport.
  * **Distraction-Free Mode:** Hides non-essential sidebars, badges, and headers to keep attention focused on the primary workspace.

---

## 🚀 Key Portal Features

### 1. Learner Workspace (`/dashboard`)
* **P2P Messaging:** Engage in asynchronous Spanish conversations with penpals (e.g., *Mateo from Spain*).
* **Interactive Word Scaffolding:** Click any word in messages to view color-coded syllable divisions (e.g., `fút · bol`) and phonetic transcriptions (`[ˈfut.βol]`).
* **Writing Assistance:** Expandable sentence frames (*"Me gusta mucho..."*) and prompt suggestions.
* **Cooperative Quizzes:** Interactive vocabulary matching solved through teamwork rather than competitive timers.

### 2. Parent Progress Portal (`/parent`)
* **Metrics Dashboard:** Real-time tracking of messages sent, vocabulary learned, and reading stamina.
* **Remote Visual Settings:** Parents can update typography, contrast modes, and text-to-speech speed that sync automatically to the child's workspace.
* **Portfolio Export:** Print or export structured progress summaries for educational meetings.

### 3. Educator IEP Desk (`/educator`)
* **Classroom Roster:** Track multiple students with IEP targets (e.g., *Message Volume*, *Reading Ruler Usage*, *Vocabulary Acquisition*).
* **Remote Accommodation Management:** Apply standardized accommodations across student accounts.
* **Qualitative Notes & IEP Export:** Record educator observations and export formal progress logs for IEP reviews.

---

## 🛡️ State Persistence & `localStorage` Schema

PenPal uses `localStorage` to simulate database persistence and enable real-time cross-role state synchronization across browser tabs and portals.

| Storage Key | Type | Description |
| :--- | :--- | :--- |
| `penpal_a11y_settings` | `JSON Object` | Global accessibility configuration (font family, line height, letter spacing, word spacing, font size multiplier, theme color, reading ruler height, speech speed, distraction-free state). |
| `penpal_auth_user` | `JSON Object` | Active simulation user profile (`name`, `role`, `avatar`). |
| `penpal_messages` | `JSON Array` | Full chat history including message text, translations, timestamps, and syllable breakdown metadata. |
| `penpal_messages_sent_count` | `Number` | Total messages dispatched by the learner (updates parent/educator analytics). |
| `penpal_quiz_points` | `Number` | Accumulated score from cooperative matching quizzes. |
| `penpal_learned_vocab` | `JSON Array` | List of unique vocabulary words acquired by the learner. |

---

## 🛠️ Technical Architecture & Code Highlights

Built with **Next.js 14 App Router**, **React 18**, **TypeScript**, and **Tailwind CSS**.

### Global Accessibility Context (`AccessibilityContext.tsx`)

The `AccessibilityProvider` applies custom CSS variables directly to `document.documentElement`, ensuring immediate styling updates across all components without re-renders.

```typescript
// src/context/AccessibilityContext.tsx
useEffect(() => {
  const root = document.documentElement;

  // Apply typography variables
  let fontValue = "system-ui, -apple-system, sans-serif";
  if (settings.fontFamily === "open-dyslexic") {
    fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
  } else if (settings.fontFamily === "sans-serif") {
    fontValue = "Arial, Helvetica, sans-serif";
  }
  root.style.setProperty("--font-family-current", fontValue);

  // Apply custom layout spacing
  root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
  root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
  root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
  root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);

  // Apply theme color tokens
  const colors = getThemeColors(settings.themeColor);
  root.style.setProperty("--theme-bg-color", colors.bg);
  root.style.setProperty("--theme-text-color", colors.text);
}, [settings]);
```

### Low-Latency Bimodal Speech Hook (`useSpeech.ts`)

Abstracts the native browser `SpeechSynthesis` and `SpeechRecognition` APIs with speech speed integration from `AccessibilityContext`.

```typescript
// src/hooks/useSpeech.ts
export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = useCallback((text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Clear queued utterances

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed; // Adapted speech speed for phonetic clarity

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [speechSpeed]);

  return { speak, isPlaying, ... };
};
```

---

## 📂 Project Directory Structure

```
penpal/
├── public/                 # Static assets (fonts, icons, public assets)
├── src/
│   ├── app/                # Next.js App Router routes & pages
│   │   ├── dashboard/      # Learner interactive workspace
│   │   ├── educator/       # SEN educator dashboard & IEP tracking
│   │   ├── parent/         # Parent insights & accessibility overrides
│   │   ├── layout.tsx      # Root layout wrapped with Accessibility & Auth Providers
│   │   └── page.tsx        # Landing page with interactive role simulator
│   ├── components/         # Shared UI components
│   │   ├── a11y/           # Reading Ruler & Accessibility Drawer Widget
│   │   └── NavigationHeader.tsx # Universal portal navigation header
│   ├── context/            # Global React Contexts
│   │   ├── AccessibilityContext.tsx # Centralized typography & theme manager
│   │   └── AuthContext.tsx          # Mock authentication state
│   ├── hooks/              # Custom hooks
│   │   ├── useMatch.ts     # P2P chat logic & simulated penpal responder
│   │   └── useSpeech.ts    # Web Speech API wrapper for TTS & STT
│   └── styles/             # Global CSS
│       └── globals.css     # CSS custom property defaults & OpenDyslexic font imports
├── LICENSE                 # MIT License
├── package.json            # Project dependencies & scripts
└── README.md               # Project documentation
```

---

## ⚙️ Local Installation & Development

### Prerequisites
* **Node.js**: `v18.x` or later
* **npm**: `v9.x` or later (or `yarn`/`pnpm`)

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
Open [http://localhost:3000](http://localhost:3000) in your web browser to explore PenPal.

### 4. Build for Production
```bash
npm run build
```

### 5. Start Production Server
```bash
npm start
```

---

## 📄 License

This project is open-source and released under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
