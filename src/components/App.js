import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import './Header.css'
import SideDrawer from "./SideDrawer";
import Header from './Header'
import Backdrop from './Backdrop'
import Home from "./Home";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import RegisterEventPage from "./RegisterEventPage";
import Switch from "react-router-dom/es/Switch";


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
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
