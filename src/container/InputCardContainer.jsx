import React, { Component } from 'react'

import InputCard from '../components/InputCard/InputCard'
import CardBox from '../components/CardBox/CardBox'

import { inputChange } from '../actions'

import pixelStore from '../store'

class InputCardContainer extends Component {
    constructor(...args) {
        super(...args)
        // console.log(this.props)
        this.state = {
            psd: {
                height: 0,
                width: 0
            },
            client: {
                height: 0,
                width: 0
            },
            item: {
                height: 0,
                width: 0
            }
        }
        // console.log(this.state)
    }

    handleChange(cardType, heightOrWidth, value) {
        pixelStore.dispatch(inputChange(cardType, heightOrWidth, value))
        // console.log(pixelStore.getState())
        this.setState(pixelStore.getState())
    }

    render() {
        return (
            <CardBox>
                <InputCard
                    key="psd"
                    cardName='PSD'
                    cardType='psd'
                    valueChange={this.handleChange.bind(this)}
                    height={this.state.psd.height}
                    width={this.state.psd.width}
                    />
                <InputCard 
                    key="client" 
                    cardName='CLIENT' 
                    cardType='client'
                    valueChange={this.handleChange.bind(this)}
                    height={this.state.client.height}
                    width={this.state.client.width}
                    />
                <InputCard 
                    key="item" 
                    cardName='ITEM' 
                    cardType='item'
                    valueChange={this.handleChange.bind(this)}
                    height={this.state.item.height}
                    width={this.state.item.width}
                 />
            </CardBox>
        )
    }
}

export default InputCardContainer