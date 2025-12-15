/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fefdfb",
          100: "#fdf8f0",
          200: "#f9edd9",
          300: "#f2ddb8",
          400: "#e8c68a",
          500: "#dba94f",
          600: "#c4923a",
          700: "#a37530",
          800: "#845d2c",
          900: "#6c4d27",
        },
        nile: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#b9e5fe",
          300: "#7cd1fd",
          400: "#36b9fa",
          500: "#0c9feb",
          600: "#007fc9",
          700: "#0165a3",
          800: "#065586",
          900: "#0b476f",
        },
        papyrus: {
          50: "#fdfcf9",
          100: "#f8f4e8",
          200: "#f0e6cb",
          300: "#e5d3a5",
          400: "#d8ba78",
          500: "#cca254",
          600: "#ba8a45",
          700: "#9b6d3a",
          800: "#7e5835",
          900: "#67492e",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Lora", "serif"],
        accent: ["Cormorant Garamond", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/images/pattern.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
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
