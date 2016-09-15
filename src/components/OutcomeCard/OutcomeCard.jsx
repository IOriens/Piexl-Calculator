import React, { Component } from 'react'
 
class OutcomeCard extends Component {
    constructor(...args) {
        super(...args)
    }
 
    render() {
        return (
            <div className="outcome-card">
                <div className="outcome-card-name">
                    {this.props.cardName}
                </div>
                <div className="outcome-content">
                    <span>Height: </span><span>{this.props.heighInfo}</span><span>px</span>
                    <span>Width: </span><span>{this.props.widthInfo}</span><span>px</span>
                </div>
            </div>
        )
    }
}
 
export default OutcomeCard

