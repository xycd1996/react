import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PcIndex from '@component/PcIndex/PcIndex'
import { Button } from 'antd'
import registerServiceWorker from './registerServiceWorker'
import MediaQuery from 'react-responsive'
import './index.styl'
import MobileIndex from '@component/MobileIndex/MobileIndex'

export default class Root extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <PcIndex />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileIndex />
        </MediaQuery>
      </div>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
