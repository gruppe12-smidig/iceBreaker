import React, { Component } from 'react';
import './RegisterEventPage.css'; 
import Header from '../header/Header';



// import "react-datepicker/dist/react-datepicker.css";




class RegisterEventPage extends Component {
    state = {
        date: new Date(),
    }

   
  

    render() {
        return(
            <div>
                          


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
