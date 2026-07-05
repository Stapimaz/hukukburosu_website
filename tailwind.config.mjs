/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#dbe3f0',
          200: '#becfe3',
          300: '#95b3d2',
          400: '#6892bc',
          500: '#4875a3',
          600: '#375d85',
          700: '#2d4b6b',
          800: '#1a2c42',
          900: '#0B132B',
          950: '#060a18',
        },
        gold: {
          50: '#fdfbfa',
          100: '#f9f5f0',
          200: '#f2e8dc',
          300: '#e6d5be',
          400: '#d5bd98',
          500: '#C5A880',
          600: '#b08f60',
          700: '#92734b',
          800: '#775e3f',
          900: '#614d35',
          950: '#34291b',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FDFCFB',
          200: '#F9F8F6',
          300: '#F2EFE9',
          400: '#E8E3DA',
          500: '#DCD4C7',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
