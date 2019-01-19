import React, { Component } from 'react'
import TodoList from './views/TodoList'
import TodoList2 from './views/TodoList_2'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoList />
        <TodoList2 />
      </div>
    )
  }
}

export default App
