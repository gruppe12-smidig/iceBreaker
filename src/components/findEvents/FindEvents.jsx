import React, { Component } from 'react';
import './FindEvents.css';
import Footer from "../footer/Footer";
import Header from '../header/Header';


import calender from '../../images/kalender-white.png';



class FindEvents extends Component {
    state = {

    }


    render() {

        return (

         <div>
                    <div className="mainContainer">

                        <div className='findEventsContainer'>
                        <h2 className='subHeader' > Genre-navn</h2>

                        <div className='eventContainer'>

                         
                                {/*Render of event components from DB  */}
                                <ul>

                                    <li className='eventBox'>
                                        <div className="testEvent"></div></li>
                                    <li className='eventBox'><div className="testEvent"></div></li>
                                    <li className='eventBox'><div className="testEvent"></div></li>

                                </ul>

                                <a href="/RegisterEventPage"><button className='btn'> 
                                 <p>Opprett ny</p> <img className="calender" src={calender} alt="boot"/></button></a> 

                        

                        </div>

                        </div>
                    </div>

            <Footer/> 

            </div>     
        )
    }
}

export default FindEvents;
