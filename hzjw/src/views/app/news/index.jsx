import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import PoliceDynamic from './police-dynamic'

export default class NewsIndex extends Component {
  render() {
    return (
      <Router>
        <div className="news-index">
          {/* 警务动态 */}
          <Route path='/app/news/jwdt' component={PoliceDynamic}></Route>
          {/* 安全防范 */}
          <Route path='/app/news/aqff' component={PoliceDynamic}></Route>
          {/* 通缉协查 */}
          <Route path='/app/news/tjxc' component={PoliceDynamic}></Route>
          {/* 失物认领 */}
          <Route path='/app/news/swrl' component={PoliceDynamic}></Route>
          {/* 在线寻人 */}
          <Route path='/app/news/zxxr' component={PoliceDynamic}></Route>
        </div>
      </Router>
    )
  }
}
