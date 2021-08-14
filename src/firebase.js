import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCjvwv2gLTIebcpQD56ABT9N0X54AOc0WU",
    authDomain: "clone-f33ef.firebaseapp.com",
    projectId: "clone-f33ef",
    storageBucket: "clone-f33ef.appspot.com",
    messagingSenderId: "577802339621",
    appId: "1:577802339621:web:61767aa29136d5e5c706cc",
    measurementId: "G-9B28LQ4L19"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};