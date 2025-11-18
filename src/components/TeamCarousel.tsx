"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import teamCarouselService from "@/services/teamCarousel_service";

interface TeamMember {
  id: number;
  nome_funcionario: string;
  descricao_funcionario: string;
  Imagem_funcionario: string;
}

export default function TeamCarousel() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Busca os dados do backend
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const data = await teamCarouselService.getTeamMembers();
        setTeamMembers(data);
        setError(null);
      } catch (err) {
        console.error("Erro ao carregar equipe:", err);
        setError("Não foi possível carregar os membros da equipe.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const safeIndex = (i: number) => teamMembers.length > 0 ? (i + teamMembers.length) % teamMembers.length : 0;

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
    if (isHovered || teamMembers.length === 0) {
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
  }, [isHovered, teamMembers.length]);

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

  // Loading state
  if (loading) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nossa Equipe
          </h2>
          <div className="flex justify-center items-center min-h-[540px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3e5f5b]"></div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || teamMembers.length === 0) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Nossa Equipe
          </h2>
          <div className="flex justify-center items-center min-h-[540px]">
            <p className="text-gray-600 text-center">
              {error || "Nenhum membro da equipe disponível no momento."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  const current = teamMembers[index];
  const imageUrl = teamCarouselService.getImageUrl(current.Imagem_funcionario);

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
                      <h3 className="text-2xl font-semibold text-white">{current.nome_funcionario}</h3>
                    </div>

                    <div className="relative w-full aspect-square max-w-[320px] mx-auto px-6">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
                        <Image
                          src={imageUrl}
                          alt={current.nome_funcionario}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 320px"
                          unoptimized
                        />
                      </div>
                    </div>

                    <div className="p-8 text-white space-y-4">
                      <p className="text-sm leading-relaxed opacity-95 whitespace-pre-line">
                        {current.descricao_funcionario}
                      </p>
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
