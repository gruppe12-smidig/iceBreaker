import React, {Component} from 'react';
import { BrowserRouter ,Route, Switch, Redirect, withRouter, Link} from "react-router-dom";
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
import notFound from "./notFound/NotFound";
import PrivateRoute from "./firebase/PrivateRoute";
import {AuthProvider} from "./firebase/Auth";
import OutOnTripEvent from "./findEvents/OutOnTripEvent";
import ActivityEvent from "./findEvents/ActivityEvent";
import FoodTalkEvent from "./findEvents/FoodTalkEvent";
import StudyGroupEvent from "./findEvents/StudyGroupEvent";
import OpprettetEvent from "./feedBack/OpprettetEvent";



const AuthenticatedRoute = ({authenticated, ...props}) =>
        authenticated
        ? <Route {...props}/>
        : <Redirect to="/LoginPage"/>;




class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: null,
          displayName: null,
          userID: null,
          email: null,
          sideDrawerOpen: false,
          conscent: true

      };
      this.drawerClickHandler = this.drawerClickHandler.bind(this);
      this.backDropClickHandler = this.backDropClickHandler.bind(this);



  }




    drawerClickHandler = () => {
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
                    authenticated: true,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid,
                    email: FBUser.email
                    });


                const myEventsRef = firebase.database().ref('userEvents/' + FBUser.uid).limitToFirst(4);

                myEventsRef.on('value', snapshot =>  {

                    let events = snapshot.val();
                    let eventList = [];

                    for(let item in events) {
                        eventList.push({
                            eventID: item,
                            eventName: events[item].eventName,
                            eventType: events[item].eventType,
                            maxParticipants: events[item].maxParticipants,
                            description: events[item].description
                        });
                    }

                    this.setState({
                        events: eventList,
                        howManyEvents: eventList.length
                    })
                });

                const myJoinedRef = firebase.database().ref(`joinedEvents/${FBUser.uid}/`).limitToFirst(4);

                myJoinedRef.on('value', snapshot =>  {

                    let joinedE = snapshot.val();
                    let joinedEList = [];

                    for(let item in joinedE) {
                        joinedEList.push({
                            eventID: item,
                            eventName: joinedE[item].eventName,
                            eventType: joinedE[item].eventType,
                            maxParticipants: joinedE[item].maxParticipants,
                            description: joinedE[item].description
                        });
                    }

                    this.setState({
                        joinedE: joinedEList,
                        howManyJoinedE: joinedEList.length
                    })
                });



                const eventsCoffeeRef   = firebase.database().ref('events').orderByChild('eventType').equalTo('kaffetreff').limitToFirst(4);

                eventsCoffeeRef.on('value', snapshot => {
                    let coffee = snapshot.val();
                    let coffeeList = [];

                    for (let item in coffee) {
                        coffeeList.push({
                            eventID: item,
                            eventName: coffee[item].eventName,
                            eventType: coffee[item].eventType,
                            maxParticipants: coffee[item].maxParticipants,
                            description: coffee[item].description
                        });

                    }
                        this.setState({
                        coffee: coffeeList,
                        howManyCoffee: coffeeList.length
                    })
                });

                const eventsStudyRef = firebase.database().ref('events').orderByChild('eventType').equalTo('studiegrupper').limitToFirst(4);

                eventsStudyRef.on('value', snapshot => {
                    let study = snapshot.val();
                    let studyList = [];

                    for (let item in study) {
                        studyList.push({
                            eventID: item,
                            eventName: study[item].eventName,
                            eventType: study[item].eventType,
                            maxParticipants: study[item].maxParticipants,
                            description: study[item].description,
                            participants: []
                        })
                    }
                    this.setState({
                        study: studyList,
                        howManyStudy: studyList.length
                    })
                });

                const eventsFoodRef = firebase.database().ref('events').orderByChild('eventType').equalTo('Mat&Prat').limitToFirst(4);

                eventsFoodRef.on('value', snapshot => {
                    let food = snapshot.val();
                    let foodList = [];

                    for (let item in food) {
                        foodList.push({
                            eventID: item,
                            eventName: food[item].eventName,
                            eventType: food[item].eventType,
                            maxParticipants: food[item].maxParticipants,
                            description: food[item].description
                        })
                    }
                    this.setState({
                        food: foodList,
                        howManyFood: foodList.length
                    })
                });

                const eventsTurRef = firebase.database().ref('events').orderByChild('eventType').equalTo('ut på tur').limitToFirst(4);

                eventsTurRef.on('value', snapshot =>{
                    let tur = snapshot.val();
                    let turList = [];

                    for (let item in tur) {
                        turList.push({
                            eventID: item,
                            eventName: tur[item].eventName,
                            eventType: tur[item].eventType,
                            maxParticipants: tur[item].maxParticipants,
                            description: tur[item].description
                        })
                    }
                    this.setState({
                        tur: turList,
                        howManyTur: turList.length
                    })
                });

                const eventsfRef = firebase.database().ref('events').orderByChild('eventType').equalTo('Fysisk aktivitet').limitToFirst(4);

                eventsfRef.on('value', snapshot => {
                    let f = snapshot.val();
                    let fList = [];

                    for (let item in f) {
                        fList.push({
                            eventID: item,
                            eventName: f[item].eventName,
                            eventType: f[item].eventType,
                            maxParticipants: f[item].maxParticipants,
                            description: f[item].description
                        })
                    }
                    this.setState({
                        f: fList,
                        howManyF: fList.length
                    })
                })

            } else {
                this.setState({user:null, authentication: false});
            }
        });
    }




    userConscent = conscent => {






    };


    registerUser = (userName) => {
        firebase.auth().onAuthStateChanged(FBUser => {
            FBUser.updateProfile({
                displayName: userName
            }).then(()=>{
                this.setState({
                    user: FBUser,
                    displayName: FBUser.displayName,
                    userID: FBUser.uid
                });
                window.location = '/home'

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
            window.location = '/';
        })
    };

    addEvent = eventInfo => {
        const allEventsRef = firebase.database().ref(`events/`);
        const ref = firebase.database().ref(`userEvents/${this.state.user.uid}/`);
        ref.push({eventName: eventInfo.eventName, eventType: eventInfo.eventType, startDate: eventInfo.startDate, endDate: eventInfo.endDate, lastDate: eventInfo.lastDate, maxParticipants: eventInfo.maxParticipants, description: eventInfo.description});
        console.log('opprettet MYID bruker events');
        allEventsRef.push({userID: this.state.user.uid, eventName: eventInfo.eventName, eventType: eventInfo.eventType, startDate: eventInfo.startDate, endDate: eventInfo.endDate, lastDate: eventInfo.lastDate, maxParticipants: eventInfo.maxParticipants, description: eventInfo.description});
        console.log('oprettet felles events ');
        window.location = '/eventCreated'

    };





    render() {



        let sideDrawer;
        let backdrop;
        let header = <Header userName={this.state.displayName} drawerClickHandler={this.drawerClickHandler}/>;
        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer drawerClickHandler={this.drawerClickHandler} logOutUser={this.logOutUser}/>;
            backdrop = <Backdrop click={this.backDropClickHandler}/>;
        }
        if (window.location.pathname === '/') {
            return <LoginPage/>;
        }
        if (window.location.pathname === '/StartPage') {
            return <StartPage/>;
        }
        if (window.location.pathname === '/OpprettetEvent') {
            return <OpprettetEvent/>;
        }
        if (window.location.pathname === '/SignupPage') {
            return <SignupPage registerUser={this.registerUser}/>;
        }




        else return (


            <div style={{height: '100%'}}>

                <BrowserRouter>

                    {sideDrawer}
                    {backdrop}
                    {header}




                        <Switch>

                            <Route exact path="/home" authenticated={this.state.authenticated} component={Home}/>

                    

                            <Route exact path="/ProfilePage" render={(props)=> <ProfilePage {...props} userName={this.state.displayName} email={this.state.email} user={this.state.user} userID={this.state.userID}/>}/>
                            <Route exact path="/" render={(props)=><LoginPage {...props} logOutUser={this.logOutUser}/>}/>
                            <Route exact path="/SignupPage"  render={ (props) => <SignupPage {...props} registerUser={this.registerUser} addUser={this.addUser} userID={this.state.userID}  />}/>
                            <Route exact path="/RegisterEventPage" render={ (props) =><RegisterEventPage {...props} addEvent={this.addEvent}/>}/>
                            <Route exact path="/events" user={this.state.user} component={Events}/>
                            <Route exact path="/myEvents" render={(props) => <MyEvents {...props} events={this.state.events} userID={this.state.userID}  joinedE={this.state.joinedE}/>}/>
                            <Route exact path="/FindEvents" render={ (props) => <FindEvents {...props}  events={this.state.events} coffee={this.state.coffee} userID={this.state.userID}/>}/>
                            <Route exact path='/outOnTrip' render={(props) => <OutOnTripEvent {...props} tur={this.state.tur} userID={this.state.userID}/>}/>
                            <Route exact path='/activity' render={(props) => <ActivityEvent {...props} f={this.state.f} userID={this.state.userID}/>}/>
                            <Route exact path='/foodEvent' render={(props) => <FoodTalkEvent {...props} food={this.state.food} userID={this.state.userID} />}/>
                            <Route exact path='/studyGroup' render={(props) => <StudyGroupEvent {...props} study={this.state.study} userID={this.state.userID}/>}/>
                            <Route exact path="/StartPage" user={this.state.user} component={StartPage}/>
                            <Route exact path="/About" user={this.state.user} component={About}/>
                            <Route exact path="/EventView" render={(props) => <EventView {...props} events={this.state.events} coffee={this.state.coffee}
                                                                                         tur={this.state.tur} f={this.state.f} food={this.state.food} study={this.state.study} userID={this.state.userID} />}/>
                            <Route exact path="/Cookies" user={this.state.user} component={Cookies}/>
                            <Route exact path="joinedEvent"/>
                            <Route exact path="/Privacy" user={this.state.user} component={Privacy}/>
                            <Route exact path="/eventCreated" render={(props) => <OpprettetEvent {...props}/>}/>
                            {/* <Route exact path="/OpprettetEvent" user={this.state.user} component={OpprettetEvent}/> */}
                            <Route component={notFound}/>

                        </Switch>
                </BrowserRouter>

            </div>
        );
    }

}

export default App;

