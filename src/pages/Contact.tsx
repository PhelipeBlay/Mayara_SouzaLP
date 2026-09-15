import { useState, type ChangeEvent, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button, Eyebrow } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { buildWhatsappUrl, contact } from "@/data/contact";
import { formatPhoneBR } from "@/lib/formatters";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: "Agendar consulta" | "Dúvidas" | "Outro";
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "Agendar consulta",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = field === "phone" ? formatPhoneBR(e.target.value) : e.target.value;
      setValues((v) => ({ ...v, [field]: value }));
    };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulado — sem backend real
    setTimeout(() => {
      setSent(true);
      setSubmitting(false);
      setValues(initial);
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Contato — Mayara Souza | Psicóloga em Curitiba</title>
        <meta
          name="description"
          content="Fale com Mayara Souza pelo WhatsApp, formulário ou visite o consultório em Curitiba/PR. Atendimento presencial e online."
        />
      </Helmet>

      <section className="pt-40 md:pt-48 pb-12 bg-paper">
        <Container size="wide">
          <div className="max-w-3xl">
            <Eyebrow>Contato</Eyebrow>
            <h1 className="mt-6 font-serif text-display text-balance leading-[1.03]">
              Estou aqui{" "}
              <span className="italic text-sage-500">para te ouvir</span>.
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              O WhatsApp é a forma mais direta de conversar comigo. Se preferir,
              escreva pelo formulário — retorno em até 24h úteis.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container size="wide">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-sage-600 text-cream rounded-2xl p-8 flex items-start gap-5 shadow-soft hover:-translate-y-1 transition-transform"
              >
                <span className="w-14 h-14 rounded-full bg-gold-500/20 grid place-items-center shrink-0">
                  <Icon name="whatsapp" size={26} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-gold-200">
                    WhatsApp — resposta mais rápida
                  </p>
                  <p className="font-serif text-2xl mt-1">
                    {contact.whatsappDisplay}
                  </p>
                  <p className="mt-2 text-cream/80 text-sm inline-flex items-center gap-2">
                    Conversar agora
                    <Icon
                      name="arrow-right"
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </p>
                </div>
              </a>

              <div className="bg-cream border border-sage-100 rounded-2xl p-7 flex items-start gap-4">
                <span className="w-11 h-11 rounded-full bg-sage-50 text-sage-500 grid place-items-center shrink-0">
                  <Icon name="map-pin" size={20} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-sage-500">
                    Consultório
                  </p>
                  <p className="mt-1 text-ink leading-relaxed">
                    {contact.address.street}<br />
                    {contact.address.district}<br />
                    {contact.address.city}/{contact.address.state} — {contact.address.zip}
                  </p>
                </div>
              </div>

              <div className="bg-cream border border-sage-100 rounded-2xl p-7 flex items-start gap-4">
                <span className="w-11 h-11 rounded-full bg-sage-50 text-sage-500 grid place-items-center shrink-0">
                  <Icon name="clock" size={20} />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-sage-500">
                    Horários
                  </p>
                  {/* REVISAR: confirmar horário real de atendimento */}
                  <p className="mt-1 text-ink">{contact.hours}</p>
                  <p className="text-ink-soft text-sm mt-1">{contact.online}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-cream border border-sage-100 rounded-[28px] p-8 md:p-10 shadow-card"
            >
              <p className="text-[11px] uppercase tracking-[0.32em] text-sage-500 mb-6">
                Enviar mensagem
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Nome" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    value={values.name}
                    onChange={update("name")}
                    className={inputCls}
                    placeholder="Como você se chama?"
                  />
                </FormField>
                <FormField label="E-mail" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={update("email")}
                    className={inputCls}
                    placeholder="seu@email.com"
                  />
                </FormField>
                <FormField label="Telefone" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    inputMode="tel"
                    value={values.phone}
                    onChange={update("phone")}
                    className={inputCls}
                    placeholder="(41) 99999-9999"
                  />
                </FormField>
                <FormField label="Assunto" htmlFor="subject">
                  <select
                    id="subject"
                    name="subject"
                    value={values.subject}
                    onChange={update("subject")}
                    className={inputCls}
                  >
                    <option>Agendar consulta</option>
                    <option>Dúvidas</option>
                    <option>Outro</option>
                  </select>
                </FormField>
              </div>
              <div className="mt-5">
                <FormField label="Mensagem" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={values.message}
                    onChange={update("message")}
                    className={inputCls + " resize-none"}
                    placeholder="Conte, em poucas palavras, o que te trouxe até aqui."
                  />
                </FormField>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft/80 max-w-sm">
                  Ao enviar, você concorda em ser contatada por Mayara Souza para
                  responder à sua mensagem.
                </p>
                <Button as="button" type="submit" size="md" disabled={submitting}>
                  {submitting ? "Enviando…" : "Enviar mensagem"}
                  {!submitting && <Icon name="arrow-right" size={16} />}
                </Button>
              </div>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    className="mt-6 flex items-start gap-3 rounded-xl border border-sage-200 bg-sage-50/70 p-4"
                  >
                    <span className="w-8 h-8 rounded-full bg-sage-500 text-cream grid place-items-center shrink-0">
                      <Icon name="check" size={16} />
                    </span>
                    <div className="text-sm text-ink">
                      <p className="font-medium">Mensagem enviada!</p>
                      <p className="text-ink-soft">
                        Retornarei em breve. Se preferir, pode falar comigo
                        agora mesmo pelo WhatsApp.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </Container>
      </section>

      {/* MAPA */}
      <section className="pb-24">
        <Container size="wide">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] items-stretch">
            <div className="bg-sand-50 border border-sand-100 rounded-[28px] p-10 flex flex-col justify-between">
              <div>
                <SectionTitle
                  eyebrow="Como chegar"
                  title={
                    <>
                      Encontre o consultório em{" "}
                      <span className="italic text-sage-500">Curitiba</span>.
                    </>
                  }
                  as="h2"
                />
                <p className="mt-6 text-ink-soft leading-relaxed">
                  {contact.address.full}
                </p>
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  contact.address.full
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sage-600 font-sans font-medium link-underline"
              >
                <Icon name="map-pin" size={16} />
                Traçar rota no Google Maps
              </a>
            </div>
            <div className="rounded-[28px] overflow-hidden border border-sage-100 min-h-[340px]">
              <iframe
                title="Localização do consultório de Mayara Souza"
                src={contact.mapsEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[340px] block"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-xl border border-sage-100 bg-cream/60 focus:bg-cream px-4 py-3 text-ink placeholder:text-ink-soft/60 focus:border-sage-400 focus:outline-none transition-colors";

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-[11px] uppercase tracking-[0.28em] text-sage-500"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
