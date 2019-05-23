import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div id='HomeContainer'>
                    <h3>Icebreaker</h3>
                    <div className='button_wrapper'>
                        <button className='btn'>Find events</button>
                        <button className='btn'>My events</button>
                        <button className='btn'>new event</button>
                        
                    </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Home;