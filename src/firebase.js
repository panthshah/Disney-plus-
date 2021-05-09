import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDYdhj6xjbqykn73vJT4qUCCE_ue9znUt0",
    authDomain: "disneyplus-clone-23b1b.firebaseapp.com",
    projectId: "disneyplus-clone-23b1b",
    storageBucket: "disneyplus-clone-23b1b.appspot.com",
    messagingSenderId: "989682800853",
    appId: "1:989682800853:web:4715a7a7d3b2cde38fea5c",
    measurementId: "G-E375V9SE74"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;