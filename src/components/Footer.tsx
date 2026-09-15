import { Link } from "react-router-dom";
import { primaryNav } from "@/data/navigation";
import { buildWhatsappUrl, contact } from "@/data/contact";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/Icon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-sage-700 text-cream mt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-grain" aria-hidden="true" />
      <Container size="wide" className="relative pt-20 pb-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr,1fr,1fr,1fr]">
          <div>
            <h3 className="font-serif text-3xl">
              Mayara <span className="italic text-gold-300">Souza</span>
            </h3>
            <p className="text-xs uppercase tracking-[0.28em] text-cream/70 mt-2">
              Psicóloga · Psicanalista · {contact.crp}
            </p>
            <p className="mt-6 max-w-sm text-cream/80 leading-relaxed">
              Um espaço para pensar sua história, sentir o presente e imaginar o que ainda pode vir a ser.
            </p>
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 group text-gold-200"
            >
              <span className="w-11 h-11 rounded-full border border-gold-300/40 grid place-items-center group-hover:bg-gold-300/10 transition-colors">
                <Icon name="whatsapp" size={18} />
              </span>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.28em] text-cream/60">
                  Fale comigo
                </span>
                <span className="font-serif text-lg link-underline">
                  {contact.whatsappDisplay}
                </span>
              </span>
            </a>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-gold-200 mb-5">
              Navegar
            </h4>
            <ul className="space-y-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-cream/85 hover:text-cream link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-gold-200 mb-5">
              Consultório
            </h4>
            <address className="not-italic text-cream/85 space-y-2 leading-relaxed">
              <p>{contact.address.street}</p>
              <p>{contact.address.district}</p>
              <p>
                {contact.address.city}/{contact.address.state} — {contact.address.zip}
              </p>
              <p className="pt-3 text-cream/70 text-sm">{contact.hours}</p>
              <p className="text-cream/70 text-sm">{contact.online}</p>
            </address>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-gold-200 mb-5">
              Encontre-me
            </h4>
            <ul className="flex flex-wrap gap-3 mb-6">
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 grid place-items-center rounded-full border border-cream/20 hover:border-gold-300 transition-colors"
                >
                  <Icon name="instagram" size={16} />
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 grid place-items-center rounded-full border border-cream/20 hover:border-gold-300 transition-colors"
                >
                  <Icon name="linkedin" size={16} />
                </a>
              </li>
              <li>
                <a
                  href={contact.doctoraliaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Doctoralia"
                  className="w-10 h-10 grid place-items-center rounded-full border border-cream/20 hover:border-gold-300 transition-colors"
                >
                  <Icon name="star" size={14} />
                </a>
              </li>
            </ul>
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold-200 mb-2">
              Pagamento
            </p>
            <p className="text-cream/80 text-sm">PIX · Transferência · Dinheiro</p>
          </div>
        </div>

        <div className="rule my-12 opacity-40" />

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 text-sm text-cream/70">
          <p>© {year} Mayara Souza — Todos os direitos reservados.</p>
          <p className="max-w-xl md:text-right leading-relaxed text-cream/60 text-[13px]">
            {contact.emergencyNote}
          </p>
        </div>
      </Container>
    </footer>
  );
}
