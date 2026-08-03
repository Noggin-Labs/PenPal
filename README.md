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

**PenPal** is an adaptive, social-first language learning platform designed specifically for learners with dyslexia and visual processing differences. By combining state-of-the-art web accessibility standards (WCAG 2.1 AA), multi-sensory interactive features, and safe social connectivity, PenPal transforms foreign language acquisition from a source of anxiety into a supportive, engaging, and collaborative journey.

---

## 📖 Table of Contents
- [🌟 Problem Statement & Vision](#-problem-statement--vision)
- [👥 Interactive Simulation Roles (The 3 Portals)](#-interactive-simulation-roles-the-3-portals)
- [🧩 Dyslexia-Friendly Design System & Accessibility Features](#-dyslexia-friendly-design-system--accessibility-features)
- [💾 Self-Contained Mock Data Architecture](#-self-contained-mock-data-architecture)
- [🛠️ Technical Architecture & Directory Structure](#️-technical-architecture--directory-structure)
- [💻 Deep Dive Developer Implementation Examples](#-deep-dive-developer-implementation-examples)
- [⚙️ Local Installation & Interactive Walkthrough](#️-local-installation--interactive-walkthrough)
- [🤝 Accessibility Compliance & WCAG Checklist](#-accessibility-compliance--wcag-checklist)
- [📄 License](#-license)

---

## 🌟 Problem Statement & Vision

Traditional language learning applications rely heavily on dense text blocks, rapid gamified pressure timers, and high-contrast, glaring white interfaces. For individuals with dyslexia, visual crowding, or Irlen Syndrome (scotopic sensitivity), these standard interfaces introduce high cognitive overload, causing fatigue, frustration, and performance anxiety.

**PenPal** bridges this digital divide. By introducing customizable warm pastel color overlays, adjustable typographic spacing, bimodal sensory presentation (synchronized Text-to-Speech and Speech-to-Text), syllable/phonetic breakdown widgets, and stress-free asynchronous peer-to-peer communication, PenPal delivers an inclusive space where students feel secure, motivated, and fully supported in language learning.

---

## 👥 Interactive Simulation Roles (The 3 Portals)

PenPal is organized into three client portals matching user roles: Learner, Parent, and Educator. Our branding, tone, and features are specifically tailored for each:

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
   └─────────┬─────────┘      └─────────┬─────────┘      └─────────┬─────────┘
             │                          │                          │
             └───────────────────┐      │      ┌───────────────────┘
                                 ▼      ▼      ▼
                          ┌───────────────────────────┐
                          │     SHARED LOCAL STORAGE  │
                          └───────────────────────────┘
```

### 1. Dyslexic Learner Workspace (`/dashboard`)
* **Tone:** Warm, encouraging, playful, and low-stress.
* **Experience:**
  - **Peer-to-Peer PenPal Matching:** Connects users with international partners (such as *Mateo from Spain*) utilizing safe asynchronous simulated dialogue and interactive translation assists.
  - **Syllabic & Phonetic Analyzer:** Clicking any word in the chat immediately highlights a color-coded syllable breakdown, phonetic transcription, and English translation to map graphemes directly to phonemes.
  - **Speech Dictation (STT) & Playback (TTS):** Includes low-stress speech recognition to dictate responses verbally and text-to-speech triggers to listen to pronunciation.
  - **Writing Scaffolds & Sentence Frames:** Provides clickable starter phrases and Spanish vocabulary suggestion chips to eliminate spelling and composition anxiety.
  - **Cooperative Quizzes:** Stress-free, collaborative word-matching activities solved using dialogue hints instead of high-pressure countdown timers.

### 2. Parent Progress & Insights Board (`/parent`)
* **Tone:** Supportive, reassuring, and informative.
* **Experience:**
  - **Confidence Metrics Tracker:** Real-time summary graphs detailing the learner's reading stamina, writing autonomy, and vocabulary acquisition.
  - **Parental Remote Override Controls:** Parents can remotely customize typeface settings, zoom levels, voice playback speed, and background themes to align with their child's daily stamina.
  - **Portfolio Exporter:** One-click generation of qualitative and quantitative progress reports to share with clinical teams or educators.

### 3. SEN Educator & Administration Desk (`/educator`)
* **Tone:** Professional, data-driven, and compliant.
* **Experience:**
  - **Classroom Roster Analytics:** Direct mapping of application milestones (e.g., messages sent, quiz points earned, reading ruler usage) to formal IEP objectives.
  - **Accommodation Override Controls:** Remotely deploy specific visual settings (fonts, pastel overlays, reading ruler) directly to student workspaces.
  - **Observational Logs & Portfolios:** Maintain qualitative teacher logs and export IEP-compliant portfolios in SEN board formats.

---

## 🧩 Dyslexia-Friendly Design System & Accessibility Features

PenPal embeds visual, acoustic, and cognitive scaffolding directly into its CSS variables and component primitives.

### 🔠 Specialized Typography & Granular Controls
- **OpenDyslexic Font Integration:** Heavy weighted baselines and unique letter shapes prevent letter flipping and rotation (e.g., confusing 'b' and 'd').
- **Adjustable Spacing:** Customizable line height, letter spacing, and word spacing configuration variables explicitly counter visual crowding effects.
- **Dynamic Text Scaling:** Allows seamless layout zoom between 0.8x and 1.5x without breaking interface structures.

### 🎨 Visual Comfort & Contrast Control
- **Irlen-Friendly Warm Pastel Backgrounds:** Replaces harsh white screen glare with pastel-blue, pastel-green, and warm anti-glare cream themes designed to reduce scotopic sensitivity and physical eye strain.
- **Interactive Reading Ruler:** An adjustable vertical horizontal highlighter focus strip that tracks mouse/finger movement, dimming other viewport areas to guide the reader's eyes smoothly across text lines.
- **Distraction-Free Mode:** Instantly hides side navigation, decorative stats, header bars, and gamified indicators, leaving only the primary core workspace visible to promote sustained attention.

### 🧠 Cognitive Scaffolding & Bimodal Design
- **Bimodal Presentation:** Displays written text while simultaneously playing synchronized Spanish voice audio at customizable, slower rates (such as 0.8x).
- **No-Stress Timers:** Replaces countdown clocks and competitive timers with structured, collaborative activities solved using partner dialogues, encouraging self-paced learning.

---

## 💾 Self-Contained Mock Data Architecture

To prioritize student privacy and make our application entirely self-contained, **PenPal utilizes `localStorage`** to mock database persistence and maintain cross-role settings dynamically.

When a parent or educator remotely updates Alex's typography settings or visual contrast values, the changes write to local storage and synchronize instantly to the active Learner Workspace.

```
                      ┌────────────────────────────────────────┐
                      │          BROWSER LOCALSTORAGE          │
                      └───────────────────┬────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            ▼                             ▼                             ▼
  ┌──────────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │   LEARNER CHAT   │          │ REMOTE SETTINGS  │          │ CLASSROOM METRICS│
  │ penpal_messages  │          │penpal_a11y_     │          │  penpal_messages_│
  │                  │          │     settings     │          │    sent_count    │
  └──────────────────┘          └──────────────────┘          └──────────────────┘
```

### Supported Local Storage Keys
* `penpal_a11y_settings`: Holds the global accessibility configurations (font style, background theme, letter spacing, word spacing, ruler toggles, text scale, voice speeds).
* `penpal_messages`: Holds the dialogue message history representing P2P chats with simulated penpals.
* `penpal_messages_sent_count`: Simple counter indicating how many messages the learner has sent (synced with parent/educator dashboard milestones).
* `penpal_quiz_points`: The running cooperative score/XP achieved by the student during quizzes.
* `penpal_learned_vocab`: Stringified array of unique vocabulary words highlighted or used by the student.

---

## 🛠️ Technical Architecture & Directory Structure

PenPal is engineered to be modern, modular, and extensible. We leverage **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

### **Directory Blueprint**

```
/
├── public/                 # Static assets (accessibility fonts, system vector icons)
├── src/
│   ├── app/                # Next.js App Router Pages and Layouts
│   │   ├── layout.tsx      # Base HTML configuration with Accessibility Provider wraps
│   │   ├── page.tsx        # Homepage introducing Simulation Role Selector
│   │   ├── dashboard/      # Interactive Dyslexic Learner Workspace (/dashboard)
│   │   ├── educator/       # SEN & Classroom Educator Dashboard (/educator)
│   │   └── parent/         # Parent Progress & Remote Setup Portal (/parent)
│   ├── components/         # Shared Reusable UI Primitives
│   │   ├── a11y/           # Reading Ruler and Color Overlay Widgets
│   │   │   ├── A11yWidget.tsx    # Dropdown accessibility panel
│   │   │   └── ReadingRuler.tsx  # Dynamic floating ruler overlay
│   │   └── NavigationHeader.tsx  # Universal role selection bar
│   ├── context/            # React Global State and Accessibility Contexts
│   │   ├── AccessibilityContext.tsx # Central store managing contrast, fonts, and zoom
│   │   └── AuthContext.tsx          # Mock user role authorization
│   ├── hooks/              # Custom React Hooks
│   │   ├── useSpeech.ts    # Audio wrapper using Web Speech API (TTS & STT)
│   │   └── useMatch.ts     # P2P message state machine & mock chat generator
│   └── styles/             # Global Styles
│       └── globals.css     # CSS Custom properties for typography & padding
├── LICENSE                 # MIT License Document
├── package.json            # Node dependencies & project scripts
└── README.md               # Developer documentation & onboarding guide
```

---

## 💻 Deep Dive Developer Implementation Examples

### 1. Dynamic Accessibility Context Provider (`AccessibilityContext.tsx`)
This context provider orchestrates visual variables across the entire application viewport, dynamically mapping user overrides onto root custom CSS variables.

```typescript
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
```

### 2. Multi-sensory Pronunciation Tool (`useSpeech.ts`)
This React hook abstracts browser voice synthesis and recognition, enabling low-stress, real-time auditory bimodal assistance.

```typescript
const speak = useCallback((text: string, lang = "es-ES") => {
  if (typeof window === "undefined" || !window.speechSynthesis) return;

  window.speechSynthesis.cancel(); // Terminate pending utterances

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = speechSpeed; // Slower pace tailored for phonetic processing

  utterance.onstart = () => setIsPlaying(true);
  utterance.onend = () => setIsPlaying(false);
  utterance.onerror = () => setIsPlaying(false);

  window.speechSynthesis.speak(utterance);
}, [speechSpeed]);
```

---

## ⚙️ Local Installation & Interactive Walkthrough

Follow these steps to set up and run PenPal locally on your machine.

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

## 🎮 Interactive Simulation Walkthrough

To experience the full design loop of PenPal, follow this interactive verification flow:

1. **Access the Learner Workspace (`/dashboard`):**
   * Review the chat dialogue with Mateo.
   * Click any Spanish word inside Mateo's message (e.g. *fútbol* or *dibujar*). Notice the **Syllabic Breakdown** panel on the right highlighting syllables in distinct colored blocks, spelling phonetics, and playing natural audio.
   * Toggle the **Reading Ruler** from the floating accessibility gear widget in the bottom-right. Notice how a semi-transparent focus bar follows your mouse cursor, dimming surrounding lines to support focusing.
   * Send a response! Use one of the **Sentence Frames** to begin writing and notice the 4-second delay before Mateo replies.

2. **Access the Parent Portal (`/parent`):**
   * Notice that the **Messages Sent** metric card updates automatically as you interact inside the Learner Workspace.
   * Adjust the default **Contrast Theme Scheme** to *Pastel Blue* or *Pastel Green*.
   * Toggle the typeface selection or zoom spacing variables.

3. **Return to the Learner Workspace:**
   * Notice that the entire color theme, typography size, and spacing rules have instantly updated to align with the adjustments made in the Parent Portal, showcasing real-time `localStorage` state synchronization.

---

## 🤝 Accessibility Compliance & WCAG Checklist

PenPal was developed with strict adherence to Web Content Accessibility Guidelines (WCAG) 2.1 AA benchmarks.

* [x] **Principle 1: Perceivable**
  * **Text Alternatives:** All system buttons and icon triggers feature explicit `aria-label` or description tags.
  * **Visual Adaptability:** Complete separation of layouts from styling using variables to adjust line height, fonts, background themes, and letter-spacing without code breaks.
* [x] **Principle 2: Operable**
  * **Keyboard Navigable:** All panels, buttons, chips, and chat interactive words are accessible via standard Tab, Shift+Tab, and Enter keyboard focus rings.
  * **Seizure Prevention:** Zero rapid flash, bright strobing effects, or fast visual transitions.
* [x] **Principle 3: Understandable**
  * **Readability Support:** Integrated OpenDyslexic typeface, focus highlighting strip (Reading Ruler), and customizable auditory alternatives.
* [x] **Principle 4: Robust**
  * **Cross-browser Compatibility:** Utilizing standard HTML5 Web Speech synthesis APIs with safe local mock fallback behaviors.

---

## 📄 License

This software is open-source, licensed under the terms of the [MIT License](LICENSE).

---

<p align="center">
  Made with 💙 and ☕ — Bridging communication gaps, one inclusive letter at a time.
</p>
