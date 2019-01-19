// 容器组件

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

const TodoList2 = props => {
  return (
    <Fragment>
      <div>
        <input
          value={props.inputValue}
          onChange={props.handleInputChange}
          type='text'
        />
        <button onClick={props.handleAddValue}>提交</button>
      </div>
      <ul>
        {props.list.map((item, index) => {
          return (
            <li
              onClick={() => props.handleDeleteItem(index)}
              key={`${item}-${index}`}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  inputValue: state.inputVal,
  list: state.list
})

const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      dispatch(actions.ChangeInputValue(e.target.value))
    },
    handleAddValue() {
      dispatch(actions.AddListValue())
    },
    handleDeleteItem(index) {
      dispatch(actions.DeleteListValue(index))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList2)
