import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login'
import Main from './components/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main/:id" component={Login} />
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
