// config/firebaseConfig.js
import 'react-native-get-random-values';
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAalcxqBySUwczD7_AqUa60q4oiZUbWi0o",
  authDomain: "digitalpathacademy.firebaseapp.com",
  projectId: "digitalpathacademy",
  storageBucket: "digitalpathacademy.appspot.com",
  messagingSenderId: "606655828580",
  appId: "1:606655828580:android:ef7a0cc270eed3db764571",
};

// ✅ App init (safe)
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// ✅ Auth init (ALWAYS like this in React Native)
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// ✅ Firestore
export const db = getFirestore(app);
