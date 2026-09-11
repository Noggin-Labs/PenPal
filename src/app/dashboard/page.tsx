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
  Bookmark,
  Check,
  Star,
  Globe,
  Smile,
  Compass,
  X,
  BookOpen,
} from "lucide-react";

// Predefined Syllabic & Phonetic Spanish dictionary
const PREDEFINED_DICTIONARY: Record<
  string,
  { breakdown: string; phonetics: string; translation: string; example: string }
> = {
  fútbol: { breakdown: "fút · bol", phonetics: "[ˈfut.βol]", translation: "soccer / football", example: "Me encanta el fútbol." },
  dibujar: { breakdown: "di · bu · jar", phonetics: "[di.βuˈxaɾ]", translation: "to draw", example: "Me gusta dibujar cómics." },
  encanta: { breakdown: "en · can · ta", phonetics: "[ẽŋˈkãn.ta]", translation: "loves / enchants", example: "Me encanta el chocolate." },
  estupendo: { breakdown: "es · tu · pen · do", phonetics: "[es.tuˈpẽn.do]", translation: "wonderful / great", example: "¡Eso suena estupendo!" },
  desayuno: { breakdown: "de · sa · yu · no", phonetics: "[de.saˈʝu.no]", translation: "breakfast", example: "Mi desayuno es fruta y pan." },
  conocerte: { breakdown: "co · no · cer · te", phonetics: "[ko.noˈθeɾ.te]", translation: "to meet you", example: "Mucho gusto en conocerte." },
  divertido: { breakdown: "di · ver · ti · do", phonetics: "[di.βeɾˈti.ðo]", translation: "fun / entertaining", example: "Aprender español es divertido." },
  videojuegos: { breakdown: "vi · de · o · jue · gos", phonetics: "[bi.ðeoˈxwe.ɣos]", translation: "video games", example: "Juego a videojuegos con amigos." },
  aprender: { breakdown: "a · pren · der", phonetics: "[a.pɾẽnˈdeɾ]", translation: "to learn", example: "Quiero aprender nuevas palabras." },
  interesante: { breakdown: "in · te · re · san · te", phonetics: "[ĩn.te.ɾeˈsãn.te]", translation: "interesting", example: "Tu historia es muy interesante." },
  compartir: { breakdown: "com · par · tir", phonetics: "[kõm.paɾˈtiɾ]", translation: "to share", example: "Es bueno compartir ideas." },
  cooperativo: { breakdown: "co · o · pe · ra · ti · vo", phonetics: "[ko.o.pe.ɾaˈti.βo]", translation: "cooperative", example: "Un juego cooperativo sin estrés." },
  animales: { breakdown: "a · ni · ma · les", phonetics: "[a.niˈma.les]", translation: "animals", example: "Me gustan mucho los animales." },
  música: { breakdown: "mú · si · ca", phonetics: "[ˈmu.si.ka]", translation: "music", example: "Escucho música alegre." },
  amigo: { breakdown: "a · mi · go", phonetics: "[aˈmi.ɣo]", translation: "friend", example: "Eres un buen amigo." },
  manzanas: { breakdown: "man · za · nas", phonetics: "[mãnˈθa.nas]", translation: "apples", example: "Como manzanas rojas." },
  español: { breakdown: "es · pa · ñol", phonetics: "[es.paˈɲol]", translation: "Spanish", example: "Practicamos español juntos." },
  feliz: { breakdown: "fe · liz", phonetics: "[feˈliθ]", translation: "happy", example: "Hoy me siento muy feliz." },
  perro: { breakdown: "pe · rro", phonetics: "[ˈpe.ro]", translation: "dog", example: "Tengo un perro juguetón." },
  gato: { breakdown: "ga · to", phonetics: "[ˈɡa.to]", translation: "cat", example: "El gato duerme al sol." },
};

