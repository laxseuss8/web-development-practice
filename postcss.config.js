// postcss.config.js

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
});
// tailwind.config.js
