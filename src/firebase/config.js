import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyA9QXiXB7QXzRkMlN_WX3ofTfpPu2DUcB4",
  authDomain: "miniblog-c53c0.firebaseapp.com",
  projectId: "miniblog-c53c0",
  storageBucket: "miniblog-c53c0.appspot.com",
  messagingSenderId: "871148017386",
  appId: "1:871148017386:web:9bc7cfc1bfae867291a993"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