// Sentence Frames categorized by communication intention
const SENTENCE_FRAME_CATEGORIES = [
  {
    category: "Greetings & Starters",
    frames: [
      { text: "¡Hola! Me llamo...", translation: "Hello! My name is..." },
      { text: "Me gusta mucho...", translation: "I really like..." },
      { text: "Yo vivo en...", translation: "I live in..." },
    ],
  },
  {
    category: "Feelings & Favorites",
    frames: [
      { text: "Hoy me siento muy...", translation: "Today I feel very..." },
      { text: "Mi comida favorita es...", translation: "My favorite food is..." },
      { text: "Mi animal favorito es...", translation: "My favorite animal is..." },
    ],
  },
  {
    category: "Questions for PenPal",
    frames: [
      { text: "¿Qué te gusta hacer en Madrid?", translation: "What do you like to do in Madrid?" },
      { text: "¿Cuál es tu deporte preferido?", translation: "What is your favorite sport?" },
      { text: "¿Tienes alguna mascota?", translation: "Do you have any pets?" },
    ],
  },
];

// Spanish Vocab Chips with emoji identifiers
const VOCAB_CHIPS = [
  { text: "fútbol", emoji: "⚽", translation: "soccer" },
  { text: "dibujar", emoji: "🎨", translation: "draw" },
  { text: "música", emoji: "🎵", translation: "music" },
  { text: "videojuegos", emoji: "🎮", translation: "gaming" },
  { text: "perro", emoji: "🐶", translation: "dog" },
  { text: "gato", emoji: "🐱", translation: "cat" },
  { text: "desayuno", emoji: "🥐", translation: "breakfast" },
  { text: "español", emoji: "🇪🇸", translation: "spanish" },
  { text: "feliz", emoji: "😊", translation: "happy" },
  { text: "amigo", emoji: "🤝", translation: "friend" },
];

// Cooperative Quiz Questions (Zero timer, non-competitive)
const QUIZ_QUESTIONS = [
  {
    question: "Match: What does 'fútbol' mean in English?",
    options: ["Apple pie", "Soccer / Football", "Drawing paper", "Video games"],
    answer: "Soccer / Football",
    hint: "Think about kicking a ball on a green pitch!",
  },
  {
    question: "Match: What does 'dibujar' mean?",
    options: ["To dance", "To sing songs", "To draw / sketch", "To swim"],
    answer: "To draw / sketch",
    hint: "Using colored pencils and sketchbook!",
  },
  {
    question: "Match: What does 'desayuno' refer to?",
    options: ["Evening dinner", "Morning breakfast", "Afternoon lunch", "Midnight snack"],
    answer: "Morning breakfast",
    hint: "The delicious first meal you eat when you wake up!",
  },
  {
    question: "Match: What does 'amigo' mean?",
    options: ["Friend / Pal", "Teacher", "Book", "School"],
    answer: "Friend / Pal",
    hint: "Someone you enjoy talking and playing games with!",
  },
];

