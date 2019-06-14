import React, { Component } from 'react';
import firebase from "../firebase/Firebase";

import PasswordMask from 'react-password-mask';

import './EventView.css';
import Footer from "../footer/Footer";
import floePeng from '../../images/floePeng.png';
import peng from '../../images/penguin.png';





class EventView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatHidden: true,
            isFull: false,
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    signUp() {
     
        console.log("You are signed up, because the group was not full!");
        console.log(this.state.isFull);
    
    }

    displayEventView = (e, whichEvent) => {
        const eventRef = firebase.database().ref(`events/${whichEvent}`);

        if(eventRef) {

            return(
                <div>



                </div>
            )
        }
    };


    render() {

        return (

            <div className="mainContainer">
                {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
                <div className="wrapperContent">


                    <div className='eventViewContainer'>
                        <h2 className='subHeader' > Kontegrupp 2</h2>

                        <div className='descriptionWrapper'>

                            <p className='description'>«Jeg vil gjerne finne noen å sitte sammen med
                                å øve til programeringeksamen, har mine styrker og svakheter
                                    så håper vi kan hjelpe hverandre »</p>

                        </div>

                        <div className='infoWrapper'>

                            <div className='infoSection'>
                                <p className='boldP'>Dato:</p>  <span > 20-02-2019 - 23-02-2019 </span>
                            </div>

                            <div className='infoSection'>
                                <p className='boldP'>Siste påmelding:</p>  <span>20-02-2019</span>
                            </div>

                            <div className='infoSection'>
                                <p className='boldP'>Maks deltakere:</p>  <span>4</span>
                            </div>

                            <div className='infoSection'>
                                <p className='boldP'>Ansvarlig:</p>  <span>Anne Lien</span>
                            </div>

                        </div>


                        <img className='floePeng' src={floePeng} alt="penguins" />

                    </div>

                    <div className='userContainer'>
                        <ul>
                            <li className='user'> <img className='peng' src={peng} alt=" penguin" /> <span>Anne Lien</span>   </li>
                            <li className='user'> <img className='peng' src={peng} alt=" penguin" /> <span>Per Olsen</span>  </li>
                            <li className='user'> <img className='peng' src={peng} alt=" penguin" /> <span>Johan Berg</span>  </li>
                        </ul>
                    </div>

                    <div className='chatArea'>    {!this.state.chatHidden && <ChatArea />} </div>

                    <div >    {this.state.isFull && <EventFull />} </div>

                {/* Button that is disabled when full and hidden when the user allready is asigned up */}
                    <button disabled={this.state.isFull} onClick={this.signUp.bind(this)}>Sign up</button>
                  
                </div>

    

            </div>
        )
    }
}
const EventFull = () => (
    <div className='fullMessage'>

                <p className='boldP'>Eventet er desverre fullt! </p>
                <p>Vent og se hvis det blir en ledig plass eller hvorfor ikke skape et du og!</p>

    </div>
)
// section only viewd when the user is sign up to an event **** TO DO ****
const ChatArea = () => (
    <div className='chatArea'>
        <div className='chatContainer'>

            <div className='post'>

                <div className='wrapperUserIcon'>
                    <div className='userIcon'></div>
                </div>

                <div className='wrapperMessage'>
                    <p className='message'>«Hei folkens! Har dere startet, hvor møtes vi?»</p>
                </div>


            </div>


            <div className='post'>

                <div className='wrapperUserIcon'>
                    <div className='userIcon'></div>
                </div>

                <div className='wrapperMessage'>
                    <p className='message'>«Hei folkens! Har dere startet, hvor møtes vi?»</p>
                </div>


            </div>


            <div className='post'>

                <div className='wrapperUserIcon'>
                    <div className='userIcon'></div>
                </div>

                <div className='wrapperMessage'>
                    <p className='message'>«Halo! Jeg sitter på Fjerdingen i morgen Onsdag fra 13:00. Dere kan kontakte meg på 4055789»</p>
                </div>


            </div>

            <div className='post'>

                <div className='wrapperUserIcon'>
                    <div className='userIcon'></div>
                </div>

                <div className='wrapperMessage'>

                </div>

            </div>



        </div>

        <div className='chatFormWrapper'>

            <div className='chatForm'></div>
             <div className='chatBtn'></div> 

        </div>
    </div>


)



export default EventView;
