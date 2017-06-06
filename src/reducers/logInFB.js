import {LOGINFB} from '../actions/index'
import {fb, logInFBGoogle} from '../myFireBase';


//fb.auth().currentUser.displayName

function logInFB(state =  'No user loged in', action){
  switch (action.type) {
    case LOGINFB:
      return action.actUser
    default:
      return state
  }
}

export default logInFB
