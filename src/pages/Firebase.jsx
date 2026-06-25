// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO075wdAASuKKnbVS0tgcdj0YY04yhU8U",
  authDomain: "auth-03-05-06.firebaseapp.com",
  projectId: "auth-03-05-06",
  storageBucket: "auth-03-05-06.firebasestorage.app",
  messagingSenderId: "492956664138",
  appId: "1:492956664138:web:945a94e48465fd948201b3",
  measurementId: "G-3ERGCNMRKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default app;