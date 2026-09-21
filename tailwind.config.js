/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rv: {
          navy: {
            50: '#f0f4f8',
            100: '#d9e2ec',
            200: '#bcccdc',
            300: '#9fb3c8',
            400: '#829ab1',
            500: '#627d98',
            600: '#486581',
            700: '#334e68',
            800: '#243b53',
            900: '#102a43',
            950: '#061626',
          },
          gold: {
            50: '#fbf8ea',
            100: '#f5eebe',
            200: '#ede187',
            300: '#e4cd50',
            400: '#d9b626',
            500: '#c59b0f',
            600: '#a37a09',
            700: '#7e5a09',
            800: '#68480f',
            900: '#573c12',
          },
          red: {
            50: '#fff5f5',
            100: '#fed7d7',
            500: '#e53e3e',
            600: '#c53030',
            700: '#9b2c2c',
          },
          emerald: {
            500: '#10b981',
            600: '#059669',
          }
        },
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(217, 182, 38, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
      }
    },
  },
  plugins: [],
}
