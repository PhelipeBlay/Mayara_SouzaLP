import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button, Eyebrow } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { approachBlocks } from "@/data/approach";
import { specialties } from "@/data/experience";
import { buildWhatsappUrl } from "@/data/contact";

export default function Approach() {
  return (
    <>
      <Helmet>
        <title>Abordagem — Mayara Souza | Psicanálise em Curitiba</title>
        <meta
          name="description"
          content="Conheça a abordagem psicanalítica de Mayara Souza — uma escuta que respeita o tempo, os afetos e a singularidade de cada pessoa."
        />
      </Helmet>

      <section className="pt-40 md:pt-48 pb-16 bg-paper">
        <Container size="wide">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-end">
            <div>
              <Eyebrow>Abordagem</Eyebrow>
              <h1 className="mt-6 font-serif text-display text-balance leading-[1.03]">
                Psicanálise —{" "}
                <span className="italic text-sage-500">tempo</span> para o que
                em você ainda pede palavra.
              </h1>
            </div>
            <p className="text-lg text-ink-soft leading-relaxed max-w-lg lg:justify-self-end">
              Uma prática que não busca resposta rápida. Escuta o que se
              repete, o que insiste, o que dói — para que algo novo possa se
              formar.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container size="wide">
          <div className="grid gap-10 md:grid-cols-2">
            {approachBlocks.map((block, i) => (
              <motion.article
                key={block.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (i % 2) * 0.1,
                }}
                className={`relative bg-cream border border-sage-100 rounded-[28px] p-10 md:p-12 shadow-card ${
                  i % 2 === 1 ? "md:translate-y-10" : ""
                }`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[11px] font-sans tracking-[0.32em] text-sage-500">
                    0{i + 1}
                  </span>
                  <span className="flex-1 rule opacity-70" />
                  <span className="w-12 h-12 rounded-full bg-sage-50 text-sage-500 grid place-items-center">
                    <Icon name={block.icon} size={22} />
                  </span>
                </div>
                <h2 className="font-serif text-3xl leading-tight text-balance mb-5">
                  {block.title}
                </h2>
                <p className="text-ink-soft leading-[1.85] text-pretty">
                  {block.body}
                </p>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Especialidades */}
      <section className="py-20 md:py-28 bg-sand-50/60">
        <Container size="wide">
          <SectionTitle
            eyebrow="Especialidades"
            title={
              <>
                Onde a minha escuta{" "}
                <span className="italic text-sage-500">se aprofunda</span>.
              </>
            }
            description="Áreas em que venho me especializando ao longo desses 15+ anos de clínica — sem perder a escuta atenta do sujeito."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-cream rounded-2xl p-6 border border-sand-100 hover:border-sage-200 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-xl text-balance">{s}</span>
                  <Icon
                    name="sparkle"
                    size={18}
                    className="text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-headline leading-tight text-balance">
              Se algo em você já{" "}
              <span className="italic text-sage-500">pediu para começar</span>,
              podemos conversar.
            </h2>
            <div className="mt-10 flex justify-center flex-wrap gap-4">
              <Button
                as="a"
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
              >
                <Icon name="whatsapp" size={18} />
                Marcar a primeira sessão
              </Button>
              <Button as="link" to="/servicos" variant="secondary" size="lg">
                Ver modalidades
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
