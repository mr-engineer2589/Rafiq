/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color system for better dark/light mode support
        background: {
          light: '#ffffff',
          dark: '#0f0f23',
        },
        surface: {
          light: '#f8fafc',
          dark: '#1a1a2e',
        },
        border: {
          light: '#e2e8f0',
          dark: '#2d2d44',
        },
        text: {
          primary: {
            light: '#1e293b',
            dark: '#f1f5f9',
          },
          secondary: {
            light: '#64748b',
            dark: '#94a3b8',
          },
          muted: {
            light: '#94a3b8',
            dark: '#64748b',
          }
        }
      },
      animation: {
        'theme-transition': 'theme-transition 0.3s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'theme-transition': {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionProperty: {
        'theme': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      }
    },
  },
  plugins: [],
};