import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {

  render() {
    const { itemData, test } = this.props
    return (
      <Fragment>
        <li onClick={this.handleDelete}> {itemData} - {test} </li>
      </Fragment>
    )
  }

  handleDelete = () => {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  shouldComponentUpdate(newProps, newState) {
    if (newProps.itemData === this.props.itemData) {
      return false
    } else {
      return true
    }
  }
}

TodoItem.propTypes = {
  itemData: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}
