import React, { Component } from 'react'


import './CardBox.scss'

class CardBox extends Component {
    constructor(...args) {
        super(...args)
    }

    render() {
        return (
            <div className="input-cards">
                {this.props.children}               
            </div>
        )
    }
}

export default CardBox