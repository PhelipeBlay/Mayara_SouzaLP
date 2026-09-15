import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { buildWhatsappUrl } from "@/data/contact";
import type { Service } from "@/data/services";
import { formatCurrencyBRL } from "@/lib/formatters";

const formatLabels: Record<Service["format"], string> = {
  presencial: "Presencial",
  online: "Online",
  ambos: "Presencial · Online",
};

type Props = { service: Service; index: number };

export function ServiceCard({ service, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.08,
      }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col h-full bg-cream border border-sage-100 rounded-[22px] p-8 shadow-card hover:shadow-soft transition-shadow duration-500 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-sage-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />
      <div className="relative flex items-start justify-between mb-6">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-50 text-sage-500 border border-sage-100">
          <Icon name={service.icon} size={26} />
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-ink-soft/80">
          {formatLabels[service.format]}
        </span>
      </div>
      <h3 className="font-serif text-2xl leading-tight mb-3 text-balance">
        {service.title}
      </h3>
      <p className="text-ink-soft leading-relaxed flex-1 text-pretty">
        {service.description}
      </p>
      <div className="relative rule my-6 opacity-70" />
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-ink-soft/80">
            Investimento
          </p>
          <p className="font-serif text-2xl text-sage-600">
            {formatCurrencyBRL(service.price)}
            <span className="text-xs text-ink-soft/70 font-body ml-1 normal-case">
              · {service.duration}
            </span>
          </p>
        </div>
        <a
          href={buildWhatsappUrl(
            `Olá, gostaria de saber mais sobre ${service.title}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gold-600 font-sans font-medium link-underline group/link"
          aria-label={`Agendar ${service.title} pelo WhatsApp`}
        >
          Agendar
          <Icon name="arrow-right" size={16} className="transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}
