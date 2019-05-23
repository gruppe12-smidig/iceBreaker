import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Header.css';


class Header extends Component {
    render() {
        return(
            <div className="HeaderContainer">
                <ul className="HeaderContainer_links">
                    <li className="HeaderLink">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="HeaderLink">
                        <Link to="/LoginPage">Login</Link>
                    </li>
                    <li className="HeaderLink">
                        <Link to="/SignupPage">Registrer Bruker</Link>
                    </li>
                    <li className="HeaderLink">
                        <Link to="/RegisterEventPage">registerer event</Link>
                    </li>
                    <li class="EventsLink">
                        <Link to="/Events">Arrangementer</Link>
                        </li>
                </ul>
            </div>
        )
    }
}

export default Header;