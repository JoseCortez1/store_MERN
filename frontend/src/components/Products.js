import React, { Component } from 'react'
import '../styles/Products.css'
import Product from './Product'
export default class Products extends Component {
    showProducts = ()=>{
        const products  = this.props.products
        if(products.data !== undefined){

            products.data.reverse()
        }

        if(products.length === 0) return null

        return(
            <React.Fragment>
                <div className="products">
                    {products.data.map(product=>(
                        <div key={product._id} id={product._id}>
                        <Product 
                            deleteProducts={this.props.deleteProducts}
                    
                            editProduct = {this.props.editProduct}
                            productInfo={product}
                        />
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
    render() {
        return (
            <React.Fragment>
                {this.showProducts()}
            </React.Fragment>
        )
    }
}
