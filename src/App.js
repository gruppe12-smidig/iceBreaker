import React from 'react';
import './App.css';
import {login} from "./login.jsx";
import {registerUser} from "./registerUser.jsx"







function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={login}/>
        <Route exact path="/registerUser" component={registerUser}/>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
