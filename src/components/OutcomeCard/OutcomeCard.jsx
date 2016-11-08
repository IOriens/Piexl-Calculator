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
                    <div>
                        <span>Height: </span><code>{this.props.height}</code>
                    </div>
                    <div>
                        <span>Width: </span><code>{this.props.width}</code>
                    </div>
                </div>
            </div>
        )
    }
}

export default OutcomeCard

