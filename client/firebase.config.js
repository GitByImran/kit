// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfhc1laYKYGrnST0XQcQOSRDiC_XPLnOo",
    authDomain: "kit-official.firebaseapp.com",
    projectId: "kit-official",
    storageBucket: "kit-official.appspot.com",
    messagingSenderId: "586486037851",
    appId: "1:586486037851:web:7d04e149eb36e65dbfae7e",
    measurementId: "G-CV97T8WGXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app