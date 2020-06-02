import React from 'react'

const Product=  props=>{
    const {fileName, productName, description} = props.data
    let tags = "";
    description.map( (tag, i)=>{
        if(tag !== undefined){

            if(i < (description.length - 1))
                tags+= tag +" , "
            else
                tags+= tag
        }
    })
    return(
        <div id={props.id} className="product">
            <img src={fileName} alt="imagen producto" title={tags}/>
            <p>{productName}</p>
        </div>
    )
}
export default Product
