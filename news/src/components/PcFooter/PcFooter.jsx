import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './PcFooter.styl'

export default class PcFooter extends Component {
  render() {
    return (
      <div className="pc-footer">
        <footer>
          <Row>
            <Col span={2}></Col>
            <Col span={20} className="footer">
              &copy;&nbsp;2016 ReactNews. All Rights Reserved.
            </Col>
            <Col span={2}></Col>
          </Row>
        </footer>
      </div>
    )
  }
}
