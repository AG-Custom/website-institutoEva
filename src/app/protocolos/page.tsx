import Image from "next/image";
import Link from "next/link";
import ProgramCard from "./protocolos";
import Footer from "@/components/Footer";
import ResultsCarousel from "@/components/ResultsCarousel";
import Feedbacks from "@/components/Feedbacks";
import Header from "@/components/Header";

export default function ProgramasPage() {
  const programs = [
    {
      id: "definicao-muscular",
      title: "Definição Muscular",
      description:
        "Desenvolvido para quem busca ganho de massa magra com segurança e eficiência, nosso programa de hipertrofia combina nutrologia, suplementação estratégica e acompanhamento médico personalizado. Com base em avaliação corporal detalhada e controle metabólico, o foco é estimular o crescimento e a definição muscular por meio de ajustes nutricionais, hormonais e metabólicos, garantindo aumento de performance, força e resistência sem comprometer a saúde.",
      image: "/assets/protocolos/hipertrofia.png",
    },
    {
      id: "recomposicao-corporal",
      title: "Reposição e Recomposição Corporal",
      description:
        "Voltado para os que desejam redefinir o corpo e restaurar o equilíbrio hormonal, este protocolo integra avaliação metabólica, modulação hormonal, nutrição e estratégias de performance. Com abordagem precisa e individualizada, o objetivo é corrigir déficits hormonais e metabólicos, otimizar massa magra, reduzir gordura corporal, resgate de autoestima e restaurar energia, libido e vitalidade, com base científica e acompanhamento contínuo.",
      image: "/assets/protocolos/reposicao_hormonal.png",
    },
    {
      id: "terapias-injetaveis",
      title: "Terapias Injetáveis",
      description:
        "As terapias endovenosas consistem na administração de vitaminas, minerais ou outros ativos diretamente na corrente sanguínea e são ideais para pacientes que precisam de reposição nutricional intensa ou que não respondem bem à suplementação oral. Por serem absorvidos de forma mais rápida e eficiente, esses nutrientes auxiliam no tratamento de diversas condições de saúde, melhorando a imunidade, combatendo a fadiga e otimizando o desempenho mental e físico.",
      image: "/assets/protocolos/medicina_esportiva.png",
    },
    {
      id: "controle-de-peso",
      title: "Controle de Peso",
      description:
        "Mais do que perder peso, o Programa de Emagrecimento do Instituto Eva é uma jornada de transformação e mudança de estilo de vida. Com base em diagnóstico detalhado, envolve estratégias médicas, nutricionais e comportamentais personalizadas, sempre com acompanhamento próximo da equipe a fim de promover redução de gordura corporal e melhora metabólica de forma sustentável, aliando estética, saúde e qualidade de vida em um processo controlado, seguro e eficaz.",
      image: "/assets/protocolos/emagrecimento.png",
    },
    {
      id: "estetica-integrada",
      title: "Estética Integrada",
      description:
        "Nosso Programa de Estética Integrada combina terapias médicas, tecnologias avançadas e procedimentos injetáveis para promover rejuvenescimento, harmonia facial e corporal com naturalidade e segurança. Nosso objetivo é valorizar a beleza individual com resultados sutis e elegantes, estimulando autoconfiança e bem-estar através de tratamentos personalizados que respeitam a fisiologia e a identidade de cada paciente.",
      image: "/assets/protocolos/estetica.png",
    },
    {
      id: "envelhecimento-saudavel",
      title: "Envelhecimento Saudável",
      description:
        "Nosso programa utiliza modulação hormonal, suplementação específica e estratégias preventivas para manter equilíbrio metabólico, imunidade e disposição ao longo dos anos. Nosso propósito é prolongar a saúde e a vitalidade, prevenindo o envelhecimento precoce e suas consequências metabólicas, promovendo qualidade de vida e autonomia física e mental de forma contínua.",
      image: "/assets/protocolos/longevidade.png",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <Header />

      {/* Hero Title */}
      <section className="bg-gray-50 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
            Protocolos
          </h1>
        </div>
      </section>

      {/* Programs - linhas alternadas: verde, branca, verde (sem linha azul) */}
      <section>
        {[0, 2, 4].map((start, rowIdx) => {
          const rowItems = programs.slice(start, start + 2);
          const isGreen = rowIdx % 2 === 0; // 0 e 2 verdes, 1 branco
          const rowClasses = isGreen
            ? "bg-[var(--eva-green)] text-white"
            : "bg-white text-gray-800";
          return (
            <div key={rowIdx} className={rowClasses}>
              <div className={`max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10`}>
                {rowItems.map((program) => (
                  <ProgramCard
                    key={program.id}
                    title={program.title}
                    text={program.description}
                    imageSrc={program.image}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>

  {/* Resultados */}
  <ResultsCarousel />

  {/* Feedbacks */}
  <Feedbacks />

      <Footer />
    </div>
  );
}
