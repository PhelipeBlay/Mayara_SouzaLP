import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { primaryNav } from "@/data/navigation";
import { contact } from "@/data/contact";
import { handleWhatsAppClick } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const onWhatsApp = () => handleWhatsAppClick(navigate);

  return (
    <footer className="relative bg-petrol-900 text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grain" aria-hidden="true" />

      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-blush-500/40 to-transparent" />

      <Container size="wide" className="relative pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr,1fr,1.2fr,1fr]">

          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl">
              Mayara <span className="italic text-blush-300">Souza</span>
            </h3>
            <p className="text-xs uppercase tracking-[0.28em] text-cream/50 mt-2">
              Psicóloga · Psicanalista · {contact.crp}
            </p>
            <p className="mt-5 max-w-sm text-cream/70 leading-relaxed text-[15px]">
              Um espaço de escuta profunda para você se reconectar com a sua história.
            </p>

            {/* WhatsApp CTA */}
            <button
              type="button"
              onClick={onWhatsApp}
              className="group inline-flex items-center gap-3 mt-7 text-left"
            >
              <span className="w-11 h-11 rounded-full border border-blush-400/30 grid place-items-center group-hover:bg-blush-500/20 group-hover:border-blush-400/60 transition-all duration-300">
                <Icon name="whatsapp" size={18} className="text-blush-300" />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.28em] text-cream/40">
                  Fale comigo
                </span>
                <span className="font-serif text-lg text-blush-200 group-hover:text-blush-100 transition-colors">
                  {contact.whatsappDisplay}
                </span>
              </span>
            </button>

            {/* Instagram CTA */}
            <p className="mt-6 text-cream/60 text-sm">
              Me siga e acompanhe conteúdo no Instagram!
            </p>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-blush-300 text-sm hover:text-blush-200 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-blush-500/20 border border-blush-400/30 grid place-items-center">
                <Icon name="instagram" size={14} />
              </span>
              @psi.mayarasouza
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-blush-300/80 mb-5">
              Navegar
            </h4>
            <ul className="space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacidade"
                  className="text-cream/50 hover:text-cream/80 text-sm transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-blush-300/80 mb-5">
              Consultório
            </h4>
            <address className="not-italic text-cream/70 space-y-2 leading-relaxed text-sm">
              <p>{contact.address.street}</p>
              <p>{contact.address.district}</p>
              <p>{contact.address.city}/{contact.address.state}</p>
              <p className="pt-2 text-cream/50">{contact.hours}</p>
              <p className="text-cream/50">{contact.online}</p>
            </address>
          </div>

          {/* Atendimento info */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-blush-300/80 mb-5">
              Atendimento
            </h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li>✓ Abordagem Psicanalítica</li>
              <li>✓ Adultos · Adolescentes · Crianças</li>
              <li>✓ Presencial e Online</li>
              <li>✓ Particular</li>
            </ul>
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-blush-300/80 mb-2">
                Pagamento
              </p>
              <p className="text-cream/60 text-sm">PIX · Transferência · Dinheiro</p>
            </div>
            <button
              type="button"
              onClick={onWhatsApp}
              className="mt-6 flex items-center gap-2 text-sm font-sans font-medium text-petrol-600 bg-cream px-4 py-2.5 rounded-full hover:bg-blush-50 transition-colors"
            >
              <Icon name="whatsapp" size={15} />
              Agendar Sessão
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 my-10" />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 text-[13px] text-cream/40">
          <p>© {year} Mayara Souza Psicóloga Psicanalista — Todos os Direitos Reservados.</p>
          <div className="flex flex-col md:items-end gap-1">
            <Link to="/privacidade" className="hover:text-cream/70 transition-colors underline underline-offset-2">
              Política de Privacidade
            </Link>
            <p className="max-w-sm md:text-right text-cream/30">
              {contact.emergencyNote}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
