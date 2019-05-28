import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import '@common/styles/reset.css'
import News from './news'
import P2P from './p2p'
import { Provider } from 'react-redux'
import store from '@/store'
import * as actions from '@/store/actions'

document.body.addEventListener(
  'touchmove',
  function(e) {
    e.preventDefault()
  },
  { passive: false }
)

store.dispatch(actions.SetActId('123'))

export default class AppClient extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path='/app/news' component={News} />
            <Route path='/app/p2p' component={P2P} />
          </div>
        </Router>
      </Provider>
    )
  }
}
