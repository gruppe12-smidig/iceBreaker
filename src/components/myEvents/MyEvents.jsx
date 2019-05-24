import React, { Component } from 'react';
import './MyEvents.css';
import Footer from "../footer/Footer";
import Header from '../header/Header';





class MyEvents extends Component {
    state = {

    }


    render() {

        return (

         <div>
                    <div className="mainContainer">


                        <h2 className='subHeader' >Mine arrangementer</h2>

                        <div className='eventContainer'>

                            <div className='adminEventsContainer'>
                                <h3 className='subHeader'>Ansvarlig for</h3>
                                {/*Render of event components from DB  */}
                                <ul>

                                    <li className='eventBox'><div className="testEvent"></div></li>
                                    <li className='eventBox'><div className="testEvent"></div></li>
                                    <li className='eventBox'><div className="testEvent"></div></li>

                                </ul>

                                <a href="/RegisterEventPage"><button className='btn'>Opprett ny</button></a> 

                            </div>

                            <div className="joinedEventsContainer" >

                                <h3 className='subHeader'>Oppmeldt til</h3>
                                {/*Render of event components from DB  */}
                                <ul>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>

                                </ul>

                                <a href="/Events"><button className='btn'>Finn ny</button></a> 

                            </div>






                        </div>

                
                    </div>

            <Footer/> 

            </div>     
        )
    }
}

export default MyEvents;
