/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c7873',
        secondary: '#05668d',
        accent: '#f0a202',
        'text-dark': '#1a1a1a',
        'text-light': '#666',
        'bg-light': '#f8f9fa',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'fade-in-delay': 'fadeIn 1s ease-in 0.3s both',
        'fade-in-delay-2': 'fadeIn 1s ease-in 0.6s both',
        'fade-in-delay-3': 'fadeIn 1s ease-in 0.9s both',
        'float': 'float 3s ease-in-out infinite',
        'scroll': 'scroll 2s infinite',
        'scroll-auto': 'scroll-auto 30s linear infinite',
        'fillBar': 'fillBar 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scroll: {
          '0%': { top: '5px', opacity: '1' },
          '100%': { top: '15px', opacity: '0' },
        },
        'scroll-auto': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fillBar: {
          '0%': { width: '0%' },
        },
      },
    },
  },
  plugins: [],
}
