import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css'


class SideDrawer extends Component {
    render() {
        return(
    <navlink className="side-drawer">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/LoginPage">Login Page</Link></li>
            <li><Link to="/SignupPage">Sign up</Link></li>
            <li><Link to="/RegisterEventPage">New event</Link></li>
            <li><Link to="/Events">Events</Link></li>
        </ul>
    </navlink>
        );
    }
}


export default SideDrawer;