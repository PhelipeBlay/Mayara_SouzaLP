import { useInView, type UseInViewOptions } from "framer-motion";
import { useRef } from "react";

type Options = Pick<UseInViewOptions, "amount" | "margin"> & {
  once?: boolean;
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export function useScrollAnimation({
  amount = 0.25,
  margin,
  once = true,
}: Options = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount, margin, once });
  return {
    ref: ref as React.RefObject<HTMLElement>,
    animate: inView ? "visible" : "hidden",
    initial: "hidden",
  };
}
