module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"'],
    },
    extend: {
      backgroundImage:{
        'hero-image': "url('@/assets/images/bg-hero.jpg')",
      }
    },
  },
  plugins: [],
}
