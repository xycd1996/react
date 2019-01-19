import React, { Component, Fragment } from 'react'
import TodoItem from '../components/TodoItem'
import * as actions from '../store/actions'
import store from '../store'
import './style.css'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
    // store数据每次发生改变时都会触发
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            id='est'
            type='text'
            value={this.state.inputVal}
            onChange={this.handleInputChange}
            ref={input => (this.input = input)}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={ul => (this.ul = ul)}>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                key={`${item}${index}`}
                itemData={item}
                index={index}
                deleteItem={this.handleListDelete()}
              />
            )
          })}
        </ul>
      </Fragment>
    )
  }

  async componentDidMount() {
    store.dispatch(actions.GetTodoList())
    // let result = await axios({
    //   method: 'GET',
    //   url: '/api/todolist'
    // })
    // this.setState(() => {
    //   let list = [...result.data]
    //   return { list }
    // })
  }

  handleInputChange = e => {
    const value = e.target.value
    // const value = this.input.value
    store.dispatch(actions.ChangeInputValue(value))
  }

  handleBtnClick = () => {
    store.dispatch(actions.AddListValue())
    // this.setState((oldState) => ({
    //   list: [...oldState.list, oldState.inputVal],
    //   inputVal: ''
    // }), () => {
    //   // 由于setState为异步函数，因此内部提供了异步回调函数，在此函数内运行，则是setState 成功渲染Dom后的结果
    //   console.log(this.ul.querySelectorAll('li').length)
    // })
  }

  handleListDelete = () => index => {
    // setState为异步函数
    // this.setState((oldState) => {
    //   const list = [...oldState.list]
    //   list.splice(index, 1)
    //   return { list }
    // })
    store.dispatch(actions.DeleteListValue(index))
  }

  styleChange = () => {
    this.setState(oldState => ({ show: !oldState.show }))
    console.log(this.state.show)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }
}
