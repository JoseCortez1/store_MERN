import React from 'react'
import logo from "../logo.png";
import '../styles/Navigation.css'


const Navigation = props=>{
    
    return (
        <div>
            <header className="login_header header_Navigation">
                    <div className="logoPar">
                        <img className="logo" src={logo} alt="Logo" />
                        <h1>MERN</h1>
                        
                    </div>
                    <p href="#" className="btn-logOut"  onClick={props.toProducts} >Productos</p>
                    <p href="#" className="btn-logOut"  onClick={props.logOut}>Cerrar Sesion</p> 
                </header>
            <nav>
                
            </nav>
        </div>
    )
    
}
export default Navigation
