import React from 'react';
import './notFound.css';


function notFound() {

        return (
            <div className="container">
                <div className="content-container">
                    <h2>NOT FOUND: 404</h2>
                    <p>
                        ERROR: the page you requested in not available.
                    </p>
                </div>
            </div>
        );

}

export default notFound;