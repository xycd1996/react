import React, { Component } from 'react'

import './style.sass'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusShow: false
    }
    this.SearchOnBlur = this.SearchOnBlur.bind(this)
    this.SearchOnFocus = this.SearchOnFocus.bind(this)
  }

  render() {
    const { focusShow } = this.state
    return (
      <div className='nav-search'>
        <input
          className={focusShow ? 'search-input focus-show' : 'search-input'}
          onBlur={this.SearchOnBlur}
          onFocus={this.SearchOnFocus}
          type='text'
          placeholder='搜索'
        />
        <i className={focusShow ? 'icon-search focus-show' : 'icon-search'} />
      </div>
    )
  }

  // 获取焦点
  SearchOnFocus(e) {
    this.setState(() => ({
      focusShow: true
    }))
  }

  // 失去焦点
  SearchOnBlur(e) {
    this.setState(() => ({
      focusShow: false
    }))
  }
}
