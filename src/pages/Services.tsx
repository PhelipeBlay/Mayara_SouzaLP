import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button, Eyebrow } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { Icon } from "@/components/Icon";
import { services, treatedIssues } from "@/data/services";
import { buildWhatsappUrl } from "@/data/contact";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Serviços — Mayara Souza | Psicanálise, Casal, Perinatal</title>
        <meta
          name="description"
          content="Modalidades de atendimento: psicoterapia psicanalítica, terapia de casal, psicologia perinatal, orientação parental e atendimento a imigrantes."
        />
      </Helmet>

      <section className="pt-40 md:pt-48 pb-16 bg-paper">
        <Container size="wide">
          <div className="max-w-3xl">
            <Eyebrow>Serviços</Eyebrow>
            <h1 className="mt-6 font-serif text-display text-balance leading-[1.03]">
              Modalidades de{" "}
              <span className="italic text-sage-500">acompanhamento</span>.
            </h1>
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              Cada percurso tem seu ritmo e sua forma. Estas são as frentes em
              que trabalho hoje — presencial em Curitiba ou online, onde você
              estiver.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container size="wide">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Questões trabalhadas — editorial */}
      <section className="py-20 md:py-28 bg-sand-50/60">
        <Container size="wide">
          <SectionTitle
            eyebrow="Questões"
            title={
              <>
                Alguns dos temas{" "}
                <span className="italic text-sage-500">trazidos</span> ao
                consultório.
              </>
            }
            description="Não é preciso um motivo grande para começar. Muitas vezes, o primeiro passo se dá com aquilo que você julga pequeno demais para dizer."
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {treatedIssues.map((issue, i) => (
              <motion.div
                key={issue}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  delay: (i % 6) * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-3 bg-cream rounded-xl border border-sand-100 px-5 py-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                <span className="text-ink font-serif text-lg">{issue}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pagamento e reembolso */}
      <section className="py-20 md:py-24">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Pagamento",
                body: "PIX, transferência bancária e dinheiro. O pagamento é sessão a sessão.",
                icon: "check" as const,
              },
              {
                title: "Convênios",
                body: "Não atendo diretamente por convênio, mas emito recibo para reembolso ao seu plano de saúde.",
                icon: "sparkle" as const,
              },
              {
                title: "Cancelamentos",
                body: "Sessões desmarcadas com pelo menos 24h de antecedência não são cobradas.",
                icon: "clock" as const,
              },
            ].map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-sage-200 pt-8"
              >
                <span className="w-10 h-10 rounded-full bg-sage-50 text-sage-500 grid place-items-center mb-6">
                  <Icon name={info.icon} size={18} />
                </span>
                <h3 className="font-serif text-2xl mb-3">{info.title}</h3>
                <p className="text-ink-soft leading-relaxed">{info.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container size="wide">
          <div className="rounded-[28px] bg-sage-600 text-cream px-8 md:px-14 py-14 md:py-16 flex flex-col md:flex-row md:items-center gap-8 md:justify-between shadow-soft">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-balance leading-tight">
                Não sabe qual modalidade escolher?
              </h2>
              <p className="mt-3 text-cream/80 max-w-xl">
                Conversamos primeiro — e juntas encontramos o formato que faz
                mais sentido para o seu momento.
              </p>
            </div>
            <Button
              as="a"
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <Icon name="whatsapp" size={18} />
              Falar comigo
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
