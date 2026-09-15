import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cx } from "@/lib/formatters";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-300 will-change-transform disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-cream shadow-glow hover:bg-gold-600 hover:-translate-y-[1px] hover:shadow-[0_25px_60px_-20px_rgba(196,167,108,0.55)] active:translate-y-0",
  secondary:
    "bg-transparent text-sage-500 border border-sage-400/60 hover:bg-sage-50 hover:border-sage-400 hover:-translate-y-[1px]",
  ghost:
    "text-ink hover:text-sage-500",
  link: "text-sage-500 link-underline p-0",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-4 py-2 rounded-full",
  md: "text-sm px-6 py-3 rounded-full",
  lg: "text-base px-8 py-4 rounded-full",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AsButton = CommonProps & { as?: "button" } & ComponentPropsWithoutRef<"button">;
type AsA = CommonProps & { as: "a" } & ComponentPropsWithoutRef<"a">;
type AsLink = CommonProps & { as: "link" } & LinkProps;
type ButtonProps = AsButton | AsA | AsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props;
  const cls = cx(base, variants[variant], variant !== "link" && sizes[size], className);

  if (props.as === "a") {
    const { as: _a, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _a; void _v; void _s; void _c; void _ch;
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }
  if (props.as === "link") {
    const { as: _a, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _a; void _v; void _s; void _c; void _ch;
    return (
      <Link className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const { as: _a, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  void _a; void _v; void _s; void _c; void _ch;
  return (
    <button className={cls} type={rest.type ?? "button"} {...(rest as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}

export type EyebrowProps = { children: ReactNode; className?: string };
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center text-[11px] uppercase tracking-[0.32em] text-sage-500/90 font-sans font-medium",
        className
      )}
    >
      <span className="accent-line bg-sage-400/60" />
      {children}
    </span>
  );
}
