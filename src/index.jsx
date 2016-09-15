import React, { Component } from 'react'
import { render } from 'react-dom'



const $$ = (id) => {        
    return document.getElementById(id)
}


render(<div>Hello world</div>, $$('main'))