import React, { Component } from 'react';
import './RegisterEventPage.css';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import firebase from "../firebase/Firebase";

import moment from 'moment'
class RegisterEventPage extends Component {
    constructor (props) {
      super(props)
      this.state = {
          eventName: '',
          eventType: '',
          startDate: new Date(),
          endDate: new Date(),
          lastDate: new Date(),
          maxParticipants: '',
          description:  ''

      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleStartDateChange = this.handleStartDateChange.bind(this);
      this.handleEndDateChange = this.handleEndDateChange.bind(this);
      this.handleLastDateChange = this.handleLastDateChange.bind(this);
  }
handleStartDateChange(date){
    this.setState({
        startDate: date,
      });
}
handleEndDateChange(date){
    this.setState({
        endDate: date,
      });
}
handleLastDateChange(date){
    this.setState({
        lastDate: date,
      });
}
    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;
      

        this.setState({[itemName]: itemValue});
    }

    handleSubmit(e) {
        let eventInfo = {
            eventName: this.state.eventName,
            eventType: this.state.eventType,
            maxParticipants: this.state.maxParticipants,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            lastDate: this.state.lastDate
        }
        e.preventDefault();
        this.props.addEvent(eventInfo);
        this.setState({eventName: ' ', eventType: '', description: '', maxParticipants: '', startDate: new Date(), endDate: new Date(), lastDate: new Date() });

    }



    render() {
        
        return(
            <div className="mainContainer">
                          
            <div className='formContainerReg'>

                <h2 className='subHeader' >Opprett arrangement</h2>


                    <form className='inputForm' onSubmit={this.handleSubmit}>

                        <div className='inputSection'>
                            <label className='boldP' htmlFor="eventName">Navn på arrangement *</label>
                            <input
                                className='input-box'
                                type="text"
                                name="eventName"
                                placeholder="Navn"
                                required
                                value={this.state.eventName}
                                onChange={this.handleChange}
                             

                            />
                        </div>

                        <div className='inputSection'>
                            <label className='boldP' htmlFor="eventType"> Type arrangement</label>
                            <select  className='input-box'
                                     placeholder="Arrangement-typ"
                                     name="eventType"
                                     required
                                     value={this.state.eventType}
                                     onChange={this.handleChange}>
                                 <option value="kaffetreff"> Velg typ </option>
                                <option value="kaffetreff">Kaffetreff</option>
                                <option value="ut på tur">Ut på tur</option>
                                <option value="Fysisk aktivitet">Fysisk aktivitet</option>
                                <option value="Mat&Prat">Mat&Prat</option>
                                <option value="studiegrupper">Studiegrupper</option>
                            </select>
                        </div>
                        
                        {/* Short fields, dates and numbers */}

                        <div className='inputShort'>

                                <div className='inputSection'>
                                    <label className='boldP'> Starter: *</label>
                                    
                                    <DatePicker
                                        className='input-box-short'
                                        name="startDate"
                                        value={this.state.startDate}
                                        selected={ this.state.startDate}
                                        selected={this.state.date}
                                        onSelect={this.handleStartDateSelect} //when day is clicked
                                        onChange={this.handleStartDateChange} //only when value has changed
                                        minDate={new Date()}
                                        placeholderText={this.state.startDate}
                                     
                          

                                    />
                                </div>

                                <div className='inputSection'>
                                    <label className='boldP'> Slutter *</label>
                                    <div className='WrapperEndDate'>
                                    <DatePicker
                                        className='input-box-short'
                                        name="endDate"
                                        value={this.state.endDate}
                                        selected={this.state.date}
                                        onSelect={this.handleEndDateSelect} //when day is clicked
                                        onChange={this.handleEndDateChange} //only when value has changed
                                        minDate={new Date()}
                                        placeholderText={this.state.endDate}
                                      

                                    />
                                    </div>
                                </div>

                                <div className='inputSection'>
                                    <label className='boldP'> Siste påmelding</label>
                                    <DatePicker
                                        className='input-box-short'
                                        name="lastDate"
                                        value={this.state.lastSignDate}
                                        selected={this.state.date}
                                        onSelect={this.handleLastDateSelect} //when day is clicked
                                        onChange={this.handleLastDateChange} //only when value has changed
                                        minDate={new Date()}
                                        placeholderText={this.state.lastDate}
                                        

                                    />

                                    
                                </div>

                                <div className='inputSection'>
                            <label className='boldP' htmlFor="maxParticipants"> Maks</label>
                            <input
                                className='input-box-short'
                                type="number"
                                placeholder="Maks"
                                name="maxParticipants"
                                required
                                value={this.state.maxParticipants}
                                onChange={this.handleChange}
                            />
                        </div>

                               
                        </div>
                        <div className='inputSection'>
                            <label className='boldP' htmlFor="description"> Beskrivelse</label>
                            <input
                                className='input-box-text'
                                type="text"
                                placeholder="Beskrivelse"
                                name="description"
                                required
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
       
                        </div>

                        <div>
                            <button className='signBtn' type="submit">Opprett</button>
                        </div>

              
                    </form>
                    <div className='wrapperButtons'>
                            <button className='signBtn'>Tøm</button>
                            <button className='signBtn'>Opprett</button>
                        </div>

                </div>
            </div>
        )
    }
}

export default RegisterEventPage;
