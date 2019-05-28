import React, { Component } from 'react';
import './Privacy.css';
import Header from '../header/Header';
import Footer from "../footer/Footer";

class Privacy extends Component {

    render() {
        return(
            <div className='mainContainer'>
                <Header/>
                <h2 className='pageHeader'>Personvernerklæring</h2>

                <div className='textWrapper'>
                    <p className='ingress'>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Perspiciatis, aspernatur?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Qui deleniti expedita, quaerat consequuntur illo consectetur 
                    modi nesciunt sunt voluptatibus praesentium.
                    </p>
                    <p className='mainArticle'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dolor repellendus quas aliquid adipisci perspiciatis unde quos doloribus 
                        dignissimos quae, veritatis voluptas rem magnam. Neque, aliquid vel? 
                        Non, consectetur! Saepe mollitia officiis sit eaque earum perspiciatis 
                        ipsum quibusdam! Quos eos iste sint sapiente nobis autem sequi provident quidem harum id! Voluptates?
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Privacy;