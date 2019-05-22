import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Header.css';


class Header extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/LoginPage">Login</Link>
                    </li>
                    <li>
                        <Link to="/SignupPage">Registrer Bruker</Link>
                    </li>
                    <li>
                        <Link to="/RegisterEventPage">registerer event</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;