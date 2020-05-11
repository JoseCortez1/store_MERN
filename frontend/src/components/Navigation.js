import React, { Component } from 'react'

export default class Navigation extends Component {

    constructor(props){
        super(props);

    }
    render() {
        
        return (
            <div>
                <nav>
                    <a onClick={this.props.logOut}>LogOut</a>
                </nav>
            </div>
        )
    }
}
