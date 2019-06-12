import React, {Component} from 'react';
import firebase from '../firebase/Firebase';
import {GoTrashcan} from "react-icons/go";
import {IoIosAddCircleOutline} from 'react-icons/io';

import '../myEvents/MyEvents.css';
import './EventsList.css';

import gym from '../../images/gym.png';
import matprat from '../../images/cutlery.png';
import kaffetreff from '../../images/tea.png';
import studying from '../../images/studying.png';
import notFound from "../notFound/NotFound";
import floePeng from "../../images/floePeng.png";
import peng from "../../images/penguin.png";


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

    joinEvent = (e, whichEvent) => {
        e.preventDefault();
        const eventRef = firebase.database().ref(`events/${whichEvent}`);
        eventRef.child('participants').push("lol");

    };

    displayEventView = (e, whichEvent) => {
        e.preventDefault();
        const onClickEventRef = firebase.database().ref(`events/${whichEvent}`);

        onClickEventRef.on('value', snapshot => {
            let eventView = snapshot.val();

            console.log(eventView);

            return (
                <div className="mainContainer">
                    {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
                    <div className="wrapperContent">


                        <div className='eventViewContainer' onClick={this.displayEventView}>
                            <h2 className='subHeader'> {eventView.eventName}</h2>

                            <div className='descriptionWrapper'>

                                <p className='description'> {eventView.description} </p>

                            </div>

                            <div className='infoWrapper'>

                                <div className='infoSection'>
                                    <p className='boldP'>Dato:</p>  <span> 20-02-2019 - 23-02-2019 </span>
                                </div>

                                <div className='infoSection'>
                                    <p className='boldP'>Siste påmelding:</p>  <span>20-02-2019</span>
                                </div>

                                <div className='infoSection'>
                                    <p className='boldP'>Maks deltakere:</p>
                                    <span>{eventView.maxParticipants}</span>
                                </div>

                                <div className='infoSection'>
                                    <p className='boldP'>Ansvarlig:</p>  <span>Anne Lien</span>
                                </div>

                            </div>


                            <img className='floePeng' src={floePeng} alt="penguins"/>

                        </div>

                        <div className='userContainer'>
                            <ul>
                                <li className='user'><img className='peng' src={peng} alt=" penguin"/> <span>Anne Lien</span>
                                </li>
                                <li className='user'><img className='peng' src={peng} alt=" penguin"/> <span>Per Olsen</span>
                                </li>
                                <li className='user'><img className='peng' src={peng} alt=" penguin"/> <span>Johan Berg</span>
                                </li>
                            </ul>
                        </div>


                    </div>


                </div>
            )




        });


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

                     <section className="event-info" onClick={<div>this.displayEventView</div>} role="group">
                         <ul>
                             <li className='headerEventBox'>  {item.eventName}</li>
                             <li className='pEventBox'> <b>Kategori:</b> {item.eventType}</li>
                             <li className='pEventBox'> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li className='pEventBox'> <b>Beskrivelse:</b> {item.description}</li>
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
                         <li> <b>Navn:</b> {item.eventName}</li>
                             <li> <b>Kategori:</b> {item.eventType}</li>
                             <li> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li> <b>Beskrivelse:</b> {item.description}</li>
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
                             <li> <b>Navn:</b> {item.eventName}</li>
                             <li> <b>Kategori:</b> {item.eventType}</li>
                             <li> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li> <b>Beskrivelse:</b> {item.description}</li>
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
                         <li> <b>Navn:</b> {item.eventName}</li>
                             <li> <b>Kategori:</b> {item.eventType}</li>
                             <li> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li> <b>Beskrivelse:</b> {item.description}</li>
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
                         <li> <b>Navn:</b> {item.eventName}</li>
                             <li> <b>Kategori:</b> {item.eventType}</li>
                             <li> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li> <b>Beskrivelse:</b> {item.description}</li>
                         </ul>
                     </section>

                     <section className="btn-group" role="group">
                         <button className="deleteBtn"
                                 title="join"
                                 onClick={e => this.joinEvent(e, item.eventID)}>
                             <IoIosAddCircleOutline/>
                         </button>

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