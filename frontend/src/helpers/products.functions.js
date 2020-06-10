import axios from 'axios'
import {getJwt} from './jwt'
export const deleteProducts = async(id)=>{
    const jwt =  getJwt();
    if(!jwt){
        this.props.history.push('/Login')
    }
    const confirmacion  = window.confirm("Esta acción eliminara el producto\n ¿Desea continuar?")
    if(confirmacion){
        console.log("delete")
        try{
            await axios({
                method:"DELETE",
                url: "https://capstorebackend.herokuapp.com/api/products/" + id, 
                headers:{
                    'x-access-token': jwt
                }
            })

            document.getElementById(id).remove()
        }catch(e){
            console.log(e);
            this.props.history.push('/Login')
        }
    }
}


