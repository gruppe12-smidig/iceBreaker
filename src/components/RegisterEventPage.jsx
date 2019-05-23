import React, { Component } from 'react';
import './SignupPage.css'; 
import Header from './Header';



// import "react-datepicker/dist/react-datepicker.css";




class RegisterEventPage extends Component {
    state = {
        date: new Date(),
    }

   
  

    render() {
        return(
            <div>
                          

                <Header/> 
                <h2 className='page-header' >Opprett arrangement</h2>
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
                                    <label> Siste påmelding</label>
                                    <input  className='input-box' type="endSignUp" placeholder="Siste påmelding" />
                                </div>

                                <div className='inputSection'>
                                    <label> Maks deltakere</label>
                                    <input className='input-box' type="MaxP" placeholder="Maks deltakere" />
                                </div>
                        </div>
                        <div className='inputSection'>
                            <label> Beskrivelse</label>
                            <input className='input-box-text' type="beskrivelse" placeholder="Beskrivelse" />
                        </div>

                      
                    </form>
                    <div className='wrapperButtons'>
                            <button id='submitbtn'>Clear</button>
                            <button id='submitbtn'>Sign Up</button>
                        </div>

                </div>
            </div>
        )
    }
}

export default RegisterEventPage;
