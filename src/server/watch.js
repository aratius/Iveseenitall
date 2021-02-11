const admin = require('firebase-admin')
const write = require('./write')
const PATH = require('../paths')
const LED = require('./light')

const credentialPath = PATH.credentialPath
let outputFilePath = PATH.outputFilePath

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

  LED.light(snapshot.data().isOn)

  const data = JSON.stringify(snapshot.data(), null, 2)

  write.write(outputFilePath, data)
}, error => {
  console.error(`[ERROR] Can't observe firestore document.`)
  console.error(`[ERROR] ${error}`)
  process.exit(1)
  
})