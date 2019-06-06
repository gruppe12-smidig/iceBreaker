import React, {Component} from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import './SideDrawer.css';
import firebase from './firebase/Firebase'
import DrawerToggleButton from './DrawerToggleButton';

class SideDrawer extends Component {

    constructor(props){
        super(props);

    }



    render() {

        return (
            
            <div className="side-drawer">
              
                <ul>
                    <li><Link to="/" onClick={this.props.drawerClickHandler}>Home</Link></li>
                    <li><Link to="/LoginPage" onClick={this.props.drawerClickHandler} >Login Page</Link></li>
                    <li><Link to="/SignupPage" onClick={this.props.drawerClickHandler}>Sign up</Link></li>
                    <li><Link to="/RegisterEventPage" onClick={this.props.drawerClickHandler}>New event</Link></li>
                    <li><Link to="/Events" onClick={this.props.drawerClickHandler}>Events</Link></li>
                    <li><Link to="/StartPage" onClick={this.props.drawerClickHandler}>Startpage TEMPORARY</Link></li>
                    <li><Link to="/LoginPage" onClick={this.props.logOutUser}>Sign out</Link></li>
                </ul>

            </div>
        );
    }
}
export default SideDrawer;