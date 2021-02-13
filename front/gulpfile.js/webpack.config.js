const CONFIG = require("./config")

module.exports = {
  mode: "production",  //or develop
  entry: CONFIG.PATHS.js.src,
  output: {
    filename: CONFIG.PATHS.js.bundle
  }
}