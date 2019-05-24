
import React, { Component } from 'react';
import './SignupPage.css'; 
import Header from '../header/Header';

class SignupPage extends Component {
    state = {

    }

    render() {
        return(
            <div className="mainContainer">

                <h2 className='subHeader' >Opprett bruker</h2>

                <div className='formContainer'>
                    <form className='inputForm'>
                        <div className='inputSection'>
                            <label className="boldP">Førnavn *</label>
                            <input className='input-box' type="text" placeholder="Førnavn" />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Etternavn *</label>
                            <input className='input-box' type="text" placeholder="Etternavn" />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> E-mail *</label>
                            <input className='input-box' type="text" placeholder="E-mail" />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Passord *</label>
                            <input className='input-box' type="password" placeholder="Passord ..." />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Skole</label>
                            <input className='input-box' type="school" placeholder="Skole ..." />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Interessen</label>
                            <input className='input-box' type="school" placeholder="Interessen ... " />
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

export default SignupPage;

