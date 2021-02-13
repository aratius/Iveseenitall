exports.PATHS = {
  scss: {
    src: "./src/scss/*.scss",
    dest: "./dist/css"
  },
  js: {
    src: "./src/js/index.js",
    dest: "./dist/js",
    bundle: "bundle.js",
  },
  ejs: {
    src: "./src/ejs/index.ejs",
    dest: "./dist"
  },
  dest: "./dist"
}

exports.WATCHFILES = {
  JS: [
    "./src/js/*.js",
    "./src/js/**/*.js",
  ],
  EJS: [
    "./src/ejs/*.ejs",
    "./src/ejs/**/*.ejs",
  ],
  SCSS: [
    "./src/scss/*.scss",
    "./src/scss/**/*.scss",
  ]
};