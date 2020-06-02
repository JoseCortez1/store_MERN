import React, { Component } from 'react'

export default class searchbar extends Component {
    render() {
        return (
            <div className="searchbar">
                <label htmlFor="seach">
                    Busqueda
                </label>
                <input type="text" name="search"/>
            </div>
        )
    }
}
