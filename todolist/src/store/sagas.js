import { takeEvery, put } from 'redux-saga/effects'
import * as types from './action_types'
import { TodoList } from '../api/todoList'
import * as actions from './actions'

function* getTodoList() {
  const data = yield TodoList()
  yield put(actions.InitListValue(data))
}

function* todoSaga() {
  yield takeEvery(types.GET_TODO_LIST, getTodoList)
}

export default todoSaga
