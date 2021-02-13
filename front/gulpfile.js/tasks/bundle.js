const gulp = require("gulp")
const webpackStream = require("webpack-stream")
const webpack = require("webpack")

const CONFIG = require("../config")
const webpackConfig = require("../webpack.config")

const bundle = (done) => {
  webpackStream(webpackConfig, webpack)
  .pipe(gulp.dest(CONFIG.PATHS.js.dest))
  done()
}

gulp.task("bundle", bundle)