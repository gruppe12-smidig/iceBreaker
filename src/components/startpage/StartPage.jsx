import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './StartPage.css';
import logo from '../../images/logo-1.png';


class StartPage extends Component {
    render () {
        return ( 
          <div className='mainContainerStartPage'>
            <div className='formContainer'>
              <div className='header'><img className="logo" src={logo} alt="logo"/> <h1 className='IceBreaker'>IceBreaker</h1></div>

              <h1 className='quote'>«A place to connect with other students»</h1>
              
              <Link to='/LoginPage'>
              <button className="btn-logIn">Logg inn</button>
              </Link>

            <Link to='/SignupPage'>
            <button className='btn-joinIceBreaker'>Opprett bruker</button></Link>
            </div>
          </div>
        );
    }
}

export default StartPage;