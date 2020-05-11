import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login'
import Main from './components/Main'
import Me from './components/Me'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Me" exact component={Me} />
        <Route path="/main/:id" component={Main} />
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;

