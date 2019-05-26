import React, { Component } from 'react';
import './Events.css';
import tea from '../../images/tea.png';
import boot from '../../images/boot.png';
import gym from '../../images/gym.png';
import cutlery from '../../images/cutlery.png';
import studying from '../../images/studying.png';
import calender from '../../images/kalender-white.png';




class Events extends Component {
state = {
}
render() {
return(
<div className='mainContainer'>

<h2 className='subHeader'>Arrangementer</h2>

<div className='eventsContainer'>
<div id="wrapperGenreButtons">

<a href="/FindEvents">
<button className='btn-coffeMeeting'>Kaffetreff<img className="tea" src={tea} alt="tea"/>
</button> </a> 



<a href="/FindEvents">
<button className='btn-onTour'>Ut på tur<img className="boot" src={boot} alt="boot"/>
</button> </a> 

<a href="/FindEvents">
<button className='btn-physicalActivity'>Fysisk aktivitet<img className="gym" src={gym} alt="gym"/>
</button> </a> 

<a href="/FindEvents">
<button className='btn-foodAndTalk'>Mat&Prat<img className="cutlery" src={cutlery} alt="cutlery"/>
</button> </a> 

<a href="/FindEvents">
<button className='btn-studyGroup'>Studiegrupper<img className="studying" src={studying} alt="studying"/>
</button> </a> 

<a href="/RegisterEventPage">
<button className='btn-createEvent'>OPPRETT ARRANGEMENT<br></br><img className="calender" src={calender} alt="calender"/>
</button></a>





</div>
</div>
</div>
)
}
}
export default Events;