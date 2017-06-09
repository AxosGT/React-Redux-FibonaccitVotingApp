import { combineReducers } from 'redux'
import vote from './setVote'
import logInFB from './logInFB'
import pageView from './pageView'

const setVoteApp = combineReducers({
  vote,
  logInFB,
  pageView
})

export default setVoteApp
