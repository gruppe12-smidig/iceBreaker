import React, { Component } from 'react';
import { Link } from '@reach/router';

class Welcome extends Component {
    constructor(props){
        super(props);
    }

    render() {

        const {userName} = this.props;

        return (
            <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold pl-1">
           hei,{userName}
        </span>
            </div>
        );
    }
}

export default Welcome;