import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/data/navigation";
import { contact } from "@/data/contact";
import { handleWhatsAppClick } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/Icon";
import { cx } from "@/lib/formatters";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const onWhatsApp = () => handleWhatsAppClick(navigate);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-40 bg-petrol-600 border-b border-petrol-500/30"
      >
        <Container size="wide">
          <div className="flex items-center justify-between py-4 md:py-5">
            {/* Logo */}
            <Link
              to="/"
              className="group flex flex-col leading-tight -my-1"
              aria-label="Ir para a página inicial"
            >
              <span
                className="font-serif text-xl md:text-[1.75rem] tracking-tight text-cream"
              >
                Mayara{" "}
                <span className="italic text-blush-300">
                  Souza
                </span>
              </span>
              <span
                className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] mt-0.5 leading-tight text-cream/60"
              >
                <span className="sm:hidden">Psicanalista · {contact.crp}</span>
                <span className="hidden sm:inline">Psicóloga · Psicanalista · {contact.crp}</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    cx(
                      "text-sm font-sans tracking-wide transition-colors duration-300 relative",
                      "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-blush-400 after:transition-all after:duration-300",
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
                      isActive ? "text-blush-300" : "text-cream/80 hover:text-cream"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Instagram icon */}
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={cx(
                  "w-9 h-9 rounded-full border grid place-items-center transition-all duration-300",
                  "border-cream/20 text-cream/70 hover:border-blush-300 hover:text-blush-300"
                )}
              >
                <Icon name="instagram" size={15} />
              </a>
              {/* WhatsApp CTA */}
              <button
                type="button"
                onClick={onWhatsApp}
                className={cx(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300",
                  "border border-blush-400/60 text-blush-300 hover:bg-blush-500 hover:text-white hover:border-blush-500"
                )}
              >
                <Icon name="whatsapp" size={15} />
                Agendar
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className={cx(
                "lg:hidden p-2 -mr-2 transition-colors duration-300",
                "text-cream"
              )}
              onClick={() => setOpen((prev) => !prev)}
            >
              <Icon name={open ? "close" : "menu"} size={28} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 lg:hidden bg-petrol-600"
          >
            <div className="absolute inset-0 opacity-[0.04] bg-grain pointer-events-none" aria-hidden="true" />
            <Container className="relative flex flex-col h-full pt-24 pb-12">
              <nav className="flex flex-col gap-1 flex-1">
                {primaryNav.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.06 + idx * 0.06,
                    }}
                  >
                    <NavLink
                      to={item.href}
                      end={item.href === "/"}
                      className={({ isActive }) =>
                        cx(
                          "block py-5 border-b border-cream/10 font-serif text-3xl transition-colors",
                          isActive ? "text-blush-300 italic" : "text-cream"
                        )
                      }
                    >
                      <span className="mr-3 text-xs font-sans tracking-widest text-cream/40">
                        0{idx + 1}
                      </span>
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="pt-8"
              >
                <button
                  type="button"
                  onClick={onWhatsApp}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blush-500 text-white font-sans font-medium text-base hover:bg-blush-600 transition-colors"
                >
                  <Icon name="whatsapp" size={20} />
                  Vamos conversar?
                </button>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full border border-cream/20 grid place-items-center text-cream/60 hover:text-blush-300 hover:border-blush-300 transition-colors"
                  >
                    <Icon name="instagram" size={16} />
                  </a>
                </div>
                <p className="text-center text-xs text-cream/40 mt-4">
                  {contact.crp} · Curitiba/PR
                </p>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
