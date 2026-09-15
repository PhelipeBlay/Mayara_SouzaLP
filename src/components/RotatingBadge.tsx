import { motion, useReducedMotion } from "framer-motion";
import { cx } from "@/lib/formatters";

type Props = {
  text: string;
  className?: string;
  size?: number;
};

export function RotatingBadge({
  text,
  className,
  size = 128,
}: Props) {
  const reduce = useReducedMotion();
  const chars = text.split("");
  const step = 360 / chars.length;

  return (
    <motion.div
      className={cx("relative pointer-events-none", className)}
      style={{ width: size, height: size }}
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{
        duration: 24,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <div className="absolute inset-0 rounded-full border border-cream/40" />
      {chars.map((char, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 text-[10px] uppercase tracking-[0.3em] text-cream/85 font-sans"
          style={{
            transform: `rotate(${i * step}deg) translateY(-${size / 2 - 14}px)`,
            transformOrigin: "0 0",
          }}
        >
          {char}
        </span>
      ))}
      <div
        className="absolute inset-0 grid place-items-center"
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-gold-400" />
      </div>
    </motion.div>
  );
}
