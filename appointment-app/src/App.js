import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup';


function App() {
  return (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup} />
    </Switch>

  );
}

export default App;
