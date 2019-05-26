import React, { Component } from 'react';
import './RegisterEventPage.css'; 
import Header from '../header/Header';
import DatePicker from 'react-datepicker';


class RegisterEventPage extends Component {
    constructor (props) {
      super(props)
      this.state = {
          startDate: ''
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

                        <div className='inputContainerShorts'>
                                <div className='inputSection'>
                                    <label> Starter: *</label>
                               
                                </div>

                                <div className='inputSection'>
                                    <label> Slutter *</label>
                                    <input  className='input-box' type="endDate" placeholder="Slutter" />
                                </div>

                                <div className='inputSection'>
                                    <label> velg dato</label>
                                    <DatePicker
                                        selected={ this.state.startDate}
                                        onChange={ this.handleChange }
                                        name="startDate"
                                        dateFormat="DD/MM/YYYY"
                                    />
                                    
                                </div>

                                <div className='inputSection'>
                                    <label> Maks deltakere</label>
                          
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
