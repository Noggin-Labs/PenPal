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
- [👥 Target Audiences & Portal System](#-target-audiences--portal-system)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Core Features & User Portals](#-key-core-features--user-portals)
- [🛡️ Privacy & State Persistence Synchronization](#-privacy--state-persistence-synchronization)
- [🛠️ Technical Architecture & Directory Structure](#-technical-architecture--directory-structure)
- [💻 Technical Implementation Highlights](#-technical-implementation-highlights)
- [⚙️ Local Installation & Script Execution](#-local-installation--script-execution)
- [🤝 Contribution & Styling Standards](#-contribution--styling-standards)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Target Audiences & Portal System

Our platform architecture maps directly onto three distinct user roles with tailored visual, interactive, and structural flows. The relationship between these user groups and portals is illustrated below:

```
                            ┌───────────────────────────┐
                            │    PENPAL PORTAL SYSTEM   │
                            └─────────────┬─────────────┘
                                          │
             ┌────────────────────────────┼────────────────────────────┐
             ▼                            ▼                            ▼
   ┌────────────────────┐       ┌────────────────────┐       ┌────────────────────┐
   │  Learner Dashboard │       │   Parent Portal    │       │  Educator Dashboard│
   │    (/dashboard)    │       │      (/parent)     │       │     (/educator)    │
   └─────────▲──────────┘       └─────────┬──────────┘       └─────────┬──────────┘
             │                            │                            │
             └─────────[Syncs Settings]---┴─────────[Syncs Settings]---┘
```

1. **Dyslexic & Neurodivergent Students (`/dashboard`):** A warm, playful, and low-stress workspace. Includes visual guides like the Reading Ruler, specialized typography (OpenDyslexic), and sensory scaffolding (Speech-to-Text and syllable highlights) to minimize spell-checking anxiety.
2. **Parents & Guardians (`/parent`):** A supportive space offering real-time progress insights. It features child-specific metrics (vocabulary growth, message frequency) and customizable remote configuration widgets to pre-configure and ease their child's workspace setup.
3. **Educators & Special Educational Needs (SEN) Admins (`/educator`):** A robust classroom analytics workspace. It enables direct mapping of student achievements to individual IEP (Individualized Education Program) goals, logs qualitative reports, and deploys immediate custom visual accommodations.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS variables and component primitives.

### 🔠 Specialized Typography
* **Dyslexia-Optimized Font-Face:** Supports dynamic selection of **OpenDyslexic** (uses weighted baselines and unique shapes to prevent letter-flipping and rotation) alongside clean high-legibility geometric sans-serif layouts.
* **Interactive Spacing Controls:** Custom CSS root properties regulating line-height, letter-spacing, and word-spacing, mitigating visual crowding.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Themes:** Options include soft cream (anti-glare), pastel blue (calming), pale mint green (soft reading), and high-contrast dark modes to avoid screen fatigue.
* **Interactive Reading Ruler:** A fixed high-visibility horizontal focus bar tracking vertical cursor/mouse movement, aiding tracking and visual isolation.
* **Distraction-Free Mode:** Toggles visibility of headers, decoration banners, and peripheral stats to help students focus solely on primary active modules.

### 🧠 Cognitive Scaffolding & Bimodal Design
* **Bimodal Presentation:** Integrates written text with synchronous Spanish speech synthesis to anchor phonetic pronunciation directly onto text.
* **No-Stress Timers:** Replaces high-stress timers with structured, asynchronous communication templates and suggestion chips to encourage reading autonomy.

---

## 🚀 Key Core Features & User Portals

### 1. Interactive Learner Dashboard (`/dashboard`)
* **Asynchronous PenPal Chat:** Structured dialogues with a simulator partner (*Mateo from Madrid*) featuring built-in translation supports.
* **Syllable breakdown:** Clicking words triggers an instantaneous color-coded breakdown (e.g. `fút · bol`) using alternating vibrant blocks to help map word parts easily.
* **Speech-to-Text Dictation:** Built-in microphone integrations for dictating messages directly, decreasing spelling-related blockages.
* **Sentence Frames & Suggesion Chips:** Expandable Spanish sentence starters (`"Me gusta mucho..."`) and active vocabulary chips for scaffolding sentence building.
* **Cooperative Quizzes:** High-engagement, stress-free multiple-choice quizzes that allow learners to practice reading vocabulary collaboratively with their partner.

### 2. Parent Progress & Insights Board (`/parent`)
* **Real-Time Confidence Metrics:** High-level analytics summarizing reading stamina, writing autonomy, and phonetic mapping activity.
* **Remote Override Panel:** Allows parents to adjust default visual constraints (font, text scale, contrast overlay, reading ruler) which synchronize dynamically to the child's workspace.
* **IEP Progress Exporter:** One-click generation of student progress reports formatted for sharing with clinical or educational support teams.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Summary cards tracing student achievements, IEP statuses (Achieved, On Track, Needs Support), and engagement rates.
* **IEP Target Alignment:** Connects direct quantitative data (messages sent, quizzes solved) to formal student IEP targets.
* **Accommodation Override Controls:** Remotely deploy specific layout settings across target student accounts instantly.

---

## 🛡️ Privacy & State Persistence Synchronization

To respect visual/auditory security and keep the sandbox entirely self-contained without demanding database configuration, **PenPal utilizes browser Local Storage to model database state persistence.**

```
                               ┌─────────────────────────────┐
                               │     BROWSER LOCALSTORAGE    │
                               └──────────────┬──────────────┘
                                              │
             ┌────────────────────────────────┼────────────────────────────────┐
             ▼                                ▼                                ▼
  ┌──────────────────────┐         ┌──────────────────────┐         ┌──────────────────────┐
  │  penpal_messages     │         │ penpal_a11y_settings │         │ penpal_quiz_points   │
  │  (Saves chat thread) │         │ (Visual Overrides)   │         │ (Tracks learner XP)  │
  └──────────────────────┘         └──────────────────────┘         └──────────────────────┘
```

The system relies on 5 specific persistence keys to manage cross-portal synchronization:

1. `penpal_messages`: Stores the raw array of conversation messages between the student and their matched partner.
2. `penpal_a11y_settings`: Holds the global accessibility configurations (font-family, font scale, word spacing, letter spacing, reading ruler toggle, contrast theme, speech playback pace).
3. `penpal_quiz_points`: Tracks active points earned by completing collaborative quizzes on the Learner's dashboard.
4. `penpal_messages_sent_count`: Holds the cumulative quantity of chat responses sent, directly driving parent/educator IEP metrics.
5. `penpal_learned_vocab`: Tracks the running array of foreign language terms successfully clicked, analyzed, and learned.

### How Synchronization Works
* When a student writes a message or finishes a quiz, `penpal_messages_sent_count`, `penpal_messages`, or `penpal_quiz_points` are updated.
* As soon as a parent or educator accesses their portal, the system reads these keys and dynamically updates the graphs, roster progress, and goal milestones instantly.
* Similarly, when a parent or educator configures remote overrides (such as activating the **Reading Ruler** or shifting the theme to **Pastel Blue**), the new configuration is written to `penpal_a11y_settings`. The next time the learner loads their workspace, `AccessibilityContext` detects the change, updates the root CSS variables, and applies the fresh style theme dynamically.

---

## 🛠️ Technical Architecture & Directory Structure

```
/
├── public/                 # Static assets (accessibility fonts, system vector icons)
├── src/
│   ├── app/                # Next.js App Router Page layouts
│   │   ├── layout.tsx      # Core HTML configuration wrapped in Global Providers
│   │   ├── page.tsx        # Gateway Landing Page / Role Simulation Selector
│   │   ├── dashboard/      # Dyslexic Learner Workspace
│   │   ├── educator/       # SEN & Classroom Educator Dashboard
│   │   └── parent/         # Parent Progress & Remote Setup Portal
│   ├── components/         # Shared Reusable UI Components
│   │   ├── a11y/           # Reading Ruler overlay and control widgets
│   │   └── NavigationHeader.tsx # Header with responsive navigation
│   ├── context/            # React Global State and Accessibility Contexts
│   │   ├── AccessibilityContext.tsx # Manages fonts, spacing, themes, & ruler
│   │   └── AuthContext.tsx          # Mimics role-based login and authorization
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper for low-latency Speech-to-Text & Text-to-Speech
│   │   └── useMatch.ts     # PenPal messaging hook and simulated P2P engine
│   └── styles/             # Stylesheet directory
│       └── globals.css     # Tailored custom properties for spacing & typographic boundaries
├── LICENSE                 # MIT License details
├── package.json            # Scripts, project dependencies, & metadata
└── tsconfig.json           # Type configurations for TypeScript compiler
```

---

## 💻 Technical Implementation Highlights

### 1. Global Accessibility Context (`AccessibilityContext.tsx`)
This provider coordinates all custom accessibility CSS variables, binding visual adjustments directly onto root variables dynamically.

```typescript
// Applying customized spacing & fonts onto the Document root inside AccessibilityContext.tsx:
useEffect(() => {
  const root = document.documentElement;

  // Font typography matching
  let fontValue = "system-ui, -apple-system, sans-serif";
  if (settings.fontFamily === "open-dyslexic") {
    fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
  } else if (settings.fontFamily === "sans-serif") {
    fontValue = "Arial, Helvetica, sans-serif";
  }
  root.style.setProperty("--font-family-current", fontValue);

  // Apply custom visual padding
  root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
  root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
  root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
  root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);
}, [settings]);
```

### 2. Multi-Sensory Text-to-Speech & Speech-to-Text (`useSpeech.ts`)
A custom hook that encapsulates browser voice capabilities, enabling low-stress real-time bimodal sensory reinforcement.

```typescript
// Bimodal voice synthesis with speed rating adjustments inside useSpeech.ts:
const speak = useCallback((text: string, lang = "es-ES") => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  window.speechSynthesis.cancel(); // Flush previous speech tracks

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = speechSpeed; // Synchronized speed dictated by parent / educator control

  utterance.onstart = () => setIsPlaying(true);
  utterance.onend = () => setIsPlaying(false);

  window.speechSynthesis.speak(utterance);
}, [speechSpeed]);
```

---

## ⚙️ Local Installation & Script Execution

Set up PenPal on your local environment with these quick steps:

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** or similar package manager

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
Open [http://localhost:3000](http://localhost:3000) inside your browser to access the PenPal role dashboard interface.

### 4. Build and Compile for Production
```bash
npm run build
```

### 5. Running Code Linting
```bash
npm run lint
```

---

## 🤝 Contribution & Styling Standards

We welcome collaborative efforts! When writing code, please maintain our core accessibility and clean styling standards:

* **WCAG 2.1 AA Checklist:**
  * All interactive elements **MUST** have visible outlines when focused (using `*:focus-visible` or Tailwind outline overrides).
  * Check color combinations to maintain clear contrast ratios, even across custom themes (such as Pastel Blue or Warm Cream).
  * Incorporate descriptive `aria-label` tags for icon buttons, and `aria-hidden="true"` on purely visual layout decorations (e.g. the Reading Ruler).
* **Keyboard Navigability:** Ensure all custom components are fully keyboard-navigable. Use proper semantic tags like `<button>` and `<input>` over non-semantic containers with event listeners.
* **Typography Stability:** Maintain responsive support for custom fonts like OpenDyslexic. Make sure your layout remains intact when the text size scale is increased to the maximum level (1.5x zoom).

---

## 📄 License

This software is open-source, licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
