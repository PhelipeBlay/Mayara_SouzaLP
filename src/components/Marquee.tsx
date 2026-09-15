import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  items: string[];
  speed?: number;
  separator?: ReactNode;
  className?: string;
  itemClassName?: string;
};

export function Marquee({
  items,
  speed = 40,
  separator = <span className="text-sage-300 mx-8" aria-hidden="true">✦</span>,
  className,
  itemClassName,
}: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className={
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] " +
        (className ?? "")
      }
      aria-label={items.join(", ")}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={"inline-flex items-center " + (itemClassName ?? "")}
          >
            <span>{item}</span>
            {separator}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
