import React, { Component } from 'react'
 
import './Header.scss'
class Header extends Component {
    constructor(...args) {
        super(...args)
    }
 
    render() {
        return (
            <header>
                Pixel Calculator
            </header>
        )
    }
}
 
export default Header