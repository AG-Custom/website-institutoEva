import Image from "next/image";
import Link from "next/link";
import TeamCarousel from "@/components/TeamCarousel";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 select-none">
            <Image src="/assets/logo.svg" alt="Instituto EVA" width={120} height={40} priority />
          </Link>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#agendamento" className="hover:text-black">Agendamento</a>
            <Link href="/programas" className="hover:text-black">Programas</Link>
            <a href="#contato" className="hover:text-black">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
              Somos especialistas em emagrecimento e tratamentos estéticos personalizados.
            </h1>
            <div>
              <a href="#agendamento" className="inline-flex rounded-md bg-[var(--eva-green)] hover:bg-[var(--eva-green-dark)] text-white px-6 py-3 shadow-md transition-colors">
                Agende sua Consulta
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <Image src="/assets/doctor.svg" alt="Profissional de saúde" width={440} height={480} className="relative z-10 h-auto w-[320px] md:w-[420px]" />
          </div>
        </div>
        {/* grande curva decorativa */}
        <div className="pointer-events-none absolute -bottom-24 right-0 w-[70vw] h-[70vw] rounded-tl-[999px] bg-[var(--eva-green)]" />
      </section>

      {/* Serviços + Sobre */}
      <section id="tratamentos" className="leaf-section-bg text-white">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl p-6 shadow-lg border border-white/10 bg-gradient-to-br from-[#396d77] to-[#5ea8a8]">
              <h3 className="font-bold uppercase tracking-wide">Medicina Esportiva</h3>
              <p className="mt-4 text-sm opacity-90">Potencialize seu desempenho e recupere-se com segurança.</p>
            </div>
            <div className="rounded-xl p-6 shadow-lg border border-white/10 bg-gradient-to-br from-[#396d77] to-[#5ea8a8]">
              <h3 className="font-bold uppercase tracking-wide">Longevidade</h3>
              <p className="mt-4 text-sm opacity-90">Cuide de hoje pensando no amanhã.</p>
            </div>
            <div className="rounded-xl p-6 shadow-lg border border-white/10 bg-gradient-to-br from-[#396d77] to-[#5ea8a8]">
              <h3 className="font-bold uppercase tracking-wide">Emagrecimento</h3>
              <p className="mt-4 text-sm opacity-90">Alcance seus objetivos com saúde e acompanhamento contínuo.</p>
            </div>
            <div className="rounded-xl p-6 shadow-lg border border-white/10 bg-gradient-to-br from-[#396d77] to-[#5ea8a8]">
              <h3 className="font-bold uppercase tracking-wide">Estética</h3>
              <p className="mt-4 text-sm opacity-90">Beleza e bem-estar em harmonia.</p>
            </div>
          </div>

          <hr className="my-10 border-white/20" />

          {/* Sobre */}
          <div className="relative grid md:grid-cols-2 gap-8 items-start">
            <div>
              <Image src="/assets/clinic.svg" alt="Estrutura da clínica" width={540} height={320} className="rounded-xl w-full h-auto" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-semibold">A Clínica EVA nasceu com o propósito de transformar vidas por meio da saúde, da estética e do bem-estar.</h2>
              <p className="mt-5 text-white/90">
                Unindo ciência, tecnologia e atendimento humanizado, oferecemos tratamentos personalizados nas áreas de emagrecimento, estética, longevidade e medicina esportiva.
              </p>
            </div>

            {/* Marca d'água de folha */}
            <Image src="/assets/leaf-watermark.svg" alt="" aria-hidden width={400} height={400} className="pointer-events-none select-none absolute -right-8 bottom-0 opacity-20 hidden md:block" />
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <TeamCarousel />

      {/* Contato/CTA simples */}
      <section id="agendamento" className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-[1fr_auto] items-center gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">Pronto para começar?</h3>
            <p className="text-gray-600 mt-2">Agende sua avaliação e receba um plano sob medida para você.</p>
          </div>
          <a href="#contato" className="inline-flex rounded-md bg-[var(--eva-green)] hover:bg-[var(--eva-green-dark)] text-white px-6 py-3 shadow-md">Agendar agora</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-50 border-t border-black/5">
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
