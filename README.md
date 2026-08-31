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

**PenPal** is an adaptive, social-first language learning platform engineered specifically for learners with dyslexia and visual processing differences. By integrating state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive tools, and low-stress peer-to-peer communication, PenPal transforms foreign language acquisition into an inclusive, supportive, and engaging journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Target Audiences & Three Client Portals](#-target-audiences--three-client-portals)
- [🧩 Dyslexia-Friendly Design System](#-dyslexia-friendly-design-system)
- [🚀 Key Core Features & Modules](#-key-core-features--modules)
- [🛡️ Mock Data Persistence & Synchronicity](#️-mock-data-persistence--synchronicity)
- [🛠️ Technical Architecture & Project Structure](#️-technical-architecture--project-structure)
- [💻 Developer Implementation Highlights](#-developer-implementation-highlights)
- [⚙️ Local Installation & Development Setup](#️-local-installation--development-setup)
- [🤝 Contribution Guidelines](#-contribution-guidelines)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning platforms rely heavily on wall-of-text exercises, strict fast-paced countdown timers, and high-contrast glaring interfaces. For students with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces create visual fatigue, cognitive overload, and learning anxiety.

**PenPal** bridges this gap. Featuring warm anti-glare pastel overlays, bimodal text-to-speech and speech-to-text dictation, color-coded syllable breakdowns, interactive reading rulers, and asynchronous stress-free communication, PenPal provides a safe environment where every student can build confidence and master languages at their own pace.

---

## 👥 Target Audiences & Three Client Portals

PenPal offers three dedicated portal environments accessible directly from the role selector header:

```
                          ┌───────────────────────────┐
                          │    PENPAL PORTAL DOCK     │
                          └─────────────┬─────────────┘
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │ Dyslexic Learner  │      │ Parents/Guardians │      │ SEN Educators     │
   │ (`/dashboard`)    │      │ (`/parent`)       │      │ (`/educator`)     │
   └───────────────────┘      └───────────────────┘      └───────────────────┘
```

### 1. Dyslexic & Neurodivergent Learners (`/dashboard`)
* **Tone:** Warm, playful, low-pressure, and encouraging.
* **Experience:** Access to specialized typefaces (**OpenDyslexic**), custom character/line/word spacing, reading focus ruler, bimodal speech dictation, syllable breakdown cards, sentence starters, and cooperative quizzes without pressure timers.

### 2. Parents & Guardians (`/parent`)
* **Tone:** Supportive, reassuring, and clear.
* **Experience:** Comprehensive tracking of reading stamina, writing autonomy, and vocabulary acquisition. Parents can remotely adjust font sizing, contrast themes, and audio playback speeds to optimize their child's learning environment.

### 3. Special Education Needs (SEN) Educators (`/educator`)
* **Tone:** Professional, data-driven, and IEP-aligned.
* **Experience:** Class-wide roster monitoring, qualitative progress logging, remote accommodation overrides, and direct milestone mapping to Individualized Education Program (IEP) goals.

---

## 🧩 Dyslexia-Friendly Design System

PenPal embeds accessibility directly into its core CSS variables and React architecture:

### 🔠 Specialized Typography & Spacing
* **Dyslexia-Optimized Typefaces:** Toggle between **OpenDyslexic** (weighted baselines to reduce character inversion), clean sans-serif (Arial), and standard system fonts.
* **Custom Spacing Controls:** Granular sliders for line height (`1.5x` - `2.5x`), letter spacing (`0px` - `4px`), word spacing (`0px` - `8px`), and font scaling (`1.0x` - `1.4x`).

### 🎨 Visual Comfort & Anti-Glare Themes
* **Pastel & Contrast Themes:** Soft Cream (`#FCF9F2`), Pastel Blue (`#EBF4F6`), Pastel Green (`#F1F7ED`), and Dark High-Contrast (`#0D0D0D`).
* **Interactive Reading Ruler:** Movable horizontal focus strip with customizable height (30px–60px) to reduce line-jumping and visual crowding.
* **Distraction-Free Mode:** Simplifies interface layouts to isolate the active learning workspace.

### 🧠 Bimodal Multi-Sensory Scaffolding
* **Synchronized Audio & Dictation:** Real-time Web Speech API wrapper for listening to Spanish pronunciation and dictating responses via speech recognition.
* **Color-Coded Syllable Breakdown:** Syllabic segmentation (e.g., `fút · bol`, `es · tu · pen · do`) with phonetic IPA annotations to aid word recognition.

---

## 🚀 Key Core Features & Modules

* **Interactive PenPal Messaging:** Asynchronous peer-to-peer chat simulation with international penpals (e.g. Mateo from Madrid). Includes real-time translation toggles and sentence starters.
* **Interactive Syllable Tooltips:** Clickable vocabulary helper cards offering syllable segmentation, phonetic transcriptions, and contextual definitions.
* **Cooperative Quizzes:** Stress-free vocabulary matching activities featuring conversational hint triggers instead of countdown clocks.
* **Remote Accommodation Synchronization:** Updates made by parents or educators seamlessly apply to the student's active session in real time.

---

## 🛡️ Mock Data Persistence & Synchronicity

PenPal is completely self-contained and operates client-side without external database dependencies. State persistence and multi-portal synchronization rely on structured browser `localStorage` keys:

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │ Learner Progress │          │ Remote Visual    │          │ P2P Conversation │
  │ & Quiz Metrics   │          │ Accommodations   │          │ State Machine    │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

| Key Name | Purpose / Contents |
| :--- | :--- |
| `penpal_a11y_settings` | Stores font family, letter/word spacing, theme color, reading ruler height, speech rate, and distraction-free state. |
| `penpal_messages` | Stores complete conversation history, translations, and syllable metadata. |
| `penpal_messages_sent_count` | Tracks total student messages sent for parent and educator analytics. |
| `penpal_quiz_points` | Stores cumulative cooperative quiz score points. |
| `penpal_learned_vocab` | Array of mastered vocabulary words extracted during conversations. |
| `penpal_auth_user` | Current active user session role (`learner`, `parent`, or `educator`). |

---

## 🛠️ Technical Architecture & Project Structure

PenPal is built with **Next.js 14 App Router**, **React 18**, **TypeScript**, and **Tailwind CSS**.

```
penpal/
├── public/                 # Static assets & OpenDyslexic web fonts
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   │   ├── layout.tsx      # Root HTML shell & Accessibility Context Provider
│   │   ├── page.tsx        # Landing Page & Role Selector
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace
│   │   ├── educator/       # SEN Educator IEP Dashboard
│   │   └── parent/         # Parent Insights & Remote Configuration Portal
│   ├── components/         # Shared UI Components & Accessibility Tools
│   │   ├── a11y/           # ReadingRuler.tsx & A11yWidget.tsx
│   │   └── NavigationHeader.tsx # Universal portal switcher bar
│   ├── context/            # Global State Providers
│   │   ├── AccessibilityContext.tsx # Central CSS variables & theme state
│   │   └── AuthContext.tsx          # Mock user role authentication
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Web Speech API wrapper (TTS & STT)
│   │   └── useMatch.ts     # P2P chat state machine & mock partner logic
│   └── styles/             # Global CSS & Tailwind Directives
│       └── globals.css     # Dynamic root CSS custom properties
├── LICENSE                 # MIT License
├── package.json            # Project dependencies & scripts
└── README.md               # Project documentation
```

---

## 💻 Developer Implementation Highlights

### 1. Central Accessibility Provider (`AccessibilityContext.tsx`)
Manages custom typography, contrast themes, and dynamic CSS root property injection:

```typescript
export type DyslexiaFont = "open-dyslexic" | "sans-serif" | "standard";
export type ThemeColor = "default-cream" | "pastel-blue" | "pastel-green" | "high-contrast";

export interface AccessibilitySettings {
  fontFamily: DyslexiaFont;
  lineHeight: number;       // e.g. 1.8, 2.0
  letterSpacing: number;    // in px
  wordSpacing: number;      // in px
  fontSizeMultiplier: number; // e.g. 1.15
  themeColor: ThemeColor;
  readingRulerEnabled: boolean;
  readingRulerHeight: number;
  speechSpeed: number;      // e.g. 0.8
  distractionFree: boolean;
}

// Automatically syncs state changes to CSS custom properties on document.documentElement
useEffect(() => {
  const root = document.documentElement;
  root.style.setProperty("--line-height-current", `${settings.lineHeight}`);
  root.style.setProperty("--letter-spacing-current", `${settings.letterSpacing}px`);
  root.style.setProperty("--word-spacing-current", `${settings.wordSpacing}px`);
  root.style.setProperty("--font-size-multiplier", `${settings.fontSizeMultiplier}`);
}, [settings]);
```

### 2. Bimodal Audio & Dictation Hook (`useSpeech.ts`)
Wraps browser speech synthesis and recognition into a predictable React interface:

```typescript
export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const speak = useCallback((text: string, lang = "es-ES") => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = speechSpeed;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
  }, [speechSpeed]);

  return { speak, isPlaying, isListening, startListening };
};
```

---

## ⚙️ Local Installation & Development Setup

Follow these steps to run PenPal locally:

### Prerequisites
* **Node.js** (v18.x or later recommended)
* **npm** or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to test PenPal.

### 4. Build for Production
```bash
npm run build
```

---

## 🤝 Contribution Guidelines

We welcome contributions from accessibility advocates, designers, developers, and educators!

1. **Fork the Repository** and create your branch (`git checkout -b feature/accessibility-enhancement`).
2. **Follow Accessibility Standards:** Ensure all new UI components are 100% keyboard navigable, feature semantic `aria-*` tags, and strictly maintain WCAG 2.1 AA contrast levels.
3. **Commit & Submit PR:** Describe your changes clearly and link related issues in your Pull Request.

---

## 📄 License

PenPal is open-source software licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive word at a time.
</p>
