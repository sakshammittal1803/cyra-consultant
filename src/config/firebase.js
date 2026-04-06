// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration (same as Cyra app)
const firebaseConfig = {
  apiKey: "AIzaSyBBYaJSx7HiwOqhO7b2RWNbJXxHN5gLckc",
  authDomain: "cyra-b50e8.firebaseapp.com",
  databaseURL: "https://cyra-b50e8-default-rtdb.firebaseio.com",
  projectId: "cyra-b50e8",
  storageBucket: "cyra-b50e8.firebasestorage.app",
  messagingSenderId: "996230065210",
  appId: "1:996230065210:web:ee980969b2de6b4cf09903",
  measurementId: "G-4LWJ95K3SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Configure Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
  client_id: '810662183892-oha8u295upjkdv8velje36f42jn3ppk7.apps.googleusercontent.com',
});

export { db, auth, googleProvider };
export default app;
