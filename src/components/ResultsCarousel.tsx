"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const images = [
  "/assets/carrossel1.png",
  "/assets/carrossel2.png",
  "/assets/carrossel3.png",
];

export default function ResultsCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const timer = useRef<number | null>(null);

  const next = () => {
    setDir("next");
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setDir("prev");
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  useEffect(() => {
    timer.current && window.clearInterval(timer.current);
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  const variants = {
    enter: (d: "next" | "prev") => ({ x: d === "next" ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: "next" | "prev") => ({ x: d === "next" ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="bg-gray-50 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Resultados</h2>
          <p className="text-sm md:text-base text-gray-600 italic mt-1">“O esforço de hoje é o resultado de amanhã.”</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center hover:bg-white"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={next}
            aria-label="Próximo"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center hover:bg-white"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Slide */}
          <div className="mx-auto px-10 md:px-12">
            <div className="relative w-full">
              <div className="relative w-full aspect-[16/10] md:aspect-[16/8] overflow-hidden rounded-xl bg-white shadow">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={index}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[index]}
                      alt={`Resultado ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 800px"
                      priority={index === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${i === index ? "bg-[var(--eva-green)] w-6" : "bg-gray-300 w-2.5 hover:bg-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
