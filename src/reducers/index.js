import { combineReducers } from 'redux'
import vote from './setVote'
import logInFB from './logInFB'

const setVoteApp = combineReducers({
  vote,
  logInFB
})

export default setVoteApp
