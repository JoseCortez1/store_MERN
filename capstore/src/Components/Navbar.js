import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../capstore.svg'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/Home">
                    <img src={logo} alt="Logo capstore"/>
                </Link>
                <Link to="/Productos">Productos</Link>
                <Link to="/Contacto">Contacto</Link>
            </nav>
        )
    }
}
