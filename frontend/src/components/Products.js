import React, { Component } from 'react'

import Product from './Product'
export default class Products extends Component {
    showProducts = ()=>{
        const products  = this.props.products

        if(products.length === 0) return null

        return(
            <React.Fragment>
                <div>
                    {products.data.map(product=>(
                        <div >
                            <button onClick={()=>this.props.deleteUser(product._id)}>Delete</button>
                        <Product 
                            key={product._id}
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
