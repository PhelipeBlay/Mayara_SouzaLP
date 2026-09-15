import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/data/navigation";
import { buildWhatsappUrl, contact } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { cx } from "@/lib/formatters";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cx(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-b border-sage-100/70"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between py-4 md:py-5">
            <Link
              to="/"
              className="group flex flex-col leading-tight -my-1"
              aria-label="Ir para a página inicial"
            >
              <span className="font-serif text-xl md:text-[1.7rem] tracking-tight text-ink">
                Mayara <span className="italic text-sage-500">Souza</span>
              </span>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] md:tracking-[0.28em] text-ink-soft mt-0.5 leading-tight">
                <span className="sm:hidden">Psicanalista · {contact.crp}</span>
                <span className="hidden sm:inline">Psicóloga · Psicanalista · {contact.crp}</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
              {primaryNav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    cx(
                      "text-sm font-sans tracking-wide transition-colors",
                      "link-underline",
                      isActive ? "text-sage-500" : "text-ink hover:text-sage-500"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button
                as="a"
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
              >
                Agendar Consulta
                <Icon name="arrow-right" size={16} />
              </Button>
            </div>

            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="lg:hidden p-2 -mr-2 text-ink"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Icon name={open ? "close" : "menu"} size={28} />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 lg:hidden bg-cream/95 backdrop-blur-xl pt-24"
          >
            <Container className="flex flex-col gap-1 py-8">
              {primaryNav.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.06 + idx * 0.05,
                  }}
                >
                  <NavLink
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      cx(
                        "block py-4 border-b border-sage-100 font-serif text-3xl transition-colors",
                        isActive ? "text-sage-500 italic" : "text-ink"
                      )
                    }
                  >
                    <span className="mr-3 text-xs font-sans tracking-widest text-ink-soft/70">
                      0{idx + 1}
                    </span>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="pt-10"
              >
                <Button
                  as="a"
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Agendar Consulta
                  <Icon name="arrow-right" size={18} />
                </Button>
                <p className="text-center text-xs text-ink-soft mt-6">
                  {contact.whatsappDisplay} · {contact.address.city}/{contact.address.state}
                </p>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
