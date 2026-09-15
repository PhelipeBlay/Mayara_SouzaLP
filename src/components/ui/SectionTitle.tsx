import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cx } from "@/lib/formatters";
import { Eyebrow } from "./Button";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  serif?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className,
  serif = true,
}: Props) {
  const Heading = as;
  return (
    <div
      className={cx(
        "flex flex-col gap-4 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        <Heading
          className={cx(
            "text-balance",
            serif ? "font-serif" : "font-sans",
            as === "h1" ? "text-display" : as === "h2" ? "text-headline" : "text-title"
          )}
        >
          {title}
        </Heading>
      </motion.div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          className={cx(
            "text-ink-soft text-lg md:text-xl leading-relaxed max-w-prose text-pretty",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
