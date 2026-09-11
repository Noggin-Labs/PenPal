import React from "react";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import { AuthProvider } from "@/context/AuthContext";
import { ReadingRuler } from "@/components/a11y/ReadingRuler";
import { A11yWidget } from "@/components/a11y/A11yWidget";
import "@/styles/globals.css";

export const metadata = {
  title: "PenPal — Dyslexia-First Language Learning & Correspondence Atelier",
  description:
    "An adaptive social-first language learning platform for learners with dyslexia, scotopic/Irlen sensitivity, and visual processing differences. Bimodal audio-visual reading, anti-glare color palettes, and timer-free penpal correspondence.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-amber-200 selection:text-slate-900">
        <AuthProvider>
          <AccessibilityProvider>
            {children}
            <ReadingRuler />
            <A11yWidget />
          </AccessibilityProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
