import React, {Component} from 'react';
import './About.css'
import Footer from '../footer/Footer.jsx'


class About extends Component {
render() {
return (
<div className='mainContainer'>
  <div className='formContainer'>
    <h2 className='subHeader'> Om oss</h2>

      <div className='aboutUs'>
      <h2 className='heading'>Bakgrunn</h2>
        <p className='aboutUs-description'>IceBreaker er et konsept for å hjelpe 
studenter å få nye bekjentskap  i 
hverdagen. Ved å enkelt kunne 
komme i kontakt med personer du 
ikke kjenner fra før av, ved bruk av 
felles interesser. 
        </p>
        </div>


        <div className='contactUs'>
      <h2 className='heading'>Kontak oss</h2>
        <p className='contactUs-description'>IceBreaker@mail.com<br></br>
999 99 999
        </p>
        </div>

  </div>
</div>
);
}
}

export default About;