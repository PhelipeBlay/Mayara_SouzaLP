import type { NavigateFunction } from 'react-router-dom';

const PHONE = '5541996796578';
const DEFAULT_MESSAGE = 'Olá, gostaria de agendar uma consulta com a Mayara.';

export function buildWhatsAppLink(customMessage?: string): string {
  const base = customMessage ?? DEFAULT_MESSAGE;

  if (typeof window === 'undefined') {
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(base)}`;
  }

  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');

  const utmParts = [source, medium, campaign].filter(Boolean);
  const message = utmParts.length > 0
    ? `${base} [via: ${utmParts.join('/')}]`
    : base;

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function handleWhatsAppClick(navigate: NavigateFunction, customMessage?: string): void {
  window.open(buildWhatsAppLink(customMessage), '_blank', 'noopener,noreferrer');
  navigate('/obrigado');
}
