import React, {Component} from 'react';
import {Redirect} from "react-router";
import firebase from '../firebase/Firebase';
import {GoTrashcan} from "react-icons/go";
import {IoIosAddCircleOutline} from 'react-icons/io';

import '../myEvents/MyEvents.css';
import './EventsList.css';

import gym from '../../images/gym.png';
import notFound from "../notFound/NotFound";
import floePeng from "../../images/floePeng.png";
import peng from "../../images/penguin.png";

import tea from '../../images/tea.png';
import boot from '../../images/boot.png';
import cutlery from '../../images/cutlery.png';
import studying from '../../images/studying.png';
import calender from '../../images/kalender-white.png';
import Footer from "../footer/Footer";



class EventsList extends Component {


    constructor(props){
        super(props);
        this.state={
            eventID: '',
            eventName: '',
            eventType: '',
            maxParticipants: '',
            description: '',
            howManyParticipants: '',
            participantID: '',
            displayEventButton: true
        };
        this.deleteEvent = this.deleteEvent.bind(this);
        this.joinEvent = this.joinEvent.bind(this);
     
    }

    componentDidMount() {





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
        let user = firebase.auth().currentUser;
        const eventRef = firebase.database().ref(`events/${whichEvent}`);
        let howManyPart = firebase.database().ref(`events/${whichEvent}/participants`);
        let maxPartRef = eventRef.child('maxParticipants');
        let maxRef = '';

        maxPartRef.on('value', snapshot => {
            maxRef =  snapshot.val();
        });

        eventRef.on('value', snapshot  =>{
           let clickedEvent = snapshot.val();
           let clickedEventList = [];

           for(let item in clickedEvent){
               clickedEventList.push({
                   eventID: item,
                   eventName: clickedEvent[item].eventName,
                   eventType: clickedEvent[item].eventType,
                   maxParticipants: clickedEvent[item].maxParticipants,
                   description: clickedEvent[item].description
               });
           }
            this.setState({
                clickedEvent: clickedEventList
            });
            console.log('listen fra innsiden:' + clickedEvent.eventName);

            const joinedEventsRef = firebase.database().ref(`joinedEvents/${user.uid}/`);
            joinedEventsRef.push({eventName: clickedEvent.eventName, eventType: clickedEvent.eventType})
        });

        howManyPart.on('value', snapshot => {
            let part = snapshot.val();
            let partList = [];

            for (let item in part) {
                partList.push({
                    pObject: item,
                    partName: part[item].deltager,
                    participantID: part[item].ID
                })
            }
            this.setState({
                part: partList,
                howManyParticipants: partList.length,

            })
        });

        if(this.state.howManyParticipants < maxRef ){
        eventRef.child(`participants`).push({
            deltager: user.displayName,
            ID: user.uid
        });

            this.setState({
                displayEventButton: true
            });


        }

        else {

            this.setState({
                displayEventButton: false,


            });


            console.log('full booket');
            console.log('antall som deltar: '+ this.state.howManyParticipants);
            console.log('hvor mange er lov: ' + maxRef);
            console.log('part ID: ' + this.state.participantID);
            console.log(user.uid);
        }
    };




