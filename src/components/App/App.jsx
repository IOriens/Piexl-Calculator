import React, {Component} from 'react'

import Header from '../Header/Header'
import CardBox from '../CardBox/CardBox'
import InputCardContainer from '../../container/InputCardContainer'
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
                <InputCardContainer />
                <CardBox >
                    <OutcomeCard cardName='PIXEL' heighInfo='12px' widthInfo='29px'/>
                    <OutcomeCard cardName='RATIO' heighInfo='12%' widthInfo='29%'/>
                </CardBox>
            </div>
        )
    }
}

export default App