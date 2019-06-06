import React, {Component} from 'react';
import firebase from '../firebase/Firebase';
import {GoTrashcan} from "react-icons/go";

import '../myEvents/MyEvents.css';
import './EventsList.css';

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


    render() {
        const {events} = this.props;
        const userEvents = events.map(item => {

          return(
              <div className="list-item" key={item.eventID}>

                  <section className="btn-group" role="group">
                      <button className="delete-btn"
                              title="Delete Event"
                              onClick={e => this.deleteEvent(e, item.eventID)}>
                          <GoTrashcan/>
                      </button>
                  </section>

                    <section className="event-info" role="group">
                        <ul>
                            <li> Navn: {item.eventName}</li>
                            <li> Type: {item.eventType}</li>
                            <li> Maks deltagere: {item.maxParticipants}</li>
                            <li> Beskrivelse: {item.description}</li>
                        </ul>
                    </section>
              </div>
          );
        });

        return <div>{userEvents}</div>
    }
}

export default EventsList