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
      'textMain': '#13343b',
      'transparent': 'transparent',
      'background': 'rgb(252 252 249/1)',
      'textOff': 'rgb(100 100 95/1)',
      'white': 'rgb(255 255 255/1)',
      'alert': 'rgb(255 84 89/1)',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Space Mono', 'monospace'],
    },
    extend: {
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
      },
    },
  },
  plugins: [],
};
