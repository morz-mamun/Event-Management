// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGDSsmzV8nUAhpZ_MlCkqxh94tl2vgaG4",
  authDomain: "social-event-management-8b2c8.firebaseapp.com",
  projectId: "social-event-management-8b2c8",
  storageBucket: "social-event-management-8b2c8.appspot.com",
  messagingSenderId: "226220815987",
  appId: "1:226220815987:web:6cca10b81cb5a59d649c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app