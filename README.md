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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Brand Identity](#-target-audiences--brand-identity)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Core Features & Multi-Sensory Scaffolding](#-key-core-features--multi-sensory-scaffolding)
- [🛡️ Privacy & State Synchronization Architecture](#️-privacy--state-synchronization-architecture)
- [💻 Multi-Portal Workspace Design](#-multi-portal-workspace-design)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [⚙️ Local Installation & Environment Setup](#️-local-installation--environment-setup)
- [🔬 Core Hooks & API Specifications](#-core-hooks--api-specifications)
- [💡 Troubleshooting & Frequently Asked Questions](#-troubleshooting--frequently-asked-questions)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text blocks, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Target Audiences & Brand Identity

Our branding and feature sets are carefully tailored to support four primary user categories, creating a unified educational ecosystem:

```
                            ┌───────────────────────────┐
                            │    PENPAL CORE PLATFORM   │
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
* **Tone:** Warm, encouraging, playful, low-stress, and highly interactive.
* **Experience:** Tailored layouts using specialised typefaces (like **OpenDyslexic**), custom spacing, interactive focus helpers, and real-time auditory scaffolding.

### 2. Parents & Guardians
* **Tone:** Supportive, reassuring, informative, and collaborative.
* **Experience:** Real-time visibility into their child's language stamina and milestones. Features a parenting analytics panel showing vocabulary growth and communication volume, plus remote configuration to tweak settings and co-design a distraction-free home learning layout.

### 3. Special Education Needs (SEN) School Departments & Educators
* **Tone:** Professional, data-driven, structured, and compliant.
* **Experience:** Unified roster view of student performance mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation overrides, log observational notes, and instantly export school-compliant progress portfolios.

### 4. Accessibility Developers & Advocates
* **Tone:** Modular, clean, strongly-typed, and developer-friendly.
* **Experience:** Clean Next.js 14 architecture with fully semantic HTML elements, custom Web Speech hooks, structured React Contexts, and full keyboard-navigable operations.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography
* **Dyslexia-Optimized Font-Face:** Supports dynamic selection of **OpenDyslexic** (uses heavy bottom baselines to prevent letter-flipping, rotation, and line skipping) and highly legible geometric sans-serif layouts.
* **Granular Spacing Controls:** Customizable line-height, letter-spacing, and word-spacing designed specifically to reduce visual crowding and ease phonological blending.

### 🎨 Visual Comfort & Contrast Control (Anti-Glare)
* **Irlen-Friendly Pastel Schemes:** Soft cream (`#FCF9F2` cream with muted charcoal text to eliminate stark contrast glare), calm pastel blue, and pale mint green themes designed to reduce scotopic visual fatigue.
* **High-Contrast Theme:** An accessible dark theme (`#0D0D0D` with vibrant `#F3F4F6` text) for individuals with high-contrast visual impairments.

### 🔍 Reading Highlight Ruler
* A fixed highlight strip that dynamically tracks the vertical position of the mouse cursor, overlaying a translucent soft neon yellow band (`rgba(253, 224, 71, 0.22)`) and dimming adjacent lines to guide the eye smoothly across text columns.

### 👁️ Distraction-Free Mode
* Instantly toggles the layout to hide side columns, stats, configuration cards, and the main header navigation, leaving only the primary chat workspace visible to sustain focus and minimize visual noise.

---

## 🚀 Key Core Features & Multi-Sensory Scaffolding

### 1. Interactive Word Analyzer
* Clicking or tapping any word inside a message opens the **Syllabic & Phonetic Breakdown Tooltip**.
* **Alternating Syllable Scaffolding:** Separates syllables into distinct color-coded backgrounds (rose, emerald, and blue) to help learners chunk and decode multi-syllabic terms (e.g., **fút · bol**, **di · bu · jar**).
* **Phonetic Transcripts & Auditory Feedback:** Displays the international phonetic spelling (IPA) alongside an immediate low-latency spoken pronunciation.

### 2. Multi-Sensory Auditory Support
* **Text-to-Speech (TTS):** Bimodal auditory support maps visual text blocks directly to natural-tempo spoken audio. Speech rate is fully adjustable (from `0.5x` slow-tempo to standard `1.2x`).
* **Speech-to-Text (STT):** High-accuracy browser mic dictation lets learners speak their thoughts in Spanish, turning speech into editable text to mitigate spelling anxiety.

### 3. Asynchronous Writing Scaffolding
* **Interactive Sentence Frames:** Clicking sentence starter chips (e.g., *"Me gusta mucho..."*) inserts supportive frameworks directly into the input bar.
* **Vocabulary Suggestion Chips:** Contextual vocabulary chips (e.g., `videojuegos`, `dibujar`) prompt learners with spellings and vocabulary triggers on the fly.

### 4. Collaborative Timer-Free Quizzes
* Replaces stressful countdown timers and high-pressure competitive scoreboards with asynchronous cooperative matching matching activities.
* In-game matching choices include immediate visual validations alongside comforting, positive partner guidance hints (e.g., *Mateo from Madrid says: "Almost there! Think about kicking a ball!"*).

---

## 🛡️ Privacy & State Synchronization Architecture

To protect user privacy and allow safe offline demonstrations, PenPal uses a **mock P2P database persistence layers synchronized using browser `localStorage`**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        BROWSER LOCALSTORAGE KEYS                       │
├───────────────────────────┬─────────────────────────┬──────────────────┤
│    `penpal_a11y_settings` │ `penpal_messages`       │ `penpal_metrics` │
└─────────────┬─────────────┴────────────┬────────────┴────────┬─────────┘
              │                          │                     │
              ▼                          ▼                     ▼
┌───────────────────────────┐┌────────────────────────┐┌─────────────────┐
│ AccessibilityContext.tsx  ││ useMatch.ts Hook       ││ Parent/Educator │
│ - Dynamic CSS variables   ││ - Mock messaging queue ││ - Metrics logs  │
│ - Instant UI-wide themes  ││ - Simulated partner   ││ - IEP Goal checks│
└───────────────────────────┘└────────────────────────┘└─────────────────┘
```

When accommodation defaults or metrics are modified in one portal, changes are stored under key-value pairs and instantly reflected on the frontend:

1. **`penpal_a11y_settings`**: Stores a serialized configuration object representing font scale, selected typeface, line/letter/word spacing, reading ruler thickness, vocal synthesizer tempo, and distraction-free toggle.
2. **`penpal_messages`**: Persists the conversation log, storing message payloads, localized translations, and associated word syllable metadata.
3. **`penpal_messages_sent_count`**: Increments on user messages to update student metrics on the Parent and Educator boards.
4. **`penpal_quiz_points`**: Tallies cooperative quiz completions, feeding data directly to IEP goal and progress monitors.
5. **`penpal_learned_vocab`**: Dynamically tracks vocabulary acquisition for student vocabulary counters.

---

## 💻 Multi-Portal Workspace Design

### ✍️ Learner Workspace (`/dashboard`)
* Provides the central communicative interface. Includes the dynamic chat timeline, input bar with Web Speech mic trigger, active sentence starter shelves, and the interactive word analyser panel.

### 👩‍👦 Parent Portal & Insights (`/parent`)
* Displays Alex's confidence metrics, vocabulary count, reading stamina indices, and accomplished educational milestones.
* Includes a **Parental Remote Adaptation Control** interface allowing parents to co-configure default visual styling values, instantly updating the child's interface.
* **Portfolio Exporter:** Allows exporting high-level qualitative and quantitative confidence metrics with one click.

### 👨‍🏫 SEN & Educator Administration Board (`/educator`)
* Includes a fully integrated **Classroom Roster** monitoring individual IEP statuses (`Achieved`, `On Track`, or `Needs Support`).
* **IEP Target Mapping:** Real-time progression metrics tracking messages sent and visual reading ruler usage.
* **Accommodation Override Controls:** Remotely deploy and enforce customized visual layouts and text size overrides for individual student desks.
* Includes qualitative observational teacher logs and school-compliant progress exports.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is designed with a modular component hierarchy and strict typed interfaces:

```
/
├── public/                 # Static assets (accessibility fonts, system vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Base layout wrapping app with providers & rendering ReadingRuler
│   │   ├── page.tsx        # Landing page with interactive Simulator Role Selector
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace
│   │   ├── educator/       # SEN & Classroom Educator Dashboard
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Reusable presentation components
│   │   ├── a11y/           # Accessibility adaptation widgets (A11yWidget, ReadingRuler)
│   │   └── NavigationHeader.tsx # Shared responsive navigation bar with role simulation switches
│   ├── context/            # React Global State and Accessibility Contexts
│   │   ├── AccessibilityContext.tsx # Manages typography variables, themes, and spacing
│   │   └── AuthContext.tsx          # Mock user authorization context for persona routing
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Low-latency browser Web Speech synthesis and recognition
│   │   └── useMatch.ts     # P2P state machine, simulated message generation, and counts
│   └── styles/             # Global Styling Config
│       └── globals.css     # Tailwind imports and root CSS custom properties
├── package.json            # Dependencies and npm script runner scripts
├── tsconfig.json           # Compiler variables for TypeScript compilation
└── README.md               # Advanced developers reference and onboard guide
```

---

## ⚙️ Local Installation & Environment Setup

Run the PenPal application locally using the following steps:

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher) or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
* Navigate to [http://localhost:3000](http://localhost:3000) inside your web browser.

### 4. Build and Compile for Production
To ensure optimization, TypeScript compile safety, and generation of a production-ready build bundle, run:
```bash
npm run build
```

### 5. Start Production Server
```bash
npm run start
```

### 6. Lint and Type-Check
Ensure the codebase remains strictly typed and matches Next.js specifications:
```bash
npm run lint
```

---

## 🔬 Core Hooks & API Specifications

### `useSpeech` API
This custom hook handles audio playback (TTS) and voice recognition (STT) inside browser environments, using simulated fallbacks when hardware interfaces are absent.

```typescript
const {
  speak,                // (text: string, lang?: string) => void - Speaks input text
  stop,                 // () => void - Terminates current active speech utterance
  isPlaying,            // boolean - Indicates if text-to-speech audio is playing
  isListening,          // boolean - Indicates if microphone dictation is active
  startListening,       // (onResult: (text: string) => void, lang?: string) => void - Triggers mic
  speechSupported,      // boolean - Hardware TTS availability flag
  recognitionSupported, // boolean - Browser speech recognition support flag
} = useSpeech();
```

### `useAccessibility` Props Interface
Global settings managed by `AccessibilityContext.tsx` mapping visual modifications directly to root custom variables inside the CSS DOM.

| Property | Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| `fontFamily` | `'open-dyslexic' \| 'sans-serif' \| 'standard'` | `'open-dyslexic'` | Active typographic font family. |
| `fontSizeMultiplier` | `number` | `1.15` | Multiplier styling scale relative to baseline font-sizes. |
| `lineHeight` | `number` | `1.8` | Interline vertical height spacing coefficient. |
| `letterSpacing` | `number` | `2.0` (px) | Spatial tracking padding added between alphabet letters. |
| `wordSpacing` | `number` | `4.0` (px) | Tracking spacing added between full vocabulary words. |
| `themeColor` | `ThemeColor` | `'default-cream'` | Background/contrast pastel aesthetic template. |
| `readingRulerEnabled` | `boolean` | `false` | Horizontal focus overlay ruler toggle. |
| `readingRulerHeight` | `number` | `40` (px) | Vertical thickness height of the highlighter strip. |
| `speechSpeed` | `number` | `0.8` | Speed rating assigned to bimodal spoken audio. |
| `distractionFree` | `boolean` | `false` | Visual mode that hides peripheral widgets and navigation. |

---

## 💡 Troubleshooting & Frequently Asked Questions

### Why does my browser not recognize speech or dictate?
* Browser speech synthesis and speech recognition rely on native Web APIs. We strongly recommend **Google Chrome**, **Safari**, or **Microsoft Edge** for full compatibility. Ensure you have granted microphone permissions when prompted by your browser.

### How are parent settings synced with the learner's workspace?
* Both portals connect to the same central `AccessibilityProvider` state context. Because Next.js layout structures wrap the app globally in `layout.tsx`, any remote updates updated in the `/parent` or `/educator` panel write directly to local storage and update CSS custom properties globally, updating the learner's view instantly.

### Can I run the application offline?
* Yes! Since the chat messages, vocabulary lists, and accessibility parameters are mock persistences operating 100% on browser-native local storage, the platform remains fully functional offline without requiring any backend database configurations or cloud servers.

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from developers, designers, educators, and accessibility researchers!

1. **Fork the Repository** and build your changes inside a descriptive branch (e.g., `feature/custom-ruler-theme`).
2. **Commit with Intention:** Write clear, informative commit messages following conventional guidelines.
3. **Keep Code Fully Accessible:** All modified or newly added components must align with WCAG 2.1 AA specifications, include semantic `aria-*` tags, support 100% keyboard accessibility, and handle responsive layouts smoothly.
4. **Submit a Pull Request:** Describe your changes in detail, link corresponding issues, and attach screenshots or video recordings of visual accessibility adaptations in action.

---

## 📄 License

This project is licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
