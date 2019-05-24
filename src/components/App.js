import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import './header/Header.css'
import Home from './home/home';
import LoginPage from './login/LoginPage';
import RegisterEventPage from './event/RegisterEventPage';
import SignupPage from './signup/SignupPage';
import Events from './events/Events';
import Switch from "react-router-dom/es/Switch";
import Header from "./header/Header";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";


class App extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };


    backDropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

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
                        <Route path="/loginPage" component={LoginPage}/>
                        <Route path="/SignupPage" component={SignupPage}/>
                        <Route path="/RegisterEventPage" component={RegisterEventPage}/>
                        <Route path="/Events" component={Events}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;

