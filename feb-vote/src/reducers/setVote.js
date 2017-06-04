import { combineReducers } from 'redux'
import {VOTE} from '../actions/index'

function vote(state = 'home', action){
  switch (action.type) {
    case VOTE:
      return action.intVote
    default:
      return state
  }
}

export default vote
