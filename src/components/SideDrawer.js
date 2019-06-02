import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';
import firebase from './firebase/Firebase'

class SideDrawer extends Component {

    constructor(props){
        super(props);
        this.state = {
            sideDrawOpen: false
        };


    }

    render() {

        const {user,logOutUser} = this.props;


        return (
            <div className="side-drawer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/LoginPage" >Login Page</Link></li>
                    <li><Link to="/SignupPage">Sign up</Link></li>
                    <li><Link to="/RegisterEventPage">New event</Link></li>
                    <li><Link to="/Events">Events</Link></li>
                    <li><Link to="/StartPage">Startpage TEMPORARY</Link></li>
                    <li><Link to="/LoginPage" onClick={e => logOutUser(e)}>Sign out</Link></li>
                </ul>
            </div>
        );
    }
}
export default SideDrawer;