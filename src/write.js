const fs = require('fs')

//ファイルの書き換えを行うモジュール
exports.write = (outputFilePath, data)=> {
  // ローカルファイルに書き出し
  fs.writeFile(outputFilePath, data, 'utf8', (error) => {
    if (error) {
      console.error(`[ERROR] Can't update ${outputFilePath}.`);
      console.error(`[ERROR] ${error}`)
      process.exit(1)
    } else {
      console.log(`[INFO] ${outputFilePath} was updated.`)
    }
  })
}