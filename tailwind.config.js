/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/themes/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif']
      },
      colors: {
        'dracula-background': '#0b0f19',
        'dracula-current-line': '#1e293b',
        'dracula-foreground': '#f8fafc',
        'dracula-comment': '#94a3b8',
        'dracula-cyan': '#38bdf8',
        'dracula-green': '#34d399',
        'dracula-orange': '#38bdf8',
        'dracula-pink': '#f472b6',
        'dracula-purple': '#a855f7',
        'dracula-red': '#f87171',
        'dracula-yellow': '#fbbf24'
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
};
