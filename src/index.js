import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase } from '@firebase/app';
import 'firebase/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyBF9b1U7XBR_a_d-MGzAPHXNr1BFJSsTUM",
    authDomain: "note-application-3ffa8.firebaseapp.com",
    databaseURL: "https://note-application-3ffa8.firebaseio.com",
    projectId: "note-application-3ffa8",
    storageBucket: "note-application-3ffa8.appspot.com",
    messagingSenderId: "385583786353",
    appId: "1:385583786353:web:d394a11ac8c8cbe910eed0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

