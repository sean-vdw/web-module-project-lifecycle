module.exports = {
  content: [
    "./src/App.js",
    "./src/components/Follower.js",
    "./src/components/FollowerList.js",
    "./src/components/User.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
