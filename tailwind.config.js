export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#08090D',
        marble: '#F5F1E8',
        gold: '#C9A56A',
        bronze: '#8D6E4D'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
