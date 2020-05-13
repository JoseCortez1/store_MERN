import React, { Component } from 'react'
import axios from 'axios'
import {getJwt} from '../helpers/jwt'
import '../styles/AddProduct.css'
export default class AddProduct extends Component {
    state = {
        productName:"",
        cost:"",
        fileName:"",
        description:""
    }
    changeInput = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    changeImage = (e)=>{
        console.log(e.target.files[0]);
        this.setState({
            [e.target.id]: e.target.files[0]
        })
    }
    submitForm= async (e)=>{ 
        e.preventDefault();
        const jwt = getJwt()

        if(this.state.productName.trim() === "" || 
            this.state.cost.trim() === "" ||
            this.state.fileName.name.trim() === "" ||
            this.state.description.trim() === ""){
            
            console.log("Error campos vacios")
        }
        document.getElementById("formProduct").reset();
        
        let form = new FormData();
        form.append('productName', this.state.productName)
        form.append('cost', this.state.cost)
        form.append('fileName', this.state.fileName)
        form.append('description', this.state.description)

        console.log(document.getElementById("formProduct").value)
        const res = await axios.post("http://localhost:4000/api/products/",form,
                                     {
                                        headers: 
                                            {"x-access-token": jwt}
                                        })
        this.props.getAll()

    }
    render() {
        return (
            <form id="formProduct" onSubmit={this.submitForm}>
                <h1>Añadir producto</h1>
                <div className="inputs">
                    <div className="campo">
                        <label htmlFor="productName">Nombre</label>
                        <input onChange={this.changeInput} type="text" id="productName" required/>
                    </div>
                    <div className="campo">
                        <label htmlFor="cost">Costo</label>
                        <input onChange={this.changeInput} type="number" step="any" id="cost" required/>
                    </div>
                    <div className="campo">
                        <label htmlFor="description">descripcion</label>
                        <textarea onChange={this.changeInput} type="textarea" cols="20" row="10" id="description" required/>
                    </div>
                    <div className="campo">
                        <label htmlFor="fileName">Imagen</label>
                        <input onChange={this.changeImage} type="file" id="fileName" required/>
                    </div>
                </div>
                <button className="btn-form" type="submit">Añadir</button>
            </form>
        )
    }
}
