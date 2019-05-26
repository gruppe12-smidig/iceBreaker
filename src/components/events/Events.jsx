import React, { Component } from 'react';
import './Events.css';
import Header from '../header/Header';
import Footer from "../footer/Footer";
import boot from "../../images/boot.png";


class Events extends Component {
state = {
}
render() {
return(
<div>
    <Header />
    <h2 className='page-header'>Arrangementer</h2>
    <div id="wrapperButtons">
        <button className='btn-coffeMeeting'>Kaffetreff</button>
        <button className='btn-onTour'>Ut på tur</button>
        <button className='btn-physicalActivity'>Fysisk aktivitet</button>
        <button className='btn-foodAndTalk'>Mat&Prat</button>
        <button className='btn-studyGroup'>Studiegrupper</button>

        <button className="btn-test">
        <span className="Test">Test</span>
        <img className='boot' src={boot} alt="boot"/>
        </button>

    </div>
    <Footer />
</div>
)
}
}
export default Events;