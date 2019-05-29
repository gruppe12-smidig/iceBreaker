import React, {Component} from 'react';
import './StartPage.css';
import logo from '../../images/logo.png';


class StartPage extends Component {
    render () {
        return ( 
          <div className='mainContainerStartPage'>
            <div className='formContainer'>
              <div className='header'><img className="logo" src={logo} alt="logo"/></div>

              <h1 className='quote'>«A place to connect with other students»</h1>
              
              <a href='/LoginPage'>
              <button className="btn-logIn">Logg inn</button>
              </a>

            <a href='/SignupPage'>
            <button className='btn-joinIceBreaker'>Join Ice Breaker</button></a>
            </div>
          </div>
        );
    }
}

export default StartPage;