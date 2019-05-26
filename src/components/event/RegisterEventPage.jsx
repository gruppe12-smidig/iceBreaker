import React, { Component } from 'react';
import './RegisterEventPage.css'; 
import Header from '../header/Header';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
class RegisterEventPage extends Component {
    constructor (props) {
      super(props)
      this.state = {
          startDate: new Date()
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
    }



    render() {
        return(
            <div className="mainContainer">
                          


                <h2 className='subHeader' >Opprett arrangement</h2>
                <div className='formContainer'>

                    <form className='inputForm'>

                        <div className='inputSection'>
                            <label>Navn på arrangement *</label>
                            <input className='input-box' type="text" placeholder="Navn" />
                        </div>
             
                        <div className='inputSection'>
                            <label> Typ av arrangement</label>
                            <input className='input-box' type="text" placeholder="Arrangement-typ" />
                        </div>
                        
                        {/* Short fields, dates and numbers */}

                        <div className='inputShort'>
                                <div className='inputSection'>
                                    <label> Starter: *</label>
                                    <DatePicker
                                        className='input-box-short'
                                        selected={ this.state.startDate}
                                        onChange={ this.handleChange }
                                        name="startDate"
                                        dateFormat="DD/MM/YYYY"
                                    />
                                </div>

                                <div className='inputSection'>
                                    <label> Slutter *</label>
                                    <DatePicker
                                        className='input-box-short'
                                        selected={ this.state.startDate}
                                        onChange={ this.handleChange }
                                        name="startDate"
                                        dateFormat="DD/MM/YYYY"
                                    />
                                </div>

                                <div className='inputSection'>
                                    <label> Siste påmelding</label>
                                    <DatePicker
                                        className='input-box-short'
                                        selected={ this.state.startDate}
                                        onChange={ this.handleChange }
                                        name="startDate"
                                        dateFormat="DD/MM/YYYY"
                                    />

                                    
                                </div>

                                <div className='inputSection'>
                            <label> Maks</label>
                            <input className='input-box-short' type="text" placeholder="Maks" />
                        </div>

                               
                        </div>
                        <div className='inputSection'>
                            <label> Beskrivelse</label>
       
                        </div>

                      
                    </form>
                    <div className='wrapperButtons'>
                            <button className='signBtn'>Clear</button>
                            <button className='signBtn'>Sign Up</button>
                        </div>

                </div>
            </div>
        )
    }
}

export default RegisterEventPage;
