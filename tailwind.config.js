/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f3f9',
          100: '#d6dff0',
          200: '#adbfe1',
          300: '#7a9acc',
          400: '#4a75b5',
          500: '#1e4d8c',
          600: '#163d75',
          700: '#0f2d5c',
          800: '#0d1f3c',
          900: '#0a1628',
        },
        gold: {
          50:  '#fdf9ec',
          100: '#f9f0cc',
          200: '#f2dd90',
          300: '#e8c75a',
          400: '#e2c46e',
          500: '#c9a84c',
          600: '#a8862d',
          700: '#7d6120',
        },
        cream: {
          50:  '#faf8f3',
          100: '#f2efe6',
          200: '#e8e2d0',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.4s ease-out forwards',
        'slide-right':'slideRight 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
