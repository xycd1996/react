import React, { Component } from 'react'
import { getDetail } from '../../../api/news'
import Loading from '../loading/loading'
import { YTD } from '@common/js/timeFilter'
import Scroll from '../scroll/scroll'
import { Button } from 'antd-mobile'

import styles from './form-detail.module.sass'

export default class FormDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: []
    }
  }

  render() {
    const { detail } = this.state
    return (
      <div className={styles.formDetail}>
        <Scroll bounce={false}>
          {detail['code'] ? (
            <div className={styles.container}>
              <div className={styles.img}>
                <img
                  src={sessionStorage.getItem('image')}
                  width="100%"
                  alt={detail.name || detail.title}
                />
              </div>
              {detail['cardId'] ? (
                <div className={styles.findHuman}>
                  <div className={styles.title}>
                    <b>姓名：</b>
                    {detail.name}
                  </div>
                  <div className={styles.sex}>
                    <b>性别：</b>
                    {detail.sex === 1 ? '男' : '女'}
                  </div>
                  <div className={styles.cardId}>
                    <b>身份证号：</b>
                    {detail.cardId}
                  </div>
                  <div className={styles.lostDate}>
                    <b>走失时间：</b>
                    {YTD(detail.lostDate)}
                  </div>
                  <div className={styles.nativePlace}>
                    <b>籍贯：</b>
                    {detail.nativePlace}
                  </div>
                  <div className={styles.address}>
                    <b>地址：</b>
                    {detail.address}
                  </div>
                  <div className={styles.lostAddress}>
                    <b>走失地点：</b>
                    {detail.lostAddress}
                  </div>
                  <div className={styles.feature}>
                    <b>外貌描述：</b>
                    {detail.feature}
                  </div>
                </div>
              ) : (
                <div className={styles.lostAndFound}>
                  <div className={styles.title}>
                    <b>物品名称：</b>
                    {detail.title}
                  </div>
                  <div className={styles.type}>
                    <b>物品类型：</b>
                    {detail.type === 1 ? '失物' : '赃物'}
                  </div>
                  <div className={styles.isClaim}>
                    <b>认领状态：</b>
                    {detail.isClaim ? '已认领' : '未认领'}
                  </div>
                  <div className={styles.showTime}>
                    <b>发布时间：</b>
                    {YTD(detail.showTime) || YTD(detail.lostDate)}
                  </div>
                  <div className={styles.address}>
                    <b>认领地址：</b>
                    {detail.address}
                  </div>
                  <div className={styles.bak}>
                    <b>备注：</b>
                    {detail.memo}
                  </div>
                  <div className={styles.propertyNo}>
                    <b>失误编号：</b>
                    {detail.propertyNo || '无'}
                  </div>
                  <div className={styles.unit}>
                    <b>公告单位：</b>
                    {detail.unit}
                  </div>
                </div>
              )}
              <Button onClick={this.contact} type="primary">
                联系我们
              </Button>
            </div>
          ) : (
            <Loading />
          )}
        </Scroll>
      </div>
    )
  }

  componentDidMount() {
    this.getDetail()
  }

  getDetail() {
    const code = this.props.match.params.id
    const type = sessionStorage.getItem('type')
    getDetail(code, type).then(res => {
      if (res.code === 200) {
        this.setState({
          detail: res.data
        })
      }
    })
  }

  contact() {
    console.log('193312312')
  }
}
