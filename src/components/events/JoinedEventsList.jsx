import React, {Component} from 'react';
import firebase from '../firebase/Firebase';
import {Link} from "react-router-dom";

import '../myEvents/MyEvents.css';
import './EventsList.css';
import Footer from "../footer/Footer";
import penguin from '../../images/penguin.png';


class JoinedEventsList extends Component {
    constructor(props){
        super(props);
    }



    render() {

        const {coffee, events ,joinedE} = this.props;

        if(window.location.pathname === '/myEvents') {
            const {joinedE} = this.props;
            const joinedEvents = joinedE.map(item => {

                return (
                    <div className="list-item" key={item.eventID}>

                        <div className='imgWrapper'><img className="eventIcon" src={item.eventType} alt={item.eventType}/>
                        </div>

                        <section className="event-info"  role="group">
                            <ul>
                                <li className='headerEventBox'>  {item.eventName}</li>
                                <li className='pEventBox'> <b>Kategori:</b> {item.eventType}</li>
                                <li className='pEventBox'> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                                <li className='pEventBox'> <b>Beskrivelse:</b> {item.description}</li>
                            </ul>
                        </section>




                        {/* <div className='eventView'>
                        <EventView />
                  </div> */}
                    </div>
                )
            });

            return <div>{joinedEvents}</div>
        }

    }
}

export default JoinedEventsList;