import React, {Component} from 'react';
import './Home.css';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import penguin from '../../images/penguin.png';

class Home extends Component {
    render() {
        return (
            <div>

                <div className='mainContainer'>
                 <div className='homeContainer'>
                    <div className='wrapperPenguin'>
                            <img className='frontPenguin' src={penguin} alt="Image of penguin" />
                            <img className='frontPenguin' src={penguin} alt="Image of penguin" />
                    </div>

                    <div className='greetContainer'>
                        <h3 className='greeting'>Break some Ice</h3>
                        <p>Lorem ipsum lorem lorem lorem lorem ipsum lorem lorem lorem lorem</p>
                    </div>

                    <div className='btnWrapper'>
                        
                        <a href="/Events"><button className='btn'>Finn arrangementer</button></a> 
                        <a href="/MyEvents"><button className='btn'>Mine arrangementer</button></a> 
                        <a href="/RegisterEventPage"><button className='btn'>Opprett arrangement</button></a> 
                  
                        
                    </div>

                </div>
                
                </div>
                <Footer/>
     
            </div>

        );
    }
}

export default Home;