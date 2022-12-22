//import * as firebase from 'firebase/app';
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEWr1X_zKQ3andqF12MLskhoZV3i3H-Mw",
    authDomain: "k-m-restoration.firebaseapp.com",
    projectId: "k-m-restoration",
    storageBucket: "k-m-restoration.appspot.com",
    messagingSenderId: "1014715612991",
    appId: "1:1014715612991:web:c17d520e2f18015267dd8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = app.storage();
const projectFirestore = app.firestore();

export {projectFirestore, projectStorage};