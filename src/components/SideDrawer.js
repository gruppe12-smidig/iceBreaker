import React, {Component} from 'react';
import './SideDrawer.css'


class SideDrawer extends Component {
    render() {
        return(
    <nav className="side-drawer">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/LoginPage">Login Page</a></li>
            <li><a href="/SignupPage">Register Page</a></li>
            <li><a href="/RegisterEventPage">Register Event Page</a></li>
        </ul>
    </nav>
        );
    }
}


export default SideDrawer;