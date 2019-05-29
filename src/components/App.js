import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import firebase from './firebase/Firebase';

import './App.css';
import './header/Header.css'
import ProfilePage from './profile/ProfilePage'
import Home from './home/home';
import LoginPage from './login/LoginPage';
import RegisterEventPage from './NewEvent/RegisterEventPage';
import SignupPage from './signup/SignupPage';
import Events from './events/Events';
import MyEvents from './myEvents/MyEvents';
import FindEvents from './findEvents/FindEvents';
import Header from "./header/Header";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";
import About from "./about/About";
import StartPage from "./startpage/StartPage";
import EventView from "./eventView/EventView";
import Cookies from "./cookies/Cookies";
import Privacy from "./privacy/Privacy";


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
        let header = <Header drawerClickHandler={this.drawerToggleClickHandler}/>

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer/>;
            backdrop = <Backdrop click={this.backDropClickHandler}/>;
        }
        if (window.location.pathname === '/LoginPage') {
            return <LoginPage/>;
        }
        if (window.location.pathname === '/StartPage') {
            return <StartPage/>;
        }

        else return (
            <div style={{height: '100%'}}>

                <Router>
                    {header}
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
                        <Route path="/StartPage" component={StartPage}/>
                        <Route path="/EventView" component={EventView}/>
                        <Route path="/Cookies" component={Cookies}/>
                        <Route path="/Privacy" component={Privacy}/>


                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

