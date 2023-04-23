// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBiMQhkQKYpKSl6tmDMnuO5iUFBNOcLIg8",
  authDomain: "softskill-659f5.firebaseapp.com",
  projectId: "softskill-659f5",
  storageBucket: "softskill-659f5.appspot.com",
  messagingSenderId: "782606764446",
  appId: "1:782606764446:web:af791f713c5676d9a4ee8f",
  measurementId: "G-Q7HHLNKPCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const googleProvider  = new GoogleAuthProvider();
const db = getFirestore(app);
export { app, auth, googleProvider, db };