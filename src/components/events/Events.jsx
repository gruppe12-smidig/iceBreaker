import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './Events.css';
import tea from '../../images/tea.png';
import boot from '../../images/boot.png';
import gym from '../../images/gym.png';
import cutlery from '../../images/cutlery.png';
import studying from '../../images/studying.png';
import calender from '../../images/kalender-white.png';
import Footer from "../footer/Footer";



class Events extends Component {
    constructor(props){
        super(props);
        this.state ={


        }
    }

render() {
return(
<div className='mainContainer'>


{/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
<div className='wrapperContent'> 

<h2 className='subHeader'>Arrangementer</h2>



<div className="wrapperGenreButtons">

<div className='wrapperBtn'>
    <Link to="/FindEvents">
    <button className='btn-coffeMeeting'><p className='btnP'>Kaffetreff</p><img className="tea" src={tea} alt="tea"/>
    </button> </Link>

    <p className='btnBigScreen'>Kaffetreff</p>

</div>


<div className='wrapperBtn'>
    <Link to="/outOnTrip">
    <button className='btn-onTour'><p className='btnP'>Ut på tur</p><img className="boot" src={boot} alt="boot"/>
    </button> </Link>


<p className='btnBigScreen'>Ut på tur</p>

</div>


<div className='wrapperBtn'>
    <Link to="/activity">
    <button className='btn-physicalActivity'><p className='btnP'>Fysisk aktivitet</p><img className="gym" src={gym} alt="gym"/>
    </button> </Link>

    <p className='btnBigScreen'>Fysisk aktivitet</p>

</div>

<div className='wrapperBtn'>

<Link to="/foodEvent">
    <button className='btn-foodAndTalk'><p className='btnP'>Mat&Prat</p><img className="cutlery" src={cutlery} alt="cutlery"/>
    </button> </Link>

    <p className='btnBigScreen'>Mat&Prat</p>

</div>

<div className='wrapperBtn'>
    <Link to="/studyGroup">
    <button className='btn-studyGroup' itemID="studyBtn"><p className='btnP'>Studiegrupper</p><img className="studying" src={studying} alt="studying"/>
    </button> </Link>

    <p className='btnBigScreen'>Studiegrupper</p>

</div>





</div>
<Link to="/RegisterEventPage">
<button className='btn-createEvent'>OPPRETT ARRANGEMENT<br></br><img className="calender" src={calender} alt="calender"/>
</button></Link>

</div>
<Footer/>
</div>
)
}
}
export default Events;
