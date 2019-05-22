import React, { Component } from 'react';
import './SignupPage.css'; 

class SignupPage extends Component {
    state = {

    }

    render() {
        return(
            <div>
                <div id='signupContainer'>
                    <form id='signupForm'>
                        <input className='input' type="text" placeholder="First Name" />
                        <input className='input' type="text" placeholder="Last Name" />
                        <input className='input' type="text" placeholder="Email" />
                        <input className='input' type="password" placeholder="Password" />
                        <button id='submitbtn'>Sign Up</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default SignupPage;