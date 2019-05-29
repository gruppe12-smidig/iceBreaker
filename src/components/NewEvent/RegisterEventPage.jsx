import React, { Component } from 'react';
import './RegisterEventPage.css';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';


class RegisterEventPage extends Component {
    constructor (props) {
      super(props)
      this.state = {
          startDate: '',
          endDate: '',
          lastSignDate:''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(date) {
        this.setState({
            startDate: date,
            endDate:date
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
                          
            <div className='formContainerReg'>

                <h2 className='subHeader' >Opprett arrangement</h2>


                    <form className='inputForm'>

                        <div className='inputSection'>
                            <label className='boldP'>Navn på arrangement *</label>
                            <input className='input-box' type="text" placeholder="Navn" />
                        </div>
             
                        <div className='inputSection'>
                            <label className='boldP'> Type arrangement</label>
                            <input className='input-box' type="text" placeholder="Arrangement-typ" />
                        </div>
                        
                        {/* Short fields, dates and numbers */}

                        <div className='inputShort'>
                                <div className='inputSection'>
                                    <label className='boldP'> Starter: *</label>
                                    <DatePicker
                                        className='input-box-short'
                                        selected={ this.state.startDate}
                                        onChange={ this.handleChange }
                                        name="startDate"
                                      
                                    />
                                </div>

                                <div className='inputSection'>
                                    <label className='boldP'> Slutter *</label>
                                    <DatePicker
                                        className='input-box-short'
                                        selected={ this.state.endDate}
                                        onChange={ this.handleChange }
                                        name="endDate"
                                  
                                    />
                                </div>

                                <div className='inputSection'>
                                    <label className='boldP'> Siste påmelding</label>
                                    <DatePicker
                                        className='input-box-short'
                                        selected={ this.state.startDate}
                                        onChange={ this.handleChange }
                                        name="startDate"
                                       
                                    />

                                    
                                </div>

                                <div className='inputSection'>
                            <label className='boldP'> Maks</label>
                            <input className='input-box-short' type="number" min="2"  placeholder="Maks" />
                        </div>

                               
                        </div>
                        <div className='inputSection'>
                            <label className='boldP'> Beskrivelse</label>
                            <input className='input-box-text' type="text" placeholder="Beskrivelse" />
       
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
