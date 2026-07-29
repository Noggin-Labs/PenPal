"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useAccessibility } from "@/context/AccessibilityContext";
import { useMatch, Message } from "@/hooks/useMatch";
import { useSpeech } from "@/hooks/useSpeech";
import { NavigationHeader } from "@/components/NavigationHeader";
import {
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Sparkles,
  Info,
  CheckCircle,
  HelpCircle,
  Send,
  RefreshCw,
  Trophy,
  ArrowRight,
  Maximize2,
  Minimize2,
  Trash2,
} from "lucide-react";

// Spanish Learning Predefined syllables dictionary
const PREDEFINED_DICTIONARY: Record<string, { breakdown: string; phonetics: string; translation: string }> = {
  fútbol: { breakdown: "fút · bol", phonetics: "[ˈfut.βol]", translation: "soccer" },
  dibujar: { breakdown: "di · bu · jar", phonetics: "[di.βuˈxaɾ]", translation: "to draw" },
  encanta: { breakdown: "en · can · ta", phonetics: "[ẽŋˈkãn.ta]", translation: "loves/enchanted" },
  estupendo: { breakdown: "es · tu · pen · do", phonetics: "[es.tuˈpẽn.do]", translation: "wonderful" },
  desayuno: { breakdown: "de · sa · yu · no", phonetics: "[de.saˈʝu.no]", translation: "breakfast" },
  conocerte: { breakdown: "co · no · cer · te", phonetics: "[ko.noˈθeɾ.te]", translation: "to know you" },
  divertido: { breakdown: "di · ver · ti · do", phonetics: "[di.βeɾˈti.ðo]", translation: "fun" },
  videojuegos: { breakdown: "vi · de · o · jue · gos", phonetics: "[bi.ðeoˈxwe.ɣos]", translation: "video games" },
  aprender: { breakdown: "a · pren · der", phonetics: "[a.pɾẽnˈdeɾ]", translation: "to learn" },
  interesante: { breakdown: "in · te · re · san · te", phonetics: "[ĩn.te.ɾeˈsãn.te]", translation: "interesting" },
  compartir: { breakdown: "com · par · tir", phonetics: "[kõm.paɾˈtiɾ]", translation: "to share" },
  cooperativo: { breakdown: "co · o · pe · ra · ti · vo", phonetics: "[ko.o.pe.ɾaˈti.βo]", translation: "cooperative" },
};

// Simple Sentence Frames to help learners write without anxiety
const SENTENCE_FRAMES = [
  { text: "Me gusta mucho...", translation: "I really like..." },
  { text: "¡Hola! Mi animal favorito es...", translation: "Hello! My favorite animal is..." },
  { text: "Yo vivo en...", translation: "I live in..." },
  { text: "Hoy me siento muy...", translation: "Today I feel very..." },
  { text: "Mi comida favorita es...", translation: "My favorite food is..." },
];

const VOCAB_CHIPS = ["fútbol", "música", "manzanas", "videojuegos", "perro", "gato", "español", "dibujar", "feliz"];

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    question: "Match: What is 'fútbol'?",
    options: ["Apple", "Soccer / Football", "Drawing", "Video games"],
    answer: "Soccer / Football",
    hint: "Think about kicking a ball!",
  },
  {
    question: "Match: What does 'dibujar' mean?",
    options: ["To dance", "To sing", "To draw", "To play"],
    answer: "To draw",
    hint: "Using color pencils and paper!",
  },
  {
    question: "Match: What does 'desayuno' mean?",
    options: ["Dinner", "Breakfast", "Lunch", "Snack"],
    answer: "Breakfast",
    hint: "The first meal of the morning!",
  },
];

