import type { SVGProps } from "react";

export type IconName =
  | "whatsapp"
  | "instagram"
  | "linkedin"
  | "map-pin"
  | "phone"
  | "mail"
  | "clock"
  | "arrow-right"
  | "arrow-down"
  | "menu"
  | "close"
  | "plus"
  | "minus"
  | "star"
  | "check"
  | "sparkle"
  | "quote"
  | "spiral"
  | "chat"
  | "hands"
  | "door"
  | "lotus"
  | "screen"
  | "leaf"
  | "heart"
  | "rings"
  | "prism"
  | "compass"
  | "moon";

const paths: Record<IconName, JSX.Element> = {
  whatsapp: (
    <path
      fill="currentColor"
      d="M17.6 14.3c-.3-.1-1.7-.9-2-1s-.5-.1-.7.2-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.6-1-2.2-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 3a9 9 0 0 0-7.6 13.8L3 21l4.4-1.4A9 9 0 1 0 12 3z"
    />
  ),
  instagram: (
    <>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </>
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M4 4h4v16H4zM6 2.5A2.5 2.5 0 1 0 6 7.5 2.5 2.5 0 0 0 6 2.5zM10 8h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.7 5 6.3V20h-4v-4.9c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V20h-4V8z"
    />
  ),
  "map-pin": (
    <>
      <path
        d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" opacity=".9" />
    </>
  ),
  phone: (
    <path
      d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L7.9 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  mail: (
    <>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m3 7 9 6 9-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7v5l3 2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
  "arrow-right": (
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "arrow-down": (
    <path
      d="M12 5v14m-6-6 6 6 6-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  menu: (
    <path
      d="M4 7h16M4 12h16M4 17h10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  close: (
    <path
      d="m6 6 12 12M18 6 6 18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  plus: (
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  minus: (
    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  ),
  star: (
    <path
      d="m12 2 2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z"
      fill="currentColor"
    />
  ),
  check: (
    <path
      d="m4 12 5 5L20 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  sparkle: (
    <path
      d="M12 2v6M12 16v6M2 12h6M16 12h6M4.5 4.5l4 4M15.5 15.5l4 4M19.5 4.5l-4 4M8.5 15.5l-4 4"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  ),
  quote: (
    <path
      d="M7 8c-2 1-3 3-3 6v4h6v-6H6c0-2 .5-3 2-4l-1-1zm10 0c-2 1-3 3-3 6v4h6v-6h-4c0-2 .5-3 2-4l-1-1z"
      fill="currentColor"
      opacity=".85"
    />
  ),
  spiral: (
    <path
      d="M12 21c5 0 9-4 9-9s-4-9-9-9-9 4-9 9c0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.8-2.2-5-5-5s-5 2.2-5 5c0 1.7 1.3 3 3 3s3-1.3 3-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  chat: (
    <path
      d="M4 5h16v11H8l-4 4V5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  ),
  hands: (
    <path
      d="M4 12v4a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4M7 12V6a2 2 0 1 1 4 0v5M13 12V4a2 2 0 1 1 4 0v8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  door: (
    <>
      <path
        d="M6 3h9a2 2 0 0 1 2 2v16H6V3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="13.5" cy="13" r="1" fill="currentColor" />
    </>
  ),
  lotus: (
    <path
      d="M12 20c-4 0-8-2-8-6 0 0 2 1 3.5.5C6 12 6 9 8 8c1.5-.7 3 1 3 1s0-3 1-4c1 1 1 4 1 4s1.5-1.7 3-1c2 1 2 4 .5 6.5C18 15 20 14 20 14c0 4-4 6-8 6z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  ),
  screen: (
    <>
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  leaf: (
    <path
      d="M4 20c0-8 6-14 16-14 0 10-6 16-14 16-1 0-2-1-2-2z M4 20c4-4 8-6 12-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  heart: (
    <path
      d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  ),
  rings: (
    <>
      <circle cx="9" cy="13" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15" cy="13" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  prism: (
    <path
      d="M12 3 3 20h18L12 3z M8 20 12 3 M16 20 12 3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="m9 15 2-6 4-2-2 6-4 2z" fill="currentColor" opacity=".85" />
    </>
  ),
  moon: (
    <path
      d="M20 14a8 8 0 1 1-10-10 6 6 0 0 0 10 10z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number | string;
};

export function Icon({ name, size = 24, className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
