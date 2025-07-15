import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "loginonecart-273b3.firebaseapp.com",

  projectId: "loginonecart-273b3",

  storageBucket: "loginonecart-273b3.firebasestorage.app",

  messagingSenderId: "31935012715",

  appId: "1:31935012715:web:c08ee7bad638286ee9f62e"

};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export { auth, provider }

