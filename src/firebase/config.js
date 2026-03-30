// Firebase SDK-dan lazımlı funksiyaları import edirik
import { initializeApp } from "firebase/app"; // Firebase app başlatmaq üçün
import { getDatabase } from "firebase/database"; // Realtime Database istifadə etmək üçün
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase layihəndən aldığın config məlumatları
// (Firebase Console → Project Settings → General → Your apps)
// .env.local faylında saxlanır
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Firebase initialize
const app = initializeApp(firebaseConfig);

// Database
export const db = getDatabase(app);

// Auth
export const auth = getAuth(app);


// Google Provider
export const googleProvider = new GoogleAuthProvider();