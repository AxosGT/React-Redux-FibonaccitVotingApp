import { combineReducers } from 'redux'
import userInfo from './userInfo'
import pageView from './pageView'

const setVoteApp = combineReducers({
  userInfo,
  pageView
})

export default setVoteApp
