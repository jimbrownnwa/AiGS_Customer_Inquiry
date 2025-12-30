/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aigs-navy': '#1a365d',
        'aigs-blue': '#3182ce',
        'aigs-orange': '#dd6b20',
        'aigs-success': '#38a169',
        'aigs-warning': '#dd6b20',
        'aigs-critical': '#e53e3e',
        'aigs-bg': '#f7fafc',
        'aigs-text': '#2d3748',
      },
      fontFamily: {
        'display': ['Bricolage Grotesque', 'sans-serif'],
        'body': ['Geist', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(221, 107, 32, 0.5), 0 0 10px rgba(221, 107, 32, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(221, 107, 32, 0.8), 0 0 20px rgba(221, 107, 32, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
