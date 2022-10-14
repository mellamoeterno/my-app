import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJYmLooMzWQ7PCwAojcbu3VIMgNPdC-Ko",
  authDomain: "firstreactapp-f4018.firebaseapp.com",
  projectId: "firstreactapp-f4018",
  storageBucket: "firstreactapp-f4018.appspot.com",
  messagingSenderId: "247342748710",
  appId: "1:247342748710:web:a5d2d6378a7a8f312882e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 
export const auth = getAuth(app);
export const provide = GoogleAuthProvider();

//conections needed related to firebase//