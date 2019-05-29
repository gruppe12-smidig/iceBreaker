import React, { Component } from 'react';
import './MyEvents.css';
import Footer from "../footer/Footer";





class MyEvents extends Component {
    state = {

    }


    render() {

        return (

         <div>
                    <div className="mainContainer">

                    <div className='myEventContainer'>

                        <h2 className='subHeader' >Mine arrangementer</h2>

                    

                            <div className='adminEventsContainer'>
                                <h3 className='subHeaderMin'>Ansvarlig for</h3>
                                {/*Render of event components from DB  */}
                                <ul className='myEventsList'>

                                    <li className='eventBox'><div className="testEvent"></div></li>
                                    <li className='eventBox'><div className="testEvent"></div></li>
                                    <li className='eventBox'><div className="testEvent"></div></li>

                                </ul>

                                <div className='btnWrapper'>
                                    <a href="/RegisterEventPage"><button className='btn'>Opprett ny</button></a> 
                                </div>

                            </div>

                            <div className="joinedEventsContainer" >

                                <h3 className='subHeaderMin'>Oppmeldt til</h3>
                                {/*Render of event components from DB  */}
                                <ul  className='myEventsList'>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>
                                <li className='eventBox'><div className="testEvent"></div></li>

                                </ul>
                                <div className='btnWrapper'>
                                      <a href="/Events"><button className='btn'>Finn ny</button></a> 
                                </div>
                            </div>






                        </div>

                
                    </div>

            <Footer/> 

            </div>     
        )
    }
}

export default MyEvents;
