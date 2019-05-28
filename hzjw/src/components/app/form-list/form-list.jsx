import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { YTD } from '@common/js/timeFilter'

import styles from './form-list.module.sass'

export default class FormList extends Component {
  static propTypes = {
    listData: PropTypes.array
  }
  static defaultProps = {
    listData: []
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { listData } = this.props
    return (
      <div className={styles.formList}>
        <ul className={styles.container}>
          {listData.map((item, index) => {
            return (
              <li
                onClick={() => this.click(item.code, item.photo)}
                key={item.code}
                className={styles.item}
              >
                <div className={styles.itemBox}>
                  <div className={styles.photo}>
                    <img
                      src={item.photo}
                      width={68}
                      height={96}
                      alt={item.name || item.title}
                    />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      {item.title || item.name}
                    </div>
                    {item['itemType'] ? (
                      <Fragment>
                        <div className={styles.phone}>
                          <Icon type="phone" style={{ marginRight: 3 }} />
                          联系方式：{item.phone}
                        </div>
                        <div className={styles.type}>
                          {item.itemType === 1 ? '失物' : '赃物'}
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className={styles.desc}>描述：{item.feature}</div>
                        <div className={styles.sex}>
                          {item.sex === 1 ? '男' : '女'}
                        </div>
                        <div className={styles.age}>{item.age}岁</div>
                      </Fragment>
                    )}
                    <div className={styles.time}>
                      <Icon type="clock-circle" style={{ marginRight: 3 }} />
                      {item.itemType ? '丢失时间:' : '走失时间：'}
                      {YTD(item.showDate)}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  click(code, img) {
    const { showDetail } = this.props
    showDetail(code, img)
  }
}
