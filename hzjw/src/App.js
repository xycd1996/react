import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import None from './404'
import AppClient from './views/app'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={None} />
          <Route path='/app' component={AppClient} />
        </div>
      </Router>
    )
  }
}
