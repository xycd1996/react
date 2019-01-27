import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.sass'

export default class MoreButton extends Component {
  render() {
    const { buttonName } = this.props
    return (
      <div className='more-button'>
        <button>{buttonName}</button>
      </div>
    )
  }
}

MoreButton.propTypes = {
  buttonName: PropTypes.string
}
MoreButton.defaultProps = {
  buttonName: '加载更多'
}
