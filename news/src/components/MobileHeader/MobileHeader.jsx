import React, { Component } from 'react'
import './MobileHeader.styl'

export default class MobileHeader extends Component {
  render() {
    return (
      <div id="mobile-header">
        <header>
          <img src={require('./logo.png')} alt="logo" />
          <span>ReactNews</span>
        </header>
      </div>
    )
  }
}
