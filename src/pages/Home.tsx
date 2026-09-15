import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button, Eyebrow } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Icon } from "@/components/Icon";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Marquee } from "@/components/Marquee";
import { RotatingBadge } from "@/components/RotatingBadge";
import { buildWhatsappUrl, contact } from "@/data/contact";
import { services, treatedIssues } from "@/data/services";
import { testimonials, testimonialsSummary } from "@/data/testimonials";
import { faq } from "@/data/faq";
import { approachBlocks } from "@/data/approach";
import { specialties } from "@/data/experience";
import { bioHighlight, bioParagraphs } from "@/data/bio";

export default function Home() {
  const featured = services.slice(0, 6);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroContentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [1, 0.9, 0.3]
  );

  return (
    <>
      <Helmet>
        <title>Mayara Souza | Psicóloga e Psicanalista em Curitiba — CRP-08/19827</title>
        <meta
          name="description"
          content="Psicóloga e psicanalista em Curitiba desde 2008. Atendimento presencial e online. Psicanálise, terapia de casal, psicologia perinatal. Agende sua consulta."
        />
      </Helmet>

      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden pt-32 md:pt-40 pb-24 md:pb-32 bg-paper">
        <motion.div
          aria-hidden="true"
          className="absolute -top-20 right-[-10%] w-[560px] h-[560px] rounded-full bg-sage-100/70 blur-3xl opacity-70"
          animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-40%] left-[-10%] w-[520px] h-[520px] rounded-full bg-gold-100/60 blur-3xl opacity-60"
          animate={{ y: [0, 22, 0], x: [0, -14, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <Container size="wide" className="relative">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-14 lg:gap-20">
            <motion.div
              style={{ y: heroContentY, opacity: heroContentOpacity }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
              <Eyebrow>{contact.crp} · Curitiba</Eyebrow>
              <h1 className="mt-6 font-serif text-display text-balance leading-[1.02]">
                Um espaço de{" "}
                <span className="italic text-sage-500">escuta atenta</span> à
                sua história e à sua singularidade.
              </h1>
              <p className="mt-8 text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl text-pretty">
                Psicóloga e psicanalista em Curitiba há mais de 15 anos. Atendimento
                presencial e online para adultos, adolescentes e mães.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button
                  as="a"
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <Icon name="whatsapp" size={18} />
                  Agendar sua sessão
                </Button>
                <a
                  href="#abordagem"
                  className="inline-flex items-center gap-2 text-sage-600 font-sans text-sm link-underline"
                >
                  Conheça minha abordagem
                  <Icon name="arrow-down" size={16} />
                </a>
              </div>
              <div className="mt-14 flex flex-wrap items-center gap-6 text-xs text-ink-soft/80">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                  {contact.crp}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-400" />
                  Desde {contact.since}
                </span>
                <span className="inline-flex items-center gap-2 text-gold-600">
                  <Icon name="star" size={12} />
                  {testimonialsSummary.rating.toFixed(1)}/5 · {testimonialsSummary.source}
                </span>
              </div>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ y: portraitY, scale: portraitScale }}
              className=”relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto w-full”
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className=”absolute -inset-6 rounded-[36px] bg-sage-100/70”
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className=”relative w-full h-full rounded-[32px] overflow-hidden shadow-soft”
              >
                <img
                  src=”/images/mayara-portrait.jpg”
                  alt=”Mayara Souza, psicóloga e psicanalista em Curitiba”
                  className=”w-full h-full object-cover object-top”
                />
                <div className=”absolute inset-0 grain pointer-events-none” aria-hidden=”true” />
                <RotatingBadge
                  text=” · 15+ anos de escuta · desde 2008”
                  size={110}
                  className=”absolute top-4 right-4”
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3, rotate: -1 }}
                className="absolute -bottom-8 -left-6 bg-cream rounded-2xl shadow-card px-5 py-4 flex items-center gap-3 border border-sage-100"
              >
                <div className="flex text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" size={12} />
                  ))}
                </div>
                <div className="text-xs">
                  <p className="font-serif text-base">5.0 no Doctoralia</p>
                  <p className="text-ink-soft">27 avaliações</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SOBRE — teaser */}
      <section id="sobre" className="relative py-24 md:py-32">
        <Container size="wide">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32"
            >
              <Eyebrow>Sobre mim</Eyebrow>
              <h2 className="mt-6 font-serif text-headline text-balance leading-[1.08]">
                Uma clínica construída em{" "}
                <span className="italic text-sage-500">tempo</span>, escuta e travessias.
              </h2>
              <div className="mt-10 flex items-center gap-6 text-ink-soft">
                <div className="flex flex-col">
                  <span className="font-serif text-4xl text-sage-500">
                    <AnimatedNumber value={15} suffix="+" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.28em] mt-1">Anos de prática</span>
                </div>
                <div className="w-px h-14 bg-sage-100" />
                <div className="flex flex-col">
                  <span className="font-serif text-4xl text-sage-500">
                    <AnimatedNumber value={2} />
                  </span>
                  <span className="text-xs uppercase tracking-[0.28em] mt-1">Continentes</span>
                </div>
                <div className="w-px h-14 bg-sage-100" />
                <div className="flex flex-col">
                  <span className="font-serif text-4xl text-sage-500">
                    <AnimatedNumber value={6} />
                  </span>
                  <span className="text-xs uppercase tracking-[0.28em] mt-1">Formações</span>
                </div>
              </div>
              <Button
                as="link"
                to="/sobre"
                variant="secondary"
                size="md"
                className="mt-10"
              >
                Conhecer minha trajetória
                <Icon name="arrow-right" size={16} />
              </Button>

              {/* Office photos */}
              <div className="mt-10 relative h-44 select-none">
                <motion.div
                  initial={{ opacity: 0, rotate: 2, y: 12 }}
                  whileInView={{ opacity: 1, rotate: 2, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="absolute right-0 bottom-0 w-[68%] h-full rounded-2xl overflow-hidden shadow-card"
                >
                  <img
                    src="/images/consultorio-2.jpg"
                    alt="Consultório — vista com divã e estante"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, rotate: -3, y: 12 }}
                  whileInView={{ opacity: 1, rotate: -3, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-2 w-[58%] h-[88%] rounded-2xl overflow-hidden shadow-card border-4 border-cream z-10"
                >
                  <img
                    src="/images/consultorio-1.jpg"
                    alt="Consultório — sala de atendimento"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, staggerChildren: 0.1 }}
              className="prose-editorial max-w-none"
            >
              {bioParagraphs.slice(0, 3).map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1 * i,
                  }}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ABORDAGEM */}
      <section id="abordagem" className="relative py-24 md:py-32 bg-sand-50/60">
        <Container size="wide">
          <SectionTitle
            eyebrow="Abordagem"
            title={
              <>
                Psicanálise —{" "}
                <span className="italic text-sage-500">um convite a se conhecer</span>.
              </>
            }
            description="Uma abordagem clínica que não busca respostas rápidas, mas o cuidado paciente com o que em você ainda pede escuta."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approachBlocks.map((block, i) => (
              <motion.article
                key={block.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                className="relative bg-cream border border-sand-100 rounded-2xl p-7 h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-50 text-sage-500 grid place-items-center mb-6">
                  <Icon name={block.icon} size={24} />
                </div>
                <h3 className="font-serif text-xl md:text-[22px] leading-snug mb-3 text-balance">
                  {block.title}
                </h3>
                <p className="text-ink-soft text-[15px] leading-relaxed text-pretty">
                  {block.body}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3 justify-center">
            {specialties.map((tag) => (
              <span
                key={tag}
                className="text-sm text-sage-600 px-4 py-2 rounded-full bg-cream border border-sage-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 md:py-32">
        <Container size="wide">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <SectionTitle
              eyebrow="Serviços"
              title={
                <>
                  Modalidades de{" "}
                  <span className="italic text-sage-500">acompanhamento</span>.
                </>
              }
              description="Cada percurso é único. Aqui, algumas das frentes em que trabalho — presencial em Curitiba ou online, onde você estiver."
            />
            <Button
              as="link"
              to="/servicos"
              variant="link"
              className="shrink-0"
            >
              Ver todos os serviços
              <Icon name="arrow-right" size={14} />
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>

          <div className="mt-20 border-t border-sage-100 pt-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft/80 mb-6">
              Questões comumente trabalhadas
            </p>
          </div>
        </Container>
        <Marquee
          items={treatedIssues}
          speed={80}
          className="font-serif text-2xl md:text-3xl text-ink/70 -mt-4"
          itemClassName="pr-2"
        />
      </section>

      {/* DEPOIMENTOS */}
      <section className="relative py-24 md:py-32 bg-sage-50/50">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionTitle
              eyebrow="Depoimentos"
              title={
                <>
                  O que pacientes{" "}
                  <span className="italic text-sage-500">têm a dizer</span>.
                </>
              }
            />
            <div className="flex items-center gap-3 text-gold-600">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>
              <p className="text-sm text-ink-soft">
                <span className="text-ink font-medium">
                  {testimonialsSummary.rating.toFixed(1)}
                </span>{" "}
                · {testimonialsSummary.count} avaliações no {testimonialsSummary.source}
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
          <div className="mt-10 flex justify-between items-center flex-wrap gap-4 text-sm text-ink-soft">
            <p>Depoimentos publicados com autorização via Doctoralia.</p>
            <a
              href={contact.doctoraliaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-600 link-underline inline-flex items-center gap-2"
            >
              Ver todas as avaliações
              <Icon name="arrow-right" size={14} />
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <Container size="wide">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <SectionTitle
                eyebrow="Perguntas"
                title={
                  <>
                    Dúvidas que{" "}
                    <span className="italic text-sage-500">frequentemente</span> aparecem.
                  </>
                }
                description="Se algo mais precisar de resposta, é só me chamar — o WhatsApp está a um clique de distância."
              />
              <Button
                as="a"
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-8"
              >
                <Icon name="whatsapp" size={16} />
                Tenho outra dúvida
              </Button>
            </div>
            <FaqAccordion items={faq} />
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 md:py-28">
        <Container size="wide">
          <div className="relative overflow-hidden rounded-[32px] bg-sage-600 text-cream px-8 md:px-16 py-16 md:py-20 shadow-soft">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 w-96 h-96 rounded-full bg-sage-300/20 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
              <div>
                <span className="inline-flex items-center text-[11px] uppercase tracking-[0.32em] text-gold-200">
                  <span className="accent-line bg-gold-300/60" />
                  Vamos conversar
                </span>
                <h2 className="mt-5 font-serif text-headline text-balance leading-tight">
                  Que tal dar esse{" "}
                  <span className="italic text-gold-200">primeiro passo</span>?
                </h2>
                <p className="mt-6 text-cream/85 max-w-lg leading-relaxed text-pretty">
                  A primeira conversa é um espaço de acolhimento — sem compromisso e sem
                  julgamento. Estou aqui para te ouvir.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <Button
                  as="a"
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                >
                  <Icon name="whatsapp" size={18} />
                  Agendar pelo WhatsApp
                </Button>
                <Link
                  to="/contato"
                  className="text-cream/85 text-sm link-underline inline-flex items-center gap-2"
                >
                  Ou entre em contato pelo formulário
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
