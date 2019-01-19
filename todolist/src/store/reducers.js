import * as types from './action_types'

const defaultState = {
  inputVal: '123',
  list: []
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case types.CHANGE_INPUT_VALUE:
      newState.inputVal = action.inputVal
      break
    case types.ADD_LIST_VALUE:
      newState.list.push(newState.inputVal)
      newState.inputVal = ''
      break
    case types.DELETE_LIST_ITEM:
      newState.list.splice(action.index, 1)
      break
    case types.INIT_LIST_VALUE:
      newState.list = action.list
      break
    default:
      break
  }
  return newState
}
