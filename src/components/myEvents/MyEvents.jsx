import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './MyEvents.css';
import Footer from "../footer/Footer";
import EventsList from '../events/EventsList';
import JoinedEventsList from "../events/JoinedEventsList";





class MyEvents extends Component {
    state = {

    };


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

                                        <li className="eventBox"> <EventsList userID={this.props.userID} events= {this.props.events}/> </li>

                                    </ul>

                                ): null }

                                </div>

                                <div className='btnWrapper'>
                                    <Link to="/RegisterEventPage"><button className='btnRounded'>Opprett ny</button></Link>
                                </div>

                            </div>

                            <div className="joinedEventsContainer" >

                                <h3 className='subHeaderMin'>Oppmeldt til</h3>

                                {this.props.joinedE && this.props.joinedE.length ? (

                                    <ul  className='myEventsList'>

                                        <li className='eventBox'><JoinedEventsList userID={this.props.userID} joinedE={this.props.joinedE}/></li>

                                    </ul>
                                ): null }


                                {/*Render of event components from DB  */}

                                <div className='btnWrapper'>
                                      <Link to="/Events"><button className='btnRounded'>Finn ny</button></Link>
                                </div>
                            </div>


                
                    </div>

            <Footer/> 

            </div>     
        )
    }
}

export default MyEvents;
