import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/Icon";
import { TestimonialCard } from "@/components/TestimonialCard";
import { handleWhatsAppClick } from "@/lib/whatsapp";
import { contact } from "@/data/contact";
import { testimonials, testimonialsSummary } from "@/data/testimonials";
import { faq } from "@/data/faq";
import { bioParagraphs } from "@/data/bio";
import { services } from "@/data/services";

// ── Inline SVG icons for "Manifestações" section ────────────────────────────
function IconAnsiedade() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="6" />
      <path d="M16 4v4M16 24v4M4 16h4M24 16h4" />
    </svg>
  );
}
function IconExplosao() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3l2.5 8H27l-7 5 2.5 8L16 19l-6.5 5 2.5-8-7-5h8.5z" />
    </svg>
  );
}
function IconCoracao() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 27S4 20 4 12a6 6 0 0 1 12-1 6 6 0 0 1 12 1c0 8-12 15-12 15z" />
      <path d="M12 16l2 2 4-4" />
    </svg>
  );
}
function IconEspelho() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="16" cy="13" rx="8" ry="10" />
      <path d="M12 25h8M16 23v4" />
      <path d="M11 10c1-2 3-3 5-3" />
    </svg>
  );
}
function IconNuvem() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 22H10a6 6 0 1 1 .8-11.9A8 8 0 1 1 22 22z" />
      <path d="M13 28v-4M16 28v-6M19 28v-4" />
    </svg>
  );
}
function IconPessoas() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="4" />
      <path d="M4 26c0-5 3.6-8 8-8" />
      <circle cx="22" cy="10" r="4" />
      <path d="M28 26c0-5-3.6-8-8-8" />
      <path d="M16 28v-6" />
    </svg>
  );
}

const manifestacoes = [
  {
    icon: <IconAnsiedade />,
    title: "Ansiedade",
    desc: "Preocupações excessivas, medo do futuro, tensão muscular — uma sensação constante de que algo vai dar errado.",
  },
  {
    icon: <IconExplosao />,
    title: "Explosões emocionais",
    desc: "Reações intensas e desproporcionais no dia a dia, muitas vezes vindas da repressão de emoções não elaboradas.",
  },
  {
    icon: <IconCoracao />,
    title: "Relações que machucam",
    desc: "Dificuldade de manter vínculos saudáveis, onde faltam carinho, escuta e reciprocidade — com parceiros, amigos ou família.",
  },
  {
    icon: <IconEspelho />,
    title: "Insegurança",
    desc: "Sentimentos de inadequação, autocrítica constante e uma busca incessante por aprovação externa.",
  },
  {
    icon: <IconNuvem />,
    title: "Depressão",
    desc: "Tristeza profunda, desânimo, falta de energia e interesse nas atividades que antes traziam prazer.",
  },
  {
    icon: <IconPessoas />,
    title: "Dificuldades de socialização",
    desc: "Medo do julgamento social, isolamento e dificuldade em estabelecer e manter relacionamentos.",
  },
];

const transformacoes = [
  {
    title: "Domínio das emoções",
    desc: "Deixe de ser refém das suas emoções e agir por impulso. Viva com mais leveza e confiança para tomar as rédeas da sua vida.",
  },
  {
    title: "Quebra de padrões repetitivos",
    desc: "Chega de viver no piloto automático. É possível viver novas possibilidades e fazer escolhas diferentes, rompendo ciclos cansativos.",
  },
  {
    title: "Comunicação assertiva",
    desc: "Melhore seus relacionamentos, expresse-se com clareza e confiança, seja ouvido e compreendido.",
  },
  {
    title: "Escolhas conscientes",
    desc: "Tome decisões que te aproximem dos seus sonhos, com mais propósito e menos culpa. Descubra seu poder pessoal na prática.",
  },
];

const credentials = [
  "Pós-Graduação em Psicanálise",
  "Psicologia Perinatal e Parentalidade",
  "Educação Parental Positiva",
  "Experiência no ADUS — Instituto de Reintegração do Refugiado",
  "Vivência Internacional — Irlanda (Escola Montessori)",
];

