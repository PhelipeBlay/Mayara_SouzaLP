/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f4f7f5",
          100: "#e2ebe6",
          200: "#c5d6cd",
          300: "#9fbaad",
          400: "#7c9a8e",
          500: "#617f74",
          600: "#4d685e",
          700: "#40544d",
          800: "#374540",
          900: "#303c38",
        },
        sand: {
          50: "#fbf8f4",
          100: "#f5f0eb",
          200: "#ebe1d5",
          300: "#d9c8b3",
          400: "#c4a988",
          500: "#b28d67",
          600: "#a17858",
          700: "#85614b",
          800: "#6d5041",
          900: "#5a4337",
        },
        gold: {
          50: "#faf6ec",
          100: "#f2ebd0",
          200: "#e6d5a4",
          300: "#d6bb74",
          400: "#c4a76c",
          500: "#b0904d",
          600: "#96773f",
          700: "#785e35",
          800: "#644d30",
          900: "#55412b",
        },
        ink: {
          DEFAULT: "#2D2D2D",
          soft: "#6B6B6B",
        },
        cream: "#FEFCF9",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw + 1rem, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 3vw + 1rem, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'title': ['clamp(1.5rem, 1.5vw + 1rem, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prose: '68ch',
        content: '1200px',
      },
      boxShadow: {
        soft: '0 30px 60px -25px rgba(64, 84, 77, 0.18)',
        glow: '0 20px 50px -20px rgba(196, 167, 108, 0.35)',
        card: '0 10px 40px -20px rgba(45, 45, 45, 0.15)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/></svg>\")",
        'paper': "radial-gradient(1200px 800px at 10% -10%, #f5f0eb 0%, transparent 55%), radial-gradient(900px 700px at 100% 10%, #eef2ee 0%, transparent 60%), #fefcf9",
      },
      animation: {
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
