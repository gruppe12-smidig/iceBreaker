import React, {Component} from 'react';
import './Home.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import penguin from '../../images/penguin.png';

class Home extends Component {
    render() {
        return (
            <div>

                <div className='homeContainer'>
                 
                    <div className='wrapperPenguin'>
                            <img className='frontPenguin' src={penguin} alt="Image of penguin" />
                            <img className='frontPenguin' src={penguin} alt="Image of penguin" />
                    </div>
                    <div className='greetContainer'>
                        <h3>Break som Ice</h3>
                        <p>Lorem ipsum lorem lorem lorem lorem ipsum lorem lorem lorem lorem</p>
                    </div>

                    <div className='btnWrapper'>
                        <button className='btn'>Finn arrangementer</button>
                        <button className='btn'>Mine arrangementer</button>
                        <button className='btn'>Opprett arrangement</button>
                        
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Home;