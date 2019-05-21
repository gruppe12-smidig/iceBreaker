import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './login';
import MenuPage from './menuPage';
import RegisterUser from './registerUser';
import RegisterEvent from './registerEvent'
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/menuPage" component={MenuPage} />
            <Route path="/registerUser" component={RegisterUser}/>
            <Route path="/registerEvent" component={RegisterEvent}/>
        </div>
    </Router>
)

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

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
