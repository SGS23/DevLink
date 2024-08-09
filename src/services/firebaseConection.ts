
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAKysJWnFAYP8hA_Wfnu08iYxxDS8S2aYw",
    authDomain: "reactlinks-3ddff.firebaseapp.com",
    projectId: "reactlinks-3ddff",
    storageBucket: "reactlinks-3ddff.appspot.com",
    messagingSenderId: "556636400733",
    appId: "1:556636400733:web:c54df535296496edda71b4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export {auth, database}; //exporta parte de autenticaçao e banco de dados