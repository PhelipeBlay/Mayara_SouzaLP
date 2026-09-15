import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button, Eyebrow } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { bioParagraphs, bioHighlight } from "@/data/bio";
import { credentials, timeline, specialties } from "@/data/experience";
import { buildWhatsappUrl, contact } from "@/data/contact";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Sobre — Mayara Souza | Psicóloga · Psicanalista</title>
        <meta
          name="description"
          content="Psicóloga e psicanalista em Curitiba desde 2008. Formação em Psicanálise pela Universidade Positivo, com trajetória internacional e especialização em psicologia perinatal."
        />
      </Helmet>

      <section className="pt-40 md:pt-48 pb-20 bg-paper">
        <Container size="wide">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">
            <div>
              <Eyebrow>Sobre</Eyebrow>
              <h1 className="mt-6 font-serif text-display text-balance leading-[1.03]">
                Uma escuta{" "}
                <span className="italic text-sage-500">demorada</span>, feita
                de tempo, presença e travessia.
              </h1>
              <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-xl">
                Sou Mayara. Trabalho com psicanálise desde 2008 e recebo
                pessoas — em Curitiba e online — que buscam se olhar com mais
                cuidado, compreensão e coragem.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  as="a"
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" size={16} />
                  Marcar uma conversa
                </Button>
                <Button as="link" to="/abordagem" variant="secondary">
                  Como trabalho
                  <Icon name="arrow-right" size={14} />
                </Button>
              </div>
            </div>

            {/* Placeholder retrato */}
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto w-full">
              <div className="absolute -inset-6 rounded-[36px] bg-sand-100 rotate-2" />
              <div
                className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-br from-sage-400 via-sage-500 to-sage-700 shadow-soft"
                role="img"
                aria-label="Retrato profissional de Mayara Souza (imagem placeholder — a foto real será inserida aqui)"
              >
                {/* SUBSTITUIR: foto profissional da Mayara */}
                <div className="absolute inset-0 grain" aria-hidden="true" />
                <div className="absolute bottom-8 left-8 right-8 text-cream">
                  <p className="font-serif italic text-2xl leading-tight text-balance">
                    "{bioHighlight}"
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-cream/70">
                    {contact.crp}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BIO com drop-cap */}
      <section className="py-20 md:py-28">
        <Container size="narrow">
          <div className="prose-editorial max-w-none">
            {bioParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
              >
                {p}
              </motion.p>
            ))}
            <div className="mt-6 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-sage-400" />
              <p className="text-sm uppercase tracking-[0.3em] text-sage-500">
                {contact.crp}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FORMAÇÃO */}
      <section className="py-20 md:py-28 bg-sand-50/60">
        <Container size="wide">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24">
            <div className="lg:sticky lg:top-32 self-start">
              <SectionTitle
                eyebrow="Formação"
                title={
                  <>
                    Estudo{" "}
                    <span className="italic text-sage-500">contínuo</span> — o
                    ofício exige.
                  </>
                }
                description="A psicanálise é um trabalho que se faz e se refaz. Aqui, algumas das formações que sustentam a minha prática hoje."
              />
            </div>
            <ul className="space-y-4">
              {credentials.map((c, i) => (
                <motion.li
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-5 bg-cream border border-sand-100 rounded-2xl p-6"
                >
                  <span className="mt-1 w-9 h-9 rounded-full bg-sage-50 text-sage-500 grid place-items-center shrink-0">
                    <Icon name="check" size={16} />
                  </span>
                  <div>
                    <p className="font-serif text-xl leading-snug">{c.title}</p>
                    {c.detail && (
                      <p className="text-sm text-ink-soft mt-1">{c.detail}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* TIMELINE */}
      <section className="py-20 md:py-28">
        <Container size="wide">
          <SectionTitle
            eyebrow="Trajetória"
            title={
              <>
                Uma prática construída ao longo do{" "}
                <span className="italic text-sage-500">tempo</span>.
              </>
            }
          />
          <ol className="relative mt-16 border-l border-sage-100 ml-3 md:ml-6">
            {timeline.map((item, i) => (
              <motion.li
                key={`${item.place}-${i}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-8 md:pl-12 pb-12 last:pb-0"
              >
                <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-gold-500 border-4 border-cream shadow-glow" />
                <p className="text-[11px] uppercase tracking-[0.3em] text-sage-500">
                  {item.period}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-balance">
                  {item.place}
                </h3>
                <p className="text-ink-soft mt-1">{item.role}</p>
                {item.detail && (
                  <p className="text-sm text-ink-soft/85 mt-3 max-w-2xl leading-relaxed">
                    {item.detail}
                  </p>
                )}
              </motion.li>
            ))}
          </ol>

          <div className="mt-16 flex flex-wrap gap-3">
            {specialties.map((s) => (
              <span
                key={s}
                className="text-sm text-sage-600 px-4 py-2 rounded-full bg-sage-50 border border-sage-100"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
