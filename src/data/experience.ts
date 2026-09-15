export type Credential = {
  title: string;
  detail?: string;
};

export const credentials: Credential[] = [
  { title: "Graduação em Psicologia" },
  {
    title: "Pós-Graduação em Psicanálise",
    detail: "Universidade Positivo",
  },
  { title: "Formação Contínua em Psicanálise" },
  {
    title:
      "Formação em Psicologia Perinatal e Parentalidade",
  },
  {
    title:
      "Certificação em Educação Parental Positiva",
  },
  {
    title:
      "Certificação em Atendimento em Grupo a partir de Contos Terapêuticos",
  },
];

export type TimelineItem = {
  place: string;
  role: string;
  period: string;
  detail?: string;
};

export const timeline: TimelineItem[] = [
  {
    place: "Consultório particular",
    role: "Prática clínica",
    period: "Desde 2014",
    detail:
      "Atendimento individual e de casal em Curitiba, presencial e online.",
  },
  {
    place: "ADUS — Instituto de Reintegração do Refugiado",
    role: "Psicóloga clínica",
    period: "2016 – 2017",
    detail:
      "Trabalho com pessoas refugiadas em processo de adaptação ao Brasil.",
  },
  {
    place: "Escola Montessori — Irlanda",
    role: "Trabalho pedagógico e consultoria do sono infantil",
    period: "2011",
    detail:
      "Vivência internacional que ampliou o olhar clínico para diferenças culturais e desenvolvimento infantil.",
  },
  {
    place: "Hospital das Clínicas",
    role: "Estágio em Psicologia Ambulatorial",
    period: "2012",
  },
  {
    place: "Clínica de Dependência Química Quinta do Sol",
    role: "Estágio",
    period: "2009 – 2010",
  },
];

export const specialties: string[] = [
  "Psicanálise Contemporânea",
  "Psicologia Intercultural",
  "Psicanálise com Adultos",
  "Gravidez e Maternidade",
  "Psicologia da Mulher",
  "Saúde Mental",
];
