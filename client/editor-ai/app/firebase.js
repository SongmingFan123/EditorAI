// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACdig4Db7849_aOJFxlMLi0j8MLmInBI8",
  authDomain: "se-editor-ai.firebaseapp.com",
  projectId: "se-editor-ai",
  storageBucket: "se-editor-ai.appspot.com",
  messagingSenderId: "883583909136",
  appId: "1:883583909136:web:564126f03409326681f995"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);