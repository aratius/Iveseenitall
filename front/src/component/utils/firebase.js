import firebase from 'firebase'
import "firebase/firestore"

const firebaseconfig = {
}

class _Firebase {
  constructor() {
    firebase.initializeApp({
      apiKey: "6119ff6bb29a54e3a8781eb20dd299eaee13d026",
      projectId: "led-lighting-18db7"
    })

    this.db = firebase.firestore()
  }
  
  setData(tf) {
    console.log("setData");
    this.db.collection("switch").doc("1").update({ isOn: tf }).then(docRef => {
    }).catch(err => {
      console.log(err)
    })
  }
  
}

const Firebase = new _Firebase()
export default Firebase