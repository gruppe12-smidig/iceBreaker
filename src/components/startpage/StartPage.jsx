import React, {Component} from 'react';
import './StartPage.css';

class StartPage extends Component {
    render () {
        return ( 
          <div className='mainContainer'>
            <div className='formContainer'>
              <h1 className='quote'>«A place to connect with other students»</h1>
              <button className="btn-logIn">Logg inn</button>
            <button className='btn-joinIceBreaker'>Join Ice Breaker</button>
            </div>
          </div>
        );
    }
}

export default StartPage;