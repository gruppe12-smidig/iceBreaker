import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import './header/Header.css'
import Home from './home/home';
import LoginPage from './login/LoginPage';
import RegisterEventPage from './event/RegisterEventPage';
import SignupPage from './signup/SignupPage';
import Events from './events/Events';


class App extends Component {
 render() {
     return (
         <Router>
                 <Route exact path="/" component={Home}/>
                 <Route path="/loginPage" component={LoginPage}/>
                 <Route path="/SignupPage" component={SignupPage}/>
                 <Route path="/RegisterEventPage" component={RegisterEventPage}/>
                 <Route path="/Events" component={Events}/>
         </Router>
     );
 }
}


export default App;
