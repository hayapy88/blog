// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOxSQqX3-linLDmmv249H1sMg1H64Wd3s",
  authDomain: "blog-eae36.firebaseapp.com",
  projectId: "blog-eae36",
  storageBucket: "blog-eae36.appspot.com",
  messagingSenderId: "865608920422",
  appId: "1:865608920422:web:6c6e11cfe87780b596eca7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
