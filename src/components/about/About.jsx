import React, {Component} from 'react';
import './About.css'
import Footer from '../footer/Footer.jsx'
import Header from "../App";

class About extends Component {
    render() {
        return (
            <div>
                <Header drawerClickHandler={this.drawerToggleClickHandler}/>
                <h1>OM OSS</h1>
                <Footer />

            </div>
        );
    }
}

export default About;