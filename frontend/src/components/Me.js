import React, { Component } from 'react'
import {getJwt} from '../helpers/jwt'
import axios from 'axios'

import  Navigation from './Navigation'
import Products from './Products'
import AddProduct from './AddProduct'
import '../App.css'

import {deleteProducts} from '../helpers/products.functions.js'


export default class Me extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: undefined,
            products: []
        }
    }
    getAll = ()=>{
        this.checkUSer()
        this.getProducts()
    }
    componentWillUnmount(){
        console.log("Willmoount");
    }

    componentDidMount(){
        console.log("Dimoount");
        this.getAll()
    }
     //Users "In this part we use the functionality about Users"
    logOut = ()=>{
        localStorage.removeItem('x-access-token')
        this.props.history.push('/Login')
        
    }
    toProducts = ()=> {
        this.props.history.push('/Login')
    }
    checkUSer = async ()=>{
        console.log("status")
        const jwt = getJwt();
        let res;
        if(!jwt){
            this.props.history.push('/Login')
        }
        try{
            res = await axios.get(
                "http://localhost:4000/api/users/login/",
                {headers: {'x-access-token': jwt} }
                )
            
        }catch(e){
            console.log(e)
            localStorage.removeItem("x-access-token")
        }
        if(res.status === 200){
            this.setState({user: res.data.userName})
        }
    
        
        
    }

    //Products "In this part we use the functionality about products"
    
   
    getProducts = async()=>{
        const products = await axios.get(
            "http://localhost:4000/api/products")
        this.setState({products})
        
    }
    editProduct = (id)=>{
        this.props.history.push('/Product/' + id)
    }
    
   
    
    render() {
        return (
            <div>
                <Navigation 
                    logOut={this.logOut} 
                    toProducts={this.toProducts} />
                <AddProduct accion={"Añadir"} getAll = {this.getAll} />
                <Products editProduct={this.editProduct} products={this.state.products} deleteProducts={deleteProducts}/>
                
            </div>
        )
    }
}
