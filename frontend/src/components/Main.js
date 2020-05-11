import React, { Component } from 'react'
//import axios from 'axios'
import Navigation from "./Navigation"
export default class Main extends Component {
    async componentDidMount(){
       //const id = this.props.match.params.id
        //const res = await axios.get("http://localhost:4000/api/users")

        /*res.map((user)=>{
            console.log(user)
        })*/

    }
    render() {
        return (
            <div>
                <Navigation />
            </div>
        )
    }
}
