import React, { Component } from 'react'
import MobileHeader from '../MobileHeader/MobileHeader'
import MobileFooter from '../MobileFooter/MobileFooter'

export default class MobileIndex extends Component {
  render() {
    return (
      <div id="mobile">
        <MobileHeader />
        <MobileFooter />
      </div>
    )
  }
}
