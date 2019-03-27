import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import News from './news'

export default class NewsIndex extends Component {
  render() {
    return (
      <Router>
        <div className='news-index'>
          {/* 警务动态，通缉协查，安全防范，失物认领，在线寻人 */}
          <Route path='/app/news/:id' component={News} />
        </div>
      </Router>
    )
  }
}
