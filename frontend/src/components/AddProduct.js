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
   
    componentDidMount(){
        if(this.props.accion === "Actualizar"){
            document.getElementById("fileName").removeAttribute("required")
        }
        if(this.props.id){
            console.log(this.props.id);
            this.getProduct(this.props.id)
        }
    }
    getProduct = async (id)=>{
        if(!getJwt){
            this.props.history.push('/')
            return "Error"
        }
        const jwt = getJwt();
        
        const res = await axios.get("http://localhost:4000/api/products/"+id,  {headers: {'x-access-token': jwt} })
        console.log(res.data);
        this.setState(res.data)
    }
    changeInput = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    changeImage = (e)=>{
        this.setState({
            [e.target.id]: e.target.files[0]
        })
    }
    submitForm= async (e)=>{ 
        e.preventDefault();
        const jwt = getJwt()
        const id = this.props.id ;
        console.log("id en submit", id)
        //Usando el mismo componente tanto como para añadir y crear, usaremos
        //la variable que accion en el prop para ver la accion que realizaremos
        if(this.state.productName.trim() === "" || 
                this.state.cost === "" ||
                this.state.description.trim() === ""){
                
                alert("No puedes dejar campos vacios")
            }
        //Crenado el form ambos lo usaran 
        let form = new FormData();
        
        //Ya que comparten tres campos en comun los seteamos
        form.append('productName', this.state.productName)
        form.append('cost', this.state.cost)
        form.append('description', this.state.description)
        
        if(this.props.accion !== "Actualizar"){
            if(this.state.fileName.name.trim() === ""){
                alert("No puedes dejar campos vacios")
            }
            document.getElementById("formProduct").reset();
            form.append('fileName', this.state.fileName)
            
            const res = await axios.post("http://localhost:4000/api/products/",form,
                                        {
                                            headers: 
                                                {"x-access-token": jwt}
                                            })
            if(res.data.message === "error"){
                alert(`Èl producto ${res.data.prducto} ya se encuentra agregado\n intente con otro nombre`)
                
            }
        }else{
        
            if(this.state.fileName !== undefined){
                 form.append('fileName', this.state.fileName)
            }
            const res = await axios.put(
                "http://localhost:4000/api/products/" + id,
                form,
                {
                headers: 
                    {"x-access-token": jwt}
                })
            if(res.data.message === "error"){
                alert(res.data.message)
                
            }
            
        }
      
        
        this.props.getAll()

    }
    render() {
        return (
            <form id="formProduct" onSubmit={this.submitForm}>
                <h1>Añadir producto</h1>
                <div className="inputs">
                    <div className="campo">
                        <label htmlFor="productName">Nombre</label>
                        <input value={this.state.productName} onChange={this.changeInput} type="text" id="productName" required/>
                    </div>
                    <div className="campo">
                        <label htmlFor="cost">Costo</label>
                        <input value={this.state.cost} onChange={this.changeInput} type="number" step="any" id="cost" required/>
                    </div>
                    <div className="campo">
                        <label htmlFor="description">descripcion</label>
                        <textarea value={this.state.description} onChange={this.changeInput} type="textarea" cols="20" row="10" id="description" required/>
                    </div>
                    <div className="campo">
                        <label htmlFor="fileName">Imagen</label>
                        <input onChange={this.changeImage} type="file" id="fileName" required/>
                    </div>
                </div>
                <button className="btn-form" type="submit">{this.props.accion}</button>
            </form>
            
        )
    }
}
