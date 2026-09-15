type Props = {
  from?: string;
  to?: string;
  flip?: boolean;
  className?: string;
};

export function WaveDivider({
  from = "#FEFCF9",
  to = "#F5F0EB",
  flip = false,
  className,
}: Props) {
  return (
    <div
      className={className}
      style={{ transform: flip ? "scaleY(-1)" : undefined, lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[80px] md:h-[120px]"
      >
        <defs>
          <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,20 1440,80 L1440,120 L0,120 Z"
          fill="url(#wave-grad)"
        />
      </svg>
    </div>
  );
}
