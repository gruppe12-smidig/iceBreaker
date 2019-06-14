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

                    <li><Link to="/home" onClick={this.props.drawerClickHandler}>Hjem</Link></li>
                    {/* <li><Link to="/LoginPage" onClick={this.props.drawerClickHandler} >Login Page</Link></li>
                    <li><Link to="/SignupPage" onClick={this.props.drawerClickHandler}>Sign up</Link></li> */}
                    <li><Link to="/RegisterEventPage" onClick={this.props.drawerClickHandler}>Nytt arrangement</Link></li>
                    <li><Link to="/Events" onClick={this.props.drawerClickHandler}>Finn arrangmenter</Link></li>
                    <li><Link to="/myEvents" onClick={this.props.drawerClickHandler}>Mine arrangmenter</Link></li>
                    {/* <li><Link to="/StartPage" onClick={this.props.drawerClickHandler}>Startpage TEMPORARY</Link></li> */}
                    <li><Link to="/About" onClick={this.props.drawerClickHandler}>Om Icebreaker</Link></li>
                    <li><Link to="/Privacy" onClick={this.props.drawerClickHandler}>Mer om personvern</Link></li>
                    <li><Link to="/profilePage" onClick={this.props.drawerClickHandler}>Min profil</Link></li>
                    <li><Link to="/LoginPage" onclick={this.props.drawerClickHandler} onClick={this.props.logOutUser}>Logg ut</Link></li>


                </ul>


            </div>
        );
    }
}
export default SideDrawer;