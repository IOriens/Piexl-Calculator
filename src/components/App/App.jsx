import React, {Component} from 'react'

import Header from '../Header/Header'
import CardBox from '../CardBox/CardBox'
import InputCardContainer from '../../container/InputCardContainer'
import OutcomeCardContainer from '../../container/OutcomeCardContainer'

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
                    <InputCardContainer cardType='psd'/>
                    <InputCardContainer cardType='client'/>
                    <InputCardContainer cardType='item'/>
                </CardBox>
                <CardBox >
                    <OutcomeCardContainer cardType='pixel'/>
                    <OutcomeCardContainer cardType='ratio'/>
                </CardBox>
            </div>
        )
    }
}

export default App