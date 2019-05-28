import * as types from './action_types'

const defaultState = {
  actId: ''
}

export default (state = defaultState, action) => {
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case types.SET_ACT_ID:
      newState.actId = action.actId
      break;
    default:
      break;
  }
  return newState
}