export default function LearnerDashboard() {
  const router = useRouter();
  const { user, login } = useAuth();
  const { distractionFree, setSettings } = useAccessibility();
  const { partner, messages, sendMessage, clearChat } = useMatch();
  const { speak, stop, isPlaying, isListening, startListening } = useSpeech();

  const [inputText, setInputText] = useState("");
  const [selectedWord, setSelectedWord] = useState<{ word: string; breakdown: string; phonetics: string; translation: string } | null>(null);

  // Cooperative Quiz State
  const [quizActive, setQuizActive] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [partnerMessage, setPartnerMessage] = useState("");

  useEffect(() => {
    if (!user || user.role !== "learner") {
      login("learner");
    }
  }, [user, login]);

  const handleRoleChange = (role: "learner" | "parent" | "educator") => {
    login(role);
    if (role === "parent") {
      router.push("/parent");
    } else if (role === "educator") {
      router.push("/educator");
    }
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;
    sendMessage(inputText.trim());
    setInputText("");
  };

  const handleSelectWord = (word: string) => {
    const clean = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿]/g, "");
    if (PREDEFINED_DICTIONARY[clean]) {
      setSelectedWord({
        word: clean,
        ...PREDEFINED_DICTIONARY[clean],
      });
      // Bimodal sound playback
      speak(clean, "es-ES");
    } else {
      // Default dynamic breakdown fallback
      const mockBreakdown = clean.split("").join(" · ");
      setSelectedWord({
        word: clean,
        breakdown: mockBreakdown,
        phonetics: `[${clean}]`,
        translation: "Interactive word",
      });
      speak(clean, "es-ES");
    }
  };

  const handleMicClick = () => {
    startListening((transcript) => {
      setInputText((prev) => (prev ? prev + " " + transcript : transcript));
    });
  };

  const handleInsertSentenceFrame = (frame: string) => {
    setInputText((prev) => (prev ? prev + " " + frame : frame));
  };

  const handleInsertVocabChip = (vocab: string) => {
    setInputText((prev) => (prev ? prev + " " + vocab : vocab));
  };

  const handleAnswerSubmit = (option: string) => {
    setSelectedAnswer(option);
    const correct = option === QUIZ_QUESTIONS[quizIndex].answer;
    if (correct) {
      setQuizScore((prev) => prev + 1);
      setPartnerMessage(`🎉 Mateo says: "¡Excelente! You got it right! Let's solve the next one."`);
    } else {
      setPartnerMessage(`💡 Mateo says: "Almost there! Let's look at the hint together: ${QUIZ_QUESTIONS[quizIndex].hint}"`);
    }
  };

  const handleNextQuizQuestion = () => {
    setSelectedAnswer(null);
    setPartnerMessage("");
    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizIndex((prev) => prev + 1);
    } else {
      // Finished quiz! Increment confidence score for metrics
      setQuizActive(false);
      setQuizIndex(0);
      setQuizScore(0);
      const currentPoints = Number(localStorage.getItem("penpal_quiz_points") || "20");
      localStorage.setItem("penpal_quiz_points", (currentPoints + 30).toString());
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hide header in Distraction Free Mode */}
      {!distractionFree && (
        <NavigationHeader
          currentRole="learner"
          onRoleChange={handleRoleChange}
          title="✍️ Learner Workspace"
        />
      )}

      <main className="flex-grow max-w-7xl w-full mx-auto p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24">

        {/* Left Column: PenPal Chat & Matching Workstation (span 8) */}
        <div className={`${distractionFree ? "lg:col-span-12" : "lg:col-span-8"} flex flex-col gap-6`}>

          {/* Chat Panel */}
          <div
            className="flex flex-col rounded-2xl border shadow-sm h-[500px]"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
            }}
          >
            {/* Active PenPal Partner Header */}
            <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label="Mateo avatar">{partner.avatar}</span>
                <div>
                  <h2 className="font-bold text-lg flex items-center gap-2">
                    {partner.name}
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" title="Online now" />
                  </h2>
                  <p className="text-xs text-slate-500">Learning partner from {partner.country}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuizActive(!quizActive)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-bold text-xs font-sans transition"
                >
                  <Trophy className="h-4 w-4" />
                  {quizActive ? "Back to Chat" : "Cooperative Quiz"}
                </button>

                <button
                  onClick={clearChat}
                  className="p-1.5 rounded text-rose-500 hover:bg-rose-50 transition"
                  title="Clear chat and restart simulation"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages OR Quiz Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {!quizActive ? (
                <>
                  <div className="text-center p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
                    💡 <strong>Protip for Dyslexic Learners:</strong> Click any word inside the messages to see its <strong>syllable breakdown, phonetics, translation</strong> and listen with audio!
                  </div>

                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col max-w-[85%] ${
                        msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                      }`}
                    >
                      <div
                        className={`rounded-2xl p-4 text-base shadow-sm ${
                          msg.sender === "user"
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200"
                        }`}
                      >
                        {/* Word by word clicking scaffold */}
                        <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
                          {msg.text.split(" ").map((word, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSelectWord(word)}
                              className={`text-left inline transition duration-150 rounded px-0.5 focus:ring-1 focus:ring-amber-400 ${
                                msg.sender === "user"
                                  ? "hover:bg-blue-700 hover:text-white"
                                  : "hover:bg-yellow-100/80 text-slate-800"
                              }`}
                            >
                              {word}
                            </button>
                          ))}
                        </div>

                        {msg.translation && (
                          <div
                            className={`text-xs mt-2 border-t pt-2 ${
                              msg.sender === "user" ? "text-blue-100 border-blue-500" : "text-slate-500 border-slate-200"
                            }`}
                          >
                            🇬🇧 {msg.translation}
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-400 mt-1 px-1">{msg.timestamp}</span>
                    </div>
                  ))}
                </>
              ) : (
                /* Cooperative Quiz Mode */
                <div className="max-w-xl mx-auto space-y-6 pt-4 font-sans">
                  <div className="flex items-center justify-between border-b pb-3">
                    <span className="font-bold text-indigo-700 text-sm">
                      Question {quizIndex + 1} of {QUIZ_QUESTIONS.length}
                    </span>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-black">
                      Score: {quizScore}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-800 leading-relaxed">
                    {QUIZ_QUESTIONS[quizIndex].question}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {QUIZ_QUESTIONS[quizIndex].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleAnswerSubmit(opt)}
                        disabled={selectedAnswer !== null}
                        className={`p-4 rounded-xl text-left border text-sm font-semibold transition ${
                          selectedAnswer === opt
                            ? opt === QUIZ_QUESTIONS[quizIndex].answer
                              ? "bg-green-100 border-green-500 text-green-800"
                              : "bg-red-100 border-red-500 text-red-800"
                            : selectedAnswer !== null && opt === QUIZ_QUESTIONS[quizIndex].answer
                            ? "bg-green-50 border-green-300 text-green-700"
                            : "bg-slate-50 hover:bg-slate-100 border-slate-200"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {partnerMessage && (
                    <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-800 leading-relaxed animate-fade-in flex gap-2 items-start">
                      <Sparkles className="h-5 w-5 shrink-0 text-indigo-500" />
                      <span>{partnerMessage}</span>
                    </div>
                  )}

                  {selectedAnswer && (
                    <button
                      onClick={handleNextQuizQuestion}
                      className="w-full py-3 rounded-xl bg-indigo-600 text-white font-black hover:bg-indigo-700 transition flex items-center justify-center gap-2 text-sm"
                    >
                      {quizIndex < QUIZ_QUESTIONS.length - 1 ? "Next Question" : "Finish Quiz & Collect Points"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Input & Speech tools Bar */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t flex flex-col gap-3"
              style={{ borderColor: "var(--theme-border-color)", backgroundColor: "rgba(0,0,0,0.01)" }}
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type Spanish here or click speech mic to dictate..."
                  className="flex-grow p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans text-sm"
                  style={{ borderColor: "var(--theme-border-color)" }}
                />

                <button
                  type="button"
                  onClick={handleMicClick}
                  className={`p-3 rounded-xl transition ${
                    isListening ? "bg-red-500 text-white animate-pulse" : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                  title="Speech-to-Text Dictation Helper"
                  aria-label="Dictate message"
                >
                  {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </button>

                <button
                  type="submit"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold font-sans transition flex items-center gap-1.5 text-sm"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Dyslexia Scaffolding Panel: Sentence Frames and Vocabulary Suggestion Chips */}
          <div
            className="p-5 rounded-2xl border shadow-sm space-y-4"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
            }}
          >
            <div className="flex items-center gap-2 border-b pb-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <h3 className="font-bold text-base text-slate-700 font-sans">
                Writing Scaffolds & Sentence frames
              </h3>
            </div>

            {/* Sentence frames */}
            <div className="space-y-2">
              <p className="text-xs text-slate-500 font-bold font-sans">Click a starter to begin writing:</p>
              <div className="flex flex-wrap gap-2">
                {SENTENCE_FRAMES.map((frame, i) => (
                  <button
                    key={i}
                    onClick={() => handleInsertSentenceFrame(frame.text)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition text-left"
                    title={frame.translation}
                  >
                    💡 {frame.text} <span className="text-[10px] text-amber-600">({frame.translation})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Vocab chips */}
            <div className="space-y-2 pt-2 border-t" style={{ borderColor: "var(--theme-border-color)" }}>
              <p className="text-xs text-slate-500 font-bold font-sans">Useful Spanish Vocabulary Suggestion Chips:</p>
              <div className="flex flex-wrap gap-1.5">
                {VOCAB_CHIPS.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleInsertVocabChip(chip)}
                    className="px-2.5 py-1 text-xs rounded-md bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-100 transition"
                  >
                    🏷️ {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Word Breakdown Tooltip Desk & Partner Bio (span 4) */}
        {!distractionFree && (
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Word Analyzer Deck */}
            <div
              className="p-6 rounded-2xl border shadow-sm space-y-5"
              style={{
                backgroundColor: "var(--theme-card-bg)",
                borderColor: "var(--theme-border-color)",
              }}
            >
              <div className="flex items-center gap-2 border-b pb-3">
                <Info className="h-5 w-5 text-blue-500" />
                <h3 className="font-bold text-lg text-slate-800 font-sans">
                  Syllabic & Phonetic Breakdowns
                </h3>
              </div>

              {selectedWord ? (
                <div className="space-y-4 animate-fade-in font-sans">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Spanish Word</span>
                    <span className="text-2xl font-black text-slate-800">{selectedWord.word}</span>
                  </div>

                  {/* Multi-sensory Syllables Breakdown with colored dot markers */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Color-Coded Syllables</span>
                    <div className="flex items-center gap-1">
                      {selectedWord.breakdown.split(" · ").map((syllable, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 text-sm font-black rounded border ${
                            idx % 3 === 0
                              ? "bg-rose-100 text-rose-800 border-rose-300"
                              : idx % 3 === 1
                              ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                              : "bg-blue-100 text-blue-800 border-blue-300"
                          }`}
                        >
                          {syllable}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Phonetics spelling */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Phonetic Spelling</span>
                    <span className="text-sm font-mono text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded block mt-1">
                      {selectedWord.phonetics}
                    </span>
                  </div>

                  {/* Translation */}
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">English Translation</span>
                    <span className="text-sm font-bold text-slate-700 block">
                      🇬🇧 {selectedWord.translation}
                    </span>
                  </div>

                  {/* Text-to-Speech Playback */}
                  <div className="pt-2">
                    <button
                      onClick={() => speak(selectedWord.word, "es-ES")}
                      className={`w-full py-2.5 rounded-xl border font-bold text-sm transition flex items-center justify-center gap-2 ${
                        isPlaying
                          ? "bg-amber-100 border-amber-300 text-amber-800 animate-pulse"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-800"
                      }`}
                    >
                      {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      {isPlaying ? "Playing pronunciation..." : "Listen Pronunciation"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-slate-400 text-sm space-y-2">
                  <span className="text-3xl block">🔍</span>
                  <p className="font-sans">Click or tap any Spanish word inside the chat messages to break down its syllables and listen!</p>
                </div>
              )}
            </div>

            {/* Mateo's Profile details */}
            <div
              className="p-6 rounded-2xl border shadow-sm space-y-4"
              style={{
                backgroundColor: "var(--theme-card-bg)",
                borderColor: "var(--theme-border-color)",
              }}
            >
              <h4 className="font-bold text-sm text-slate-400 uppercase tracking-wider font-sans">About your PenPal</h4>
              <div className="flex items-center gap-3">
                <span className="text-4xl">🇪🇸</span>
                <div>
                  <h5 className="font-black text-slate-800">{partner.name}</h5>
                  <p className="text-xs text-slate-500">Madrid, Spain</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">{partner.bio}</p>

              <div className="border-t pt-3 flex justify-between items-center text-xs font-sans" style={{ borderColor: "var(--theme-border-color)" }}>
                <span className="text-slate-400">Collaborative score:</span>
                <span className="font-bold text-emerald-600">🏆 450 Points</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
