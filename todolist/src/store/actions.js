import * as types from './action_types'
// import * as apis from '../api/todoList'

export const ChangeInputValue = inputVal => ({ type: types.CHANGE_INPUT_VALUE, inputVal })
export const AddListValue = () => ({ type: types.ADD_LIST_VALUE })
export const DeleteListValue = index => ({ type: types.DELETE_LIST_ITEM, index })
export const InitListValue = list => ({ type: types.INIT_LIST_VALUE, list })
export const GetTodoList = () => ({
  // return async (dispatch) => {
  //   let data = await apis.TodoList()
  //   console.log(data)
  //   dispatch(InitListValue(data))
  // }
  // redux-thunk写法,将action写入一个函数
  type: types.GET_TODO_LIST
})  
