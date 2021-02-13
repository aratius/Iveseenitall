const gulp = require("gulp")
const sass = require("gulp-sass")
const CONFIG = require("../config")

const _sass = (done) => {
  gulp.src(CONFIG.PATHS.scss.src)
  .pipe(sass())
  .pipe(gulp.dest(CONFIG.PATHS.scss.dest))

  done()
}

gulp.task("sass", _sass)