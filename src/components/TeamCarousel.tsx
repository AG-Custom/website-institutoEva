"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr André Luis",
    title: "Médico Especializado",
    image: "/doutorAndre.png",
    description: [
      "O Dr. André Luis é médico especializado em Medicina do Esporte, com atuação voltada para o emagrecimento saudável, reeducação metabólica e melhora da performance física.",
      "Com uma abordagem baseada em evidências científicas, o Dr. André combina estratégias médicas, nutricionais e de estilo de vida para produzir resultados consistentes e sustentáveis."
    ]
  },
  {
    name: "Dr André Luis",
    title: "Médico Especializado",
    image: "/doutorAndre.png",
    description: [
      "O Dr. André Luis é médico especializado em Medicina do Esporte, com atuação voltada para o emagrecimento saudável, reeducação metabólica e melhora da performance física.",
      "Com uma abordagem baseada em evidências científicas, o Dr. André combina estratégias médicas, nutricionais e de estilo de vida para produzir resultados consistentes e sustentáveis."
    ]
  },
  {
    name: "Dr Jorge Luis",
    title: "AAA Especializado",
    image: "/doutorAndre.png",
    description: [
      "O Dr. André Luis é médico especializado em Medicina do Esporte, com atuação voltada para o emagrecimento saudável, reeducação metabólica e melhora da performance física.",
      "Com uma abordagem baseada em evidências científicas, o Dr. André combina estratégias médicas, nutricionais e de estilo de vida para produzir resultados consistentes e sustentáveis."
    ]
  },
  {
    name: "Dr  Luis",
    title: "Médico Especializado",
    image: "/doutorAndre.png",
    description: [
      "O Dr. André Luis é médico especializado em Medicina do Esporte, com atuação voltada para o emagrecimento saudável, reeducação metabólica e melhora da performance física.",
      "Com uma abordagem baseada em evidências científicas, o Dr. André combina estratégias médicas, nutricionais e de estilo de vida para produzir resultados consistentes e sustentáveis."
    ]
  },
  {
    name: "Dr Lucas Luis",
    title: "Médico Especializado",
    image: "/doutorAndre.png",
    description: [
      "O Dr. André Luis é médico especializado em Medicina do Esporte, com atuação voltada para o emagrecimento saudável, reeducação metabólica e melhora da performance física.",
      "Com uma abordagem baseada em evidências científicas, o Dr. André combina estratégias médicas, nutricionais e de estilo de vida para produzir resultados consistentes e sustentáveis."
    ]
  },
];

export default function TeamCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  const safeIndex = (i: number) => (i + teamMembers.length) % teamMembers.length;

  const handlePrev = () => {
    setDirection("prev");
    setIndex((i) => safeIndex(i - 1));
  };

  const handleNext = () => {
    setDirection("next");
    setIndex((i) => safeIndex(i + 1));
  };

  // Autoplay com pausa no hover
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      return;
    }
    timerRef.current = window.setInterval(() => {
      setDirection("next");
      setIndex((i) => safeIndex(i + 1));
    }, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const variants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -60 : 60,
      opacity: 0,
      scale: 0.98,
    }),
  };

  const current = teamMembers[index];

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Nossa Equipe
        </h2>

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Nossa equipe"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navegação */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
            aria-label="Próximo"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Card centralizado */}
          <div className="mx-auto max-w-3xl px-2">
            <div className="relative min-h-[540px] flex items-stretch justify-center">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="w-full"
                >
                  <div className="bg-[#3e5f5b] rounded-3xl shadow-xl overflow-hidden h-full">
                    <div className="text-center py-6 px-6">
                      <h3 className="text-2xl font-semibold text-white">{current.name}</h3>
                    </div>

                    <div className="relative w-full aspect-square max-w-[320px] mx-auto px-6">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                        <Image
                          src={current.image}
                          alt={current.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 320px"
                        />
                      </div>
                    </div>

                    <div className="p-8 text-white space-y-4">
                      {current.description.map((paragraph, idx) => (
                        <p key={idx} className="text-sm leading-relaxed opacity-95">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Membros da equipe">
            {teamMembers.map((_, i) => {
              const active = i === index;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? "next" : "prev");
                    setIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all ${active ? "bg-[#3e5f5b] w-8" : "bg-gray-300 hover:bg-gray-400 w-2.5"}`}
                  aria-label={`Ir para membro ${i + 1}`}
                  role="tab"
                  aria-selected={active}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
