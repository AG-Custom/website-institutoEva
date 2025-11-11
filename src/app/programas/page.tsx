import Image from "next/image";
import Link from "next/link";
import ProgramCard from "./programas";
import Footer from "@/components/Footer";

export default function ProgramasPage() {
  const programs = [
    {
      id: "medicina-esportiva",
      title: "Medicina Esportiva",
      description:
        "Potencialize seu desempenho e recupere-se com segurança. Acompanhamento para atletas e praticantes de atividade física que buscam performance, prevenção e equilíbrio corporal.",
      image: "/assets/programas/medicina_esportiva.png",
    },
    {
      id: "emagrecimento",
      title: "Emagrecimento",
      description:
        "Planos personalizados que combinam tecnologia, nutrição e suporte médico para resultados duradouros e saudáveis.",
      image: "/assets/programas/emagrecimento.png",
    },
    {
      id: "reposicao-hormonal",
      title: "Reposição Hormonal",
      description:
        "Protocolos personalizados com base em exames detalhados para recuperar o equilíbrio físico e emocional com segurança.",
      image: "/assets/programas/reposicao_hormonal.png",
    },
    {
      id: "longevidade",
      title: "Longevidade",
      description:
        "Tratamentos para retardar o envelhecimento, melhorar a vitalidade e promover qualidade de vida em todas as fases.",
      image: "/assets/programas/longevidade.png",
    },
    {
      id: "estetica",
      title: "Estética",
      description:
        "Procedimentos modernos e seguros para realçar sua aparência e elevar sua autoestima com naturalidade.",
      image: "/assets/programas/estetica.png",
    },
    {
      id: "hipertrofia",
      title: "Hipertrofia",
      description:
        "Programas focados em ganho de massa magra com acompanhamento médico especializado.",
      image: "/assets/programas/hipertrofia.png",
    },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <header className="w-full sticky top-0 z-40 glass border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 select-none">
            <Image src="/assets/logo.svg" alt="Instituto EVA" width={90} height={30} priority />
          </Link>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/#agendamento" className="hover:text-black">Agendamento</Link>
            <Link href="/programas" className="hover:text-black text-black font-semibold">Programas</Link>
            <Link href="/#contato" className="hover:text-black">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Hero Title */}
      <section className="bg-gray-50 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
            Programas
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

      <Footer />
    </div>
  );
}
