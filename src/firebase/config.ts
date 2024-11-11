
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJ7xl0-Z7LFLZfm529nx3MfS2w9sPiCXs",
  authDomain: "vue-songs-9bd81.firebaseapp.com",
  projectId: "vue-songs-9bd81",
  storageBucket: "vue-songs-9bd81.firebasestorage.app",
  messagingSenderId: "462188524917",
  appId: "1:462188524917:web:73d72ddaa6b1efe4cb4f3c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}