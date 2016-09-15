import React, {Component} from 'react'

import './InputCard.scss'

class InpuCard extends Component {
    constructor(...args) {
        super(...args) 
    }

    render() {
        return (
            <div className="input-card">
                <div className="card-name">
                    {this.props.cardName}
                </div>
                <div className="card-content">
                    <label htmlFor={this.props.cardType + 'Height'}>Height: </label>
                    <input type="text"/><span>px</span>{'\t \t'}
                    <label htmlFor={this.props.cardType + 'Width'}>Width: </label>
                    <input type="text"/><span>px</span>
                </div>
            </div>
        )
    }
}

export default InpuCard