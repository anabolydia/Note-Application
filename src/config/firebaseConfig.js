// Import firebase.
import firebase from 'firebase';

// Configure Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyBF9b1U7XBR_a_d-MGzAPHXNr1BFJSsTUM",
    authDomain: "note-application-3ffa8.firebaseapp.com",
    databaseURL: "https://note-application-3ffa8.firebaseio.com",
    projectId: "note-application-3ffa8",
    storageBucket: "note-application-3ffa8.appspot.com",
    messagingSenderId: "385583786353",
    appId: "1:385583786353:web:d394a11ac8c8cbe910eed0"
  };

firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
export const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',

    // Redirect to /addNewNote after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',

    // Display Email and GitHub as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
    ]
};


export default firebase;