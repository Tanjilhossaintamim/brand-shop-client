// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDmiPc0JvHAfHfFzBKvSDJsqSVdCEm1eQ",
    authDomain: "brand-shop-11dbf.firebaseapp.com",
    projectId: "brand-shop-11dbf",
    storageBucket: "brand-shop-11dbf.appspot.com",
    messagingSenderId: "123315138228",
    appId: "1:123315138228:web:23dc09c796c4b7a07a31e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;