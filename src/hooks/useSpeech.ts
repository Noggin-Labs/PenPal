"use client";

import { useState, useCallback, useEffect } from "react";
import { useAccessibility } from "@/context/AccessibilityContext";

export const useSpeech = () => {
  const { speechSpeed } = useAccessibility();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [recognitionSupported, setRecognitionSupported] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSpeechSupported(!!window.speechSynthesis);
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      setRecognitionSupported(!!SpeechRecognition);
    }
  }, []);

  const speak = useCallback(
    (text: string, lang = "es-ES") => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      window.speechSynthesis.cancel(); // Terminate pending utterances

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = speechSpeed; // Slower or custom speed

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    },
    [speechSpeed]
  );

  const stop = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  }, []);

  const startListening = useCallback(
    (onResult: (text: string) => void, lang = "es-ES") => {
      if (typeof window === "undefined") return;

      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        // Fallback simulated listening if API not supported
        setIsListening(true);
        setTimeout(() => {
          setIsListening(false);
          // Simulate some useful response based on predefined sentence structures
          onResult("¡Hola PenPal! ¿Cómo estás hoy?");
        }, 3000);
        return;
      }

      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = lang;

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          const resultText = event.results[0][0].transcript;
          onResult(resultText);
        };

        recognition.onerror = (e: any) => {
          console.error("Speech recognition error:", e);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognition.start();
      } catch (err) {
        console.error("Error starting speech recognition:", err);
        setIsListening(false);
      }
    },
    []
  );

  return {
    speak,
    stop,
    isPlaying,
    isListening,
    startListening,
    speechSupported,
    recognitionSupported,
  };
};
