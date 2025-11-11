"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
  // Índice inicial centralizado para permitir navegação para ambos os lados
  const startIndex = teamMembers.length;
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Duplicar os cards para efeito infinito
  const extendedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      if (currentIndex >= startIndex + teamMembers.length) {
        setCurrentIndex(startIndex);
      } else if (currentIndex < startIndex) {
        setCurrentIndex(startIndex + teamMembers.length - 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, startIndex]);

  const getVisibleCards = () => {
    const len = extendedMembers.length;
    // Indexação circular para evitar undefined nos extremos
    const prev = extendedMembers[(currentIndex - 1 + len) % len];
    const curr = extendedMembers[(currentIndex + len) % len];
    const next = extendedMembers[(currentIndex + 1 + len) % len];
    return [prev, curr, next];
  };

  const visibleCards = getVisibleCards();

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Nossa Equipe
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
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

          {/* Cards Container */}
          <div className="overflow-hidden mx-16">
            <div 
              className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: `translateX(calc(-33.333% - 0.5rem))`,
              }}
            >
              {visibleCards.map((member, idx) => (
                <div 
                  key={`${currentIndex}-${idx}`}
                  className={`flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] transition-all duration-500 ${
                    idx === 1 ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                  }`}
                >
                  <div className="bg-[#3e5f5b] rounded-3xl shadow-xl overflow-hidden h-full">
                    {/* Header with name */}
                    <div className="text-center py-6 px-6">
                      <h3 className="text-2xl font-semibold text-white">
                        {member.name}
                      </h3>
                    </div>

                    {/* Image */}
                    <div className="relative w-full aspect-square max-w-[280px] mx-auto px-6">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 280px"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-8 text-white space-y-4">
                      {member.description.map((paragraph, index) => (
                        <p key={index} className="text-sm leading-relaxed opacity-95">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(startIndex + index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  (currentIndex - startIndex) % teamMembers.length === index
                    ? "bg-[#3e5f5b] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para membro ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
