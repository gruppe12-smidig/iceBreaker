import React from 'react';
import './notFound.css';
import pengNotFound from '../../images/pengError.png';


function notFound() {

        return (
            <div className='mainContainer'>

                <div className="wrapperContent">
                  
                    <img className="pengNotFound" src={pengNotFound} alt="penguin not knowing"/>
                    <h2>NOT FOUND: 404</h2>
                    <p className='boldP'>  Feilmelding:</p>
                    <p>
                       Siden du leter etter blir desverre ikke funnet.
                    </p>
                </div>
            </div>
        );

}

export default notFound;