export default function LearnerDashboard() {
  const router = useRouter();
  const { user, login } = useAuth();
  const { distractionFree, setSettings, playTactileChime } = useAccessibility();
  const { partner, messages, sendMessage, clearChat } = useMatch();
  const { speak, stop, isPlaying, isListening, startListening } = useSpeech();

  const [inputText, setInputText] = useState("");
  const [selectedWord, setSelectedWord] = useState<{
    word: string;
    breakdown: string;
    phonetics: string;
    translation: string;
    example?: string;
  } | null>(null);

  // Active Sentence Frame Tab
  const [activeFrameTab, setActiveFrameTab] = useState(0);

  // Collected Word Bank
  const [wordBank, setWordBank] = useState<string[]>([]);
  const [showWordBankModal, setShowWordBankModal] = useState(false);
  const [wordSavedFeedback, setWordSavedFeedback] = useState(false);

  // Cooperative Quiz State
  const [quizActive, setQuizActive] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [partnerMessage, setPartnerMessage] = useState("");
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "learner") {
      login("learner");
    }

    // Load saved words from localStorage
    if (typeof window !== "undefined") {
      const savedWords = JSON.parse(localStorage.getItem("penpal_learned_vocab") || "[]");
      if (savedWords.length > 0) {
        setWordBank(savedWords);
      } else {
        const initialBank = ["fútbol", "dibujar", "desayuno", "conocerte", "amigo", "feliz"];
        setWordBank(initialBank);
        localStorage.setItem("penpal_learned_vocab", JSON.stringify(initialBank));
      }
    }
  }, [user, login]);

  const handleRoleChange = (role: "learner" | "parent" | "educator") => {
    playTactileChime("chime");
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
    playTactileChime("pop");
    sendMessage(inputText.trim());
    setInputText("");
  };

  const handleSelectWord = (word: string) => {
    const clean = word.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?¡¿]/g, "");
    if (!clean) return;

    playTactileChime("pop");

    if (PREDEFINED_DICTIONARY[clean]) {
      setSelectedWord({
        word: clean,
        ...PREDEFINED_DICTIONARY[clean],
      });
      speak(clean, "es-ES");
    } else {
      // Dynamic fallback syllable breakdown
      const mockBreakdown = clean.length > 4
        ? clean.match(/.{1,3}/g)?.join(" · ") || clean
        : clean;
      setSelectedWord({
        word: clean,
        breakdown: mockBreakdown,
        phonetics: `[${clean}]`,
        translation: "Interactive word",
        example: `Palabra seleccionada: ${clean}`,
      });
      speak(clean, "es-ES");
    }
  };

  const handleSaveToWordBank = () => {
    if (!selectedWord) return;
    playTactileChime("success");
    const updated = Array.from(new Set([...wordBank, selectedWord.word]));
    setWordBank(updated);
    localStorage.setItem("penpal_learned_vocab", JSON.stringify(updated));
    setWordSavedFeedback(true);
    setTimeout(() => setWordSavedFeedback(false), 2000);
  };

  const handleMicClick = () => {
    playTactileChime("pop");
    startListening((transcript) => {
      setInputText((prev) => (prev ? prev + " " + transcript : transcript));
    });
  };

  const handleInsertSentenceFrame = (frame: string) => {
    playTactileChime("pop");
    setInputText((prev) => (prev ? prev + " " + frame : frame));
  };

  const handleInsertVocabChip = (vocab: string) => {
    playTactileChime("pop");
    setInputText((prev) => (prev ? prev + " " + vocab : vocab));
  };

  const handleAnswerSubmit = (option: string) => {
    setSelectedAnswer(option);
    const correct = option === QUIZ_QUESTIONS[quizIndex].answer;
    if (correct) {
      playTactileChime("success");
      setQuizScore((prev) => prev + 1);
      setPartnerMessage(`🎉 Mateo says: "¡Increíble! You got it right! We are an awesome team."`);
    } else {
      playTactileChime("pop");
      setPartnerMessage(`💡 Mateo says: "Almost there! Let's check the hint together: ${QUIZ_QUESTIONS[quizIndex].hint}"`);
    }
  };

  const handleNextQuizQuestion = () => {
    playTactileChime("pop");
    setSelectedAnswer(null);
    setShowHint(false);
    setPartnerMessage("");
    if (quizIndex < QUIZ_QUESTIONS.length - 1) {
      setQuizIndex((prev) => prev + 1);
    } else {
      // Finished quiz! Increment confidence score for metrics
      playTactileChime("success");
      setQuizActive(false);
      setQuizIndex(0);
      setQuizScore(0);
      const currentPoints = Number(localStorage.getItem("penpal_quiz_points") || "20");
      localStorage.setItem("penpal_quiz_points", (currentPoints + 30).toString());
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-amber-200 selection:text-slate-900">
      {/* Navigation Header (hidden if Distraction-Free mode is toggled) */}
      {!distractionFree && (
        <NavigationHeader
          currentRole="learner"
          onRoleChange={handleRoleChange}
          title="✍️ Learner Correspondence Atelier"
        />
      )}

      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-24">
        {/* LEFT COLUMN: Postcard Stream & Writing Workstation */}
        <div className={`${distractionFree ? "lg:col-span-12" : "lg:col-span-8"} flex flex-col gap-6`}>
          {/* Main Correspondence Desk Card */}
          <div
            className="flex flex-col rounded-3xl border paper-card shadow-lg min-h-[560px] overflow-hidden"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
            }}
          >
            {/* Postcard Partner Header */}
            <div
              className="p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-3 bg-slate-50/70"
              style={{
                borderColor: "var(--theme-border-color)",
                backgroundColor: "var(--theme-card-subtle)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shadow-inner border border-amber-200">
                    {partner.avatar}
                  </div>
                  <span
                    className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-300"
                    title="Online now"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-black text-lg text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                      {partner.name}
                    </h2>
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                      Madrid 🇪🇸
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Asynchronous PenPal • Shared interests: drawing & soccer
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2">
                {/* Word Bank Drawer button */}
                <button
                  onClick={() => {
                    setShowWordBankModal(true);
                    playTactileChime("pop");
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-bold text-xs transition"
                  title="View collected vocabulary"
                >
                  <Star className="h-3.5 w-3.5 text-amber-600 fill-amber-500" />
                  <span>Words ({wordBank.length})</span>
                </button>

                {/* Cooperative Quiz toggle */}
                <button
                  onClick={() => {
                    setQuizActive(!quizActive);
                    playTactileChime("chime");
                  }}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs transition shadow-xs ${
                    quizActive
                      ? "bg-indigo-600 text-white shadow-indigo-500/20"
                      : "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200"
                  }`}
                >
                  <Trophy className="h-3.5 w-3.5" />
                  <span>{quizActive ? "Back to Postcards" : "Cooperative Quiz"}</span>
                </button>

                {/* Restart / Clear */}
                <button
                  onClick={() => {
                    if (confirm("Reset conversation and test words?")) {
                      clearChat();
                      playTactileChime("pop");
                    }
                  }}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                  title="Clear conversation"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Letter Exchange Stream OR Quiz Area */}
            <div className="flex-grow overflow-y-auto p-4 sm:p-6 space-y-5">
              {!quizActive ? (
                <>
                  {/* Dyslexia guidance banner */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900 leading-relaxed shadow-xs">
                    <Sparkles className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Multi-Sensory Dyslexia Helper:</strong> Click or tap <em>any word</em> in the letters to inspect its color-coded syllables, phonetic spelling, English meaning, and listen to spoken audio.
                    </div>
                  </div>

                  {/* Messages rendered as tactile stationery letters */}
                  {messages.map((msg) => {
                    const isUser = msg.sender === "user";
                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${
                          isUser ? "items-end" : "items-start"
                        } max-w-full sm:max-w-[90%] ${isUser ? "ml-auto" : "mr-auto"}`}
                      >
                        <div
                          className={`rounded-3xl p-5 shadow-sm transition-all ${
                            isUser
                              ? "bg-blue-600 text-white rounded-br-xs shadow-blue-500/10"
                              : "bg-white border-2 border-amber-100/90 text-slate-800 rounded-bl-xs shadow-amber-900/5 paper-card"
                          }`}
                        >
                          {/* Postcard stamp mark for partner */}
                          {!isUser && (
                            <div className="flex items-center justify-between border-b pb-2 mb-3 text-[11px] font-bold text-slate-400 border-slate-100">
                              <span className="flex items-center gap-1.5 text-amber-700">
                                <span>💌 Airmail Postcard from Madrid</span>
                              </span>
                              <button
                                onClick={() => speak(msg.text, "es-ES")}
                                className="flex items-center gap-1 text-[11px] text-blue-600 hover:underline hover:text-blue-700 font-bold"
                                title="Listen to entire message"
                              >
                                <Volume2 className="h-3.5 w-3.5" />
                                <span>Listen all</span>
                              </button>
                            </div>
                          )}

                          {/* Word by word interactive clickable text */}
                          <div className="flex flex-wrap gap-x-2 gap-y-1 text-base sm:text-lg leading-relaxed font-medium">
                            {msg.text.split(" ").map((word, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSelectWord(word)}
                                className={`text-left inline transition duration-150 rounded-md px-1 py-0.5 focus:ring-2 focus:ring-amber-400 ${
                                  isUser
                                    ? "hover:bg-blue-700 hover:text-white"
                                    : "hover:bg-amber-100 text-slate-800 hover:text-slate-900"
                                }`}
                              >
                                {word}
                              </button>
                            ))}
                          </div>

                          {/* English Translation */}
                          {msg.translation && (
                            <div
                              className={`text-xs mt-3 pt-2.5 border-t ${
                                isUser
                                  ? "text-blue-100 border-blue-500"
                                  : "text-slate-500 border-slate-100"
                              }`}
                            >
                              🇬🇧 {msg.translation}
                            </div>
                          )}
                        </div>

                        {/* Timestamp & metadata */}
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-1 px-2 font-medium">
                          <span>{msg.timestamp}</span>
                          {isUser && <span>• Sent with PenPal</span>}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                /* Cooperative Game Mode (Timer-Free) */
                <div className="max-w-xl mx-auto space-y-6 pt-4 font-sans animate-fade-in">
                  <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                        {quizIndex + 1}/{QUIZ_QUESTIONS.length}
                      </div>
                      <span className="font-bold text-indigo-900 text-sm">
                        Cooperative Team Match
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-black">
                      <Trophy className="h-3.5 w-3.5 text-indigo-600" />
                      <span>{quizScore * 10} Team XP</span>
                    </div>
                  </div>

                  {/* Question */}
                  <div className="p-6 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-center">
                    <span className="text-xs uppercase font-bold text-indigo-500 tracking-wider block mb-2">
                      Question {quizIndex + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-800 leading-snug">
                      {QUIZ_QUESTIONS[quizIndex].question}
                    </h3>
                  </div>

                  {/* Multiple Choice Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {QUIZ_QUESTIONS[quizIndex].options.map((opt) => {
                      const isChosen = selectedAnswer === opt;
                      const isCorrectAnswer = opt === QUIZ_QUESTIONS[quizIndex].answer;
                      let optionClasses = "bg-white hover:bg-slate-50 border-slate-200 text-slate-800";

                      if (selectedAnswer !== null) {
                        if (isCorrectAnswer) {
                          optionClasses = "bg-emerald-100 border-emerald-500 text-emerald-900 font-black ring-2 ring-emerald-400";
                        } else if (isChosen) {
                          optionClasses = "bg-rose-100 border-rose-500 text-rose-900 font-bold";
                        } else {
                          optionClasses = "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                        }
                      }

                      return (
                        <button
                          key={opt}
                          onClick={() => handleAnswerSubmit(opt)}
                          disabled={selectedAnswer !== null}
                          className={`p-4 rounded-2xl text-left border-2 text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-between ${optionClasses}`}
                        >
                          <span>{opt}</span>
                          {selectedAnswer !== null && isCorrectAnswer && (
                            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Partner Encouragement or Hint */}
                  {partnerMessage && (
                    <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-sm font-bold text-indigo-900 leading-relaxed flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-indigo-200 text-xl flex items-center justify-center shrink-0">
                        {partner.avatar}
                      </div>
                      <div>{partnerMessage}</div>
                    </div>
                  )}

                  {/* Hint Toggle */}
                  {!selectedAnswer && (
                    <div className="text-center">
                      <button
                        onClick={() => setShowHint(!showHint)}
                        className="text-xs font-bold text-slate-500 hover:text-indigo-600 inline-flex items-center gap-1 transition"
                      >
                        <HelpCircle className="h-3.5 w-3.5" />
                        <span>{showHint ? "Hide Hint" : "Need a hint from Mateo?"}</span>
                      </button>
                      {showHint && (
                        <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 p-3 rounded-xl mt-2 animate-fade-in font-medium">
                          💡 <strong>Mateo's Hint:</strong> {QUIZ_QUESTIONS[quizIndex].hint}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Next Question / Finish Button */}
                  {selectedAnswer && (
                    <button
                      onClick={handleNextQuizQuestion}
                      className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-indigo-600/20"
                    >
                      <span>
                        {quizIndex < QUIZ_QUESTIONS.length - 1
                          ? "Next Team Question"
                          : "Finish & Collect 30 Bonus XP"}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Input & Speech Dictation Bar */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t flex flex-col gap-3"
              style={{
                borderColor: "var(--theme-border-color)",
                backgroundColor: "var(--theme-card-subtle)",
              }}
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Write in Spanish or tap microphone to speak..."
                  className="flex-grow p-3.5 rounded-2xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans text-sm text-slate-800 placeholder:text-slate-400 shadow-inner"
                  style={{ borderColor: "var(--theme-border-color)" }}
                />

                {/* Speech Dictation Mic */}
                <button
                  type="button"
                  onClick={handleMicClick}
                  className={`p-3.5 rounded-2xl transition-all flex items-center justify-center ${
                    isListening
                      ? "bg-rose-500 text-white animate-pulse shadow-lg shadow-rose-500/30 scale-105"
                      : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm"
                  }`}
                  title={isListening ? "Listening... speak now" : "Dictate with voice"}
                  aria-label="Speech Dictation"
                >
                  {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </button>

                {/* Send Postcard */}
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="px-5 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl font-black font-sans transition-all flex items-center gap-2 text-sm shadow-md shadow-blue-500/25"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                  <span className="hidden sm:inline">Send Letter</span>
                </button>
              </div>

              {/* Dictation visual feedback badge */}
              {isListening && (
                <div className="flex items-center gap-2 text-xs text-rose-600 font-bold px-2 animate-fade-in">
                  <span className="h-2 w-2 rounded-full bg-rose-600 animate-ping" />
                  <span>Listening to speech... say words in Spanish or English!</span>
                </div>
              )}
            </form>
          </div>

          {/* Dyslexia Writing Scaffolds: Sentence Starters & Vocab Chips */}
          <div
            className="p-5 sm:p-6 rounded-3xl border paper-card space-y-4"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
            }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <h3 className="font-black text-sm text-slate-800" style={{ color: "var(--theme-text-color)" }}>
                  Writing Scaffolds & Sentence Starters
                </h3>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Click to insert into letter
              </span>
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {SENTENCE_FRAME_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setActiveFrameTab(idx);
                    playTactileChime("pop");
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    activeFrameTab === idx
                      ? "bg-amber-100 text-amber-900 border border-amber-300 font-black"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Active Category Starters */}
            <div className="flex flex-wrap gap-2">
              {SENTENCE_FRAME_CATEGORIES[activeFrameTab].frames.map((frame, i) => (
                <button
                  key={i}
                  onClick={() => handleInsertSentenceFrame(frame.text)}
                  className="px-3 py-2 text-xs font-bold rounded-xl bg-amber-50/80 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-all text-left flex items-center gap-1.5 shadow-xs hover:scale-[1.01]"
                  title={frame.translation}
                >
                  <span>💡 {frame.text}</span>
                  <span className="text-[10px] text-amber-700 font-normal">({frame.translation})</span>
                </button>
              ))}
            </div>

            {/* Vocab Suggestion Chips */}
            <div className="pt-3 border-t space-y-2" style={{ borderColor: "var(--theme-border-color)" }}>
              <span className="text-xs text-slate-500 font-bold block">
                Quick Spanish Vocabulary Bank:
              </span>
              <div className="flex flex-wrap gap-2">
                {VOCAB_CHIPS.map((chip) => (
                  <button
                    key={chip.text}
                    onClick={() => handleInsertVocabChip(chip.text)}
                    className="px-2.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold transition flex items-center gap-1.5"
                    title={`Translation: ${chip.translation}`}
                  >
                    <span>{chip.emoji}</span>
                    <span>{chip.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Syllables Studio Desk & Partner Dossier */}
        {!distractionFree && (
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Multi-Sensory Syllable & Phonetics Deck */}
            <div
              className="p-6 rounded-3xl border paper-card space-y-5"
              style={{
                backgroundColor: "var(--theme-card-bg)",
                borderColor: "var(--theme-border-color)",
              }}
            >
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <h3 className="font-black text-sm text-slate-800" style={{ color: "var(--theme-text-color)" }}>
                    Syllables & Phonetics Studio
                  </h3>
                </div>
                {selectedWord && (
                  <button
                    onClick={() => setSelectedWord(null)}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-md"
                    title="Clear selected word"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {selectedWord ? (
                <div className="space-y-4 font-sans animate-fade-in">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Active Spanish Word
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-black text-slate-900 capitalize" style={{ color: "var(--theme-text-color)" }}>
                        {selectedWord.word}
                      </span>
                      <button
                        onClick={() => speak(selectedWord.word, "es-ES")}
                        className="p-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                        title="Pronounce word"
                      >
                        <Volume2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Multi-sensory Syllable Breakdowns with colored tags */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                      Color-Coded Syllable Units
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {selectedWord.breakdown.split(" · ").map((syllable, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 text-sm font-black rounded-xl border shadow-xs ${
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

                  {/* Phonetics IPA */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Phonetic IPA Transcription
                    </span>
                    <div className="text-xs font-mono text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-xl inline-block">
                      {selectedWord.phonetics}
                    </div>
                  </div>

                  {/* English Translation */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      English Meaning
                    </span>
                    <div className="text-sm font-bold text-slate-800">
                      🇬🇧 {selectedWord.translation}
                    </div>
                  </div>

                  {/* Example in Context */}
                  {selectedWord.example && (
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 italic">
                      "{selectedWord.example}"
                    </div>
                  )}

                  {/* Action buttons: Listen & Save */}
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => speak(selectedWord.word, "es-ES")}
                      className={`w-full py-3 rounded-xl border font-bold text-xs transition flex items-center justify-center gap-2 ${
                        isPlaying
                          ? "bg-amber-100 border-amber-300 text-amber-900 animate-pulse"
                          : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200"
                      }`}
                    >
                      {isPlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      <span>{isPlaying ? "Playing pronunciation..." : "Listen Slower (Audio)"}</span>
                    </button>

                    <button
                      onClick={handleSaveToWordBank}
                      className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs transition flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Star className="h-4 w-4 fill-white" />
                      <span>{wordSavedFeedback ? "Saved to Word Bank!" : "Collect to Word Bank"}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 text-xs space-y-3 font-sans">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mx-auto text-xl">
                    🔍
                  </div>
                  <p className="max-w-[200px] mx-auto text-slate-500 font-medium">
                    Tap any Spanish word in the letter stream to open its syllabic dissection.
                  </p>
                </div>
              )}
            </div>

            {/* Mateo's PenPal Dossier */}
            <div
              className="p-6 rounded-3xl border paper-card space-y-4"
              style={{
                backgroundColor: "var(--theme-card-bg)",
                borderColor: "var(--theme-border-color)",
              }}
            >
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Your PenPal Match
                </span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Correspondence
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shadow-inner border border-amber-200">
                  {partner.avatar}
                </div>
                <div>
                  <h4 className="font-black text-base text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                    {partner.name}
                  </h4>
                  <p className="text-xs text-slate-500">Madrid, Spain 🇪🇸</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                "{partner.bio}"
              </p>

              <div className="pt-3 border-t space-y-2 text-xs" style={{ borderColor: "var(--theme-border-color)" }}>
                <div className="flex justify-between items-center text-slate-500">
                  <span>Cooperative Points:</span>
                  <span className="font-bold text-amber-600">🏆 450 XP</span>
                </div>
                <div className="flex justify-between items-center text-slate-500">
                  <span>Exchange Streak:</span>
                  <span className="font-bold text-rose-600">🔥 3 Letters</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* COLLECTED WORD BANK MODAL DRAWER */}
      {showWordBankModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs font-sans animate-fade-in">
          <div
            className="w-full max-w-lg rounded-3xl border p-6 bg-white shadow-2xl space-y-5"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-border-color)",
              color: "var(--theme-text-color)",
            }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--theme-border-color)" }}>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                <div>
                  <h3 className="font-black text-lg text-slate-900" style={{ color: "var(--theme-text-color)" }}>
                    Alex's Spanish Word Bank
                  </h3>
                  <p className="text-xs text-slate-500">
                    {wordBank.length} collected terms from your penpal letters
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowWordBankModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[50vh] overflow-y-auto p-1">
              {wordBank.map((word) => (
                <button
                  key={word}
                  onClick={() => {
                    handleSelectWord(word);
                    setShowWordBankModal(false);
                  }}
                  className="p-3 rounded-2xl border bg-slate-50/70 hover:bg-amber-50 border-slate-200 hover:border-amber-300 text-left transition flex flex-col justify-between gap-1"
                >
                  <span className="font-black text-sm text-slate-900 capitalize">{word}</span>
                  <span className="text-[10px] text-slate-500 truncate">
                    {PREDEFINED_DICTIONARY[word]?.translation || "Spanish word"}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2 border-t flex justify-end" style={{ borderColor: "var(--theme-border-color)" }}>
              <button
                onClick={() => setShowWordBankModal(false)}
                className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Close Word Bank
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
