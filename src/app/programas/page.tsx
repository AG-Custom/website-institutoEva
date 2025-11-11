import Image from "next/image";
import Link from "next/link";

export default function ProgramasPage() {
  const programs = [
    {
      id: "medicina-esportiva",
      title: "MEDICINA ESPORTIVA",
      description: "Potencialize seu desempenho e recupere-se com segurança. Oferecemos acompanhamento médico especializado para atletas e praticantes de atividade física que buscam performance, prevenção e equilíbrio corporal.",
      image: "/assets/treatments/gym.jpg",
      bgColor: "bg-[#3e5f5b]"
    },
    {
      id: "emagrecimento",
      title: "EMAGRECIMENTO",
      description: "Alcance seus objetivos com saúde e acompanhamento contínuo. Desenvolvemos programas personalizados que combinam tecnologia, nutrição e suporte médico para resultados duradouros.",
      image: "/assets/treatments/weight-loss.jpg",
      bgColor: "bg-[#3e5f5b]"
    },
    {
      id: "reposicao-hormonal",
      title: "REPOSIÇÃO HORMONAL",
      description: "Recupere seu equilíbrio físico e emocional com segurança e acompanhamento médico especializado. Nosso protocolo de reposições hormonais personalizadas é desenvolvido com base em exames detalhados e nas necessidades individuais de cada paciente.",
      image: "/assets/treatments/hormones.jpg",
      bgColor: "bg-gray-100"
    },
    {
      id: "longevidade",
      title: "LONGEVIDADE",
      description: "Cuide de hoje pensando no amanhã. Nossos tratamentos visam retardar o envelhecimento, melhorar a vitalidade e promover qualidade de vida em todas as fases.",
      image: "/assets/treatments/longevity.jpg",
      bgColor: "bg-gray-100"
    },
    {
      id: "estetica",
      title: "ESTÉTICA",
      description: "Beleza e bem-estar em harmonia. Oferecemos procedimentos modernos e seguros para realçar sua aparência e elevar sua autoestima com naturalidade.",
      image: "/assets/treatments/aesthetics.jpg",
      bgColor: "bg-[#3e5f5b]"
    },
    {
      id: "hipertrofia",
      title: "HIPERTROFIA",
      description: "Fortaleça seu corpo e alcance resultados reais com acompanhamento médico especializado. Nossos programas de hipertrofia e ganho de massa magra são desenvolvidos de forma personalizada.",
      image: "/assets/treatments/hypertrophy.jpg",
      bgColor: "bg-[#3e5f5b]"
    }
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 select-none">
            <Image src="/assets/logo.svg" alt="Instituto EVA" width={120} height={40} priority />
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

      {/* Programs Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-0">
          {programs.map((program, index) => {
            const isEven = index % 2 === 0;
            const textColor = program.bgColor.includes('gray') ? 'text-gray-800' : 'text-white';
            
            return (
              <div 
                key={program.id} 
                className={`grid md:grid-cols-2 gap-0 ${program.bgColor} ${index !== 0 ? 'border-t border-white/10' : ''}`}
              >
                {/* Image */}
                <div className={`relative h-64 md:h-96 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <Image 
                    src={program.image} 
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className={`flex flex-col justify-center p-8 md:p-12 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${textColor} tracking-wide`}>
                    {program.title}
                  </h2>
                  <p className={`${textColor} ${textColor.includes('gray') ? '' : 'opacity-90'} leading-relaxed`}>
                    {program.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-[1fr_auto] items-center gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Pronto para começar?</h3>
            <p className="text-gray-600 mt-2">Agende sua avaliação e receba um plano sob medida para você.</p>
          </div>
          <Link href="/#agendamento" className="inline-flex rounded-md bg-[var(--eva-green)] hover:bg-[var(--eva-green-dark)] text-white px-6 py-3 shadow-md transition-colors">
            Agendar agora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.svg" alt="Instituto EVA" width={90} height={30} />
            <span>© {new Date().getFullYear()} Instituto EVA</span>
          </div>
          <div className="text-center sm:text-right">
            <p>Contato: contato@institutoeva.com.br</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
