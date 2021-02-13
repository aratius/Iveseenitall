const gulp = require("gulp")
const browserSync = require("browser-sync").create()
const CONFIG = require("../config")

const browserInit = (done) => {
  browserSync.init({
    server: {
      baseDir: CONFIG.PATHS.dest,
      index: "index.html"
    },
    port: 1129
  })
  done()
}

const reload = (done) => {
  browserSync.reload()
  done()
}

gulp.task("browserInit", browserInit)
gulp.task("reload", reload)