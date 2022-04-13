// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.REACT_APP_apiKey,
  authDomain: process.REACT_APP_authDomain,
  projectId: process.REACT_APP_projectId,
  storageBucket: process.REACT_APP_storageBucket,
  messagingSenderId: process.REACT_APP_messagingSenderId,
  appId: process.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
