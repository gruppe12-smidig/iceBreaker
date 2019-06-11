import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import './CookiesPopUp.css';

class CookiesPopUp extends Component{

    render() {


        return(

            <div className="popUpContainer" >
                <div className="popUpContent">

                    <div>
                        <p className="bannerText">Denne nettsiden benytter informasjonskapsler for å forbedre din opplevelse </p>
                        <a className="nettvettLink" href="nettvett.no">Les mer </a>
                        <Link className="cookiePolicyLink" to='/Cookies'> Vår policy på informasjonskapsler</Link>
                    </div>

                    <div className="iUnderStandBtnBox">
                        <button className="iUnderstandBtn">Jeg forstår</button>
                    </div>


                </div>
            </div>

        );
    }
}

const linkFix = {
  
    color:'white',
    textDecoration:'underline',
  

};

export default CookiesPopUp;
