import React, { Component } from 'react';
import './Privacy.css';
import Header from '../header/Header';
import Footer from "../footer/Footer";

class Privacy extends Component {

    render() {
        return(
            <div>
                <Header/>
                <h2 className='page-header'>Personvernerklæring</h2>

                <div className='text-wrapper'>
                    <p>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Perspiciatis, aspernatur?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Qui deleniti expedita, quaerat consequuntur illo consectetur 
                    modi nesciunt sunt voluptatibus praesentium.
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Privacy;