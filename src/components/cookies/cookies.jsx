import React, { Component } from 'react';
import './Cookies.css';
import Header from '../header/Header';
import Footer from "../footer/Footer";

class Cookies extends Component {

    render() {
        return(
            <div className='mainContainer'>
                <Header/>
                <h2 className='pageHeader'>Informasjonskapsler</h2>

                <div className='textWrapper'>
                    <p>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Perspiciatis, aspernatur?

                    Lorem ipsum dolor sit, amet 
                    consectetur adipisicing elit. Placeat, odit!
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Cookies;