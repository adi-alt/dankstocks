import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAZnF_ImH07iv8Fodazhwg5eYIKK2oKPVs",
    authDomain: "dankstocks-de7a8.firebaseapp.com",
    projectId: "dankstocks-de7a8",
    storageBucket: "dankstocks-de7a8.appspot.com",
    messagingSenderId: "916983782436",
    appId: "1:916983782436:web:20ef69de36aa43e63bccb1"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
