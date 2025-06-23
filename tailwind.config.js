// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx}'], // Important for Tailwind to scan your components
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite', // Make duration shorter for faster speed
      },
    },
  },
  plugins: [],
}
