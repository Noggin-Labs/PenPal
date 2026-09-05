# PenPal 🎨✍️

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-blueviolet?style=for-the-badge" alt="WCAG 2.1 AA Compliant" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License MIT" />
</p>

### **Empowering Every Learner to Connect, Write, and Grow.**

**PenPal** is an adaptive, social-first language learning platform engineered from the ground up for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (**WCAG 2.1 AA**), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Vision & Core Problem Statement](#-vision--core-problem-statement)
- [👥 Target Audiences & Portal Ecosystem](#-target-audiences--portal-ecosystem)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Portal Features](#-key-portal-features)
- [🛡️ Privacy & LocalStorage Data Schema](#️-privacy--localstorage-data-schema)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Developer Code Highlights](#-developer-code-highlights)
- [⚙️ Local Installation & Development Commands](#️-local-installation--development-commands)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Vision & Core Problem Statement

Traditional language learning applications rely heavily on dense text walls, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable pastel color overlays, adjustable bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous P2P communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in their language learning.

---

## 👥 Target Audiences & Portal Ecosystem

Our application architecture is structured into three dedicated client portals connected by a centralized accessibility engine:

```
                          ┌───────────────────────────┐
                          │   PENPAL DOCKING STATION  │
                          │        (src/app/)         │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parents/Guardians │      │ SEN Departments   │
   │   (/dashboard)    │      │     (/parent)     │      │    (/educator)    │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Students (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:** Access to specialized typefaces (like **OpenDyslexic**), custom character/word/line spacing, an interactive highlight Reading Ruler, color-coded syllable breakdown overlays, and bimodal speech utilities to eliminate spelling anxiety.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and highly informative.
* **Experience:** Real-time visibility into their child's language gains. Features a dedicated parent analytics panel showing vocabulary growth, message volume, confidence metrics, and customizable remote font/theme adjustments to co-configure their child's workspace.

### 3. Special Education Needs (SEN) Departments & Educators (`/educator`)
* **Tone:** Professional, data-driven, and highly compliant.
* **Experience:** Classroom dashboards mapped directly to **IEP (Individualized Education Program)** targets. Educators can remotely toggle accommodation settings, log qualitative progress, and instantly export school-compliant progress portfolios.

---

## 🧩 Dyslexia-Friendly Design System

Rather than tacking accessibility on as an afterthought, PenPal embeds visual and cognitive scaffolding directly into its CSS and component primitives.

### 🔠 Specialized Typography & Spacing Controls
* **Dyslexia-Optimized Font-Face:** Dynamic typeface selector including **OpenDyslexic** (weighted baselines to prevent letter-flipping and rotation) and highly legible geometric sans-serif layouts.
* **Interactive Spacing Controls:** Granular custom CSS properties regulating letter-tracking (`--letter-spacing-current`), word-spacing (`--word-spacing-current`), line-height (`--line-height-current`), and dynamic font multiplier (`--font-size-multiplier`), designed specifically to reduce visual crowding.

### 🎨 Visual Comfort & Contrast Control
* **Irlen-Friendly Warm Pastel Backgrounds:** Choose from soft cream (`#FCF9F2`), pastel blue (`#EBF4F6`), pastel leaf green (`#F1F7ED`), or high-contrast dark mode (`#0D0D0D`) designed to eliminate harsh screen glare and decrease optical fatigue.
* **Interactive Reading Ruler:** A customizable focus strip (`ReadingRuler.tsx`) that tracks cursor movement and dims background content to guide eye movements smoothly across text lines.
* **Distraction-Free Mode:** Instantly hides peripheral navigation, side panels, and decorative widgets, leaving only the essential activity visible.

### 🧠 Bimodal Scaffolding & No-Pressure Environment
* **Bimodal Presentation:** Simultaneously displays written text and plays natural-tempo Spanish voice audio, helping map graphemes directly to phonemes.
* **No-Stress Timers:** Replaces countdown clocks and competitive pressure with structured, asynchronous communication prompts, encouraging self-paced comprehension.

---

## 🚀 Key Portal Features

### 1. Interactive Learner Workspace (`/dashboard`)
* **Peer-to-Peer PenPal Chat:** Simulated P2P messaging with international partners (such as *Mateo from Madrid*).
* **Word Breakdown Tooltips:** Interactive cards displaying color-coded syllable breakdowns (e.g., **fút · bol** in soft rose/emerald chips) and phonetic transcriptions (e.g., `[ˈfut.βol]`).
* **Writing Assistance Scaffolds:** Expandable helper buttons providing Spanish sentence starters (e.g., *"Me gusta mucho..."*) and interactive vocabulary suggestions.
* **Cooperative Quizzes:** Stress-free, collaborative word matching activities solved with partner dialogue hints instead of competitive timers.

### 2. Parent Insights & Remote Portal (`/parent`)
* **Confidence Metrics Tracker:** Visual summary of reading stamina, writing autonomy, and vocabulary acquisition.
* **Parental Override Controls:** Parents can remotely adjust visual parameters (font choice, line spacing, background theme, TTS speed) that persist seamlessly to the learner interface.
* **Portfolio Exporter:** One-click generation of progress reports to share with clinical teams or educators.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Classroom Roster Analytics:** Real-time visibility into student engagement metrics.
* **IEP Goal Integration:** Direct mapping of application milestones (e.g., messages sent, reading ruler usage) to formal IEP objectives.
* **Accommodation Override Controls:** Remotely adjust student font profiles, zoom scales, or default high-contrast layouts.

---

## 🛡️ Privacy & LocalStorage Data Schema

To ensure maximum visual privacy and eliminate backend configuration hurdles, **PenPal utilizes browser `localStorage`** as its persistence layer to manage state and synchronize cross-portal controls.

| Storage Key | Type | Description |
| :--- | :--- | :--- |
| `penpal_a11y_settings` | `JSON Object` | Centralized visual settings (font family, line height, letter/word spacing, theme color, speech rate, ruler state). |
| `penpal_messages` | `JSON Array` | Array of message objects for the P2P PenPal chat session. |
| `penpal_messages_sent_count` | `String (number)` | Total counter of dispatched student messages, driving parent & IEP analytics. |
| `penpal_quiz_points` | `String (number)` | Cumulative points earned through cooperative quizzes. |
| `penpal_learned_vocab` | `JSON Array` | Array of mastered vocabulary terms collected during chat interactions. |
| `penpal_auth_user` | `JSON Object` | Active simulation user role (`learner`, `parent`, or `educator`). |

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is engineered using Next.js App Router, React 18, TypeScript, and Tailwind CSS.

```
/
├── public/                 # Static assets and fonts (e.g., OpenDyslexic font assets)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Root HTML layout wrapped with Accessibility & Auth Providers
│   │   ├── page.tsx        # Homepage introducing Simulation Role Selector
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace
│   │   ├── educator/       # SEN & Classroom Educator Portal
│   │   └── parent/         # Parent Progress & Remote Accommodation Control Portal
│   ├── components/         # Reusable UI Primitives
│   │   ├── a11y/           # Reading Ruler and Accessibility Floating Control Widget
│   │   │   ├── A11yWidget.tsx    # Floating drawer for instant theme/font adjustments
│   │   │   └── ReadingRuler.tsx  # Dynamic line-following focus strip
│   │   └── NavigationHeader.tsx  # Top bar with role swapper and active accessibility badges
│   ├── context/            # React Contexts
│   │   ├── AccessibilityContext.tsx # Central store & DOM root CSS custom property engine
│   │   └── AuthContext.tsx          # Simulation authentication state context
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech Synthesis & Recognition wrapper
│   │   └── useMatch.ts     # PenPal chat state machine & automated partner simulation
│   └── styles/             # Global CSS
│       └── globals.css     # CSS custom variables & OpenDyslexic @font-face declarations
├── LICENSE                 # MIT License Document
├── next.config.mjs         # Next.js configuration
├── package.json            # Node dependencies and scripts
└── README.md               # Repository documentation
```

---

## 💻 Developer Code Highlights

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
This context provider updates root CSS variables on the document element whenever accessibility settings change, allowing instant, application-wide theme and font transformations.

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

### 2. Web Speech API Wrapper (`useSpeech.ts`)
Encapsulates browser text-to-speech synthesis and speech-to-text recognition with built-in speed adjustment and browser fallbacks.

```typescript
const speak = useCallback(
  (text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Terminate pending utterances

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed; // Slower or custom speed tailored for dyslexic learners

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  },
  [speechSpeed]
);
```

---

## ⚙️ Local Installation & Development Commands

Follow these steps to set up PenPal locally on your system.

### Prerequisites
* **Node.js** v18.17.0 or higher
* **npm**, **yarn**, or **pnpm** package manager

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
Open [http://localhost:3000](http://localhost:3000) in your web browser to access PenPal.

### 4. Build and Verify Production Artifacts
```bash
npm run build
```

### 5. Run Linter
```bash
npm run lint
```

---

## 🤝 Contribution Guidelines

We welcome contributions from developers, accessibility advocates, educators, and designers!

1. **Fork the Repository** and create a descriptively named branch (e.g., `feature/reading-ruler-enhancement`).
2. **Follow Accessibility Standards:** Ensure all new UI components maintain WCAG 2.1 AA compliance, include appropriate ARIA attributes, and support keyboard navigation.
3. **Verify Locally:** Test your code with `npm run build` and `npm run lint` before committing.
4. **Submit a Pull Request:** Describe your additions or fixes, including screenshots or video captures where appropriate.

---

## 📄 License

PenPal is open-source software licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
