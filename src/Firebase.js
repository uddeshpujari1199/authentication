// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZn-jVKRy7mINH7zIsK08frl5Q5z0SpKw",
  authDomain: "myproject-81e2b.firebaseapp.com",
  projectId: "myproject-81e2b",
  storageBucket: "myproject-81e2b.appspot.com",
  messagingSenderId: "238621604687",
  appId: "1:238621604687:web:4f51ee48bb0ca28987a33a",
  measurementId: "G-HME36X89FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
