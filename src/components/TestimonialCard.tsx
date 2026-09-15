import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import type { Testimonial } from "@/data/testimonials";

type Props = { testimonial: Testimonial; index: number };

export function TestimonialCard({ testimonial, index }: Props) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1,
      }}
      className="relative bg-sand-50 border border-sand-100 rounded-[26px] p-8 md:p-10 shadow-card overflow-hidden"
    >
      <Icon
        name="quote"
        size={56}
        className="absolute -top-3 -left-1 text-sage-200/70"
      />
      <div className="relative">
        <div className="flex items-center gap-1 text-gold-500 mb-5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Icon key={i} name="star" size={14} />
          ))}
        </div>
        <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-ink text-pretty italic">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3 text-sm text-ink-soft">
          <span className="w-8 h-[1px] bg-sage-400/70" />
          <span>{testimonial.author}</span>
          {testimonial.since && (
            <span className="text-ink-soft/60 text-xs uppercase tracking-widest">
              · via {testimonial.since}
            </span>
          )}
        </figcaption>
      </div>
    </motion.figure>
  );
}
