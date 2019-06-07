import React, {Component} from 'react';
import DrawerToggleButton from '../DrawerToggleButton';
import {Link} from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.png';


class Header extends Component {
    constructor(props){
        super(props)

    }
    render() {

        const {user, userName} = this.props;

        console.log(this.props);
        return (
            <header className="main_toolbar">
                <nav className="toolbar_navigation">
                    
                <div className="toolbar_logo"><Link to="/">
                        <img className='logo' src={logo} alt="Logo icon" /></Link></div>
                    <div className="spacer"></div>

                    <div className="username-tag">
                        <span className="username-txt">
                          Hei {userName}!
                        </span>

                    </div>


                    <div>
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                 
                </nav>
            </header>
        );
    }
}

export default Header;