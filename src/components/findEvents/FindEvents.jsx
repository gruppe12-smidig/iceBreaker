import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';
import '../events/EventsList.css';
import './FindEvents.css';
import Footer from "../footer/Footer";
import maxParticipants from "../NewEvent/RegisterEventPage"
import tea from '../../images/tea.png';


import calender from '../../images/kalender-white.png';
import EventsList from "../events/EventsList";
import {Link} from "react-router-dom";
import Events from "../events/Events";



class FindEvents extends Component {
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

            <header className='eventPagesHeader'>

                    <section>
                        <button className="back-btn" onClick={this.routeChange}>
                            <FaArrowLeft/>
                        </button>
                    </section>
                    <img className="genreImg" src={tea} alt="tea"/>
                    <h2 className='subHeader'> Kaffetreff </h2>

         
            </header>
       

            {/*Render of event components from DB  */}
            <ul className='eventContainer'>

                <li>
             
                        {this.props.coffee && this.props.coffee.length ? (
                            <div>

                                <ul className='eventsList'>

                                    <li className='eventBox'> <EventsList coffee = {this.props.coffee} joinEvent={this.props.joinEvent}/> </li>

                                </ul>

                            </div>


                        ): null }

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



