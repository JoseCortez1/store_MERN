import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'
import Searchbar from './searchbar'

export default class Products extends Component {
    state={
        products:[],
        search:""
    }
    searching=(e)=>{

        this.setState(
            {search:e.target.value}
        )
        

        this.productsRender()
    }
    productsRender = ()=>{
        if(this.state.search === ""){
            return(
                <React.Fragment>
                    {this.state.products.map(product=>(
                        <div key={product._id}>
                            <Product data={product} id={product._id} />
                        </div>
                    ))}
                </React.Fragment>
            )
        }
        if(this.state.search !== ""){
            let productsFound = []
            this.state.products.map(product=>{
                console.log()
                if(product.description.find( tag => this.state.search === tag) !== undefined){
                    productsFound.push(product)
                }
            })
            return(

                <React.Fragment>
                    {productsFound.map(product=>(
                        <div key={product._id}>
                            <Product data={product} id={product._id} />
                        </div>
                    ))}
                </React.Fragment>
            )
        }
    }
    getProducts = async()=>{
        try{
            const res = await axios.get("http://localhost:4000/api/products")
            if(res){
                this.setState({ products: res.data})
                console.log(this.state.products)
            }
        }catch(e){
            console.log("error", e)
            alert("relod page pls")
        }

    }
    componentDidMount(){
        this.getProducts()
    }
    render() {
        return (
            <div>
                <div className="serach">
                    <label htmlFor="seach">
                        Busqueda
                    </label>
                    <input type="text" name="search" onChange={(e)=> this.searching(e)} value={this.state.search}/>
                </div>
                
                <div className="list-caps">
                    {this.productsRender()}
                </div>
            </div>
        )
    }
}
