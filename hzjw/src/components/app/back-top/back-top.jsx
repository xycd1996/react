import React, { Component } from 'react'
import { Icon } from 'antd-mobile'

import styles from './back-top.module.sass'

export default class backTop extends Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
  }

  render() {
    return (
      <div onClick={this.click} className={styles.backTop}>
        <Icon type='up' size='md' />
      </div>
    )
  }

  click() {
    const { backTop } = this.props
    backTop()
  }
}
