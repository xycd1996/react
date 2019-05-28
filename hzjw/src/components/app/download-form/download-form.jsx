import React, { Component } from 'react'
import { Button, Modal, WingBlank, Toast } from 'antd-mobile'
import PropTypes from 'prop-types'

export default class DownloadForm extends Component {
  static propTypes = {
    downloadAddress: PropTypes.string,
    modal: PropTypes.bool,
    closeModal: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.downloadLocal = this.downloadLocal.bind(this)
  }

  render() {
    const { downloadAddress, modal, closeModal } = this.props
    return (
      <div>
        <Modal
          maskClosable
          closable
          transparent
          title={'表格下载地址'}
          visible={modal}
          onClose={closeModal}
          style={{ width: '80vw' }}
        >
          <div style={{ wordWrap: 'break-word' }}>
            <p
              style={{
                color: '#EE4000',
                borderTop: '1px dashed #000',
                borderBottom: '1px dashed #000'
              }}
            >
              <i id="content">{downloadAddress}</i>
            </p>
            <p>将表格进行打印寄送至提示专案组</p>
            <p>
              因iPhone手机和部分Android手机无法直接将文件下载到本地的缘故，提供以下两种方案
            </p>
            <p>1、点击“下载到本地”直接下载文件到手机</p>
            <p>
              2、点击“复制链接”复制下载链接粘贴至微信或QQ，通过电脑浏览器输入链接进行下载
            </p>
            <div style={{ display: 'flex' }}>
              <Button
                onClick={this.downloadLocal}
                type="primary"
                size="small"
                style={{ flex: '1 1 auto' }}
              >
                下载到本地
              </Button>
              <WingBlank />
              <Button
                onClick={this.copyAddress}
                type="warning"
                size="small"
                style={{ flex: '1 1 auto' }}
              >
                复制链接
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }

  copyAddress() {
    const range = document.createRange()
    range.selectNode(document.getElementById('content'))
    const selection = window.getSelection()
    if (selection.rangeCount > 0) selection.removeAllRanges()
    selection.addRange(range)
    document.execCommand('copy')
    Toast.info('复制成功！')
  }

  downloadLocal() {
    window.location.href = this.props.downloadAddress
  }
}
