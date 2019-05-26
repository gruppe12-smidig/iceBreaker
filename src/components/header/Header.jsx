import React, {Component} from 'react';
import DrawerToggleButton from '../DrawerToggleButton';
import './Header.css';
import logo from '../../images/logo.png';

class Header extends Component {
    render() {
        return (

            <header className="main_toolbar">
                <nav className="toolbar_navigation">
                    
                <div className="toolbar_logo"><a href="/"> 
                        <img className='logo' src={logo} alt="Logo icon" /></a></div>
                    <div className="spacer"></div>
                    <div>
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                 
                </nav>
            </header>
        );
    }
}

export default Header;