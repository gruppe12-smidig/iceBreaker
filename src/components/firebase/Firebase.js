import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA9PZxcM-47HTb1X4MX6tJdlCyz50T4H5w",
    authDomain: "icebreaker-eca4f.firebaseapp.com",
    databaseURL: "https://icebreaker-eca4f.firebaseio.com",
    projectId: "icebreaker-eca4f",
    storageBucket: "icebreaker-eca4f.appspot.com",
    messagingSenderId: "672727885033",
    appId: "1:672727885033:web:50834aca20d42f5b"
};

firebase.initializeApp(firebaseConfig);

export  const provider = new firebase.auth.GoogleAuthProvider();
export  const auth = firebase.auth();

export default firebase;