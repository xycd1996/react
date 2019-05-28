import React, { Component } from 'react'
import styles from './news-detail.module.sass'
import { getDetail } from '@api/news'
import Scroll from '../scroll/scroll'
import Loading from '../loading/loading'

const TYPE = 1

export default class NewDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: {}
    }
  }

  render() {
    const { detail } = this.state
    return (
      <div className={styles.newsDetail}>
        <Scroll bounce={false}>
          {detail['code'] ? (
            <div className={styles.container}>
              <div className={styles.title}>{detail.title}</div>
              <div className={styles.extTime}>{`${
                detail.extTime
              } 杭州公安`}</div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: detail.content }}
              />
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
    console.log(this.props)
    getDetail(code, TYPE).then(res => {
      if (res.code === 200) {
        this.setState({
          detail: res.data
        })
      }
    })
  }
}
