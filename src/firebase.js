import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpU1C1HOUqmZIJ-HzcYm2f6aeFKWGu9AY",
  authDomain: "clone-3f4cb.firebaseapp.com",
  projectId: "clone-3f4cb",
  storageBucket: "clone-3f4cb.appspot.com",
  messagingSenderId: "75014833896",
  appId: "1:75014833896:web:bd8eb60a9f5661734beb5d",
  measurementId: "G-FDK7G2XQ68"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };