import React, { Component } from 'react';
import {FaArrowLeft} from 'react-icons/fa';

import './FindEvents.css';
import Footer from "../footer/Footer";
import maxParticipants from "../NewEvent/RegisterEventPage"


import calender from '../../images/kalender-white.png';
import EventsList from "../events/EventsList";
import {Link} from "react-router-dom";



class StudyGroupEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: null
        };

        this.routeChange = this.routeChange.bind(this);
    }

    maxParts = () => {
        let maxParts = maxParticipants;
        if (maxParts) {
            this.setState({errorMessage: 'Event is full'});
        }
    };

    routeChange() {
        let path = '/events';
        this.props.history.push(path);
    }


    render() {



        return (

            <div className="mainContainer">
                {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
                <div className="wrapperContent">


                    <h2 className='subHeader'> Studiegrupper </h2>

                    <section>
                        <button className="back-btn" onClick={this.routeChange}>
                            <FaArrowLeft/>
                        </button>
                    </section>


                    {/*Render of event components from DB  */}
                    <ul className='eventContainer'>

                        <li className='eventBox'>
                            <div className="testEvent">
                                {this.props.study && this.props.study.length ? (
                                    <div>

                                        <ul className='myEventsList'>

                                            <li className="eventBox"> <EventsList study = {this.props.study}/> </li>

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

export default StudyGroupEvent