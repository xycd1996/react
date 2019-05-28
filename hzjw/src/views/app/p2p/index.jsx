import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import RegisterView from './register/register'
import RecordView from './record/record'
import FormView from './form/form'
import ResultView from './result/result'

export default class P2P extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* p2p在线登记平台-首页 */}
          <Route path='/app/p2p/register' component={RegisterView} />
          {/* p2p在线登记平台-记录页 */}
          <Route path='/app/p2p/record' component={RecordView} />
          {/* p2p在线登记平台-表单填写页 */}
          <Route path='/app/p2p/form' component={FormView} />
          {/* p2p在线登记平台-提交结果页 */}
          <Route path='/app/p2p/result' component={ResultView} />
        </div>
      </Router>
    )
  }
}
