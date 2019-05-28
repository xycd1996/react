// 该新闻列表类型适用于“警务动态”、“安全防范”、“通缉协查”

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './news-list.module.sass'

export default class NewsList extends Component {
  static propTypes = {
    listData: PropTypes.array
  }
  static defaultProps = {
    listData: []
  }

  render() {
    const { listData } = this.props
    return (
      <div className={styles.newsList}>
        <ul className={styles.news}>
          {listData.map(newItem => (
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
