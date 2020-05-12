import React, { Component } from 'react'
import {getJwt} from '../helpers/jwt'
import axios from 'axios'

import  Navigation from './Navigation'
import Products from './Products'
export default class Me extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: undefined,
            products: []
        }
    }
    logOut = ()=>{
        localStorage.removeItem('x-access-token')
        this.props.history.push('/')
        
    }
    deleteUser = async(id)=>{
        const jwt = getJwt();
        if(!jwt){
            this.props.history.push('/')
        }
        console.log("delete")
        const res = await axios({
            method:"DELETE",
            url: "http://localhost:4000/api/products/" + id, 
            headers:{
                'x-access-token': jwt
            }
        })
        console.log(res)
        this.componentDidMount()
    }
    checkUSer = async ()=>{
        const jwt = getJwt();
        if(!jwt){
            this.props.history.push('/')
        }
        const res = await axios.get(
            "http://localhost:4000/api/users/login/",
            {headers: {'x-access-token': jwt} }
            )
        this.setState({user: res.data.userName})
    }
    getProducts = async()=>{
        const jwt = getJwt();
        const products = await axios.get(
            "http://localhost:4000/api/products", 
            {headers:{"x-access-token": jwt}}
            )
        this.setState({products})
        
    }
    componentDidMount(){
        this.checkUSer()
        this.getProducts()
    }
    render() {
        return (
            <div>
                <Navigation logOut={this.logOut}/>
                <Products products={this.state.products} deleteUser={this.deleteUser}/>
                <h1>Hi: {this.state.user}</h1>
            </div>
        )
    }
}
