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
          DEFAULT: '#10B981',  // emerald-500 - Good contrast on white
          light: '#34D399',   // emerald-400 - Lighter variant
          dark: '#059669',    // emerald-600 - Darker variant for hover states
          foreground: '#FFFFFF', // White text for better contrast on colored buttons
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