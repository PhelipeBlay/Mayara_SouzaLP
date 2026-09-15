export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question:
      "Qual a diferença entre psicólogo, psiquiatra e psicanalista?",
    answer:
      "O psicólogo trabalha com escuta e técnicas terapêuticas. O psiquiatra é médico e pode prescrever medicação. O psicanalista é um profissional (geralmente psicólogo ou médico) com formação específica em psicanálise — uma abordagem que trabalha com o inconsciente e a singularidade de cada pessoa.",
  },
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "É um momento de acolhimento e conversa. Vamos entender o que te trouxe, suas expectativas e como posso te ajudar. Não existe resposta certa ou errada — é um espaço seguro para você.",
  },
  {
    question: "Quanto tempo dura uma sessão?",
    answer: "Cada sessão tem duração de 50 minutos.",
  },
  {
    question: "Com que frequência preciso ir?",
    answer:
      "O ideal é uma a duas vezes por semana, mas isso é ajustado conforme sua necessidade e disponibilidade.",
  },
  {
    question:
      "O atendimento online é tão eficaz quanto o presencial?",
    answer:
      "Sim. Pesquisas mostram que a psicoterapia online tem a mesma eficácia do atendimento presencial. O mais importante é a qualidade do vínculo terapêutico.",
  },
  {
    question: "Atende por convênio ou plano de saúde?",
    answer:
      "Não atendo diretamente por convênio, mas emito recibo para reembolso junto ao seu plano de saúde.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "PIX, transferência bancária e dinheiro.",
  },
  {
    question: "Atende crianças?",
    answer:
      "No consultório presencial atendo crianças, adolescentes e adultos. Online, atendo adolescentes e adultos.",
  },
];
