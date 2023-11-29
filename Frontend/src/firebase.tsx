// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjSf2BRa-Zt07DOaAoer8YONwUWRxl9JU",
  authDomain: "ecommerce-auth-a6c41.firebaseapp.com",
  projectId: "ecommerce-auth-a6c41",
  storageBucket: "ecommerce-auth-a6c41.appspot.com",
  messagingSenderId: "794283662190",
  appId: "1:794283662190:web:d25a98b87b70ded2b13f7f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app, sendPasswordResetEmail };
