# PenPal 🎨✍️

An adaptive, social-first language learning platform designed specifically for learners with dyslexia and visual processing differences.

PenPal bridges the gap in digital language education by providing an accessible, inclusive, and engaging environment. It empowers students to connect with peers globally, build confidence, and master new languages through customized sensory adaptations.

---

## 🌟 Target Audiences

PenPal is built with empathy and precision to serve four primary groups:
- **Students with Dyslexia & Visual Differences:** Learner-centric interfaces that adapt to your personal processing needs, taking the anxiety out of reading and writing.
- **Parents & Guardians:** Clear visibility into your child’s progress, along with tools to customize their learning accommodations.
- **Special Education Needs (SEN) Departments:** Comprehensive dashboards to monitor student engagement, manage accommodations at scale, and support IEP (Individualized Education Program) goals.
- **Developers & Educators:** An open-source, highly extensible codebase built with industry-standard accessibility (A11y) practices.

---

## 🚀 Key Features

### 1. Social-First PenPal Matching 🤝
- **Safe & Structured Connections:** Secure peer-to-peer matching based on age, learning goals, and shared interests.
- **Guided Conversation Starters:** Interactive prompts and sentence-completion templates to alleviate writing anxiety and build conversational confidence.
- **Gamified Collaborative Quizzes:** Fun, low-stress cooperative challenges that make learning languages a shared journey.

### 2. Multisensory Communication Tools 🔊🎙️
- **Dynamic Text-to-Speech (TTS):** Double-tap or click any word or sentence to hear it read aloud with adjustable speed, pitch, and voice gender options.
- **Speech-to-Text (STT) Input:** Voice dictation allowing students to speak their thoughts naturally, which are then accurately transcribed into text.
- **Phonetic Pronunciation Guides:** Immediate visual and auditory breakdown of complex words to assist with phonological processing.

### 3. Progressive Parent & Educator Portals 📊
- **SEN-focused Dashboards:** Real-time analytics tracking reading speed improvement, vocabulary retention, and engagement metrics.
- **Tailored Accommodations Management:** Remotely enable, adjust, or test different accessibility settings for students.
- **IEP-Aligned Progress Reporting:** Easily export structured learning reports to support educational review meetings.

---

## 🧩 Accessible & Dyslexia-Friendly Design Principles

We don't just treat accessibility as a checklist item—it is our core design language. PenPal implements the following specialized accommodations:

### 🔠 Specialized Typography
- **Dyslexia-Optimized Fonts:** Integration of open-source fonts like **OpenDyslexic** and weighted sans-serifs that prevent letters from "rotating," "flipping," or "shaking."
- **Custom Spacing & Sizing:** Fully adjustable line height, word spacing, and letter tracking to reduce crowding effects (visual crowding).

### 🎨 Visual & Contrast Control
- **Anti-Glare & Pastel Themes:** Carefully selected pastel background options (e.g., warm cream, soft blue, pale green) to mitigate visual stress and Irlen syndrome (scotopic sensitivity).
- **Interactive Reading Rulers:** A customizable highlight overlay that follows the cursor or finger, helping readers focus on one line at a time.
- **Distraction-Free Mode:** Simplifies layouts, hiding non-essential navigation, gamification badges, or sidebars during reading activities.

### 🧠 Cognitive Scaffolding
- **Clear Information Hierarchy:** Bulleted layouts, short paragraphs, and bold/highlighted key terms instead of dense text blocks.
- **Bimodal Presentation:** Simultaneous visual text and auditory reading to reinforce word recognition and spelling.

---

## 🛠️ Proposed Architecture & Tech Stack

PenPal is engineered to be modern, performant, and highly scalable.

```
                  ┌───────────────────────────────┐
                  │      Next.js App Router       │
                  │ (React, TypeScript, Tailwind) │
                  └───────────────┬───────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  State & Theme   │    │  A11y Providers  │    │   API Routes &   │
│  Context / Recoil│    │  (Web Speech API)│    │  Edge Functions  │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

### Frontend Framework
- **[React](https://react.dev/) & [Next.js](https://nextjs.org/) (App Router):** Leverages server-side rendering (SSR) and static generation (SSG) for ultra-fast, SEO-friendly, and accessible page loads.
- **[TypeScript](https://www.typescriptlang.org/):** Ensures strict type safety, reducing runtime errors and improving developer developer experience.

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid and precise layout development.
- **[Radix UI / Headless UI](https://www.radix-ui.com/):** Completely unstyled, fully accessible primitive components adhering strictly to WAI-ARIA guidelines.

### State & Accessibility Engine
- **Web Speech API:** Powering built-in, low-latency Text-to-Speech (TTS) and Speech-to-Text (STT) without requiring heavy external dependencies.
- **CSS Variables:** For instant, smooth runtime switching of themes, background hues, font families, and visual rule options.

---

## ⚙️ Getting Started & Installation

Follow these instructions to set up the PenPal development environment locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### 1. Clone the Repository
```bash
git clone https://github.com/FolatheDuckofDuckingburg/PenPal.git
cd PenPal
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

### 4. Run Tests
```bash
npm run test
# or
yarn test
# or
pnpm test
```

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 🤝 Contributing Guidelines

We welcome and appreciate contributions from developers, educators, designers, and accessibility advocates!

1. **Fork the Repository** and create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
2. **Adhere to Accessibility Standards:** Ensure all new components are fully accessible via keyboard navigation, screen readers (proper ARIA labels), and meet WCAG 2.1 AA contrast requirements.
3. **Commit Your Changes:** Keep commit messages concise, descriptive, and Git-friendly.
4. **Submit a Pull Request:** Describe your changes in detail, link any relevant issues, and include screenshots or accessibility testing notes.

Please read our full [Code of Conduct](https://github.com/FolatheDuckofDuckingburg/PenPal) (coming soon) to understand our community standards.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with 💙 and ☕ to make language learning accessible to everyone.
</p>
