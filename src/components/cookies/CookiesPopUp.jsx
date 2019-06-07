import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import './CookiesPopUp.css';

class CookiesPopUp extends Component{

    render() {


        return(

            <div className="popUpContainer">
                <div className="popUpContent">

                    <div>
                        <p>Denne nettsiden benytter informasjonskapsler for å forbedre din opplevelse </p>
                        <a href="nettvett.no">Les mer </a>
                        <Link to='/Cookies'> Vår policy på informasjonskapsler</Link>
                    </div>

                    <div className="iUnderStandBtnBox">
                        <button className="iUnderstandBtn">Jeg forstår</button>
                    </div>


                </div>
            </div>

        );
    }
}

export default CookiesPopUp;
