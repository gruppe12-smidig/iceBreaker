import {Route, Redirect} from 'react-router-dom';
import React, {useContext} from 'react';
import firebase from './Firebase';
import {AuthContext} from "./Auth";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = this.props.user ;
    return(
        <Route
            {...rest}
            render={routeProps =>
            !!currentUser ? (
                <RouteComponent {...routeProps} />
            ) : (
                <Redirect to={"loginPage"}/>
            )}

        />
    );
};

export default PrivateRoute