import React, {Component} from 'react';
import './SideDrawer.css'


class SideDrawer extends Component {
    render() {
        return(
    <nav className="side-drawer">
        <ul>
            <li><a href="/ProfilePage">Min Profil</a></li>
            <li><a href="/Events">Arrangementer</a></li>
            <li><a href="/myEvents">Mine Arrangementer</a></li>
            <li><a href="/">Om IceBreaker</a></li>
            <li><a href="/">Logg Ut</a></li>
        </ul>
    </nav>
        );
    }
}


export default SideDrawer;