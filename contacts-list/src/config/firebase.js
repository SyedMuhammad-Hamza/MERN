// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa3sNalKt7uI_Qb4hDWY69R1qTW6v1K1E",
  authDomain: "vite-contact-ce299.firebaseapp.com",
  projectId: "vite-contact-ce299",
  storageBucket: "vite-contact-ce299.appspot.com",
  messagingSenderId: "548377254868",
  appId: "1:548377254868:web:56afad2b6166516d2dd441",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
