import React, {Component} from 'react';
import firebase from '../firebase/Firebase';
import {GoTrashcan} from "react-icons/go";

import '../myEvents/MyEvents.css';
import './EventsList.css';

import gym from '../../images/gym.png';
import matprat from '../../images/cutlery.png';
import kaffetreff from '../../images/tea.png';
import studying from '../../images/studying.png';
import notFound from "../notFound/NotFound";

class EventsList extends Component {


    constructor(props){
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
     
    }

    deleteEvent = (e, whichEvent) => {
        e.preventDefault();
        const userRef = firebase.database().ref(`userEvents/${this.props.userID}/${whichEvent}`);
        const eventRef = firebase.database().ref(`events/${whichEvent}`);
        userRef.remove();
        eventRef.remove();
    };



    render() {

        const {coffee, events} = this.props;

     if(window.location.pathname === '/myEvents') {
         const {events} = this.props;
         const userEvents = events.map(item => {

             return (
                 <div className="list-item" key={item.eventID}>

                     <div className='imgWrapper'><img className="eventIcon" src={item.eventType} alt={item.eventType}/>
                     </div>

                     <section className="event-info" role="group">
                         <ul>
                             <li> Navn: {item.eventName}</li>
                             <li> Type: {item.eventType}</li>
                             <li> Maks deltagere: {item.maxParticipants}</li>
                             <li> Beskrivelse: {item.description}</li>
                         </ul>
                     </section>

        

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

    else  if(window.location.pathname === '/FindEvents'){
         const {coffee} = this.props;

       const coffeeEvents = coffee.map(item => {
            return (
                 <div className="list-item" key={item.eventID}>


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
         return <div>{coffeeEvents}</div>
     }
    else if(window.location.pathname === '/outOnTrip'){
         const {tur} = this.props;

         const turEvents = tur.map(item => {
             return (
                 <div className="list-item" key={item.eventID}>


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
         return <div>{turEvents}</div>
     }
     else if(window.location.pathname === '/foodEvent'){
         const {food} = this.props;

         const foodEvents = food.map(item => {
             return (
                 <div className="list-item" key={item.eventID}>


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
         return <div>{foodEvents}</div>
     }
     else if(window.location.pathname === '/studyGroup'){
         const {study} = this.props;

         const studyEvents = study.map(item => {
             return (
                 <div className="list-item" key={item.eventID}>


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
         return <div>{studyEvents}</div>
     }


     else return(<div>{notFound}</div>)


    }
}

let eventItemGrayed = {
    opacity:'0.4'

};


export default EventsList