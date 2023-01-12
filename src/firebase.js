// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO0Af2IVeL8fgaeMqrVlvvsICO2exiJbk",
    authDomain: "eshop-8e906.firebaseapp.com",
    projectId: "eshop-8e906",
    storageBucket: "eshop-8e906.appspot.com",
    messagingSenderId: "1078032706422",
    appId: "1:1078032706422:web:e3e9a8e46517ac5bd26857",
    measurementId: "G-79EVV1HDGP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };