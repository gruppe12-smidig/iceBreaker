import React, { Component } from 'react';
import './loginPage.css';
import Header from '../header/Header';
import Footer from "../footer/Footer";

class LoginPage extends Component {
    state = {

    }

    render() {
        return(
            <div>
                <div className='LoginContainer'>
                    <form className='LoginForm'>
                        <input className='input' type="text" placeholder="Email" />
                        <input className='input' type="password" placeholder="Password" />
                        <button className='submitbtn'>Login</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default LoginPage;