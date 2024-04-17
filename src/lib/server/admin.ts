require("dotenv").config();
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: process.env.FB_PROJECT_ID,
      clientEmail: process.env.FB_CLIENT_EMAIL,
      privateKey: process.env.FB_PRIVATE_KEY,
    }),
  });
} catch (err) {
  if (!/already exists/u.test((err as Error).message)) {
    console.error("Firebase Admin Error: ", (err as Error).stack);
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
