/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary — Deep ocean blue (Mombasa coast / government trust)
        primary: {
          50: '#eef4fb',
          100: '#d4e3f4',
          200: '#a8c7e8',
          300: '#7aa9d9',
          400: '#4a87c4',
          500: '#2b6aa8',
          600: '#1d5288',
          700: '#163f6b',
          800: '#102e50',
          900: '#0a1d35',
          950: '#06121f',
        },
        // Secondary — Teal (coastal water accent)
        secondary: {
          50: '#eafaf6',
          100: '#cdf2e8',
          200: '#9ae5d2',
          300: '#5fd3b6',
          400: '#2fbb98',
          500: '#16a085',
          600: '#0e8069',
          700: '#0b6453',
          800: '#095043',
          900: '#073d34',
        },
        // Accent — Gold (civic / heritage accent)
        accent: {
          50: '#fdf8ec',
          100: '#f9edcb',
          200: '#f2d98e',
          300: '#e9c351',
          400: '#dcae2e',
          500: '#c4961f',
          600: '#a87b18',
          700: '#855c16',
          800: '#6e4a18',
          900: '#5d3e17',
        },
        // Neutral — warm grey
        neutral: {
          50: '#f8f9fa',
          100: '#eef0f2',
          200: '#dde1e6',
          300: '#c2c8d0',
          400: '#9aa3af',
          500: '#727d8c',
          600: '#5a6470',
          700: '#48515b',
          800: '#3a414a',
          900: '#2c3138',
          950: '#1a1d22',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'title': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeInDown: { '0%': { opacity: '0', transform: 'translateY(-30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        pulseSlow: { '0%,100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
