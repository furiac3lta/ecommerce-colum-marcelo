import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'  



const firebaseConfig = {
    apiKey: "AIzaSyAIMBfnA0CAgmaac9joAlxR1UMUHajiA1Q",
    authDomain: "ecommerce-login-7e8d7.firebaseapp.com",
    projectId: "ecommerce-login-7e8d7",
    storageBucket: "ecommerce-login-7e8d7.appspot.com",
    messagingSenderId: "605021157399",
    appId: "1:605021157399:web:83d2b7879961302b6a4452",
    measurementId: "G-L6N75W9DRZ"
  };
  
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();

  export {auth,fs,storage};