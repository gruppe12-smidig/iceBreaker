import React, {Component} from 'react';
import './About.css'
import phone from '../../images/black-phone-icon.png';
import mail from '../../images/black-mail-icon.png';
import teamPic from '../../images/teamPic.jpg';
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

        <h2 className='subHeader'>Teamet bak </h2>
        <div className='theTeam'>

            <img className="teamPic" src={teamPic} alt="foto of teammembers"/>

            <div className='teamTextWrapper'>
                <p className='contactUs-description'> Icebreaker er skapt av oss, en gruppe studenter ved Høyskolen Kristiania.
                Icebreaker er skapt av oss, en gruppe studenter ved Høyskolen Kristiania.
                Icebreaker er skapt av oss, en gruppe studenter ved Høyskolen Kristiania
                Icebreaker er skapt av oss, en gruppe studenter ved Høyskolen Kristiania</p>
            </div>
     
      
        </div>

        <h2 className='subHeader' style={{fontSize:'1.3rem'}}>Kontakt oss</h2>
        <div className='contactUs'>
              <p className=' contactUs-description' style={{margin:'1.3rem'}}>Send oss gjerne en mail og fortell oss dine tanker om Icebreaker! </p>
              <p className='contactUs-description' style={{fontWeight:'900'}}><img className="mail" src={mail} alt="mail"/>IceBreaker@mail.com<br></br>
      
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

