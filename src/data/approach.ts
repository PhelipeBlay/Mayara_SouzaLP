import type { IconName } from "@/components/Icon";

export type ApproachBlock = {
  id: string;
  title: string;
  body: string;
  icon: IconName;
};

export const approachBlocks: ApproachBlock[] = [
  {
    id: "o-que-e",
    title: "O que é Psicanálise?",
    body: "A psicanálise é um método terapêutico que busca compreender os processos inconscientes que influenciam nossos pensamentos, emoções e comportamentos. Mais do que tratar sintomas, ela convida você a se conhecer profundamente.",
    icon: "spiral",
  },
  {
    id: "como-funciona",
    title: "Como funciona o processo?",
    body: "As sessões acontecem regularmente (geralmente uma ou duas vezes por semana) e são um espaço de fala livre, onde você pode trazer o que quiser — sonhos, angústias, memórias, dúvidas. O trabalho se constrói no vínculo e na confiança entre analista e analisando.",
    icon: "chat",
  },
  {
    id: "para-quem",
    title: "Para quem é indicado?",
    body: "Para qualquer pessoa que deseje compreender melhor a si mesma, seus padrões de comportamento e suas relações. Não é preciso estar em crise para buscar terapia — o autoconhecimento é um caminho contínuo.",
    icon: "hands",
  },
  {
    id: "primeira-sessao",
    title: "O que esperar da primeira sessão?",
    body: "A primeira sessão é um momento de acolhimento. Vamos conversar sobre o que te trouxe até aqui, suas expectativas e como funciona o processo. É um espaço seguro, sem julgamento.",
    icon: "door",
  },
];
