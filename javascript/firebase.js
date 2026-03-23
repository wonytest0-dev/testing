// IMPORT CORE
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

// IMPORT FIRESTORE
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// IMPORT AUTH
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

// CONFIG (PUNYA KAMU)
const firebaseConfig = {
  apiKey: "AIzaSyA_I9cp8-EuWwm8aX8o_J2rAetX4w_IGlc",
  authDomain: "jimination-9d61d.firebaseapp.com",
  projectId: "jimination-9d61d",
  storageBucket: "jimination-9d61d.firebasestorage.app",
  messagingSenderId: "305447127463",
  appId: "1:305447127463:web:8fc56bcdbf8464bb860e82"
};

// INIT
const app = initializeApp(firebaseConfig);

// EXPORT
export const db = getFirestore(app);
export const auth = getAuth(app);