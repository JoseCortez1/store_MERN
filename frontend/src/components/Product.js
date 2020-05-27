import React from 'react'

const Product = props=>{
    const {productName, cost, description, fileName, _id} = props.productInfo
    return (
        <div className="product" >
            <img src={fileName} alt="" title={description} onClick={()=>props.editProduct(_id)}/>
            <h3>{productName}</h3>
            <p>Costo: {cost}</p>
            <button  onClick={()=>props.deleteProducts(_id)}>Borrar</button>
        </div>
    )
    
}
export default  Product