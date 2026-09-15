import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import { cx } from "@/lib/formatters";

type ContainerProps<T extends ElementType> = {
  as?: T;
  size?: "narrow" | "default" | "wide" | "full";
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const sizeMap = {
  narrow: "max-w-3xl",
  default: "max-w-content",
  wide: "max-w-[1360px]",
  full: "max-w-none",
} as const;

export function Container<T extends ElementType = "div">({
  as,
  size = "default",
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component
      className={cx("mx-auto w-full container-inline", sizeMap[size], className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
