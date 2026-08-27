import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebaseConfigData from '../../firebase-applet-config.json';

// Exact Firebase Web Config for YourScraper
export const firebaseConfig = {
  apiKey: firebaseConfigData.apiKey || "AIzaSyDomPOS7yvwU0YUH3mJ84t1J-wRbiHCnZw",
  authDomain: firebaseConfigData.authDomain || "yourscraper-dccec.firebaseapp.com",
  projectId: firebaseConfigData.projectId || "yourscraper-dccec",
  storageBucket: firebaseConfigData.storageBucket || "yourscraper-dccec.firebasestorage.app",
  messagingSenderId: firebaseConfigData.messagingSenderId || "343566215918",
  appId: firebaseConfigData.appId || "1:343566215918:web:c214eddbefbf4065c3e1ff",
  measurementId: "G-6J8PTSX4S7",
};

// Initialize Firebase client safely
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Database ID if configured
const databaseId = firebaseConfigData.firestoreDatabaseId;

// Initialize Firestore
export const db = databaseId ? getFirestore(app, databaseId) : getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
