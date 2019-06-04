import React from 'react';
import './notFound.css';
import pengNotFound from '../../images/pengNotFound.png';


function notFound() {

        return (
            <div className="mainContainer">

                <div className="notFoundContainer">
                    <h2>NOT FOUND: 404</h2>
                    <img className="pengNotFound" src={pengNotFound} alt="penguin not knowing"/>
                    <p>
                        ERROR: the page you requested in not available.
                    </p>
                </div>
            </div>
        );

}

export default notFound;