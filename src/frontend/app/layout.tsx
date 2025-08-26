/**
 * layout.tsx - Layout raíz de Esstupendas
 *
 * Define el layout principal de la app Next.js.
 * Integra:
 * - Tipografía Inter
 * - RGPD: CookieConsentProvider
 * - Estructura global con Navbar/Footer
 * - Metadata global para SEO y favicon (pendiente de subir)
 */

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import { CookieConsentProvider } from "@/hooks/useCookieConsent";
import CookieBanner from "@/components/cookies/CookieBanner";
import CookieModal from "@/components/cookies/CookieModal";

// Tipografía Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Metadata global
export const metadata: Metadata = {
  title: "Esstupendas | Estética Avanzada en Sant Salvador",
  description:
    "Centro de estética avanzada en Coma‑ruga y Sant Salvador. Manicuras, depilación, tratamientos faciales y corporales. Reserva online con Booksy.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`
          ${inter.variable}
          font-sans
          antialiased
          text-black
          bg-white
        `}
      >
        <CookieConsentProvider>
          <ClientLayout>{children}</ClientLayout>
          <CookieBanner />
          <CookieModal />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
