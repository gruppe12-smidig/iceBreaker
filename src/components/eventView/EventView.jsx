import React, { Component } from 'react';
import './EventView.css';
import Footer from "../footer/Footer";
import floePeng from '../../images/floePeng.png';
import peng from '../../images/penguin.png';




class EventView extends Component {
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
      }
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    render() {

        return (

         <div>
                    <div className="mainContainer">

          



                        <div className='eventViewContainer'>
                        <h2 className='subHeader' > Kontegrupp 2</h2>

                    <div className='descriptionWrapper'>

                            <p className='description'>«Jeg vil gjerne finne noen å sitte sammen med
                                å øve til programeringeksamen, har mine styrker og svakheter
                                    så håper vi kan hjelpe hverandre »</p>

                    </div>

                    <div className='infoWrapper'>

                                    <div className='infoSection'>
                                    <p className='boldP'>Dato:</p>  <span > 20-02-2019 - 23-02-2019 </span> 
                                    </div>

                                    <div className='infoSection'> 
                                    <p className='boldP'>Siste påmelding:</p>  <span>20-02-2019</span>   
                                    </div> 

                                    <div className='infoSection'>
                                    <p className='boldP'>Maks deltakere:</p>  <span>4</span> 
                                    </div>

                                    <div className='infoSection'>
                                    <p className='boldP'>Ansvarlig:</p>  <span>Anne Lien</span>    
                                    </div>

                    </div>
 

                    <img className='floePeng' src={floePeng} alt="penguins" />

                        </div>

                        <div className='userContainer'>
                            <ul>
                                <li className='user'> <img className='peng' src={peng} alt=" penguin" /> <span>Anne Lien</span>   </li>
                                <li className='user'> <img className='peng' src={peng} alt=" penguin" /> <span>Per Olsen</span>  </li>
                                <li className='user'> <img className='peng' src={peng} alt=" penguin" /> <span>Johan Berg</span>  </li>
                            </ul>
                        </div>
                        <div className='chatContainer'>

                            <div className='post'>

                                <div className='wrapperUserIcon'>
                                    <div className='userIcon'></div>
                                </div>

                                <div className='wrapperMessage'>
                                    <p className='message'>«Hei folkens! Har dere startet, hvor møtes vi?»</p>
                                </div>
                                

                            </div>


                            <div className='post'>

                                <div className='wrapperUserIcon'>
                                    <div className='userIcon'></div>
                                </div>

                                <div className='wrapperMessage'>
                                    <p className='message'>«Hei folkens! Har dere startet, hvor møtes vi?»</p>
                                </div>
                                

                            </div>


                            <div className='post'>

                                <div className='wrapperUserIcon'>
                                    <div className='userIcon'></div>
                                </div>

                                <div className='wrapperMessage'>
                                    <p className='message'>«Halo! Jeg sitter på Fjerdingen i morgen Onsdag fra 13:00. Dere kan kontakte meg på 4055789»</p>
                                </div>
                                

                            </div>

                            <div className='post'>

                            <div className='wrapperUserIcon'>
                                <div className='userIcon'></div>
                            </div>

                            <div className='wrapperMessage'>
                                <p className='message'>      {!this.state.isHidden && <Melding />}</p>
                            </div>


                            </div>

                            

                        </div>
                        <div className='chatFormWrapper'>

                                <div className='chatForm'></div>
                                <div className='chatBtn' onClick={this.toggleHidden.bind(this)}></div>

                         
       
       
                        </div>
                      
                    </div>

            <Footer/> 

            </div>     
        )
    }
}

const Melding = () => (
    <div className='modal'>
          Test melding vises ved klikking :D!
      </div>
    )

export default EventView;
