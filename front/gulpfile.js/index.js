const GulpClient = require("gulp")
const gulp = require("gulp")
const hub = require("gulp-hub")
const { WATCHFILES } = require("./config")

const tasks = new hub([
  "./tasks/bundle.js",
  "./tasks/ejs.js",
  "./tasks/sass.js",
  "./tasks/browser.js",
])
gulp.registry(tasks)

const watch = (done) => {
  gulp.watch(WATCHFILES.JS, gulp.series("bundle", "reload"))
  gulp.watch(WATCHFILES.SCSS, gulp.series("sass", "reload"))
  gulp.watch(WATCHFILES.EJS, gulp.series("ejs", "reload"))
  done()
}
gulp.task("watch", watch)

const _default = gulp.series(
  gulp.parallel(
    "bundle",
    "ejs",
    "sass",
  ),
  "browserInit",
  "watch"
)


gulp.task("default", _default)