// ── Inline FAQ Accordion ──────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream/15">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="text-cream font-sans text-base md:text-lg leading-snug group-hover:text-blush-200 transition-colors">
          {q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-cream/30 grid place-items-center transition-all duration-300 ${open ? "bg-blush-500 border-blush-500 rotate-45" : ""}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 2v8M2 6h8" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-cream/65 leading-relaxed text-[15px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Reusable WhatsApp button ──────────────────────────────────────────────────
function WaButton({
  label,
  dark,
  onWa,
}: {
  label: string;
  dark?: boolean;
  onWa: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onWa}
      className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans font-medium text-base transition-all duration-300 min-h-[56px] ${
        dark
          ? "border-2 border-cream/30 text-cream hover:bg-blush-500 hover:border-blush-500"
          : "border-2 border-blush-500 text-blush-600 hover:bg-blush-500 hover:text-white"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const navigate = useNavigate();
  const onWa = () => handleWhatsAppClick(navigate);
  const featuredServices = services.slice(0, 3);
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Helmet>
        <title>Mayara Souza | Psicóloga e Psicanalista em Curitiba — CRP-08/19827</title>
        <meta
          name="description"
          content="Psicóloga e psicanalista em Curitiba desde 2008. Atendimento presencial e online. Psicanálise, terapia de casal, psicologia perinatal. Agende sua consulta."
        />
      </Helmet>

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO — acima da dobra em qualquer dispositivo
      ════════════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-cream"
      >
        {/* Mobile: foto como background com overlay */}
        <div className="absolute inset-0 lg:hidden" aria-hidden="true">
          <img
            src="/images/mayara-hero.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-petrol-600/75" />
        </div>

        <Container size="wide" className="relative">
          <div className="grid lg:grid-cols-[3fr_2fr] lg:items-center gap-0 lg:gap-16 lg:pt-36 lg:pb-28">

            {/* ── Conteúdo ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="pt-24 pb-10 lg:pt-0 lg:pb-0 max-w-2xl"
            >
              {/* Eyebrow */}
              <p className="text-[11px] uppercase tracking-[0.32em] font-sans font-medium text-blush-300 lg:text-blush-500 mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-blush-400" />
                {contact.crp} · Curitiba
              </p>

              {/* Headline */}
              <h1 className="font-serif italic text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.08] text-cream lg:text-petrol-600 text-balance">
                Por que parece tão difícil parar e se ouvir de verdade?
              </h1>

              {/* Description */}
              <p className="mt-6 text-base md:text-lg leading-relaxed text-cream/80 lg:text-ink-soft max-w-lg text-pretty">
                Nem sempre conseguimos entender sozinhos o que sentimos. A psicanálise
                oferece um espaço de escuta profunda, onde você pode se reconectar com
                sua história e ressignificar o que te causa sofrimento.
              </p>

              {/* CTA */}
              <div className="mt-8">
                <WaButton label="Vamos conversar?" dark onWa={onWa} />
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream/60 lg:text-ink-soft/70 font-sans">
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-400">★★★★★</span>
                  <span>5.0 — 27 avaliações no Doctoralia</span>
                </span>
                <span className="hidden sm:inline text-cream/30 lg:text-ink/20">·</span>
                <span>{contact.crp}</span>
                <span className="hidden sm:inline text-cream/30 lg:text-ink/20">·</span>
                <span>Desde {contact.since}</span>
              </div>
            </motion.div>

            {/* ── Foto desktop ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative"
            >
              {/* Rosé frame decoration */}
              <div
                className="absolute -top-5 -left-5 bottom-10 right-10 rounded-[2.5rem] border-2 border-blush-300/60"
                aria-hidden="true"
              />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-[0_40px_80px_-20px_rgba(26,47,59,0.35)]">
                <img
                  src="/images/mayara-hero.jpg"
                  alt="Mayara Souza, psicóloga e psicanalista em Curitiba"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-600/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-card px-5 py-4 flex items-center gap-3 border border-blush-100"
              >
                <span className="text-amber-400 text-base">★★★★★</span>
                <div className="text-xs">
                  <p className="font-serif text-base text-petrol-600">5.0 no Doctoralia</p>
                  <p className="text-ink-soft">27 avaliações verificadas</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </Container>

        {/* Wave bottom */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-16" aria-hidden="true">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full fill-current text-cream">
            <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MANIFESTAÇÕES DO INCONSCIENTE — dark
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-petrol-600 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-grain pointer-events-none" aria-hidden="true" />
        <div
          className="absolute -top-40 right-[-15%] w-[500px] h-[500px] rounded-full bg-blush-500/10 blur-3xl"
          aria-hidden="true"
        />

        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mb-14"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-blush-400 font-sans mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-blush-500" />
              Manifestações
            </p>
            <h2 className="font-serif italic text-headline text-cream text-balance leading-[1.1]">
              O inconsciente se manifesta de diversas formas, dificultando sair de ciclos como:
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {manifestacoes.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                className="group relative bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-blush-400/20 transition-all duration-300"
              >
                {/* Top glow line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blush-400/30 to-transparent rounded-full" />
                <div className="text-blush-600 mb-4 group-hover:text-blush-500 transition-colors">
                  {m.icon}
                </div>
                <h3 className="font-serif text-xl text-cream mb-2 leading-snug">{m.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA in-section */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-cream/60 text-base font-serif italic">
              Você se identificou com algum desses padrões?
            </p>
            <WaButton label="Vamos conversar?" dark onWa={onWa} />
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SOBRE — Mayara Souza
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-cream py-20 md:py-28 overflow-hidden">
        <Container size="wide">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 lg:gap-24 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] uppercase tracking-[0.32em] font-sans font-medium text-blush-500 mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-blush-400" />
                Sobre
              </p>
              <h2 className="font-serif text-headline text-petrol-600 text-balance leading-[1.1] mb-8">
                Mayara <em>Souza</em>
              </h2>

              <div className="space-y-5">
                {bioParagraphs.slice(0, 3).map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                    className="text-ink-soft leading-relaxed text-[15px] text-pretty"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* Credentials pills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {credentials.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-4 py-2 rounded-full border border-blush-200 text-blush-700 bg-blush-50 font-sans"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <WaButton label="Quero agendar uma sessão" onWa={onWa} />
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative"
            >
              {/* Rosé offset frame */}
              <div
                className="absolute -top-4 -right-4 bottom-10 left-8 rounded-[2.5rem] border-2 border-blush-300/50"
                aria-hidden="true"
              />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-[0_30px_70px_-20px_rgba(26,47,59,0.25)]">
                <img
                  src="/images/mayara-sobre.jpg"
                  alt="Mayara Souza — psicóloga e psicanalista"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SERVIÇOS E PREÇOS
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-petrol-600/5">
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-blush-500 font-sans mb-4">
              Serviços
            </p>
            <h2 className="font-serif text-headline text-petrol-600 text-balance leading-[1.1]">
              Modalidades de <em>acompanhamento</em>
            </h2>
            <p className="mt-4 text-ink-soft max-w-xl mx-auto leading-relaxed">
              Atendimento presencial em Curitiba ou online, onde você estiver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredServices.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-blush-100 shadow-card hover:shadow-blush transition-all duration-300 flex flex-col"
              >
                {/* Format badge */}
                <span className="inline-block self-start text-[10px] uppercase tracking-[0.28em] px-3 py-1 rounded-full bg-blush-50 text-blush-600 border border-blush-200 font-sans mb-5">
                  {s.format}
                </span>
                <h3 className="font-serif text-xl text-petrol-600 mb-2">{s.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed flex-1 mb-6">{s.description}</p>

                {/* Price + what's included */}
                <div className="border-t border-blush-100 pt-5 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl text-blush-600">
                      R$ {s.price}
                    </span>
                    <span className="text-ink-soft text-sm">/ sessão</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="text-xs text-ink-soft flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blush-400" />
                      {s.duration} de duração
                    </li>
                    <li className="text-xs text-ink-soft flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blush-400" />
                      Presencial ou online
                    </li>
                    <li className="text-xs text-ink-soft flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blush-400" />
                      Recibo para reembolso de convênio
                    </li>
                    <li className="text-xs text-ink-soft flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blush-400" />
                      Acompanhamento contínuo
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <WaButton label="Agendar minha sessão" onWa={onWa} />
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          TRANSFORMAÇÕES — o que a psicanálise proporciona
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(232,196,196,0.18) 0%, rgba(253,245,240,1) 60%)" }}>
        <Container size="wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-[11px] uppercase tracking-[0.32em] text-blush-500 font-sans mb-4">
              Transformações
            </p>
            <h2 className="font-serif text-headline text-petrol-600 text-balance leading-[1.1]">
              O que a psicanálise pode <em>te proporcionar</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {transformacoes.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-blush-100/60 shadow-card flex gap-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-blush-50 border border-blush-200 grid place-items-center text-blush-500 font-serif text-lg font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-petrol-600 mb-2">{t.title}</h3>
                  <p className="text-ink-soft text-[15px] leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          DEPOIMENTOS
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-cream">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-blush-500 font-sans mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-blush-400" />
                Depoimentos
              </p>
              <h2 className="font-serif text-headline text-petrol-600 text-balance leading-[1.1]">
                O que pacientes <em>têm a dizer</em>
              </h2>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-ink-soft">
                <span className="text-ink font-medium">{testimonialsSummary.rating.toFixed(1)}</span>
                {" "}· {testimonialsSummary.count} avaliações no {testimonialsSummary.source}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-soft">
            <p>Depoimentos publicados com autorização via Doctoralia.</p>
            <a
              href={contact.doctoraliaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blush-600 hover:text-blush-700 transition-colors inline-flex items-center gap-1"
            >
              Ver todas as avaliações →
            </a>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FAQ — fundo escuro com imagem overlay
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-petrol-600 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/images/mayara-contato.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-petrol-600/80" />
        </div>
        <div className="absolute inset-0 opacity-[0.04] bg-grain pointer-events-none" aria-hidden="true" />

        <Container size="wide" className="relative">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

            <div className="lg:sticky lg:top-32">
              <p className="text-[11px] uppercase tracking-[0.32em] text-blush-400 font-sans mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-blush-500" />
                Dúvidas
              </p>
              <h2 className="font-serif italic text-headline text-cream leading-[1.1] mb-6">
                Ficou alguma dúvida?
              </h2>
              <p className="text-cream/60 leading-relaxed mb-8">
                Confira as perguntas mais frequentes — e se ainda tiver dúvidas, é só me chamar pelo WhatsApp.
              </p>
              <WaButton label="Tenho outra dúvida" dark onWa={onWa} />
            </div>

            <div>
              {faq.map((item) => (
                <FaqItem key={item.question} q={item.question} a={item.answer} />
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA FINAL + CONTATO
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-petrol-600 overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blush-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="absolute inset-0 opacity-[0.03] bg-grain pointer-events-none" aria-hidden="true" />

        <Container size="wide" className="relative">

          {/* Headline */}
          <div className="text-center mb-14">
            <h2 className="font-serif italic text-headline text-cream leading-[1.08] text-balance mb-6">
              E aí, vamos descomplicar a vida?
            </h2>
            <WaButton label="Fale comigo!" dark onWa={onWa} />
          </div>

          {/* Info row */}
          <div className="grid sm:grid-cols-3 gap-6 border-t border-cream/10 pt-14">
            {[
              {
                icon: "instagram" as const,
                label: "Instagram",
                value: "@psi.mayarasouza",
                sub: "Abordagem Psicanalítica",
                href: contact.instagramUrl,
              },
              {
                icon: "star" as const,
                label: "Atendimento",
                value: "Particular",
                sub: "Adultos · Adolescentes · Crianças · Online e Presencial",
                href: null,
              },
              {
                icon: "map-pin" as const,
                label: "Endereço",
                value: "Rua Padre Anchieta, 1923",
                sub: "Cidade Industrial — Curitiba/PR",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-10 h-10 rounded-full border border-blush-400/30 grid place-items-center mx-auto mb-3 text-blush-400">
                  <Icon name={item.icon} size={18} />
                </div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-cream/40 font-sans mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-lg text-cream block hover:text-blush-200 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-serif text-lg text-cream">{item.value}</p>
                )}
                <p className="text-cream/50 text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="mt-14 rounded-2xl overflow-hidden border border-cream/10 h-64">
            <iframe
              src={contact.mapsEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(80%) brightness(0.8) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Consultório Mayara Souza — Rua Padre Anchieta 1923, Curitiba/PR"
            />
          </div>

        </Container>
      </section>
    </>
  );
}
