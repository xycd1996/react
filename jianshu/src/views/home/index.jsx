import React, { Component } from 'react'
import Header from '../../components/header'
import Banner from '../../components/banner'

import './style.sass'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgList: [
        require('../../static/images/banner_1.png'),
        require('../../static/images/banner_2.jpg'),
        require('../../static/images/banner_3.jpg'),
        require('../../static/images/banner_4.jpg'),
        require('../../static/images/banner_5.jpg')
      ],
      rollingTime: 3000,
      show: true
    }
  }

  render() {
    return (
      <div className='home'>
        <Header />
        <div className='content-container'>
          <div className='content-left'>
            <Banner
              imgList={this.state.imgList}
              rollingTime={this.state.rollingTime}
            />
          </div>
          <div className='content-right' />
        </div>
      </div>
    )
  }
}
