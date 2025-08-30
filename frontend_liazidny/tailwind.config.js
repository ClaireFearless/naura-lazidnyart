/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#FDFCFB',       // background utama & header
        body: '#5D4037',       // teks isi
        heading: '#C1633D',    // judul utama & komponen
        footer: '#5D4037',     // background footer
        footerText: '#FDFCFB', // teks footer
        brandTitleFooter: '#FF7043'
      },

    },
  },
  plugins: [],
}

