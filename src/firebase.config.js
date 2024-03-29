import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwSRxvdzCyu-aINwvKX2cVzccp9_WRO4o",
  authDomain: "the-house-market-place.firebaseapp.com",
  projectId: "the-house-market-place",
  storageBucket: "the-house-market-place.appspot.com",
  messagingSenderId: "146662708758",
  appId: "1:146662708758:web:b1d15640b6a1d4b239c737"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()