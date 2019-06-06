import React, { Component } from 'react';
import './MyEvents.css';
import Footer from "../footer/Footer";
import EventsList from '../events/EventsList';





class MyEvents extends Component {
    state = {

    }


    render() {

        return (

         <div className='mainContainer'>
               {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
                    <div className="wrapperContent">


                        <h2 className='subHeader' >Mine arrangementer</h2>


                            <div className='adminEventsContainer'>
                                <h3 className='subHeaderMin'>Ansvarlig for</h3>
                                {/*Render of event components from DB  */}
                                <div>
                                {this.props.events && this.props.events.length ? (

                                    <ul className='myEventsList'>

                                        <EventsList events= {this.props.events}/>

                                    </ul>

                                ): null }

                                </div>

                                <div className='btnWrapper'>
                                    <a href="/RegisterEventPage"><button className='btnRounded'>Opprett ny</button></a>
                                </div>

                            </div>

                            <div className="joinedEventsContainer" >

                                <h3 className='subHeaderMin'>Oppmeldt til</h3>
                                {/*Render of event components from DB  */}
                                <ul  className='myEventsList'>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>

                                </ul>
                                <div className='btnWrapper'>
                                      <a href="/Events"><button className='btnRounded'>Finn ny</button></a> 
                                </div>
                            </div>


                
                    </div>

            <Footer/> 

            </div>     
        )
    }
}

export default MyEvents;