    render() {

        const {coffee, events} = this.props;

     if(window.location.pathname === '/myEvents') {
         const {events} = this.props;
         const userEvents = events.map(item => {

             return (
                 <div className="list-item" key={item.eventID}>

                  

                     <section className="event-info" onClick={<div>this.displayEventView</div>} role="group">
                         <ul>
                             <li className='headerEventBox'>  {item.eventName}</li>
                             <li className='pEventBox'> <b>Kategori:</b> {item.eventType}</li>
                             <li className='pEventBox'> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li className='pEventBox'> <b>Beskrivelse:</b> {item.description}</li>
                         </ul>
                     </section>

        

                     <section className="btn-group-del" role="group">
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
             )
         });

         return <div>{userEvents}</div>

     }


    else  if(window.location.pathname === '/FindEvents'){
         const {coffee} = this.props;

       const coffeeEvents = coffee.map(item => {
            return (
                 <div className="list-item" key={item.eventID}>

                    <img className="eventIconImg" src={tea} alt="teacup"/>
                     <section className="event-info" role="group">
                         <ul>
                         <li className='headerEventBox'>  {item.eventName}</li>
                             <li className='pEventBox'> <b>Kategori:</b> {item.eventType}</li>
                             <li className='pEventBox'> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li className='pEventBox'> <b>Beskrivelse:</b> {item.description}</li>
                         </ul>
                     </section>

                     <section className="btn-group" role="group" style={btnGroup} >

                         <button className="joinBtn"
                                 style={joinBtn}
                                 title="join"
                                 itemID={item.eventID}
                                 onClick={e => this.joinEvent(e, item.eventID)}>
                             DELTA
                             {/* <IoIosAddCircleOutline/> */}
                         </button>

                     </section>

                 </div>
             );
         });
         return <div>{coffeeEvents}</div>
     }
     else  if(window.location.pathname === '/activity'){
         const {f} = this.props;

         const fEvents = f.map(item => {
             return (
                 <div className="list-item" key={item.eventID}>


                     <section className="event-info" role="group">
                         <ul>
                             <li className='headerEventBox'>  {item.eventName}</li>
                             <li className='pEventBox'> <b>Kategori:</b> {item.eventType}</li>
                             <li className='pEventBox'> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li className='pEventBox'> <b>Beskrivelse:</b> {item.description}</li>
                         </ul>
                     </section>

                     <section className="btn-group" role="group" style={btnGroup} >

                         <button className="joinBtn"
                                 style={joinBtn}
                                 title="join"
                                 itemID={item.eventID}
                                 onClick={e => this.joinEvent(e, item.eventID)}>
                             DELTA
                             {/* <IoIosAddCircleOutline/> */}
                         </button>

                     </section>

                 </div>
             );
         });
         return <div>{fEvents}</div>
     }

    else if(window.location.pathname === '/outOnTrip'){
         const {tur} = this.props;

         const turEvents = tur.map(item => {
             return (
                 <div className="list-item" key={item.eventID}>
                <img className="eventIconImg" src={boot} alt="boots"/>

                     <section className="event-info" role="group">
                         <ul>
                         <li className='headerEventBox'>  {item.eventName}</li>
                             <li className='pEventBox'> <b>Kategori:</b> {item.eventType}</li>
                             <li className='pEventBox'> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li className='pEventBox'> <b>Beskrivelse:</b> {item.description}</li>
                         </ul>
                     </section>

                     <section className="btn-group" role="group" style={btnGroup} >

                         <button className="joinBtn"
                                 style={joinBtn}
                                 title="join"
                                 itemID={item.eventID}
                                 onClick={e => this.joinEvent(e, item.eventID)}>
                             DELTA
                             {/* <IoIosAddCircleOutline/> */}
                         </button>

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
                     <img className="eventIconImg" src={cutlery} alt="cutlery"/>

                     <section className="event-info" role="group">
                         <ul>
                         <li className='headerEventBox'>  {item.eventName}</li>
                             <li className='pEventBox'> <b>Kategori:</b> {item.eventType}</li>
                             <li className='pEventBox'> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li className='pEventBox'> <b>Beskrivelse:</b> {item.description}</li>
                         </ul>
                     </section>

                     <section className="btn-group" role="group" style={btnGroup} >

                         <button className="joinBtn"
                                 style={joinBtn}
                                 title="join"
                                 itemID={item.eventID}
                                 onClick={e => this.joinEvent(e, item.eventID)}>
                             DELTA
                             {/* <IoIosAddCircleOutline/> */}
                         </button>

                     </section>

                 </div>
             );
         });
         return <div>{foodEvents}</div>
     }
     else if(window.location.pathname === '/studyGroup'){
         const {study, joinEvent,displayEventButton,eventIsFull } = this.props;

         const studyEvents = study.map(item => {


             return (
                 <div className="list-item" key={item.eventID}>

                <img className="eventIconImg" src={studying} alt="books"/>
                     <section className="event-info" role="group">
                         <ul>
                         <li className='headerEventBox'>  {item.eventName}</li>
                             <li className='pEventBox'> <b>Kategori:</b> {item.eventType}</li>
                             <li className='pEventBox'> <b>Maks deltagere:</b> {item.maxParticipants}</li>
                             <li className='pEventBox'> <b>Beskrivelse:</b> {item.description}</li>
                         </ul>
                     </section>

                     <section className="btn-group" role="group" style={btnGroup} >

                         <button className="joinBtn"
                                 style={joinBtn}
                                 title="join"
                                 itemID={item.eventID}
                                 onClick={e => this.joinEvent(e, item.eventID)}>
                             DELTA
                             {/* <IoIosAddCircleOutline/> */}
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

const joinBtn={

    marginLeft:'1rem',
    backgroundColor:'#F5C759',
    color:'black',
    height:'40px',
    width:'100px',
    fontSize:'1.2rem',

  
};

const btnGroup={
  
    padding:'0.5rem',
    position: 'absolute',
    right:    '0',
    bottom:   '0',
    height:'auto',

   


};