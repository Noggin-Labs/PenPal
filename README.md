# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

> **Empowering Every Learner to Connect, Write, and Grow.**
>
> **PenPal** is an adaptive, social-first language learning platform engineered specifically for learners with dyslexia, visual crowding, and visual processing differences (such as Irlen Syndrome/scotopic sensitivity). By combining WCAG 2.1 AA accessibility standards, multi-sensory interactive tools, and safe, asynchronous peer connections, PenPal transforms foreign language learning from a source of anxiety into an empowering, inclusive experience.

---

## 📖 Table of Contents
- [🌟 Key Value Proposition & Vision](#-key-value-proposition--vision)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [👥 Multi-Portal User Architecture](#-multi-portal-user-architecture)
  - [1. Dyslexic Learner Workspace (`/dashboard`)](#1-dyslexic-learner-workspace-dashboard)
  - [2. Parent Insights & Remote Setup Portal (`/parent`)](#2-parent-insights--remote-setup-portal-parent)
  - [3. SEN Educator & Classroom Desk (`/educator`)](#3-sen-educator--classroom-desk-educator)
- [🛡️ State Persistence & `localStorage` Schema](#️-state-persistence--localstorage-schema)
- [🛠️ Technical Stack & Architecture](#️-technical-stack--architecture)
- [📂 Directory Blueprint](#-directory-blueprint)
- [💻 Developer Code Highlights](#-developer-code-highlights)
- [⚙️ Getting Started & Installation](#️-getting-started--installation)
- [♿ Accessibility Compliance & Standards](#-accessibility-compliance--standards)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Key Value Proposition & Vision

Traditional language learning apps rely on dense blocks of text, high-contrast glaring white screens, and timed speed challenges. For neurodivergent learners—especially those with dyslexia or Irlen Syndrome—these design patterns induce severe visual fatigue, letter crowding, text flipping, and cognitive overload.

**PenPal fundamentally changes this approach:**
- **Zero Pressure:** Replaces countdown clocks and speed tests with asynchronous, self-paced penpal messaging and collaborative games.
- **Visual Comfort:** Eliminates stark visual contrast with warm anti-glare pastel overlays (cream, pale blue, leaf green) and custom typography tools.
- **Bimodal Sensory Learning:** Simultaneously pairs written text with synchronized voice synthesis (Text-to-Speech) and dictation (Speech-to-Text).
- **Cognitive Scaffolding:** Provides clickable word breakdowns with color-coded syllables, phonetic transcriptions, and expandable sentence helper templates.

---

## 🧩 Dyslexia-Friendly Design System

PenPal incorporates visual and cognitive scaffolding directly into its CSS primitives and UI component layers:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       PENPAL ACCESSIBILITY ENGINE                           │
├──────────────────────┬──────────────────────┬───────────────────────────────┤
│ 🔠 Typography        │ 🎨 Anti-Glare Themes │ 🧠 Bimodal & Guidance        │
│ • OpenDyslexic Font  │ • Warm Cream         │ • Text-to-Speech (es-ES)      │
│ • Customizable Zoom  │ • Soft Pastel Blue   │ • Speech-to-Text Dictation    │
│ • Line & Letter Gap  │ • Leaf Pastel Green  │ • Interactive Reading Ruler   │
│ • Word Spacing Gap   │ • High Contrast Dark │ • Distraction-Free Toggle     │
└──────────────────────┴──────────────────────┴───────────────────────────────┘
```

1. **Specialized Fonts & Spacing:**
   - **OpenDyslexic:** Uses weighted baselines and unique letter shapes to combat letter rotation and flipping (`b`/`d`/`p`/`q`).
   - **Dynamic Spacing Controls:** Real-time user adjustments for line height, letter spacing (tracking), and word spacing to reduce visual crowding.
2. **Irlen-Friendly Anti-Glare Themes:**
   - Soft Cream (`#FCF9F2`), Pastel Blue (`#EBF4F6`), Pastel Green (`#F1F7ED`), and High-Contrast Dark (`#0D0D0D`).
3. **Interactive Reading Ruler:**
   - A moveable visual overlay band that follows vertical cursor movement, dimming off-focus content to guide eye tracking smoothly across lines of text.
4. **Distraction-Free Mode:**
   - Hides non-essential side panels, navigation bars, and background decorations to maximize focus on the active writing task.

---

## 👥 Multi-Portal User Architecture

PenPal features three interconnected user portals tailored to learners, families, and educators.

### 1. Dyslexic Learner Workspace (`/dashboard`)
- **P2P PenPal Messaging:** Interactive, stress-free exchange with paired penpals (e.g., *Mateo from Madrid*).
- **Color-Coded Syllable Scaffolding:** Visually segments multi-syllable Spanish words (e.g., `fút · bol` with rose/emerald shading) to make pronunciation intuitive.
- **Word Breakdown Tooltip:** Click any word in chat or prompts to view its phonetic breakdown, syllable count, and translation.
- **Writing Assistance Chips:** One-click sentence starters (e.g., *"Me gusta..."*, *"En mi tiempo libre..."*) to alleviate blank-page anxiety.
- **Collaborative Quizzes:** Cooperative, timer-free vocabulary matching games where points are shared with your penpal.

### 2. Parent Insights & Remote Setup Portal (`/parent`)
- **Confidence Metrics Tracker:** High-level analytics tracking reading stamina, vocabulary expansion, and messaging consistency over time.
- **Remote Accommodation Controls:** Parents can configure and persist default font profiles, font sizes, background colors, and speech speeds to streamline their child's sessions.
- **Progress Portfolio Exporter:** Export printable progress snapshots for IEP meetings or clinical reviews.

### 3. SEN Educator & Classroom Desk (`/educator`)
- **Classroom Roster Analytics:** Real-time visibility into student active engagement metrics, vocabulary mastery, and penpal activity.
- **IEP (Individualized Education Program) Alignment:** Map student achievements (e.g., speech tool utilization, total written words, reading ruler usage) directly to formal IEP objectives.
- **Classroom Accommodation Overrides:** Bulk or individual remote toggling of visual accessibility settings across student accounts.

---

## 🛡️ State Persistence & `localStorage` Schema

PenPal operates as a self-contained frontend application, using browser `localStorage` to simulate backend persistence and enable cross-portal synchronization:

| Storage Key | Description | Example Data Structure |
| :--- | :--- | :--- |
| `penpal_a11y_settings` | Global visual & audio accessibility settings | `{"fontFamily":"open-dyslexic","lineHeight":1.8,"letterSpacing":2,"wordSpacing":4,"themeColor":"default-cream","speechSpeed":0.8}` |
| `penpal_messages` | Peer-to-peer message history array | `[{"id":"1","sender":"penpal","text":"¡Hola! Me llamo Mateo.","timestamp":"..."}]` |
| `penpal_messages_sent_count` | Total counter of user-composed messages | `14` |
| `penpal_quiz_points` | Cooperative quiz score total | `180` |
| `penpal_learned_vocab` | Saved vocabulary words list | `["hola", "amigo", "biblioteca"]` |

---

## 🛠️ Technical Stack & Architecture

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Client Components, React 18)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict typing across props and contexts)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom CSS variable mapping for dynamic theme injection
- **Icons:** [Lucide React](https://lucide.dev/)
- **Audio & Speech:** Web Speech API (`SpeechSynthesis` & `SpeechRecognition`) wrapped in custom React hooks with robust fallback support

---

## 📂 Directory Blueprint

```
penpal/
├── public/                     # Public static assets & fonts
├── src/
│   ├── app/                    # Next.js App Router route handlers
│   │   ├── layout.tsx          # Root layout wrapping Accessibility & Auth providers
│   │   ├── page.tsx            # Landing page with interactive role simulator
│   │   ├── dashboard/          # Learner portal (/dashboard)
│   │   ├── parent/             # Parent insights portal (/parent)
│   │   └── educator/           # SEN educator classroom dashboard (/educator)
│   ├── components/             # Reusable UI components
│   │   ├── NavigationHeader.tsx# Universal header bar with role switcher
│   │   └── a11y/               # Accessibility widgets (Reading Ruler, Quick Settings drawer)
│   ├── context/                # Global React contexts
│   │   ├── AccessibilityContext.tsx # Manages theme, fonts, spacing, reading ruler
│   │   └── AuthContext.tsx     # Handles role switching (Learner, Parent, Educator)
│   ├── hooks/                  # Custom React hooks
│   │   ├── useSpeech.ts        # SpeechSynthesis & SpeechRecognition wrapper
│   │   └── useMatch.ts         # P2P chat state machine & automated response generator
│   └── styles/                 # Global styles
│       └── globals.css         # CSS custom properties and custom OpenDyslexic font imports
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 💻 Developer Code Highlights

### Dynamic CSS Variable Injection (`AccessibilityContext.tsx`)
PenPal dynamically updates root CSS variables whenever visual accessibility settings change:

```typescript
useEffect(() => {
  const root = document.documentElement;

  let fontValue = "system-ui, -apple-system, sans-serif";
  if (settings.fontFamily === "open-dyslexic") {
    fontValue = "OpenDyslexic, 'Comic Sans MS', Chalkboard SE, sans-serif";
  } else if (settings.fontFamily === "sans-serif") {
    fontValue = "Arial, Helvetica, sans-serif";
  }

  root.style.setProperty("--font-family-current", fontValue);
  root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
  root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
  root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
  root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);
}, [settings]);
```

### Low-Latency Speech Synthesis & Recognition (`useSpeech.ts`)
Synthesizes speech at custom speeds tailored to learners with auditory or phonetic processing needs:

```typescript
const speak = useCallback((text: string, lang = "es-ES") => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  window.speechSynthesis.cancel(); // Terminate pending utterances
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = speechSpeed; // Controlled by user setting (e.g. 0.8x)

  utterance.onstart = () => setIsPlaying(true);
  utterance.onend = () => setIsPlaying(false);
  utterance.onerror = () => setIsPlaying(false);

  window.speechSynthesis.speak(utterance);
}, [speechSpeed]);
```

---

## ⚙️ Getting Started & Installation

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm** or **yarn** / **pnpm**

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
Open [http://localhost:3000](http://localhost:3000) in your browser to start exploring PenPal.

### 4. Build for Production
```bash
npm run build
```

---

## ♿ Accessibility Compliance & Standards

PenPal strictly adheres to **WCAG 2.1 AA** recommendations:
- **Keyboard Navigation:** 100% of interactive elements are focusable and navigable via standard keyboard controls (`Tab`, `Shift+Tab`, `Space`, `Enter`).
- **Color Contrast:** All default theme combinations exceed WCAG AA contrast ratio thresholds for text legibility.
- **Semantic HTML & ARIA:** Form fields, buttons, and interactive drawers include descriptive `aria-label`, `aria-expanded`, and landmark roles.
- **Reduced Motion:** Respects `prefers-reduced-motion` browser settings.

---

## 🤝 Contribution Guidelines

We warmly welcome contributions from software engineers, accessibility advocates, teachers, and speech therapists!

1. **Fork the repository** and create your branch (`git checkout -b feature/accessible-feature`).
2. **Ensure WCAG Compliance:** All new UI components must support keyboard focus states, aria attributes, and variable theme styling.
3. **Commit your changes** with descriptive commit messages (`git commit -m "feat: add syllable color customization"`).
4. **Push to the branch** (`git push origin feature/accessible-feature`) and **open a Pull Request**.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

---

<p align="center">
  Made with 💙 and ☕ — Empowering accessible learning for everyone, everywhere.
</p>
