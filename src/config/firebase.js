// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

export { db };
export default app;
