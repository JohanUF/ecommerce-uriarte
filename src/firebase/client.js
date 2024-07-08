// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGKmFaIKPBwBWMdqyQUUKPKjuvq1VFla8",
  authDomain: "ecommerceuriarte.firebaseapp.com",
  projectId: "ecommerceuriarte",
  storageBucket: "ecommerceuriarte.appspot.com",
  messagingSenderId: "991479330762",
  appId: "1:991479330762:web:2a83f7c23adb5e5a414133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)