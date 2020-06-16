import React, { Component } from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export default class Mapa extends Component {
  state={
    position1:[20.7367788,-103.3833152],
    pin1:[20.7408595,-103.3855487],
    pin2:[20.730933, -103.352243],
    pin3:[20.738246, -103.401042]
  }
  render() {
    return (
      <Map id="map-container" center={this.state.position1} zoom={14}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
       <Marker position={this.state.pin1}>
          <Popup>
            Punto de entrega:<br /> Frente a plaza San Isidro
          </Popup>
        </Marker>
        <Marker position={this.state.pin2}>
          <Popup>
            Punto de entrega:<br /> Frente estación Norte
          </Popup>
        </Marker>
        <Marker position={this.state.pin3}>
          <Popup>
            Punto de entrega:<br /> Entrada soriana <br/> Gran Terraza Belenes
          </Popup>
        </Marker>
    </Map>
    )
  }
}
