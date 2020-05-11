import React, { Component } from "react";
import axios from "axios";
import logo from "../logo.png";
export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
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
        if(res.data.message === "Login"){
            localStorage.setItem('x-access-token', res.data.token)
            this.props.history.push('/Me')
        }

    };
    render() {
        return (
            <div>
                <header className="login_header">
                    <img className="logo" src={logo} alt="Logo" />
                    <h1>Zebra project</h1>
                </header>
                <div className="body_page ">
                    <div className="hero"></div>
                    <div className="container">
                        <form onSubmit={this.loginUser} className="card_singin">
                            <h2>Sing in</h2>
                            <input
                                onChange={this.changeValues}
                                name="username"
                                type="text"  placeholder="User name" />
                            <input
                                name="password"
                                onChange={this.changeValues}
                                type="password"  placeholder="password" />
                            <button type="submit" className="btn btn-singin">
                                Sing in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}