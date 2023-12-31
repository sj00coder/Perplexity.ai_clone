/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'borderMain': 'rgb(215 215 206/1)',
      'borderMain/60': 'hsla(60,10%,83%,.6)',
      'super': '#20808d',
      'superDuper': 'rgb(31 184 205/1)',
      'textMain': '#13343b',
      'textMainDark': 'rgb(232 232 230/1)',
      'transparent': 'transparent',
      'background': 'rgb(252 252 249/1)',
      'background2': 'rgb(243, 243, 238)',
      'textOff': 'rgb(100 100 95/1)',
      'white': 'rgb(255 255 255/1)',
      'alert': 'rgb(255 84 89/1)',
      'offset': 'rgb(243 243 238/1)',
      'offsetPlus': 'rgb(232 232 227/1)',
      'offsetPlusDark': 'rgb(51 51 49/1)',
      'black/80': 'rgba(0,0,0,.8)',
      'superAlt': 'rgb(168 75 47/1)',
    },
    fontFamily: {
      sans: ['Hanken Grotesk', 'Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Space Mono', 'monospace'],
    },
    extend: {
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '32px',
        'xl': '48px',
        '2xl': '96px',
      },
    },
  },
  plugins: [],
};
