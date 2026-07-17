/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0D1226",
          light: "#141B38",
          card: "#171F42",
        },
        ink: {
          DEFAULT: "#F3EFE4",
          muted: "#9BA3C7",
          faint: "#5C6491",
        },
        amber: {
          DEFAULT: "#F2A93B",
          soft: "#F7C876",
          deep: "#C9822A",
        },
        teal: {
          DEFAULT: "#4FD1C5",
          deep: "#2FA79C",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(13,18,38,0) 0%, #0D1226 85%)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
}
