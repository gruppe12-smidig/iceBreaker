import React, { Component } from 'react';
import './EventView.css';
import Footer from "../footer/Footer";
import Header from '../header/Header';


import calender from '../../images/kalender-white.png';



class EventView extends Component {
    state = {

    }


    render() {

        return (

         <div>
                    <div className="mainContainer">

                        <div className='eventViewContainer'>
                        <h2 className='subHeader' > Navn på Arr</h2>

                    <div className='descriptionWrapper'>

                            <p className='description'>«Jeg vil gjerne finne noen å sitte sammen med
                                å øve til programeringeksamen, har mine styrker og svakheter
                                    så håper vi kan hjelpe hverandre »</p>

                    </div>

                    <div className='infoWrapper'>

                                    <p className='boldP'>Dato:</p>  <span ></span>     
                                    <p className='boldP'>Siste påmelding:</p>  <span></span>    
                                    <p className='boldP'>Maks deltakere:</p>  <span></span>     
                                    <p className='boldP'>Ansvarlig:</p>  <span></span>    

                    </div>
 



                        </div>
                    </div>

            <Footer/> 

            </div>     
        )
    }
}

export default EventView;
