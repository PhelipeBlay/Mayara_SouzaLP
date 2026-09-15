export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Abordagem", href: "/abordagem" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];
