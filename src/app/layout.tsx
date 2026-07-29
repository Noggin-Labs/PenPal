import React from "react";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import { AuthProvider } from "@/context/AuthContext";
import { ReadingRuler } from "@/components/a11y/ReadingRuler";
import { A11yWidget } from "@/components/a11y/A11yWidget";
import "@/styles/globals.css";

export const metadata = {
  title: "PenPal - Adaptive Language Learning",
  description: "An adaptive social-first language learning platform for learners with dyslexia and visual processing differences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-yellow-200">
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
