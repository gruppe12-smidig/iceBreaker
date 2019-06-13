import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Home.css';
import Footer from "../footer/Footer";
import penguin from '../../images/penguin.png';


class Home extends Component {
    render() {
        return (
            <div>

                <div className='mainContainer'>
                 <div className='wrapperContent'>
                    <div className='wrapperPenguin'>
                            <img className='frontPenguin' src={penguin} alt=" penguin" />
                            <img className='frontPenguin' src={penguin} alt=" penguin" />
                    </div>

                    <div className='greetContainer'>
                        <h3 className='greeting'>Break some Ice</h3>
                        <p className='boldP'></p>
                    </div>

                    <div className='btnWrapper'>
                        
                        <Link to="/Events"><button className='btn'>Finn arrangementer</button></Link>
                        <Link to="/myEvents"><button className='btn'>Mine arrangementer</button></Link>
                        <Link to="/RegisterEventPage"><button className='btn'>Opprett arrangement</button></Link>
                  
                        
                    </div>

                </div>
                
                </div>
                <Footer/>
     
            </div>

        );
    }
}

export default Home;