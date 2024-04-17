import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHJjxICNXW7fqS0dXK-lB4Gzxi9DUNb_4",
  authDomain: "link-tree-e7320.firebaseapp.com",
  projectId: "link-tree-e7320",
  storageBucket: "link-tree-e7320.appspot.com",
  messagingSenderId: "574173083116",
  appId: "1:574173083116:web:68b5b4dee191abdc353cc9",
  measurementId: "G-KHLRW8TJRK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
export const storate = getStorage();
