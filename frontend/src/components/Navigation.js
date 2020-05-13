import React, { Component } from 'react'
import logo from "../logo.png";
import '../styles/Navigation.css'

const Navigation = props=>{
   
    return (
        <div>
        <header className="login_header header_Navigation">
                    <div className="logoPar">
                        <img className="logo" src={logo} alt="Logo" />
                        <h1>Zebra project</h1>
                    </div>
                    <a className="btn-logOut" onClick={props.logOut}>Cerrar Sesion</a>
                </header>
            <nav>
                
            </nav>
        </div>
    )
    
}
export default Navigation
