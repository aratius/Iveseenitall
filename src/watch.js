const fs = require('fs')

const credentialPath = '../firebaseconfig.json'
let outputFilePath = './output/settings.json'

const admin = require('firebase-admin')
const serviceAccount = require(credentialPath)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

console.log('[INFO] Start listen to Firestore')

//Firebaseのdocumentを購読
const unsub = db.collection('switch').doc('1').onSnapshot(snapshot => {
  console.log('[INFO] Firestore settings are changed')
  console.log(snapshot.data())

  const data = JSON.stringify(snapshot.data(), null, 2)

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

}, error => {
console.error(`[ERROR] Can't observe firestore document.`)
console.error(`[ERROR] ${error}`)
process.exit(1)
  
})