import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCusjV1Ma9Jh30t1U0IopRK8ai4TRl2mac",
    authDomain: "linkedin-clone-1ea08.firebaseapp.com",
    projectId: "linkedin-clone-1ea08",
    storageBucket: "linkedin-clone-1ea08.appspot.com",
    messagingSenderId: "481883361112",
    appId: "1:481883361112:web:508bfb1473177bc8e8df2d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };