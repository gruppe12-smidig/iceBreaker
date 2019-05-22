import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            /* Start footer*/
            <div className='footer_container'>
                <div className='top_section'>
                    <div className='left'>
                        <a>
                            <h3>Om oss</h3>
                        </a>

                        <div className='contact_wrapper'>

                            <span className='footer_p'>IceBreaker@gmail.com</span>

                        </div>
                    </div> /* end left section */

                    <div className='right_section'>
                        <h3>Addresse:</h3>
                        <p className='footer_p'>
                            Chr. Kroghs gate 16
                            0186 Oslo
                        </p>
                    </div> /* End right section*/


                </div> /* End top section */
                /* TODO: find a replacement for hr tag*/
                <div className='bottom_section'>
                    /* TODO: put in some images*/
                    <span className='min_p'>Smidig gruppe 12</span>

                </div>


            </div> /* End footer_container*/
        );
    }
}

export default Footer;