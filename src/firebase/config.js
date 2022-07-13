// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrWuw6NLtRmTQ-wAbPm6tRRGWkCFOg9D8",
  authDomain: "pixelstore-7a2b5.firebaseapp.com",
  projectId: "pixelstore-7a2b5",
  storageBucket: "pixelstore-7a2b5.appspot.com",
  messagingSenderId: "228687283610",
  appId: "1:228687283610:web:6c4fdf10e520d957646623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);