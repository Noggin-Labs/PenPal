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

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia and visual processing differences (such as Irlen Syndrome/scotopic sensitivity). By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Vision & Key Insights](#-vision--key-insights)
- [👥 Core Audiences & Adaptive Ecosystem](#-core-audiences--adaptive-ecosystem)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Interactive Feature Walkthrough](#-interactive-feature-walkthrough)
- [🛡️ Privacy & Mock State Sync (Zero-Database Setup)](#️-privacy--mock-state-sync-zero-database-setup)
- [🛠️ Architecture & Codebase Navigation](#️-architecture--codebase-navigation)
- [💻 Technical Implementation Highlights](#-technical-implementation-highlights)
- [♿ WCAG 2.1 AA Compliance Checklist](#-wcag-21-aa-compliance-checklist)
- [⚙️ Getting Started & Installation](#️-getting-started--installation)
- [🤝 Contributing Guidelines](#-contributing-guidelines)
- [📄 License](#-license)

---

## 🌟 Vision & Key Insights

Traditional language learning applications rely heavily on:
* **Dense walls of text** with tight, crowded tracking.
* **Rapid gamified pressure timers** that induce high cognitive fatigue and performance anxiety.
* **High-contrast, glaring white interfaces** that exacerbate light sensitivity, letter rotation, and visual distortion.

For individuals with dyslexia or scotopic sensitivity, these standard interfaces pose a massive barrier. **PenPal** bridges this digital divide.

By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Core Audiences & Adaptive Ecosystem

The application supports three dynamically linked, fully integrated role perspectives:

```
                            ┌───────────────────────────┐
                            │    PENPAL APP PORTALS     │
                            └─────────────┬─────────────┘
                                          │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parents/Guardians │      │ SEN Departments   │
   │  (Interactive)    │      │  (Insight & Care) │      │  (IEP Management) │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. The Dyslexic Learner (`/dashboard`)
* **Experience Focus:** Tactile, encouraging, and completely self-paced.
* **Key Assistive Utilities:** Access to specialized typefaces (like **OpenDyslexic**), customizable spacing overrides, a drag-to-aim highlight reading ruler, visual syllable breaking widgets, and vocal dictation helpers that bypass spelling/typing anxiety.

### 2. Parents & Guardians (`/parent`)
* **Experience Focus:** Supportive, reassuring, and highly informative.
* **Key Insights:** View real-time qualitative and quantitative metrics on their child's confidence, vocabulary size, reading stamina, and writing autonomy.
* **Active Support:** Direct "Remote Control Overrides" that let parents tweak their child's active screen zoom, background overlay tint, and default font-style in real time.

### 3. Special Educational Needs (SEN) Educators (`/educator`)
* **Experience Focus:** Professional, data-driven, and compliant.
* **Key Admin Features:** A central classroom dashboard mapped to student-specific **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings for specific students, log observational logs, and instantly export school-board-compliant progress portfolios.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography
* **Dyslexia-Optimized Font-Face:** Support for **OpenDyslexic** (specifically weighted baselines to anchor letters and prevent flipping/rotation) alongside highly legible sans-serif choices.
* **Interactive Spacing Controls:** Fine-tuned spacing options regulating letter-tracking, word-spacing, and line-height, designed to reduce visual crowding and "rivers of white" effects.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Pastel Schemes:** Four meticulously tested, anti-glare color settings:
  1. *Warm Anti-Glare Cream* (`#FCF9F2`): Minimizes harsh screen glare and stark black-on-white high contrast.
  2. *Soft Pastel Blue* (`#EBF4F6`): Calming, high-legibility spectrum.
  3. *Mint Green* (`#F1F7ED`): High-comfort spectrum used frequently in SEN learning tools.
  4. *High-Contrast Dark* (`#0D0D0D`): Ideal for users who find bright interfaces causes photophobia.
* **Interactive Reading Ruler:** A customizable focus strip overlay that dim-masks the upper and lower portions of the viewport, guiding the reader's eyes smoothly across text lines.
* **Distraction-Free Mode:** Easily hides non-essential menus, stats, or side bars, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Simultaneously displays written text and plays natural-tempo Spanish voice audio, helping map graphemes directly to phonemes.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts, encouraging self-paced comprehension.

---

## 🚀 Interactive Feature Walkthrough

### 1. Dyslexia-Optimized Chat & Word Analyzer
* **Micro-Step Interaction:** When a learner taps or clicks any word in the chat stream, the **Syllabic & Phonetic Analyzer** panel instantly reveals:
  - **Syllable Separation:** Color-coded syllable blocks (e.g., **fút · bol** or **de · sa · yu · no**) to help decode pronunciation segments.
  - **Phonetic Guide:** Accurate transcriptions (e.g., `[ˈfut.βol]`) to map writing to speech.
  - **Natural Speech Audio:** Instant, high-quality Spanish synthesis slowed to `0.8x` (or parent-configured speed) to map auditory speech to visual letters.
* **Safe-Write Sentence Frames:** Low-stress starter cards (e.g., *"Me gusta mucho..."* / *"Hoy me siento muy..."*) allow learners to assemble messages with click suggestions instead of typing empty boxes.

### 2. Cooperative, Low-Stress Quizzes
* **Socially Supportive Quizzes:** Replaces high-anxiety countdown quizzes with a collaborative team activity.
* **Partner Dialogue Hints:** Simulated PenPal partner (e.g., *Mateo from Madrid*) sends warm, supportive feedback and context clues to help the student learn without the fear of failing.

### 3. Live State Synchronicity Overrides
* If a parent or an educator modifies the active font-style, text scale, or background overlay theme in the parental/educator dashboards, the change is written instantly into the global accessibility state context and persists directly to the student's active workspace.

---

## 🛡️ Privacy & Mock State Sync (Zero-Database Setup)

To facilitate direct offline testing and ensure 100% security, PenPal is built as a self-contained application using React contexts integrated with **`localStorage` browser persistence**.

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

* **Dynamic Metric Synchronization:** The metrics on the Parent and Educator panels (such as "Messages Sent" and "Quiz Points") are linked dynamically to key indicators. For instance, sending a chat message or completing a quiz in the Learner view will instantly update the counts shown in the parent's charts.
* **No Database Required:** Ideal for testing on portable devices, classroom kiosks, and tablets with zero server dependency.

---

## 🛠️ Architecture & Codebase Navigation

The project's codebase is clean, modular, and strongly typed.

```
src/
├── app/
│   ├── layout.tsx         # Base wrapper integrating Accessibility and Auth Providers
│   ├── page.tsx           # Entry home view containing role simulator selectors
│   ├── dashboard/         # The Dyslexic Learner's Interactive Workspace
│   ├── educator/          # SEN Classroom roster & IEP target controller
│   └── parent/            # Parents' remote-setting override & qualitative analytics
├── components/
│   ├── a11y/
│   │   ├── A11yWidget.tsx # Floating Action Adaptation Panel containing text, zoom, & theme sliders
│   │   └── ReadingRuler.tsx# Focus ruler component reflecting vertical cursor motion
│   └── NavigationHeader.tsx# Responsive role switcher & universal navigation
├── context/
│   ├── AccessibilityContext.tsx # Manages global typography spacing, scales, & contrast schemas
│   └── AuthContext.tsx    # Manages simulated authorization sessions
├── hooks/
│   ├── useMatch.ts        # Orchestrates the simulated P2P messaging thread
│   └── useSpeech.ts       # React speech wrapper combining SpeechSynthesis & SpeechRecognition APIs
└── styles/
    └── globals.css        # Defines custom properties, animation frames, and font overrides
```

---

## 💻 Technical Implementation Highlights

### 1. Dynamic Spacing Injector (`AccessibilityContext.tsx`)
This context provider converts configuration parameters (line-height, letter-spacing, word-spacing) directly into native CSS Custom Properties, applying visual improvements globally to the document layout.

```typescript
// Applying typography settings programmatically to Document Root
useEffect(() => {
  const root = document.documentElement;

  // Spacing variables
  root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
  root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
  root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
  root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);
}, [settings]);
```

### 2. Audio-Visual Bimodal Synchronization (`useSpeech.ts`)
Synthesizes custom-tempo audio to assist pronunciation mapping, featuring Web Speech API fallbacks for broad-browser compatibility.

```typescript
const speak = useCallback(
  (text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Flush previous speech buffer

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed; // Customized tempo configured remotely by educators

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  },
  [speechSpeed]
);
```

---

## ♿ WCAG 2.1 AA Compliance Checklist

PenPal was built from day one to serve as an exemplar for accessible frontend engineering. Here is how we align with WCAG guidelines:

| Guideline | Implementation Detail | Status |
| :--- | :--- | :---: |
| **1.1.1 Non-Text Content** | Clean, descriptive `aria-label` tags and text-equivalent image alternatives applied on all interactive control states. | **Passed** |
| **1.4.3 Contrast (Minimum)** | Meets AA contrast ratio (minimum 4.5:1) across all pastel and dark schemes. Muted dark charcoal text used on cream avoids glare but ensures clarity. | **Passed** |
| **1.4.4 Resize Text** | Built-in font size scaling range multiplier (`0.8x` to `1.5x`) changes content dimensions without breaking page layouts. | **Passed** |
| **1.4.12 Text Spacing** | Allows full client manipulation of line-height (to `2.2`), letter-spacing (to `5px`), and word-spacing (to `10px`). | **Passed** |
| **2.1.1 Keyboard Navigable** | 100% of interactive widgets (role cards, chat inputs, quiz options, adaptation dropdown sliders) are focusable and keyboard-navigable. | **Passed** |
| **2.2.2 Pause, Stop, Hide** | Replaced stressful count-down timers with self-paced, asynchronous dialogues, ensuring zero visual disruption. | **Passed** |

---

## ⚙️ Getting Started & Installation

Ensure you have **Node.js** (v18.x or later) installed.

### 1. Clone the repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run in development mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to run the application locally.

### 4. Build and compile for production
```bash
npm run build
```

---

## 🤝 Contributing Guidelines

We welcome contributions from developers, accessibility researchers, UI/UX designers, and educators!

* **Accessibility First:** Ensure any new layout, panel, or modal is keyboard-navigable and supports full visual overlay adjustments.
* **No Direct Artifact Editing:** Ensure code alterations are performed in the `src/` modules rather than direct build outputs.
* **State Preservation:** Always use the global `AccessibilityContext` when adding components with custom sizing or theme styles.

---

## 📄 License

PenPal is open-source software, licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
