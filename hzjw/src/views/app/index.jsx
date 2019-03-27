import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import '../../common/styles/reset.css'
import News from './news'

document.body.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault()
  },
  { passive: false }
)

export default class AppClient extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/app/news' component={News} />
        </div>
      </Router>
    )
  }
}