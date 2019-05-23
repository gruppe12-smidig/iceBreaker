import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Footer.css';
import mail from '../images/white-mail-icon.jpg'; 
import phone from '../images/white-phone.png'; 
import insta from '../images/insta.png'; 
import face from '../images/fb.png'; 
  
class Footer extends Component {
    render() {
        return (
            <div className='footerContainer'>
                <div className='top_section'>
                    <div className='left'>
                        <a>
                            <h3>Om oss</h3>
                        </a>

                     
                    </div> {/* end left section */}

                    <div className='topSection'>

                        <h3>Kontakt</h3>
                        
                        <div className='contactWrapper'>
                                <img className='mailIcon' src={mail} alt="Mailicon" />
                                  <span className='footer_p'>IceBreaker@gmail.com</span>

                        </div>

                        <div className='contactWrapper'>
                                <img className='phoneIcon' src={phone} alt="Phoneicon" />
                                <span class="footer-p">99999 9999</span>   

                        </div>

                        <div className='contactWrapper'>
                                <p className='footer_p'>
                                    Chr. Kroghs gate 16
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