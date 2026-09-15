import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { contact } from "@/data/contact";

export default function Obrigado() {
  return (
    <>
      <Helmet>
        <title>Obrigada pelo contato — Mayara Souza</title>
        <meta name="robots" content="noindex,nofollow" />
        {/* ========== META PIXEL — COLAR CÓDIGO AQUI ========== */}
        {/* <script>fbq('track', 'Lead');</script> */}
        {/* ========== GOOGLE ADS — COLAR CONVERSION TAG AQUI ========== */}
        {/* <script>gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/XXXXXXX'});</script> */}
      </Helmet>

      <section className="min-h-[90vh] grid place-items-center bg-cream py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-10 rounded-full bg-blush-100 border border-blush-300 grid place-items-center"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blush-600"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.div>

            <h1 className="font-serif text-4xl md:text-5xl text-petrol-600 leading-tight mb-4">
              Obrigada pelo<br />
              <em>seu contato!</em>
            </h1>

            <p className="text-lg text-ink-soft leading-relaxed mb-3">
              Sua mensagem foi enviada com sucesso. Responderei o mais breve
              possível — geralmente em até 24 horas.
            </p>
            <p className="text-base text-ink-soft/80 leading-relaxed mb-10">
              Enquanto isso, conheça mais sobre psicanálise e bem-estar no meu Instagram.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-petrol-600 text-petrol-600 font-sans font-medium text-sm hover:bg-petrol-600 hover:text-cream transition-all duration-300 min-w-[180px]"
              >
                Voltar ao site
              </Link>
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blush-500 text-white font-sans font-medium text-sm hover:bg-blush-600 transition-all duration-300 min-w-[180px]"
              >
                Ver Instagram
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
