import { motion } from "framer-motion";
import { buildWhatsappUrl } from "@/data/contact";
import { Icon } from "@/components/Icon";

export function WhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale comigo pelo WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1.2,
        duration: 0.7,
        type: "spring",
        stiffness: 140,
        damping: 14,
      }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center gap-3"
    >
      <span className="hidden md:inline-block bg-ink/95 text-cream text-sm px-4 py-2 rounded-full shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Fale comigo pelo WhatsApp
      </span>
      <span className="relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_20px_50px_-15px_rgba(37,211,102,0.65)]">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
        />
        <Icon name="whatsapp" size={30} className="relative" />
      </span>
    </motion.a>
  );
}
