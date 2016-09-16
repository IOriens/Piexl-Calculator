import React, { Component } from 'react'

import './OutcomeCard.scss'
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
                    <span>Height: </span><code>{this.props.heighInfo}</code>{' '}
                    <span>Width: </span><code>{this.props.widthInfo}</code>
                </div>
            </div>
        )
    }
}
 
export default OutcomeCard

