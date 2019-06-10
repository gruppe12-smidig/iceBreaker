import React, {Component} from 'react';
import firebase from '../firebase/Firebase';
import {GoTrashcan} from "react-icons/go";
import EventView from "../eventView/EventView";

import '../myEvents/MyEvents.css';
import './EventsList.css';

import gym from '../../images/gym.png';
import matprat from '../../images/cutlery.png';
import kaffetreff from '../../images/tea.png';
import studying from '../../images/studying.png';

class EventsList extends Component {

    constructor(props){
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    deleteEvent = (e, whichEvent) => {
        e.preventDefault();
        const ref = firebase.database().ref(`events/${this.props.userID}/${whichEvent}`);
        ref.remove();
    };


 toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        const {events} = this.props;
        const userEvents = events.map(item => {

          return(
              <div className="list-item" key={item.eventID} >
            
                  <div className='imgWrapper'><img className="eventIcon" src={item.eventType} alt={item.eventType}/></div>

                    <section className="event-info" role="group">
                        <ul>
                            <li className='eventHeader' > <h3>{item.eventName}</h3> </li>
                            <li> Type: {item.eventType}</li>
                            <li> Maks deltagere: {item.maxParticipants}</li>
                            <li> Beskrivelse: {item.description}</li>
                        </ul>
                    </section>

                <div className='deletePop'>

                    <p className='boldP'> Are you sure you want to delete this event? </p>

                    <div className='wrapperBtns'>
                        <button className="eventBtn" 
                              title="Delete Event"
                              onClick={e => this.deleteEvent(e, item.eventID)}> YES
                         </button> 
                         
                         <button className="eventBtn"> No </button>
                    </div>
           
            </div>
                  <section className="btn-group" role="group">
                      <button className="deleteBtn"
                              title="Delete Event"
                              onClick={e => this.deleteEvent(e, item.eventID)}>
                          <GoTrashcan/>
                      </button>
                  </section>
                  
                  {/* <div className='eventView'>
                        <EventView />
                  </div> */}
              </div>
          );
        });

        return <div>{userEvents}</div>
    }
}

var eventItemGrayed = {
    opacity:'0.4'

}

export default EventsList