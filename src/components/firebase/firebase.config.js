import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxdvv3hBhvJz3v3Pi1iytwrzFBgc6cMoY",
  authDomain: "form-authentication-bdc50.firebaseapp.com",
  projectId: "form-authentication-bdc50",
  storageBucket: "form-authentication-bdc50.appspot.com",
  messagingSenderId: "324672843535",
  appId: "1:324672843535:web:fbd1118d458302e0bbd87a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;