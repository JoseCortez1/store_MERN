import React, { Component } from 'react'
import axios from 'axios'
import Navigation from "./Navigation"
import {getJwt} from "../helpers/jwt"
import Product from './Product'
import AddProduct from './AddProduct'
export default class Product_Edit extends Component {
    state={
        productName:"",
        cost:"",
        fileName:"",
        description:""
    }
    logOut = ()=>{
        localStorage.removeItem('x-access-token')
        this.props.history.push('/Login')
        
    }
    toProducts = ()=> {
        console.log("Productos men")
        this.props.history.push('/Login')
    }
    getProduct = async (id)=>{
        if(!getJwt){
            this.props.history.push('/')
            return "Error"
        }
        const jwt = getJwt();
        
        const res = await axios.get("http://localhost:4000/api/products/"+id,  {headers: {'x-access-token': jwt} })
        this.setState(res.data)
    }
    componentDidMount(){
        if(document.getElementsByClassName("product")){

            document.getElementsByClassName("product")[0].lastChild.remove()
        }
       this.getAll()
    }
    getAll= ()=>{
        this.checkUSer()
        this.getProduct(this.props.match.params.id)
    }
    checkUSer = async ()=>{
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
        if(res){
            if(res.status === 200){

                this.setState({user: res.data.userName})
            }
        }
    
        
        
    }

    render() {

        return (
            <div>
                <Navigation 
                    logOut={this.logOut}
                    toProducts={this.toProducts}
                />
                <div id="edit_product">
                    <Product productInfo={this.state} />
                </div>
                <div className="edit_product">
                    <AddProduct 
                        getAll = {this.getAll}
                        id={this.props.match.params.id} accion={"Actualizar"}/>
                </div>
                
            </div>
        )
        
        
    }
}
