// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZhHnKMSn3Wi405-GV2YsC0LjQxm_2f6k",
    authDomain: "gammershopfinal.firebaseapp.com",
    projectId: "gammershopfinal",
    storageBucket: "gammershopfinal.appspot.com",
    messagingSenderId: "769751899920",
    appId: "1:769751899920:web:68a2918ceb045596b14f95"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

