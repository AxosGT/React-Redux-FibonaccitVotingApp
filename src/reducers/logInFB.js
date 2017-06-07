import {LOGINFB} from '../actions/index'
//import {fb, logInFBGoogle} from '../myFireBase';

function logInFB(state =  'No user loged in', action){
  switch (action.type) {
    case LOGINFB:
      return ({
      email: action.actUser})
    default:
      return state
  }
}

export default logInFB
