import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e0ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00fff5',
          600: '#00ccc4',
          700: '#009993',
          800: '#006662',
          900: '#003331',
        },
        accent: {
          cyan: '#00fff5',
          pink: '#ff006e',
          purple: '#8b5cf6',
          yellow: '#ffd60a',
        },
        dark: {
          bg: '#0a0e27',
          surface: '#1a1f3a',
          border: '#2a3050',
        },
        neon: {
          cyan: '#00fff5',
          pink: '#ff006e',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'glitch': 'glitch 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 245, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 245, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
