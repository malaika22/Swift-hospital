import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login/Login'


function App() {
  return (
    <Switch>
        <Route path="/login" component={Login}/>
    </Switch>

  );
}

export default App;
