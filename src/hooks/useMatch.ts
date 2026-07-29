"use client";

import { useState, useEffect } from "react";

export interface Message {
  id: string;
  sender: "user" | "partner";
  text: string;
  translation?: string;
  timestamp: string;
  syllableInfo?: { word: string; breakdown: string; phonetics: string }[];
}

export interface MatchPartner {
  name: string;
  avatar: string;
  country: string;
  language: string;
  bio: string;
  online: boolean;
}

const DEFAULT_PARTNER: MatchPartner = {
  name: "Mateo",
  avatar: "🎨",
  country: "Spain 🇪🇸",
  language: "Spanish",
  bio: "Hi! I love painting, playing football, and writing stories. Let's learn together!",
  online: true,
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    sender: "partner",
    text: "¡Hola! Me llamo Mateo. Me encanta el fútbol y dibujar. ¿Y tú?",
    translation: "Hello! My name is Mateo. I love soccer and drawing. And you?",
    timestamp: "10:15 AM",
    syllableInfo: [
      { word: "fútbol", breakdown: "fút · bol", phonetics: "[ˈfut.βol]" },
      { word: "dibujar", breakdown: "di · bu · jar", phonetics: "[di.βuˈxaɾ]" },
      { word: "encanta", breakdown: "en · can · ta", phonetics: "[ẽŋˈkãn.ta]" },
    ],
  },
];

export const useMatch = () => {
  const [partner, setPartner] = useState<MatchPartner>(DEFAULT_PARTNER);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("penpal_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Messages list parsing error:", e);
      }
    } else {
      setMessages(INITIAL_MESSAGES);
      localStorage.setItem("penpal_messages", JSON.stringify(INITIAL_MESSAGES));
    }
  }, []);

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updated = [...messages, newMessage];
    setMessages(updated);
    localStorage.setItem("penpal_messages", JSON.stringify(updated));

    // Simulate an automatic smart P2P response after 4 seconds
    setTimeout(() => {
      const responseText = getSimulatedResponse(text);
      const partnerMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: "partner",
        text: responseText.text,
        translation: responseText.translation,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        syllableInfo: responseText.syllables,
      };

      setMessages((prev) => {
        const withResponse = [...prev, partnerMessage];
        localStorage.setItem("penpal_messages", JSON.stringify(withResponse));
        return withResponse;
      });

      // Increment progress metric for Parent / Educator dashboard
      incrementMessageCount();
    }, 4000);
  };

  const clearChat = () => {
    setMessages(INITIAL_MESSAGES);
    localStorage.setItem("penpal_messages", JSON.stringify(INITIAL_MESSAGES));
  };

  const getSimulatedResponse = (userInput: string) => {
    const inputLower = userInput.toLowerCase();
    if (inputLower.includes("hola") || inputLower.includes("hello") || inputLower.includes("me llamo")) {
      return {
        text: "¡Estupendo! Es un placer conocerte. ¿Qué te gusta comer en el desayuno?",
        translation: "Great! It's a pleasure to meet you. What do you like to eat for breakfast?",
        syllables: [
          { word: "estupendo", breakdown: "es · tu · pen · do", phonetics: "[es.tuˈpẽn.do]" },
          { word: "desayuno", breakdown: "de · sa · yu · no", phonetics: "[de.saˈʝu.no]" },
          { word: "conocerte", breakdown: "co · no · cer · te", phonetics: "[ko.noˈθeɾ.te]" },
        ],
      };
    }

    if (inputLower.includes("gust") || inputLower.includes("like") || inputLower.includes("play")) {
      return {
        text: "¡Qué divertido! A mí también me encantan los videojuegos y aprender idiomas.",
        translation: "How fun! I also love video games and learning languages.",
        syllables: [
          { word: "divertido", breakdown: "di · ver · ti · do", phonetics: "[di.βeɾˈti.ðo]" },
          { word: "videojuegos", breakdown: "vi · de · o · jue · gos", phonetics: "[bi.ðeoˈxwe.ɣos]" },
          { word: "aprender", breakdown: "a · pren · der", phonetics: "[a.pɾẽnˈdeɾ]" },
        ],
      };
    }

    return {
      text: "¡Qué interesante! Muchas gracias por compartir eso conmigo. ¿Hacemos un test cooperativo?",
      translation: "How interesting! Thank you so much for sharing that with me. Shall we do a cooperative quiz?",
      syllables: [
        { word: "interesante", breakdown: "in · te · re · san · te", phonetics: "[ĩn.te.ɾeˈsãn.te]" },
        { word: "compartir", breakdown: "com · par · tir", phonetics: "[kõm.paɾˈtiɾ]" },
        { word: "cooperativo", breakdown: "co · o · pe · ra · ti · vo", phonetics: "[ko.o.pe.ɾaˈti.βo]" },
      ],
    };
  };

  const incrementMessageCount = () => {
    if (typeof window === "undefined") return;
    const current = Number(localStorage.getItem("penpal_messages_sent_count") || "3");
    localStorage.setItem("penpal_messages_sent_count", (current + 1).toString());

    // Also track vocabulary list count
    const vocabList = JSON.parse(localStorage.getItem("penpal_learned_vocab") || "[]");
    const newVocabs = ["fútbol", "videojuegos", "desayuno", "estupendo", "divertido"];
    const addedRandom = newVocabs[Math.floor(Math.random() * newVocabs.length)];
    if (!vocabList.includes(addedRandom)) {
      vocabList.push(addedRandom);
      localStorage.setItem("penpal_learned_vocab", JSON.stringify(vocabList));
    }
  };

  return { partner, messages, sendMessage, clearChat };
};
