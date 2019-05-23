import React, { Component } from 'react';
import './Cookies.css';
import Header from './Header';
import Footer from "./Footer";

class Cookies extends Component {

    render() {
        return(
            <div>
                <Header/>
                <h2 className='page-header'>Informasjonskapsler</h2>

                <div className='text-wrapper'>
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