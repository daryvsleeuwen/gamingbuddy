import * as firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyDqR3ZScjQD8Ji1pDNQGKmMWCdJ3-rOIaU",
  authDomain: "gamerbuddy-4f53d.firebaseapp.com",
  databaseURL: "https://gamerbuddy-4f53d.firebaseio.com",
  projectId: "gamerbuddy-4f53d",
  storageBucket: "gamerbuddy-4f53d.appspot.com",
  messagingSenderId: "734531192887",
  appId: "1:734531192887:web:e6d22209ea0d1b99f997b2"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();
export default database;