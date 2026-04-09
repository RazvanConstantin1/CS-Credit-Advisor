import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0d2060",
          dark: "#081545",
          mid: "#162480",
          light: "#1e3590",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e0c070",
          pale: "#f5ecd4",
          50: "#fdf8ed",
        },
        charcoal: "#2c3e50",
        muted: "#6b7a8d",
        "off-white": "#f5f0e8",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(30,53,144,0.5) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 85% 20%, rgba(201,168,76,0.12) 0%, transparent 60%), linear-gradient(160deg, #0d2060 0%, #081545 100%)",
        "gold-gradient": "linear-gradient(135deg, #b8922a, #c9a84c, #e0c070)",
        "card-shimmer":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        gold: "0 6px 24px rgba(201,168,76,0.4)",
        "gold-lg": "0 10px 30px rgba(201,168,76,0.5)",
        "card-hover": "0 12px 40px rgba(201,168,76,0.12)",
        glass: "0 30px 80px rgba(0,0,0,0.5)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "fade-up-delay": "fadeUp 0.7s 0.2s ease both",
        pulse2: "pulse2 2s infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
