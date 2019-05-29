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
                    <Link to="/" onClick={{sideDrawerOpen: false}}>Hjem</Link>
                    <li><Link to="/LoginPage" onClick={{sideDrawerOpen: false}}>Påloggingsside</Link></li>
                    <li><Link to="/SignupPage" onClick={{sideDrawerOpen: false}}>Registrer deg</Link></li>
                    <li><Link to="/RegisterEventPage" onClick={{sideDrawerOpen: false}}>Nytt arrangement</Link></li>
                    <li><Link to="/Events" onClick={{sideDrawerOpen: false}}>Arrangementer</Link></li>
                    <li><Link to="/StartPage" onClick={{sideDrawerOpen: false}}>Startside TEMPORARY</Link></li>
                    <li><Link to="/Privacy" onClick={{sideDrawerOpen: false}}>Personvern</Link></li>
                    <li><Link to="/Cookies" onClick={{sideDrawerOpen: false}}>Informasjonskapsler</Link></li>
                    <li><Link to="/StartPage" onClick={{sideDrawerOpen: false}}>Logg ut</Link></li>
                </ul>
            </navlink>
        );
    }
}
export default SideDrawer;