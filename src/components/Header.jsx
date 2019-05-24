import React, {Component} from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import './Header.css';

class Header extends Component {
    render() {
        return (

            <header className="main_toolbar">
                <nav className="toolbar_navigation">
                    <div>
                        <DrawerToggleButton click={this.props.drawerClickHandler}/>
                    </div>
                    <div className="toolbar_logo"><a href="/">IceBreaker</a></div>
                    <div className="spacer"></div>
                </nav>
            </header>
        );
    }
}

export default Header;