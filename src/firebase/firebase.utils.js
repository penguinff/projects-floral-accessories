import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAuNGF50NlpDpUh6iDalQoeMP2sYxYoYdo",
  authDomain: "floral-accessories.firebaseapp.com",
  projectId: "floral-accessories",
  storageBucket: "floral-accessories.appspot.com",
  messagingSenderId: "11303418116",
  appId: "1:11303418116:web:8acb7ed0b09cc2ad65b851",
  measurementId: "G-7QF46G3Y3C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Signin
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

// Facebook Signin
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;