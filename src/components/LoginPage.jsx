import React, { Component } from 'react';
import './loginPage.css';

class LoginPage extends Component {
    state = {

    }

    render() {
        return(
            <div>
                <div id='LoginContainer'>
                    <form id='LoginForm'>
                        <input className='input' type="text" placeholder="Email" />
                        <input className='input' type="password" placeholder="Password" />
                        <button id='submitbtn'>Login</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default LoginPage;