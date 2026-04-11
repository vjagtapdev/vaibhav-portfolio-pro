/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 25px 60px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'mesh-radial':
          'radial-gradient(700px circle at var(--x,50%) var(--y,20%), rgba(217,70,239,0.18), transparent 55%), radial-gradient(650px circle at 20% 75%, rgba(34,211,238,0.12), transparent 55%), radial-gradient(650px circle at 85% 70%, rgba(139,92,246,0.12), transparent 55%)',
      },
    },
  },
  plugins: [],
}

