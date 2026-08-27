import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfigData from '../../firebase-applet-config.json';

const firebaseConfig = {
  apiKey: firebaseConfigData.apiKey || "AIzaSyDomPOS7yvwU0YUH3mJ84t1J-wRbiHCnZw",
  authDomain: firebaseConfigData.authDomain || "yourscraper-dccec.firebaseapp.com",
  projectId: firebaseConfigData.projectId || "yourscraper-dccec",
  storageBucket: firebaseConfigData.storageBucket || "yourscraper-dccec.firebasestorage.app",
  messagingSenderId: firebaseConfigData.messagingSenderId || "343566215918",
  appId: firebaseConfigData.appId || "1:343566215918:web:c214eddbefbf4065c3e1ff",
  measurementId: "G-6J8PTSX4S7",
};

export const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const databaseId = firebaseConfigData.firestoreDatabaseId;
export const firestoreDb = databaseId ? getFirestore(firebaseApp, databaseId) : getFirestore(firebaseApp);

export async function saveSellerLeadToFirestore(data: Record<string, any>) {
  const colRef = collection(firestoreDb, 'seller_leads');
  const docRef = await addDoc(colRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function saveCollectorLeadToFirestore(data: Record<string, any>) {
  const colRef = collection(firestoreDb, 'collector_leads');
  const docRef = await addDoc(colRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function saveCollegeLeadToFirestore(data: Record<string, any>) {
  const colRef = collection(firestoreDb, 'college_leads');
  const docRef = await addDoc(colRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
