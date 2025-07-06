/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#212121',
          light: '#484848',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#263238',
          light: '#4f5b62',
          dark: '#000a12',
        },
        accent: {
          DEFAULT: '#00FF00',
          light: '#76FF03',
          dark: '#64DD17',
          foreground: '#000000', 
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#F5F5F5',
          dark: '#1A1A1A',
        },
        foreground: {
          DEFAULT: '#212121',
          light: '#484848',
          dark: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    typography,
    forms,
  ],
};

export default config;