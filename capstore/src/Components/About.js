import React, { Component } from 'react'
import phone from '../phone-square-alt-solid.svg'
import email from '../envelope-square-solid.svg'
import Mapa from './Map'



export default class About extends Component {
   
    render() {
        return (
            <div className="about">
                
                <main className="about-main">
                    <div className="datos">
                    
                        <a className="contact-button" href="tel:3333495968">
                            <img className="phone-img" src={phone} alt="imagen"/> 
                            Llamanos
                        </a>
                    
                    
                        <a className="contact-button" href="mailto:capstore93@gmail.com">
                            <img className="phone-img" src={email} alt="imagen"/> 
                            Envianos un correo
                        </a>                        
                         
                        <p>Entregamos en:</p>
                        <ul>
                            <li>Plaza San isidro</li>
                            <li>Tren Periferico Norte</li>
                            <li>Gran Terraza Belenes</li>
                        </ul>
                        
                        
                    </div>
                    <div className="mapa">
                        <Mapa/>
                    </div>
                </main>
            </div>
        )
    }
}
