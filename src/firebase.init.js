// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfdWT0LLdKDxlTAUM88Bj7kt3n7RtovTw",
  authDomain: "genius-car-services-9f7eb.firebaseapp.com",
  projectId: "genius-car-services-9f7eb",
  storageBucket: "genius-car-services-9f7eb.appspot.com",
  messagingSenderId: "418225476027",
  appId: "1:418225476027:web:1b3761a14343b3dd0af49e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
