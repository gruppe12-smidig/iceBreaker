import React, { Component } from 'react';
import './loginPage.css';
import background from '../../images/background.jpg';
import Header from '../header/Header';
import logo from '../../images/logo.png';

class LoginPage extends Component {
    state = {

    }

    render() {
        return(
            <div className='mainContainerLogIn'>
                <div className='formContainer'>
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