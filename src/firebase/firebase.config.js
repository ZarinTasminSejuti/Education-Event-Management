// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH1SMNQkaNZH_dsrI1xi4xrLSJJ7YHLMc",
  authDomain: "eventifyedu-project.firebaseapp.com",
  projectId: "eventifyedu-project",
  storageBucket: "eventifyedu-project.appspot.com",
  messagingSenderId: "1076161844415",
  appId: "1:1076161844415:web:b5849e28e0ddf519e9a20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;