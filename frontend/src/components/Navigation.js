import React, { Component } from 'react'


const Navigation = props=>{
   
    return (
        <div>
            <nav>
                <a onClick={props.logOut}>LogOut</a>
            </nav>
        </div>
    )
    
}
export default Navigation
