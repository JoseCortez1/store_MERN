import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'


import './index.css';
import Main from './Components/Main'
import Products from './Components/Products'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/Home"  component={Main}/>
        <Route exact path="/Productos"  component={Products}/>
        <Route exact path="/Contacto"  component={About}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
