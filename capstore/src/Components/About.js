import React, { Component } from 'react'

export default class About extends Component {
    state={
        nombre:"",
        telefono:""
    }
    render() {
        return (
            <div>
                <aside>
                    <form>
                        <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" placeholder="Nombre ejemplo" value={this.state.nombre}/>
                        </div>
                        <div className="campo-form">
                            <label htmlFor="telefono">Telefono</label>
                            <input type="number" id="telefono" placeholder="1122334455" value={this.state.telefono}/>
                        </div>
                    </form>
                </aside>
                <main>
                    <div className="datos">
                        <p>Numero: <span>3333495968</span></p>
                        <p>Correo: <span>capstore93@gmail.com</span> </p>
                        <p>Entregamos en:</p>
                        <ul>
                            <li>Plaza San isidro</li>
                            <li>Tren Periferico Norte</li>
                            <li>Gran Terraza Belenes</li>
                        </ul>
                        <div className="ping-map">
                            Aqui va un mapa
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
