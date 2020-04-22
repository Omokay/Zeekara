import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAwZPzCx6QR8Pony3wZmeeGgmJkXh8HPAg",
    authDomain: "e-commerce-db-96b61.firebaseapp.com",
    databaseURL: "https://e-commerce-db-96b61.firebaseio.com",
    projectId: "e-commerce-db-96b61",
    storageBucket: "e-commerce-db-96b61.appspot.com",
    messagingSenderId: "100388779185",
    appId: "1:100388779185:web:136acfa393adb52b555e90",
    measurementId: "G-ZY1D7GDTSD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;