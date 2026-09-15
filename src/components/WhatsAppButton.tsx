import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { handleWhatsAppClick } from "@/lib/whatsapp";
import { Icon } from "@/components/Icon";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.7,
        type: "spring",
        stiffness: 140,
        damping: 14,
      }}
      className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="hidden md:inline-block bg-petrol-600 text-cream text-sm px-4 py-2.5 rounded-full shadow-card whitespace-nowrap"
          >
            Vamos conversar?
          </motion.span>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => handleWhatsAppClick(navigate)}
        aria-label="Fale comigo pelo WhatsApp"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_20px_50px_-15px_rgba(37,211,102,0.65)]"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"
        />
        <Icon name="whatsapp" size={30} className="relative" />
      </motion.button>
    </motion.div>
  );
}
