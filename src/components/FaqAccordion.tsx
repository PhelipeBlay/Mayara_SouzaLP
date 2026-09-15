import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FaqItem } from "@/data/faq";
import { Icon } from "@/components/Icon";
import { cx } from "@/lib/formatters";

type Props = { items: FaqItem[] };

export function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-sage-100 border-y border-sage-100">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <li key={item.question}>
            <motion.button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full py-6 flex items-start gap-6 text-left group"
              aria-expanded={isOpen}
              aria-controls={`faq-${idx}`}
              initial={false}
              whileHover={{ x: 2 }}
            >
              <span className="text-[11px] font-sans tracking-[0.28em] text-sage-400 pt-2 min-w-[2ch]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-serif text-xl md:text-2xl text-ink text-balance leading-snug">
                {item.question}
              </span>
              <span
                className={cx(
                  "shrink-0 w-10 h-10 mt-1 grid place-items-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "bg-sage-500 border-sage-500 text-cream rotate-45"
                    : "border-sage-200 text-sage-500 group-hover:border-sage-400"
                )}
              >
                <Icon name="plus" size={18} />
              </span>
            </motion.button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${idx}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="pl-[calc(2ch+1.5rem)] pr-14 pb-8 text-ink-soft leading-[1.85] max-w-2xl">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
