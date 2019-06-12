import React, {Component} from 'react';
import './About.css'
import phone from '../../images/black-phone-icon.png';
import mail from '../../images/black-mail-icon.png';
import Footer from "../footer/Footer";


class About extends Component {
render() {
return (
<div className='mainContainer'>
<header className='aboutHeader' >  <h2 className='subHeader' style={headerStyle}> Hva er Icebreaker?</h2></header>
  {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
  <div className='wrapperContent'>

  

      <div className='aboutUs'>
      {/* <h2 className='heading'>Bakgrunn</h2> */}
        <p className='aboutUs-description'>"IceBreaker er et konsept for å hjelpe 
studenter å få nye bekjentskap  i 
hverdagen. Ved å enkelt kunne 
komme i kontakt med personer du 
ikke kjenner fra før av."
        </p>
        </div>


        <div className='contactUs'>
      <h2 className='heading'>Kontakt oss</h2>
        <p className='contactUs-description'><img className="mail" src={mail} alt="mail"/>IceBreaker@mail.com<br></br>
        <img className="phone" src={phone} alt="phone"/>999 99 999
        </p>
        </div>

  </div>
  <Footer/>
</div>
);
}
}
const headerStyle ={
  color:'white',

};

export default About;

