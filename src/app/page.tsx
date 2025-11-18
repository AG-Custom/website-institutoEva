import Image from "next/image";
import TeamCarousel from "@/components/TeamCarousel";
import FAQ from "@/components/FAQ";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative bg-white">
        <div className="max-w-6xl mx-auto px-6 pt-14 md:pt-20 pb-0 grid md:grid-cols-2 gap-10 items-center">
          <AnimatedSection className="space-y-6" yOffset={28}>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
              Somos especialistas em emagrecimento e tratamentos estéticos personalizados.
            </h1>
            <div>
              <a href="#agendamento" className="inline-flex rounded-md bg-[var(--eva-green)] hover:bg-[var(--eva-green-dark)] text-white px-6 py-3 shadow-md transition-transform hover:scale-[1.02] focus-visible:focus-ring">
                Agende sua Consulta
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection className="relative flex justify-center md:justify-end md:translate-y-10 lg:translate-y-14" delay={0.1} yOffset={16}>
            <Image src="/assets/doctor.svg" alt="Profissional de saúde" width={520} height={560} className="relative z-10 h-auto w-[340px] md:w-[460px]" />
          </AnimatedSection>
        </div>
        {/* curva decorativa removida a pedido do cliente */}
      </section>

      {/* Serviços + Sobre */}
      <section id="tratamentos" className="leaf-section-bg text-white">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
          <AnimatedSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </AnimatedSection>

          <hr className="my-10 border-white/20" />

          {/* Sobre */}
          <AnimatedSection className="relative grid md:grid-cols-2 gap-8 items-start" yOffset={28}>
            <div>
              <Image src="/assets/clinic.png" alt="Estrutura da clínica" width={540} height={320} className="rounded-xl w-full h-auto" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-semibold">Sobre nós</h2>
              <p className="mt-5 text-white/90">
                A Clínica EVA nasceu com o propósito de transformar vidas por meio da saúde, da estética e do bem-estar. Unindo ciência, tecnologia e atendimento humanizado, oferecemos tratamentos personalizados nas áreas de emagrecimento, estética, longevidade e medicina esportiva.
              </p>
            </div>

            {/* Marca d'água de folha */}
            <Image src="/assets/backgroundLogo.svg" alt="" aria-hidden width={400} height={400} className="pointer-events-none select-none absolute -right-8 bottom-0 opacity-20 hidden md:block" />
          </AnimatedSection>
        </div>
      </section>

  {/* Nossa Equipe */}
  <TeamCarousel />

  {/* Perguntas Frequentes */}
  <FAQ />

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
      <Footer />
    </div>
  );
}
