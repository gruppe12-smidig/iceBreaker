import React, { Component } from 'react';
import './loginPage.css';
import background from '../../images/background.jpg';
import Header from '../header/Header';

class LoginPage extends Component {
    state = {

    }

    render() {
        return(
            <div className='mainContainer'>
                <div className='formContainer'>
                    <h2 className='subHeader'>Logg inn</h2>

                    <form className='inputForm'>
                        <input className="username" placeholder="Brukernavn" type="text"></input>
                        <input className="password" placeholder="Passord" type="text"></input>
                    </form>
                    <button className="btn-login">Logg inn</button>
                </div>

            </div>
        )
    }
}

export default LoginPage;