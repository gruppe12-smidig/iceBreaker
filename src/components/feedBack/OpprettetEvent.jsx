import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './feedBack.css';
import Footer from "../footer/Footer";





import studying from '../../images/studying.png';


class OpprettetEvent extends Component {
    constructor(props) {
        super(props);

     
    }

  

    render() {



        return (

            <div className="mainContainer">
                {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
                <header className='profileHeader'></header>
                <div className="wrapperContent">




                

                   

                </div>


                <Footer/>

            </div>
        )
    }
}

export default OpprettetEvent