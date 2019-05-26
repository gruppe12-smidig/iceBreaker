import React, {Component} from 'react';
import './SideDrawer.css'


class SideDrawer extends Component {
    render() {
        return(
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ProfilePage">Min Profil</a></li>
            <li><a href="/LoginPage">Login Page</a></li>
            <li><a href="/SignupPage">Sign up</a></li>
            <li><a href="/RegisterEventPage">New event</a></li>
            <li><a href="/Events">Events</a></li>
        </ul>
    </nav>
        );
    }
}


export default SideDrawer;