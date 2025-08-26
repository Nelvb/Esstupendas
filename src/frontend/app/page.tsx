/**
 * page.tsx
 *
 * Página principal de Esstupendas, salón de estética en Sant Salvador (Coma-ruga).
 * Optimizada para SEO local, Booksy y conversión de clientas.
 * Estructura profesional, clara y escalable.
 */

import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/Home/HeroSection";
import PostHeroLayout from "@/components/Home/PostHeroLayout";
import AreasGrid from "@/components/Home/AreasGrid";
import ParallaxTitleSection from "@/components/Home/ParallaxTitleSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ContactHomeCTA from "@/components/Home/ContactHomeCta";

// Metadata REAL para SEO local
export const metadata: Metadata = {
  title: "Esstupendas | Estética Avanzada en Coma‑ruga (Sant Salvador)",
  description:
    "Centro de estética avanzada en Coma‑ruga. Tratamientos faciales, corporales, depilación, maderoterapia y más. Reserva fácil online con Booksy.",
  keywords: [
    "centro estética comarruga",
    "salón belleza sant salvador",
    "depilación cera",
    "maderoterapia comarruga",
    "limpieza facial",
    "booksy estética",
    "esstupendas",
    "tratamientos corporales",
    "estética avanzada"
  ].join(", "),
  authors: [{ name: "Esstupendas" }],
  creator: "Esstupendas",
  publisher: "Esstupendas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-label="Página principal de Esstupendas"
    >
      {/* Hero Section con texto persuasivo + llamada a la acción */}
      <HeroSection />

      {/* Sección de servicios destacados */}
      <AreasGrid />

      {/* Parallax con propuesta de valor */}
      <PostHeroLayout
        titleSection={
          <ParallaxTitleSection
            title="¿Por qué elegir"
            highlightTitle="Esstupendas?"
            subtitle="Un salón de estética en Coma‑ruga donde cuidamos cada detalle."
            highlightText="Tu bienestar es nuestra prioridad."
            paddingY="py-20 lg:py-32"
          />
        }
      >
        {/* Beneficios destacados para clientas */}
        <WhyChooseUs />

        {/* Otras secciones futuras (comentadas hasta implementarlas) */}
        {/* <BasicContact /> */}
        {/* <CTASection /> */}
      </PostHeroLayout>

      {/* Call To Action final con botón Booksy */}
      <ContactHomeCTA />

      {/* Datos estructurados REALES para SEO local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Esstupendas",
            "description":
              "Centro de estética avanzada en Sant Salvador · Coma‑ruga. Depilación, tratamientos faciales, maderoterapia, radiofrecuencia y más.",
            "url": "https://esstupendas.com", // Puedes cambiarlo más adelante
            "email": "esstupendasbeautycenter@gmail.com",
            "telephone": "+34 691 818 071",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Avinguda de Palfuriana, 45",
              "addressLocality": "Sant Salvador",
              "addressRegion": "Tarragona",
              "postalCode": "43880",
              "addressCountry": "ES",
            },
            "openingHours": "Mo-Fr 09:30-19:30",
            "sameAs": [
              "https://booksy.com/es-es/70330_esstupend-s_cuidado-de-la-piel_52460_els-garrofers#ba_s=seo",
              "https://www.instagram.com/esstupendas/"
            ],
          }),
        }}
      />
    </main>
  );
}
