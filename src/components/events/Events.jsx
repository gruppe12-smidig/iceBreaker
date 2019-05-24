
import React, { Component } from 'react';
import './Events.css';
import Header from '../header/Header';
import tea from '../../images/tea.png';
import boot from '../../images/boot.png';




class Events extends Component {
state = {
}
render() {
return(
<div className='mainContainer'>

<h2 className='subHeader'>Arrangementer</h2>
<div id="wrapperGenreButtons">
<button className='btn-coffeMeeting'>Kaffetreff<img className="tea" src={tea} alt="tea"/> </button> 
<button className='btn-onTour'>Ut på tur<img className="boot" src={boot} alt="boot"/></button>
<button className='btn-physicalActivity'>Fysisk aktivitet</button>
<button className='btn-foodAndTalk'>Mat&Prat</button>
<button className='btn-studyGroup'>Studiegrupper</button>

<button className='btn-test'>Test
<img className="tea" src={tea} alt="tea"/>
<span className="btn-test1">TEST</span>
</button>
</div>
</div>
)
}
}
export default Events;