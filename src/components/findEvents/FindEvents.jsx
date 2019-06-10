import React, { Component } from 'react';
import './FindEvents.css';
import Footer from "../footer/Footer";
import maxParticipants from "../NewEvent/RegisterEventPage"


import calender from '../../images/kalender-white.png';
import EventsList from "../events/EventsList";



class FindEvents extends Component {
    state = {
        errorMessage: null

    };

    maxParts = () => {
        let maxParts = maxParticipants;
        if (maxParts) {
            this.setState({errorMessage: 'Event is full'});
        }
    };


    render() {



            return (

                <div className="mainContainer">
            {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
        <div className="wrapperContent">


            <h2 className='subHeader'> Genre-navn</h2>


            {/*Render of event components from DB  */}
            <ul className='eventContainer'>

                <li className='eventBox'>
                    <div className="testEvent">
                        {this.props.coffee && this.props.coffee.length ? (
                            <div>

                                <ul className='myEventsList'>

                                    <li className="eventBox"> <EventsList coffeeEvents= {this.props.coffee}/> </li>

                                </ul>

                            </div>


                        ): null }

                    </div>
                </li>

                <li className='eventBox'>
                    <div className="testEvent"></div>
                </li>
                <li className='eventBox'>
                    <div className="testEvent"></div>
                </li>

            </ul>


            <a href="/RegisterEventPage">
                <button className='btn'>
                    <p>Opprett ny</p> <img className="calender" src={calender} alt="boot"/></button>
            </a>

        </div>


        <Footer/>

        </div>
            )
        }
}

export default FindEvents;
