import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login'
import Product_Edit from './components/Product_Edit'
import Me from './components/Me'

function App() {
  return (
    <div  className="hero">
      <BrowserRouter>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/" exact component={Me} />
          <Route path="/Product/:id" component={Product_Edit} />
        </Switch>
      </BrowserRouter>

    </div>
   
  );
}

export default App;

