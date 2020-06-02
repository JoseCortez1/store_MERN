import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../capstore.svg'
export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/Home">
                    <img src={logo} alt="Logo capstore"/>
                </Link>
                <Link to="/Productos">Productos</Link>
                <Link to="/Contacto">Contacto</Link>
            </nav>
        )
    }
}
