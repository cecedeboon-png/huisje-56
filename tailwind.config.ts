import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B3A5C',
          50: '#E8EFF6',
          100: '#C5D6E9',
          200: '#8FAFC8',
          300: '#5989A8',
          400: '#336280',
          500: '#1B3A5C',
          600: '#16304E',
          700: '#11263E',
          800: '#0C1B2E',
          900: '#07101E',
        },
        terracotta: {
          DEFAULT: '#C0785C',
          50: '#FAF0EC',
          100: '#F2D9CF',
          200: '#E5B4A2',
          300: '#D89076',
          400: '#C0785C',
          500: '#A86047',
          600: '#8F4E38',
          700: '#773D2A',
          800: '#5F2C1D',
          900: '#471B10',
        },
        sage: {
          DEFAULT: '#7A9E7E',
          50: '#EEF3EE',
          100: '#D5E5D7',
          200: '#ABCAAF',
          300: '#84B089',
          400: '#7A9E7E',
          500: '#638567',
          600: '#4D6B51',
          700: '#37523B',
          800: '#223826',
          900: '#0C1E10',
        },
        background: '#F8F6F2',
        cream: '#F8F6F2',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
}

export default config
