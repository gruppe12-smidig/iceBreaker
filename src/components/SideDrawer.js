import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';

class SideDrawer extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: null,
            sideDrawerOpen: false
        };


    }


    render() {
        return (
            <navlink className="side-drawer">
                <ul>
                    <Link to="/" onClick={{sideDrawerOpen: false}}>Home</Link>
                    <li><Link to="/LoginPage" onClick={{sideDrawerOpen: false}}>Login Page</Link></li>
                    <li><Link to="/SignupPage" onClick={{sideDrawerOpen: false}}>Sign up</Link></li>
                    <li><Link to="/RegisterEventPage" onClick={{sideDrawerOpen: false}}>New event</Link></li>
                    <li><Link to="/Events" onClick={{sideDrawerOpen: false}}>Events</Link></li>
                    <li><Link to="/StartPage" onClick={{sideDrawerOpen: false}}>Startpage TEMPORARY</Link></li>
                </ul>
            </navlink>
        );
    }
}
export default SideDrawer;