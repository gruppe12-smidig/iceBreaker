import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Footer.css';
import mail from '../../images/white-mail-icon.jpg';
import phone from '../../images/white-phone.png';
import insta from '../../images/insta.png';
import face from '../../images/fb.png';
  
class Footer extends Component {
    render() {
        return (
            <div className='footerContainer'>
                <div className='top_section'>
          
                        
                 

                    <div className='topSection'>

                        
                        <Link className="link" to="/About"><h3>Om oss</h3></Link>
            

                        <h4>Kontakt</h4 >
                        
                        <div className='contactWrapper'>

                                <img className='mailIcon' src={mail} alt="Mailicon" />
                                  <span className='contact'>IceBreaker@gmail.com</span>

                        </div>

                        <div className='contactWrapper'>

                                <img className='phoneIcon' src={phone} alt="Phoneicon" />
                                <span className="contact">99999 9999</span>

                        </div>

                        <div className='contactWrapper'>

                                <p className='footerAdress'>
                                    Chr. Kroghs gate 16
                                </p>
                                <p className='footerAdress'>
                                     0186 Oslo
                                </p>
                                  
                           

                        </div>


                       
                    </div> {/* End topSection*/}


                </div> {/* End top section */}
                {/* TODO: find a replacement for hr tag*/}
                <div className='bottomSection'>

                        <div className='wrapperIcons'>
                            <img className='phoneIcon' src={insta} alt="Instagram icon" />
                            <img className='phoneIcon' src={face} alt="Facebook icon" />
                        </div>
                                <span className='minP'>Smidig gruppe 12</span>
            

                </div>


            </div>
        );
    }
}

export default Footer;