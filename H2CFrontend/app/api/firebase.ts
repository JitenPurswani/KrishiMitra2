import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWxXaHatLw_8dexFTSdtLj0snC64Neiu4",
  authDomain: "farmtech-assistant.firebaseapp.com",
  projectId: "farmtech-assistant",
  storageBucket: "farmtech-assistant.firebasestorage.app",
  messagingSenderId: "425629682557",
  appId: "1:425629682557:web:7a3697f188c7013bb79a14",
  measurementId: "G-NJ8RLY3M8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
