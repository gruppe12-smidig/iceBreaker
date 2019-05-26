import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import firebase from './firebase/Firebase';

import './App.css';
import './header/Header.css'
import ProfilePage from './profile/ProfilePage'
import Home from './home/home';
import LoginPage from './login/LoginPage';
import RegisterEventPage from './event/RegisterEventPage';
import SignupPage from './signup/SignupPage';
import Events from './events/Events';
import MyEvents from './myEvents/MyEvents';
import FindEvents from './findEvents/FindEvents';
import Switch from "react-router-dom/es/Switch";
import Header from "./header/Header";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";
import About from "./about/About";


class App extends Component {
  constructor() {
      super();
      this.state = {
          user: null,
          sideDrawerOpen: false
      };
  }




    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };


    backDropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    componentDidMount() {
        const ref = firebase.database().ref('user');

        ref.on('value', snapshot => {
            let FBUser = snapshot.val();
            this.setState({user: FBUser});
        })
    }

    render() {
        let sideDrawer;
        let backdrop;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer/>;
            backdrop = <Backdrop click={this.backDropClickHandler}/>;
        }

        return (
            <div style={{height: '100%'}}>

                <Router>
                    <Header drawerClickHandler={this.drawerToggleClickHandler}/>
                    {sideDrawer}
                    {backdrop}

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/ProfilePage" component={ProfilePage} />
                        <Route path="/loginPage" component={LoginPage}/>
                        <Route path="/SignupPage" component={SignupPage}/>
                        <Route path="/RegisterEventPage" component={RegisterEventPage}/>
                        <Route path="/events" component={Events}/>
                        <Route path="/myEvents" component={MyEvents}/> 
                        <Route path="/findEvents" component={FindEvents}/>
                        <Route path="/About" component={About}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

