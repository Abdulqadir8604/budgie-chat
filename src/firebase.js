import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCbduWjOiQ0iHk_gbn9enrgBIRPj38nP5k",
    authDomain: "budgie-chat.firebaseapp.com",
    projectId: "budgie-chat",
    storageBucket: "budgie-chat.appspot.com",
    messagingSenderId: "387629976775",
    appId: "1:387629976775:web:164e9e5768148979c282e2",
    measurementId: "G-ZPW3CQ2Q9P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

