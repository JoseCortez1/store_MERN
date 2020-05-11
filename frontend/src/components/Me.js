import React, { Component } from 'react'
import {getJwt} from '../helpers/jwt'
import axios from 'axios'

import  Navigation from './Navigation'
export default class Me extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: undefined
        }
    }
    logOut = ()=>{
        localStorage.removeItem('x-access-token')
        
    }
    async componentDidMount(){
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
    render() {
        return (
            <div>
                <Navigation logOut={this.logOut}/>
                <h1>Hi: {this.state.user}</h1>
            </div>
        )
    }
}
