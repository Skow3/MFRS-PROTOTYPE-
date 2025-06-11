import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALE7v9Wt6_Do4kSUjZ_kr29abwwif2_ws",
    authDomain: "mfrs-a815c.firebaseapp.com",
    projectId: "mfrs-a815c",
    storageBucket: "mfrs-a815c.firebasestorage.app",
    messagingSenderId: "131214364394",
    appId: "1:131214364394:web:4f4e08e89bec6736525193",
    measurementId: "G-5DN1DY5554"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { RecaptchaVerifier };