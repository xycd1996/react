import React, { Component } from 'react'
import { Button, WhiteSpace, Modal } from 'antd-mobile'
import { Icon } from 'antd'

import styles from './register.module.sass'

export default class register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
    this.toRecord = this.toRecord.bind(this)
    this.toForm = this.toForm.bind(this)
  }
  render() {
    return (
      <div className={styles.register}>
        <div className={styles.title}>网络借贷平台投资人登记</div>
        <div className={styles.entry}>
          <Button onClick={this.toForm} type="warning">
            开始登记
          </Button>
          <WhiteSpace />
          <Button onClick={this.toRecord} type="primary">
            登记记录
          </Button>
        </div>
        <Modal
          visible={this.state.modal}
          transparent
          title="登记须知"
          footer={[
            {
              text: '我已阅读并同意',
              onPress: () => {
                this.props.history.push('./form')
              }
            }
          ]}
          style={{ width: '80vw' }}
        >
          <div>
            <Icon
              type="info-circle"
              theme="twoTone"
              style={{ marginRight: 4 }}
            />
            本平台为投资人信息登记平台，平台会根据投资人提供的情况进行登记并统计;
            <WhiteSpace size="lg" />
            <Icon
              type="info-circle"
              theme="twoTone"
              style={{ marginRight: 4 }}
            />
            投资人须进行实名登记，对于登记的内容应如实填写，有意作伪证或者隐匿证据应负相应的法律责任并视为放弃报案资格;
            <WhiteSpace size="lg" />
            <Icon
              type="info-circle"
              theme="twoTone"
              style={{ marginRight: 4 }}
            />
            填报金额数据时须准确真实，和后台数据一致将予以认可，否则将不予采信。
          </div>
        </Modal>
      </div>
    )
  }

  toRecord() {
    this.props.history.push('./record')
  }

  toForm() {
    this.setState({
      modal: true
    })
  }
}
