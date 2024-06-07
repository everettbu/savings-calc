module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#001e60', 
        'primary-dark': '#00133e',
        secondary: '#509e2f',
        'secondary-dark': '#3b7a23',
        tertiary: '#DE7C00',
        'tertiary-dark': '#C06A00', // Slightly lighter dark shade for tertiary
      },
    },
  },
  plugins: [],
}
