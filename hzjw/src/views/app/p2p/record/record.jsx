import React, { Component } from 'react'
import Scroll from '@components/app/scroll/scroll'

export default class Record extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: []
    }
  }
  render() {
    const { listData } = this.state
    return (
      <div>
        <Scroll>
          <ul>{listData.map(item => {
            return <li></li>
          })}</ul>
        </Scroll>
      </div>
    )
  }
}
