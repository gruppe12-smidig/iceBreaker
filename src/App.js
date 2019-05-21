import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import {login} from "/login";
import {registerUser} from "/registerUser";
import {registerEvent} from "/registerEvent";
import {menuPage} from "/menuPage";







function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={login}/>
        <Route exact path="/registerUser" component={registerUser}/>
        <Route exact path="/registerEvent" component={registerEvent}/>
        <Route exact path="/menuPage" component={menuPage}/>
      </Switch>
    </div>
  );
}

export default App;
