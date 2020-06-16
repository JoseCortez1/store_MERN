import React, { Component } from 'react'
import Hero from '../hero.svg'
export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <div className="hero">
                    <img src={Hero} alt=""/>
                </div>
                <main className="info-main">
                    <p>
                        Capstore es una pequeña empresa familiar <br/>
                        de venta de gorras, con la misión de poder brindarte <br/>
                        calidad, servicio y un buen precio <br/>
                         Todo esto al alcance de tu mano, llevando tus pedidos a nuestros puntos establecidos
                         <a href="./Contacto"> ( Lugares ) </a> <br/>
                         De igual manera puedes ver nuestra cartera de productos <a href="./Productos"> (Productos)</a> <br/>
                         Solo pon la caracteristica que buscas en tu gorra
                    </p>
                </main>
            </div>
        )
    }
}
