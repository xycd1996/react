import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import { Route, Link } from 'react-router-dom'
import './PcHeader.styl'

export default class PcHeader extends Component {
  constructor() {
    super()
    this.state = {
      current: 'top'
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={require('./logo.png')} alt="logo" />
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore" theme="filled" />头条
              </Menu.Item>
              <Menu.Item key="society">
                <Icon type="appstore" theme="filled" />社会
              </Menu.Item>
              <Menu.Item key="domestic">
                <Icon type="appstore" theme="filled" />国内
              </Menu.Item>
              <Menu.Item key="international">
                <Icon type="appstore" theme="filled" />国际
              </Menu.Item>
              <Menu.Item key="entertainment">
                <Icon type="appstore" theme="filled" />娱乐
              </Menu.Item>
              <Menu.Item key="Sports">
                <Icon type="appstore" theme="filled" />体育
              </Menu.Item>
              <Menu.Item key="technology">
                <Icon type="appstore" theme="filled" />科技
              </Menu.Item>
              <Menu.Item key="fashion">
                <Icon type="appstore" theme="filled" />时尚
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    )
  }
}
