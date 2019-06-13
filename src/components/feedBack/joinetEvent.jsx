import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './feedBack.css';
import Footer from "../footer/Footer";





import happyPeng from '../../images/happyPeng.png';


class JoinetEvent extends Component {
    constructor(props) {
        super(props);

     
    }

  

    render() {



        return (

            <div className="mainContainer">
                {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
                <header className='feedBackHeader'>
                    <p className="feedBackMessage">Du har nå joinet eventet! </p>

                    <Link to="/">
                            <button className='btn-ok'><p className='btnP'>Ok!</p>
                            </button>
                         </Link>
                </header>
                <div className="wrapperContent">


                <img className="happyPeng" src={happyPeng} alt="happy penguin"/>

                

                   

                </div>


                <Footer/>

            </div>
        )
    }
}

export default JoinetEvent