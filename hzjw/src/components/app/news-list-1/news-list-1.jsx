// 该新闻列表类型适用于“警务动态”、“安全防范”、“通缉协查”

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './news-list-1.module.sass'

export default class newsList1 extends Component {
  static propTypes = {
    newsList: PropTypes.array
  }
  static defaultProps = {
    newsList: []
  }

  render() {
    const { newsList } = this.props
    return (
      <div className={styles.newsList}>
        <ul className={styles.news}>
          {newsList.map(newItem => (
            <li
              key={newItem.code}
              className={styles.newItem}
              onClick={() => this.click(newItem.code)}
            >
              <div style={{ overflow: 'hidden' }}>
                <div className={styles.title}>
                  {newItem.title || newItem.name}
                </div>
                <div className={styles.extTime}>{newItem.extTime}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  click(code) {
    const { showDetail } = this.props
    showDetail(code)
  }
}
