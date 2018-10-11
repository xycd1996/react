import React, { Component } from 'react'
import PcHeader from '@component/PcHeader/PcHeader'
import PcFooter from '@component/PcFooter/PcFooter'

export default class PcIndex extends Component {
  render() {
    return (
      <div>
        <PcHeader />
        <PcFooter />
      </div>
    )
  }
}
