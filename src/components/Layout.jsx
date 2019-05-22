import Header from './Header';
import Footer from './Footer';
import React, {Component} from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}