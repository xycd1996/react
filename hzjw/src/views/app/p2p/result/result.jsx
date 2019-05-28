import React, { Component } from 'react'
import { Result, Icon, Button, WingBlank, WhiteSpace } from 'antd-mobile'
import Scroll from '@components/app/scroll/scroll'
import DownloadForm from '@components/app/download-form/download-form'

export default class result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultData: {},
      modal: false,
      downloadAddress: ''
    }
    this.backIndex = this.backIndex.bind(this)
    this.downloadForm = this.downloadForm.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  render() {
    const { resultData, modal, downloadAddress } = this.state
    return (
      <div>
        <Scroll>
          <Result
            img={
              <Icon
                type="check-circle"
                className="spe"
                style={{ fill: '#66CD00', width: '60px', height: '60px' }}
              />
            }
            title="提交成功"
            message={
              <div style={{ textAlign: 'left', marginTop: '40px' }}>
                <div dangerouslySetInnerHTML={{ __html: resultData.content }} />
              </div>
            }
          />
          <WingBlank>
            <Button onClick={this.downloadForm} type="primary">
              下载登记表格
            </Button>
            <WhiteSpace />
            <Button onClick={this.backIndex} type="warning">
              返回登记首页
            </Button>
            <WhiteSpace />
          </WingBlank>
        </Scroll>
        <DownloadForm
          downloadAddress={downloadAddress}
          modal={modal}
          closeModal={this.closeModal}
        />
      </div>
    )
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push('./register')
      return
    }
    const resultData = this.props.location.state
    this.setState({
      resultData
    })
  }

  downloadForm() {
    let query = {
      actId: sessionStorage.accId,
      data: this.state.resultData.id
    }
    const params = escape(JSON.stringify(query))
    let downloadAddress = ''
    if (process.env.NODE_ENV === 'production') {
      downloadAddress = `http://120.26.199.4:8080/hzjwztc/api/p2p/download.action?query=${params}`
    } else {
      downloadAddress = `http://192.168.2.104:8080/hzjwztc/api/p2p/download.action?query=${params}`
    }
    this.setState({
      downloadAddress,
      modal: true
    })
  }

  backIndex() {
    this.props.history.push('./register')
  }

  closeModal() {
    this.setState({
      modal: false
    })
  }
}
