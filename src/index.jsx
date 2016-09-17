import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import pixelReducer from './reducer'
import App from './components/App/App'


let store = createStore(pixelReducer, window.devToolsExtension && window.devToolsExtension())

const $$ = (id) => {
    return document.getElementById(id)
}

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    $$('main')
)