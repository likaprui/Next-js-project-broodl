// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6NEgywmXYkCmEguvc9nj9-5YY6GdJQQU",
  authDomain: "broodl-6d3cb.firebaseapp.com",
  projectId: "broodl-6d3cb",
  storageBucket: "broodl-6d3cb.firebasestorage.app",
  messagingSenderId: "485856461468",
  appId: "1:485856461468:web:574dec36377460384d2359",
  measurementId: "G-SJB2TS75C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth & Firestore always safe
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics – only run in browser
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };