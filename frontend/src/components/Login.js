import React, { Component } from "react";
import axios from "axios";
import logo from "../logo.png";
import {getJwt} from '../helpers/jwt'
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }
    componentDidMount(){
        if(getJwt()){
            this.props.history.push('/Me')
        }
    }

    changeValues = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    loginUser = async (e) => {
        e.preventDefault();
        const findUser = ({
            userName: this.state.username,
            password: this.state.password
        })
        const res = await axios.post("http://localhost:4000/api/users/login/", findUser)
        if (res.data.message === "Login") {
            localStorage.setItem('x-access-token', res.data.token)
            this.props.history.push('/Me')
        }

    };
    render() {
        return (
            <div className="hero">
                <header className="login_header">
                    <img className="logo" src={logo} alt="Logo" />
                    <h1>MERN</h1>
                </header>
                <div className="body_page ">
                    
                    <div className="container">
                        <form onSubmit={this.loginUser} className="card_singin">
                            <h2 className="title">Logearse</h2>
                            <div className="campo">
                                <label htmlFor="username">Nombre de usuario</label>
                                <input
                                    onChange={this.changeValues}
                                    name="username"
                                    type="text" placeholder="User name" />
                            </div>
                            <div className="campo">
                                <label htmlFor="username">Nombre de usuario</label>
                                <input
                                    name="password"
                                    onChange={this.changeValues}
                                    type="password" placeholder="password" />
                            </div>
                            <button type="submit" className="btn btn-singin">
                                Ingresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
