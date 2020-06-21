import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkFGiyv4n4C5e0KkI_I_LDm7PmxFyS1lQ",
    authDomain: "shop-db-c9261.firebaseapp.com",
    databaseURL: "https://shop-db-c9261.firebaseio.com",
    projectId: "shop-db-c9261",
    storageBucket: "shop-db-c9261.appspot.com",
    messagingSenderId: "1060387441705",
    appId: "1:1060387441705:web:f1f121c2d0b7fb33822038",
    measurementId: "G-DMVZNGQCFD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
