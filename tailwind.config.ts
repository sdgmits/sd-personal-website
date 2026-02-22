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
          500: '#00e8dd',
          600: '#00b8b0',
          700: '#009993',
          800: '#006662',
          900: '#003331',
        },
        accent: {
          cyan: '#00e8dd',
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
          cyan: '#00e8dd',
          pink: '#ff006e',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'Courier New', 'Monaco', 'monospace'],
        mono: ['JetBrains Mono', 'Courier New', 'Monaco', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
