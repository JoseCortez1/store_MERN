import React, { Component } from 'react'

const Product = props=>{
    const {productName, cost, description, fileName, _id} = props.productInfo
    return (
        <div>
            <img src={fileName} alt=""/>
            <h3>{productName}</h3>
            <p>Corsto: {cost}</p>
            <p>Descripcion:</p>
            <p>{description}</p>
        </div>
    )
    
}
export default  Product