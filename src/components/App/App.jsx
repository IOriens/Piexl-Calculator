import React, {Component} from 'react'

import Header from '../Header/Header'
import CardBox from '../CardBox/CardBox'
import InputCard from '../InputCard/InputCard'
import OutcomeCard from '../OutcomeCard/OutcomeCard'

import './App.scss'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header />
                <CardBox >
                    <InputCard cardName='PSD' cardType='psdInfo'/>
                    <InputCard cardName='CLIENT' cardType='clientInfo'/>
                    <InputCard cardName='ITEM' cardType='itemInfo'/>
                </CardBox>
                <CardBox >
                    <OutcomeCard cardName='PIXEL' heighInfo='12' widthInfo='29'/>
                    <OutcomeCard cardName='RATIO' heighInfo='12' widthInfo='29'/>                   
                </CardBox>
            </div>
        )
    }
}

export default App