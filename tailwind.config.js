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
        // Brand Colors
        accent: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
          subtle: 'rgba(16,185,129,0.08)',
          border: 'rgba(16,185,129,0.25)',
          foreground: '#FFFFFF',
        },
        // Light Theme Backgrounds
        background: {
          DEFAULT: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        // Dark Foreground
        foreground: {
          DEFAULT: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        // Border Colors
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F0F0F0',
          strong: '#D1D5DB',
        },
        // Legacy aliases
        primary: {
          DEFAULT: '#111111',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#F8F8F8',
          light: '#FFFFFF',
          dark: '#F2F2F2',
        },
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem,5vw,5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-lg': ['clamp(2.5rem,4vw,4rem)', { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-md': ['clamp(2rem,3vw,3rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-sm': ['clamp(1.5rem,2.5vw,2rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
        'input': '8px',
        'pill': '999px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(0,0,0,0.04)',
        'card': '0 1px 4px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 32px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)',
        'md': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        'lg': '0 8px 24px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 50s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [
    typography,
    forms,
  ],
};

export default config;