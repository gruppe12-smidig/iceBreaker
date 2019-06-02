import React, {Component} from 'react';
import { BrowserRouter ,Route, Switch, Redirect} from "react-router-dom";
import {navigate, Router} from '@reach/router';
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
import Cookies from "./cookies/cookies";
import Privacy from "./privacy/Privacy";
import Welcome from "./welcome/Welcome";





class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: null,
          displayName: null,
          userID: null,
          sideDrawerOpen: false
      };
      this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
      this.backDropClickHandler = this.backDropClickHandler.bind(this);
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
        firebase.auth().onAuthStateChanged(FBUser =>{
            if (FBUser){
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                    });
            }
        });
    }

    registerUser = userName => {
        firebase.auth().onAuthStateChanged(FBUser => {
            FBUser.updateProfile({
                displayName: userName
            }).then(()=>{
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                });

            })
        })
    };

    logOutUser = e => {
        e.preventDefault();
        this.setState({
            displayName: null,
            userID: null,
            user: null
        });

        firebase.auth().signOut().then(()=>{
            console.log('you are logged out')
        })
    };

    addEvent = eventName => {
        const ref = firebase.database().ref(`events/${this.state.user.uid}`);
        ref.push({eventName: eventName});


    };




    render() {


        let sideDrawer;
        let backdrop;
        let header = <Header userName={this.state.displayName} drawerClickHandler={this.drawerToggleClickHandler}/>;

        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer logOutUser={this.logOutUser}/>;
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



                <BrowserRouter>

                    {sideDrawer}
                    {backdrop}
                    {header}

                        <Switch>
                            <Route exact path="/"  render={(props) => <Home {...props} user={this.state.user}/>}/>
                            <Route exact path="/ProfilePage" user={this.state.user} component={ProfilePage} />
                            <Route exact path="/loginPage" render={(props)=><LoginPage {...props} logOut/>}    />
                            <Route exact path="/SignupPage"  render={(props) => <SignupPage {...props} registerUser={this.registerUser}/>}/>
                            <Route exact path="/RegisterEventPage" render={ (props) =><RegisterEventPage {...props} addEvent={this.addEvent}/>}/>
                            <Route exact path="/events" user={this.state.user} component={Events}/>
                            <Route exact path="/myEvents" user={this.state.user} component={MyEvents}/>
                            <Route exact path="/findEvents" user={this.state.user} component={FindEvents}/>
                            <Route exact path="/About" user={this.state.user} component={About}/>
                            <Route exact path="/StartPage" user={this.state.user} component={StartPage}/>
                            <Route exact path="/EventView" user={this.state.user} component={EventView}/>
                            <Route exact path="/Cookies" user={this.state.user} component={Cookies}/>
                            <Route exact path="/Privacy" user={this.state.user} component={Privacy}/>
                        </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

