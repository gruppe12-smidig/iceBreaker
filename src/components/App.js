import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import './Header.css'
import Home from './Home';
import LoginPage from './LoginPage';
import RegisterEventPage from './RegisterEventPage';
import SignupPage from './SignupPage';
import Events from './Events';


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
