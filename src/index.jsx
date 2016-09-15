import React, { Component } from 'react'
import { render } from 'react-dom'

import App from './components/App/App'

const $$ = (id) => {        
    return document.getElementById(id)
}

render(<App/>, $$('main'))