import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './assets/scss/index.scss'
import fastClick from 'fastclick'

fastClick.attach(document.body)

ReactDOM.render(<App />, document.getElementById('root'))
