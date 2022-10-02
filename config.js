import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfhrIzCXgnJIM5y_y-lygcjzAGCXUcTNw",
  authDomain: "team-voting-19f57.firebaseapp.com",
  projectId: "team-voting-19f57",
  storageBucket: "team-voting-19f57.appspot.com",
  messagingSenderId: "746122972131",
  appId: "1:746122972131:web:7462c0de1b817c24a0aed6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
