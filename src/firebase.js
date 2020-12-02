// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/database";

//From the project settigns in Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqoN6HvqyIpKHFl9CMegYpV_uO1PXLYQs",
    authDomain: "collective-strategies-app.firebaseapp.com",
    databaseURL: "https://collective-strategies-app.firebaseio.com",
    projectId: "collective-strategies-app",
    storageBucket: "collective-strategies-app.appspot.com",
    messagingSenderId: "204319135638",
    appId: "1:204319135638:web:b8171910ec79903b682fb7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;