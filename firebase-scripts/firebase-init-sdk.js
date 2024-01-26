// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANVrtVYNAoEJ3Q0mQgTp8hDGyQy-VuHcw",
    authDomain: "online-note-taker.firebaseapp.com",
    projectId: "online-note-taker",
    storageBucket: "online-note-taker.appspot.com",
    messagingSenderId: "783903891930",
    appId: "1:783903891930:web:ffd06809aeea658e8420e3",
    measurementId: "G-ZKCCEB1KQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Export necessary Firebase modules
export const auth = getAuth();
console.log(app.options);