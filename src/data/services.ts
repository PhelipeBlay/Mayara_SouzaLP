import type { IconName } from "@/components/Icon";

export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  icon: IconName;
  format: "presencial" | "online" | "ambos";
};

export const services: Service[] = [
  {
    id: "psicoterapia-adultos",
    title: "Psicoterapia Psicanalítica",
    description:
      "Atendimento individual voltado para autoconhecimento, elaboração de conflitos e transformação pessoal.",
    price: 250,
    duration: "50 minutos",
    icon: "lotus",
    format: "ambos",
  },
  {
    id: "psicoterapia-online",
    title: "Psicoterapia Online",
    description:
      "Sessões por videochamada com a mesma qualidade e profundidade do atendimento presencial, onde você estiver.",
    price: 250,
    duration: "50 minutos",
    icon: "screen",
    format: "online",
  },
  {
    id: "perinatal",
    title: "Psicologia Perinatal e Parentalidade",
    description:
      "Acompanhamento para gestantes, puérperas e famílias nos desafios da maternidade e paternidade.",
    price: 250,
    duration: "50 minutos",
    icon: "leaf",
    format: "ambos",
  },
  {
    id: "educacao-parental",
    title: "Orientação e Educação Parental",
    description:
      "Suporte para pais que buscam construir uma relação mais saudável e positiva com seus filhos.",
    price: 250,
    duration: "50 minutos",
    icon: "heart",
    format: "ambos",
  },
  {
    id: "terapia-casal",
    title: "Terapia de Casal",
    description:
      "Espaço para casais trabalharem comunicação, conflitos e fortalecimento do vínculo.",
    price: 350,
    duration: "60 minutos",
    icon: "rings",
    format: "ambos",
  },
  {
    id: "casal-homoafetivo",
    title: "Terapia de Casal Homoafetivo",
    description:
      "Atendimento inclusivo e acolhedor para casais homoafetivos, com escuta atenta às suas singularidades.",
    price: 350,
    duration: "60 minutos",
    icon: "prism",
    format: "ambos",
  },
  {
    id: "imigrantes",
    title: "Psicoterapia com Imigrantes",
    description:
      "Atendimento sensível às questões culturais, de identidade e adaptação no processo migratório.",
    price: 250,
    duration: "50 minutos",
    icon: "compass",
    format: "ambos",
  },
  {
    id: "consultoria-gestacao",
    title: "Consultoria em Gestação, Parto e Puerpério",
    description:
      "Apoio especializado para os desafios emocionais da gestação e do pós-parto.",
    price: 250,
    duration: "50 minutos",
    icon: "moon",
    format: "ambos",
  },
];

export const treatedIssues: string[] = [
  "Ansiedade",
  "Depressão",
  "Estresse",
  "TDAH",
  "Síndrome do Pânico",
  "Dificuldades de Relacionamento",
  "Alterações do Humor",
  "Insegurança",
  "Bullying",
  "Procrastinação",
  "Insônia",
  "Fobias",
  "Distúrbios Alimentares",
  "Processos de Luto",
  "Depressão Pós-Parto",
  "Vaginismo",
  "Abandono Afetivo",
  "Bipolaridade",
];
