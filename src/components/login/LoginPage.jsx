import React, { Component } from 'react';
import firebase from '../firebase/Firebase';
import FormError from '../formError/FormError';
import { Redirect, Link} from "react-router-dom";
import penguin from '../../images/penguin-cropped.png';
import CookieConsent from 'react-cookie-consent';
import SignupPage from '../signup/SignupPage';
import PasswordMask from 'react-password-mask';


import './loginPage.css';
import logo from '../../images/logo.png';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue});
    }

    handleSubmit(e) {
        let signupInfo = {
            email: this.state.email,
            password: this.state.password
        };
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(
            signupInfo.email,
            signupInfo.password
        ).then(()=> {
            console.log('you are logged in');
            window.location = '/home';
        })
            .catch(error => {
                if (error.message !== null){
                    this.setState({errorMessage: error.message});
                } else{
                    this.setState({errorMessage: null});
                }
            });
    }

    render() {
        return(
            <div className='mainContainer'>
               
                    <div className='mainContainerLogIn'>
                <img className="penguin" src={penguin} alt="penguin"/>

                <div className='mainLogIn'>
                    <form className='inputFormLogIn' onSubmit={this.handleSubmit}>
                    <div className='logoLogin'><img className="logo" src={logo} alt="logo"/></div>

            
                        <input
                            className="username"
                            placeholder="Brukernavn"
                            type="text"
                            id="email"
                            name="email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <PasswordMask
                            className="password"
                            placeholder="Passord"
                            type="text"
                            id="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <div>
                            <button className="btn-login" type="submit">Logg inn</button>
                        </div>

                        <div className='errorMessages'>
                            { this.state.errorMessage !== null ? (
                                <FormError theMessage={this.state.errorMessage}/>
                            ): null}
                        </div>

                        <h4 className="h4-text">Ikke registrert?<a href="/SignupPage"> Lag en bruker</a></h4>
                        <h4 className="h4-forgotPassword">Glemt passord?</h4>

                    </form>
                
                    </div>
                </div>
                
                {/* https://github.com/Mastermindzh/react-cookie-consent 
                    DEBUG = TRUE FOR TESTING PURPOSES ONLY */}

                <CookieConsent
                    debug={true}
                    location="bottom"
                    buttonText="Jeg forstår!"
                    expires={15}
                                    
                >
                    Denne nettsiden benytter informasjonskapsler for å forbedre din opplevelse.{" "}
                    <a href='nettvett.no'>Les mer </a>


                </CookieConsent>

                

            </div>
        )
    }
}

export default LoginPage;