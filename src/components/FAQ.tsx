import React from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Como faço pra agendar uma consulta?",
    answer:
      "É fácil! Só entrar em contato com a gente pelo WhatsApp. Estamos prontos pra tirar todas as suas dúvidas por lá.",
  },
  {
    question: "Também posso ser atendido de forma remota/online?",
    answer:
      "Sim! É bem simples, no dia da sua consulta a gente manda pra você o link de acesso à consulta. É uma vídeo-chamada ao vivo, e é feito tudo pelo Google Meet. Simples, fácil e eficiente.",
  },
  {
    question: "A consulta online é a mesma coisa que presencial?",
    answer:
      "Sim e não. Ambas têm suas vantagens e desvantagens, mas importante aqui é você entender que você é atendido da mesma forma que presencialmente, mas no conforto da sua casa. Suas prescrições serão criadas pra você e enviadas eletronicamente, sem segredo.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer:
      "Os pagamentos podem ser feitos em dinheiro, via Pix, cartão de débito, cartão de crédito ou via link de pagamento.",
  },
  {
    question: "Vocês trabalham com plano de saúde?",
    answer:
      "Não. Nosso atendimento é apenas particular. Mas emitimos Nota Fiscal caso precise solicitar reembolso pelo plano de saúde.",
  },
  {
    question: "As receitas criadas valem em qualquer lugar do Brasil?",
    answer:
      "Sim! As prescrições/receitas criadas são válidas em todo território brasileiro, não se preocupe. Elas são assinadas eletronicamente e enviadas pra você. Elas possuem um QR Code que autentica a identidade do médico e valida a receita.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">PERGUNTAS FREQUENTES</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-gray-200 p-4 bg-white shadow-sm"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-left font-semibold text-gray-800 text-lg md:text-xl">{item.question}</span>
                <svg
                  className="w-5 h-5 text-gray-500 transform transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="mt-3 text-base md:text-[17px] text-gray-700 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
