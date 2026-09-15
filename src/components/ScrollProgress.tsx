import { useScroll, motion, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 inset-x-0 h-[2px] z-50 bg-gradient-to-r from-blush-400 via-blush-500 to-blush-600"
    />
  );
}
