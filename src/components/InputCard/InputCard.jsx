import React, {Component} from 'react'

import './InputCard.scss'

class InpuCard extends Component {
    constructor(...args) {
        super(...args)    
    }

    handleChage (e) {                     
        if(!isNaN(parseFloat(e.target.value)) ) {
            this.props.valueChange(this.props.cardType,  e.target.className, parseFloat(e.target.value))
        }
    }

    render() {
        return (
            <div className="input-card">
                <div className="card-name">
                    {this.props.cardName}
                </div>
                <div className="card-content">
                    <label htmlFor={this.props.cardType + 'Height'}>Height: </label>
                    <input 
                        id={this.props.cardType + 'Height'} 
                        onChange={this.handleChage.bind(this)}
                        className="height"
                        type="text"                 
                        value={this.props.height}
                        />
                    <span>px</span>{'\t \t'}
                    <label htmlFor={this.props.cardType + 'Width'}>Width: </label>
                    <input 
                        id={this.props.cardType + 'Width'} 
                        onChange={this.handleChage.bind(this)}
                        type="text"
                        className="width"
                        value={this.props.width}
                        />
                    <span>px</span>
                </div>
            </div>
        )
    }
}

export default InpuCard