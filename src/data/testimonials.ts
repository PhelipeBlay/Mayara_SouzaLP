export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  since?: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Já tem 7 anos que faço análise com a Mayara. Uma profissional de excelência — cuidadosa, acolhedora e presente em todos os momentos importantes que atravessei.",
    author: "Paciente há 7 anos",
    since: "Doctoralia",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Profissional muito atenciosa. A escuta e o cuidado que ela oferece fazem toda a diferença no processo. Recomendo.",
    author: "Paciente",
    since: "Doctoralia",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Ambiente agradável e acolhedor. Me senti confortável em todo momento — mesmo em temas difíceis de falar.",
    author: "Paciente",
    since: "Doctoralia",
    rating: 5,
  },
];

export const testimonialsSummary = {
  rating: 5.0,
  count: 27,
  source: "Doctoralia",
};
