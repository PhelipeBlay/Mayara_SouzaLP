export const contact = {
  name: "Mayara Souza",
  role: "Psicóloga · Psicanalista",
  crp: "CRP-08/19827",
  since: 2008,
  whatsappNumber: "5541996796578",
  whatsappDisplay: "(41) 99679-6578",
  whatsappMessage:
    "Olá, gostaria de agendar uma consulta com a Mayara.",
  email: "contato@psicologamayarasouza.com",
  site: "psicologamayarasouza.com",
  address: {
    street: "Rua Padre Anchieta, 1923",
    district: "Cidade Industrial de Curitiba",
    city: "Curitiba",
    state: "PR",
    zip: "80730-000",
    country: "Brasil",
    full: "Rua Padre Anchieta, 1923 — Cidade Industrial de Curitiba, Curitiba/PR — CEP 80730-000",
  },
  hours: "Segunda a Sexta, 8h às 20h",
  online: "Atendimento online disponível para todo o Brasil",
  doctoraliaUrl:
    "https://www.doctoralia.com.br/mayara-souza/psicologo-psicanalista/curitiba",
  instagramUrl: "https://instagram.com/psi.mayarasouza",
  linkedinUrl: "https://linkedin.com/in/psi-mayara-souza",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Rua%20Padre%20Anchieta%2C%201923%2C%20Curitiba%2C%20PR%2C%2080730-000&output=embed",
  emergencyNote:
    "Este site não substitui atendimento profissional. Em caso de emergência, ligue 188 (CVV) ou vá ao pronto-socorro mais próximo.",
};

export const buildWhatsappUrl = (
  message: string = contact.whatsappMessage
): string =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
