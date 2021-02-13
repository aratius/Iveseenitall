const gulp = require("gulp")
const ejs = require("gulp-ejs")
const rename = require("gulp-rename")
const CONFIG = require("../config")

const _ejs = (done) => {

  gulp.src(CONFIG.PATHS.ejs.src)
  .pipe(ejs({}, {}, {ext: ".html"}))
  .pipe(rename({ extname: ".html"}))
  .pipe(gulp.dest(CONFIG.PATHS.ejs.dest))
  done()
}

gulp.task("ejs", _ejs)