import firebase from 'firebase/app';
import 'firebase/database';

//import firestore from 'firebase/firestore';

if (!firebase.apps.length) {
  // Initialize Firebase
  //const settings = {timestampsInSnapshots: true};
  const config = {
    apiKey: "AIzaSyCBuYYoq5nT97I4QYcpMW837plzeXhAfNM",
    authDomain: "keep200.firebaseapp.com",
    databaseURL: "https://keep200-default-rtdb.firebaseio.com/",
    projectId: "keep200",
    storageBucket: "keep200.appspot.com",
    messagingSenderId: "683370598146",
    appId: "1:683370598146:web:f3513049a39bcb13107c1b"
  };

  firebase.initializeApp(config);
  //firebase.firestore().settings(settings);

  //console.log(process.env) // view environment keys in console log
}

const db = firebase.database();
// db.settings({timestampsInSnapshots:true})

export { db };