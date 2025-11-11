import React from "react";

interface FeedbackItem {
  name: string;
  description: string;
}

// Placeholder de feedbacks – substitua pelos reais quando tiver.
const feedbacks: FeedbackItem[] = [
  {
    name: "Mariana S.",
    description:
      "Consegui controlar minha ansiedade e reduzir medidas sem passar fome. A equipe me acompanhou de perto e ajustou tudo conforme minha evolução.",
  },
  {
    name: "João P.",
    description:
      "Voltei a ter energia no dia a dia e desempenho muito melhor nos treinos. O protocolo foi personalizado de verdade e os resultados vieram rápido.",
  },
  {
    name: "Fernanda A.",
    description:
      "Minha pele melhorou, perdi gordura localizada e hoje me sinto muito mais confiante. O atendimento é extremamente cuidadoso e humano.",
  },
  {
    name: "Carlos R.",
    description:
      "Eu já tinha tentado vários métodos. Aqui entendi meu metabolismo e finalmente consegui emagrecer de forma sustentável.",
  },
  {
    name: "Isabela T.",
    description:
      "O acompanhamento semanal fez toda diferença. Pequenos ajustes constantes tornaram o processo leve e sem frustrações.",
  },
];

export default function Feedbacks() {
  return (
    <section className="bg-white py-16" id="feedbacks">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">Feedbacks de Participantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {feedbacks.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-gray-200 p-5 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-left font-semibold text-gray-800 text-lg md:text-xl">
                  {item.name}
                </span>
                <svg
                  className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-3 text-base md:text-[17px] text-gray-700 leading-relaxed">
                {item.description}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
