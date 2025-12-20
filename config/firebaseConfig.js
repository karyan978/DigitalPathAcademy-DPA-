// config/firebaseConfig.js
import 'react-native-get-random-values';
import { initializeApp, getApps, getApp } from 'firebase/app';
// 1. Yahan 'getAuth' ko import list mein add kiya gaya hai
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAalcxqBySUwczD7_AqUa60q4oiZUbWi0o",
  authDomain: "digitalpathacademy.firebaseapp.com",
  projectId: "digitalpathacademy",
  storageBucket: "digitalpathacademy.appspot.com",
  messagingSenderId: "606655828580",
  appId: "1:606655828580:android:ef7a0cc270eed3db764571",
};

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// ✅ Initialize Auth correctly
let auth;
if (getApps().length === 0) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  // Ab 'getAuth' yahan kaam karega kyunki humne ise upar import kar liya hai
  auth = getAuth(app); 
}

export const db = getFirestore(app);
export { auth };