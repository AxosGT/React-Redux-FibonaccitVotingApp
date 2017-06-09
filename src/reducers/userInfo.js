import { USERINFO } from '../actions/index'

function userInfo(state = 0, action){
  switch (action.type) {
    case USERINFO:
      return action
    default:
      return state
  }
}

export default userInfo
