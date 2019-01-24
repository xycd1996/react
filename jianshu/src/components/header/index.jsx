import React, { Component } from 'react'
import Search from '../search'

import './style.sass'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <a href='/' className='logo'>
            <img
              src={require('../../static/images/logo.png')}
              height='56'
              alt='简书'
            />
          </a>
          <div className='middle'>
            <ul>
              <li className='index'>
                <i className='icon-compass2' />
                首页
              </li>
              <li className='download'>
                <i className='icon-mobile' />
                下载APP
              </li>
              <li className='search'>
                <Search />
              </li>
            </ul>
          </div>
          <div className='right'>
            <ul>
              <li className='font-style'>
                <i className='icon-font-size' />
              </li>
              <li className='login'>登录</li>
              <li className='register'>注册</li>
              <li className='write'>写文章</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
